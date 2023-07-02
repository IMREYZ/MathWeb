import { getLocalStorage, setLocalStorage, removeLocalStorage } from "./localStorage.js"
import { showToClose, closeToShow } from "./changeLayout.js"
import { allProblems } from "./baseAndFunctions.js"


function renderSpecial() { // Отловка новых заданий и записывание их в special
    const specialArray = getLocalStorage('special')

    if (specialArray) {
        allProblems.forEach(element => {
            const thisId = element.id
            if (specialArray[thisId] === undefined) specialArray[thisId] = false
        })

        setLocalStorage('special', specialArray)
    }
}


function renderStatsNumber() { // Отловка новых заданий и записывание их в statsNumber
    const statsArray = getLocalStorage('statsNumber')

    if (statsArray) {
        allProblems.forEach(element => {
            const thisId = element.id
            if (statsArray[thisId] === undefined) statsArray[thisId] = { right: 0, all: 0, procent: 0 }
        })

        setLocalStorage('statsNumber', statsArray)
    }
}


function clearStatsByDblClick() { // Удаление статистики при двойном клике
    document.addEventListener('dblclick', (event) => {
        if (event.target.classList[0] !== 'statsNumber') return

        const parent = event.target.closest('.conteyner')
        const id = parent.id
        const numberStatsLocStr = getLocalStorage('statsNumber')

        numberStatsLocStr[id] = { right: 0, all: 0, procent: 0 }
        setLocalStorage('statsNumber', numberStatsLocStr)
        event.target.innerHTML = '0 из 0 (0%)'
    })
}

function deleteOldStats() { // Удаление плохой статистики
    const stats = getLocalStorage('stats') // Наша статистика
    let newStats = []

    if (stats) { // Если статистика есть
        stats.forEach(variant => {
            if (variant.countProblem) newStats.push(variant)
        })

        setLocalStorage('stats', newStats)

        if (stats.length === 0) removeLocalStorage('stats')
    }
}

function showRightAnswerHTML() { // Показ правильного ответа
    document.addEventListener('click', (event) => { // Обработка события - нажание на "показать правильный ответ"
        if (event.target.classList[0] !== 'pokOtw') return // Если не кнопка "показать ответ" - выходим

        const conteynerAnswer = event.target.closest('.conteynerRightAnswer') // Контейнер правильного ответа
        const rightAnswer = conteynerAnswer.querySelector('.rightAnswer') // Правильный ответ (14, -4.51)
        const showAnswer = conteynerAnswer.querySelector('.pokOtw') // Текст-кнопка (Показать/Скрыть ответ)


        // close <--> show
        if (rightAnswer.classList[1] === 'close') {
            closeToShow(rightAnswer)
            showAnswer.innerHTML = 'Скрыть ответ:'

        } else {
            showToClose(rightAnswer)
            showAnswer.innerHTML = 'Показать ответ:'
        }
    })
}

export { renderSpecial, renderStatsNumber, clearStatsByDblClick, deleteOldStats, showRightAnswerHTML }