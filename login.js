const email = document.getElementById('email');
const senha = document.getElementById('password');
const buttonEntrar = document.getElementById('button-ent');
const form = document.getElementById('form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    checkInputs();
  });

function checkInputs () {
    const emailValue = email.value;
    const senhaValue = password.value;

    if (emailValue === "") {
       setErrorFor(email, "O email é obrigatório.");
      } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um email válido.");
      } else {
        setSuccessFor(email);
      }
    if(senhaValue === ""){
        setErrorFor(senha, "A senha é obrigatória.");
    }else if(senhaValue.length < 7) {
         setErrorFor(senha, "A senha precisa ter no mínimo 7 caracteres.");
    }else {
        setSuccessFor(senha);
      
    }
    const formControls = form.querySelectorAll(".form-control");
    const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success"; 
     });
    if (formIsValid) {
    console.log("O formulário está 100% válido!");
    }
}
  
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = "form-control error";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

function strongPass(senha) {
    return /^(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@])(?!.*[iIoO])\S{6,12}$/.test(
      password
    );
  }