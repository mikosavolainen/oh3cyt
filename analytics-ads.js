// analytics-ads.js

(function () {
    // Google Analytics
    var trackingID = 'G-B2GD7H6D8B';

    // Lisää Google Analyticsin gtag-koodi
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + trackingID;
    document.head.appendChild(script);

    script.onload = function () {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', trackingID);
    };

    // Google Ads
   // gtag('event', 'conversion', {'send_to': 'AW-XXXXXXXXX/YOUR_CONVERSION_ID'});
})();
