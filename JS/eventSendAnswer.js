import { getLocalStorage, setLocalStorage } from "./localStorage.js"
import { getStatsNumberText, getRightAnswerHTML } from "./getLayout.js"
import { backgroundByCurr, showToClose, closeToShow } from "./changeLayout.js"
import { searchObjectById } from "./otherFunctions.js"
import { allProblems } from "./baseAndFunctions.js"


function eventSendAnswer() { // Обработка события "отправить ответ"
    document.addEventListener('click', (event) => {
        if (event.target.classList[0] !== 'submit' || window.location.pathname === '/MathWeb/HTML/stress.html') return // Если событие - не кнопка sumbit, то выходим


        const parent = event.target.closest('.conteyner') // Родители кнопки
        const answerText = parent.querySelector('.answer') // Весь блок answer (для add('white'))
        const answer = parent.querySelector('.input') // Дочерний input
        const answerInput = answer.value.replace(',', '.') // Value этого input
        const submit = parent.querySelector('.submit') // Дочерний sumbit
        const conteynerRightAnswer = parent.querySelector('.conteynerRightAnswer') // Дочерний контейнер "правильного ответа
        const id = +parent.id // Находим id контейнера-задачи
        const thisObject = searchObjectById(id, allProblems) // Находим объект
        const answerRight = thisObject.answer // Правильный ответ задачи
        const conteynerInput = parent.querySelector('.conteynerInput') // Контейнер инпута
        const conteynerSolution = parent.querySelector('.showSolutionText') // Контейнер текста решения
        const imgSolutionConteyner = parent.querySelector('.imgSolutionConteyner') // Контейнер фотки
        const statsNumber = parent.querySelector('.statsNumberConteyner') // Контейнер statsNumber

        const statsNumberLocalStr = getLocalStorage('statsNumber') // Забираем statsNumber из LS
        const thisStatsNumberObj = statsNumberLocalStr[id] // Статистика нашей задачи


        if (answerInput !== '') {
            answerText.classList.add('white') // Добавлеяем белого в блюом случае

            if (String(answerRight) === answerInput) {
                backgroundByCurr(id, 'green') // Ставим зеленый фон задаче с id как у контейнера
                answer.readOnly = true // Меняем дочерние элементы
                submit.disabled = true // Меняем дочерние элементы
                submit.classList.remove('button:hover') // Меняем дочерний элементы
                conteynerRightAnswer.innerHTML = '' // Убираем "показать ответ"
                conteynerInput.style.left = '0px' // ВЕРСТКА
                conteynerSolution.innerHTML = '' // Убираем решения
                showToClose(conteynerSolution)
                showToClose(imgSolutionConteyner)

                thisStatsNumberObj.right++
                thisStatsNumberObj.all++
                thisStatsNumberObj.procent = parseInt(thisStatsNumberObj.right / thisStatsNumberObj.all * 100)

            } else {
                backgroundByCurr(id, 'red') // Ставим фон задаче с id как у контейнера
                const currObject = searchObjectById(id, allProblems) // Находим объект текущей задачи     
                conteynerRightAnswer.innerHTML = getRightAnswerHTML(currObject) // В контейнер правильного ответа добавляем текст
                const rightAnswer = conteynerRightAnswer.querySelector('.showRightAnswer') // show "Показать ответ

                conteynerInput.style.left = '13px' // ВЕРСТКА
                conteynerSolution.innerHTML = 'Показать решение'

                closeToShow(rightAnswer)

                thisStatsNumberObj.all++
                thisStatsNumberObj.procent = parseInt(thisStatsNumberObj.right / thisStatsNumberObj.all * 100)
            }


            statsNumberLocalStr[id] = thisStatsNumberObj
            setLocalStorage('statsNumber', statsNumberLocalStr)

            statsNumber.innerHTML = getStatsNumberText(thisObject)
        }
    })
}

export { eventSendAnswer }