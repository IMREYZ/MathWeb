// Если на странице index
if (window.location.pathname === `/MathWeb/index.html` || window.location.pathname === `/MathWeb/`){
    
    // Находим 3 нижние кнопки + все имена 
    // Делаем скрытую кнопку variant
    const exam = document.querySelector('.exam')
    const clear = document.querySelector('.clear')
    const variant = document.querySelector('.variantBTN')
    const namesProblem = document.querySelectorAll('.nameProblem')

    variant.disabled = true

    
    // Удаляем данные с LocalStr
    localStorage.clear()

    // К названиям задач прибавляем кол-во этих задач
    const DOMarrayName = ['-', ...namesProblem]
    DOMarrayName.forEach((element, i) => {if (i != 0) element.innerHTML += ` (Всего задач: ${problems[i].length})`})



    // Нажатие на предмет
    document.addEventListener('click', (event) => {

        if (event.target.classList[0] != 'nameProblem') return 

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

        // Изменяем значение input
        event.target.dataset.button === 'plus' ? input.value ++ : (input.value >= 1 ? input.value -- : null)
        
        // Смена кнопки "Составить вариант"
        changeBtnVariant()
    })



    // Нажатие на "Формат экзамена"
    exam.addEventListener('click', () => {

        // Все countProblem = 1
        countProblemToNumber(1)
        
        // Смена кнопки "Составить вариант"
        changeBtnVariant()

    })
            


    // Нажатие на "Очистить всё"
    clear.addEventListener('click', () => {

        // Все countProblem = 0
        countProblemToNumber(0)
        
        // Смена кнопки "Составить вариант"
        changeBtnVariant()

    })



    // input "countProblem"
    document.addEventListener('input', (event) => {

        // Если event - не countProblem, выходим
        if (event.target.classList[0] != 'countProblem') return 

        // Смена кнопки "Составить вариант"
        changeBtnVariant()

        // Регулярное выражение для фильтрации input
        event.target.value = event.target.value.replace(/[-]/g, '')
        
    })




    // Нажатие на "составить вариант"
    variant.addEventListener('click', () => {

        // Удаляем данные с LocalStr
        localStorage.clear()

        // Добавление в localStorage массив значений количества заданий и обнуление value
        const arrayCountProblem = pushArrayCountProblem()
        setLocalStorage('countProblem', arrayCountProblem)

        //Все countProblem = 0

        countProblemToNumber(0)
        
        defaultBtnVariant()
    })
}


