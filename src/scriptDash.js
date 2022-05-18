import { ProductsPrivate } from "./controllers/ProductsPrivate.js";
import { Dom } from "./models/Dom.js";
import { ProductsPublic } from "./controllers/ProductsPublic.js"


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

document.body.addEventListener('click', () => {
    modalSelectModal({status:"error"})
})* */

function modalSelectModal(param){

    if(param.status === "error" || param.message === "Token Invalido"){

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

function clickCategory(classHTML){
    let testemodal = document.getElementById(`${classHTML}`)



    testemodal.addEventListener('click',(e)=>{
        e.preventDefault()
        if(e.target.parentNode.id === 'categories'){
            let obj = document.getElementById(`${e.target.id}`)
            obj.classList.toggle('clicked')
        }
    })
}

function getInfo(){
    let obj = {}
    let form = document.getElementsByTagName('input')
    let categories = document.querySelector('.clicked')
    obj.nome = form[1].value
    obj.descricao = form[2].value
    obj.preco = form[3].value
    obj.imagem = form[4].value
    obj.categoria = categories.innerHTML
    return obj
}
function reciveInfo(obj){

    let form = document.getElementsByTagName('input')
    let panificadora = document.getElementById('categories1')
    let frutas = document.getElementById('categories2')
    let bebidas = document.getElementById('categories3')
    form[1].value = obj.nome
    form[2].value = obj.descricao
    form[3].value = obj.preco
    form[4].value = obj.imagem

    if(obj.categoria.toLowerCase() === panificadora.innerText.toLowerCase()){
        panificadora.classList.add('.clicked')
    }else if(obj.categoria.toLowerCase() === frutas.innerText.toLowerCase()){
        frutas.classList.add('.clicked')
    }else if(obj.categoria.toLowerCase() === bebidas.innerText.toLowerCase()){
        bebidas.classList.add('.clicked')
    }

}



let register = document.getElementById('modal__register')
register.addEventListener('click', async (e)=>{
    e.preventDefault()
    if(e.target.innerText === "Cadastrar Produto"){
        let obj = getInfo()
        let response = await ProductsPrivate.createMyProducts(obj)
        register.classList.remove('active__register')
        register.innerHTML = ''
        modalSelectModal(response)
    }
})


let edit = document.getElementById('modal__edit')
edit.addEventListener('click', async (e)=>{
    e.preventDefault()
    if(e.target.innerText === "Cadastrar Produto"){
        let obj = getInfo()
        let response = await ProductsPrivate.editMyProducts(obj)
        register.classList.remove('active__edit')
        register.innerHTML = ''
        modalSelectModal(response)
    }
})

async function creatCardsDash() {
    
    const data = await ProductsPublic.getProducts()

    Dom.listProductsDash(data)

}
creatCardsDash()







//Dom.modalRegisterProduct()

// Dom.modalEditProduct()
// reciveInfo({	nome: "Bolinho",
// preco: 5,
// categoria: "Frutas",
// imagem: "https://picsum.photos/200/300",
// descricao : "Lorem ipsum",
// })
//clickCategory('modal__edit')


//Dom.modalEditProduct()
//Dom.modalDeleteProduct()

// teste OK

// document.body.addEventListener('click', () => {
//     modalSelectModal({status:"error"})
// })
