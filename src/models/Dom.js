class Dom{


    static async showcase(arrayObj) {
        const ulShowcase = document.querySelector('.showcase__home');

        let items = await arrayObj;
        items.forEach(item => {
            let pollutedItem = this.pollutedItem(item);
            ulShowcase.appendChild(pollutedItem);
        });
        
    }

    static  pollutedItem(item) {
        let { categoria, descricao, id, imagem, nome, preco } = item;

        const liCard = document.createElement('li');
        liCard.classList.add('showcase__card');
        liCard.id = id;

        const imgCard = document.createElement('img');
        imgCard.classList.add('card__img');
        imgCard.src = imagem;
        imgCard.alt = nome;

        const nameitem = document.createElement('h3');
        nameitem.classList.add('card__title');
        nameitem.textContent = nome;

        const pDescription = document.createElement('p');
        pDescription.classList.add('card__desciption');
        pDescription.textContent = descricao;

        const spanSubcategory = document.createElement('span');
        spanSubcategory.classList.add('card__category');
        spanSubcategory.textContent = categoria;

        const divCartCard = document.createElement('div');
        divCartCard.classList.add('card__cart');

        const price = document.createElement('span');
        price.classList.add('card__price');
        price.textContent = `R$ ${preco.toFixed(2)}`;

        const divBuy = document.createElement('div');
        divBuy.classList.add('card__buyBtn');

        const buyBtn = document.createElement('img');
        buyBtn.src = '../src/assets/carrinho_vitrine.svg';
        buyBtn.classList.add('buyBnt__img');

        divBuy.append(buyBtn);
        divCartCard.append(price, divBuy);
        liCard.append(imgCard, nameitem, pDescription, spanSubcategory, divCartCard);

        return liCard;
=======
    static modalStatus = document.querySelector(".active__status")

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

    static modalUser(objeto){
        let header = document.querySelector('button')

        let boxBig = document.createElement('div')
        let triangle = document.createElement('div')
        let nameUser = document.createElement('p')
        let button1 = document.createElement('button')
        let button2 = document.createElement('button')

        boxBig.classList.add('modalUser')
        nameUser.innerText = objeto.name
        nameUser.classList.add('nameUser')
        button1.innerText = objeto.button1
        button2.innerText = objeto.button2

        boxBig.append(nameUser,button1,button2)
        header.append(boxBig,triangle)
    }

    static modalStatusAssert(){

        const containerModalAssert = document.createElement('div')
        containerModalAssert.innerHTML = `
        
        <div class="modal__status assert-none">
            <div class="status__button">
                <p class="stts">Status</p>
                <button>x</button>
            </div>
            <p class="modal__status--assert">Produto adicionado com sucesso</p>
            <div class="status__color--green"></div>
        </div>
        `
        Dom.modalStatus.appendChild(containerModalAssert)
    }

    static modalStatusError(){

        const containerModalError = document.createElement('div')
        containerModalError.classList.add('remove__modal')
        containerModalError.innerHTML = `
        
        <div class="modal__status error-none">
            <div class="status__button">
                <p class="stts">Status</p>
                <button>x</button>
            </div>
            <p class="modal__status--error">Ocorreu algum erro, o produto não foi adicionado</p>
            <div class="status__color--red"></div>
        </div>
        `
        Dom.modalStatus.appendChild(containerModalError)
    }

    static modalProduct (title,parent){

        const modalProduct = document.createElement('section')
        modalProduct.classList.add('externalBox')
        modalProduct.innerHTML = `
            <div class="modal__productsHeader">
                <h2>${title}</h2>
                <button>X</button>  
            </div>

            <form class="modal__productsForm" action="">
                <label for="name">Nome do produto</label>
                <input type="text" name="nome" id="name" placeholder="Digitar o nome">
                <label for="description">Descrição</label>
                <input type="text" name="descricao" id="description" placeholder="Digitar a Descrição" >
                <label for="categories">Categorias</label>
                <div id="categories">
                    <button id="categories1">Panificadora</button>
                    <button id="categories2">Frutas</button>
                    <button id="categories3">Bebidas</button>
                </div>
                <label for="value__product">Valor do Produto</label>
                <input type="number" name="valor" id="value__product" placeholder="Digitar o valor aqui">
                <label for="link">link da imagem</label>
                <input type="text" name="link" id="link" placeholder="Inserir link">
            </form>
        `
        parent.append(modalProduct)
        return modalProduct
    }

    static modalEditProduct (){
        let section = document.getElementById('modal__edit')
        section.classList.add('active__edit')
        let modalProduct = this.modalProduct('Edição de produto',section)

        let divBtn = document.createElement('div')
        divBtn.classList.add('modal__productsButtons')
        divBtn.innerHTML =`
            <button>Excluir</button> 
            <button>Salvar alterações</button>
        `

        modalProduct.append(divBtn)    
    }

    static modalRegisterProduct (){
        let section = document.getElementById('modal__register')
        section.classList.add('active__register')
        let modalProduct = this.modalProduct('Cadastro de produto',section)

        let divBtn = document.createElement('div')
        divBtn.classList.add('modal__productsButtons')
        divBtn.innerHTML =`
            <button id = "btnRegister_product" >Cadastrar Produto</button>
        `

        modalProduct.append(divBtn)    
    }

    static modalDeleteProduct(){
        let section = document.getElementById('modal__delete')
        section.classList.add('active__delete')
        section.innerHTML = `
            <section>
                <div>
                    <h2>Exclusão de produto</h2>
                    <button>X</button>
                </div>
                <p>Tem certeza que deseja exluir este produto?</p>
                <div>
                    <button>Sim</button>
                    <button>Não</button>
                </div>
            </section>
        `
    }



}

export{Dom}
