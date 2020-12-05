function setAttr(val1, val2, element) {
    for (var i = 0; i < val1.length; i++) {
        element.setAttribute(val1[i], val2[i]);
    }
}

let container = document.createElement('div');
setAttr(['class', 'id'], ['container d-flex flex-column justify-content-center align-items-center', 'container'], container)
document.body.append(container);

let title = document.createElement('h1');
setAttr(['class'], ['m-2'], title)
title.innerText = 'Quick Quiz';
container.append(title);

let playlink = document.createElement('a');
playlink.href = `game.html`;
playlink.innerText = 'Play';
setAttr(['class', 'id', 'role'], ['btn btn-lg btn-block m-2 bg', 'play', 'button'], playlink)
    //let playbut = document.createElement('button');
    //playlink.append(playbut);
container.append(playlink);

let highScoreslink = document.createElement('a');
highScoreslink.href = `highscores.html`;
highScoreslink.innerText = 'High Scores';
setAttr(['class', 'id', 'role'], ['btn btn-lg btn-block m-2 bg', 'highScores', 'button'], highScoreslink)
    //let highScoresbut = document.createElement('button');
    //highScoreslink.append(highScoresbut);
container.append(highScoreslink);