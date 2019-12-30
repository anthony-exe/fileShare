'use strict';

window.onload = function() {
    document.querySelector('#upload-form').addEventListener('submit', handleUploadFormSubmit);
}

function handleUploadFormSubmit(event) {
    event.preventDefault();
    let uploadForm = document.querySelector('#upload-form');
    let formData = new FormData(uploadForm);
    console.log(formData);

    let xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if(xhr.status === 200) {
            console.log('Success: ' + xhr.responseText);
        }
    };

    xhr.onerror = function() {
        console.log('Something went wrong: ');
    };

    xhr.open('POST', '/upload-file');
    xhr.send(formData);
}