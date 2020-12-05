function setAttr(val1, val2, element) {
    for (var i = 0; i < val1.length; i++) {
        element.setAttribute(val1[i], val2[i]);
    }
}

let container = document.createElement('div');
setAttr(['class', 'id'], ['container d-flex flex-column justify-content-center align-items-center', 'container'], container)
document.body.append(container);

let highScores = document.createElement('h1');
setAttr(['class', 'style'], ['m-2', 'font-size:50px;color: #ffac40;'], highScores)
highScores.innerText = `High Scores`;
container.append(highScores);




let names = [];
let scores = [];

function getScores() {
    for (var i = 0; i < localStorage.length; i++) {
        names[i] = localStorage.key(i);
    }

    for (var j = 0; j < localStorage.length; j++) {
        scores[j] = localStorage.getItem(localStorage.key(j));
    }
}
getScores();


let scoreList = document.createElement('p');
setAttr(['id'], ['scoreList'], scoreList);
for (var k = 0; k < names.length; k++) {
    scoreList.innerHTML += `${names[k]} - ${scores[k]}<br>`;
}
container.append(scoreList);

let goHomebut = document.createElement('button');
setAttr(['class', 'id'], ['btn btn-transparent mb-3', 'goHome'], goHomebut);
goHomebut.innerText = 'Go Home';
container.append(goHomebut);
goHomebut.onclick = () => {
    location.href = 'index.html';
}