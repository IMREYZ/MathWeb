// Если на странице variant
if (window.location.pathname === `/MathWeb/HTML/variant.html`){
    
    // Кнопка подтверждения; Контейнер всех заданий; Место времени; Кнопка "назад"; Имя варианта
    const acceptBtn = document.querySelector('.accept')
    const allConteynerVariant = document.querySelector('.allConteynerVar')
    const timePlace = document.querySelector('.time')
    const nameVariant = document.querySelector('.nameVariant') 

    // Считываем кол-во выбранных номеров
    const arrayCountProblem = getLocalStorage('countProblem')

    // Массив, состоящий из объектов заданий 
    let allProblemsMain = []
    let allProblemsHelp = []

    // Убирание заглушки, из-за которой не выходят много "результатов"
    removeLocalStorage('flagEndVariant')

    // Формируем список объектов задач: если в LocalStr есть variant, то в allProblemsMain variant из LocalStr
    // И если состояние варианта afk, то удаляем ответы из LocalStr
    // Иначе: в arrayCountProblem кладем countProblem из LocalStr
    if (getLocalStorage('variant')){
        allProblemsMain = getLocalStorage('variant')
    
        if (getLocalStorage('againVariant') === 'afk') removeLocalStorage('answers')
        
    } else {
        for (let i = 1; i <= 11; i++){ allProblemsHelp.push(randomProblem(i, arrayCountProblem[i])) }
        allProblemsHelp.forEach(elementFirst => elementFirst.forEach(elementSecond => allProblemsMain.push(elementSecond)))
    }


    // Выводим задания на страницу
    allProblemsMain.forEach(elementFirst => allConteynerVariant.innerHTML += problemHTMLvariant(elementFirst))

    // Сохранение ответов
    if (getLocalStorage('answers')){
        const LocalStrAnswer = getLocalStorage('answers')

        const inputVariant = [...document.getElementsByClassName('input')]

        inputVariant.forEach((element, i) => element.value = LocalStrAnswer[i])

    }


    // Записываем список объектов задач в LocalStr в variant (для случая обновления страницы)
    setLocalStorage('variant', allProblemsMain)



    // Проверяем, вариант формата ЕГЭ или нет
    let isVariant = true
    arrayCountProblem.forEach(element => {if (element != '-' && element != 1) isVariant = false})


    // Если формат ЕГЭ, то работаем c time; заголовок
    isVariant ? time(allProblemsMain) : null
    isVariant ? nameVariant.innerHTML += ' (вариант формата ЕГЭ)' : nameVariant.innerHTML += ' (вариант НЕ формата ЕГЭ)'
        
    const popUp = document.querySelector('.pop_up1')
    const yesBtn = document.querySelector('.yesBtn')
    const cancelBtn = document.querySelector('.cancelBtn')

    // Нажатие на "закончить"
    acceptBtn.addEventListener('click', () => {
        console.log(111)
        // Забираем все input ответы пользоватлея
        popUp.classList.add('active')
    })
    
    cancelBtn.addEventListener('click', () => {
        console.log(222)
        popUp.classList.remove('active')
    })


    yesBtn.addEventListener('click', () => {
        console.log(333)
        const inputVariant = [...document.getElementsByClassName('input')]
        let answer = []

        // Смена режима в afk
        setLocalStorage('againVariant', 'afk')

        // Уведомление для пользователей за место времени
        timePlace.innerHTML = 'Для повторного прохождения этого варианта обновите страницу'

        // Текст иконки
        document.querySelector('.titleVariant').innerHTML = 'Результат'

        // Введенные ответы
        inputVariant.forEach(element => answer.push(element.value))
            
        // Проверка на правильность ответа
        let rightAnswers = 0
        answer.forEach((element, index) => {
            if (element != ''){ 
                if (element.replace(',', '.') === String(allProblemsMain[index].answer)){
                    rightAnswers ++
                    background('green', index)
                } else background('red', index)
            } else background('red', index)
        })

        // Блокируем "завершить работу" и все инпуты
        acceptBtn.disabled = true
        for (let i = 0; i < answer.length ; i ++) document.getElementsByClassName("input")[i].readOnly = true

 
        isVariant ? addPopUp(textPopUpFull, answer, rightAnswers, secondBallArray) : addPopUp(textPopUp, answer, rightAnswers)
        popUp.classList.remove('active')
    })


    

             
    // Ограничение на input
    document.addEventListener('input', (event) => {
        if (event.target.classList[0] != 'input') return

        event.target.value = event.target.value.replace(/[^0123456789,-]/g, '')

        // Сохраняем ответы в LocalStr
        let answer = []
        const inputVariant = [...document.getElementsByClassName('input')]
        inputVariant.forEach(element => answer.push(element.value))
        setLocalStorage('answers', answer)
    })
        
}