var check = function() {
    if (document.getElementById('pass').value ==
        document.getElementById('passConf').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('pass').style.border = ''
        document.getElementById('passConf').style.border = ''
        document.getElementById('message').innerHTML = '';
        document.getElementById('submit').disabled = false;
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('pass').style.border = 'solid 1px red'
        document.getElementById('passConf').style.border = 'solid 1px red'
        document.getElementById('message').innerHTML = '* Passwords do not match';
        document.getElementById('submit').disabled = true;
    }
}