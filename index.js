document.addEventListener("DOMContentLoaded", format);

function format(){
    const formMaster = document.querySelector('.format');
    const emailAdd = document.querySelector('#email');
    const errorCall = document.querySelector('#error');
    const buttonChecker = document.querySelector('#flop');

    if (buttonChecker) {
        buttonChecker.addEventListener('click', function() {
            console.log('button clicked');
        });
    } else {
        console.error('Submit button not found');
    }

    formMaster.addEventListener('submit', function(event) {
        event.preventDefault();
        const emailCall = emailAdd.value.trim();


        errorCall.textContent = '';
        errorCall.style.display = 'none';


        if(!emailCall){
            errorCall.textContent = 'Email is required';
            errorCall.style.display = 'block';
            errorCall.style.color = 'red';
            return;
           
        }

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(emailCall)){
            errorCall.textContent = 'Email is invalid';
            errorCall.style.display = 'block';
            errorCall.style.color = 'red';
            return;
        }


        window.location.href = `peace.html?email=${encodeURIComponent(emailCall)}`;

    });


}

