const { initializeApp } = require("firebase/app");
const { getDatabase, ref, push, set, get } = require("firebase/database");

const firebaseConfig = {
    apiKey: "AIzaSyDnQTLlmZ9IrzIhnO73aLR2t3AYsjcp2jQ",
    authDomain: "sample123-92b7b.firebaseapp.com",
    databaseURL: "https://sample123-92b7b-default-rtdb.firebaseio.com",
    projectId: "sample123-92b7b",
    storageBucket: "sample123-92b7b.appspot.com",
    messagingSenderId: "571402376032",
    appId: "1:571402376032:web:41f58759fe50bf79e3c405",
    measurementId: "G-KSED2S6QVT"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get a reference to the Firebase Realtime Database
const database = getDatabase(app);

// Function to add a student
function addStudent(student) {
    const studentsRef = ref(database, 'students'); // Reference to the 'students' node
    const newStudentRef = push(studentsRef); // Create a new reference for the student
    set(newStudentRef, student) // Set the student data at the new reference
        .then(() => {
            console.log('Student added successfully!');
        })
        .catch((error) => {
            console.error('Error adding student:', error);
        });
}

// Add a student
addStudent({ name: 'John Doe', age: 20, grade: 'A' }); // Example student object

// Function to get students
function getStudents() {
    const studentsRef = ref(database, 'students'); // Reference to the 'students' node
    get(studentsRef) // Fetch the data once
        .then((snapshot) => {
            if (snapshot.exists()) {
                const students = snapshot.val(); // Get the data as an object
                console.log('Students:', students); // Log the students
            } else {
                console.log('No students found');
            }
        })
        .catch((error) => {
            console.error('Error getting students:', error);
        });
}

// Call the function to get students
getStudents();
