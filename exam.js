let container = document.getElementById("questionContainer");
let kanter = 0;
for (const aQuestion in questionCollection) {
  ++kanter;
  const theQuestion = questionCollection[aQuestion];
  container.innerHTML += generateQuestionHTML(theQuestion, kanter);
}
