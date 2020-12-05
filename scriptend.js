function setAttr(val1, val2, element) {
    for (var i = 0; i < val1.length; i++) {
        element.setAttribute(val1[i], val2[i]);
    }
}

let container = document.createElement('div');
setAttr(['class', 'id'], ['container d-flex flex-column justify-content-center align-items-center', 'container'], container)
document.body.append(container);

let score = document.createElement('h1');
setAttr(['class', 'style'], ['m-2', 'font-size:50px;color: #ffac40;'], score)
score.innerText = `${sessionStorage.getItem('score')}`;
container.append(score);

let username = document.createElement('input');
setAttr(['type', 'class', 'id', 'placeholder'], ['text', 'form-control mb-1', 'username', 'enter your username'], username);
container.append(username);
username.onkeydown = () => {
    if (username.onkeydown.keyCode == ' ') { alert('No spaces in username!'); } else { savebut.disabled = false; }
}

let savebut = document.createElement('button');
setAttr(['class', 'id'], ['btn btn-transparent mb-3', 'saveScoreButton'], savebut);
savebut.disabled = true;
savebut.innerText = 'Save';
container.append(savebut);
savebut.onclick = () => {
    localStorage.setItem(username.value, `${sessionStorage.getItem('score')}`);
    sessionStorage.removeItem('score');
    location.href = 'highscores.html';
}

let playAgainbut = document.createElement('button');
setAttr(['class', 'id'], ['btn btn-transparent mb-3', 'playAgain'], playAgainbut);
playAgainbut.innerText = 'Play Again';
container.append(playAgainbut);
playAgainbut.onclick = () => {
    location.href = 'game.html';
}

let goHomebut = document.createElement('button');
setAttr(['class', 'id'], ['btn btn-transparent mb-3', 'goHome'], goHomebut);
goHomebut.innerText = 'Go Home';
container.append(goHomebut);
goHomebut.onclick = () => {
    location.href = 'index.html';
}