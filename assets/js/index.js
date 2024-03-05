function checkFields() {
    let checkEmail = document.getElementById('txtEmail').value;
    let checkSenha = document.getElementById('txtSenha').value;

    document.getElementById('emailSpan').hidden= checkEmail == "" ? false : true;
    document.getElementById('senhaSpan').hidden= checkSenha == "" ? false : true;    
}