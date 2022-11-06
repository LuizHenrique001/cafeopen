
function buscarProdutos() {
    let input = document.getElementById('barra_pesquisa').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('busca-itens');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

let pesquisaNone = document.getElementById('list').value
if(pesquisaNone == ''){
    pesquisaNone.style.display = 'none'
}