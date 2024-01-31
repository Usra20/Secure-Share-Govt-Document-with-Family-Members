// logging.js

// Simple logging function
function logAction(action, userId, details) {
    console.log(`[${new Date().toISOString()}] Action: ${action} | User: ${userId} | Details: ${details}`);
}
