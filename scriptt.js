function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}
function saveData()
{
let signupUsername,email,password,passwordc;
signupUsername=document.getElementById("signupUsername").value;
email=document.getElementById("email").value;
password=document.getElementById("password").value;
passwordc=document.getElementById("passwordc").value;

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.email==email}))
{
  alert("This email is already regestered.");
}
else
{
  user_records.push({
  "signupUsername":signupUsername,
  "email":email,
  "password":password,
  "passwordc":passwordc
})
localStorage.setItem("users",JSON.stringify(user_records));
}
}
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const passwordResetForm = document.querySelector("#passwordReset");
    const newAccountForm = document.querySelector("#success");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        createAccountForm.classList.remove("form--hidden");
        loginForm.classList.add("form--hidden");
        passwordResetForm.classList.add("form--hidden");
        newAccount.classList.add("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        passwordResetForm.classList.add("form--hidden");
        createAccountForm.classList.add("form--hidden");
        newAccount.classList.add("form--hidden");
    });
    document.querySelector("#linkPasswordReset").addEventListener("click", e => {
        e.preventDefault();
        passwordResetForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
        loginForm.classList.add("form--hidden");
        newAccount.classList.add("form--hidden");
});
document.querySelector("#linkLogin-1").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        passwordResetForm.classList.add("form--hidden");
        createAccountForm.classList.add("form--hidden");
        newAccount.classList.add("form--hidden");
});
document.querySelector("#linknew").addEventListener("click", e => {
    {
    var Username =document.getElementById("signupUsername").value;
    var Email =document.getElementById("email").value;
    var Pass =document.getElementById("password").value;
    var PassC =document.getElementById("passwordc").value;
    if(Username=="Prithak Rai" && Email=="prithak.khamtu@gmail.com" && Pass=="abc" && PassC=="abc")
    {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        passwordResetForm.classList.add("form--hidden");
        createAccountForm.classList.add("form--hidden");
        newAccountForm.classList.remove("form--hidden");
    }
    else{
        newAccountForm.addEventListener("submitt", e => {
            e.preventDefault();    
            setFormMessage(newAccountForm, "error", "Invalid username/password combination");
        });
    }
    }
    });
loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });


    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });

});