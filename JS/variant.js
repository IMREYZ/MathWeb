if (window.location.pathname === `/MathWeb/HTML/variant.html`){
    
    const acceptBtn = document.querySelector('.accept') // Кнопка подтверждения
    const allConteynerVariant = document.querySelector('.allConteynerVar') // Контейнер всех заданий
    const timePlace = document.querySelector('.time1') // Место времени
    const nameVariant = document.querySelector('.nameVariant') // Имя варианта
    const iconText = document.querySelector('.titleVariant') // Текст иконки
    const numberVariant = getLocalStorage('numberVariant') // id Варианта
    let allProblemsMain = [] // Массив, состоящий из объектов заданий

    let arrayCountProblem // Считываем кол-во выбранных номеров  getLocalStorage('countProblem')
    if (getLocalStorage('numberVariant') === 0 && getLocalStorage('fromStats') === null) {
        arrayCountProblem = getLocalStorage('countProblem')
    } else if (getLocalStorage('fromStats') === null) arrayCountProblem = getLocalStorage('stats')[getLocalStorage('idVariant') - 1].countProblem
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

            timePlace.innerHTML = 'Для повторного прохождения этого варианта обновите страницу'
            iconText.innerHTML = 'Результат' 

            const idPreviousVariant = getLocalStorage('idVariant')
            const objectVariant = getLocalStorage('stats')[idPreviousVariant - 1]
            const myVariant = objectVariant.problems
            const myColors = objectVariant.colors
            const inputVariant = [...document.querySelectorAll('.input')]
            setLocalStorage('variant', myVariant)

            const allParents = [...document.querySelectorAll('.conteyner')] // Все контейнеры
            for (let index = 0; index < myVariant.length; index ++){
                background(myColors[index], index)
                inputVariant[index].readOnly = true

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
    
    

    if (isVariant) time(allProblemsMain) // Если формат ЕГЭ, то работаем c time

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
        const inputVariant = [...document.querySelectorAll('.input')] // HTML input
        const allParents = [...document.querySelectorAll('.conteyner')] // Все контейнеры

        let answer = [] // Массив input ответов
        inputVariant.forEach(element => answer.push(element.value)) // Введенные ответы

        let countRightAnswer = ['-', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // Количество верных задач
        let rightAnswers = 0 // Количество правильных ответов
  
        setLocalStorage('againVariant', 'afk') // Смена режима в afk

        timePlace.innerHTML = 'Для повторного прохождения этого варианта обновите страницу' // Уведомление для пользователей за место времени
        iconText.innerHTML = 'Результат' 

        let arrayColors = []
        // Проходимся по массиву answer
        answer.forEach((element, index) => {
            const thisObject = allProblemsMain[index] // Текущая задача
            const thisParent = allParents[index] // Родитель этой задачи
            const thisStar = thisParent.querySelector('.star') // Звезда этой задачи
            thisStar.classList.remove('close') // Удаляем close звезде

            // Проверка на правильность ответа
            if (element !== '' && +element.replace(',', '.') === thisObject.answer){
                rightAnswers ++
                countRightAnswer[thisObject.number] ++
                background('green', index)
                arrayColors.push('green')
            } else {
                background('red', index)
                arrayColors.push('red')

                const thisConteyner = thisParent.querySelector('.conteynerRightAnswer') // Текущий контейнер ответов
                thisConteyner.innerHTML = getRightAnswerHTML(allProblemsMain[index]) // Записываем туда getRightAnswerHTML()
                
                const rightAnswer = thisConteyner.querySelector('.showRightAnswer') // showRightAnswer - весь блок answer -> делаем show
                rightAnswer.classList.remove('close')
                rightAnswer.classList.add('show')
            }
        })

        setLocalStorage('colors', arrayColors)


        // Сохранение для stats

        let infoLocalStorageObject = {} // Объект текущего варианта
        let arrayRightAnswer = [] // Массив статистики
        
        for (let i = 1; i <= 11; i++) arrayRightAnswer.push({right: countRightAnswer[i], count: arrayCountProblem[i]})
        arrayRightAnswer.push({right: rightAnswers, count: answer.length})
        //infoLocalStorageObject.name = specialVariants[numberVariant].name

        infoLocalStorageObject.stats = arrayRightAnswer // Добавляем в объект варианта статистику варианта
        infoLocalStorageObject.problems = getLocalStorage('variant')
        infoLocalStorageObject.colors = getLocalStorage('colors')
        infoLocalStorageObject.idVariant = getLocalStorage('stats') ? getLocalStorage('stats').length + 1 : 1
        infoLocalStorageObject.countProblem = arrayCountProblem
        numberVariant !== 0 && numberVariant ? infoLocalStorageObject.name = specialVariants[numberVariant].name : infoLocalStorageObject.name = `Вариант ${infoLocalStorageObject.idVariant}`

        let arrayInfo = [] // Проходимся по всем прошлым вариантам 
        if (getLocalStorage('stats')) getLocalStorage('stats').forEach(element => arrayInfo.push(element))
        arrayInfo.push(infoLocalStorageObject) // Добавялем текущий вариант
        setLocalStorage('stats', arrayInfo) // В LocalStr

        acceptBtn.disabled = true // Блокируем "завершить работу"
        for (let i = 0; i < answer.length ; i++) inputVariant[i].readOnly = true // Блокируем все input

        // Смотрим на формат варианта, такой PopUp и выдаем (с "формат ЕГЭ (1-11) или без")
        isVariant ? addPopUp(textPopUpFull, answer, rightAnswers, secondBallArray) : addPopUp(textPopUp, answer, rightAnswers)
        popUpSecond.classList.remove('active')
    })
            
    // Ограничение на input
    document.addEventListener('input', (event) => {
        if (event.target.classList[0] != 'input') return

        event.target.value = event.target.value.replace(/[^0123456789,-]/g, '')

        // Сохраняем ответы в LocalStr
        let answer = []
        const inputVariant = [...document.querySelectorAll('.input')]
        inputVariant.forEach(element => answer.push(element.value))
        setLocalStorage('answers', answer)
    })       
}