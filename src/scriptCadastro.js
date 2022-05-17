import { User } from "./controllers/User.js";

async function register(e){

    const name = document.querySelector('.cadastro__name').value
    const email = document.querySelector('.cadastro__email').value
    const password = document.querySelector('.cadastro__password').value
    
    e.preventDefault()

    let data = {
        neme:name,
        email:email,
        password:password
    }

    const dataFinal = await User.userRegister(data)

    if(typeof dataFinal === 'string' || dataFinal.status === "Error"){

        alert(`CADASTRO INVALIDO...\nTente novamente!`)
        
    }else{

        window.location.href = "./login.html"
    }
}
const button = document.getElementById('cadastro__submit')
button.addEventListener('click',register)