const emailInput = document.querySelector('#emailInput');
const passwordInput = document.querySelector('#passwordInput');
const btnLogin = document.querySelector('#btnLogin');
const message = document.querySelector('#message');
let database = [
    {
        'email': 'xpplg2@gmail.com',
        'password': '123'
    },
    {
        'email': 'xpplg2@gmail.com',
        'password': '123'
    }
]
btnLogin.addEventListener('click', () => {
    message.innerHTML = '';
    let email = emailInput.value;
    let password = passwordInput.value;
    let validate = true;
    if (email === '') {
        validate = false;
        message.innerHTML += '<div class="alert alert-danger">Email Tidak Boleh Kosong</div>';
    }
    if (password === '') {
        validate = false;
        message.innerHTML += '<div class="alert alert-danger">Password Tidak Boleh Kosong</div>';
    }
    if (validate){
        let success = {'email':false,'password':false}
        for(let i=0;i<database.length;i++){
            if(email == database[i]['email']){
                success.email = true;
                if(password == database[i]['password']){
                    success.password = true;
                }
            }
        }
        if(success.email){
            if(success.password){

                document.location.href = 'cabang.html';
            }else{
                message.innerHTML = '<div class="alert alert-danger">Password Salah</div>';
            }
        }else{
            message.innerHTML = '<div class="alert alert-danger">Email Tidak dikenali</div>';
        }
    }
    
});