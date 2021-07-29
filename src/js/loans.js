import httpRequest from "./http";

class Loans {
  constructor() {
    this.http = httpRequest();
    this.renderLoansData();
  }

  renderLoansData() {
    const getLoanData = (obj) => {
      return Object.keys(obj).map((item) => {
        return {
          entity: item,
          fee: parseInt(obj[item].fee),
          title: obj[item].title,
          max: parseInt(obj[item].max),
        };
      });
    };

    const sortValuesRule = (a, b) => a.fee - b.fee;

    this.http.onload = function () {
      const jsonObj = JSON.parse(this.responseText);

      const dataArray = getLoanData(jsonObj).filter(
        (arrEl) => arrEl.max >= 10000
      );

      dataArray.sort(sortValuesRule).map((item) => {
        document.getElementById("loans").innerHTML += `
             <div class="card" id="${item.entity}-${item.title}">
                 <div class="card-body">
                   <a href="#" class="card-title text-decoration-none text-primary">Hasta ${item.max} &euro;</a>
                   <p class="card-text text-muted mb-0">Cuota desde</p>
                   <p class="card-text fw-bold lead">${item.fee} &euro;/mes</p>
                 </div>
             </div>
             `;
      });
    };
    this.http.open("GET", `http://localhost:3000/loans`, true);
    this.http.send();
  }
}

export default Loans;
