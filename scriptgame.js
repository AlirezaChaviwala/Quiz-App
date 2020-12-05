function setAttr(val1, val2, element) {
    for (var i = 0; i < val1.length; i++) {
        element.setAttribute(val1[i], val2[i]);
    }
}

let url = `https://opentdb.com/api.php?amount=10&type=multiple`


let container = document.createElement('div');
setAttr(['class', 'id'], ['container mt-5', 'container'], container);
document.body.append(container);

let scorerow = document.createElement('div');
setAttr(['class', 'id'], ['row d-flex flex-row justify-content-between', 'scorerow'], scorerow);
container.append(scorerow);

let leftcol = document.createElement('div');
setAttr(['class', 'style'], ['col-lg-3 col-sm-12 d-flex flex-column justify-content-center align-items-center', 'width:100vh;'], leftcol);
scorerow.append(leftcol);

let qtext = document.createElement('p');
setAttr(['class', 'id'], ['text-center', 'progressText'], qtext);
qtext.innerText = `Question`;
leftcol.append(qtext);

let progress = document.createElement('div');
setAttr(['id', 'class'], ['myProgress', 'bg-light'], progress);
leftcol.append(progress);

let progressbar = document.createElement('div');
setAttr(['id'], ['myBar'], progressbar);
progress.append(progressbar);

let rightcol = document.createElement('div');
setAttr(['class'], ['col-lg-3 col-sm-12 d-flex flex-column justify-content-center align-items-center'], rightcol);
scorerow.append(rightcol);

let scoretext = document.createElement('p');
setAttr(['class'], ['text-center'], scoretext);
scoretext.innerText = 'Score';
rightcol.append(scoretext);

let scoreCount = 0;
let scorediv = document.createElement('div');
let score = document.createElement('p');
setAttr(['class', 'id'], ['text-center', 'scorenum'], score);
score.innerText = `${scoreCount}`;
scorediv.append(score);
rightcol.append(scorediv);

let questionrow = document.createElement('div');
setAttr(['class'], ['row d-flex flex-column justify-content-left align-items-start'], questionrow);
container.append(questionrow);



if (localStorage.length === 10) {
    localStorage.clear();
}

let resultArray = [];
async function getQuizData() {
    try {

        let response = await fetch(url);
        let result = await response.json();
        resultArray = result.results;
        //console.log(resultArray);
        getQuestion(resultArray, 0);
    } catch (err) {
        console.error(err);
    }
}
getQuizData();

function getQuestion(array, questionIndex) {

    let correctChoiceIndex = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    //console.log(correctChoiceIndex);
    let choices = array[questionIndex];
    let options = array[questionIndex].incorrect_answers;
    options.splice(correctChoiceIndex - 1, 0, choices.correct_answer)

    questionrow.innerHTML = ``;
    let question = document.createElement('p');
    setAttr(['class', 'style'], ['mt-4 mb-4 ml-1', 'font-size:23px;'], question);
    question.innerHTML = `${array[questionIndex].question}`;
    questionrow.append(question);

    questionIndex++;
    //console.log(options[options.indexOf(choices.correct_answer)]);
    for (var j = 0; j < 4; j++) {

        var option = document.createElement('div');
        setAttr(['class', 'id'], ['input-group mb-4 optiondiv', `option${j+1}`], option);
        questionrow.append(option);

        var numtag = document.createElement('div');
        setAttr(['class', 'id'], ['input-group-prepend', `numtag${j+1}`], numtag);
        option.append(numtag);
        var optionnum = document.createElement('span');
        setAttr(['class', 'id'], ['input-group-text option-color rounded-0', `basic-addon${j+1}`], optionnum);
        optionnum.innerText = `${j+1}`;
        numtag.append(optionnum);

        let but = document.createElement('input');
        setAttr(['type', 'class', 'id'], ['button', 'btn btn-lg choice-text rounded-0', `but${j+1}`], but);
        but.value = `${options[j]}`;
        option.append(but);

        but.onclick = () => {
            if (but.value == `${options[options.indexOf(choices.correct_answer)]}`) { scoreCount += 10; }
            console.log(scoreCount);
            score.innerText = `${scoreCount}`;

            if (questionIndex <= 9 && questionIndex > 0) {
                setAttr(['style'], [`width:${(questionIndex)*10}%`], document.getElementById('myBar'));
                getQuestion(resultArray, questionIndex);
            } else if (questionIndex == 10) {
                sessionStorage.setItem("score", `${scoreCount}`);
                location.href = 'end.html';
            }
        }
    }

}