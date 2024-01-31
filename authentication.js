// Firebase Authentication reference
const auth = firebase.auth();

// User Registration
function register(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
}

// User Login
function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
}

// User Logout
function logout() {
    return auth.signOut();
}
