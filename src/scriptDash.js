import { Dom } from "./models/Dom.js";


let dashboard = {
    name: 'Usuário Logado',
    button1:'Home',
    button2:'Logout',
}

Dom.createHeader()
Dom.modalUser(dashboard)


let modal = document.querySelector('.modalUser')

modal.addEventListener('click',(e)=>{
    if(e.target.nodeName === 'BUTTON'){
        if(e.target.innerText === 'Home'){
            window.location = '../../index.html'
        }else{
            localStorage.clear()
            window.location = '../../index.html'
        }
    }
})