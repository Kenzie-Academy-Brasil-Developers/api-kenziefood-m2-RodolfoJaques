class Dom{
    static arrayCart = [];
    static deletArrayCart = [];

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

        const divBuy = document.createElement('button');
        divBuy.classList.add('card__buyBtn');
        divBuy.id = 'btn__buy';
       
        const buyBtn = document.createElement('img');
        buyBtn.src = '../src/assets/carrinho_vitrine.svg';
        buyBtn.classList.add('buyBnt__img');
        

        divBuy.append(buyBtn);
        divCartCard.append(price, divBuy);
        liCard.append(imgCard, nameitem, pDescription, spanSubcategory, divCartCard);

        return liCard;
    }
    
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


    static addItemCart() {
        const ulShowcase = document.querySelector('#showcase');
        ulShowcase.addEventListener('click', (event) => {
            if (event.target.id === 'btn__buy' || event.target.classList[0] === 'buyBnt__img') {
                let card = {
                    image: event.target.closest('li').children[0].src,
                    categoria: event.target.closest('li').children[3].innerHTML,
                    id: event.target.closest('li').id,
                    nome: event.target.closest('li').children[1].innerHTML,
                    preco: event.target.closest('li').children[4].children[0].innerHTML,
                }

                Dom.arrayCart.push(card);
                
                Dom.valueCart(Dom.arrayCart);
                Dom.createCart(Dom.arrayCart);
                Dom.lengthCart(Dom.arrayCart);
            }
        })

    }

    static valueCart(arrayCart) {
        const spanValue = document.querySelector('#valueTotal');
        spanValue.innerHTML = '';

        let array = [];

        arrayCart.forEach((item) => {
           let sliceItem = item.preco.slice((3));
           let numberItem = Number(sliceItem);
           array.push(numberItem);
       })

       let totalValue = array.reduce((acc, current) => acc + current, 0);
       spanValue.innerHTML = totalValue.toFixed(2);
    }

    static createCart(arrayCart) {
        const ulCartContent = document.querySelector('.cart__card');
        ulCartContent.innerHTML = '';

        arrayCart.forEach( ({image, id, nome, preco, categoria}) => {
            const li = document.createElement('li');
            li.classList.add('cart__products');
            li.id = id;

            li.innerHTML =`
            <img class='products__img' src="${image}" alt="${nome}">
            <h3 class='products__title'>${nome}</h3>
            <span class='products__category'>${categoria}</span>
            <p class='products__price'>${preco}</p>
            <button id="${id}" class='span__products__icon'>
                <img class='products__icon' src="./src/assets/trash_aside.svg">
            </button>
            `
            ulCartContent.append(li);

        })  
        
        console.log(Dom.arrayCart)
    }

    static lengthCart(arrayCart) {
        const valueTotal = document.querySelector('#length__value')
        let cartLength = arrayCart.map(item => item).length;
        valueTotal.innerHTML = cartLength;
    }

    static cartMobile() {
        const btnCart = document.querySelector('.button__moblie');
        const mask = document.querySelector('.mask');
        btnCart.addEventListener('click', (event) => {
            event.preventDefault();
            if (event.target) {
                mask.style.display = 'block';
            }            
        })
        Dom.closeMobile();
        Dom.deletCart(Dom.arrayCart);
    }

    static closeMobile() {
        const mask = document.querySelector('.mask');
        const closeX = document.querySelector('.cart__closeX');
        closeX.addEventListener('click', (event) => {
            event.preventDefault();
            if (closeX) {
                mask.style.display = 'none';
            }
        })
    }

    static listProductsDash(array){

        const list = document.querySelector('.list');

        list.innerHTML = ""

        array.forEach((item) => {

            let { categoria, descricao, id, imagem, nome, preco } = item

            list.innerHTML += `
            
            <li class= "item__list--dash" id= "${id}">
                <div class= "pic__name" >
                    <img class= "img img_dash--produto" src = "${imagem}">
                    <span class= "nome__produto">${nome}</span>         
                </div>
                <div class= "infos">
                <div class= "cont__categoria"><span class= "categoria">${categoria}</span></div> 
                    <span class= "description">${descricao}</span>
                </div>                
                <div class= "imgs">
                    <img class= "img img_dash--edit" src= ${'../assets/edit_icon.svg'}>
                    <img class= "img img_dash--delete" src= "${'../assets/trash_aside.svg'}">            
                </div>

            </li>
            `

        })
    }

    static deletCart(arrayCart) {
        const trashBtn = document.querySelector('.cart__card');        
       
        // console.log()
        trashBtn.addEventListener('click', (event) => {
            event.preventDefault();

            Dom.deletArrayCart = arrayCart.filter((element) => element.id !== event.target.parentNode.id)
            console.log(Dom.deletArrayCart)
            Dom.arrayCart = Dom.deletArrayCart
            Dom.createCart()
        })
        
    }
}

export{Dom}
