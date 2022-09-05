// Variáveis globais
let allquizzes = [];


//

function createQuizz() { // Ao clicar em criar quizz, a tela 3A (info basicas) será apresentada
    alert('deu certo');
    const screen3A = document.querySelector('.screen3A');
    screen3A.classList.add('show-screen');
}

function continueQuestions(){ //Ao clicar em prosseguir para criar perguntas, a tela 3B (perguntas) será apresentada
    alert('deu certo');
    const screen3B = document.querySelector('.screen3B');
    screen3B.classList.add('show-screen');
}

function continueLevels() { // Ao clicar em prosseguir níveis, a tela 3C (níveis) será apresentada
    alert('deu certo');
    const screen3C = document.querySelector('.screen3C');
    screen3C.classList.add('show-screen');
}

function continueSucess() { // Ao clicar em prosseguir níveis, a tela 3D (sucesso) será apresentada
    alert('deu certo');
    const screen3D = document.querySelector('.screen3D');
    screen3D.classList.add('show-screen');
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
                <li class="rectangle ">
                <div class="gradiente"></div>
                    <img class="image" src="${allquizzes[i].image}">
                    <p class="tittle-quizz">${allquizzes[i].title}</p>
                </li> 
        `;
    }

}

colocarQuizz()

function sendCreatedQuizz(){
    const promise2 = axios.post("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes", 
    {
        title: "Título do quizz",
        image: "https://http.cat/411.jpg",
        questions: [
            {
                title: "Título da pergunta 1",
                color: "#123456",
                answers: [
                    {
                        text: "Texto da resposta 1",
                        image: "https://http.cat/411.jpg",
                        isCorrectAnswer: true
                    },
                    {
                        text: "Texto da resposta 2",
                        image: "https://http.cat/412.jpg",
                        isCorrectAnswer: false
                    }
                ]
            },
            {
                title: "Título da pergunta 2",
                color: "#123456",
                answers: [
                    {
                        text: "Texto da resposta 1",
                        image: "https://http.cat/411.jpg",
                        isCorrectAnswer: true
                    },
                    {
                        text: "Texto da resposta 2",
                        image: "https://http.cat/412.jpg",
                        isCorrectAnswer: false
                    }
                ]
            },
            {
                title: "Título da pergunta 3",
                color: "#123456",
                answers: [
                    {
                        text: "Texto da resposta 1",
                        image: "https://http.cat/411.jpg",
                        isCorrectAnswer: true
                    },
                    {
                        text: "Texto da resposta 2",
                        image: "https://http.cat/412.jpg",
                        isCorrectAnswer: false
                    }
                ]
            }
        ],
        levels: [
            {
                title: "Título do nível 1",
                image: "https://http.cat/411.jpg",
                text: "Descrição do nível 1",
                minValue: 0
            },
            {
                title: "Título do nível 2",
                image: "https://http.cat/412.jpg",
                text: "Descrição do nível 2",
                minValue: 50
            }
        ]
    }
    )
}

sendCreatedQuizz();
