if (window.location.pathname === `/MathWeb/HTML/special.html`){

    const conteynerAll = document.querySelector('.conteynerAll')  
    const arraySpecialObject = getSpecialObject()

    arraySpecialObject.forEach(element => conteynerAll.innerHTML += problemHTMLcurr(element))

    eventSendAnswer() // Отправляем ответ

    // Создание и/или сохранение 1) цветов 2) "показать ответ"  3) input
    createAndSaveColors(getSpecialObject()) 
    createAndSaveInfoAnswers(getSpecialObject())
    createAndSaveInputs(getSpecialObject())

    // Возвращаем цвета и инпуты в случае инпута
    currColor(getSpecialObject())
    currInput(getSpecialObject())
    currInfoShowRightAnswer(getSpecialObject())
      
}