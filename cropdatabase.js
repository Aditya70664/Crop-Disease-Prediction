// Sample data for disease tips and management notes
const diseaseDatabase = {
    "Blast (Rice)": "A fungal disease caused by Magnaporthe oryzae. Management: Use resistant varieties and apply fungicides.",
    "Early Blight (Tomato)": "Caused by Alternaria solani. Management: Crop rotation, resistant varieties, and fungicide applications.",
    "Powdery Mildew (Various Crops)": "Caused by different fungi, including Erysiphe species. Management: Remove affected leaves and apply fungicides.",
    "Bacterial Blight (Rice)": "Caused by Xanthomonas oryzae. Management: Use resistant varieties and avoid water splashing on leaves.",
    "Leaf Spot (Cotton)": "Caused by various fungi like Cercospora species. Management: Use fungicides and practice good crop sanitation.",
    "Rust (Wheat)": "Caused by Puccinia species. Management: Use resistant varieties and apply fungicides.",
    "Mosaic Disease (Various Crops)": "Caused by different viruses like Cucumber Mosaic Virus. Management: Use virus-free seeds and control vector insects.",
    "Downy Mildew (Various Crops)": "Caused by fungi like Peronospora species. Management: Use resistant varieties and apply fungicides."
};

document.getElementById('predictBtn').addEventListener('click', function() {
    const imageUpload = document.getElementById('imageUpload').files[0];
    
    if (imageUpload) {
        // Simulate a simple image recognition process (for demo purposes only)
        const diseaseName = recognizeDisease(imageUpload);
        
        if (diseaseName) {
            document.getElementById('diseaseName').innerText = diseaseName;
            document.getElementById('diseaseTips').innerText = diseaseDatabase[diseaseName];
            document.getElementById('predictionResult').style.display = 'block';
        } else {
            alert("Disease not recognized. Please try another image.");
        }
    } else {
        alert("Please upload an image first.");
    }
});

function recognizeDisease(image) {
    // In a real-world scenario, this function would use a machine learning model to recognize the disease
    // Here, we simulate recognition by randomly selecting a disease from the database for demonstration purposes

    const diseases = Object.keys(diseaseDatabase);
    const randomIndex = Math.floor(Math.random() * diseases.length);
    return diseases[randomIndex];
}








document.getElementById('predict-btn').addEventListener('click', function() {
    const fileInput = document.getElementById('crop-image');
    const resultDiv = document.getElementById('result');

    if (fileInput.files.length === 0) {
        resultDiv.textContent = "Please upload an image.";
        return;
    }

    const userImage = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const userImageDataUrl = e.target.result;

        // Predefined crop disease images and information
        const diseaseImages = [
            {
                name: "Blast (Rice)",
                src: "D:\Websites\Blast (Rice).png",
                description: "A fungal disease caused by Magnaporthe oryzae..."
            },
            {
                name: "Early Blight (Tomato)",
                src: "path/to/early_blight_image.jpg",
                description: "Caused by Alternaria solani..."
            },
            {
                name: "Powdery Mildew (Various Crops)",
                src: "path/to/powdery_mildew_image.jpg",
                description: "A fungal disease caused by..."
            }
            // Add more diseases and images here
        ];

        let recognizedDisease = null;

        // Compare uploaded image with stored disease images
        diseaseImages.forEach(disease => {
            const img = new Image();
            img.src = disease.src;
            img.onload = function() {
                const isMatch = compareImages(userImageDataUrl, img);
                if (isMatch) {
                    recognizedDisease = disease;
                }
            };
        });

        setTimeout(function() { // Add a timeout to allow image processing
            if (recognizedDisease) {
                resultDiv.innerHTML = `<h3>${recognizedDisease.name}</h3><p>${recognizedDisease.description}</p>`;
            } else {
                resultDiv.textContent = "Disease not recognized. Please try another image.";
            }
        }, 1000); // Adjust the timeout duration as needed
    };

    reader.readAsDataURL(userImage);
});

function compareImages(userImageDataUrl, diseaseImage) {
    // Placeholder comparison logic
    // In a real scenario, you'd need to use image processing libraries like OpenCV.js or TensorFlow.js
    return userImageDataUrl === diseaseImage.src; // Simplified example
}
