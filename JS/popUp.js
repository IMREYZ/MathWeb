import { getLocalStorage } from "./LocalStorage.js"
import { timeForSolution, getTime } from "./Time.js"


function addPopUp(thisTextPopUp, answer, rightAnswers, secondBall){ // Добавление PopUp на страницу
    const popUpBody = document.querySelector('.pop_up_body')
    const popUp = document.querySelector('.pop_up') 
    
    popUpBody.innerHTML += thisTextPopUp(answer, rightAnswers, secondBall) 
    popUp.classList.add('active')
}



function textPopUpFull(answer, rightAnswers, secondBallArray){ // HTML PopUp контент для "формата ЕГЭ"
    const solutionTime = timeForSolution(getTime('full'), getLocalStorage('startTime')) // Сколько решал вариант

    return  `<div class='testEnd'> Тест завершен! </div> 
            <hr/>
            <div class='statsForEge1'>Общая информация</div>
            <div>Всего заданий: <span class='w900'>${answer.length}</span> </div> 
            <div>Решено верно:  <span class="greenColor w900"> ${rightAnswers} </span> </div>
            <div>Решено неверно: <span class="redColor w900"> ${answer.length - rightAnswers} </span></div>
            <div>Процент выполнения: <span class='w900'>${parseInt(rightAnswers / answer.length * 100)}% </span></div>
            <div>Потраченное время: <span class='w900'> ${solutionTime}</span></div>
            <div class='statsForEge'>Статистика по «ЕГЭ профиль (1-11)»</div>
            <div>Первичных баллов: <span class='w900'>${rightAnswers}</span> </div>
            <div>Вторичных баллов: <span class='w900'>${secondBallArray[rightAnswers]}</span> </div>`
}



function textPopUp(answer, rightAnswers){ // HTML PopUp контент для НЕ "формата ЕГЭ"
    const solutionTime = timeForSolution(getTime('full'), getLocalStorage('startTime')) // Сколько решал вариант

    return `<div class='testEnd'> Тест завершен! </div> 
    <hr/>
    <div class='statsForEge1'>Общая информация</div>
    <div>Всего заданий: <span class='w900'>${answer.length}</span> </div> 
    <div>Верно решено: <span class='w900'>${rightAnswers} </span></div>
    <div>Неверно решено: <span class='w900'>${answer.length - rightAnswers} </span></div>
    <div>Процент выполнения: <span class='w900'>${parseInt(rightAnswers / answer.length * 100)}% </span></div>
    <div>Потраченное время: <span class='w900'> ${solutionTime}</span></div>
    `
}


export { textPopUp, textPopUpFull, addPopUp }