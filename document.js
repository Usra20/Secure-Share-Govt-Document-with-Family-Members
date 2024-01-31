// document.js

// Firebase Database reference
const db = firebase.firestore();

// Upload Document
function uploadDocument(userId, documentData) {
    return db.collection('documents').doc(userId).set(documentData);
}

// Update Document
function updateDocument(userId, documentId, updatedData) {
    return db.collection('documents').doc(userId).collection('userDocuments').doc(documentId).update(updatedData);
}

// Delete Document
function deleteDocument(userId, documentId) {
    return db.collection('documents').doc(userId).collection('userDocuments').doc(documentId).delete();
}

// Share Document
function shareDocument(senderUserId, receiverUserId, documentId) {
    // Implement sharing logic here
    // For example, create a shared_documents collection and add the document reference
}
