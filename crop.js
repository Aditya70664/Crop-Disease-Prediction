// scripts.js
function predictDisease() {
    const imageUpload = document.getElementById('imageUpload').files[0];
    const resultElement = document.getElementById('result');

    if (imageUpload) {
        // Simulate an API call to predict disease
        // Replace with real API integration later
        resultElement.innerHTML = "Predicting disease...";
        setTimeout(() => {
            resultElement.innerHTML = "Disease: Blight. Suggested Management: Use organic fungicides.";
        }, 2000);
    } else {
        resultElement.innerHTML = "Please upload an image of the crop.";
    }
}

// Open the login modal


function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var profilePic = document.getElementById('profilePic').files[0];
    
    if (username && password) {
        if (profilePic) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('profilePicHeader').src = e.target.result;
                document.getElementById('profilePicHeader').style.display = 'block';
            };
            reader.readAsDataURL(profilePic);
        }

        document.getElementById('displayName').textContent = username;
        document.getElementById('profileDisplay').style.display = 'block';
        closeLoginModal();
    } else {
        alert('Please enter both username and password.');
    }
}
// script.js
document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('file', document.getElementById('imageUpload').files[0]);
    
    fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').textContent = `Disease: ${data.disease}`;
    })
    .catch(error => console.error('Error:', error));
});






