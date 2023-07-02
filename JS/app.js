import { eventSendAnswer } from "./eventSendAnswer.js"
import { eventClickOnStar, eventSolution } from "./eventStarSolution.js"
import { renderSpecial, renderStatsNumber, clearStatsByDblClick, deleteOldStats, showRightAnswerHTML } from "./render.js"

import { processIndex } from "./index.js"
import { processCurrSubject } from "./currSubject.js"
import { processVariant } from "./variant.js"
import { processSpecial } from "./special.js"
import { processStress } from "./stress.js"



eventSolution() // Открытие/закрытие решения
renderSpecial() // 4051 = false (для новых задач)
renderStatsNumber() // 4051 = {0, 0, 0} (для новых задач)
eventClickOnStar() // Нажатие на звезду
showRightAnswerHTML() // Открытие/закрытие правильного ответа
deleteOldStats() // Удаление старой статистики
eventSendAnswer() // Отправка задания
clearStatsByDblClick() // Удаление статистики о задании


const currPage = window.location.pathname

if (currPage === `/MathWeb/index.html` || currPage === `/MathWeb/`) processIndex()
if (currPage === `/MathWeb/HTML/currSubject.html` ) processCurrSubject()
if (currPage === `/MathWeb/HTML/variant.html`) processVariant()
if (currPage === '/MathWeb/HTML/stress.html') processStress()
if (currPage === '/MathWeb/HTML/special.html') processSpecial()

