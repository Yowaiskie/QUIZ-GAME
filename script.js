const quizData = [
    //Question 1
    {
        question: "Which language runs in a web browser?",
        choices: ["Java", "C", "Python", "JavaScript"],
        correct: 3
    },
    //Question 2
    {
        question: "What does 'CSS' stand for?",
        choices: ["Counter Strike: Source", "Cascading Style Sheets", "Corrective Style Syntax", "Computer Style Sections"],
        correct: 1
    },
    //Question 3
    {
        question: "What is the purpose of the 'alt' attribute in an img tag?",
        choices: ["To provide an alternative text", "To change the image source", "To make the image load faster", "To style the image"],
        correct: 0
    },
    //Question 4
    {
        question: "What is the method to add an element at the end of an array?",
        choices: ["push()", "pop()", "shift()", "unshift()"],
        correct: 0
    },
    //Question 5
    {
        question: "Which object is used to store and manipulate text usually in multiples of 16-bit units?",
        choices: ["String", "Character", "StringBuilder", "TextBlock"],
        correct: 0
    },
    //Question 6
    {
        question: "What does HTML stand for?",
        choices: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Markdown Language", "Hyper Text Marking Language"],
        correct: 1
    },
    //Question 7
    {
        question: "What year was JavaScript created?",
        choices: ["1995", "1994", "1993", "1996"],
        correct: 0
    },
    //Question 8
    {
        question: "Which tool can you use to ensure code quality?",
        choices: ["Angular", "jQuery", "RequireJS", "ESLint"],
        correct: 3
    },
    //Question 9
    {
        question: "What is 'this' keyword in JavaScript?",
        choices: ["Refers to the current object", "Refers to the previous object", "Refers to the global object", "Refers to the new object being created"],
        correct: 0
    },
    //Question 10
    {
        question: "How do you declare a JavaScript variable?",
        choices: ["var name", "variable name", "v name", "int name"],
        correct: 0
    },
    //Question 11
    {
        question: "Which statement creates a new object?",
        choices: ["var obj = new Object()", "var obj = Object()", "var obj = new Object[]", "var obj = new Array()"],
        correct: 0
    },
    //Question 12
    {
        question: "How to write an IF statement in JavaScript?",
        choices: ["if i = 5", "if i == 5 then", "if (i == 5)", "if i = 5 then"],
        correct: 2
    },
    //Question 13
    {
        question: "How does a WHILE loop start?",
        choices: ["while (i <= 10; i++)", "while (i <= 10)", "while i = 1 to 10", "while (i++ < 10)"],
        correct: 1
    },
    //Question 14
    {
        question: "How can you add a comment in a JavaScript?",
        choices: ["*This is a comment", "//This is a comment", "'This is a comment", "(This is a comment)"],
        correct: 1
    },
    //Question 15
    {
        question: "What is the correct way to write a JavaScript array?",
        choices: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 'red', 'green', 'blue'", "var colors = ['red', 'green', 'blue']", "var colors = (1 = 'red', 2 = 'green', 3 = 'blue')"],
        correct: 2
    },
    //Question 16
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["onmouseclick", "onclick", "onchange", "onmouseover"],
        correct: 1
    },
    //Question 17
    {
        question: "How do you find the number with the highest value of x and y?",
        choices: ["Math.ceil(x, y)", "Math.max(x, y)", "Math.high(x, y)", "Math.top(x, y)"],
        correct: 1
    },
    //Question 18
    {
        question: "What method is used to round a number to the nearest integer?",
        choices: ["Math.round()", "Math.rnd()", "Math.nearest()", "Math.fix()"],
        correct: 0
    },
    //Question 19
    {
        question: "What does JSON stand for?",
        choices: ["JavaScript Object Notation", "Java Standard Output Network", "JavaScript Output Naming", "Java Source Open Network"],
        correct: 0
    },
    //Question 20
    {
        question: "What is a correct syntax to output 'Hello World' in JavaScript?",
        choices: ["print('Hello World')", "console.log('Hello World')", "echo 'Hello World'", "response.write('Hello World')"],
        correct: 1
    },
    //Question 21
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        choices: ["script", "style", "css", "link"],
        correct: 1
    },
    //Question 22
    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        choices: ["title", "src", "alt", "longdesc"],
        correct: 2
    },
    //Question 23
    {
        question: "How do you create a function in JavaScript?",
        choices: ["function myFunction()", "function:myFunction()", "function = myFunction()", "function => myFunction()"],
        correct: 0
    },
    //Question 24
    {
        question: "Which of the following function of Array object adds and/or removes elements from an array?",
        choices: ["toSource()", "sort()", "splice()", "unshift()"],
        correct: 2
    },
    //Question 25
    {
        question: "How do you declare a JavaScript variable?",
        choices: ["v carName;", "var carName;", "variable carName;", "vec carName;"],
        correct: 1
    },
    //Question 26
    {
        question: "What will 'console.log( typeof [] );' output in the console?",
        choices: ["object", "array", "null", "undefined"],
        correct: 0
    },
    //Question 27
    {
        question: "Which operator is used to assign a value to a variable?",
        choices: ["=", "==", ":", "!="],
        correct: 0
    },
    //Question 28

    {
        question: "Which method is used to remove the last element from an array and return that element?",
        choices: ["last()", "pop()", "push()", "end()"],
        correct: 1
    },
    //Question 29
    {
        question: "Which statement creates a new object using the 'Person' constructor?",
        choices: ["var person = new Person();", "var person = create Person();", "var person = construct Person();", "var person = new create(Person);"],
        correct: 0
    },
    //Question 30
    {
        question: "What is 'this' keyword in JavaScript?",
        choices: ["Refers to the current object", "Refers to the previous object", "Refers to the variable that is local to a function", "Refers to the global variable"],
        correct: 0
    }
];

let currentUser = null;
let currentQuestionIndex = 0;
let skippedQuestions = [];
let answers = Array(quizData.length).fill(null);
let timer;
let timerDuration = 60; // Default timer duration

// Event listeners for form submissions and page transitions
document.getElementById('login-form').addEventListener('submit', login);
document.getElementById('register-form').addEventListener('submit', register);
document.getElementById('show-register').addEventListener('click', showRegisterPage);
document.getElementById('show-login').addEventListener('click', showLoginPage);
document.getElementById('prev-button').addEventListener('click', prevQuestion);
document.getElementById('next-button').addEventListener('click', nextQuestion);
document.getElementById('skip-button').addEventListener('click', skipQuestion);
document.getElementById('retry-button').addEventListener('click', retryQuiz);

function login(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const user = JSON.parse(localStorage.getItem(username));

    if (user && user.password === password) {
        currentUser = user;
        showQuizPage();
    } else {
        alert('Invalid username or password');
    }
}

function register(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (localStorage.getItem(username)) {
        alert('Username already exists');
    } else {
        const newUser = { username, password, scores: [] };
        localStorage.setItem(username, JSON.stringify(newUser));
        alert('Account created successfully');
        showLoginPage();
    }
}

function showRegisterPage() {
    document.getElementById('login-page').classList.remove('active');
    document.getElementById('register-page').classList.add('active');
}

function showLoginPage() {
    document.getElementById('register-page').classList.remove('active');
    document.getElementById('login-page').classList.add('active');
}

function showQuizPage() {
    document.getElementById('login-page').classList.remove('active');
    document.getElementById('register-page').classList.remove('active');
    document.getElementById('quiz-page').classList.add('active');
    startQuiz();
}

function startQuiz() {
    currentQuestionIndex = 0;
    skippedQuestions = [];
    answers.fill(null);
    displayQuestion();
    startTimer();
}

function displayQuestion() {
    const questionData = quizData[currentQuestionIndex];
    document.getElementById('question-number').textContent = `Question ${currentQuestionIndex + 1}`;
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <p class="question">${questionData.question}</p>
        <div class="options">
        ${questionData.choices.map((choice, index) => `
            <div class="option">
                <input type="radio" id="choice-${index}" name="choice" value="${index}" ${answers[currentQuestionIndex] === index ? 'checked' : ''}>
                <label for="choice-${index}">${choice}</label>
            </div>
        `).join('')}
        </div>
    `;
}

function prevQuestion() {
    saveAnswer();
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function nextQuestion() {
    saveAnswer();
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        goToSkippedOrFinish();
    }
}

function skipQuestion() {
    if (!skippedQuestions.includes(currentQuestionIndex)) {
        skippedQuestions.push(currentQuestionIndex);
    }
    nextQuestion();
}

function goToSkippedOrFinish() {
    if (skippedQuestions.length > 0) {
        currentQuestionIndex = skippedQuestions.shift();
        displayQuestion();
    } else {
        finishQuiz();
    }
}

function saveAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
        answers[currentQuestionIndex] = parseInt(selectedChoice.value);
    }
}

function startTimer() {
    timerDuration = 600; // Set default timer duration in seconds
    const timerElement = document.getElementById('timer');
    displayTime(timerElement, timerDuration);

    timer = setInterval(() => {
        timerDuration--;
        displayTime(timerElement, timerDuration);
        if (timerDuration <= 0) {
            clearInterval(timer);
            finishQuiz();
        }
    }, 1000);
}

function displayTime(element, duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    element.textContent = `Time: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function finishQuiz() {
    clearInterval(timer);
    document.getElementById('quiz-page').classList.remove('active');
    document.getElementById('result-page').classList.add('active');
    const correctAnswers = answers.reduce((acc, answer, index) => {
        return acc + (answer === quizData[index].correct ? 1 : 0);
    }, 0);

    document.getElementById('result').textContent = `You got ${correctAnswers} out of ${quizData.length} questions correct.`;

    if (currentUser) {
        currentUser.scores.push(correctAnswers);
        localStorage.setItem(currentUser.username, JSON.stringify(currentUser));
        document.getElementById('recent-score').textContent = `Recent score: ${correctAnswers}`;
    }
}

function retryQuiz() {
    document.getElementById('result-page').classList.remove('active');
    document.getElementById('quiz-page').classList.add('active');
    startQuiz();
}
