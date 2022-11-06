cafeOpenLoja = () => {
    let mostrarProdutos_loja = document.querySelector('div.container_produtos_loja')
    produtos.map((val) => {
        mostrarProdutos_loja.innerHTML += `
        <div class="produtos" id="${val.nome}">
            <img src=".${val.img}" alt="Img">
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
        `//ponto adicionado no "val.img" para que as imagens aparecam
    })
}
cafeOpenLoja()