function createQuizz() { // Ao clicar em criar quizz, a tela 3A (info basicas) será apresentada
    alert('Oi');
    const screen3 = document.querySelector('.screen3A');
    screen3.classList.add('show-screen');
}

function continueQuestions() { // Ao clicar em prosseguir perguntas, a tela 3B (perguntas) será apresentada
    alert('oioi');
    const screen3 = document.querySelector('.screen3B');
    screen3.classList.add('show-screen');
}

function continueLevel() { // Ao clicar em cprosseguir níveis, a tela 3C (níveis) será apresentada
    alert('deu certo');
    const screen3 = document.querySelector('.screen3C');
    screen3.classList.add('show-screen');
}

function falha(){
    alert('Por favor, preencha os dados corretamente!');
}


function showQuizz(){
    /////
}