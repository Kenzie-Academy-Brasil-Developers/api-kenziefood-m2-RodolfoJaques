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
    if(categories !== null && sessionStorage.getItem('categoria') === null){
        obj.categoria = categories.innerText
    }

    if(sessionStorage.getItem('categoria') === 'Panificadora' || sessionStorage.getItem('categoria') === 'Frutas' || sessionStorage.getItem('categoria') === 'Bebidas'){
        obj.categoria = categories.innerHTML
    }

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
    sessionStorage.setItem('categoria', obj.categoria)

    if(obj.categoria.toLowerCase() === panificadora.innerText.toLowerCase()){
        panificadora.classList.add('clicked')
    }else if(obj.categoria.toLowerCase() === frutas.innerText.toLowerCase()){
        frutas.classList.add('clicked')
    }else if(obj.categoria.toLowerCase() === bebidas.innerText.toLowerCase()){
        bebidas.classList.add('clicked')
    }

}


function deleteProdutoEdit (id){
    let edit = document.getElementById('modal__edit')
    let modalDelete = document.getElementById('modal__delete')
    let deleteProduct = document.getElementById('modal__edit')
    deleteProduct.addEventListener('click',(e)=>{
        if(e.target.innerText === "Excluir"){
            edit.classList.remove('active__edit')
            edit.innerHTML = ''
            Dom.modalDeleteProduct()
            modalDelete.addEventListener('click', async (e)=>{
                if(e.target.innerText === 'Sim'){
                    let response = await ProductsPrivate.deleteMyProducts(id)
                    modalDelete.classList.remove('active__delete')
                    modalDelete.innerHTML = ''
                    modalSelectModal(response)
                }else if(e.target.innerText === 'Não'){
                    modalDelete.classList.remove('active__delete')
                    modalDelete.innerHTML = ''
                }else if(e.target.innerText === 'X'){
                    modalDelete.classList.remove('active__delete')
                    modalDelete.innerHTML = ''
                }
            })
        }
    })
}





async function creatCardsDash() {
    
    const data = await ProductsPublic.getProducts()    
    Dom.listProductsDash(data)

}

function editProduct(object){
    Dom.modalEditProduct()
    reciveInfo(object)
    clickCategory('modal__edit')
    let edit = document.getElementById('modal__edit')
    edit.addEventListener('click', async (e)=>{
        e.preventDefault()
        if(e.target.innerText === "X"){
            edit.classList.remove('active__edit')
            edit.innerHTML = ''
        }
        if(e.target.innerText === "Salvar alterações"){
            sessionStorage.removeItem('categoria')
            let obj = getInfo()
            let response = await ProductsPrivate.editMyProducts(obj)
            edit.classList.remove('active__edit')
            edit.innerHTML = ''
            modalSelectModal(response)
        }
    })
}


creatCardsDash()

function registerProduct(){
    Dom.modalRegisterProduct()
    clickCategory('modal__register')
    let register = document.getElementById('modal__register')
    register.addEventListener('click', async (e)=>{
        e.preventDefault()
        if(e.target.innerText === "X"){
            register.classList.remove('active__register')
            register.innerHTML = ''
        }  
        if(e.target.innerText === "Cadastrar Produto"){
            sessionStorage.removeItem('categoria')
            let obj = getInfo()
            let response = await ProductsPrivate.createMyProducts(obj)
            register.classList.remove('active__register')
            register.innerHTML = ''
            modalSelectModal(response)
        }
    })
}







//registerProduct()
// editProduct({
//     nome: "Bolinho",
//     preco: 5,
//     categoria: "Doce",
//     imagem: "https://picsum.photos/200/300",
//     descricao : "Lorem ipsum",
// })
// deleteProdutoEdit (123)


// teste OK

// document.body.addEventListener('click', () => {
//     modalSelectModal({status:"error"})
// })
