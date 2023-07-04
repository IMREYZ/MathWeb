import { eventSendAnswer } from "./EventSendAnswer.js"
import { eventClickOnStar, eventSolution } from "./EventStarSolution.js"
import { renderSpecial, renderStatsNumber, clearStatsByDblClick, deleteOldStats, showRightAnswerHTML } from "./Render.js"

import { processIndex } from "./Index.js"
import { processCurrSubject } from "./CurrSubject.js"
import { processVariant } from "./Variant.js"
import { processSpecial } from "./Special.js"
import { processStress } from "./Stress.js"




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

