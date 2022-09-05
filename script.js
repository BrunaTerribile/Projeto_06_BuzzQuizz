// Variáveis globais
let allQuizzes = [];
let selectedQuizz = [];
let arrQuestions = [];
let levels = [];

let newQuizz = {
	//title: (tituloQuizz.value),
	//image: (lalalla),
	questions: [
		{ //pergunta 1
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
		{ //pergunta 2
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
		{ //pergunta 3
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
		{ // nível 1
			title: "Título do nível 1",
			image: "https://http.cat/411.jpg",
			text: "Descrição do nível 1",
			minValue: 0
		},
		{ // nível 2
			title: "Título do nível 2",
			image: "https://http.cat/412.jpg",
			text: "Descrição do nível 2",
			minValue: 50
		}
	]
}

//

// Parte de Criação de um Quizz:

function createQuizz() { // Ao clicar em criar quizz, a tela 3A (info basicas) será apresentada
    alert('Oi');
    const screen3 = document.querySelector('.screen3A');
    screen3.classList.add('show-screen');
   
}

function continueQuestions(){ //Ao clicar em prosseguir para criar perguntas, a tela 3B (perguntas) será apresentada

    //if (dados_corretos > 0){
        //salvar dados dos inputs
        // apresentar proxima tela
    //} else {
        //falha(); //chamar função falha
    //}

    //tituloQuizz = document.getElementsByName("titulo_quizz");
    //bannerQuizz = document.getElementsByName("img_banner_quizz");  //Tentativa de armazenar os dados inseridos nos inputs
    //nPerguntas = document.getElementsByName("n_perguntas_quizz");
    //nNiveis = document.getElementsByName("n_niveis_quizz");
    
    alert('oioi');
    const screen3 = document.querySelector('.screen3B');
    screen3.classList.add('show-screen');
}

function continueLevel() { // Ao clicar em prosseguir níveis, a tela 3C (níveis) será apresentada
    alert('deu certo');
    const screen3 = document.querySelector('.screen3C');
    screen3.classList.add('show-screen');
}

function finishQuizz() { // Ao clicar em finalizar, os dados do quizz serão enviados ao servidor 
    alert('finalizando');
    
    const criar = axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', newQuizz)

    // caso de erro = chamar função falha()
    // caso de sucesso = chama a função showMyQuizz = apresentar a tela 3D ou 3.4 (Sucesso do quizz) com os dados do quizz
    
    // const screen3 = document.querySelector('.screen3D');
    // screen3.classList.add('show-screen');
}

function falha(){
    alert('Por favor, preencha os dados corretamente!');
}


function showMyQuizz(){
    /////
}







// Parte de Exibição dos Quizzes:

getquizzes();

function getquizzes(){ //Faz a requisição de todos os quizzes existentes para o servidor

    const promise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
    promise.then(dadosquizz); // Caso de sucesso: chama a função que traz os dados do quizz
}

function dadosquizz(resposta){

    allQuizzes = resposta.data //armazena os dados dos quizzes

    colocarQuizz();
}

function colocarQuizz(){ //Insere os quizzes na tela do usuário

    const ul = document.querySelector('.test');

    ul.innerHTML = '';

    for(let i = 0; i < allQuizzes.length; i++){

        ul.innerHTML = ul.innerHTML + `
        <li class="rectangle" onclick="getThisQuizz(this)" id="${allQuizzes[i].id}">
                    <p class="tittle-quizz">${allQuizzes[i].title}</p>
                    </li> 
        `;
    }

}

colocarQuizz()



function getThisQuizz(thisQuizz){ //Busca somente o quizz escolhido pelo usuário
    console.log(thisQuizz);
    
    const request = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/" + thisQuizz.id // Concatena a requisição e o id do quizz 
    
    console.log(request);

    const promise = axios.get(request); //faz a requisição do quizz escolhido para o servidor
    promise.then(showSelectedQuizz); // Caso de sucesso: chama a função que exibe o quizz escolhido 
    
}

function showSelectedQuizz(resposta){
    
    selectedQuizz = resposta.data // armazena os dados do quiz escolhido

    const screen2 = document.querySelector('.screen2A');
    screen2.classList.add('show-screen'); // Apresenta a tela do quizz (tela 2)

    const run = document.querySelector('.runQuizz');
    run.innerHTML = `
        <div class="banner">
                    <img src="${selectedQuizz.image}" />
                    <p> ${selectedQuizz.title} </p>
                    </div>

        `; //insere o banner e título do quizz escolhido
    
    arrQuestions = selectedQuizz.questions // armazena somente as perguntas do quizz escolhido
    let arrAnswers = questions[i].answers //armazena somente as respostas de cada pergunta do quiz escolhido

    run.innerHTML = run.innerHTML + `<div class="questions"> </div>;` //insere o container de perguntas abaixo do banner
    const container = document.querySelector('.runQuizz.questions'); //acessa a div questions criada acima

    for(let i = 0; i < arrQuestions.length; i++){ //percorre as perguntas e insere uma a uma na div questions
        container.innerHTML = container.innerHTML + `<div class="question"> 
                                                        <div class="asking"> ${questions[i].title} </div>
                                                    </div>`
        
        const ans = document.querySelector('.runQuizz.questions.question'); //acessa a div question criada no primeiro for

        for (j = 0; j < arrAnswers.length; j++){ //percorre as resposta e insere uma a uma abaixo da pergunta (asking)
            ans.innerHTML = ans.innerHTML + `
                <div class="answer">
                    <img src="${arrAnswers[j].image}"/>
                    <p> ${arrAnswers[j].text} </p>
                </div>
            `;
            }
    }
}