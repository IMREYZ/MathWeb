import { currColor, currSolution, currInfoShowRightAnswer, currInput } from "./currProblem.js"
import { createAndSaveInputs, createAndSaveColors, createAndSaveInfoAnswers, createAndSaveSolution } from "./saveProblem.js"
import { problemHTMLcurr } from "./problemHTML.js"
import { getSpecialObject } from "./otherFunctions.js"
import { getCountProblemForVariant } from "./variantFunctions.js"


function processSpecial(){
    if (true){

        const conteynerAll = document.querySelector('.conteynerAll')  
        const arraySpecialObject = getSpecialObject()

        arraySpecialObject.forEach(element => conteynerAll.innerHTML += problemHTMLcurr(element))

        // Создание и/или сохранение 1) цветов 2) "показать ответ"  3) input
        createAndSaveColors(getSpecialObject()) 
        createAndSaveInfoAnswers(getSpecialObject())
        createAndSaveInputs(getSpecialObject())
        createAndSaveSolution(getSpecialObject())

        // Возвращаем цвета и инпуты в случае инпута
        currColor(getSpecialObject())
        currInput(getSpecialObject())
        currInfoShowRightAnswer(getSpecialObject())
        currSolution(getSpecialObject())



        document.addEventListener('click', event => { //
            if (event.target.classList[0] !== 'star') return // Если не "звезда" - выходим
            
            conteynerAll.innerHTML = ''       
            getSpecialObject().forEach(element => conteynerAll.innerHTML += problemHTMLcurr(element))

            currColor(getSpecialObject())
            currInput(getSpecialObject())
            currInfoShowRightAnswer(getSpecialObject())
            currSolution(getSpecialObject())
        })



        document.addEventListener('input', (event) => {
            if (event.target.classList[0] !== 'input') return

            event.target.value = event.target.value.replace(/[^0123456789,-]/g, '')
        })    
        
    }
}

export {processSpecial}