# NoteApp

This project contains simple React Native app using local storage to CRUD notes.

## Requirements

-   Node.js
-   Expo

## Installation

- Clone the repo 
- Run the following commands
	- `npm install` to install dependencies
	- `npx expo start` to run the application

## Features

- CRUD to local storage
- Reading JSON file 

## Functionality
This app will loads all the notes if any saved in the local storage and if it doesn't it will show a text `No notes to be shown`.

Futhermore, it can create a note and validations are applied only to the note input as there can be notes without a category or client. If category and/or client needs to be empty, don't select them. 

