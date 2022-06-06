const questions = [
    // Question 1
    {
        question: "Quantos côcos tem em uma palmeira?",
        alternatives: {
            alt1: 'a: 3',
            alt2: 'b: 4',
            alt3: 'c: 1',
            alt4: 'd: nenhum'
        },
        answer: "d",
    },
    // Question 2
    {
        question: "Quanto tempo a luz do Sol demora para chegar à Terra?",
        alternatives: {
            alt1: 'a: 1 dia',
            alt2: 'b: 12 minutos',
            alt3: 'c: 8 minutos',
            alt4: 'd: 12 horas'
        },
        answer: "c",
    },
    // Question 3
    {
        question: "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
        alternatives: {
            alt1: 'a: Japão e Serra Leoa',
            alt2: 'b: Brasil e Congo',
            alt3: 'c: Estados Unidos e Angola',
            alt4: 'd: Itália e Chade'
        },
        answer: "a",
    },
    // Question 4
    {
        question: "Atualmente, quantos elementos químicos a tabela periódica possui?",
        alternatives: {
            alt1: 'a: 108',
            alt2: 'b: 118',
            alt3: 'a: 109',
            alt4: 'd: 113'
        },
        answer: "b",
    },
    // Question 5
    {
        question: "Qual o livro mais vendido no mundo a seguir à Bíblia?",
        alternatives: {
            alt1: 'a: O Senhor dos Anéis',
            alt2: 'b: Dom Quixote',
            alt3: 'c: O Pequeno Príncipe',
            alt4: 'd: Um Conto de Duas Cidades'
        },
        answer: "b",
    },
    // Question 6
    {
        question: "Qual o nome do presidente do Brasil que ficou conhecido como Jango?",
        alternatives: {
            alt1: 'a: Jânio Quadros',
            alt2: 'b: Getúlio Vargas',
            alt3: 'c: João Goulart',
            alt4: 'd: Jacinto Anjos'
        },
        answer: "c",
    },
    // Question 7
    {
        question: "Qual a velocidade da luz?",
        alternatives: {
            alt1: 'a: 300 000 000 metros por segundo (m/s)',
            alt2: 'b: 150 000 000 metros por segundo (m/s)',
            alt3: 'c: 199 792 458 metros por segundo (m/s)',
            alt4: 'd: 299 792 458 metros por segundo (m/s)'
        },
        answer: "d",
    },
    // Question 8
    {
        question: "",
        alternatives: {
            alt1: 'a: Gaspar, Nicolau e Natanael',
            alt2: 'b: Belchior, Gaspar e Baltazar',
            alt3: 'c: Melchior, Noé e Galileu',
            alt4: 'd: Athos, Porthos e Aramis'
        },
        answer: "d",
    },
    // Question 9
    {
        question: "Que organização juvenil foi fundado por Baden-Powell?",
        alternatives: {
            alt1: 'a: A Juventude Socialista',
            alt2: 'b: O Escotismo',
            alt3: 'c: O Clube dos Aventureiros',
            alt4: 'd: A Organização Mundial da Juventude'
        },
        answer: "b",
    },
    // Question 10
    {
        question: "Qual é o maior arquipélago da Terra?",
        alternatives: {
            alt1: 'a: Filipinas',
            alt2: 'b: Maldivas',
            alt3: 'c: Indonésia',
            alt4: 'd: Bahamas'
        },
        answer: "c",
    },
]

var quizContainer = document.getElementById('');
var resultsContainer = document.getElementById('');
var submitButton = document.getElementById('');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton){
    function showQuestions(questions, quizContainer){
        var output = [];
        var answers;

        for (let i = 0; i < questions.length; i++) {
            answers = [];

            for (letter in questions[i].answers) {
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'value="'+letter+'"'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer){
        var answerContainers = quizContainer.querySelectorAll('.answers');

        var userAnswer = '';
        var numCorrect = 0;

        for (var i = 0; i < questions.length; i++) {
            userAnswer = (answerContainers[i].querySelector('input[name = question'+ i +']:checked')||{}).value;
            
            if(userAnswer === questions[i].correctAnswer){
                numCorrect++;
                answerContainers[i].style.color = 'lightgreen';
            }
            else{
                answerContainers[i].style.color = 'red';
            }
        }

        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
}

// Transition

function hide(){
    var element = document.getElementById("Card");
    element.classList.add("hide");
    showQuestions(Questions, quizContainer)
    setTimeout(show, 1500)
}

function show(){
    var element = document.getElementById("Card");
    element.classList.remove("hide");
}