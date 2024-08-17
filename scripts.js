const quizData = [
    {
        question: "What is the main cause of climate change?",
        options: ["Deforestation", "Fossil Fuels", "Overfishing", "Urbanization"],
        answer: "Fossil Fuels"
    },
    {
        question: "Which country has the largest stock market?",
        options: ["China", "United States", "Japan", "Germany"],
        answer: "United States"
    },
    {
        question: "Why is biodiversity important?",
        options: ["It provides food", "It supports ecosystem stability", "It controls weather", "All of the above"],
        answer: "All of the above"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById("quiz-container").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const questionData = quizData[currentQuestionIndex];
    document.getElementById("question").textContent = questionData.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    questionData.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const questionData = quizData[current
