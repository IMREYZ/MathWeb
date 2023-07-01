if (window.location.pathname === `/MathWeb/HTML/variant.html`){

    const acceptBtn = document.querySelector('.accept') // Кнопка подтверждения
    const allConteynerVariant = document.querySelector('.allConteynerVar') // Контейнер всех заданий
    const timePlace = document.querySelector('.time1') // Место времени
    const nameVariant = document.querySelector('.nameVariant') // Имя варианта
    const iconText = document.querySelector('.titleVariant') // Текст иконки
    const numberVariant = getLocalStorage('numberVariant') // id Варианта

    let allProblemsMain = [] // Массив, состоящий из объектов заданий
    let arrayCountProblem // Считываем кол-во выбранных номеров  getLocalStorage('countProblem')
    const idPreviousVariant = getLocalStorage('idVariant') // id Варианта (прошлый вариант)
    const allStats = getLocalStorage('stats') // Вся статистика
    let myVariantPrevious

    if (idPreviousVariant !== null) {
        allStats.forEach(variant => {
            if (variant.idVariant === idPreviousVariant) myVariantPrevious = variant
        })
    }

    removeLocalStorage('flagEndVariant') // Убирание заглушки, из-за которой не выходят много "результатов"


    // arrayCountProblem
    if (numberVariant === 0 && getLocalStorage('fromStats') === null) { // Если создан вариант рандомно - берем из index countProblem
        arrayCountProblem = getLocalStorage('countProblem')

    } else if (getLocalStorage('fromStats') !== null) { // Если "просмотр" варианта
        arrayCountProblem = myVariantPrevious.countProblem

    } else if (numberVariant !== 0) { // Если специальный вариант
        arrayCountProblem = specialVariants[numberVariant].countProblem
    }

    
    // allProblemsMain
    if (getLocalStorage('variant')){ // Если уже есть вариант
        allProblemsMain = getLocalStorage('variant') // Массив заданий при обновлении   
        if (getLocalStorage('againVariant') === 'afk') removeLocalStorage('answers') // Стирание ответов при новом старом вариате

    } else if (getLocalStorage('fromStats') !== 1) { // Если только создался (кнопкой создания варианта)
        numberVariant === 0 ? allProblemsMain = randomVariant(arrayCountProblem) : allProblemsMain = getArrayObjectForSpecialVariants(numberVariant)
    
    } else allProblemsMain = myVariantPrevious.problems // Если только создался (просматриванием варианта)
    
    

    allProblemsMain.forEach((element, id) => allConteynerVariant.innerHTML += problemHTMLvariant(element, id)) // Выводим задания на страницу
    setLocalStorage('variant', allProblemsMain) // Записываем список объектов задач в LocalStr в variant (для случая обновления страницы)



    // Если связано с просмотром варианта
    if (getLocalStorage('fromStats') !== null){

        if (getLocalStorage('fromStats') === 0.5) setLocalStorage('fromStats', 0) // Просмотр --> решение

        if (getLocalStorage('fromStats') === 1) { // Только зашли на страницу
            setLocalStorage('againVariant', 'afk') // afk режим
            setLocalStorage('fromStats', 0.5) // Переход в просмотр

            timePlace.innerHTML = `<button class='time2'>Начать заново </button>` // имитация законченного варианта
            iconText.innerHTML = 'Результат' // имитация законченного варианта

            const myVariant = myVariantPrevious.problems // Задачи варианта
            const myColors = myVariantPrevious.colors // Цвета варианта
            setLocalStorage('variant', myVariant)

            const inputVariant = [...document.querySelectorAll('.input')] // input варианта
            const allParents = [...document.querySelectorAll('.conteyner')] // Все контейнеры
            const allAnswer = [...document.querySelectorAll('.answer')] // answer варианта (для white)
            const inputConteyner = [...document.querySelectorAll('.conteynerInput')] // Все input

            inputConteyner.forEach(element => element.classList.add('inputConteynerInCenter'))



            for (let index = 0; index < myVariant.length; index ++){
                background(myColors[index], index) // Ставим цвет контейнеру
                inputVariant[index].readOnly = true // Только чтение
                allAnswer[index].classList.add('white') // white

                const thisProblem = myVariant[index]
                const thisParent = allParents[index] // Родитель этой задачи
                const thisStar = thisParent.querySelector('.star') // Звезда этой задачи
                const thisStatsNumberConteyner = thisParent.querySelector('.statsNumberConteyner')
                const thisAnswerText = thisParent.querySelector('.showSolutionText')
                const thisMiddle = thisParent.querySelector('.middle')
                thisMiddle.style.left = '0px'

                thisAnswerText.innerHTML = 'Показать решение'


                thisStar.classList.remove('close') // Удаляем close звезде
                thisStatsNumberConteyner.innerHTML = getStatsNumberText(thisProblem)


                if (myColors[index] === 'red'){
                    const thisConteyner = thisParent.querySelector('.conteynerRightAnswer') // Текущий контейнер ответов
                    thisConteyner.innerHTML = getRightAnswerHTML(allProblemsMain[index]) // Записываем туда getRightAnswerHTML()
                    const rightAnswer = thisConteyner.querySelector('.showRightAnswer') // showRightAnswer - весь блок answer -> делаем show
                    rightAnswer.classList.remove('close')
                    rightAnswer.classList.add('show')
                    rightAnswer.style.right = '310px'
                    thisAnswerText.style.left = '270px'
                }
            }

            acceptBtn.disabled = true // Блокируем "завершить работу"
        }
    }


    // Вывод ответов
    const LocalStrAnswer = getLocalStorage('answers') // Все ответы
    if (LocalStrAnswer){
        const inputVariant = [...document.querySelectorAll('.input')]
        inputVariant.forEach((element, index) => element.value = LocalStrAnswer[index])
    }



    let isVariant = true // Флаг
    arrayCountProblem.forEach(element => {
        if (element != '-' && element !== 1) isVariant = false // Проверяем, вариант формата ЕГЭ или нет
    }) 
    

    if (isVariant) time(allProblemsMain, arrayCountProblem, isVariant) // Если формат ЕГЭ, то работаем c time


    // nameVariant
    if (numberVariant === 0) nameVariant.innerHTML = 'Тестовая часть' // Если создан рандомно
    else if (getLocalStorage('fromStats') !== null) nameVariant.innerHTML = myVariantPrevious.name  // Если просмотр
    else nameVariant.innerHTML = specialVariants[numberVariant].name // Если спец вариант

    isVariant ? nameVariant.innerHTML += ' (вариант формата ЕГЭ)' : nameVariant.innerHTML += ' (вариант не формата ЕГЭ)' // Заголовок 
 


    // popUp
    const popUpMain = document.querySelector('.pop_up')
    const popUpSecond = document.querySelector('.pop_up1')
    const yesBtn = document.querySelector('.yesBtn')
    const cancelBtn = document.querySelector('.cancelBtn')

    acceptBtn.addEventListener('click', () =>  popUpSecond.classList.add('active')) // Нажатие на "закончить" // Открывает PopUp
    cancelBtn.addEventListener('click', () =>  popUpSecond.classList.remove('active')) // Нажатие на "отмена" в PopUp // Закрываем PopUp
  
    document.addEventListener('click', (event) => { // Выход из PopUp
        if (!event.target.classList[0] || !event.target.classList[0].includes('pop_up')) return // Если не popUp - выходим

        const popUpArrayClassList = ['pop_up', 'pop_up_container', 'pop_up_close']
        const popUp1ArrayClassList = ['pop_up1', 'pop_up_container1', 'pop_up_close1']
        const classThisElement = event.target.classList[0]

        if (popUpArrayClassList.includes(classThisElement)) popUpMain.classList.remove('active')
        if (popUp1ArrayClassList.includes(classThisElement)) popUpSecond.classList.remove('active')
    })




    yesBtn.addEventListener('click', () => endVariant(allProblemsMain, arrayCountProblem, isVariant) ) // Нажатие на "Да" в PopUp
    

    document.addEventListener('click', event => { // Обработка события - нажатие на "обновить страницу"
        if (event.target.classList[0] === 'time2') location.reload() 
    })



    document.addEventListener('input', (event) => { 
        if (event.target.classList[0] !== 'input') return

        event.target.value = event.target.value.replace(/[^0123456789,-]/g, '') // Ограничение на input
        
        const answer = []
        const inputVariant = [...document.querySelectorAll('.input')]
        inputVariant.forEach(element => answer.push(element.value))
        setLocalStorage('answers', answer) // Сохраняем ответы в LocalStr
    })       
}