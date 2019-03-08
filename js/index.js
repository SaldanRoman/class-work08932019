document.querySelector('.page-loaded').innerTrext = (new Date()).toLocaleTimeString();

document.querySelector('.ajax-get-html').addEventListner('click', ajaxGetHtml);

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
