class Dom{

    static createHeader(){
        let header = document.querySelector('header')

        let kenzie = document.createElement('p')
        let food = document.createElement('p')
        let logo = document.createElement('div')
        let input = document.createElement('input')
        let user = document.createElement('button')
        let div = document.createElement('div')
        let img = document.createElement('span')

        kenzie.innerText = 'Kenzie'
        food.innerText = 'Food'
        input.type = 'text'
        input.name = 'pesquisa'
        input.placeholder = 'Pesquisar por produto'
        logo.append(kenzie,food)
        div.append(input,user,img)
        header.append(logo,div)
        
    }
}

export{Dom}