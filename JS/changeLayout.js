import { summArray } from "./otherFunctions.js"
import { pushArrayCountProblem, getObjectsFromAndTo } from "./variantFunctions.js"


function closeToShow(element) {
    element.classList.remove('close')
    element.classList.add('show')
}



function showToClose(element) {
    element.classList.remove('show')
    element.classList.add('close')
}





function background(color, index) { // Смена background цвета
    const allNumbers = document.querySelectorAll(".number") // Все верхние подконтейнеры контейнера
    const allAnswer = document.querySelectorAll(".answer") // Все нижние подконтейнеры контейнера

    allNumbers[index].classList.remove('gray', 'green', 'red') // Убираем все классы
    allNumbers[index].classList.add(color) // Добавляем нужный цвет

    allAnswer[index].classList.remove('gray1', 'green', 'red') // Убираем все классы
    if (color === 'gray') color = 'gray1'
    allAnswer[index].classList.add(color) // Добавляем нужный цвет
}



function backgroundByCurr(id, color) { // Смена background цвета для currSubj
    const allConteyners = document.querySelectorAll('.conteyner') // Все контейнеры задач, КОТОРЫЕ ЕСТЬ СЕЙЧАС

    allConteyners.forEach(element => { // Перебираем все задачи
        if (+element.id === id) { // Если id задачи === нашему id, которое мы хотим найти, то
            const thisNumber = element.querySelector('.number') // Дочерний number
            const thisAnswer = element.querySelector('.answer') // Дочерний answer

            thisNumber.classList.remove('gray', 'green', 'red') // Убираем все классы
            thisNumber.classList.add(color) // Добавляем нужный цвет

            thisAnswer.classList.remove('gray1', 'green', 'red') // Убираем все классы
            if (color === 'gray') color = 'gray1'
            thisAnswer.classList.add(color) // Добавляем нужный цвет
        }
    })
}




function defaultBtnVariant() { // Изменение кнопки variantBTN в обычную
    const variant = document.querySelector('.variantBTN') // Кнопка создания варианта

    variant.innerHTML = `Составить вариант (Выбрано заданий: 0)`
    variant.disabled = true
    variant.classList.add('animation:hover')
}



function changeBtnVariant() { // Смена кнопки "Вариант" (изменение количества заданий + нажимаемость)
    const variant = document.querySelector('.variantBTN') // Кнопка создания варианта
    const arrayCountProblem = pushArrayCountProblem() // Массив кол-ва задач
    const summProblems = summArray(arrayCountProblem) // Количество задач всего

    const startBtn = document.querySelector('.start') // Min сложность элемент
    const finishBtn = document.querySelector('.finish') // Max сложность элемент
    const valueStart = +startBtn.value // Значение
    const valueFinish = +finishBtn.value // Значение

    variant.innerHTML = `Составить вариант (Выбрано заданий: ${summProblems})`
    variant.disabled = summProblems === 0 // Если 0 задач выбрано --> false


    arrayCountProblem.forEach((element, index) => {
        if (index !== 0) {
            const problemsByDifficulty = getObjectsFromAndTo(index, valueStart, valueFinish) // Массив задач номера index с valueStart <= procent <= valueFinish
            if (problemsByDifficulty.length < element) variant.disabled = true // Если выбранных задач > возвожных задач --> disabled
        }
    })

    variant.disabled ? variant.classList.add('boom') : variant.classList.remove('boom') // Эффект boom
}


export { changeBtnVariant, defaultBtnVariant, background, backgroundByCurr, showToClose, closeToShow }