let allquizzes = [];


function createQuizz() { // Ao clicar em criar quizz, a tela 3A (info basicas) será apresentada
    alert('Oi');
    const screen3 = document.querySelector('.screen3A');
    screen3.classList.add('show-screen');
}

getquizzes();

function getquizzes(){

    const promise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
    promise.then( dadosquizz );
}

function dadosquizz(resposta){

    allquizzes = resposta.data

    colocarQuizz();
}

function colocarQuizz(){

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
