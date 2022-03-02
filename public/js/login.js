async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-input-login').value.trim();
    const password = document.querySelector('#password-input-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
        }
    }
}
<<<<<<< HEAD
document.querySelector('.login-btn').addEventListener('submit',loginFormHandler);

// hamburger btn event listener
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });
=======

document.querySelector('.login-btn').addEventListener('submit', loginFormHandler);


>>>>>>> c2692156e36e82be4c9c1b2313e150fd1cf06cf2
