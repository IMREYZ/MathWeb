// Если на странице currSubject
if (window.location.pathname === `/MathWeb/HTML/currSubject.html`){

    // Считываем номер задания и имя задания
    const id = getLocalStorage('idProblem')
    const name = getLocalStorage('nameProblem')

    // Заголовок
    const title = document.querySelector('.title')
    title.innerHTML = `${name}`

    // Все input и все submit
    const inputAll = document.getElementsByClassName('input')
    const submitAll = document.getElementsByClassName('submit') 
    
    
    // Имя задачи и контейнер html разметки
    const allConteynerProblem = document.querySelector('.allConteynerPr')
    const nameProblem = document.querySelector('.name')
    

    // Формируем страницу HTML
    nameProblem.innerHTML = name
    let thisProblems = problems[id]

    

    function sortProblem(thisSelect){
        if (thisSelect === 'oldToNew') thisProblems.sort((a, b) => a.id - b.id)
        else if (thisSelect === 'newToOld') thisProblems.sort((a, b) => b.id - a.id)
        else if (thisSelect === 'easyToHard') thisProblems.sort((a, b) => a.procent - b.procent)
        else if (thisSelect === 'hardToEasy') thisProblems.sort((a, b) => b.procent - a.procent)

    }

    // Забираем из LocalStr select; текущий select
    const thisSelect = getLocalStorage('select')
    const optionCurr = document.querySelector('.optionCurr')

    // Если есть select
    if (thisSelect) {
        // Сортировка к изначальному виду
        sortProblem(thisSelect)

        // Возвращаем к тому, что было до обновления
        optionCurr.querySelector(`[value=${thisSelect}]`).selected="selected"
    }

    // Выводим задания
    thisProblems.forEach((element, index) => allConteynerProblem.innerHTML += problemHTMLcurr(element, index))

    // Возвращаем цвета и инпуты в случае инпута
    currColor(thisProblems)
    currInput(thisProblems)
    currInfoShowRightAnswer(thisProblems)

    optionCurr.addEventListener('change', () => {
        // Текущий пик
        const thisOption = optionCurr.value

        // Сортируем по новому изменению
        sortProblem(thisOption)

        // Добавляем в LocalStr select
        setLocalStorage('select', thisOption)

        // Образовываем обновленную страницу
        allConteynerProblem.innerHTML = ''
        thisProblems.forEach((element, index) => allConteynerProblem.innerHTML += problemHTMLcurr(element, index))

        // Возвращаем цвета и инпуты в случае инпута
        currColor(thisProblems)
        currInput(thisProblems)
        currInfoShowRightAnswer(thisProblems)

    })


    // Сверка ответа на задачу, где была нажата кнопка "Ответить"
    document.addEventListener('click', (event) => {

        // Если событие - не кнопка sumbit, то выходим
        if (event.target.classList[0] != 'submit') return

        // Находим родителей кнопки; находим семейный input и меняем в нем , на .; берем id из родителя; берем правильный ответ; контейнер правильного ответа
        const parent = event.target.closest('.conteyner')
        const answerInput = parent.querySelector('.input').value.replace(',', '.')
        const id = +parent.id
        const answerRight = thisProblems[id].answer
        const conteynerRightAnswer = parent.querySelector('.conteynerRightAnswer')

        // Если верно, то: цвет фона - зеленый, input - только чтение, submit - нельзя нажимать + убираем hover. 
        // Иначе: цвет фона - красный
        if (answerInput != ''){
                if (String(answerRight) === answerInput) {
                    background('green', id)
                    inputAll[id].readOnly = true
                    submitAll[id].disabled = true
                    submitAll[id].classList.remove('button:hover')

                    conteynerRightAnswer.innerHTML = ''
                
                } else {
                    background('red', id)

                    // В контейнер правильного ответа добавляем текст
                    conteynerRightAnswer.innerHTML = getRightAnswerHTML(thisProblems[id])

                    // show "Показать ответ"
                    const rightAnswer = conteynerRightAnswer.querySelector('.showRightAnswer')
                    rightAnswer.classList.remove('close')
                    rightAnswer.classList.add('show')

            }
        }


        /// Сохранение цветов при нажатии на ответ в LocalStr
        const classesWithColor = [...document.querySelectorAll('.number')]
        let colorArray = {}
        classesWithColor.forEach((element, index) => colorArray[thisProblems[index].id] = element.classList[1])
        setLocalStorage('color', colorArray)
    })


    // Показывание правильного ответа
    showRightAnswerHTML()

    createAndSaveInfoAnswers(thisProblems)


    // Ограничение на input
    document.addEventListener('input', (event) => {

        // Если событие - не кнопка input, то выходим
        if (event.target.classList[0] != 'input') return 

        // Сохранение input в LocalStr
        const inputDOM = [...document.querySelectorAll('.input')]
        let inputArray = {}
        inputDOM.forEach((element, index) => inputArray[thisProblems[index].id] = element.value)
        setLocalStorage('inputCurr', inputArray)

        // Регулярное выражение для фильтрации input
        event.target.value = event.target.value.replace(/[^0123456789,-]/g, '')})
}