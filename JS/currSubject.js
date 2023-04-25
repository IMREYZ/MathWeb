// Если на странице currSubject
if (window.location.pathname === `/MathWeb/HTML/currSubject.html`){

    // Считываем номер задания и имя задания
    const id = getLocalStorage('idProblem')
    const name = getLocalStorage('nameProblem')

    // Заголовок
    const title = document.querySelector('.title')
    title.innerHTML = `${name}`

    
    // Имя задачи и контейнер html разметки
    const allConteynerProblem = document.querySelector('.allConteynerPr')
    const nameProblem = document.querySelector('.name')
     

    // Устанавливаем название; все задачи
    nameProblem.innerHTML = name
    let allProblems = problems[id]


    // Если в LocalStr нет текущих задач - добавляем все задачи
    if (!getLocalStorage('thisProblems')) setLocalStorage('thisProblems', allProblems)
    if (!getLocalStorage('select')) setLocalStorage('select', 'oldToNew')


    // Добавляем Checkbox на страницу
    const filterConteyner = document.querySelector('.fil')
    const themeThisProblem = themeProblems[id]
    let thisTypes = []
    for (let index = 0; index < themeThisProblem.length; index ++) thisTypes.push(themeThisProblem[index].name)

    let text = ``
    themeThisProblem.forEach(element => text += `<div class='SSS'> <input class='checkbox' type='checkbox' id='${getNormalClass(element.name)}'> <span class='${getNormalClass(element.name)}'>${element.name} (${element.count} шт.)</span> </div>`)
    filterConteyner.innerHTML += text

    // Все checkbox в HTML
    const allCheckbox = document.querySelectorAll('.checkbox')

    const minusBox = document.querySelector('.minusBox')
    const plusBox = document.querySelector('.plusBox')

    

    // Если в LocalStr был checkbox  (в случае обновления страницы)
    if (getLocalStorage('checkbox')){
        // Массив checkbox
        const arrayCheckbox = getLocalStorage('checkbox')

        // Проходимся по всем checkbox HTML
        allCheckbox.forEach(element => {
            // Если id in arrayCheckbox, то
           
            
            if (arrayCheckbox.includes(element.id)) {

                // Делаем checked = true; добавляем w900
                element.checked = true
                addW900(`.${getNormalClass(element.id)}`, true)
            }
        })
        
    // Если не было в LocalStr
    } else {
        // Проходимся по всем checkbox HTML
        allCheckbox.forEach(element => {
            // Ставим всем w900 и checked
            element.checked = true 
            addW900(`.${getNormalClass(element.id)}`, true)
        })
    }


    
    // Обработка события нажатия на checkbox
    document.addEventListener('click', (event) => {
        // Если не checkbox - выходим
        if (event.target.classList[0] != 'checkbox') return

        // Если checkbox нет в LocalStr - пустой массив
        if (!getLocalStorage('checkbox')) setLocalStorage('checkbox', [])

        // Массив значений checkbox
        let checkboxArray = []

        // Проходимся по всем checkbox HTML
        allCheckbox.forEach(element => {
            // Если checked
            if (element.checked) {
                // Добавляем в массив id; добавляем w900
                checkboxArray.push(element.id)
                

                addW900(`.${getNormalClass(element.id)}`, true)

            // Иначе убираем w900
            } else {
                addW900(`.${getNormalClass(element.id)}`, false)
            }
        })
        

        // Устанавлием checkbox в LocalStr
        setLocalStorage('checkbox', checkboxArray)

        // Массив новых задач
        let newThisProblems = []

        // Проходимся по базовому массиву всех задач
        for (let i = 0; i < allProblems.length; i ++){
            // Если type задачи in checkboxArray: добавляем задачу в новый массив
            if (checkboxArray.includes(getNormalClass(allProblems[i].type))) newThisProblems.push(allProblems[i])
        }
        //console.log(newThisProblems, 1)
        

        // Обновляем текущие задачи; сортируем эти задачи\     
        setLocalStorage('thisProblems', newThisProblems)
        
        sortProblem(getLocalStorage('select'))
    
        // Выводим задания
        allConteynerProblem.innerHTML = ''
        getThisProblems().forEach(element => allConteynerProblem.innerHTML += problemHTMLcurr(element))

        // Возвращаем цвета; инпуты; инфу об "показать ответ"
        currColor(getThisProblems())
        currInput(getThisProblems())
        currInfoShowRightAnswer(getThisProblems())
    })



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

    // Первый вывод заданий 
    if (getLocalStorage('thisProblems')) getLocalStorage('thisProblems').forEach(element => allConteynerProblem.innerHTML += problemHTMLcurr(element))
    else allProblems.forEach(element => allConteynerProblem.innerHTML += problemHTMLcurr(element))


    // Возвращаем цвета; инпуты; инфу об "показать ответ"
    currColor(getThisProblems())
    currInput(getThisProblems())
    currInfoShowRightAnswer(getThisProblems())

    // Обработка события "Сортировка"
    optionCurr.addEventListener('change', () => {
        // Текущий пик
        const thisOption = optionCurr.value
        
        // Сортируем по новому изменению
        sortProblem(thisOption)

        // Добавляем в LocalStr select
        setLocalStorage('select', thisOption)

        // Образовываем обновленную страницу
        allConteynerProblem.innerHTML = ''
        getThisProblems().forEach(element => allConteynerProblem.innerHTML += problemHTMLcurr(element))

        // Возвращаем цвета и инпуты в случае инпута
        currColor(getThisProblems())
        currInput(getThisProblems())
        currInfoShowRightAnswer(getThisProblems())
    })


    // Нажатие на "Ответить"
    eventSendAnswer()

    minusBox.addEventListener('click', () => {
        // Если checkbox нет в LocalStr - пустой массив
        if (!getLocalStorage('checkbox')) setLocalStorage('checkbox', [])

        // Проходимся по всем checkbox HTML
        allCheckbox.forEach(element => {
            element.checked = false
            addW900(`.${element.id}`, false)
        })


        // Обновляем текущие задачи; сортируем эти задачи
        setLocalStorage('thisProblems', [])
    
        // Выводим задания
        allConteynerProblem.innerHTML = ''

        setLocalStorage('checkbox', [])

        // Возвращаем цвета; инпуты; инфу об "показать ответ"
        currColor(getThisProblems())
        currInput(getThisProblems())
        currInfoShowRightAnswer(getThisProblems())
    })

    plusBox.addEventListener('click', () => {
        // Если checkbox нет в LocalStr - пустой массив
        if (!getLocalStorage('checkbox')) setLocalStorage('checkbox', [])

        const fullBox = []
        // Проходимся по всем checkbox HTML
        allCheckbox.forEach(element => {
            element.checked = true
            addW900(`.${element.id}`, true)
            fullBox.push(element.id)
        })

        setLocalStorage('checkbox', fullBox)

        // Обновляем текущие задачи; сортируем эти задачи
        setLocalStorage('thisProblems', allProblems)
        sortProblem(getLocalStorage('select'))
    
        // Выводим задания
        allConteynerProblem.innerHTML = ''
        getThisProblems().forEach(element => allConteynerProblem.innerHTML += problemHTMLcurr(element))

        // Возвращаем цвета; инпуты; инфу об "показать ответ"
        currColor(getThisProblems())
        currInput(getThisProblems())
        currInfoShowRightAnswer(getThisProblems())
    })



    // Ограничение на input
    document.addEventListener('input', (event) => {

        // Если событие - не кнопка input, то выходим
        if (event.target.classList[0] != 'input') return 

        // Регулярное выражение для фильтрации input
        event.target.value = event.target.value.replace(/[^0123456789,-]/g, '')
    })
    


    // Создание и/или сохранение 1) цветов 2) "показать ответ"  3) input
    createAndSaveColors(getThisProblems()) 
    createAndSaveInfoAnswers(getThisProblems())
    createAndSaveInputs(getThisProblems())
}