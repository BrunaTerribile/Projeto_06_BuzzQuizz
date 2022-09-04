// Variáveis globais
let allquizzes = [];


//

function createQuizz() { // Ao clicar em criar quizz, a tela 3A (info basicas) será apresentada
    alert('Oi');
    const screen3 = document.querySelector('.screen3A');
    screen3.classList.add('show-screen');
}

function continueQuestions(){ //Ao clicar em prosseguir para criar perguntas, a tela 3B (perguntas) será apresentada
    alert('oioi');
    const screen3 = document.querySelector('.screen3B');
    screen3.classList.add('show-screen');
}

function continueLevel() { // Ao clicar em prosseguir níveis, a tela 3C (níveis) será apresentada
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

getquizzes();

function getquizzes(){ //Faz a requisição dos quizzes criados para o servidor

    const promise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
    promise.then( dadosquizz ); // Caso de sucesso: chama a função que traz os dados do quizz
}

function dadosquizz(resposta){

    allquizzes = resposta.data

    colocarQuizz();
}

function colocarQuizz(){ //Insere os quizzes na tela do usuário

    const ul = document.querySelector('.test');

    ul.innerHTML = '';

    for(let i = 0; i < allquizzes.length; i++){

        ul.innerHTML = ul.innerHTML + `
        <li class="rectangle">
                    <p class="tittle-quizz">${allquizzes[i].title}</p>
                    </li> 
        `;
    }

}

colocarQuizz()
