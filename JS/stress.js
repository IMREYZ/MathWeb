if (window.location.pathname === '/MathWeb/HTML/stress.html'){

    // Место времени; счёт; место задачи
    const timePlace = document.querySelector('.time')
    const score = document.querySelector('.score')
    const place = document.querySelector('.place')
    const refreshInfo = document.querySelector('.time1')

    
    refreshInfo.classList.add('close')
    setLocalStorage('timer', false)



    if (!getLocalStorage('record')) setLocalStorage('record', 0)

    // Если нет, то score в LocalStr, иначе записываем в счёт (если обновление страницы)
    !getLocalStorage('thisScore') ? setLocalStorage('thisScore', 0) : score.innerHTML = `Текущий счёт: <span class='thisScore'>${getLocalStorage('thisScore')}</span>`
    score.innerHTML += ` (Рекорд: <span class='thisScore'>${getLocalStorage('record')}</span>)`
     
    

    // Если нет задачи в LocalStr
    if (!getLocalStorage('randomProblem')) {
        setLocalStorage('randomProblem', allProblems[randomStress()])

        // Добавляем deadLine 
        const date = new Date();
        const thisTime = `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())} `
        const randomProblem = getLocalStorage('randomProblem').number
        const time = timeOnProblem[randomProblem]
        setLocalStorage('deadLine', deadLine(thisTime, time[0], time[1]))
    }
    // Закидываем задачу на страницу
    place.innerHTML = problemHTMLstress(getLocalStorage('randomProblem'))


    document.querySelector('.input').focus()

    


    setInterval(function() {
        if (!getLocalStorage('pause') && !getLocalStorage('timer') ){


            // Пока есть время, обновляем время
            if (!deadLineNew()){
                const date = new Date();
                const thisTime = `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())} `
                timePlace.innerHTML = `<span class='thisScore'> ${titleTime(thisTime, getLocalStorage('deadLine'))} </span> осталось`
            }


            // Если deadLine закончился
            if (deadLineNew()){

                // Удаляем счет и в верстке, и в данных
                setLocalStorage('thisScore', 0)
                score.innerHTML = `Счёт: <span class='thisScore'> 0 </span>(Рекорд: <span class='thisScore'>${getLocalStorage('record')} </span>)`

                // Удаляем случайное задание
                removeLocalStorage('randomProblem')

                // Делаем красный фон
                background('red', 0)

                // Задаём новое случайное задание и выводим на страницу новое
                setLocalStorage('randomProblem', allProblems[randomStress()])



                // Узнаем текущее время
                const date = new Date();
                const thisTime = `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())} `
                
                // В deadLine записываем дедлайн текущего номера задания
                const randomProblem = getLocalStorage('randomProblem').number
                const time = timeOnProblem[randomProblem]
                setLocalStorage('deadLine', deadLine(thisTime, time[0], time[1]))

                // Выводим на страницу, сколько осталось до конца
                timePlace.innerHTML = titleTime(thisTime, getLocalStorage('deadLine'))

                setLocalStorage('timer', true)
            }
        }
    }, 1000)   

    


    document.addEventListener('click', (event) => {
        // Если событие - кнопка submit
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
                }, 850)

                // Формируем дату
                const date = new Date();
                const thisTime = `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())} `
                
                // Узнаем deadLine новой задачи
                const randomProblem = getLocalStorage('randomProblem').number
                const time = timeOnProblem[randomProblem]
                setLocalStorage('deadLine', deadLine(thisTime, time[0], time[1]))
                

            // Если ответ НЕВЕРНЫЙ    
            } else {
                // Обнуляем счетчик
                setLocalStorage('thisScore', 0)

                // Ставим красный фон + пауза
                background('red', 0)
                setLocalStorage('pause', true)

                

                // Делаем заглушку на 0,85 сек
                setTimeout(function(){
                    removeLocalStorage('pause')

                    timePlace.innerHTML = `Ваш Результат за эту попытку: <span class='thisScore'>${scored}</span> (Рекорд: <span class='thisScore'>${getLocalStorage('record')}</span>)`
                    score.innerHTML = ''




                    setLocalStorage('timer', true)

                    refreshInfo.classList.remove('close')
                }, 1050)

                // Берем новую задачу
                setLocalStorage('randomProblem', allProblems[randomStress()])    
            }
        }
    })

    document.addEventListener('input', (event) => {
        if (event.target.classList[0] != 'input') return

        event.target.value = event.target.value.replace(/[^0123456789,-]/g, '')
    })
}
