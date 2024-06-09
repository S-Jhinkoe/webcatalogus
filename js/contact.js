document.querySelector('.sendmess').addEventListener('click', function() {
    let firstname = document.querySelector('.firstname').value;
    let lastname = document.querySelector('.lastname').value;
    let city = document.querySelector('.City').value;
    let contents = document.querySelector('#contents').value;
    let email = document.querySelector('#email').value;

    let isValid = true;

    // Check if any field is empty or contains non-letter characters
    let namePattern = /^[a-zA-Z]+$/;
    if (firstname === '' || !namePattern.test(firstname) || lastname === '' || !namePattern.test(lastname) || city === ''
        || !namePattern.test(city) || contents === '' || email === '') {
        isValid = false;
    }

    // Check if email is in valid format
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
    }

    if (!isValid) {
        alert('Please fill out all the fields with valid information (Only letters allowed for names and check your email, city name)');
    } else {
        alert('Your message has been sent successfully');
        document.querySelector('.firstname').value = '';
        document.querySelector('.lastname').value = '';
        document.querySelector('.City').value = '';
        document.querySelector('#contents').value = '';
        document.querySelector('#email').value = '';
    }
});