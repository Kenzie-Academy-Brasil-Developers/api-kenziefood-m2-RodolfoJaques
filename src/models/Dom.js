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
    }
}

export{Dom}
