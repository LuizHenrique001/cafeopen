let nome = document.querySelector('input#id_usuario')
let gmail = document.querySelector('input#id_gmail')
let senha = document.querySelector('input#id_senha')


function verificarLogin() {
    let nome_format = nome.value
    let gmail_format = gmail.value
    let senha_format = senha.value
    //Valores abaixo a serem armazenados pelo Local Storage
    let valor_nome = localStorage.setItem('nome', JSON.stringify(nome_format))
    let valor_gmail = localStorage.setItem('gmail', JSON.stringify(gmail_format))
    let valor_senha = localStorage.setItem('senha', JSON.stringify(senha_format))
    if(nome_format == JSON.stringify(localStorage.getItem('nome'))){
        alert('Este usuário já existe!')
    }else {
        alert('Logado')
    }

    
}
