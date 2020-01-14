let form = document.querySelector('form');
let btn = document.querySelector('button');
// let getName = document.querySelector('#get_name');
// let getEmail = document.querySelector("#get_email");
// let get_password = document.querySelector('input[type = password]');

// let userDetail = [];

// function takeInput(event) {
//   console.log(event.target);

// }

let userDetail = {
    name: "",
    email: "",
    password: ''
};




function takeInput(event) {

    // if(event.key == 'Enter')
    {

        if (event.target.id == 'get_name') {
            userDetail.name = event.target.value;

        }
        if (event.target.id == 'get_email') {
            userDetail.email = event.target.value;

        }
        if (event.target.id == 'get_password') {
            userDetail.password = event.target.value;

        }
    }
}

function checkForm(event) {
    event.preventDefault();
    console.log(event);

    if (event.screenX != 0) {
        if (userDetail.name == '') {
            let nameEmpty = document.createElement('h2');
            nameEmpty.textContent = 'name empty';
            document.querySelector('.name').appendChild(nameEmpty)
        }
        if (userDetail.email == '') {
            let emailEmpty = document.createElement('h2');
            emailEmpty.textContent = 'email empty';
            document.querySelector('.email').appendChild(emailEmpty);
        }
        if (userDetail.password == '') {
            let passwordEmpty = document.createElement('h2');
            passwordEmpty.textContent = 'password empty';
            document.querySelector('.password').appendChild(passwordEmpty);
        }
        if (userDetail.name && userDetail.email && userDetail.password) {
            viewUserDetail();
        }
    }
}

function viewUserDetail() {
    document.body.innerHTML = '';
    let detail = document.createElement('h1');
    detail.innerHTML = 'You are ' + userDetail.name + ' Your email: ' + userDetail.email + ' and password is ' + userDetail.password;
    document.body.appendChild(detail);
}


// viewUserDetail();

// getName.addEventListener("keypress", takeInput)
// getEmail.addEventListener("keypress", takeInput)
// get_password.addEventListener("keypress", takeInput)

form.addEventListener('keypress', takeInput);
btn.addEventListener('click', checkForm);