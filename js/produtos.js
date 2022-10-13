const produtos = [
    {
        img: './images/img-cafe-melitta.png',
        nome: 'Café Melitta',
        preco: 79
    },

    {
        img: './images/img-cafeetiopia.webp',
        nome: 'Café Etiopia',
        preco: 144 
    },

    {
        img: './images/img-cafeglobinho.png',
        nome: 'Café Globinho',
        preco: 259
    },

    {
        img: './images/img-cafelylacafe.webp',
        nome: 'Café Lylacafe',
        preco: 120
    },

    {
        img: './images/cafe-napoletano.webp',
        nome: 'Café Napoletano',
        preco: 68
    },

    {
        img: './images/cafe-arabica.png',
        nome: 'Café Arabica',
        preco: 269
    },

    {   
        img: './images/cafe-crema.webp',
        nome: 'Café Crema',
        preco: 112
    },

    {
        img: './images/cafe-janus.webp',
        nome: 'Café Janus',
        preco: 45
    },

    {
        img: './images/cafedocentro.png',
        nome: 'Café do Centro',
        preco: 56
    }

]

cafeOpen = () => {
    let mostrarProdutos = document.querySelector('div.container_produtos')
    produtos.map((val) => {
        mostrarProdutos.innerHTML += `
        <div class="produtos">
            <img src="${val.img}" alt="Img">
            <p class="nome_produto">
                ${val.nome}
            </p>
            <p class="preco_produto">
                R$ ${val.preco},00
            </p>
            <p class="btn_adicionar">
                <a href="#">Adicionar</a>
            </p>
        </div>
        `
    })
}

cafeOpen()