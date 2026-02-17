# React Native Notes App

A mobile Notes application built using React Native and Expo. The app allows users to register, login, create, update, delete, and manage personal notes stored locally using AsyncStorage.

## 📱 APK Download

Download and install the APK from Google Drive:

**[Download Notes App APK](https://drive.google.com/file/d/18B7loN1NB-Dyth3Xt0m5PRy9FLaSvbe2/view?usp=sharing)**

### How to install:
1. Download the APK to your Android phone
2. Open the file
3. Allow "Install from unknown sources" if prompted
4. Install and open the app

## ✨ Features

### Authentication
- User Registration
- User Login
- User Logout
- Session handling using React Context

### Notes CRUD Operations
- Create new notes
- View notes list
- Update existing notes
- Delete notes
- Search notes
- Sort notes by date

### Profile
- Displays logged-in user email
- Logout functionality

### Storage
- Uses AsyncStorage for persistent local storage
- Notes remain saved after app restart

### UI Features
- Clean modern UI
- Background image support
- Hidden status bar
- Profile icon button
- Responsive layout

## 🛠 Technologies Used

- **React Native** - Mobile app framework
- **Expo** - Development platform
- **TypeScript** - Programming language
- **React Navigation** - Navigation library
- **AsyncStorage** - Local storage
- **Context API** - State management

## 📁 Project Structure
      src/
      │
      ├── components/
      │ ├── NoteCard.tsx
      │ ├── SearchBar.tsx
      │ └── CategorySelector.tsx
      │
      ├── context/
      │ └── AuthContext.tsx
      │
      ├── navigation/
      │ ├── RootNavigator.tsx
      │ ├── AuthStack.tsx
      │ └── MainStack.tsx
      │
      ├── screens/
      │ ├── LoginScreen.tsx
      │ ├── RegisterScreen.tsx
      │ ├── HomeScreen.tsx
      │ ├── AddNoteScreen.tsx
      │ ├── EditNoteScreen.tsx
      │ ├── NoteDetailsScreen.tsx
      │ └── ProfileScreen.tsx
      │
      ├── services/
      │ └── storage.ts


## 🚀 How to Run the Project

### Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install Expo CLI globally:
  ```bash
  npm install -g expo-cli

## Installation Steps
Clone the repository

bash
```
git clone <your-repository-url>
cd react-native-notes-app
```
## Install dependencies

bash
```
npm install
```
Run the project

bash
```
npx expo start
```
Launch the app

Press a → run Android emulator

Press w → run Web

OR scan QR code using Expo Go app on your physical device

## 💾 How Notes Storage Works
Notes are stored locally using AsyncStorage with the following functions:

    addNote() - Create a new note
    
    getNotes() - Retrieve all notes
    
    updateNote() - Update an existing note
    
    deleteNote() - Delete a note

Data persists even after closing the app.

## 🔐 Authentication Logic
```
The app uses React Context for authentication management:

AuthContext.tsx manages the logged-in user state

Prevents access to main app without valid login

Handles user registration, login, and logout ```

## 📱 Screens
```
      LoginScreen - User authentication
      
      RegisterScreen - New user registration
      
      HomeScreen - Display all notes with search and sort
      
      AddNoteScreen - Create new notes
      
      EditNoteScreen - Modify existing notes
```

NoteDetailsScreen - View full note content

ProfileScreen - User profile and logout
