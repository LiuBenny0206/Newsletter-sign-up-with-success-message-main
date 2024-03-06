var dismissButton = document.getElementById("dismissBtn");

dismissButton.style.backgroundColor = ' hsl(234, 29%, 20%)';

function handleMouseOver(){
    dismissButton.style.backgroundColor = 'hsl(4, 100%, 67%)';
};

function handleMouseOut(){
    dismissButton.style.backgroundColor = 'hsl(234, 29%, 20%)';

};

dismissButton.addEventListener('mouseover' , handleMouseOver);
dismissButton.addEventListener('mouseout', handleMouseOut);

dismissButton.onclick = function(){
    location.href = 'index.html';
};