// Verbesserte Funktionalität für die interaktiven Übungen
document.addEventListener('DOMContentLoaded', function() {
    // Funktionalität für die Übungsbereiche
    setupExerciseEditors();
    setupExercisePreviews();
    
    // Markiere optionale Inhalte
    markOptionalContent();
    
    // Füge Fußzeile hinzu
    addFooter();
});

// Funktion zum Einrichten der Code-Editoren mit Syntax-Highlighting
function setupExerciseEditors() {
    // Alle Textareas mit der Klasse 'code-editor' durch Code-Editoren mit Syntax-Highlighting ersetzen
    document.querySelectorAll('textarea.code-editor').forEach(textarea => {
        const language = textarea.dataset.language || 'html';
        const parentDiv = textarea.parentElement;
        
        // Code-Editor-Container erstellen
        const editorContainer = document.createElement('div');
        editorContainer.className = 'code-editor-container';
        
        // Pre und Code-Element für Prism erstellen
        const pre = document.createElement('pre');
        pre.className = `language-${language}`;
        pre.style.margin = '0';
        pre.style.maxHeight = '300px';
        
        const code = document.createElement('code');
        code.className = `language-${language}`;
        code.textContent = textarea.value;
        code.contentEditable = 'true';
        code.style.outline = 'none';
        code.style.padding = '10px';
        code.style.display = 'block';
        code.style.overflow = 'auto';
        code.style.whiteSpace = 'pre';
        code.style.height = '100%';
        
        // Event-Listener für Änderungen im Code-Editor
        code.addEventListener('input', function() {
            // Aktualisiere den Wert der versteckten Textarea
            textarea.value = this.textContent;
            // Trigger für Änderungsereignisse
            const event = new Event('change');
            textarea.dispatchEvent(event);
        });
        
        // Elemente zusammenfügen
        pre.appendChild(code);
        editorContainer.appendChild(pre);
        
        // Textarea verstecken und Editor einfügen
        textarea.style.display = 'none';
        parentDiv.insertBefore(editorContainer, textarea);
        
        // Syntax-Highlighting anwenden
        Prism.highlightElement(code);
    });
    
    // Tabs für die Editor-Panels
    document.querySelectorAll('.editor-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const target = this.dataset.target;
            
            // Alle Tabs und Panels deaktivieren
            document.querySelectorAll('.editor-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.editor-panel').forEach(p => p.classList.remove('active'));
            
            // Ausgewählten Tab und Panel aktivieren
            this.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });
}

// Funktion zum Einrichten der Vorschau-Funktionalität
function setupExercisePreviews() {
    // Vorschau-Button für Aufgabe 1 (Toggle-Switch)
    const previewBtn1 = document.getElementById('preview-btn-1');
    if (previewBtn1) {
        previewBtn1.addEventListener('click', function() {
            const htmlEditor = document.querySelector('#html-editor .code-editor-container code');
            const cssEditor = document.querySelector('#css-editor .code-editor-container code');
            const jsEditor = document.querySelector('#js-editor .code-editor-container code');
            
            const htmlCode = htmlEditor ? htmlEditor.textContent : '';
            const cssCode = cssEditor ? cssEditor.textContent : '';
            const jsCode = jsEditor ? jsEditor.textContent : '';
            
            const previewContent = document.getElementById('preview-content-1');
            
            // Vorherigen Inhalt löschen
            previewContent.innerHTML = '';
            
            // HTML-Inhalt einfügen
            previewContent.innerHTML = htmlCode;
            
            // Style-Element erstellen und einfügen
            const styleElement = document.createElement('style');
            styleElement.textContent = cssCode;
            previewContent.appendChild(styleElement);
            
            // Script-Element erstellen und einfügen
            const scriptElement = document.createElement('script');
            scriptElement.textContent = jsCode;
            previewContent.appendChild(scriptElement);
            
            // Container anzeigen
            document.getElementById('preview-container-1').style.display = 'block';
        });
    }
    
    // Vorschau-Button für Aufgabe 2 (Farbschemata)
    const previewBtn2 = document.getElementById('preview-btn-2');
    if (previewBtn2) {
        previewBtn2.addEventListener('click', function() {
            const cssEditor = previewBtn2.previousElementSibling.querySelector('.code-editor-container code');
            const cssCode = cssEditor ? cssEditor.textContent : '';
            
            // Style-Element erstellen und einfügen
            const styleElement = document.createElement('style');
            styleElement.textContent = cssCode;
            document.head.appendChild(styleElement);
            
            // Farben aus den CSS-Variablen extrahieren und anzeigen
            setTimeout(() => {
                const lightBg = getComputedStyle(document.documentElement).getPropertyValue('--background-color').trim();
                const lightText = getComputedStyle(document.documentElement).getPropertyValue('--text-color').trim();
                
                // Dark-Mode temporär aktivieren, um Werte zu erhalten
                document.documentElement.setAttribute('data-theme', 'dark');
                const darkBg = getComputedStyle(document.documentElement).getPropertyValue('--background-color').trim();
                const darkText = getComputedStyle(document.documentElement).getPropertyValue('--text-color').trim();
                
                // Zurück zum ursprünglichen Modus
                const currentTheme = localStorage.getItem('theme') || 'light';
                document.documentElement.setAttribute('data-theme', currentTheme);
                
                // Farben in der Vorschau anzeigen
                const lightPreview = document.querySelector('.color-preview.light');
                if (lightPreview) {
                    const bgSample = lightPreview.querySelector('.color-sample.background');
                    const textSample = lightPreview.querySelector('.color-sample.text');
                    
                    if (bgSample) {
                        bgSample.style.backgroundColor = lightBg;
                        bgSample.style.color = lightText;
                    }
                    
                    if (textSample) {
                        textSample.style.backgroundColor = lightText;
                        textSample.style.color = lightBg;
                    }
                }
                
                const darkPreview = document.querySelector('.color-preview.dark');
                if (darkPreview) {
                    const bgSample = darkPreview.querySelector('.color-sample.background');
                    const textSample = darkPreview.querySelector('.color-sample.text');
                    
                    if (bgSample) {
                        bgSample.style.backgroundColor = darkBg;
                        bgSample.style.color = darkText;
                    }
                    
                    if (textSample) {
                        textSample.style.backgroundColor = darkText;
                        textSample.style.color = darkBg;
                    }
                }
                
                // Container anzeigen
                document.getElementById('preview-container-2').style.display = 'block';
            }, 100);
        });
    }
    
    // Vorschau-Button für Aufgabe 3 (Systemeinstellungen)
    const previewBtn3 = document.getElementById('preview-btn-3');
    if (previewBtn3) {
        previewBtn3.addEventListener('click', function() {
            const jsEditor = previewBtn3.previousElementSibling.querySelector('.code-editor-container code');
            const jsCode = jsEditor ? jsEditor.textContent : '';
            
            // Systemeinstellung erkennen
            const detectedTheme = document.getElementById('detected-theme');
            
            try {
                // Funktion zum Erkennen der Systemeinstellungen
                const detectSystemThemeFunc = new Function(jsCode + `
                    // Funktion ausführen und Ergebnis zurückgeben
                    return detectSystemTheme();
                `);
                
                // Funktion ausführen und Ergebnis anzeigen
                const result = detectSystemThemeFunc();
                detectedTheme.textContent = result || 'Nicht erkannt';
                
                // Tatsächliche Systemeinstellung anzeigen (zur Überprüfung)
                const actualSystemTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const systemThemeInfo = document.createElement('p');
                systemThemeInfo.innerHTML = `<strong>Tatsächliche Systemeinstellung:</strong> ${actualSystemTheme}`;
                document.getElementById('system-theme-result').appendChild(systemThemeInfo);
                
                // Feedback zur Richtigkeit
                const feedbackElement = document.createElement('p');
                if (result === actualSystemTheme) {
                    feedbackElement.innerHTML = '<strong style="color: green;">✓ Korrekt erkannt!</strong>';
                } else {
                    feedbackElement.innerHTML = '<strong style="color: red;">✗ Nicht korrekt erkannt. Überprüfe deinen Code.</strong>';
                }
                document.getElementById('system-theme-result').appendChild(feedbackElement);
                
            } catch (error) {
                detectedTheme.textContent = 'Fehler: ' + error.message;
            }
            
            // Container anzeigen
            document.getElementById('preview-container-3').style.display = 'block';
        });
    }
}

// Funktion zum Markieren optionaler Inhalte
function markOptionalContent() {
    document.querySelectorAll('.optional-content').forEach(element => {
        // Prüfe, ob es sich um eine Überschrift handelt
        if (['H2', 'H3', 'H4'].includes(element.tagName)) {
            const badge = document.createElement('span');
            badge.className = 'optional-badge';
            badge.textContent = 'Optional';
            element.appendChild(badge);
        } else {
            // Für andere Elemente, füge ein Badge am Anfang ein
            const badge = document.createElement('div');
            badge.className = 'optional-badge';
            badge.textContent = 'Optional';
            badge.style.display = 'inline-block';
            badge.style.marginBottom = '10px';
            
            element.insertBefore(badge, element.firstChild);
        }
    });
}

// Funktion zum Hinzufügen der Fußzeile
function addFooter() {
    const footer = document.querySelector('footer');
    if (footer) {
        const attribution = document.createElement('p');
        attribution.className = 'attribution';
        attribution.textContent = 'Erstellt von Philipp Riegert';
        
        // Prüfe, ob die Attribution bereits existiert
        const existingAttribution = footer.querySelector('.attribution');
        if (!existingAttribution) {
            footer.appendChild(attribution);
        }
    }
}
