// Syntax highlighting für die Code-Editoren
document.addEventListener('DOMContentLoaded', function() {
  // Prism.js für Syntax-Highlighting laden
  const prismScript = document.createElement('script');
  prismScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
  document.head.appendChild(prismScript);
  
  // Prism CSS für Syntax-Highlighting laden
  const prismCSS = document.createElement('link');
  prismCSS.rel = 'stylesheet';
  prismCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css';
  document.head.appendChild(prismCSS);
  
  // Zusätzliche Sprachen für Prism laden
  const languages = ['html', 'css', 'javascript'];
  languages.forEach(lang => {
    const script = document.createElement('script');
    script.src = `https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-${lang}.min.js`;
    document.head.appendChild(script);
  });
  
  // Funktion zum Ersetzen der Textareas mit Code-Editoren
  function setupCodeEditors() {
    // Warten bis Prism vollständig geladen ist
    if (typeof Prism === 'undefined') {
      setTimeout(setupCodeEditors, 100);
      return;
    }
    
    // Alle Textareas mit der Klasse 'code-editor' durch Code-Editoren ersetzen
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
  }
  
  // Warten bis das DOM vollständig geladen ist und dann Code-Editoren einrichten
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupCodeEditors);
  } else {
    setupCodeEditors();
  }
});

// Funktion zum Hinzufügen der Fußzeile
function addFooter() {
  const footer = document.querySelector('footer');
  if (footer) {
    const attribution = document.createElement('p');
    attribution.className = 'attribution';
    attribution.textContent = 'Erstellt von Philipp Riegert';
    attribution.style.fontSize = '0.9em';
    attribution.style.marginTop = '10px';
    footer.appendChild(attribution);
  }
}

// Funktion zum Markieren optionaler Inhalte
function markOptionalContent() {
  document.querySelectorAll('.optional-content').forEach(element => {
    const badge = document.createElement('span');
    badge.className = 'optional-badge';
    badge.textContent = 'Optional';
    badge.style.backgroundColor = '#6c757d';
    badge.style.color = 'white';
    badge.style.padding = '2px 6px';
    badge.style.borderRadius = '4px';
    badge.style.fontSize = '0.8em';
    badge.style.marginLeft = '8px';
    
    // Badge zum Element hinzufügen
    if (element.tagName === 'H2' || element.tagName === 'H3' || element.tagName === 'H4') {
      element.appendChild(badge);
    } else {
      // Für andere Elemente, füge es vor dem Element ein
      const wrapper = document.createElement('div');
      wrapper.className = 'optional-wrapper';
      wrapper.style.position = 'relative';
      element.parentNode.insertBefore(wrapper, element);
      wrapper.appendChild(element);
      
      const badgeContainer = document.createElement('div');
      badgeContainer.style.position = 'absolute';
      badgeContainer.style.top = '0';
      badgeContainer.style.right = '0';
      badgeContainer.appendChild(badge);
      wrapper.appendChild(badgeContainer);
    }
  });
}

// Funktionen beim Laden der Seite ausführen
document.addEventListener('DOMContentLoaded', function() {
  addFooter();
  markOptionalContent();
});
