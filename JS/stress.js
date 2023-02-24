if (window.location.pathname === '/MathWeb/HTML/stress.html'){

    // Место времени; счёт; место задачи
    const timePlace = document.querySelector('.time')
    const score = document.querySelector('.score')
    const place = document.querySelector('.place')

    // Место красного счёта (изначально скрываем)
    const refreshInfo = document.querySelector('.time1') 
    refreshInfo.classList.add('close')

    // При обновлении меняем timer на false
    setLocalStorage('timer', false)

    // Если нет рекорда, рекорд = 0
    if (!getLocalStorage('record')) setLocalStorage('record', 0)

    // Если нет, то score в LocalStr, иначе записываем в счёт (если обновление страницы)
    // Дописываем рекорд
    !getLocalStorage('thisScore') ? setLocalStorage('thisScore', 0) : score.innerHTML = `Текущий счёт: <span class='thisScore'>${getLocalStorage('thisScore')}</span>`
    score.innerHTML += `(Рекорд: <span class='thisScore'>${getLocalStorage('record')}</span>)`
  
    // Если проиграл
    function endGame(){
        // Узнаем текущий счет
        const scored = +getLocalStorage('thisScore')

        // Обнуляем счетчик
        setLocalStorage('thisScore', 0)

        // Ставим красный фон + пауза
        background('red', 0)
        setLocalStorage('pause', true)

        // Делаем заглушку на 0,2 сек
        setTimeout(function(){
            removeLocalStorage('pause')

            // Обновляем результат и сбрасываем счёт
            timePlace.innerHTML = `Ваш Результат за эту попытку: <span class='thisScore'>${scored}</span> (Рекорд: <span class='thisScore'>${getLocalStorage('record')}</span>)`
            score.innerHTML = ''

            // timer - заморожено
            setLocalStorage('timer', true)

            // Показываем "красное инфо"
            refreshInfo.classList.remove('close')
        }, 350)

        // Удаляем задачу из LocalStr
        removeLocalStorage('randomProblem')

        // disabled
        const inputAll = document.querySelector('.input')
        const submitAll = document.querySelector('.submit')

        inputAll.readOnly = true
        submitAll.disabled = true
        submitAll.classList.remove('button:hover')
    }

    // Если нет задачи в LocalStr
    if (!getLocalStorage('randomProblem')) {
        setLocalStorage('randomProblem', allProblems[randomStress()])

        // Добавляем deadLine 
        const thisTime = `${getTime('h')}:${getTime('m')}:${getTime('s')} `
        const randomProblem = getLocalStorage('randomProblem').number
        const time = timeOnProblem[randomProblem]
        setLocalStorage('deadLine', deadLine(thisTime, time[0], time[1]))
    }

    // Закидываем задачу на страницу
    place.innerHTML = problemHTMLstress(getLocalStorage('randomProblem'))

    // Фокус на input
    document.querySelector('.input').focus()

    // Обновление каждую секунду
    setInterval(function() {
        // Если нет паузы и таймер = false (нет остановки), то
        if (!getLocalStorage('pause') && !getLocalStorage('timer') ){

            // Пока есть время, обновляем время
            if (!deadLineNew()){
                const thisTime = `${getTime('h')}:${getTime('m')}:${getTime('s')} `
                timePlace.innerHTML = `<span class='thisScore'> ${titleTime(thisTime, getLocalStorage('deadLine'))} </span> осталось`
            }

            // Если deadLine закончился
            if (deadLineNew()) endGame()
        }
    }, 1000)   

    
    // Если событие - кнопка submit
    document.addEventListener('click', (event) => {
        if (event.target.classList[0] === 'submit'){

            // Узнаем введенный ответ; текущий счет
            const inputAnswer = +document.querySelector('.input').value.replaceAll(',', '.')
            const scored = +getLocalStorage('thisScore')


            // Если ответ ВЕРНЫЙ
            if (inputAnswer === getLocalStorage('randomProblem').answer){
                setLocalStorage('thisScore', scored + 1)

                if (getLocalStorage('thisScore') > getLocalStorage('record')) setLocalStorage('record', +getLocalStorage('thisScore'))

                // Меняем текущий счет
                score.innerHTML = `Счет: <span class='thisScore'>${scored + 1}</span> (Рекорд: <span class='thisScore'>${getLocalStorage('record')}</span>)`
                


                // Берем новую задачу
                setLocalStorage('randomProblem', allProblems[randomStress()])

                // Ставим зеленый фон + пауза
                background('green', 0)
                setLocalStorage('pause', true)

                // Делаем заглушку на 0,85 сек
                setTimeout(function(){
                    place.innerHTML = problemHTMLstress(getLocalStorage('randomProblem'))


                    document.querySelector('.input').focus()
                    removeLocalStorage('pause')
                }, 350)

                // Формируем дату
                const thisTime = `${getTime('h')}:${getTime('m')}:${getTime('s')} `
                
                // Узнаем deadLine новой задачи
                const randomProblem = getLocalStorage('randomProblem').number
                const time = timeOnProblem[randomProblem]
                setLocalStorage('deadLine', deadLine(thisTime, time[0], time[1]))

                // disabled
                const inputAll = document.querySelector('.input')
                const submitAll = document.querySelector('.submit')

                inputAll.readOnly = true
                submitAll.disabled = true
                submitAll.classList.remove('button:hover')
                

            // Если ответ НЕВЕРНЫЙ    
            } else endGame()
        }
    })


    // Ограничение на input
    document.addEventListener('input', (event) => {
        if (event.target.classList[0] != 'input') return

        event.target.value = event.target.value.replace(/[^0123456789,-]/g, '')
    })
}
