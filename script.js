let allQuizzes = [];


function createQuizz() { // Ao clicar em criar quizz, a tela 3A (info basicas) será apresentada
    alert('Oi');
    const screen3 = document.querySelector('.screen3A');
    screen3.classList.add('show-screen');
}

function carregarquizz(resposta){
    allQuizzes = resposta.data;
    renderizarQuizz(allQuizzes);
}

const promise = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes")
promise.then(carregarquizz);

renderizarQuizz(allQuizzes)


function renderizarQuizz(allQuizzes){

    const quizz = document.querySelector('.test');
    
    quizz.innerHTML = ""

    let teste;


   quizz.innerHTML = `
   <li class="rectangle">
   <p class="tittle-quizz">${allQuizzes[].title}</p>
</li>
<li class="rectangle">
<p class="tittle-quizz">${allQuizzes[2].title}</p>
</li>  
<li class="rectangle">
<p class="tittle-quizz">${allQuizzes[1].title}</p>
</li>             
                `
}
