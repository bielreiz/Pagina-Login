function showPassword() {
    const eye = document.getElementById("eye");
    const slashEye = document.getElementById("eye-slash");
    const field = document.getElementById("field-password");

    if (eye.style.display === 'none') {
        eye.style.display = 'block';
        slashEye.style.display = 'none';
        field.setAttribute('type', 'text');
    } else {
        eye.style.display = 'none';
        slashEye.style.display = 'block';
        field.setAttribute('type', 'password');
    }
};

document.getElementById("btn-login").addEventListener('click', function(e) {
    e.preventDefault();
    alert('Logado')
})