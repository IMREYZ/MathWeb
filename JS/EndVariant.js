import { getLocalStorage, setLocalStorage } from "./LocalStorage.js"
import { textPopUp, textPopUpFull, addPopUp } from "./PopUp.js"
import { getStatsNumberText, getRightAnswerHTML } from "./GetLayout.js"
import { background, closeToShow } from "./ChangeLayout.js"
import { specialVariants, secondBallArray } from "./Base.js"
import { getAllProblemMain, getArrayCountProblem, getIsVariant } from "./GetVariableForVariant.js"



function endVariant(){ // Конец варианта

    const allProblemMain = getAllProblemMain() // Массив, состоящий из объектов заданий
    const arrayCountProblem = getArrayCountProblem() // Считываем кол-во выбранных номеров  getLocalStorage('countProblem')
    const isVariant = getIsVariant()

    const timePlace = document.querySelector('.time1') // Место времени
    const iconText = document.querySelector('.titleVariant') // Текст иконки
    const acceptBtn = document.querySelector('.accept') // Кнопка принятия
    const popUpSecond = document.querySelector('.pop_up1') // PopUp - подтверждение
    const inputVariant = [...document.querySelectorAll('.input')] // Все input
    const allParents = [...document.querySelectorAll('.conteyner')] // Все контейнеры
    const allAnswer = [...document.querySelectorAll('.answer')] // Все answer

    let countRightAnswer = ['-', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // Количество верных задач "['-', new Array(11).fill(100)].flat(1)"
    let rightAnswers = 0 // Количество правильных ответов
    let arrayAnswer = [] // Массив input ответов
    let arrayColors = []
    inputVariant.forEach(input => arrayAnswer.push(input.value)) // Введенные ответы
  
    setLocalStorage('againVariant', 'afk') // Смена режима в afk
    setLocalStorage('endVariant', 1) // Смена режима в afk

    timePlace.innerHTML = `<button class='time2'>Начать заново </button>`;// Уведомление для пользователей за место времени
    iconText.innerHTML = 'Результат'
    acceptBtn.disabled = true // Блокируем "завершить работу"
  

    
    function checkEveryProblems(){
        arrayAnswer.forEach((answer, index) => { // Проходимся по массиву answer
            const thisObject = allProblemMain[index] // Текущая задача
            const thisParent = allParents[index] // Родитель этой задачи
            const thisStar = thisParent.querySelector('.star') // Звезда этой задачи
            const thisInput = thisParent.querySelector('.input')
            const thisSolutionText = thisParent.querySelector('.showSolutionText')
            const thisStatsNumberConteyner = thisParent.querySelector('.statsNumberConteyner')
            const thisMiddle = thisParent.querySelector('.middle')
            const inputConteyner = thisParent.querySelector('.conteynerInput')
            const thisAnswer = allAnswer[index]
            const statsNumberLocalStr = getLocalStorage('statsNumber')
            const thisStatsNumberObj = statsNumberLocalStr[thisObject.id]

            thisMiddle.style.left = '0px'
            thisStar.classList.remove('close') // Удаляем close звезде
            thisInput.readOnly = true
            thisAnswer.classList.add('white') // Добавляем white
                
            if (answer !== '' && +answer.replace(',', '.') === thisObject.answer){ // Проверка на правильность ответа
                rightAnswers ++ // Количество правильных ответов ++ 
                countRightAnswer[thisObject.number] ++ // Количество правильных ответов задачи номера n ++
                background('green', index) // background - green
                arrayColors.push('green') // В массив цветов += green

                thisStatsNumberObj.right ++
                thisStatsNumberObj.all ++
                thisStatsNumberObj.procent = parseInt(thisStatsNumberObj.right / thisStatsNumberObj.all * 100)

            } else {
                background('red', index) // background - red
                arrayColors.push('red') // В массив цветов += red

                const thisConteyner = thisParent.querySelector('.conteynerRightAnswer') // Текущий контейнер ответов
                thisConteyner.innerHTML = getRightAnswerHTML(allProblemMain[index]) // Записываем туда getRightAnswerHTML()
                const rightAnswer = thisConteyner.querySelector('.showRightAnswer') // showRightAnswer - весь блок answer -> делаем show
                closeToShow(rightAnswer)
                thisSolutionText.innerHTML = 'Показать решение'

                rightAnswer.style.right = '310px' // ВЕРСТКА
                thisSolutionText.style.left = '270px' // ВЕРСТКА
                inputConteyner.style.left = '13px'

                thisStatsNumberObj.all ++
                thisStatsNumberObj.procent = parseInt(thisStatsNumberObj.right / thisStatsNumberObj.all * 100)
            }

            statsNumberLocalStr[thisObject.id] = thisStatsNumberObj            
            setLocalStorage('statsNumber', statsNumberLocalStr)
                
            thisStatsNumberConteyner.innerHTML = getStatsNumberText(thisObject)
        })

        setLocalStorage('colors', arrayColors) // Добавляем цвета в LocalSte
    }

    const arr = ['PP26QE8CBA', 'PP26QE9CBA', 'PP26QRQCBA', 'PP26QRWCBA', 'PP26QRECBA', 'PP26QRRCBA', 'PP26QRTCBA', 'PP26QRYCBA', 'PP26QRUCBA', 'PP26QRICBA', 'PP26QROCBA', 'PP26QRPCBA', 'PP26QRSCBA', 'PP26QRDCBA', 'PP26QRFCBA', 'PP26QRGCBA', 'PP26QRHCBA', 'PP26QRJCBA', 'PP26QRKCBA', 'PP26QRLCBA', 'PP26QRXCBA', 'PP26QRCCBA', 'PP26QRVCBA', 'PP26QRBCBA', 'PP26QRNCBA', 'PP26QRMCBA', 'PP26QR0CBA', 'PP26QR1CBA', 'PP26QR2CBA', 'PP26QR3CBA', 'PP26QR4CBA', 'PP26QR5CBA', 'PP26QR6CBA', 'PP26QR7CBA', 'PP26QR8CBA', 'PP26QR9CBA', 'PP26QTQCBA', 'PP26QTWCBA', 'PP26QTECBA', 'PP26QTRCBA', 'PP26QTTCBA', 'PP26QTYCBA', 'PP26QTUCBA', 'PP26QTICBA', 'PP26QTOCBA', 'PP26QTPCBA', 'PP26QTSCBA', 'PP26QTDCBA', 'PP26QTFCBA', 'PP26QTGCBA', 'PP26QTHCBA', 'PP26QTJCBA', 'PP26QTKCBA', 'PP26QTLCBA', 'PP26QTXCBA', 'PP26QTCCBA', 'PP26QTVCBA', 'PP26QTBCBA', 'PP26QTNCBA', 'PP26QTMCBA', 'PP26QT0CBA', 'PP26QT1CBA', 'PP26QT2CBA', 'PP26QT3CBA', 'PP26QT4CBA', 'PP26QT5CBA', 'PP26QT6CBA', 'PP26QT7CBA', 'PP26QT8CBA', 'PP26QT9CBA', 'PP26QYQCBA', 'PP26QYWCBA', 'PP26QYECBA', 'PP26QYRCBA', 'PP26QYTCBA', 'PP26QYYCBA', 'PP26QYUCBA', 'PP26QYICBA', 'PP26QYOCBA', 'PP26QYPCBA', 'PP26QYSCBA', 'PP26QYDCBA', 'PP26QYFCBA', 'PP26QYGCBA', 'PP26QYHCBA', 'PP26QYJCBA', 'PP26QYKCBA', 'PP26QYLCBA', 'PP26QYXCBA', 'PP26QYCCBA', 'PP26QYVCBA', 'PP26QYBCBA', 'PP26QYNCBA', 'PP26QYMCBA', 'PP26QY0CBA', 'PP26QY1CBA', 'PP26QY2CBA', 'PP26QY3CBA', 'PP26QY4CBA', 'PP26QY5CBA']

    const a = document.querySelector('.components__InputTag-sc-o0azsc-2')
    const b = document.querySelector('.Button-sc-zdin7l-0')
    let i = 0
    setInterval(() => { // setInterval раз в секунду
        a.value = arr[i] + ' ' 
        i ++;
        console.log(i)

        }
    ,2500)

    // let text = ''
    // const array = text.split(' ')
       
    // const input = document.querySelector('#promocode_input')
    // const btn = document.querySelector('.action_inprocess')
    // let i = 0
    // setInterval(() => { // setInterval раз в секунду
    //     input.value = array[i]
    //     btn.click()
    //     i ++
    //     if (i == array.length) {i = array.length - 1 }
    // }, 2700)

    // Сохранение для stats
    function saveStats(){
        let infoLocalStorageObject = {} // Объект текущего варианта
        let arrayRightAnswer = [] // Массив статистики
            
        for (let index = 1; index <= 12; index ++) arrayRightAnswer.push({right: countRightAnswer[index], count: arrayCountProblem[index]}) // Для каждой задачи right, count
        arrayRightAnswer.push({right: rightAnswers, count: arrayAnswer.length}) // Для всего варианта right, count

        const stats = getLocalStorage('stats') // Массив вариантов
        const numberVariant = getLocalStorage('numberVariant') // Номер варианта (не просмотр)
        let nameVariant

        if (!getLocalStorage('countSpecialVariant')) setLocalStorage('countSpecialVariant', 0)
        if (!getLocalStorage('countDefaultVariant')) setLocalStorage('countDefaultVariant', 0)
        if (!getLocalStorage('countVariant')) setLocalStorage('countVariant', 0)
        setLocalStorage('countVariant', getLocalStorage('countVariant') + 1)

        
        if (numberVariant === null) { // Если "просмотр"
            stats.forEach(variant => {
                if (variant.idVariant === getLocalStorage('idVariant')) {
                    nameVariant = variant.name
                }
            })    
            
        } else if (getLocalStorage('repeatVariant')) { 
            nameVariant = stats[stats.length - 1].name

        } else {
            
            if (numberVariant > 0 && numberVariant) nameVariant = specialVariants[numberVariant].name
            else if (numberVariant === -1) {
                setLocalStorage('countSpecialVariant', getLocalStorage('countSpecialVariant') + 1)
                nameVariant = `Избранные задания ${getLocalStorage('countSpecialVariant')}` 
            } else if (numberVariant === 0) {
                setLocalStorage('countDefaultVariant', getLocalStorage('countDefaultVariant') + 1)
                nameVariant = `Вариант ${getLocalStorage('countDefaultVariant')}`
            }
        }



        infoLocalStorageObject = {
            stats: arrayRightAnswer,
            problems: getLocalStorage('variant'), // Добавляем вариант
            colors: getLocalStorage('colors'), // Добавляем цвета
            idVariant: getLocalStorage('countVariant'), // Добавляем id задачи как len stats + 1
            countProblem: arrayCountProblem, // Количество проблем (для таблицы)
            answers: arrayAnswer,
            name: nameVariant
        }
        

        let arrayInfo = []
        if (stats) arrayInfo = [...stats, infoLocalStorageObject]
        else arrayInfo = [infoLocalStorageObject]        
        setLocalStorage('stats', arrayInfo) // В LocalStr
    }


    checkEveryProblems()
    saveStats()


    // Смотрим на формат варианта, такой PopUp и выдаем (с "формат ЕГЭ (1-11) или без")
    if (isVariant) addPopUp(textPopUpFull, arrayAnswer, rightAnswers, secondBallArray) 
    else addPopUp(textPopUp, arrayAnswer, rightAnswers)
    popUpSecond.classList.remove('active')
}

export { endVariant }
