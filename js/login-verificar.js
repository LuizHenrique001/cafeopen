let nome = document.getElementById('usuario')
let gmail = document.querySelector('input#gmail')
let senha = document.querySelector('input#senha')

function verificarLogin() {
    let nome_format = nome.value
    let gmail_format = gmail.value
    let senha_format = senha.value
    //Variaveis abaixo para confirmar o login
    let confirm_nome = localStorage.getItem('nome')
    let confirm_gmail = localStorage.getItem('gmail')
    let confirm_senha = localStorage.getItem('senha')
    if(nome_format != '' && gmail_format != '' && senha_format != ''){
        if(
            (confirm_nome == '' || confirm_nome != nome_format)
            && (confirm_gmail == '' || confirm_gmail != gmail_format)
            && (confirm_senha == '' || confirm_senha != senha_format)
            ){
                localStorage.setItem('nome', nome_format)
                localStorage.setItem('gmail', gmail_format)
                localStorage.setItem('senha', senha_format)
                alert('Logado com sucesso!')
                window.location.href = '../index.html'

        }else{
            alert('Nome já existente!')
        }
    }else{
        alert('Campo vazio!')
    }
}

