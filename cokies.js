document.addEventListener('DOMContentLoaded', function() {
    
    if (localStorage.getItem('cookieConsent') !== 'true') {
        
        document.getElementById('cookiePopup').style.display = 'block';
    }
});

function acceptCookies() {
    
    localStorage.setItem('cookieConsent', 'true');
    
    document.getElementById('cookiePopup').style.display = 'none';
}
