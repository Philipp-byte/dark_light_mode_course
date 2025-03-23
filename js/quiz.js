// Quiz-Funktionalität für den Dark/Light Mode Kurs
document.addEventListener('DOMContentLoaded', function() {
    // Quiz initialisieren, wenn es auf der Seite vorhanden ist
    initQuiz();
});

// Funktion zum Initialisieren des Quiz
function initQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return;
    
    // Quiz-Fragen laden
    loadQuizQuestions();
    
    // Event-Listener für den Auswertungs-Button
    const submitButton = document.getElementById('quiz-submit');
    if (submitButton) {
        submitButton.addEventListener('click', evaluateQuiz);
    }
    
    // Event-Listener für den Reset-Button
    const resetButton = document.getElementById('quiz-reset');
    if (resetButton) {
        resetButton.addEventListener('click', resetQuiz);
    }
}

// Funktion zum Laden der Quiz-Fragen
function loadQuizQuestions() {
    // Quiz-Fragen und Antworten
    const quizQuestions = [
        {
            question: "Was ist der Hauptvorteil eines Dark Mode?",
            options: [
                "Er sieht moderner aus",
                "Er reduziert die Augenbelastung bei schlechten Lichtverhältnissen",
                "Er lädt schneller als der Light Mode",
                "Er benötigt weniger HTML-Code"
            ],
            correctAnswer: 1,
            explanation: "Der Dark Mode reduziert die Augenbelastung besonders bei schlechten Lichtverhältnissen oder nachts, da weniger helles Licht vom Bildschirm ausgestrahlt wird."
        },
        {
            question: "Welche CSS-Eigenschaft wird hauptsächlich verwendet, um Farben für Dark/Light Mode zu definieren?",
            options: [
                "color-scheme",
                "theme-color",
                "CSS-Variablen (Custom Properties)",
                "filter"
            ],
            correctAnswer: 2,
            explanation: "CSS-Variablen (--variable-name) sind ideal, um Farbschemata zu definieren, da sie global deklariert und leicht überschrieben werden können."
        },
        {
            question: "Wie kann man mit CSS die Systemeinstellung (Dark/Light Mode) des Benutzers erkennen?",
            options: [
                "Mit der @system-preference Regel",
                "Mit der @media (prefers-color-scheme) Abfrage",
                "Mit dem :system-theme Pseudo-Selektor",
                "Mit der @detect-theme Funktion"
            ],
            correctAnswer: 1,
            explanation: "Die Media Query @media (prefers-color-scheme: dark) oder @media (prefers-color-scheme: light) erkennt die Systemeinstellung des Benutzers."
        },
        {
            question: "Welches HTML-Attribut wird häufig verwendet, um den aktuellen Theme-Modus zu speichern?",
            options: [
                "theme",
                "mode",
                "color-scheme",
                "data-theme"
            ],
            correctAnswer: 3,
            explanation: "Das data-theme Attribut wird häufig am HTML- oder body-Element verwendet, um den aktuellen Modus zu speichern und per CSS darauf zuzugreifen."
        },
        {
            question: "Wie kann man mit JavaScript erkennen, ob der Benutzer den Dark Mode in seinen Systemeinstellungen aktiviert hat?",
            options: [
                "document.isDarkMode()",
                "navigator.theme.isDark",
                "window.matchMedia('(prefers-color-scheme: dark)').matches",
                "browser.getColorScheme() === 'dark'"
            ],
            correctAnswer: 2,
            explanation: "Mit window.matchMedia('(prefers-color-scheme: dark)').matches kann JavaScript prüfen, ob der Dark Mode in den Systemeinstellungen aktiviert ist."
        },
        {
            question: "Welche Methode wird verwendet, um die Benutzereinstellung (Dark/Light Mode) im Browser zu speichern?",
            options: [
                "cookies.set()",
                "localStorage.setItem()",
                "sessionStorage.save()",
                "browser.savePreference()"
            ],
            correctAnswer: 1,
            explanation: "localStorage.setItem() ist die gängigste Methode, um Benutzereinstellungen wie den bevorzugten Farbmodus dauerhaft im Browser zu speichern."
        },
        {
            question: "Was ist ein wichtiger Aspekt bei der Gestaltung eines Dark Mode?",
            options: [
                "Immer schwarzen Hintergrund (#000000) verwenden",
                "Alle Farben invertieren",
                "Auf ausreichenden Kontrast zwischen Text und Hintergrund achten",
                "Alle Bilder dunkler machen"
            ],
            correctAnswer: 2,
            explanation: "Ausreichender Kontrast zwischen Text und Hintergrund ist entscheidend für die Lesbarkeit und Barrierefreiheit, besonders im Dark Mode."
        },
        {
            question: "Welches WCAG-Kriterium (Web Content Accessibility Guidelines) sollte der Kontrast zwischen Text und Hintergrund mindestens erfüllen?",
            options: [
                "1:1",
                "2:1",
                "3:1",
                "4.5:1"
            ],
            correctAnswer: 3,
            explanation: "Nach den WCAG-Richtlinien sollte der Kontrast zwischen Text und Hintergrund mindestens 4.5:1 betragen, um eine ausreichende Lesbarkeit zu gewährleisten."
        },
        {
            question: "Welche der folgenden Aussagen zum Dark Mode ist FALSCH?",
            options: [
                "Dark Mode kann Akkulaufzeit auf OLED-Displays verlängern",
                "Dark Mode reduziert die Blaulicht-Emission",
                "Dark Mode verbessert immer die Lesbarkeit von Texten",
                "Dark Mode kann die Augenbelastung in dunklen Umgebungen reduzieren"
            ],
            correctAnswer: 2,
            explanation: "Es ist falsch, dass Dark Mode immer die Lesbarkeit verbessert. Tatsächlich kann die Lesbarkeit von langen Texten im Dark Mode für manche Menschen schlechter sein."
        },
        {
            question: "Was ist ein Toggle-Switch im Kontext des Dark/Light Mode?",
            options: [
                "Eine JavaScript-Funktion zum Umschalten",
                "Ein UI-Element zum Umschalten zwischen den Modi",
                "Ein CSS-Selektor für Farbwechsel",
                "Eine spezielle Art von Media Query"
            ],
            correctAnswer: 1,
            explanation: "Ein Toggle-Switch ist ein Benutzeroberflächenelement (UI-Element), das dem Benutzer ermöglicht, zwischen Dark und Light Mode umzuschalten, meist dargestellt als Schieberegler oder Checkbox."
        }
    ];
    
    // Quiz-Container finden
    const quizContainer = document.getElementById('quiz-questions');
    if (!quizContainer) return;
    
    // Quiz-Fragen in HTML umwandeln und einfügen
    let quizHTML = '';
    
    quizQuestions.forEach((q, index) => {
        quizHTML += `
            <div class="quiz-question" id="question-${index}">
                <h3>Frage ${index + 1}:</h3>
                <p>${q.question}</p>
                <div class="quiz-options">
        `;
        
        q.options.forEach((option, optionIndex) => {
            quizHTML += `
                <div class="quiz-option">
                    <input type="radio" id="q${index}-option${optionIndex}" name="q${index}" value="${optionIndex}">
                    <label for="q${index}-option${optionIndex}">${option}</label>
                </div>
            `;
        });
        
        quizHTML += `
                </div>
                <div class="quiz-explanation" id="explanation-${index}" style="display: none;"></div>
            </div>
        `;
    });
    
    // Quiz-Fragen in den Container einfügen
    quizContainer.innerHTML = quizHTML;
    
    // Quiz-Daten als Dateneigenschaft speichern
    quizContainer.dataset.questions = JSON.stringify(quizQuestions);
}

// Funktion zur Auswertung des Quiz
function evaluateQuiz() {
    // Quiz-Container und Fragen finden
    const quizContainer = document.getElementById('quiz-questions');
    const resultContainer = document.getElementById('quiz-result');
    
    if (!quizContainer || !resultContainer) return;
    
    // Quiz-Fragen aus Dateneigenschaft laden
    const quizQuestions = JSON.parse(quizContainer.dataset.questions);
    
    // Ergebnisse auswerten
    let correctAnswers = 0;
    let totalQuestions = quizQuestions.length;
    let unansweredQuestions = 0;
    
    quizQuestions.forEach((q, index) => {
        const questionElement = document.getElementById(`question-${index}`);
        const explanationElement = document.getElementById(`explanation-${index}`);
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        
        // Zurücksetzen früherer Markierungen
        questionElement.classList.remove('correct', 'incorrect', 'unanswered');
        
        if (selectedOption) {
            const selectedValue = parseInt(selectedOption.value);
            
            if (selectedValue === q.correctAnswer) {
                // Richtige Antwort
                correctAnswers++;
                questionElement.classList.add('correct');
                explanationElement.innerHTML = `<p class="correct-answer">✓ Richtig! ${q.explanation}</p>`;
            } else {
                // Falsche Antwort
                questionElement.classList.add('incorrect');
                explanationElement.innerHTML = `<p class="incorrect-answer">✗ Falsch! Die richtige Antwort ist: ${q.options[q.correctAnswer]}</p>
                                               <p>${q.explanation}</p>`;
            }
        } else {
            // Keine Antwort ausgewählt
            unansweredQuestions++;
            questionElement.classList.add('unanswered');
            explanationElement.innerHTML = `<p class="unanswered-question">Keine Antwort ausgewählt. Die richtige Antwort ist: ${q.options[q.correctAnswer]}</p>
                                           <p>${q.explanation}</p>`;
        }
        
        // Erklärung anzeigen
        explanationElement.style.display = 'block';
    });
    
    // Gesamtergebnis berechnen
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    // Ergebnis anzeigen
    let resultHTML = `
        <h3>Dein Ergebnis:</h3>
        <p class="quiz-score">${correctAnswers} von ${totalQuestions} Fragen richtig (${percentage}%)</p>
    `;
    
    if (unansweredQuestions > 0) {
        resultHTML += `<p class="quiz-unanswered">${unansweredQuestions} Frage(n) nicht beantwortet</p>`;
    }
    
    // Bewertung basierend auf dem Ergebnis
    if (percentage >= 90) {
        resultHTML += `<p class="quiz-rating excellent">Ausgezeichnet! Du beherrschst das Thema Dark/Light Mode sehr gut!</p>`;
    } else if (percentage >= 70) {
        resultHTML += `<p class="quiz-rating good">Gut gemacht! Du hast ein solides Verständnis des Themas.</p>`;
    } else if (percentage >= 50) {
        resultHTML += `<p class="quiz-rating average">Nicht schlecht! Es gibt aber noch Raum für Verbesserung.</p>`;
    } else {
        resultHTML += `<p class="quiz-rating needs-improvement">Du solltest das Material noch einmal durchgehen, um dein Verständnis zu verbessern.</p>`;
    }
    
    // Ergebnis in den Container einfügen
    resultContainer.innerHTML = resultHTML;
    resultContainer.style.display = 'block';
    
    // Zum Ergebnis scrollen
    resultContainer.scrollIntoView({ behavior: 'smooth' });
}

// Funktion zum Zurücksetzen des Quiz
function resetQuiz() {
    // Alle Antworten zurücksetzen
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(input => {
        input.checked = false;
    });
    
    // Alle Markierungen und Erklärungen zurücksetzen
    const questionElements = document.querySelectorAll('.quiz-question');
    questionElements.forEach((element, index) => {
        element.classList.remove('correct', 'incorrect', 'unanswered');
        const explanationElement = document.getElementById(`explanation-${index}`);
        if (explanationElement) {
            explanationElement.style.display = 'none';
        }
    });
    
    // Ergebnis ausblenden
    const resultContainer = document.getElementById('quiz-result');
    if (resultContainer) {
        resultContainer.style.display = 'none';
    }
    
    // Zum Anfang des Quiz scrollen
    const quizContainer = document.getElementById('quiz-container');
    if (quizContainer) {
        quizContainer.scrollIntoView({ behavior: 'smooth' });
    }
}
