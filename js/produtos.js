const produtos = [
    {
        img: './images/img-cafe-melitta.png',
        nome: 'Café Melitta',
        preco: 41
    },

    {
        img: './images/img-cafeetiopia.webp',
        nome: 'Café Etiopia',
        preco: 60
    },

    {
        img: './images/img-cafeglobinho.png',
        nome: 'Café Globinho',
        preco: 109
    },

    {
        img: './images/img-cafelylacafe.webp',
        nome: 'Café Lylacafe',
        preco: 55
    },

    {
        img: './images/cafe-napoletano.webp',
        nome: 'Café Napoletano',
        preco: 68
    },

    {
        img: './images/cafe-arabica.png',
        nome: 'Café Arabica',
        preco: 87
    },

    {   
        img: './images/cafe-crema.webp',
        nome: 'Café Crema',
        preco: 39
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
    },

    {
        img: './images/cafe-spress.png',
        nome: 'Café Spress',
        preco: 35
    },

    {
        img: './images/cafe-florao.png',
        nome: 'Café do Florão',
        preco: 80
    },
    
    {
        img: './images/cafe-caturra.png',
        nome: 'Café do Caturra',
        preco: 40
    },

    {
        img: './images/cafe-pilao.png',
        nome: 'Café do Pilão',
        preco: 50
    }

]
let contador = 0
let mostrarProdutos = document.querySelector('div.container_produtos')
cafeOpen = () => {
    produtos.map((val) => {
        ++contador
        mostrarProdutos.innerHTML += `
        <div class="produtos" id="${contador}">
            <img src="${val.img}" alt="Img">
            <p class="nome_produto">
                ${val.nome}
            </p>
            <p class="preco_produto">
                R$ ${val.preco},00
            </p>
            <p class="btn_adicionar">
                <a href="#" onclick="adicionar(${contador})">Adicionar</a>
            </p>
        </div>
        `
    })
}

cafeOpen()