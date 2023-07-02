import { getLocalStorage } from "./localStorage.js"
import { getColorProcent, getStar, getStatsNumberText } from "./getLayout.js"


function problemHTMLvariant(problem) { // Вывод задания на HTML на вкладку variant
    const id = problem.id // id Задачи
    const objSpecial = getLocalStorage('special') // Массив избранных задач
    const thisBoolean = objSpecial[id] // Избранная задача или нет
    const textHTML = getStar(thisBoolean) // Добавляем звезду в контейнер

    return `<div id = ${id} class="conteyner">
    <div class="number gray" > 
        <span class='statsNumberConteyner'> </span>
        <span class='middle'>
            <span class='idInfo'>Номер ${problem.number} (№${problem.id}) </span> 
            <span title='Избранное задание' class="star close"> ${textHTML} </span>
            <span class='lvll'>
                Сложность: <span class='${getColorProcent(problem.procent)} proc'> ${problem.procent}% </span> 
            </span>
        </span>
    </div>
        <img src='/MathWeb/img/${problem.problem}.jpg'>

        <div class='imgSolutionConteyner close'>
            <div id='QQ'> Решение: </div>
            <img class='imgSolution' src='/MathWeb/img/NoSolutions.jpg'>
        </div>

        <div class="answer gray1">
            <span class='conteynerRightAnswer'></span>
            <span class='conteynerInput'> 
                Введите ответ: 
                <input class='input'> 
            </span>

            <span class='showSolutionText'></span>
        </div>

    </div>`
} 



function problemHTMLstress(problem) { // Вывод задание на HTML на вкладку stress
    const id = problem.id // id Задачи
    const objSpecial = getLocalStorage('special') // Массив избранных задач
    const thisBoolean = objSpecial[id] // Избранная задача или нет
    const textHTML = getStar(thisBoolean) // Добавляем звезду в контейнер

    
    return `<div id = ${id} class="conteynerStress" >
    <div class="number gray" > 
        <span class='statsNumberConteyner'> </span>
        <span class='middle'>
            <span class='idInfo'>Номер ${problem.number} (№${problem.id}) </span> 
            <span title='Избранное задание' class="star"> ${textHTML} </span>
            <span class='lvll'>
                Сложность: <span class='${getColorProcent(problem.procent)} proc'> ${problem.procent}% </span> 
            </span>
        </span>
    </div>
        <img class='imgStress' src='/MathWeb/img/${problem.problem}.jpg'>

        <div class='imgSolutionConteyner close'>
            <div id='QQ'> Решение: </div>
            <img class='imgSolution' src='/MathWeb/img/NoSolutions.jpg'>
        </div>

        <div class="answer gray1">

            <span class='conteynerRightAnswer'></span>
            <span class='conteynerInput'> 
                Введите ответ: 
                <input class='input'> 
                <button class="submit"> Ответить </button>
            </span>
            <span class='showSolutionText'></span>
        </div>
    </div>`
}



function problemHTMLcurr(problem) { // Вывод задания на HTML на вкладку currSubject
    const id = problem.id // id Задачи
    const objSpecial = getLocalStorage('special') // Массив избранных задач
    const thisBoolean = objSpecial[id] // Избранная задача или нет
    const textHTML = getStar(thisBoolean) // Добавляем звезду в контейнер
    const textStatsNumber = getStatsNumberText(problem) // StatsNumber
    

    return `<div id = ${id} class="conteyner" >
    <div class="number gray" > 
        <span class='statsNumberConteyner'> ${textStatsNumber} </span>
        <span class='idInfo'>Номер ${problem.number} (№${problem.id}) </span> 
        <span title='Избранное задание' class="star"> ${textHTML} </span>
        <span class='lvll'>
            Сложность: <span class='${getColorProcent(problem.procent)} proc'> ${problem.procent}% </span> 
        </span>
    </div>
        <img src='/MathWeb/img/${problem.problem}.jpg' title='Тема: ${problem.type}'>

        <div class='imgSolutionConteyner close'>
            <div id='QQ'> Решение: </div>
            <img class='imgSolution' src='/MathWeb/img/NoSolutions.jpg' >
        </div>

        <div class="answer gray1">
            <span class='conteynerRightAnswer'></span>

            <span class='conteynerInput'> 
                Введите ответ: 
                <input class='input'> 
                <button class="submit"> Ответить </button>
            </span>

            <span class='showSolutionText'> </span>
        </div>

    </div>`
}


export {problemHTMLcurr, problemHTMLstress, problemHTMLvariant}
