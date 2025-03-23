// Erweiterte JavaScript-Funktionalität für Dark/Light Mode
// Enthält optionale Funktionen für fortgeschrittene Anwendungen

document.addEventListener('DOMContentLoaded', function() {
    // Grundlegende Funktionalität
    setupThemeToggle();
    
    // OPTIONAL: Systemeinstellungen erkennen und anwenden
    detectSystemPreferences();
    
    // OPTIONAL: Gespeicherte Benutzereinstellungen laden
    loadSavedPreference();
    
    // OPTIONAL: Änderungen der Systemeinstellungen überwachen
    watchSystemChanges();
});

// Grundlegende Funktion: Theme-Toggle einrichten
function setupThemeToggle() {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const themeLabel = document.getElementById('theme-label');
    
    if (!toggleSwitch || !themeLabel) return;
    
    // Event-Listener für den Toggle-Switch
    toggleSwitch.addEventListener('change', switchTheme);
    
    // Aktuelles Theme aus dem data-theme Attribut lesen
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    // Toggle-Switch entsprechend einstellen
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        themeLabel.textContent = 'Dark Mode';
    }
}

// Grundlegende Funktion: Theme wechseln
function switchTheme(e) {
    const themeLabel = document.getElementById('theme-label');
    
    if (e.target.checked) {
        // Zu Dark Mode wechseln
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeLabel) themeLabel.textContent = 'Dark Mode';
        
        // OPTIONAL: Benutzereinstellung speichern
        savePreference('dark');
    } else {
        // Zu Light Mode wechseln
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeLabel) themeLabel.textContent = 'Light Mode';
        
        // OPTIONAL: Benutzereinstellung speichern
        savePreference('light');
    }
}

// OPTIONAL: Systemeinstellungen erkennen und anwenden
function detectSystemPreferences() {
    // Prüfen, ob der Browser prefers-color-scheme unterstützt
    if (window.matchMedia) {
        // Prüfen, ob das System auf Dark Mode eingestellt ist
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Wenn keine gespeicherte Benutzereinstellung vorhanden ist, Systemeinstellung verwenden
        if (!localStorage.getItem('theme')) {
            if (darkModeQuery.matches) {
                document.documentElement.setAttribute('data-theme', 'dark');
                
                // Toggle-Switch aktualisieren
                const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
                const themeLabel = document.getElementById('theme-label');
                
                if (toggleSwitch) toggleSwitch.checked = true;
                if (themeLabel) themeLabel.textContent = 'Dark Mode';
            }
        }
    }
}

// OPTIONAL: Gespeicherte Benutzereinstellung laden
function loadSavedPreference() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        // Toggle-Switch aktualisieren
        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
        const themeLabel = document.getElementById('theme-label');
        
        if (toggleSwitch && savedTheme === 'dark') {
            toggleSwitch.checked = true;
        }
        
        if (themeLabel) {
            themeLabel.textContent = savedTheme === 'dark' ? 'Dark Mode' : 'Light Mode';
        }
    }
}

// OPTIONAL: Benutzereinstellung speichern
function savePreference(theme) {
    localStorage.setItem('theme', theme);
}

// OPTIONAL: Änderungen der Systemeinstellungen überwachen
function watchSystemChanges() {
    if (window.matchMedia) {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Event-Listener für Änderungen der Systemeinstellungen
        try {
            // Moderne Browser
            darkModeQuery.addEventListener('change', (e) => {
                // Nur anwenden, wenn keine gespeicherte Benutzereinstellung vorhanden ist
                if (!localStorage.getItem('theme')) {
                    if (e.matches) {
                        // Zu Dark Mode wechseln
                        document.documentElement.setAttribute('data-theme', 'dark');
                        
                        // Toggle-Switch aktualisieren
                        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
                        const themeLabel = document.getElementById('theme-label');
                        
                        if (toggleSwitch) toggleSwitch.checked = true;
                        if (themeLabel) themeLabel.textContent = 'Dark Mode';
                    } else {
                        // Zu Light Mode wechseln
                        document.documentElement.setAttribute('data-theme', 'light');
                        
                        // Toggle-Switch aktualisieren
                        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
                        const themeLabel = document.getElementById('theme-label');
                        
                        if (toggleSwitch) toggleSwitch.checked = false;
                        if (themeLabel) themeLabel.textContent = 'Light Mode';
                    }
                }
            });
        } catch (error) {
            // Ältere Browser (Safari)
            darkModeQuery.addListener((e) => {
                // Nur anwenden, wenn keine gespeicherte Benutzereinstellung vorhanden ist
                if (!localStorage.getItem('theme')) {
                    if (e.matches) {
                        // Zu Dark Mode wechseln
                        document.documentElement.setAttribute('data-theme', 'dark');
                        
                        // Toggle-Switch aktualisieren
                        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
                        const themeLabel = document.getElementById('theme-label');
                        
                        if (toggleSwitch) toggleSwitch.checked = true;
                        if (themeLabel) themeLabel.textContent = 'Dark Mode';
                    } else {
                        // Zu Light Mode wechseln
                        document.documentElement.setAttribute('data-theme', 'light');
                        
                        // Toggle-Switch aktualisieren
                        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
                        const themeLabel = document.getElementById('theme-label');
                        
                        if (toggleSwitch) toggleSwitch.checked = false;
                        if (themeLabel) themeLabel.textContent = 'Light Mode';
                    }
                }
            });
        }
    }
}
