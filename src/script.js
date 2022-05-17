import { Dom } from "./models/Dom.js";
import { User } from "./controllers/User.js";


let noLogin = {
    name: 'Time A',
    button1:'Login',
    button2:'Cadastro',
}

let login = {
    name: 'Time A',
    button1:'Dashboard',
    button2:'Logout',
}

Dom.createHeader()

if(typeof localStorage.getItem('token') === 'string'){
    Dom.modalUser(login)
}else{
    Dom.modalUser(noLogin)
}

let modal = document.querySelector('.modalUser')

modal.addEventListener('click',(e)=>{
    if(e.target.nodeName === 'BUTTON'){
        if(e.target.innerText === 'Login'){
            window.location = 'src/pages/login.html'
        }else if(e.target.innerText === 'Cadastro'){
            window.location = 'src/pages/cadastro.html'
        }else if(e.target.innerText === 'Dashboard'){
            window.location= 'src/pages/dashboard.html'
        }else{
            localStorage.clear()
            window.location.reload()
        }
    }
})