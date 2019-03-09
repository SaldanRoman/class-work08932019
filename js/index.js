document.querySelector('.page-loaded').innerText = (new Date()).toLocaleTimeString();

document.querySelector('.ajax-get-html').addEventListener('click', ajaxGetHtml);

function ajaxGetHtml(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4 && xhr.status===200){
            document.querySelector('.html-container').innerHTML=xhr.responseText;
        }
    }
    xhr.open('GET', 'base-html-document.html', true);
    xhr.send();
    
}

document.querySelector('.login-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    fetch('form.php', {method: 'POST',body: new FormData(document.querySelector('.login-form'))})
        .then( response => response.text() )
        .then( html => document.querySelector('.server-response').innerHTML = html );
}
