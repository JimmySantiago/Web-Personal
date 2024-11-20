function switchLanguage(lang) {
    const bioVersions = document.querySelectorAll('.bio-version');
    
    bioVersions.forEach(version => {
        version.classList.remove('active');
        
        if (version.classList.contains(lang)) {
            version.classList.add('active');
        }
    });
}