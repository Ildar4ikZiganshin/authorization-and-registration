const signInBtn = document.querySelector('.signin-btn');
const signUpBtn = document.querySelector('.signup-btn');
const formBox = document.querySelector('.form-box');

signUpBtn.addEventListener('click', function(){
  formBox.classList.add('active');
  document.body.classList.add('active');
})

signInBtn.addEventListener('click', function(){
  formBox.classList.remove('active');
  document.body.classList.remove('active');
})

