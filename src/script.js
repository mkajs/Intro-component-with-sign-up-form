const form = document.querySelector(".intro__form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btn = document.querySelector("#submit");

const validate = function (input) {
  console.log(input.value);
  if (input.value == "") {
    input
      .closest(".intro__input-control")
      .classList.add("intro__input-control--error");
    return false;
  } else {
    input
      .closest(".intro__input-control")
      .classList.remove("intro__input-control--error");
    return true;
  }
};

const validateEmail = (email) => {
  const validateResult = String(email.value)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  if (!validateResult) {
    email
      .closest(".intro__input-control")
      .classList.add("intro__input-control--error");
    return false;
  } else {
    email
      .closest(".intro__input-control")
      .classList.remove("intro__input-control--error");
    return true;
  }
};

const clearFields = function () {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  password.value = "";
  console.log("dine");
  return true;
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  validate(firstName) &&
    validate(lastName) &&
    validateEmail(email) &&
    validate(password) &&
    clearFields() &&
    alert("درخواست ارسال شد");
});

form.addEventListener("change", function (e) {
  switch (e.target.id) {
    case "firstName": {
      validate(firstName);
      break;
    }
    case "lastName": {
      validate(lastName);
      break;
    }
    case "password": {
      validate(password);
      break;
    }
    case "email": {
      validateEmail(email);
      break;
    }

    default:
  }
});
