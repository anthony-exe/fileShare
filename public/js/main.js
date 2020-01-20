'use strict';

window.onload = setUpHandlers;

function setUpHandlers() {
    document.querySelector('#upload-form').addEventListener('submit', handleUploadFormSubmit);
    document.querySelector('.upload-field').addEventListener('click', function() {
        document.querySelector('input[name="file"]').click();
    });
}

function handleUploadFormSubmit(event) {
    event.preventDefault();
    let uploadForm = document.querySelector('#upload-form');
    let formData = new FormData(uploadForm);
    console.log(formData);

    let xhr = new XMLHttpRequest();

    xhr.upload.onprogress = reportUploadStatus;

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

function reportUploadStatus(progressEvent) {
    if(progressEvent.lengthComputable) {
        let width = Math.ceil((progressEvent.loaded / progressEvent.total) * 100);
        document.querySelector('.determinate').style.width = width + "%";
    }
}