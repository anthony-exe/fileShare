'use strict';

window.onload = function() {
    document.querySelector('#upload-form').addEventListener('submit', handleUploadFormSubmit);
}

function handleUploadFormSubmit(event) {
    event.preventDefault();
    let uploadForm = document.querySelector('#upload-form');
    let formData = new FormData(uploadForm);
    console.log(formData);
    fetch('/upload-file', {
        method: 'POST',
        body: formData,
        mode: 'same-origin'
    }).then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.error(`Error: ${error}`);
    });
}