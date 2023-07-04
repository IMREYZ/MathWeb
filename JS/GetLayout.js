import { getLocalStorage } from "./LocalStorage.js"


function getStar(boolean) { // Функция, которая возвращает нужную звезду
    if (boolean) return '&#9733'
    else return '&#10032'
}



function getColorProcent(procent) { // Цвет задачи
    if (procent < 30) return 'greenColor1'
    else if (procent < 70) return 'yellowColor1'
    else return 'redColor1'

}

function getStatsNumberText(problem) { // Функция, которая возвращает statsNumber
    const statsNumberLocalStr = getLocalStorage('statsNumber')
    const objThisProblem = statsNumberLocalStr[problem.id]

    return `<span class='statsNumber' title='Решаемость задания. Для сброса - нажмите 2 раза.'>  ${objThisProblem.right} из ${objThisProblem.all} (${objThisProblem.procent}%)</span>`
}



function getRightAnswerHTML(problem) { // Добавление "правильный ответ"
    const rightAnswer = String(problem.answer).replace('.', ',') // Правильный ответ

    return `<span class='showRightAnswer close'> 
        <span class='pokOtw'>Показать ответ: </span> 
        <span class='conteynerRightAnswer'> </span>
        <span class='rightAnswer close'>${rightAnswer} </span>
    </span>`
}

export { getColorProcent, getStar, getStatsNumberText, getRightAnswerHTML }
