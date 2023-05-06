const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const name = document.getElementById('name');
const email = document.getElementById('email');
const birthday = document.getElementById('birthday');
const type = document.getElementById('type');
const typeD = document.getElementById('dog');
const typeC = document.getElementById('cat');
const grooming = document.getElementById('grooming');
const date = document.getElementById('date');

form.addEventListener('book', e => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const birthdayValue = birthday.value.trim();
  const dogValue = type.checked;
  const catValue = type.checked;
  const groomingValue = grooming.value.trim();
  const dateValue = date.value.trim(); 
  
  if (firstnameValue === '') {
    setErrorFor(firstname, 'First Name cannot be blank');
  } else if (hasNumber(firstnameValue)) {
    setErrorFor(firstname, 'First Name cannot have numbers');
  } else {
    setSuccessFor(firstname);
  }
  
  if (lastnameValue === '') {
    setErrorFor(lastname, 'Last Name cannot be blank');
  } else if (hasNumber(lastnameValue)) {
    setErrorFor(lastname, 'Last Name cannot have numbers');
  } else {
    setSuccessFor(lastname);
  }
  
  if (nameValue === '') {
    setErrorFor(name, 'name cannot be blank');
  } else {
    setSuccessFor(name);
  }
  
  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email);
  }
  
  if (birthdayValue === '') {
    setErrorFor(birthday, 'Birthday cannot be blank');
  } else {
    setSuccessFor(birthday);
  }
  
  if (dogValue === false && catValue === false) {
    setErrorFor(type, 'Type cannot be blank');
  } else {
    setSuccessFor(type);
  }
        

  if (groomingValue === '') {
    setErrorFor(grooming, 'cannot be blank');
  } else {
    setSuccessFor(grooming);
  }


function setErrorFor(input, message) {
  if (input === type){
    const formControl = input.parentElement.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control-type error';
    small.innerText = message;
  } else {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
  }
}

function setSuccessFor(input) {
  if (input === type){
    const formControl = input.parentElement.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control-type success';
  } else {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
  }
}


function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function hasNumber(input) {
  return /\d/.test(input);
}
}