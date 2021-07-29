import httpRequest from "./http";

class Insurances {
  constructor() {
    this.http = httpRequest();
    this.renderInsuranceData();
  }

  renderInsuranceData() {
      
    const getPlanData = (planName, obj) => {
        return Object.keys(obj).map((item) => {
          return {
            entity: item,
            price_from: parseInt(obj[item][planName].price_from),
            title: obj[item][planName].title,
          };
        });
      };
      
    const sortValuesRule = (a, b) => a.price_from - b.price_from;
    
    this.http.onload = function () {
      const jsonObj = JSON.parse(this.responseText);
      [
        ...getPlanData("basic", jsonObj).sort(sortValuesRule),
        ...getPlanData("plus", jsonObj).sort(sortValuesRule),
        ...getPlanData("full", jsonObj).sort(sortValuesRule),
      ].map((item) => {
        document.getElementById("insurances").innerHTML += `
             <div class="card" id="${item.entity}-${item.title}">
                 <div class="card-body">
                   <a href="#" class="card-title text-decoration-none text-primary">${item.title}</a>
                   <p class="card-text text-muted mb-0">Desde</p>
                   <p class="card-text fw-bold lead">${item.price_from} &euro;/mes</p>
                 </div>
             </div>
             `;
      });
    };
    this.http.open("GET", `http://localhost:3000/insurances`, true);
    this.http.send();
  }
}

export default Insurances;
