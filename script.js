function calculateTip(event) {
event.preventDefault();

  let bill = document.getElementById('bill').value;
  let Service = document.getElementById('Service').value;
  let numOfPeople = document.getElementById('people').value;

if(bill == '' | Service == 0) { alert('Por favor, preencha os valores.') 
  return; }

 if(numOfPeople == "" | numOfPeople <=1) { numOfPeople =1;
 document.getElementById('each').style.display = "none"; } else { document.getElementById('each').style.display ="block"; }
  
 let total = (bill * Service) / numOfPeople;  
total = total.toFixed(2);                                    document.getElementById('tip').innerHTML = total;
document.getElementById('total').style.display = "block";
}
document.getElementById('total').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);
