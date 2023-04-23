if (window.location.pathname === `/MathWeb/HTML/variant.html`){
    
    const acceptBtn = document.querySelector('.accept') // Кнопка подтверждения
    const allConteynerVariant = document.querySelector('.allConteynerVar') // Контейнер всех заданий
    const timePlace = document.querySelector('.time1') // Место времени
    const nameVariant = document.querySelector('.nameVariant') // Имя варианта
    const iconText = document.querySelector('.titleVariant') // Текст иконки
    const numberVariant = getLocalStorage('numberVariant') // id Варианта
    let allProblemsMain = [] // Массив, состоящий из объектов заданий

    let arrayCountProblem // Считываем кол-во выбранных номеров  getLocalStorage('countProblem')
    if (getLocalStorage('numberVariant') === 0 && getLocalStorage('fromStats') === null) arrayCountProblem = getLocalStorage('countProblem')
    else if (getLocalStorage('fromStats') !== null) arrayCountProblem = getLocalStorage('stats')[getLocalStorage('idVariant') - 1].countProblem
    else if (getLocalStorage('numberVariant') !== 0) arrayCountProblem = 'DEMO'

    removeLocalStorage('flagEndVariant') // Убирание заглушки, из-за которой не выходят много "результатов"

    if (getLocalStorage('variant')){ // Если уже есть вариант
        allProblemsMain = getLocalStorage('variant') // Массив заданий при обновлении   
        if (getLocalStorage('againVariant') === 'afk') removeLocalStorage('answers') // Стирание ответов при новом старом вариате       
    } else if (getLocalStorage('fromStats') !== 1) { // Если только создался
        numberVariant === 0 ? allProblemsMain = randomVariant(arrayCountProblem) : allProblemsMain = getArrayObjectForSpecialVariants(numberVariant)
    } else {
        const idPreviousVariant = getLocalStorage('idVariant')
        const objectVariant = getLocalStorage('stats')[idPreviousVariant - 1]
        const myVariant = objectVariant.problems
        allProblemsMain = myVariant
    }       
    
    
    allProblemsMain.forEach((elementFirst, id) => allConteynerVariant.innerHTML += problemHTMLvariant(elementFirst, id)) // Выводим задания на страницу
    setLocalStorage('variant', allProblemsMain) // Записываем список объектов задач в LocalStr в variant (для случая обновления страницы)


    if (getLocalStorage('fromStats') !== null){

        if (getLocalStorage('fromStats') === 0.5) setLocalStorage('fromStats', 0)

        if (getLocalStorage('fromStats') === 1) {
            setLocalStorage('againVariant', 'afk')
            setLocalStorage('fromStats', 0.5)

            timePlace.innerHTML = `<button class='time2'>Начать заново </button>`
            iconText.innerHTML = 'Результат' 

            const idPreviousVariant = getLocalStorage('idVariant')
            const objectVariant = getLocalStorage('stats')[idPreviousVariant - 1]
            const myVariant = objectVariant.problems
            const myColors = objectVariant.colors
            const inputVariant = [...document.querySelectorAll('.input')]
            setLocalStorage('variant', myVariant)

            const allParents = [...document.querySelectorAll('.conteyner')] // Все контейнеры
            const allAnswer = [...document.querySelectorAll('.answer')] 
            for (let index = 0; index < myVariant.length; index ++){
                background(myColors[index], index)
                inputVariant[index].readOnly = true
                allAnswer[index].classList.add('white')

                const thisParent = allParents[index] // Родитель этой задачи
                const thisStar = thisParent.querySelector('.star') // Звезда этой задачи
                thisStar.classList.remove('close') // Удаляем close звезде

                if (myColors[index] === 'red'){
                    const thisConteyner = thisParent.querySelector('.conteynerRightAnswer') // Текущий контейнер ответов
                    thisConteyner.innerHTML = getRightAnswerHTML(allProblemsMain[index]) // Записываем туда getRightAnswerHTML()
                    const rightAnswer = thisConteyner.querySelector('.showRightAnswer') // showRightAnswer - весь блок answer -> делаем show
                    rightAnswer.classList.remove('close')
                    rightAnswer.classList.add('show')
                }
            }
            
            acceptBtn.disabled = true // Блокируем "завершить работу"

        }
    }


    // Вывод ответов
    const LocalStrAnswer = getLocalStorage('answers')
    if (LocalStrAnswer){
        const inputVariant = [...document.querySelectorAll('.input')]
        inputVariant.forEach((element, index) => element.value = LocalStrAnswer[index])
    }

    let isVariant = true // Флаг
    if (getLocalStorage('fromStats') === null) arrayCountProblem.forEach(element => {if (element != '-' && element != 1) isVariant = false}) // Проверяем, вариант формата ЕГЭ или нет
    
    

    if (isVariant) time(allProblemsMain, arrayCountProblem, isVariant) // Если формат ЕГЭ, то работаем c time

    if (numberVariant === 0) nameVariant.innerHTML = 'Тестовая часть'
    else if (getLocalStorage('fromStats') !== null) {
        let thisName = getLocalStorage('stats')[getLocalStorage('idVariant') - 1].name
        nameVariant.innerHTML = thisName    
    }
    else nameVariant.innerHTML = specialVariants[numberVariant].name

    //numberVariant === 0 ? nameVariant.innerHTML = 'Тестовая часть' : nameVariant.innerHTML = specialVariants[numberVariant].name // Заголовок
    isVariant ? nameVariant.innerHTML += ' (вариант формата ЕГЭ)' : nameVariant.innerHTML += ' (вариант НЕ формата ЕГЭ)' // Заголовок 
 

    // popUp
    const popUpMain = document.querySelector('.pop_up')
    const popUpSecond = document.querySelector('.pop_up1')
    const yesBtn = document.querySelector('.yesBtn')
    const cancelBtn = document.querySelector('.cancelBtn')

    acceptBtn.addEventListener('click', () => { popUpSecond.classList.add('active') }) // Нажатие на "закончить" // Открывает PopUp
    cancelBtn.addEventListener('click', () => {popUpSecond.classList.remove('active') }) // Нажатие на "отмена" в PopUp // Закрываем PopUp
  
    document.addEventListener('click', (event) => {
        // Выход из PopUp

        if (!event.target.classList[0] || !event.target.classList[0].includes('pop_up')) return // Если не popUp - выходим

        const popUpArrayClassList = ['pop_up', 'pop_up_container', 'pop_up_close']
        const popUp1ArrayClassList = ['pop_up1', 'pop_up_container1', 'pop_up_close1']
        const classThisElement = event.target.classList[0]

        if (popUpArrayClassList.includes(classThisElement)) popUpMain.classList.remove('active')
        if (popUp1ArrayClassList.includes(classThisElement)) popUpSecond.classList.remove('active')
    })


    // Нажатие на "Да" в PopUp
    yesBtn.addEventListener('click', () => {
        endVariant(allProblemsMain, arrayCountProblem, isVariant)
    })
    

    document.addEventListener('click', event => {
        if (event.target.classList[0] === 'time2') location.reload()
    })


    // Ограничение на input
    document.addEventListener('input', (event) => {
        if (event.target.classList[0] !== 'input') return

        event.target.value = event.target.value.replace(/[^0123456789,-]/g, '')

        // Сохраняем ответы в LocalStr
        let answer = []
        const inputVariant = [...document.querySelectorAll('.input')]
        inputVariant.forEach(element => answer.push(element.value))
        setLocalStorage('answers', answer)
    })       
}