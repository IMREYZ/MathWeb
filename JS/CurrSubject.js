import { sortProblem } from "./SortProblem.js"
import { currAll } from "./CurrProblem.js"
import { createAndSaveAll } from "./SaveProblem.js"
import { getLocalStorage, setLocalStorage, getThisProblems} from "./LocalStorage.js"
import { problemHTMLcurr } from "./ProblemHTML.js"
import { getNormalClass, weight900 } from "./OtherFunctions.js"
import { problems, themeProblems } from "./Base.js"
import { getCheckboxes } from "./GetLayout.js"


// Если на странице currSubject
function processCurrSubject(){

    const id = getLocalStorage('idProblem') // Номер задания
    const name = getLocalStorage('nameProblem') // Имя задания
    const thisSelect = getLocalStorage('select') // Забираем из LocalStr select
    const allProblems = problems[id] // Все задачи
    const themeThisProblem = themeProblems[id] // Темы задачи
    const arrayCheckbox = getLocalStorage('checkbox') // Массив checkbox

    const title = document.querySelector('.title') // Заголовок
    const allConteynerProblem = document.querySelector('.allConteynerPr') // Имя задачи
    const filterConteyner = document.querySelector('.fil') // Контейнер
    const nameProblem = document.querySelector('.name') // Контейнер html разметки
    const optionCurr = document.querySelector('.optionCurr') // Текущий select
    const currSort = optionCurr.querySelector(`[value=${thisSelect}]`)
    const minusBox = document.querySelector('.minusBox') // Убрать всё
    const plusBox = document.querySelector('.plusBox') // Добавить всё


    nameProblem.innerHTML = name
    title.innerHTML = name
    
    if (!getLocalStorage('thisProblems')) setLocalStorage('thisProblems', allProblems) // Если в LocalStr нет текущих задач - добавляем все задачи
    if (!getLocalStorage('select')) setLocalStorage('select', 'oldToNew') // Если в LocalStr нет select - oldToNew




    // Добавляем Checkbox на страницу     
    filterConteyner.innerHTML += getCheckboxes(themeThisProblem)




    if (thisSelect) { // Если есть select
        sortProblem(thisSelect) // Сортировка к изначальному виду
        currSort.selected = true // Возвращаем к тому, что было до обновления
    }

    

    const allCheckbox = [...document.querySelectorAll('.checkbox')] // Все checkbox в HTML
    if (arrayCheckbox){ // Если в LocalStr был checkbox  (в случае обновления страницы)
        allCheckbox.forEach(element => { // Проходимся по всем checkbox HTML        
            if (arrayCheckbox.includes(element.id)) { // Если id in arrayCheckbox, то
                element.checked = true // Делаем checked = true
                weight900(element.id, true) // Добавляем w900
            }
        })
        
    } else { // Если не было в LocalStr
        allCheckbox.forEach(element => { // Проходимся по всем checkbox HTML
            element.checked = true // checked
            weight900(element.id, true) // w900
        })
    }



    // Первый вывод заданий 
    getThisProblems().forEach(element => allConteynerProblem.innerHTML += problemHTMLcurr(element))


    // Возвращаем цвета; инпуты; инфу об "показать ответ"
    currAll()

    

    document.addEventListener('click', event => { // Обработка события нажатия на checkbox
        if (event.target.classList[0] !== 'checkbox') return // Если не checkbox - выходим

        if (!getLocalStorage('checkbox')) setLocalStorage('checkbox', []) // Если checkbox нет в LocalStr - пустой массив

        const checkboxArray = [] // Массив значений checkbox

        allCheckbox.forEach(element => { // Проходимся по всем checkbox HTML
            if (element.checked) { // Если checked
                checkboxArray.push(element.id) // Добавляем в массив id
                weight900(element.id, true) // Добавляем w900

            } else weight900(element.id, false) // Иначе убираем w900
        })
        
        setLocalStorage('checkbox', checkboxArray) // Устанавлием checkbox в LocalStr

        const newThisProblems = [] // Массив новых задач

        allProblems.forEach(problem => { // Проходимся по базовому массиву всех задач
            const normalTypeThisProblem = getNormalClass(problem.type)

            if (checkboxArray.includes(normalTypeThisProblem)) { // Если type задачи in checkboxArray: добавляем задачу в новый массив
                newThisProblems.push(problem) 
            }
        })
        
        sortProblem(getLocalStorage('select')) // сортируем эти задачи
        setLocalStorage('thisProblems', newThisProblems) // Обновляем текущие задачи
        
        location.reload()        
    
        allConteynerProblem.innerHTML = ''
        getThisProblems().forEach(element => allConteynerProblem.innerHTML += problemHTMLcurr(element)) // Выводим задания

        currAll()
    })




    optionCurr.addEventListener('change', () => {  // Обработка события "Сортировка"
        const thisOption = optionCurr.value // Текущий пик
        
        sortProblem(thisOption) // Сортируем по новому изменению

        setLocalStorage('select', thisOption) // Добавляем в LocalStr select

        location.reload()

        allConteynerProblem.innerHTML = ''
        getThisProblems().forEach(element => allConteynerProblem.innerHTML += problemHTMLcurr(element)) // Образовываем обновленную страницу

        currAll()
    })

    


    minusBox.addEventListener('click', () => { // Обработка события - нажатие на "удалить всё"
        if (!getLocalStorage('checkbox')) setLocalStorage('checkbox', []) // Если checkbox нет в LocalStr - пустой массив

        allCheckbox.forEach(element => { // Проходимся по всем checkbox HTML
            element.checked = false
            weight900(element.id, false)
        })

        setLocalStorage('thisProblems', []) // Текущие задачи = []
        setLocalStorage('checkbox', []) // checkbox = []
        allConteynerProblem.innerHTML = '' // Выводим задания

        location.reload()

        currAll()
    })




    plusBox.addEventListener('click', () => { // Обработка события - нажатие на "добавить всё"
        if (!getLocalStorage('checkbox')) setLocalStorage('checkbox', []) // Если checkbox нет в LocalStr - пустой массив

        const fullBox = []

        allCheckbox.forEach(element => { // Проходимся по всем checkbox HTML
            element.checked = true
            weight900(element.id, true)
            fullBox.push(element.id)
        })

        setLocalStorage('checkbox', fullBox) // checkbox = все checkbox
        setLocalStorage('thisProblems', allProblems) // Все задачи
        sortProblem(getLocalStorage('select')) // Сортируем
        
        location.reload()

        allConteynerProblem.innerHTML = ''
        getThisProblems().forEach(element => allConteynerProblem.innerHTML += problemHTMLcurr(element)) // Выводим задания

        currAll()
    })


        
    createAndSaveAll(allProblems)


    // if (true) DEMO()
    // Мгновенное обновление или нет 
    
    

    document.addEventListener('input', event => { // Ограничение на input
        if (event.target.classList[0] !== 'input') return // Если событие - не кнопка input, то выходим

        event.target.value = event.target.value.replace(/[^0123456789,-]/g, '') // Регулярное выражение для фильтрации input
    })
}

export {processCurrSubject}
