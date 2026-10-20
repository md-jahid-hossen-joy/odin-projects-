
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    alert("Form Submitted! Check console for details.");
});
