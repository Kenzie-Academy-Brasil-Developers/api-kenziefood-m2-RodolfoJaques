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


/**
//logica do modal status

{status:"error"}
 */


function modalSelectModal(param){

    if(param.status === "error"){

        Dom.modalStatusError()

        const exitModal = document.querySelector(".status__button button")
        exitModal.addEventListener("click",() => {

            window.location.href = "./dashboard.html"
        })
    }else{

        Dom.modalStatusAssert()

        const exitModal = document.querySelector(".status__button button")
        exitModal.addEventListener("click",() => {

            window.location.href = "./dashboard.html"
        })
    }
}

/*teste OK

document.body.addEventListener('click', () => {
    modalSelectModal({status:"error"})
})* */