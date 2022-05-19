import { Dom } from "./models/Dom.js";
import { User } from "./controllers/User.js";
import { Filters } from "./models/Filters.js";
import { ProductsPublic } from "./controllers/ProductsPublic.js";
import { Cart } from "./controllers/Cart.js";
import { ProductsPrivate } from "./controllers/ProductsPrivate.js";


let noLogin = {
    name: ' ',
    button1:'Login',
    button2:'Cadastro',
}

let login = {
    name: 'Usuário logado',
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


Dom.showcase(await ProductsPublic.getProducts())

Dom.addItemCart()
// Dom.createCart()
// Dom.lenghtCart()
// Dom.valueCart()
Dom.cartMobile()

if(await Dom.arrayLocal.length !== 0){
    if(localStorage.getItem('token') !== null){
        //console.log(await Dom.arrayLocal)
        // Dom.arrayCart = await Dom.arrayLocal
        // Dom.valueCart(Dom.arrayCart[0]);
        // Dom.createCart(Dom.arrayCart[0]);
        // Dom.lengthCart(Dom.arrayCart[0]);
    }else{
        Dom.arrayCart = await Dom.arrayLocal
        Dom.valueCart(Dom.arrayCart);
        Dom.createCart(Dom.arrayCart);
        Dom.lengthCart(Dom.arrayCart); 
    }

    
}  

// if(localStorage.getItem('token') !== null){
//     await Cart.addProductsMyCart(Dom.arrayCart)
// }
// Dom.arrayCart = await Dom.arrayLocal

// let arrayTeste = await Dom.fixObject()
// let arrayItens = []
// let objItem = {}
// let arrayKey = arrayTeste[0]
// let arrayValue = arrayTeste[1]
// console.log(arrayKey.length)
// for(let i = 0; i < arrayKey.length; i++){
//     objItem = {}
//     objItem.product_id = arrayKey[i]
//     objItem.quantity = arrayValue[i]
//     arrayItens.push(objItem)
// }

// console.log(Dom.arrayCart)




let arrayTotal = await ProductsPublic.getProducts()


let filterTag = document.querySelector('.nav__ul')
filterTag.addEventListener('click', async (e)=>{
    if(e.target.nodeName === 'LI' || e.target.nodeName !== 'IMG'){
        Dom.showcase(await Filters.categoryFilter(arrayTotal, e.target.innerText))
    }
})

let filterText = document.querySelector('header')
filterText.addEventListener('keydown', async (e)=>{
    if(e.target.nodeName === 'INPUT'){
        Dom.showcase(Filters.filterBySearch(arrayTotal, e.target.value))
    }
})






// let teste = await ProductsPublic.getProducts()
// console.log(teste)
