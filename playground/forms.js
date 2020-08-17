//Verify if user agreed to conditions and preventDefault 
//if not and add the attibute required for the field
const signUpForm = document.querySelector('[name="signup"]');

function handleFormSubmit(event) {
    if(!event.currentTarget.agree.checked) {
        event.preventDefault();
        alert("You should agree to terms and conditions");
    }
}

signUpForm.addEventListener('submit', handleFormSubmit);