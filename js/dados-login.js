// Gmail do Usuário

let info_gmail_user = document.querySelector('p.info_gmail_user')
let gmailConta = localStorage.getItem('gmail')
info_gmail_user.innerHTML = gmailConta
