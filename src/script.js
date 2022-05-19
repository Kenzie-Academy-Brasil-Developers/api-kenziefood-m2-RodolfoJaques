import { Dom } from "./models/Dom.js";
import { User } from "./controllers/User.js";
import { Filters } from "./models/Filters.js";
import { ProductsPublic } from "./controllers/ProductsPublic.js";
import { Cart } from "./controllers/Cart.js";


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

    Dom.arrayCart = await Dom.arrayLocal
    Dom.valueCart(Dom.arrayCart);
    Dom.createCart(Dom.arrayCart);
    Dom.lengthCart(Dom.arrayCart);
    
}  

// if(localStorage.getItem('token') !== null){
//     await Cart.addProductsMyCart(Dom.arrayCart)
//     console.log(await Cart.getMyCartProducts())
// }



console.log(await Dom.fixObject())



// let teste = await ProductsPublic.getProducts()
// console.log(teste)
