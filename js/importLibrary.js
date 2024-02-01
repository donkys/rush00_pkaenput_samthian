function addStylesheets() {
    // Tailwind CSS (update the version as needed)
    var tailwindCSS = document.createElement('link');
    tailwindCSS.href = 'https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css';
    tailwindCSS.rel = 'stylesheet';
    document.head.appendChild(tailwindCSS);

    // Bootstrap CSS (using Bootstrap 5, which doesn't depend on jQuery)
    var bootstrapCSS = document.createElement('link');
    bootstrapCSS.href = 'https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css';
    bootstrapCSS.rel = 'stylesheet';
    document.head.appendChild(bootstrapCSS);
}

function addScripts() {
    var bootstrapScript = document.createElement('script');
    bootstrapScript.src = 'https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.bundle.min.js';
    document.head.appendChild(bootstrapScript);
}

// Call the functions
document.addEventListener('DOMContentLoaded', function() {
    addStylesheets();
    addScripts();
});
