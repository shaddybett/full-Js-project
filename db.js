let button = document.getElementById('btn')
let span = document.getElementById('span')
let ticketsSold = document.getElementById('sold')
let capacity = document.getElementById('capacity')
let value = span.innerText
let result = capacity.innerText - ticketsSold.innerText;

function displayTickets(){
    if(value === 0){
        return 'sorry all sold';
    }
    else(classic.innerText === value);
    
}
button.addEventListener('click',displayTickets)

fetch('db.json')