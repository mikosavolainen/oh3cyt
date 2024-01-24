function changeLanguage(language) {
    const titles = {
        'fi': 'OH3CYT',
        'en': 'OH3CYT'
    };

    document.getElementById('site-title').innerText = titles[language];

    const cookies = {
        'fi': 'Tämä sivusto käyttää evästeitä varmistaakseen parhaan kokemuksen.',
        'en': 'This website uses cookies to ensure the best experience.'
    };
    const cookies2 = {
        'fi': 'Hyväksy evästeet',
        'en': 'Accept cookies'
    };
    
    document.getElementById('cookiePopup').innerHTML = `
        <p>${cookies[language]}</p>
        <button onclick="acceptCookies()">${cookies2[language]}</button>
    `;

    const gallery = {
        'fi': 'GALLERIA',
        'en': 'GALLERY'
    };

    document.getElementById('site-gallery').innerText = gallery[language];

    const laitteistoSection = document.getElementById('laitteisto');
    const laitteistoContent = {
        'fi': `
            <h2>Radio Laitteisto</h2>
            <hr>
            <h3>Käsilaitteet:</h3>
            <li>Baofeng BF-F8+</li>
            <li>Baofeng UV-5RA+</li>
            <li>Quansheng UV-K5</li>
            <br>
            <h2>Mobiili:</h2>
            <li>Anytone at-778uv</li>
            <h2></h2>
            <br>
            <h2>Antennit:</h2>    
            <li>Nagoya NA-771 UHF/VHF</li>
            <li>Hamking SG-7900 UHF/VHF</li>
            <li>ABBREE Taktinen käsiradio antenni UHF/VHF</li>
            <li>30m pitkä "Random wire" antenni 9:1 Balun</li>
            <br>
            <h2>Muut</h2>
            <li>RTL-SDR v3</li>
            <li>RTL-SDR v4(Hajonnut)</li>
        `,
        'en': `
            <h2>Radio Equipment</h2>
            <hr>
            <h3>Handheld Devices:</h3>
            <li>Baofeng BF-F8+</li>
            <li>Baofeng UV-5RA+</li>
            <li>Quansheng UV-K5</li>
            <br>
            <h2>Mobile:</h2>
            <li>Anytone at-778uv</li>
            <h2></h2>
            <br>
            <h2>Antennas:</h2>    
            <li>Nagoya NA-771 UHF/VHF</li>
            <li>Hamking SG-7900 UHF/VHF</li>
            <li>ABBREE Tactical Handheld Radio Antenna UHF/VHF</li>
            <li>30m or 100ft long "Random wire" antenna with 9:1 Balun</li>
            <br>
            <h2>Other</h2>
            <li>RTL-SDR v3</li>
            <li>RTL-SDR v4 (Broken)</li>
        `
    };

 
    localStorage.setItem('selectedLanguage', language);

    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
        language = storedLanguage;
    }

    laitteistoSection.innerHTML = laitteistoContent[language];
}


document.addEventListener('DOMContentLoaded', function() {
    
    const storedLanguage = localStorage.getItem('selectedLanguage');
    const defaultLanguage = 'fi';
    const languageToUse = storedLanguage || defaultLanguage;

    
    changeLanguage(languageToUse);
});
