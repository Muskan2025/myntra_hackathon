// script.js
document.getElementById('cloth-drop').addEventListener('click', () => {
    document.getElementById('cloth-upload').click();
});

document.getElementById('human-drop').addEventListener('click', () => {
    document.getElementById('human-upload').click();
});

document.getElementById('cloth-upload').addEventListener('change', (event) => {
    handleFileUpload(event.target.files[0], 'cloth-drop');
});

document.getElementById('human-upload').addEventListener('change', (event) => {
    handleFileUpload(event.target.files[0], 'human-drop');
});

document.getElementById('submit-btn').addEventListener('click', () => {
    // Placeholder for submit functionality
    document.getElementById('result-box').innerHTML = '<p>Processing...</p>';
});

function handleFileUpload(file, dropAreaId) {
    const dropArea = document.getElementById(dropAreaId);
    dropArea.innerHTML = `<p>${file.name}</p>`;
}
