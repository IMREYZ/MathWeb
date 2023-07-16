import { summArray } from "./OtherFunctions.js"
import { pushArrayCountProblem, getObjectsFromAndTo } from "./VariantFunctions.js"


function closeToShow(element) {
    element.classList.remove('close')
    element.classList.add('show')
}



function showToClose(element) {
    element.classList.remove('show')
    element.classList.add('close')
}



function background(color, index) { // Смена background цвета
    const allNumbers = [...document.querySelectorAll('.number')] // Все верхние подконтейнеры контейнера
    const allAnswer = [...document.querySelectorAll('.answer')] // Все нижние подконтейнеры контейнера

    const thisNumber = allNumbers[index] // Дочерний number
    const thisAnswer = allAnswer[index] // Дочерний answer
    
    stainingBackground(thisNumber, thisAnswer, color)
}



function backgroundByCurr(id, color) { // Смена background цвета для currSubj
    const allConteyners = [...document.querySelectorAll('.conteyner')] // Все контейнеры задач, КОТОРЫЕ ЕСТЬ СЕЙЧАС

    allConteyners.forEach(element => { // Перебираем все задачи
        if (+element.id === id) { // Если id задачи === нашему id, которое мы хотим найти, то
            const thisNumber = element.querySelector('.number') // Дочерний number
            const thisAnswer = element.querySelector('.answer') // Дочерний answer

            stainingBackground(thisNumber, thisAnswer, color)
        }
    })
}



function stainingBackground(thisNumber, thisAnswer, color){ // Окраска
    thisNumber.classList.remove('gray', 'green', 'red') // Убираем все классы
    thisNumber.classList.add(color) // Добавляем нужный цвет

    thisAnswer.classList.remove('gray1', 'green', 'red') // Убираем все классы
    if (color === 'gray') color = 'gray1'
    thisAnswer.classList.add(color) // Добавляем нужный цвет
}



function defaultBtnVariant() { // Изменение кнопки variantBTN в обычную
    const variant = document.querySelector('.variantBTN') // Кнопка создания варианта

    variant.innerHTML = 'Составить вариант (Выбрано заданий: 0)'
    variant.disabled = true
    variant.classList.add('animation:hover')
}



function changeBtnVariant() { // Смена кнопки "Вариант" (изменение количества заданий + нажимаемость)
    const variant = document.querySelector('.variantBTN') // Кнопка создания варианта
    const startBtn = document.querySelector('.start') // Min сложность элемент
    const finishBtn = document.querySelector('.finish') // Max сложность элемент
    const hoursHTML = document.querySelector('.hours') // Min сложность элемент
    const minutesHTML = document.querySelector('.minutes') // Max сложность элемент

    const arrayCountProblem = pushArrayCountProblem() // Массив кол-ва задач
    const summProblems = summArray(arrayCountProblem) // Количество задач всего
    const valueStart = +startBtn.value // Значение
    const valueFinish = +finishBtn.value // Значение
    const hoursValue = +hoursHTML.value // Значение
    const minutesValue = +minutesHTML.value // Значение

    variant.innerHTML = `Составить вариант (Выбрано заданий: ${summProblems})`
    variant.disabled = summProblems === 0 || arrayCountProblem.some((element, index) => index !== 0 && getObjectsFromAndTo(index, valueStart, valueFinish).length < element)


    if (hoursValue === 0 && minutesValue === 0) variant.disabled = true

    if (variant.disabled) variant.classList.add('boom')
    else variant.classList.remove('boom') // Эффект boom
}




export { changeBtnVariant, defaultBtnVariant, background, backgroundByCurr, showToClose, closeToShow }
