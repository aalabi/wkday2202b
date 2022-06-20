function generateQuestionHTML(question, questionNo) {
  let dom;
  dom = `    
        <div class="row question-answer">
            <div class="col">
                <p class="question">
                    <span class="question-no">${questionNo}</span>
                    ${question.question}
                </p>
                <ol class="options">
                    <li><input type="radio" class="an-options" name="q${questionNo}">${question.options[0]}</li>
                    <li><input type="radio" class="an-options" name="q${questionNo}">${question.options[1]}</li>
                    <li><input type="radio" class="an-options" name="q${questionNo}">${question.options[2]}</li>
                    <li><input type="radio" class="an-options" name="q${questionNo}">${question.options[3]}</li>
                </ol>
            </div>
        </div>    
  `;
  return dom;
}

/*----------------------------------------------------------------
    <div class="row question-answer">
            <div class="col">
                <p class="question">
                    <span class="question-no">1</span>
                    What is firstname of Alabi
                </p>
                <ol class="options">
                    <li><input type="radio" class="an-options" name="q1">Alabi</li>
                    <li><input type="radio" class="an-options" name="q1">Adebayo</li>
                    <li><input type="radio" class="an-options" name="q1">Osagbokan</li>
                    <li><input type="radio" class="an-options" name="q1">Ivie</li>
                </ol>
            </div>
        </div>
*/
