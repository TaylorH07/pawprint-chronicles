function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-input-login').value.trim();
    const password = document.querySelector('#password-input-login').value.trim();
}
document.querySelector('.login-form').addEventListener('submit',loginFormHandler);