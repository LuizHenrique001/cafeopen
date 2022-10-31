let gmail = document.querySelector('input#gmail')
let senha = document.querySelector('input#senha')
let loginNone = document.querySelector('a#login_none_cod1')
let verificar_gmail = localStorage.getItem('gmail')
let verificar_senha = localStorage.getItem('senha')
let verificar_login = localStorage.getItem('verificar_login')
let icone_login = document.querySelector('a.icone_login')

function verificarLogin() {
    let gmail_format = gmail.value
    let senha_format = senha.value

    if(
        (gmail_format != '' && gmail_format != verificar_gmail) && (senha_format != '' && senha_format != verificar_senha)){
        alert('Logado com sucesso!')
        window.location.href = '../index.html'//Vai retornar a página inicial
        localStorage.setItem('gmail', gmail_format)
        localStorage.setItem('senha', senha_format)
        localStorage.setItem('verificar_login', 'ContaCriada')

        //Para aparecer o icone da conta
        loginNone.style.display = 'none'
        icone_login.style.display = 'flex'
    }
    else if(gmail_format == '' && senha_format == ''){
        alert('Campo Vazio')//Erro para os dois campos vazios
    }
    else if(gmail_format == '' || senha_format == ''){
        alert('Campo Vazio')//Erro se apenas um estar vazio
    }
    else {
        alert('Conta já existente')//Erro caso a comta já exista
    }
}

if(verificar_login == 'ContaCriada'){//Verificar se a conta está logada
    icone_login.style.display = 'flex'
    loginNone.style.display = 'none'
}

function sairConta() {
    localStorage.removeItem('verificar_login')
}