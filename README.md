# Insect Detector Mobile App

This is a mobile application built with React Native that allows users to upload an image and detect insects within it. The app communicates with a Python backend for image processing.

## Features

- Select an image from the device's photo gallery.
- Send the selected image to a backend server for processing.
- Display the processed image, which highlights the detected insects.

## Tech Stack

- **Frontend**: React Native (Expo) with TypeScript
- **Backend**: Python with FastAPI (or similar framework)
- **Styling**: React Native StyleSheet

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Yarn](https://yarnpkg.com/) or npm
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Python 3.8+](https://www.python.org/) and `pip`
- Xcode (for iOS development) or Android Studio (for Android development)

## Setup & Installation

### 1. Backend Server

The backend is responsible for receiving an image and running the detection model.

```bash
# Navigate to your backend directory (assuming it's in the project)
cd path/to/your/backend

# Create and activate a Python virtual environment
python3 -m venv venv
source venv/bin/activate

# Install required Python packages (assuming a requirements.txt)
pip install -r requirements.txt
```

### 2. Frontend Mobile App

```bash
# Navigate to the project root
cd /path/to/insect-detector-app

# Install JavaScript dependencies
npm install
# or
yarn install

# Install iOS pods
cd ios
pod install
cd ..
```

## Running the Application

### 1. Start the Backend Server

First, start your Python server. Make sure it's accessible on your local network.

```bash
# In your backend directory with the virtual environment activated
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```
- The `--host 0.0.0.0` flag makes the server accessible from other devices on the same network.

### 2. Configure and Run the Mobile App

You need to tell the mobile app the IP address of your computer running the backend.

1.  **Find your computer's local IP address.**
    - On macOS: `ifconfig | grep "inet " | grep -v 127.0.0.1`
    - On Windows: `ipconfig`

2.  **Update the API service.**
    - Open the file `services/api.ts`.
    - Change the `SERVER_URL` constant to match your computer's IP address.
      ```typescript
      // services/api.ts
      const SERVER_URL = 'http://YOUR_COMPUTER_IP_ADDRESS:8000';
      ```

3.  **Start the app.**
    ```bash
    # To run on the iOS Simulator
    npx react-native run-ios

    # To run on the Android Emulator/Device
    npx react-native run-android
    ```

## Project Structure

```
.
├── android/          # Android native project
├── components/       # Reusable React Native components
│   ├── ImageDisplay.tsx
│   ├── ImagePickerButton.tsx
│   └── UploadButton.tsx
├── ios/              # iOS native project
├── screens/          # App screens
│   └── HomeScreen.tsx
├── services/         # API service for backend communication
│   └── api.ts
├── App.tsx           # Main application component
└── app.json          # Expo configuration
```