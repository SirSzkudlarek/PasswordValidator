const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const passwordValidator = () => {
  if(pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)) {
    p.textContent = 'Masz bardzo dobre hasło!'
    p.style.color = 'lime';
  } else if(pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
    p.textContent = 'Masz dobre hasło. Dodaj znaki specjalne aby mieć bardzo dobre!';
    p.style.color = 'yellow';
  } else if(pass.value.length > minValue && pass.value.match(letters)) {
    p.textContent = 'Hasło nie posiada cyfr!';
    p.style.color = 'red';
  } else if(pass.value.length > minValue) {
    p.textContent = 'Hasło nie posiada liter!';
    p.style.color = 'red';
  } else {
    p.textContent = 'Hasło musi posiadać minimum 10 znaków!';
    p.style.color = 'red';
  }
}

const passwordCheck = () => {
  if(pass.value !== '') {
    passwordValidator()
  } else {
    p.textContent = 'Nie podałeś hasła...';
    p.style.color = '';
  }
}

pass.addEventListener('keyup', passwordCheck);