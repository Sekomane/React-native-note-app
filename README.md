React Native Notes App

A mobile Notes application built using React Native and Expo. The app allows users to register, login, create, update, delete, and manage personal notes stored locally using AsyncStorage.

APK Download

Download and install the APK from Google Drive:

https://drive.google.com/file/d/18B7loN1NB-Dyth3Xt0m5PRy9FLaSvbe2/view?usp=sharing

How to install:

Download the APK to your Android phone

Open the file

Allow "Install from unknown sources" if prompted

Install and open the app

Features

Authentication

User Registration

User Login

User Logout

Session handling using React Context

Notes CRUD Operations

Create new notes

View notes list

Update existing notes

Delete notes

Search notes

Sort notes by date

Profile

Displays logged-in user email

Logout functionality

Storage

Uses AsyncStorage for persistent local storage

Notes remain saved after app restart

UI Features

Clean modern UI

Background image support

Hidden status bar

Profile icon button

Responsive layout

Technologies Used

React Native

Expo

TypeScript

React Navigation

AsyncStorage

Context API

Project Structure
src/
│
├── components/
│   ├── NoteCard.tsx
│   ├── SearchBar.tsx
│   └── CategorySelector.tsx
│
├── context/
│   └── AuthContext.tsx
│
├── navigation/
│   ├── RootNavigator.tsx
│   ├── AuthStack.tsx
│   └── MainStack.tsx
│
├── screens/
│   ├── LoginScreen.tsx
│   ├── RegisterScreen.tsx
│   ├── HomeScreen.tsx
│   ├── AddNoteScreen.tsx
│   ├── EditNoteScreen.tsx
│   ├── NoteDetailsScreen.tsx
│   └── ProfileScreen.tsx
│
├── services/
│   └── storage.ts

How to Run the Project

Prerequisites

Install Node.js
Install Expo CLI

npm install -g expo-cli


Install dependencies

npm install


Run the project

npx expo start


Press:

a → run Android emulator
w → run Web


OR scan QR code using Expo Go app.

How Notes Storage Works

Notes are stored locally using AsyncStorage.

Functions used:

addNote()

getNotes()

updateNote()

deleteNote()

Data persists even after closing the app.

Authentication Logic

Uses React Context:

AuthContext.tsx


Stores logged-in user state.

Prevents access to main app without login.
