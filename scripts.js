const quizData = [
    {
        question: "What is the main cause of climate change?",
        options: ["Deforestation", "Fossil Fuels", "Overfishing", "Urbanization"],
        answer: "Fossil Fuels"
    },
    {
        question: "Which of the following contributes most to ocean pollution?",
        options: ["Plastic Waste", "Oil Spills", "Agricultural Runoff", "Fishing Nets"],
        answer: "Plastic Waste"
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
    const questionData = quizData
