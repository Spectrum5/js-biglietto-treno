//Chiedere il numero di km da percorrere 
//Chiedi età del passeggero
//Calcolare il prezzo del biglietto:
//Prezzo = 0.21€ x km
    //SE l'utente è minorenne (< 18anni) applicare uno sconto del 20%
    //SE l'utente ha più di 65 anni (> 65anni) applicare uno sconto del 40%
//Arrotondare il prezzo a massimo 2 decimali

const priceForKm = 0.21;

//numero chilometri da percorrere
let distance = Number(prompt(`inserisci il numero di km che vuoi percorrere`));

//eta' passeggero
let age = Number(prompt(`inserisci quanti anni hai`));

//controllo numeri prompt e applico sconto 20% giovani e 40% anziani
let priceTicket;
if(Number(age) && Number(distance)){ 
    console.log("età e Km: ", age, distance);
    
    if(age < 18){
        alert(`E' previsto uno sconto del 20%`);
        priceTicket = `` + Math.round(((distance * priceForKm) * 0.8) * 100) / 100 + `€`;
        console.log(priceTicket);
    }
    else if(age >= 65){
        alert(`E' previsto uno sconto del 40%`);
        priceTicket = `` + Math.round(((distance * priceForKm) * 0.6) * 100) / 100 + `€`;
        console.log(priceTicket);
    }
    else{
        alert(`Non e' previsto sconto`);
        priceTicket = `` + Math.round((distance * priceForKm) * 100) / 100 + `€`;
        console.log(priceTicket);
    }
} 
else{
    alert(`inserisci solo numeri`);
    window.location.reload();
}
//stampo su schermo il prezzo con massimo due decimali
document.getElementById('price_ticket').innerHTML = priceTicket;
