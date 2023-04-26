// Если на странице index
if (window.location.pathname === `/MathWeb/index.html` || window.location.pathname === `/MathWeb/`){

    if (!getLocalStorage('special')){
        let result = {}
        allProblems.forEach(element => result[element.id] = false)
        
        setLocalStorage('special', result)
    }

    // Находим 3 нижние кнопки + все имена 
    // Делаем скрытую кнопку variant
    const exam = document.querySelector('.exam')
    const clear = document.querySelector('.clearAll')
    const variant = document.querySelector('.variantBTN')
    const special = document.querySelector('.toStress1')
    const namesProblem = document.querySelectorAll('.nameProblem')
    const allProblemHTML = document.querySelector('.vsegoProblems')

    // Скрываем кнопку "вариант"
    variant.disabled = true

    // Количество дней до ЕГЭ   
    const dayLeft = document.querySelector('.doEge')
    const dayLeftCount = daysBeforeExam()
    dayLeft.innerHTML = getFullDaysBeforeExam(dayLeftCount)

    allProblemHTML.innerHTML = `Всего задач в банке: <span class='w900'>${allProblems.length}</span>`

    

    // К названиям задач прибавляем кол-во этих задач
    const DOMarrayName = ['-', ...namesProblem]
    DOMarrayName.forEach((element, index) => {if (index != 0) element.innerHTML += ` (Всего задач: ${problems[index].length})`})



    // ТАБЛИЦА

    // Кнопка "удалить"; контейнер таблицы; "Здесь могла бы быть ваша статистика"
    const deleteTable = document.querySelector('.deleteStats')
    const tableInfo = document.querySelector('.table2')
    const netTabl = document.querySelector('.netTabl')

    // Нажатие на "deleteTable"
    deleteTable.addEventListener('click', () => {

        // Удаляем данные из LocalStr; закрываем таблицу; открываем заглушку; закрываем кнопку "удалить"
        removeLocalStorage('stats')

        tableInfo.classList.add('close')

        netTabl.classList.remove('close')
        netTabl.classList.add('show')

        deleteTable.classList.add('close')
    })

    // Вся статистика  вариантов
    const statsAboutVariants = getLocalStorage('stats')

    // Если есть, то
    if (statsAboutVariants){

        // Закрываем заглушку
        netTabl.classList.add('close')

        // HTML текст для tableInfo
        let textHTML
        // Массив всех заданий
        let infoAll = []
        for (let i = 0; i <= 11; i ++) infoAll.push({right: 0, all: 0})

        statsAboutVariants.forEach(element => {
            // Начало HTML
           
            let textHTML = `<td class='AAAA' class='nameVariantIndex' > 
                                <span class='indexText' id = ${element.idVariant}>
                                ${element.name}
                                </span>
                            </td>`
            
            // Заполняем вариант
            element.stats.forEach((elementElement, index) => {
                const resultVariantHTML = ` (${parseInt(elementElement.right / elementElement.count * 100)}%)</td>`
                textHTML += `<td>${elementElement.right} / ${elementElement.count}` + (index === 11 ? resultVariantHTML : '</td>')

                infoAll[index].right += elementElement.right
                infoAll[index].all += elementElement.count
            })

            textHTML += '</tr>'
            
            // Выводим вариант
            tableInfo.innerHTML += textHTML
        })
        
        // Заполняем итоговую статистику
        textHTML = `<tr> <td class='zhir'> Общая информация </td>`
            infoAll.forEach(element => {
                const final = element.all === 0 ? '???' : parseInt(element.right / element.all * 100)
                textHTML += `<td class='zhir'>${element.right} / ${element.all} \n (${final}%)</td>`
            })

        textHTML += '</tr>'
        tableInfo.innerHTML += textHTML 

    // Если нет варианта в LocalStr
    } else {
        tableInfo.classList.add('close')
        netTabl.classList.add('show')
        deleteTable.classList.add('close')
    }


    // Нажатие на стресс-тест
    const stress = document.querySelector('.toStress')
    stress.addEventListener('click', () => cleanUpLocalStorage())



    // Нажатие на предмет
    document.addEventListener('click', (event) => {

        if (event.target.classList[0] != 'nameProblem') return 

        // Удаляем данные с LocalStr
        cleanUpLocalStorage()

        // Устанавливаем номер и имя задачи
        const parent = event.target.closest('.fullProblem')
        const id = +parent.dataset.number
        const name = parent.querySelector('.nameProblem').innerHTML

        // Записываем номер и имя задачи LocalStr
        setLocalStorage('idProblem', id)
        setLocalStorage('nameProblem', name)

        // Все countProblem = 0
        countProblemToNumber(0)

        // Смена кнопки "Составить вариант"
        defaultBtnVariant()
    })



    // Нажатие на "+" или "-" 
    document.addEventListener('click', (event) => {

        // Если есть дата-атрибута button нет, то выходим
        if (!event.target.dataset.button) return 

        // Находим соответствующий input у кнопки
        const parent = event.target.closest('.fullProblem')
        const input = parent.querySelector('.countProblem')

        // Удаляем жирность всем кнопкам
        const allCountProblem = [...document.getElementsByClassName('countProblem')]
        allCountProblem.forEach(element => element.classList.remove('font-weight'))

        // Толстая кнопка при нажатии
        input.classList.add('font-weight')

        // Изменяем значение input
        event.target.dataset.button === 'plus' ? input.value ++ : (input.value >= 1 ? input.value -- : null)
        
        // Смена кнопки "Составить вариант"
        changeBtnVariant()
    })



    // Нажатие на "Формат экзамена"
    exam.addEventListener('click', () => {

        // Все countProblem = 1
        countProblemToNumber(1)
        
        // Удаляем жирность всем кнопкам
        const allCountProblem = [...document.getElementsByClassName('countProblem')]
        allCountProblem.forEach(element => element.classList.remove('font-weight'))

        // Смена кнопки "Составить вариант"
        changeBtnVariant()

    })
            


    // Нажатие на "Очистить всё"
    clear.addEventListener('click', () => {

        // Все countProblem = 0
        countProblemToNumber(0)
        
        // Удаляем жирность всем кнопкам
        const allCountProblem = [...document.getElementsByClassName('countProblem')]
        allCountProblem.forEach(element => element.classList.remove('font-weight'))

        // Смена кнопки "Составить вариант"
        changeBtnVariant()

    })



    // input "countProblem"
    document.addEventListener('input', (event) => {

        // Если event - не countProblem, выходим
        if (event.target.classList[0] !== 'countProblem') return 

        // Смена кнопки "Составить вариант"
        changeBtnVariant()

        // Удаляем жирность всем кнопкам
        const allCountProblem = [...document.getElementsByClassName('countProblem')]
        allCountProblem.forEach(element => element.classList.remove('font-weight'))

        event.target.classList.add('font-weight')

        // Регулярное выражение для фильтрации input
        event.target.value = event.target.value.replace(/[-]/g, '')
        event.target.value = withOutBadZero(event.target.value)
        if (+event.target.value >= 200) event.target.value = 100
        
    })


    document.addEventListener('input', (event) => {

        if (!['start', 'finish'].includes(event.target.classList[0])) return 

        event.target.value = event.target.value.replace(/[-]/g, '')
        event.target.value = withOutBadZero(event.target.value)
        if (+event.target.value > 100) event.target.value = 100
        
        
        changeBtnVariant()

    })

    document.addEventListener('click', (event) => {
        if (['start', 'finish'].includes(event.target.classList[0])) return

        const startBtn = document.querySelector('.start')
        const finishBtn = document.querySelector('.finish')
        const valueStart = +startBtn.value
        const valueFinish = +finishBtn.value

        if (valueStart > valueFinish) {
            startBtn.value = 0
            finishBtn.value = 100
        }


    })

    document.addEventListener('click', event => {
        if (event.target.classList[0] !== 'real') return

         // Удаляем данные с LocalStr
         cleanUpLocalStorage()

        const idVariant = +event.target.id
        setLocalStorage('numberVariant', idVariant)
    })


    // Нажатие на "составить вариант"
    variant.addEventListener('click', () => {

        // Удаляем данные с LocalStr
        cleanUpLocalStorage()

        // Удаляем жирность всем кнопкам
        const allCountProblem = [...document.getElementsByClassName('countProblem')]
        allCountProblem.forEach(element => element.classList.remove('font-weight'))

        // Добавление в localStorage массив значений количества заданий и обнуление value
        const arrayCountProblem = pushArrayCountProblem()
        setLocalStorage('countProblem', arrayCountProblem)

        // Все countProblem = 0
        countProblemToNumber(0)
        
        // Смена кнопки "Составить вариант"
        defaultBtnVariant()

        setLocalStorage('numberVariant', 0)

        const startBtnValue = +document.querySelector('.start').value
        const finishBtnValue = +document.querySelector('.finish').value
        setLocalStorage('fromAndTo', {start: startBtnValue, finish: finishBtnValue})
    })

    special.addEventListener('click', () => {
        
        // Удаляем данные с LocalStr
        cleanUpLocalStorage()
    })

    document.addEventListener('click', event => {
        if (event.target.classList[0] !== 'indexText') return
        

        cleanUpLocalStorage()

        setLocalStorage('fromStats', 1)
        setLocalStorage('idVariant', +event.target.id)
        window.location.pathname = `/MathWeb/HTML/variant.html`
    })
}





