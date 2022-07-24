// validation script here
const inputs = document.querySelectorAll('input');

const patterns = {
    username: /^[A-Za-z0-9]{5,12}$/,
    email: /^[a-z\d\.-]+@[a-z\d-]+\.[a-z]{2,3}\.?[a-z]{0,3}?$/,
    password: /^[\w@-]{8,20}$/,
    telephone: /^\d{10}$/,
    slug: /^[a-z\d-]{8,20}$/
};

// validation function
function validate(field, regex){
    if(regex.test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        //console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value])
    });
});