// database.js

// Firebase Database reference
const db = firebase.firestore();

// Fetch User Documents
function getUserDocuments(userId) {
    return db.collection('documents').doc(userId).collection('userDocuments').get();
}
