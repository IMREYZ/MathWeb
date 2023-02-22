// Если на странице index
if (window.location.pathname === `/MathWeb/index.html` || window.location.pathname === `/MathWeb/`){
    console.log(111)
    
    // Находим 3 нижние кнопки + все имена 
    // Делаем скрытую кнопку variant
    const exam = document.querySelector('.exam')
    const clear = document.querySelector('.clear')
    const variant = document.querySelector('.variantBTN')
    const namesProblem = document.querySelectorAll('.nameProblem')

    variant.disabled = true

    const dayLeft = document.querySelector('.dayLeft')
    dayLeft.innerHTML = daysBeforeExam()

    

    // К названиям задач прибавляем кол-во этих задач
    const DOMarrayName = ['-', ...namesProblem]
    DOMarrayName.forEach((element, i) => {if (i != 0) element.innerHTML += ` (Всего задач: ${problems[i].length})`})

    // ТАБЛИЦА
    const deleteTable = document.querySelector('.deleteStats')
    const tableInfo = document.querySelector('.table2')
    const netTabl = document.querySelector('.netTabl')

    deleteTable.addEventListener('click', () => {
        removeLocalStorage('stats')
        tableInfo.classList.remove('show')
        tableInfo.classList.add('close')
        netTabl.classList.remove('close')
        netTabl.classList.add('show')
        deleteTable.classList.remove('show')
        deleteTable.classList.add('close')
    })

    if (getLocalStorage('stats')){


        netTabl.classList.add('close')

        let textHTML
        const infoAll = [
            {right: 0, all: 0}, {right: 0, all: 0}, {right: 0, all: 0}, {right: 0, all: 0}, {right: 0, all: 0}, {right: 0, all: 0},
            {right: 0, all: 0}, {right: 0, all: 0}, {right: 0, all: 0}, {right: 0, all: 0}, {right: 0, all: 0}, {right: 0, all: 0}
        ]

        getLocalStorage('stats').forEach((element, index) => {

            textHTML = `<tr class='defaultStats'> <td> Вариант ${index + 1} </td>`
            element.forEach((elementElement, index) => {
                if (index != 11) {
                    textHTML += `<td>${elementElement.right} / ${elementElement.count}</td>`
                    infoAll[index].right += elementElement.right
                    infoAll[index].all += elementElement.count

                } else {
                    textHTML += `<td class='zhir'>${elementElement.right} / ${elementElement.count} (${rounded(elementElement.right / elementElement.count * 100)}%)</td>`
                    console.log(elementElement)
                    infoAll[index].right += elementElement.right
                    infoAll[index].all += elementElement.count
                }
            })
        

            textHTML += '</tr>'
 
            tableInfo.innerHTML += textHTML
        })

        textHTML = `<tr> <td class='zhir'> Общая информация </td>`
            infoAll.forEach(element => {
                const final = element.all === 0 ? '???' : rounded(element.right / element.all * 100)
                textHTML += `<td class='zhir'>${element.right} / ${element.all} \n (${final}%)</td>`
                console.log(element.right, element.all, rounded(element.right / element.all * 100))
            })

        textHTML += '</tr>'
        tableInfo.innerHTML += textHTML    
    } else {
        tableInfo.classList.add('close')
        netTabl.classList.add('show')
        deleteTable.classList.add('close')
    }

    

    const stress = document.querySelector('.toStress')
    stress.addEventListener('click', () => {
        removeLocalStorage('deadLine')
        removeLocalStorage('infoStress')
        removeLocalStorage('randomProblem')
        removeLocalStorage('thisScore')
        removeLocalStorage('timer')
    })



    // Нажатие на предмет
    document.addEventListener('click', (event) => {

        if (event.target.classList[0] != 'nameProblem') return 

        // Удаляем данные с LocalStr
        removeLocalStorage('idProblem')
        removeLocalStorage('nameProblem')

        // Устанавливаем номер и имя задачи
        const parent = event.target.closest('.fullProblem')
        const id = +parent.dataset.number
        const name = parent.querySelector('.nameProblem').innerHTML

        // Записываем номер и имя задачи LocalStr
        setLocalStorage('idProblem', id)
        setLocalStorage('nameProblem', name)

        // Все countProblem = 0
        countProblemToNumber(0)

        defaultBtnVariant()
    })



    // Нажатие на "+" или "-" 
    document.addEventListener('click', (event) => {

        // Если есть дата-атрибута button нет, то выходим
        if (!event.target.dataset.button) return 

        // Находим соответствующий input у кнопки
        const parent = event.target.closest('.fullProblem')
        const input = parent.querySelector('.countProblem')

        const allCountProblem = [...document.getElementsByClassName('countProblem')]
        allCountProblem.forEach(element => element.classList.remove('font-weight'))

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
        
        const allCountProblem = [...document.getElementsByClassName('countProblem')]
        allCountProblem.forEach(element => element.classList.remove('font-weight'))

        // Смена кнопки "Составить вариант"
        changeBtnVariant()

    })
            


    // Нажатие на "Очистить всё"
    clear.addEventListener('click', () => {

        // Все countProblem = 0
        countProblemToNumber(0)
        
        const allCountProblem = [...document.getElementsByClassName('countProblem')]
        allCountProblem.forEach(element => element.classList.remove('font-weight'))

        // Смена кнопки "Составить вариант"
        changeBtnVariant()

    })



    // input "countProblem"
    document.addEventListener('input', (event) => {

        // Если event - не countProblem, выходим
        if (event.target.classList[0] != 'countProblem') return 

        // Смена кнопки "Составить вариант"
        changeBtnVariant()

        const allCountProblem = [...document.getElementsByClassName('countProblem')]
        allCountProblem.forEach(element => element.classList.remove('font-weight'))

        event.target.classList.add('font-weight')

        // Регулярное выражение для фильтрации input
        event.target.value = event.target.value.replace(/[-]/g, '')
        
    })




    // Нажатие на "составить вариант"
    variant.addEventListener('click', () => {

        // Удаляем данные с LocalStr
        removeLocalStorage('countProblem')
        removeLocalStorage('variant')
        removeLocalStorage('deadLine')
        removeLocalStorage('againVariant')
        removeLocalStorage('answers')

        const allCountProblem = [...document.getElementsByClassName('countProblem')]
        allCountProblem.forEach(element => element.classList.remove('font-weight'))

        // Добавление в localStorage массив значений количества заданий и обнуление value
        const arrayCountProblem = pushArrayCountProblem()
        setLocalStorage('countProblem', arrayCountProblem)

        //Все countProblem = 0

        countProblemToNumber(0)
        
        defaultBtnVariant()
    })
}


