let search = document.getElementById('search')

let container = document.getElementById('container')

let btn = document.getElementById('btnA')
let listContainer = document.getElementById('list-container')



function addElement(){
    if(search.value ==='')alert('please add something')

    else{
        let li = document.createElement('li')
        li.innerHTML=search.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML= '\u00d7'
        li.appendChild(span);
    }

    search.value = '';
    saveData();
}


function outCome(e){
    if(e.target.tagName ==='LI'){e.target.classList.toggle('checked');}
    else if(e.target.tagName === 'SPAN'){e.target.parentElement.remove();}
    saveData();
}
listContainer.addEventListener('click',outCome)

btn.addEventListener('click',addElement)

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);

}
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data')
}showTask();


