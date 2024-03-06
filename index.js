document.getElementById('emailForm').addEventListener('submit', function(event) {
    var emailInput = document.getElementById('userEmail');

    // 检查邮箱是否有效
    if (emailInput.validity.valid) {
        // 如果邮箱有效，隐藏错误消息
        document.getElementById('emailError').hidden = true;
    } else {
        // 如果邮箱无效，阻止表单提交并显示错误消息
        event.preventDefault();
        document.getElementById('emailError').hidden = false;

    }
});

var button = document.getElementById("subscribe");

button.style.backgroundColor = ' hsl(234, 29%, 20%)';

function handleMouseOver(){
    button.style.backgroundColor = 'hsl(4, 100%, 67%)';
}

function handleMouseOut(){
    button.style.backgroundColor = ' hsl(234, 29%, 20%)';
}

button.addEventListener('mouseover' , handleMouseOver);
button.addEventListener('mouseout', handleMouseOut);