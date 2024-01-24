document.addEventListener('DOMContentLoaded', function() {
    // Tarkista evästelupa
    //if (localStorage.getItem('cookieConsent') !== 'true') {
        // Jos evästelupaa ei ole annettu, näytä popup
        document.getElementById('cookiePopup').style.display = 'block';
    //}
});

function acceptCookies() {
    // Tallenna evästelupa
    localStorage.setItem('cookieConsent', 'true');
    // Piilota popup
    document.getElementById('cookiePopup').style.display = 'none';
}

  