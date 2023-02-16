// Если на странице currSubject
if (window.location.pathname === `${ifGit}/currSubject.html`){


    // Считываем номер задания и имя задания
    const id = JSON.parse(localStorage.getItem('idProblem'))
    const name = JSON.parse(localStorage.getItem('nameProblem')) 

    // Все input и все submit
    const inputAll = document.getElementsByClassName('input')
    const submitAll = document.getElementsByClassName('submit')
    
    // Имя задачи и контейнер html разметки
    const allConteynerProblem = document.querySelector('.allConteynerPr')
    const nameProblem = document.querySelector('.name')
    
    // Формируем страницу HTML
    nameProblem.innerHTML = name
    const thisProblems = problems[id]
    thisProblems.forEach((element, index) => allConteynerProblem.innerHTML += problemHTMLcurr(element, index))



    // Сверка ответа на задачу, где была нажата кнопка "Ответить"
    document.addEventListener('click', (event) => {

        // Если событие - не кнопка sumbit, то выходим
        if (event.target.classList[0] != 'submit') return

        // Находим родителей кнопки; находим семейный input и меняем в нем , на .; берем id из родителя; берем правильный ответ
        const parent = event.target.closest('.conteyner')
        const answerInput = parent.querySelector('.input').value.replace(',', '.')
        const id = +parent.id
        const answerRight = thisProblems[id].answer


        // Если верно, то: цвет фона - зеленый, input - только чтение, submit - нельзя нажимать + убираем hover. 
        // Иначе: цвет фона - красный
        if (String(answerRight) === answerInput) {
            background('green', id)
            inputAll[id].readOnly = true
            submitAll[id].disabled = true
            submitAll[id].classList.remove('button:hover')
            
        } else background('red', id) 
    })

    // Ограничение на input
    document.addEventListener('input', (event) => {

        // Если событие - не кнопка input, то выходим
        if (event.target.classList[0] != 'input') return 

        // Регулярное выражение для фильтрации input
        event.target.value = event.target.value.replace(/[^0123456789,-]/g, '')})
}