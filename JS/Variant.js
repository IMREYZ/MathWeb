import { getLocalStorage, setLocalStorage, removeLocalStorage } from "./LocalStorage.js"
import { problemHTMLvariant } from "./ProblemHTML.js"
import { time, getTime } from "./Time.js"
import { endVariant } from "./EndVariant.js"
import { getStatsNumberText, getRightAnswerHTML } from "./GetLayout.js"

import { background, closeToShow } from "./ChangeLayout.js"
import { getArrayObjectForSpecialVariants, randomVariant } from "./VariantFunctions.js"
import { specialVariants } from "./Base.js"
import { getSpecialObject } from "./OtherFunctions.js"


function processVariant(){
    const acceptBtn = document.querySelector('.accept') // Кнопка подтверждения
    const allConteynerVariant = document.querySelector('.allConteynerVar') // Контейнер всех заданий
    const timePlace = document.querySelector('.time1') // Место времени
    const nameVariant = document.querySelector('.nameVariant') // Имя варианта
    const iconText = document.querySelector('.titleVariant') // Текст иконки
    const numberVariant = getLocalStorage('numberVariant') // id Варианта

    let allProblemsMain = [] // Массив, состоящий из объектов заданий
    let arrayCountProblem // Считываем кол-во выбранных номеров  getLocalStorage('countProblem')
    const idPreviousVariant = getLocalStorage('idVariant') // id Варианта (прошлый вариант)
    const allStats = getLocalStorage('stats') // Вся статистика
    
    let myVariantPrevious
    if (idPreviousVariant !== null) {
        allStats.forEach(variant => {
            if (variant.idVariant === idPreviousVariant) myVariantPrevious = variant
        })
    }

    removeLocalStorage('flagEndVariant') // Убирание заглушки, из-за которой не выходят много "результатов"

    
    if (!getLocalStorage('startTime') && !getLocalStorage('fromStats')) setLocalStorage('startTime', getTime('full'))


    // arrayCountProblem
    if (getLocalStorage('fromStats') !== null) { // Если из статистики
        arrayCountProblem = myVariantPrevious.countProblem

    } else {
        if (numberVariant === 0) arrayCountProblem = getLocalStorage('countProblem') // Если рандом
        if (numberVariant === -1) arrayCountProblem = getLocalStorage('countProblem') // Если из special
        if (numberVariant > 0) arrayCountProblem = specialVariants[numberVariant].countProblem // Если специальный вариант
    }

    

    // allProblemsMain
    if (getLocalStorage('variant')){ // Если уже есть вариант

        allProblemsMain = getLocalStorage('variant') // Массив заданий при обновлении   
        if (getLocalStorage('againVariant') === 'afk') removeLocalStorage('answers') // Стирание ответов при новом старом вариате
    
    } else { // Создание варианта
        if (getLocalStorage('fromStats') !== null) { // Если только создался (просматриванием варианта)
            allProblemsMain = myVariantPrevious.problems
        } else {
            if (numberVariant === 0) allProblemsMain = randomVariant(arrayCountProblem) // Если только создался (кнопкой создания варианта)
            if (numberVariant === -1) allProblemsMain = getSpecialObject()
            if (numberVariant > 0) allProblemsMain = getArrayObjectForSpecialVariants(numberVariant) // Если специальный вариант
        }
    }    
    


    
    allProblemsMain.forEach((element, id) => allConteynerVariant.innerHTML += problemHTMLvariant(element, id)) // Выводим задания на страницу
    setLocalStorage('variant', allProblemsMain) // Записываем список объектов задач в LocalStr в variant (для случая обновления страницы)



    // Если связано с просмотром варианта
    if (getLocalStorage('fromStats') !== null || getLocalStorage('endVariant') === 1){

        if (!getLocalStorage('fromStats') && getLocalStorage('endVariant') === 0) { // Просмотр --> решение
            setLocalStorage('startTime', getTime('full'))
        }

        if (getLocalStorage('fromStats') === 1 || getLocalStorage('endVariant') === 1) { // Только зашли на страницу
            setLocalStorage('againVariant', 'afk') // afk режим
            // setLocalStorage('fromStats', 0) // Переход в просмотр

            timePlace.innerHTML = `<button class='time2'>Начать заново </button>` // имитация законченного варианта
            iconText.innerHTML = 'Результат' // имитация законченного варианта
            
            let myVariant
            let myColors
            if (getLocalStorage('fromStats') === 1){
                myVariant = myVariantPrevious.problems // Задачи варианта
                myColors = myVariantPrevious.colors // Цвета варианта
            }

            if (getLocalStorage('endVariant') === 1){
                myVariant = getLocalStorage('variant')
                myColors = getLocalStorage('colors')
            }


            setLocalStorage('variant', myVariant)

            const inputVariant = [...document.querySelectorAll('.input')] // input варианта
            const allParents = [...document.querySelectorAll('.conteyner')] // Все контейнеры
            const allAnswer = [...document.querySelectorAll('.answer')] // answer варианта (для white)


            for (let index = 0; index < myVariant.length; index ++){
                background(myColors[index], index) // Ставим цвет контейнеру
                inputVariant[index].readOnly = true // Только чтение
                allAnswer[index].classList.add('white') // white

                const thisProblem = myVariant[index]
                const thisParent = allParents[index] // Родитель этой задачи
                const thisStar = thisParent.querySelector('.star') // Звезда этой задачи
                const thisStatsNumberConteyner = thisParent.querySelector('.statsNumberConteyner')
                const thisAnswerText = thisParent.querySelector('.showSolutionText')
                const thisMiddle = thisParent.querySelector('.middle')
                const thisInputConteyner = thisParent.querySelector('.conteynerInput')
                thisMiddle.style.left = '0px'

                thisStar.classList.remove('close') // Удаляем close звезде
                thisStatsNumberConteyner.innerHTML = getStatsNumberText(thisProblem)

                if (myColors[index] === 'red'){
                    const thisConteyner = thisParent.querySelector('.conteynerRightAnswer') // Текущий контейнер ответов
                    thisConteyner.innerHTML = getRightAnswerHTML(allProblemsMain[index]) // Записываем туда getRightAnswerHTML()
                    const rightAnswer = thisConteyner.querySelector('.showRightAnswer') // showRightAnswer - весь блок answer -> делаем show
                    closeToShow(rightAnswer)
                    thisAnswerText.innerHTML = 'Показать решение'

                    rightAnswer.style.right = '310px'
                    thisAnswerText.style.left = '270px'
                    thisInputConteyner.style.left = '13px'        
                }
            }

            acceptBtn.disabled = true // Блокируем "завершить работу"
        }
    }


    // Вывод ответов
    const LocalStrAnswer = getLocalStorage('answers') // Все ответы
    if (LocalStrAnswer){
        const inputVariant = [...document.querySelectorAll('.input')]
        inputVariant.forEach((element, index) => element.value = LocalStrAnswer[index])
    }

    
    const isVariant = arrayCountProblem.every(element => element === '-' || element === 1) // Формата ЕГЭ или нет
    

    const timeOnVariantLS = getLocalStorage('timeOnVariant')
    if (timeOnVariantLS !== 'no deadline'){
        const [hours, minutes] = timeOnVariantLS        
        time(allProblemsMain, arrayCountProblem, isVariant, hours, minutes) // Если формат ЕГЭ, то работаем c time
    }

    // nameVariant
    if (numberVariant === 0) nameVariant.innerHTML = 'Тестовая часть' // Если создан рандомно
    else if (numberVariant === -1) nameVariant.innerHTML = 'Избранные задачи' // Если создан рандомно
    else if (getLocalStorage('fromStats') !== null) nameVariant.innerHTML = myVariantPrevious.name  // Если просмотр
    else nameVariant.innerHTML = specialVariants[numberVariant].name // Если спец вариант

    isVariant ? nameVariant.innerHTML += ' (вариант формата ЕГЭ)' : nameVariant.innerHTML += ' (вариант не формата ЕГЭ)' // Заголовок 



    // popUp
    const popUpMain = document.querySelector('.pop_up')
    const popUpSecond = document.querySelector('.pop_up1')
    const yesBtn = document.querySelector('.yesBtn')
    const cancelBtn = document.querySelector('.cancelBtn')

    acceptBtn.addEventListener('click', () =>  popUpSecond.classList.add('active')) // Нажатие на "закончить" // Открывает PopUp
    cancelBtn.addEventListener('click', () =>  popUpSecond.classList.remove('active')) // Нажатие на "отмена" в PopUp // Закрываем PopUp

    document.addEventListener('click', (event) => { // Выход из PopUp
        if (!event.target.classList[0] || !event.target.classList[0].includes('pop_up')) return // Если не popUp - выходим

        const popUpArrayClassList = ['pop_up', 'pop_up_container', 'pop_up_close']
        const popUp1ArrayClassList = ['pop_up1', 'pop_up_container1', 'pop_up_close1']
        const classThisElement = event.target.classList[0]

        if (popUpArrayClassList.includes(classThisElement)) popUpMain.classList.remove('active')
        if (popUp1ArrayClassList.includes(classThisElement)) popUpSecond.classList.remove('active')
    })




    yesBtn.addEventListener('click', () => endVariant(allProblemsMain, arrayCountProblem, isVariant) ) // Нажатие на "Да" в PopUp
    

    document.addEventListener('click', event => { // Обработка события - нажатие на "обновить страницу"
        if (event.target.classList[0] === 'time2') {
            if (getLocalStorage('fromStats') === 1) setLocalStorage('fromStats', 0)
            if (getLocalStorage('endVariant') === 1) setLocalStorage('endVariant', 0)
            location.reload() 
        }
    })



    document.addEventListener('input', (event) => { 
        if (event.target.classList[0] !== 'input') return

        event.target.value = event.target.value.replace(/[^0123456789,-]/g, '') // Ограничение на input
        
        const answer = []
        const inputVariant = [...document.querySelectorAll('.input')]
        inputVariant.forEach(element => answer.push(element.value))
        setLocalStorage('answers', answer) // Сохраняем ответы в LocalStr
    })       
}

export {processVariant}