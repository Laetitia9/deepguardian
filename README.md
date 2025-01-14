
# Deepguardian: AI-Powered Deepfake Video Detector

Deepguardian is an AI-powered web application designed to detect deepfake videos. This project leverages advanced deep learning models to analyze and identify manipulated videos, providing users with a reliable tool to spot deepfakes.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Mesonet Model](#mesonet-model)
    - [Meso4 and MesoInception4](#meso4-and-mesoinception4)
    - [Training, Validation, and Testing](#training-validation-and-testing)
    - [Data Splitting Process](#data-splitting-process)
5. [Gradio Web Interface](#gradio-web-interface)
6. [Deployment](#deployment)
7. [Installation](#installation)
8. [Usage](#usage)
9. [Contributing](#contributing)
10. [License](#license)

## Introduction

Deepguardian aims to combat the growing threat of deepfake videos by providing an easy-to-use web interface for uploading and analyzing videos. The application uses state-of-the-art deep learning models to detect manipulated content, ensuring digital trust and authenticity.

## Features

- **Deepfake Detection**: Analyze videos to detect deepfakes with high accuracy.
- **User-Friendly Interface**: A clean and intuitive landing page for easy video uploads.
- **Real-Time Analysis**: Quick and efficient video processing with real-time results.
- **Integrated Web Interface**: Seamless integration of the Gradio interface for video analysis.

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Python, TensorFlow/Keras
- **Model**: MesoNet (Meso4 and MesoInception4)
- **Web Interface**: Gradio
- **Deployment**: Vercel, Paperspace Gradient

## Mesonet Model

### Meso4 and MesoInception4

The Mesonet model is a deep learning architecture designed specifically for deepfake detection. It consists of two variants: Meso4 and MesoInception4. These models are trained to identify subtle inconsistencies in videos that indicate manipulation.

### Training, Validation, and Testing

The Meso4 and MesoInception4 models were trained, validated, and tested using a combined dataset from the FaceForensics++ dataset and the Deepfake Detection dataset available on Kaggle. The training process involved:

- **Data Preprocessing**: Videos were preprocessed to extract frames, detect faces, and align them for consistent input to the models.
- **Training**: The models were trained using the preprocessed dataset, with hyperparameter tuning to optimize performance.
- **Validation**: A portion of the dataset was used for validation to ensure the models generalize well to unseen data.
- **Testing**: The models were tested on a separate dataset to evaluate their accuracy and robustness in detecting deepfakes.

### Data Splitting Process

The dataset was split into training and testing sets using a 70/30 ratio. This means 70% of the data was used for training the models, while the remaining 30% was reserved for testing. This split ensures that the models are trained on a substantial amount of data while still having a significant portion for evaluating their performance.

## Gradio Web Interface

The Gradio web interface allows users to upload videos for analysis. The interface is integrated into a landing page hosted on Vercel, providing easy access for users. The key features of the Gradio interface include:

- **Video Upload**: Users can upload videos directly from their devices.
- **Real-Time Analysis**: The uploaded videos are analyzed in real-time using the MesoNet models.
- **Prediction Results**: The interface displays the prediction results, including the confidence score and whether the video is real or fake.

## Deployment

- **Frontend**: The landing page is deployed on Vercel, ensuring fast and reliable access for users.
- **Backend**: The MesoNet models are deployed on Paperspace Gradient, leveraging powerful GPUs for efficient video processing.
- **Integration**: The Gradio web interface is integrated with the backend models, providing a seamless user experience.

## Installation

To run Deepguardian locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/deepguardian.git
   cd deepguardian
   ```

2. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Application**:
   ```bash
   python app.py
   ```

## Usage

1. **Upload a Video**: Navigate to the landing page and upload a video for analysis.
2. **Analyze the Video**: The Gradio interface will process the video and display the results.
3. **View the Results**: Check the prediction results to determine if the video is a deepfake.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your fork.
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

This README provides a comprehensive overview of the Deepguardian project, including its features, technology stack, model details, and deployment instructions. It serves as a guide for users and contributors to understand and utilize the application effectively.
