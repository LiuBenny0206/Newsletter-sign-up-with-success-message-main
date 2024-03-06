document.getElementById('emailForm').addEventListener('submit', function(event) {
    var emailInput = document.getElementById('userEmail');
    
    if(!emailInput.value.includes('@')){
        event.preventDefault();
        document.getElementById('emailError').hidden = false;
        emailInput.style.backgroundColor = 'rgb(241, 175, 175)';
        emailInput.style.borderColor = 'rgb(236, 41, 41)';
    } else {
        console.log("Form is valid, redirecting...");
        location.href = 'signupsuccess.html';
    }
});


var button = document.getElementById("subscribe");

button.style.backgroundColor = ' hsl(234, 29%, 20%)';

function handleMouseOver(){
    button.style.backgroundColor = 'hsl(4, 100%, 67%)';
}

function handleMouseOut(){
    button.style.backgroundColor = 'hsl(234, 29%, 20%)';

}

button.addEventListener('mouseover' , handleMouseOver);
button.addEventListener('mouseout', handleMouseOut);
