# 🌱 CropLife – Crop Disease Prediction & Management System

**CropLife: Save Green, Go Green with AI**

CropLife is a web-based Crop Disease Prediction and Management System designed to help farmers and users identify common crop diseases, understand disease management techniques, monitor weather conditions, and access useful crop-health information from a single platform.

The project combines web development, weather API integration, interactive maps, disease information, and a simulated disease prediction module to demonstrate how technology can support modern agriculture.

## 🚀 Features

### 🔬 Crop Disease Prediction
- Upload an image of a crop leaf.
- Predict crop diseases through the current demonstration module.
- Displays the predicted disease and basic management information.
- Designed for future integration with a trained AI/ML image-classification model.

### 🌾 Crop Disease Management
Provides information about common crop diseases, including:

- Blast – Rice
- Early Blight – Tomato
- Powdery Mildew
- Bacterial Blight – Rice
- Leaf Spot – Cotton
- Rust – Wheat
- Mosaic Disease
- Downy Mildew

Users can view disease descriptions and access available PDF resources.

### 🌦️ Weather Dashboard
The project integrates weather information to display:

- Current temperature
- City
- Weather condition
- Weather description
- Humidity
- Wind speed
- Weather icon
- Weather-based visual backgrounds

### 🗺️ Interactive Crop Disease Map
An interactive map using Leaflet.js is included to visualize example crop-disease-affected areas in India.

Example locations include:

- Punjab
- Maharashtra
- Tamil Nadu

### 👤 Login & Profile
The website includes a basic login interface with:

- Username
- Password
- Profile picture upload
- Profile picture display

### 🌐 Language Selection
The website includes a language selection interface with:

- English
- Hindi
- Spanish

### 📞 Contact Section
A contact form is provided for users to submit:

- Name
- Email
- Message

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Leaflet.js
- OpenStreetMap
- OpenWeather API
- Mapillary
- GitHub

## 📂 Project Structure

CropLife/
│
├── crop.html
├── crop.css
├── crop.js
├── cropdatabase.js
├── cropweather.js
├── language.js
├── chat.js
│
├── images/
│   ├── agriculture2.jpg
│   ├── Blast (Rice).png
│   ├── Early Blight (Tomato).jpg
│   ├── Powdery Mildew.webp
│   ├── Bacterial Blight (Rice).jpeg
│   ├── Leaf Spot (Cotton).webp
│   ├── Rust (Wheat).jpeg
│   ├── Mosaic Disease.jpg
│   └── Downy Mildew.png
│
└── pdf/
    ├── blast-rice.pdf
    ├── early-blight.pdf
    └── ...

## ⚙️ How to Run

### 1. Clone the Repository

git clone https://github.com/your-username/your-repository-name.git

### 2. Open the Project

Navigate to the project folder:

cd CropLife

### 3. Configure the Weather API

Configure the OpenWeather API securely before running the project.

Do not upload your API keys or secret credentials to GitHub.

### 4. Run the Website

Open `crop.html` using a local development server such as VS Code Live Server.

## 🔮 Future Improvements

- Real CNN/Deep Learning crop disease classification
- Real-time image-based disease detection
- Disease severity estimation
- Weather-based disease risk prediction
- Real-time crop disease mapping
- Farmer-specific recommendations
- Support for more Indian regional languages
- Mobile-responsive application
- Cloud database integration
- Secure user authentication
- AI-powered agricultural chatbot
- Crop health analytics dashboard
- Personalized crop management recommendations

## 🎯 Project Objective

The main objective of CropLife is to demonstrate how Artificial Intelligence, web technologies, weather data, and geographic information can be combined to create a digital agricultural assistance platform.

The system aims to make crop-health information easier to access and provide farmers with useful information for early disease awareness and better crop management.

## ⚠️ Important Notice

This project is currently a prototype/academic project.

The disease prediction functionality in the current version is a demonstration and should not be considered a scientifically validated agricultural diagnosis.

For real-world deployment, the system should use a properly trained and validated machine-learning model along with verified agricultural recommendations.

## 👨‍💻 Developer

**Aditya Sharma**

B.Tech – Computer Science & Engineering

### Interests

- Web Development
- Artificial Intelligence
- Data Analytics
- Machine Learning
- Prompt Engineering

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

**CropLife – Save Green, Go Green with AI 🌱**
