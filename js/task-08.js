const formm = document.querySelector('.login-form');

formm.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert(':( Всі поля повинні бути заповнені!');
    }
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}