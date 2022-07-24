// validation script here
const inputs = document.querySelectorAll('input');

const patterns = {
    username: /^[A-Za-z0-9]{5,12}$/
    email: /^\w{3,64}@[a-z]{3,15}\.[a-z]{2,3}\.?[a-z]{0,3}?$/
    password: //
    telephone: /^\d{10}$/
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