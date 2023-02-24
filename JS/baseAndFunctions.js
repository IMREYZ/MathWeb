// Объекты - задачи
const allProblems = 
[
    {problem: '1.1', answer: 102, procent: 15},
    {problem: '1.2', answer: 0.9, procent: 35},
    {problem: '1.3', answer: 128, procent: 25},
    {problem: '1.4', answer: 62, procent: 30},
    {problem: '1.5', answer: 73, procent: 50},
    {problem: '1.6', answer: 18, procent: 20},
    {problem: '1.7', answer: 4.5, procent: 35},
    {problem: '1.8', answer: 6, procent: 40},
    {problem: '1.9', answer: 38, procent: 35},
    {problem: '1.10', answer: 71, procent: 30},
    {problem: '1.11', answer: 36, procent: 35},
    {problem: '1.12', answer: 3, procent: 80},
    {problem: '1.13', answer: 7, procent: 40},
    {problem: '1.14', answer: 93, procent: 30},
    {problem: '1.15', answer: 45, procent: 50},
    {problem: '1.16', answer: 13, procent: 45},
    {problem: '1.17', answer: 59, procent: 55},
    {problem: '1.18', answer: 72, procent: 45},
    {problem: '1.19', answer: 35, procent: 45},
    {problem: '1.20', answer: 30, procent: 35},
    {problem: '1.21', answer: 0.6, procent: 30},
    {problem: '1.22', answer: 25, procent: 60},
    {problem: '1.23', answer: 1, procent: 25},
    {problem: '1.24', answer: 24, procent: 40},
    {problem: '1.25', answer: 64, procent: 30},
    {problem: '1.26', answer: 119, procent: 60},
    {problem: '1.27', answer: 3, procent: 30},
    {problem: '1.28', answer: 2, procent: 70},
    {problem: '1.29', answer: 130, procent: 65},
    {problem: '1.30', answer: 5, procent: 30},
    {problem: '2.1', answer: 75, procent: 25},
    {problem: '3.1', answer: 0.6, procent: 30},
    {problem: '4.1', answer: 0.9975, procent: 60},
    {problem: '5.1', answer: 21, procent: 25},
    {problem: '6.1', answer: 5, procent: 20},
    {problem: '7.1', answer: 2, procent: 20},
    {problem: '8.1', answer: 5000, procent: 50},
    {problem: '9.1', answer: 10, procent: 25},
    {problem: '10.1', answer: 26, procent: 35},
    {problem: '11.1', answer: -6, procent: 25},
    {problem: '2.2', answer: 24, procent: 40},
    {problem: '2.3', answer: 1500, procent: 35},
    {problem: '2.4', answer: 5, procent: 65},
    {problem: '2.5', answer: 9, procent: 55},
    {problem: '2.6', answer: 12, procent: 50},
    {problem: '2.7', answer: 12, procent: 60},
    {problem: '2.8', answer: 3, procent: 30},
    {problem: '3.2', answer: 0.25, procent: 20},
    {problem: '3.3', answer: 0.32, procent: 35},
    {problem: '3.4', answer: 0.2, procent: 20},
    {problem: '3.5', answer: 0.04, procent: 50},
    {problem: '3.6', answer: 0.19, procent: 15},
    {problem: '3.7', answer: 0.3, procent: 30},
    {problem: '3.8', answer: 0.22, procent: 60},
    {problem: '3.9', answer: 0.36, procent: 25},
    {problem: '4.2', answer: 0.036, procent: 65},
    {problem: '4.3', answer: 0.9216, procent: 30},
    {problem: '1.31', answer: 18, procent: 90},
    {problem: '5.2', answer: 3, procent: 15},
    {problem: '5.3', answer: 5, procent: 40},
    {problem: '5.4', answer: 6, procent: 10},
    {problem: '5.5', answer: -42, procent: 40},
    {problem: '5.6', answer: 2, procent: 30},
    {problem: '5.7', answer: 6, procent: 50},
    {problem: '5.8', answer: -1, procent: 35},
    {problem: '5.9', answer: 3, procent: 30},
    {problem: '5.10', answer: 12.5, procent: 30},
    {problem: '5.11', answer: 8.75, procent: 30},
    {problem: '5.12', answer: 3, procent: 20},
    {problem: '5.13', answer: 31, procent: 30},
    {problem: '5.14', answer: 35, procent: 45},
    {problem: '5.15', answer: 6, procent: 75},
    {problem: '5.16', answer: -9, procent: 80},
    {problem: '10.2', answer: -15, procent: 55},
    {problem: '10.3', answer: -0.2, procent: 65},
    {problem: '10.4', answer: 0.15, procent: 50},
    {problem: '10.5', answer: 61, procent: 60},
    {problem: '10.6', answer: 5, procent: 65},
    {problem: '10.7', answer: -7, procent: 35},
    {problem: '10.8', answer: -11, procent: 45},
    {problem: '11.2', answer: 8, procent: 40},
    {problem: '11.3', answer: 10, procent: 65},
    {problem: '11.4', answer: -15, procent: 45},
    {problem: '11.5', answer: 10, procent: 50},
    {problem: '11.6', answer: 2, procent: 60},
    {problem: '11.7', answer: -4, procent: 60},
    {problem: '11.8', answer: 2, procent: 65},
    {problem: '11.9', answer: 20, procent: 20},
    {problem: '11.10', answer: 4, procent: 30},
    {problem: '11.11', answer: -4.5, procent: 55},
    {problem: '11.12', answer: -2.5, procent: 60},
    {problem: '11.13', answer: -6, procent: 60},
    {problem: '11.14', answer: 1, procent: 70},
    {problem: '11.15', answer: 1, procent: 70},
    {problem: '6.2', answer: 14, procent: 40},
    {problem: '9.2', answer: 15, procent: 80},
    {problem: '11.16', answer: 7.5, procent: 55},
    {problem: '2.9', answer: 72, procent: 30},
    {problem: '7.2', answer: 1.6, procent: 25},
    {problem: '3.10', answer: 0.85, procent: 30},
    {problem: '9.3', answer: 10, procent: 25},
    {problem: '7.3', answer: 4, procent: 35},
    {problem: '1.32', answer: 32, procent: 30},
    {problem: '5.17', answer: 5, procent: 20},
    {problem: '8.2', answer: 17, procent: 30},
    {problem: '3.11', answer: 0.2, procent: 40},
    {problem: '11.17', answer: 5, procent: 30},
    {problem: '9.4', answer: 19, procent: 30},
    {problem: '6.3', answer: 64, procent: 35},
    {problem: '6.4', answer: 27, procent: 25},
    {problem: '5.18', answer: 24, procent: 30},
    {problem: '7.4', answer: -7, procent: 40},
    {problem: '2.10', answer: 60, procent: 50},
    {problem: '3.12', answer: 0.35, procent: 20},
    {problem: '11.18', answer: -36, procent: 30},
    {problem: '11.19', answer: 3, procent: 60},
    {problem: '9.5', answer: 10, procent: 50},
    {problem: '6.5', answer: 0.84, procent: 65},
    {problem: '2.11', answer: 6, procent: 35},
    {problem: '7.5', answer: -1, procent: 55},
    {problem: '1.33', answer: 6, procent: 40},
    {problem: '5.19', answer: -9, procent: 30},
    {problem: '8.3', answer: 6, procent: 60},
    {problem: '9.6', answer: 18, procent: 70},
    {problem: '8.4', answer: 190, procent: 65},
    {problem: '6.6', answer: 1, procent: 60},
    {problem: '2.12', answer: 12, procent: 60},
    {problem: '7.6', answer: 2, procent: 30},
    {problem: '3.13', answer: 0.05, procent: 45},
    {problem: '9.7', answer: 20, procent: 60},
    {problem: '3.14', answer: 0.4, procent: 40},
    {problem: '7.7', answer: 4, procent: 25},
    {problem: '6.7', answer: 1.5, procent: 60},
    {problem: '11.20', answer: 10, procent: 35},
    {problem: '9.8', answer: 20, procent: 50},
    {problem: '8.5', answer: 45, procent: 45},
    {problem: '5.20', answer: 2, procent: 75},
    {problem: '3.15', answer: 0.92, procent: 35},
    {problem: '6.8', answer: -0.5, procent: 85},
    {problem: '7.8', answer: 5, procent: 40},
    {problem: '1.34', answer: 54, procent: 40},
    {problem: '5.21', answer: 1, procent: 40},
    {problem: '3.16', answer: 0.994, procent: 40},
    {problem: '9.9', answer: 55, procent: 70},
    {problem: '6.9', answer: 11, procent: 65},
    {problem: '2.13', answer: 60, procent: 30},
]   


// Все задания по номерам
let problems = ['-', [], [], [], [], [], [], [], [], [], [], []]


// Распределение по ключу number
allProblems.forEach(el => {
    const problemSplit = el.problem.split('.')
    el.id = +problemSplit[0] * 1000 + (+problemSplit[1])
    el.number = +problemSplit[0]

    problems[el.number].push(el)
})


// Время на задачу с каким-то номером
const timeOnProblem = {
    1: [1, 1], 2: [1, 21], 3: [0, 31], 4: [1, 31], 5: [0, 46], 6: [1, 11], 
    7: [0, 41], 8: [2, 1], 9: [3, 1], 10: [2, 1], 11: [1, 21]
}


// Словарь перевода баллов из первичной во вторичную
const secondBallArray = {
    0: 0, 1: 6, 2: 11, 3: 17, 4: 22, 5: 27,
    6: 34, 7: 40, 8: 46, 9: 52, 10: 58,
    11: 64
}


// n неповторяющих элементов из массива
function randomProblem(problem, countPr) {
    let result = [];

    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

    while (result.length != countPr) {
        let index = getRandomInt(problems[problem].length);    
        result.push(problems[problem][index]);    
        result = result.filter((v, i, arr) => arr.indexOf(v) == i);
    }
    return result
}


// Цвет задачи
function colorProcent(procent){
    if (procent < 30) return 'greenColor'
    if (procent < 70) return 'yellowColor'
    return 'redColor'
}


// Вывод задания на HTML на вкладку variant
function problemHTMLvariant(probl) {
    return `<div class="conteyner">
    <div class="number gray" > 
        <span class='idInfo'>Номер ${probl.number} №${probl.id} </span> 
        <span class='${colorProcent(probl.procent)}'> (Сложность: ${probl.procent}%) </span> 
    </div>
        <img src='/MathWeb/img/${probl.problem}.jpg' >
        <div class="answer gray1">Введите ответ: <input class='input'> </div>
    </div>`
} 


// Вывод задания на HTML на вкладку currSubject
function problemHTMLcurr(probl, id) {
    return `<div id = ${id} class="conteyner" >
    <div class="number gray" > 
        <span class='idInfo'>Номер ${probl.number} №${probl.id} </span> 
        <span class='${colorProcent(probl.procent)}'> (Сложность: ${probl.procent}%) </span> 
    </div>
        <img src='/MathWeb/img/${probl.problem}.jpg'>
        <div class="answer gray1">Введите ответ: <input class='input'> <button class="submit"> Ответить </button> </div>
    </div>`
}


// Вывод задание на HTML на вкладку stress
function problemHTMLstress(probl, id) {
    return `<div id = ${id} class="conteynerStress" >
    <div class="number gray" > 
        <span class='idInfo'>Номер ${probl.number} №${probl.id} </span> 
        <span class='${colorProcent(probl.procent)}'> (Сложность: ${probl.procent}%) </span> 
    </div>
        <img class='imgStress' src='/MathWeb/img/${probl.problem}.jpg'>

        <div class="answer gray1">Введите ответ: <input class='input'> <button class="submit"> Ответить </button> </div>
    </div>`
}


// Запись в LocalStr
function setLocalStorage(nameLocal, value){
    localStorage.setItem(nameLocal, JSON.stringify(value))
}


// Получение из LocalStr
function getLocalStorage(value){
    return JSON.parse(localStorage.getItem(value))
}


// Удаление из LocalStr
function removeLocalStorage(value){
    localStorage.removeItem(value)
}


// Смена background цвета
function background(color, index) {
    document.querySelectorAll(".number")[index].classList.remove('gray', 'green', 'red')
    document.querySelectorAll(".number")[index].classList.add(color)
    
    document.querySelectorAll(".answer")[index].classList.remove('gray1', 'green', 'red')
    if (color === 'gray') color = 'gray1'
    document.querySelectorAll(".answer")[index].classList.add(color)
}


// Сумма массива
function summArray(array){
    let sum = 0
    array.forEach((element, index) =>{ if (index != 0) sum += element})
    return sum
}


// Массив количеств задач [-, 0, 1, 3, ....]
function pushArrayCountProblem(){
    const DOMarrayCountProblem = ['-', ...document.getElementsByClassName('countProblem')]
    let arrayCountProblem = ['-']

    DOMarrayCountProblem.forEach((element, index) => {if (index != 0) arrayCountProblem.push(Number(element.value))})
    return arrayCountProblem
}


// Округление до сотых
function rounded(number){
    return +number.toFixed(2);
}


// Присваение все input в index значение = value
function countProblemToNumber(value){
    for (i = 0; i <= 10; i++) document.getElementsByClassName('countProblem')[i].value = value
}


// Изменение кнопки variantBTN в обычную
function defaultBtnVariant(){
    const variant = document.querySelector('.variantBTN')

    variant.innerHTML = `Составить вариант (Выбрано заданий: 0)`
    variant.disabled = true
    variant.classList.add('animation:hover')
}


// Смена кнопки "Вариант" (изменение количества заданий + нажимаемость)
function changeBtnVariant(){
    const variant = document.querySelector('.variantBTN')
    const arrayCountProblem = pushArrayCountProblem()
    const summProblems = summArray(arrayCountProblem)

    variant.innerHTML = `Составить вариант (Выбрано заданий: ${summProblems})`
    variant.disabled = summProblems === 0

    for (let i = 1; i <= 11; i++) {
        if (+problems[i].length < arrayCountProblem[i]) variant.disabled = true
    }

    variant.disabled ? variant.classList.add('boom') : variant.classList.remove('boom')
}


// Функция для времени №1
// '4:30:20 12 Февраля 2023' --> [4, 30, 20]
function timeToArray(time){
    let timeNew = ''
    let index = 0
    let flag = true

    while (flag) {
        timeNew += time[index]
        index += 1

        if (time[index] === ' ') flag = false
    }
    timeNew = timeNew.split(':')
    let timeArray = []
    timeNew.forEach((element, index) => {if (index < 3) timeArray.push(Number(element))})
    return timeArray
}


// Функция для времени №2
// '23:40:20 12 Февраля 2023' --> '00:10:20'
function deadLine(time, minute, second){
    const hoursMinuteSecondArray = timeToArray(time)
    return `${addZero((hoursMinuteSecondArray[0] + Number(hoursMinuteSecondArray[1] >= (60 - minute))) % 24)}:${addZero((hoursMinuteSecondArray[1] + minute + Number(hoursMinuteSecondArray[2] >= (60 - second))) % 60)}:${addZero((hoursMinuteSecondArray[2] + second) % 60)}`
}


// Функция для времени №3
// '4' --> '04'; '23' --> '23'
function addZero(node){ return +node < 10 ? '0' + node : node }


// Обратный отсчет времени
// ('23:58:04', '00:03:50') --> 'Вариант: 05:46 осталось'
function titleTime(thisTime, deadLine){
    thisTime = thisTime.split(':')
    deadLine = deadLine.split(':')

    if (deadLine[0] === '00' && thisTime[0] != '00') deadLine[0] = '24' 
    
    const second = (+deadLine[0] - +thisTime[0]) * 3600 + (+deadLine[1] - +thisTime[1]) * 60 + (+deadLine[2] - +thisTime[2]) * 1
    const result = `${addZero(parseInt(second / 60))}:${addZero(second % 60)}`
    
    return result 
}


// Прошел ли дедлайн?
// Если прошел, то true
// Если еще нет, то false
function deadLineNew(){
    let thisTime = `${getTime('h')}:${getTime('m')}:${getTime('s')}`
    let deadLine = getLocalStorage('deadLine')

    thisTime = +thisTime.replaceAll(':', '')
    deadLine = +deadLine.replaceAll(':', '')
    if (deadLine < 10000 && thisTime > 10000) deadLine += 240000
    return deadLine - thisTime < 0
}


// Добавление PopUp на страницу
function addPopUp(thisTextPopUp, answer, rightAnswers, secondBall){
    const popUpBody = document.querySelector('.pop_up_body')
    const popUp = document.querySelector('.pop_up') 
    
    popUpBody.innerHTML += thisTextPopUp(answer, rightAnswers, secondBall)
    popUp.classList.add('active')

    const closePopUp = document.querySelector('.pop_up_close')

    closePopUp && closePopUp.addEventListener('click', () => {
        popUp.classList.remove('active')
    })

    document.addEventListener('click', (event) => {
        if (event.target.classList[0] === 'pop_up_container'){
            popUp.classList.remove('active')
        }
    })
}


// HTML PopUp контент для "формата ЕГЭ"
function textPopUpFull(answer, rightAnswers, secondBallArray){
            return `<div class='testEnd'> Тест завершен! </div> 
            <hr/>
            <div class='statsForEge1'>Общая информация</div>
            <div>Всего заданий: ${answer.length} </div> 
            <div>Решено верно:  <span class="greenColor"> ${rightAnswers} </span> </div>
            <div>Решено неверно: <span class="redColor"> ${answer.length - rightAnswers} </span></div>
            <div>Процент выполнения: ${rounded(rightAnswers / answer.length * 100)}% </div>
            <div class='statsForEge'>Статистика по «ЕГЭ профиль (1-11)»</div>
            <div>Первичных баллов: ${rightAnswers} </div>
            <div>Вторичных баллов: ${secondBallArray[rightAnswers]} </div>`
}


// HTML PopUp контент для НЕ "формата ЕГЭ"
function textPopUp(answer, rightAnswers){
    return `<div class='testEnd'> Тест завершен! </div> 
    <hr/>
    <div class='statsForEge1'>Общая информация</div>
    <div>Всего заданий: ${answer.length} </div> 
    <div>Верно решено: ${rightAnswers} </div>
    <div>Неверно решено: ${answer.length - rightAnswers} </div>
    <div>Процент выполнения: ${rounded(rightAnswers / answer.length * 100)}% </div>`
}


// Глобальная функция времени (variant)
function time(allProblemsMain){
    // Забираем со страницы кнопку "завершить"; "место времени"; "верхнюю надпись"
    const acceptBtn = document.querySelector('.accept')
    const timePlace = document.querySelector('.time')
    const title = document.querySelector('.titleVariant')

    // answerUser - список ответов
    // month - по индексу забираем месяц
    let answerUser = []
    const month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
    
    
    // Определяем текущее время
    const timeFull = `${getTime('h')}:${getTime('m')}:${getTime('s')} `;
    // Если нет deadLine или againVariant === afk, ставим новый deadLine и afk ==> deadLinePicked
    if (!getLocalStorage('deadLine') || getLocalStorage('againVariant') === 'afk'){
        setLocalStorage('deadLine', deadLine(timeFull, 30, 4))
        setLocalStorage('againVariant', 'deadLinePicked')
    }

    // setInterval раз в секунду
    setInterval(() => {
        
        // Если сейчас идет вариант (если нет, то "afk")
        if (getLocalStorage('againVariant') === 'deadLinePicked'){

            // устанавливаем "верхнюю надпись"
            title.innerHTML = 'Вариант: ' + titleTime(`${getTime('h')}:${getTime('m')}:${getTime('s')}`, getLocalStorage('deadLine')) + ' осталось'

            // устанавливаем "место времени" 
            const textFull = `${getTime('h')}:${getTime('m')}:${getTime('s')} ${getTime('d')} ${month[getTime('mo')]} ${getTime('y')}`
            timePlace.innerHTML = textFull + `, дедлайн: ${getLocalStorage('deadLine')} (${titleTime(`${getTime('h')}:${getTime('m')}:${getTime('s')}`, getLocalStorage('deadLine'))} осталось)`
        }
            
            // Конец дедлайна
            // 1 условие - если закончился дедлайн; 2 условие - чтоб вызвался 1 раз
            if (deadLineNew() && getLocalStorage('againVariant') != 'afk'){

                // Заголовок = 'Время вышло!'
                title.innerHTML = 'Время вышло!'

                // Убираем timePlace и inputVariant - все HTML поля input
                timePlace.innerHTML = 'Для повторного прохождения этого варианта обновите страницу'
                const inputVariant = document.querySelectorAll('input')
                    
                // В answerUser все ответы пользователя; количетво правильных ответов; количество верных ответов какого-то задания
                // Количество верных ответов какого-то задания; количество заданий какого-то задания
                inputVariant.forEach(element => answerUser.push(element.value))
                let rightAnswers = 0
                let countRightAnswer = ['-', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                const arrayCountProblem = getLocalStorage('countProblem')

                // Считаем кол-во правильных ответов + делаем background
                answerUser.forEach((element, index) => {
                    if (element != ''){ 
                        if (element.replace(',', '.') === String(allProblemsMain[index].answer)){
                            rightAnswers ++
                            background('green', index)
                        } else background('red', index)
                    } else background('red', index)
                })

                // disabled кнопки "принять"
                acceptBtn.disabled = true

                // "Режим чтения" всем кнопкам
                inputVariant.forEach(el => el.readOnly = true)

                // Вызываем PopUpFull 
                addPopUp(textPopUpFull, answerUser, rightAnswers, secondBallArray)

                // Замораживаем вариант
                setLocalStorage('againVariant', 'afk')

                // Заголовок = 'Результат'
                title.innerHTML = 'Результат'

                // infoLocalStorage - узнаем количество верных/всего заданий + всего верно и всего задач
                let infoLocalStorage = []
                for (let i = 1; i <= 11; i++) infoLocalStorage.push({right: countRightAnswer[i], count: arrayCountProblem[i]})
                infoLocalStorage.push({right: rightAnswers, count: answerUser.length})

                // arrayInfo - вспомогательный массив. Делаем stats вида: [{1 Вариант}, {2 Вариант}, {3 Вариант}, {4 Вариант}...]
                let arrayInfo = []
                if (getLocalStorage('stats')) getLocalStorage('stats').forEach(element => arrayInfo.push(element))             
                arrayInfo.push(infoLocalStorage)
                setLocalStorage('stats', arrayInfo)
            }
    }, 1000);

    
}


// Дней до экзамена
function daysBeforeExam(){
    // Костанта - день экзамена
    const EXAM = {month: 6, day: 1}

    // Формируем текущий день
    const date = new Date();
    const thisDay = {month: +date.getMonth(), day: +date.getDate()}

    // Сколько дней осталось
    const dayLeft = (EXAM.month - thisDay.month) * 30 + (EXAM.day - thisDay.day)
    return dayLeft
}


// Появление цвета в currSubject в случае обновления страницы
function currColor(thisProblems){
    // Берем все input и submit со страницы
    const inputAll = document.querySelectorAll('.input')
    const submitAll = document.querySelectorAll('.submit')

    // Если до этого были цвета карточек
    if (getLocalStorage('color')){
        // Перебираем все текущие задания (могут быть в любом порядке)
        // Забираем цвет карточки очередного задания через getLocalStorage('color')
        // {9001: "red", 9002: "red", 9003: "gray", 9004: "gray", 9005: "gray"}
        thisProblems.forEach((element, id) => {  
            // Текущий цвет
            const thisColor = getLocalStorage('color')[element.id]

            // Если верно, то зеленый + другое, иначе: НЕ зеленый цвет
            if (thisColor === 'green'){
                background('green', id)
                inputAll[id].readOnly = true
                submitAll[id].disabled = true
                submitAll[id].classList.remove('button:hover')
            } else background(thisColor, id)
        })
    }
}


// Появление input в currSubject в случае обновления страницы
function currInput(thisProblems){
    // Берем все input со страницы
    const inputAll = document.querySelectorAll('.input')

    // Если до этого были введены ответы 
    if (getLocalStorage('inputCurr')){

        // Перебираем все текущие задания (могут быть в любом порядке)
        // Забираем значение input очередного задания через getLocalStorage('inputCurr')
        // {4001: "1", 4002: "", 4003: ""}
        thisProblems.forEach((element, id) => {  
            const thisInput = getLocalStorage('inputCurr')[element.id]

            // Передаем сохраненное значение
            inputAll[id].value = thisInput 
        })
    }
}


// Рандоиный индекс массива allProblems (для stress)
function randomStress() {return Math.floor(Math.random() * allProblems.length)}


// Возвращение времени
function getTime(value){
    const date = new Date()

    if (value === 's') return addZero(date.getSeconds())
    else if (value === 'm') return addZero(date.getMinutes())
    else if (value === 'h') return addZero(date.getHours())
    else if (value === 'd') return addZero(date.getDay())
    else if (value === 'mo') return date.getMonth()
    else if (value === 'y') return addZero(date.getFullYear())

}