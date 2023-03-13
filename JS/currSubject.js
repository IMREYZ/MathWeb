// Если на странице currSubject
if (window.location.pathname === `/MathWeb/HTML/currSubject.html`){

    // Считываем номер задания и имя задания
    const id = getLocalStorage('idProblem')
    const name = getLocalStorage('nameProblem')
    
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

    const thisSelect = getLocalStorage('select')
    if (thisSelect){
        if (thisSelect === 'oldToNew') thisProblems.sort((a, b) => a.id - b.id)
        else if (thisSelect === 'newToOld') thisProblems.sort((a, b) => b.id - a.id)
        else if (thisSelect === 'easyToHard') thisProblems.sort((a, b) => a.procent - b.procent)
        else if (thisSelect === 'hardToEasy') thisProblems.sort((a, b) => b.procent - a.procent)

        const optionCurr = document.querySelector('.optionCurr')
        optionCurr.querySelector(`[value=${thisSelect}]`).selected="selected"


    }

    thisProblems.forEach((element, index) => allConteynerProblem.innerHTML += problemHTMLcurr(element, index))

    currColor(thisProblems)

    currInput(thisProblems)

    const optionCurr = document.querySelector('.optionCurr')
    optionCurr.addEventListener('change', () => {
        thisOption = optionCurr.value

        if (thisOption === 'oldToNew') thisProblems.sort((a, b) => a.id - b.id)
        else if (thisOption === 'newToOld') thisProblems.sort((a, b) => b.id - a.id)
        else if (thisOption === 'easyToHard') thisProblems.sort((a, b) => a.procent - b.procent)
        else if (thisOption === 'hardToEasy') thisProblems.sort((a, b) => b.procent - a.procent)

        setLocalStorage('select', thisOption)
        document.querySelector(`[value=${thisOption}]`).selected="selected"


        allConteynerProblem.innerHTML = ''
        thisProblems.forEach((element, index) => allConteynerProblem.innerHTML += problemHTMLcurr(element, index))

        currColor(thisProblems)

        currInput(thisProblems)

    })


    // Сверка ответа на задачу, где была нажата кнопка "Ответить"
    document.addEventListener('click', (event) => {

        // Если событие - не кнопка sumbit, то выходим
        if (event.target.classList[0] != 'submit') return

        // Находим родителей кнопки; находим семейный input и меняем в нем , на .; берем id из родителя; берем правильный ответ
        const parent = event.target.closest('.conteyner')
        const answerInput = parent.querySelector('.input').value.replace(',', '.')
        const id = +parent.id
        const answerRight = thisProblems[id].answer

        
        const thisConteyner = parent.querySelector('.conteynerRightAnswer')

        // Если верно, то: цвет фона - зеленый, input - только чтение, submit - нельзя нажимать + убираем hover. 
        // Иначе: цвет фона - красный
        if (answerInput != ''){
                if (String(answerRight) === answerInput) {
                    background('green', id)
                    inputAll[id].readOnly = true
                    submitAll[id].disabled = true
                    submitAll[id].classList.remove('button:hover')

                    thisConteyner.innerHTML = ''
                
                } else {
                    background('red', id)

                    thisConteyner.innerHTML = getRightAnswerHTML(thisProblems[id])
                    const rightAnswer = thisConteyner.querySelector('.showRightAnswer')

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

    showRightAnswerHTML()

    // Ограничение на input
    document.addEventListener('input', (event) => {

        // Сохранение input в LocakStr
        const inputDOM = [...document.querySelectorAll('.input')]
        let inputArray = {}
        inputDOM.forEach((element, index) => inputArray[thisProblems[index].id] = element.value)
        setLocalStorage('inputCurr', inputArray)

        // Если событие - не кнопка input, то выходим
        if (event.target.classList[0] != 'input') return 

        // Регулярное выражение для фильтрации input
        event.target.value = event.target.value.replace(/[^0123456789,-]/g, '')})
}