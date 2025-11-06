const TelegramBot = require('node-telegram-bot-api');
const token = '8153135024:AAGYvnEYPQjvd9zVAZnsIhVAw6xw4OTOHUA'; // BotFather dan olingan token
const bot = new TelegramBot(token, { polling: true });

// To'liq test savollari bazasi
const questions = {
    html: [
        {
            question: "HTML nima?",
            options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language"],
            correct: 0
        },
        {
            question: "HTML da qaysi teg sarlavha uchun ishlatiladi?",
            options: ["<heading>", "<h1>", "<header>"],
            correct: 1
        },
        {
            question: "HTML da rasm qo'shish uchun qaysi teg ishlatiladi?",
            options: ["<image>", "<img>", "<picture>"],
            correct: 1
        },
        {
            question: "HTML da havola yaratish uchun qaysi teg ishlatiladi?",
            options: ["<link>", "<a>", "<href>"],
            correct: 1
        },
        {
            question: "HTML da ro'yxat yaratish uchun qaysi teg ishlatiladi?",
            options: ["<list>", "<ul>", "<ol>"],
            correct: 1
        },
        {
            question: "HTML da jadval yaratish uchun qaysi teg ishlatiladi?",
            options: ["<table>", "<tab>", "<grid>"],
            correct: 0
        },
        {
            question: "HTML da form yaratish uchun qaysi teg ishlatiladi?",
            options: ["<form>", "<input>", "<field>"],
            correct: 0
        },
        {
            question: "HTML da matn kiritish maydoni uchun qaysi teg ishlatiladi?",
            options: ["<text>", "<input type='text'>", "<textarea>"],
            correct: 1
        },
        {
            question: "HTML da tugma yaratish uchun qaysi teg ishlatiladi?",
            options: ["<button>", "<click>", "<submit>"],
            correct: 0
        },
        {
            question: "HTML da sahifa sarlavhasi qaysi tegda yoziladi?",
            options: ["<head>", "<title>", "<header>"],
            correct: 1
        },
        {
            question: "HTML da paragraf uchun qaysi teg ishlatiladi?",
            options: ["<para>", "<p>", "<text>"],
            correct: 1
        },
        {
            question: "HTML da qatorni buzish uchun qaysi teg ishlatiladi?",
            options: ["<break>", "<br>", "<newline>"],
            correct: 1
        },
        {
            question: "HTML da gorizontal chiziq uchun qaysi teg ishlatiladi?",
            options: ["<line>", "<hr>", "<hline>"],
            correct: 1
        },
        {
            question: "HTML da kuchli matn uchun qaysi teg ishlatiladi?",
            options: ["<strong>", "<bold>", "<b>"],
            correct: 0
        },
        {
            question: "HTML da kursiv matn uchun qaysi teg ishlatiladi?",
            options: ["<italic>", "<i>", "<em>"],
            correct: 1
        },
        {
            question: "HTML da ostiga chizilgan matn uchun qaysi teg ishlatiladi?",
            options: ["<underline>", "<u>", "<sub>"],
            correct: 1
        },
        {
            question: "HTML da video qo'shish uchun qaysi teg ishlatiladi?",
            options: ["<video>", "<media>", "<movie>"],
            correct: 0
        },
        {
            question: "HTML da audio qo'shish uchun qaysi teg ishlatiladi?",
            options: ["<audio>", "<sound>", "<music>"],
            correct: 0
        },
        {
            question: "HTML da progress bari uchun qaysi teg ishlatiladi?",
            options: ["<progress>", "<bar>", "<meter>"],
            correct: 0
        },
        {
            question: "HTML da asosiy kontent qaysi tegda bo'ladi?",
            options: ["<main>", "<body>", "<content>"],
            correct: 1
        }
    ],
    css: [
        {
            question: "CSS nima?",
            options: ["Cascading Style Sheets", "Computer Style System", "Creative Style Solutions"],
            correct: 0
        },
        {
            question: "CSS da element rangini o'zgartirish uchun qaysi property ishlatiladi?",
            options: ["text-color", "font-color", "color"],
            correct: 2
        },
        {
            question: "CSS da fon rangi uchun qaysi property ishlatiladi?",
            options: ["background-color", "bgcolor", "color-background"],
            correct: 0
        },
        {
            question: "CSS da matn o'lchami uchun qaysi property ishlatiladi?",
            options: ["text-size", "font-size", "size"],
            correct: 1
        },
        {
            question: "CSS da margin nima?",
            options: ["Ichki chet", "Tashqi chet", "Markaz"],
            correct: 1
        },
        {
            question: "CSS da padding nima?",
            options: ["Ichki chet", "Tashqi chet", "To'ldirish"],
            correct: 0
        },
        {
            question: "CSS da elementni markazga joylash uchun qanday qilinadi?",
            options: ["margin: auto;", "center: true;", "align: center;"],
            correct: 0
        },
        {
            question: "CSS da class ni qanday belgilanadi?",
            options: [".class", "#class", "class"],
            correct: 0
        },
        {
            question: "CSS da id ni qanday belgilanadi?",
            options: [".id", "#id", "id"],
            correct: 1
        },
        {
            question: "CSS da hover effekti qachon ishlaydi?",
            options: ["Sichqoncha ustiga kelganda", "Sichqoncha bosilganda", "Sahifa yuklanganda"],
            correct: 0
        },
        {
            question: "CSS da display: none; nima qiladi?",
            options: ["Elementni yashiradi", "Elementni ko'rsatadi", "Elementni o'zgartiradi"],
            correct: 0
        },
        {
            question: "CSS da position: absolute; nima qiladi?",
            options: ["Mutlaq joylashuv", "Nisbiy joylashuv", "Qattiq joylashuv"],
            correct: 0
        },
        {
            question: "CSS da float nima uchun ishlatiladi?",
            options: ["Elementlarni suzdirish", "Elementlarni ko'tarish", "Elementlarni pasaytirish"],
            correct: 0
        },
        {
            question: "CSS da z-index nima?",
            options: ["Elementlarning ketma-ketligi", "Elementlarning balandligi", "Elementlarning chuqurligi"],
            correct: 2
        },
        {
            question: "CSS da border-radius nima qiladi?",
            options: ["Elementning chetlarini yumaloqlashtiradi", "Elementning chetlarini qirqadi", "Elementning chetlarini kengaytiradi"],
            correct: 0
        },
        {
            question: "CSS da box-shadow nima qiladi?",
            options: ["Elementga soyqa qo'shadi", "Elementga rang beradi", "Elementga o'lcham beradi"],
            correct: 0
        },
        {
            question: "CSS da transition nima?",
            options: ["O'zgarish effekti", "Ko'chish effekti", "Aylanish effekti"],
            correct: 0
        },
        {
            question: "CSS da flexbox nima?",
            options: ["Elementlarni moslashuvchan joylashtirish", "Elementlarni qattiq joylashtirish", "Elementlarni aylantirish"],
            correct: 0
        },
        {
            question: "CSS da grid nima?",
            options: ["Panjara asosidagi joylashtirish", "Chiziqli joylashtirish", "Nuqtali joylashtirish"],
            correct: 0
        },
        {
            question: "CSS da media query nima uchun?",
            options: ["Turli qurilmalar uchun", "Turli brauzerlar uchun", "Turli tillar uchun"],
            correct: 0
        }
    ],
    js: [
        {
            question: "JavaScript qanday til?",
            options: ["Dasturlash tili", "Markup tili", "Style tili"],
            correct: 0
        },
        {
            question: "JavaScript da qaysi belgi variable e'lon qilish uchun ishlatiladi?",
            options: ["var", "variable", "v"],
            correct: 0
        },
        {
            question: "JavaScript da function qanday e'lon qilinadi?",
            options: ["function myFunc() {}", "def myFunc() {}", "func myFunc() {}"],
            correct: 0
        },
        {
            question: "JavaScript da array qanday yaratiladi?",
            options: ["var arr = [];", "var arr = {};", "var arr = ();"],
            correct: 0
        },
        {
            question: "JavaScript da object qanday yaratiladi?",
            options: ["var obj = {};", "var obj = [];", "var obj = ();"],
            correct: 0
        },
        {
            question: "JavaScript da string qo'shish uchun qanday amal ishlatiladi?",
            options: ["+", "&", "|"],
            correct: 0
        },
        {
            question: "JavaScript da tenglikni tekshirish uchun qanday belgi ishlatiladi?",
            options: ["==", "=", "==="],
            correct: 0
        },
        {
            question: "JavaScript da qattiq tenglikni tekshirish uchun qanday belgi ishlatiladi?",
            options: ["===", "==", "="],
            correct: 0
        },
        {
            question: "JavaScript da if qanday ishlatiladi?",
            options: ["if (shart) {}", "if shart {}", "if [shart] {}"],
            correct: 0
        },
        {
            question: "JavaScript da for loop qanday ishlatiladi?",
            options: ["for (var i = 0; i < 10; i++) {}", "for i in range(10) {}", "for (i = 0; i < 10) {}"],
            correct: 0
        },
        {
            question: "JavaScript da alert qanday ishlatiladi?",
            options: ["alert('Xabar');", "message('Xabar');", "popup('Xabar');"],
            correct: 0
        },
        {
            question: "JavaScript da console ga yozish uchun qanday ishlatiladi?",
            options: ["console.log();", "print();", "log();"],
            correct: 0
        },
        {
            question: "JavaScript da addEventListener nima?",
            options: ["Hodisa tinglovchisi", "Element qo'shish", "Tinglash funksiyasi"],
            correct: 0
        },
        {
            question: "JavaScript da DOM nima?",
            options: ["Document Object Model", "Data Object Model", "Document Oriented Model"],
            correct: 0
        },
        {
            question: "JavaScript da JSON nima?",
            options: ["JavaScript Object Notation", "Java Standard Object Notation", "JavaScript Oriented Notation"],
            correct: 0
        },
        {
            question: "JavaScript da null nima?",
            options: ["Qiymat yo'q", "0 qiymati", "Bo'sh string"],
            correct: 0
        },
        {
            question: "JavaScript da undefined nima?",
            options: ["Qiymat belgilanmagan", "Qiymat mavjud emas", "Noto'g'ri qiymat"],
            correct: 0
        },
        {
            question: "JavaScript da NaN nima?",
            options: ["Not a Number", "Null and None", "Number and Null"],
            correct: 0
        },
        {
            question: "JavaScript da arrow function qanday yoziladi?",
            options: ["() => {}", "function() {}", "=> function() {}"],
            correct: 0
        },
        {
            question: "JavaScript da promise nima?",
            options: ["Asinxron operatsiya", "Sinxron operatsiya", "Darhol bajariladigan operatsiya"],
            correct: 0
        }
    ]
};

// Foydalanuvchilar holatini saqlash
const userStates = new Map();

// Start komandasi
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const keyboard = {
        reply_markup: {
            inline_keyboard: [
                [{ text: "📄 HTML", callback_data: "html" }],
                [{ text: "🎨 CSS", callback_data: "css" }],
                [{ text: "⚡ JavaScript", callback_data: "js" }]
            ]
        }
    };
    
    bot.sendMessage(chatId, "Hush kelibsiz! Test botiga xush kelibsiz.\n\nQaysi fan bo'yicha test ishlamoqchisiz?", keyboard);
});

// Fan tanlash
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
    const topic = query.data;

    if (['html', 'css', 'js'].includes(topic)) {
        userStates.set(chatId, {
            topic: topic,
            currentQuestion: 0,
            score: 0,
            answers: []
        });
        
        bot.sendMessage(chatId, `✅ ${topic.toUpperCase()} testi boshlandi! \n\nSizga 20 ta savol beriladi. Har bir savolga javob bering.`);
        sendQuestion(chatId);
    }
    
    // Javoblarni ko'rsatish
    if (query.data === 'show_answers') {
        showAnswers(chatId);
    }
    
    // Savol javoblari
    if (query.data.startsWith('answer_')) {
        handleAnswer(chatId, query.data);
    }
});

// Savol yuborish
function sendQuestion(chatId) {
    const userState = userStates.get(chatId);
    if (!userState) return;
    
    const topicQuestions = questions[userState.topic];
    const currentQ = userState.currentQuestion;
    
    if (currentQ < topicQuestions.length) {
        const question = topicQuestions[currentQ];
        const keyboard = {
            reply_markup: {
                inline_keyboard: question.options.map((option, index) => 
                    [{ text: option, callback_data: `answer_${index}` }]
                )
            }
        };
        
        bot.sendMessage(chatId, `📝 Savol ${currentQ + 1}/${topicQuestions.length}:\n\n${question.question}`, keyboard);
    } else {
        // Test tugadi
        showFinalResults(chatId);
    }
}

// Javobni qayta ishlash
function handleAnswer(chatId, answerData) {
    const userState = userStates.get(chatId);
    if (!userState) return;
    
    const answerIndex = parseInt(answerData.split('_')[1]);
    const currentQ = userState.currentQuestion;
    const topicQuestions = questions[userState.topic];
    const question = topicQuestions[currentQ];
    
    // Javobni saqlash
    userState.answers.push(answerIndex);
    
    // To'g'ri javob bo'lsa ball oshirish
    if (answerIndex === question.correct) {
        userState.score++;
    }
    
    // Keyingi savolga o'tish
    userState.currentQuestion++;
    sendQuestion(chatId);
}

// Yakuniy natijalarni ko'rsatish
function showFinalResults(chatId) {
    const userState = userStates.get(chatId);
    if (!userState) return;
    
    const totalQuestions = questions[userState.topic].length;
    const score = userState.score;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    let resultsText = `🎉 Test yakunlandi!\n\n`;
    resultsText += `📊 Sizning natijangiz: ${score}/${totalQuestions}\n`;
    resultsText += `📈 Foiz: ${percentage}%\n\n`;
    
    // Baholash
    if (percentage >= 90) {
        resultsText += `🏆 A'lo! Juda yaxshi!`;
    } else if (percentage >= 70) {
        resultsText += `👍 Yaxshi!`;
    } else if (percentage >= 50) {
        resultsText += `😐 Qoniqarli!`;
    } else {
        resultsText += `📚 Qaytadan o'rganish kerak!`;
    }
    
    const answersKeyboard = {
        reply_markup: {
            inline_keyboard: [
                [{ text: "📋 Javoblarni ko'rsatish", callback_data: "show_answers" }],
                [{ text: "🔄 Yangi test", callback_data: "new_test" }]
            ]
        }
    };
    
    bot.sendMessage(chatId, resultsText, answersKeyboard);
}

// Javoblarni ko'rsatish
function showAnswers(chatId) {
    const userState = userStates.get(chatId);
    if (!userState) return;
    
    const topicQuestions = questions[userState.topic];
    let answersText = "📊 Test javoblari:\n\n";
    
    topicQuestions.forEach((q, index) => {
        const userAnswer = userState.answers[index];
        const correctAnswer = q.correct;
        const isCorrect = userAnswer === correctAnswer;
        
        answersText += `${index + 1}. ${q.question}\n`;
        answersText += `   Sizning javobingiz: ${isCorrect ? '✅' : '❌'} ${q.options[userAnswer]}\n`;
        answersText += `   To'g'ri javob: ${q.options[correctAnswer]}\n\n`;
    });
    
    bot.sendMessage(chatId, answersText);
}

// Yangi test boshlash
bot.on('callback_query', (query) => {
    if (query.data === 'new_test') {
        const chatId = query.message.chat.id;
        const keyboard = {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "📄 HTML", callback_data: "html" }],
                    [{ text: "🎨 CSS", callback_data: "css" }],
                    [{ text: "⚡ JavaScript", callback_data: "js" }]
                ]
            }
        };
        
        bot.sendMessage(chatId, "Yangi testni boshlash uchun fan tanlang:", keyboard);
    }
});

// Xatoliklar
bot.on('polling_error', (error) => {
    console.log('Polling error:', error);
});

console.log('✅ Bot muvaffaqiyatli ishga tushdi...');