
import { getLocalStorage, setLocalStorage } from "./LocalStorage.js"
import { endVariant } from "./EndVariant.js"
import { addZero } from "./OtherFunctions.js"


function timeToArray(time){ // Функция для времени №1    '4:30:20 12 Февраля 2023' --> [4, 30, 20]
    const timeArray = time.split(':')
    
    return [+timeArray[0], +timeArray[1], +timeArray[2]]
}



function deadLine(time, minute, second){ // Функция для времени №2    '23:40:20 12 Февраля 2023' --> '00:10:20'
    const hoursMinuteSecondArray = timeToArray(time)
    const hoursDeadLine = addZero((hoursMinuteSecondArray[0] + +(hoursMinuteSecondArray[1] >= (60 - minute))) % 24)
    const minuteDeadLine = addZero((hoursMinuteSecondArray[1] + minute + +(hoursMinuteSecondArray[2] >= (60 - second))) % 60)
    const secondDeadLine = addZero((hoursMinuteSecondArray[2] + second) % 60)
    return `${hoursDeadLine}:${minuteDeadLine}:${secondDeadLine}`
}




function titleTime(thisTime, deadLine){ // Обратный отсчет времени     ('23:58:04', '00:03:50') --> '00:05:46'
    thisTime = thisTime.split(':') // Текущее время
    deadLine = deadLine.split(':') // DeadLine

    if (+thisTime[0] > +deadLine[0]) deadLine[0] = String(+deadLine[0] + 24) // Для случая с 23 и 00

    if (+`${thisTime[0]}${thisTime[1]}${thisTime[2]}` >= +`${deadLine[0]}${deadLine[1]}${deadLine[2]}`) return `00:00`
    
    const secondLeft = (+deadLine[0] - +thisTime[0]) * 3600 + (+deadLine[1] - +thisTime[1]) * 60 + (+deadLine[2] - +thisTime[2]) * 1 // Кол-во секунд

    const result = `${addZero(parseInt(secondLeft / 3600))}:${addZero(parseInt(secondLeft / 60) % 60)}:${addZero(secondLeft % 60)}` // Результат
    return result 
}



function timeForSolution(thisTime, startTime){ // Время решения варианта 1:01 --> 4:56
    return titleTime(startTime, thisTime)
}



function deadLineNew(){ // Прошел ли дедлайн?   Если прошел, то true   Если еще нет, то false
    let thisTime = getTime('full') // Текущее время
    let deadLine = getLocalStorage('deadLine') // DeadLine

    thisTime = +thisTime.replaceAll(':', '')
    deadLine = +deadLine.replaceAll(':', '')
    if (deadLine < 10000 && thisTime > 10000) deadLine += 240000 // Случай с 23 и 00
    return deadLine - thisTime <= 0 || deadLine - thisTime >= 110000 // Если разность <= 0 или >= 110_000 --> время вышло
}


function time(allProblemsMain, arrayCountProblem, isVariant){ // Глобальная функция времени (variant)

    const timePlace = document.querySelector('.time1') // "Место времени"
    const title = document.querySelector('.titleVariant') // "Верхняя надпись"
    const timeFull = getTime('full') // Определяем текущее время
    
    // (Если нет deadLine или againVariant === afk) И вариант НЕ в просмотре, ставим новый deadLine и afk ==> deadLinePicked
    if ((!getLocalStorage('deadLine') || getLocalStorage('againVariant') === 'afk') && getLocalStorage('fromStats') !== 0.5){
        setLocalStorage('deadLine', deadLine(timeFull, 30, 1))
        setLocalStorage('againVariant', 'deadLinePicked')
    }

    setInterval(() => { // setInterval раз в секунду
        const deadLine = getLocalStorage('deadLine') // Текущий deadLine
        if (getLocalStorage('againVariant') === 'deadLinePicked'){ // Если сейчас идет вариант (если нет, то "afk")
            title.innerHTML = 'Вариант: ' + titleTime(getTime('full'), deadLine) + ' осталось' // устанавливаем "верхнюю надпись"
            timePlace.innerHTML = `<span class='w900'>${titleTime(getTime('full'), deadLine)} </span> осталось`
        }
            
        // Конец дедлайна
        // 1 условие - если просмотр варианта; 2 условие - если закончился дедлайн; 3 условие - чтоб вызвался 1 раз
        if (!getLocalStorage('fromStats') && deadLineNew() && getLocalStorage('againVariant') !== 'afk'){
            endVariant(allProblemsMain, arrayCountProblem, isVariant) // Конец варианта
            title.innerHTML = 'Время вышло!' // Заголовок = 'Время вышло!'
        }
    }, 1000)
}



function getTime(value) { // Возвращение времени
    const date = new Date()

    if (value === 's') return addZero(date.getSeconds())
    else if (value === 'm') return addZero(date.getMinutes())
    else if (value === 'h') return addZero(date.getHours())
    else if (value === 'd') return addZero(date.getDate())
    else if (value === 'mo') return date.getMonth()
    else if (value === 'y') return addZero(date.getFullYear())
    else if (value === 'full') return `${getTime('h')}:${getTime('m')}:${getTime('s')}`
}



export {deadLine, timeForSolution, timeToArray, titleTime, deadLineNew, time, getTime}