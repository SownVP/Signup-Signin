const signUpButton = document.querySelector('#signUp');
    const signInButton = document.querySelector('#signIn');
    const container = document.querySelector('.container');
console.log(signUpButton,signInButton,container)
    signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });