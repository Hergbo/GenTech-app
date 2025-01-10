const form = document.querySelector("form");
const fullName = document.getElementById("name");
const lastName = document.getElementById("name");
const email = document.getElementById("email");
const Password = document.getElementById("password");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");
let popup = document.getElementById("popup");

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
      if(item.value == ""){
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }

      if (items[1].value != "") {
        checkEmail();
      }
    
      items[1].addEventListener("keyup", () => {
        checkEmail();
      });
    
      item.addEventListener("keyup", () => {
        if (item.value != "") {
          item.classList.remove("error");
          item.parentElement.classList.remove("error");
        }
        else{
          item.classList.add("error");
          item.parentElement.classList.add("error");
        }
      });
  }

}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");
  
    if (!email.value.match(emailRegex)) {
      email.classList.add("error");
      email.parentElement.classList.add("error");
  
      if (email.value != "") {
        errorTxtEmail.innerText = "Enter a valid email address";
      }
      else{
        errorTxtEmail.innerText = "Email Address can't be blank!";
      }
    }
    else{
      email.classList.remove("error");
      email.parentElement.classList.remove("error");
    }
}



function openPopup (){
  popup.classList.add("open-popup");
}

function closePopup (){
  popup.classList.remove("open-popup");
}


  

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

});