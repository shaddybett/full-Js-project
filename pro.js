let search = document.getElementById('search')

let container = document.getElementById('container')

let btn = document.getElementById('btnA')



function addElement(){
    if(search.value ==='')alert('please add something')
}

btn.addEventListener('click',addElement)