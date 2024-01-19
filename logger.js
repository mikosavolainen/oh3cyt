

document.addEventListener("DOMContentLoaded", function () {
    logVisitor();
  
    displayVisitorCounts();
  
    function getVisitorInfo() {
      return fetch("https://ipinfo.io?token=52c889dcdea4eb")
        .then(response => response.json());
    }
  
    function logVisitor() {
      getVisitorInfo()
        .then(visitorData => {
          const country = visitorData.country;
          const counts = JSON.parse(localStorage.getItem('visitorCounts')) || {};
          
          if (counts[country]) {
            counts[country]++;
          } else {
            counts[country] = 1;
          }
  
          localStorage.setItem('visitorCounts', JSON.stringify(counts));
        })
        .catch(error => console.error("Error fetching visitor info:", error));
    }
  
    function displayVisitorCounts() {
      const countsElement = document.getElementById("visitor-counts");
  
      if (countsElement) {
        countsElement.innerHTML = "<h2>Kävijämäärät maittain:</h2>";
        const counts = JSON.parse(localStorage.getItem('visitorCounts')) || {};
  
        for (const country in counts) {
          const count = counts[country];
          const listItem = document.createElement("li");
          listItem.textContent = `${country}: ${count} kävijää`;
          countsElement.appendChild(listItem);
        }
      }
    }
  });
  