import { currColor, currSolution, currInfoShowRightAnswer, currInput } from "./CurrProblem.js"
import { createAndSaveInputs, createAndSaveColors, createAndSaveInfoAnswers, createAndSaveSolution } from "./SaveProblem.js"
import { problemHTMLcurr } from "./ProblemHTML.js"
import { getSpecialObject } from "./OtherFunctions.js"
import { getCountProblemForVariant } from "./VariantFunctions.js"
import { setLocalStorage } from "./LocalStorage.js"


function processSpecial(){

    const conteynerAll = document.querySelector('.conteynerAll')  
    const arraySpecialObject = getSpecialObject()
    const createVariantBtn = document.querySelector('.goVariant')

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


    if (getSpecialObject().length === 0) createVariantBtn.disabled = 'true'



    document.addEventListener('click', event => { //
        if (event.target.classList[0] !== 'star') return // Если не "звезда" - выходим
        
        conteynerAll.innerHTML = ''       
        getSpecialObject().forEach(element => conteynerAll.innerHTML += problemHTMLcurr(element))

        currColor(getSpecialObject())
        currInput(getSpecialObject())
        currInfoShowRightAnswer(getSpecialObject())
        currSolution(getSpecialObject())

        if (getSpecialObject().length === 0) createVariantBtn.disabled = 'true'
    })



    createVariantBtn.addEventListener('click', () => {
        const arrayCountProblem = getCountProblemForVariant(getSpecialObject())
        console.log(arrayCountProblem, getSpecialObject())
        

        setLocalStorage('countProblem', arrayCountProblem)
        setLocalStorage('numberVariant', -1)

    })



    document.addEventListener('input', (event) => {
        if (event.target.classList[0] !== 'input') return

        event.target.value = event.target.value.replace(/[^0123456789,-]/g, '')
    })    
}

export {processSpecial}
