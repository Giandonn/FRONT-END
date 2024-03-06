function checkFields() {
    let checkEmail = document.getElementById('txtEmail').value;
    let checkSenha = document.getElementById('txtSenha').value;

    document.getElementById('emailSpan').hidden= checkEmail == "" ? false : true;
    document.getElementById('senhaSpan').hidden= checkSenha == "" ? false : true; 
    
    if (checkEmail != "" && checkSenha != "") {
        document.getElementById('cad').hidden = true;
        document.getElementById('loading').hidden = false;

        setTimeout(() => {
            window.location.href="dashboard.html";
          }, 1000);
    }
}