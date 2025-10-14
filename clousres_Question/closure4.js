// GLOBAL SESSION - PRIVACY DISASTER! User Session Management 
let userSession = {
    userId: 123,
    username: "john_doe",
    isAdmin: false,
    token: "secret_token_123"
};

function login(userData) {
    userSession = { ...userSession, ...userData };
}

function isUserAdmin() {
    return userSession.isAdmin;
}

// PROBLEMS:
console.log(isUserAdmin()); // false

// 😱 PRIVACY BREACH:
console.log(userSession.token); // "secret_token_123" - EXPOSED!
userSession.isAdmin = true; // Unauthorized admin access!
userSession.userId = 1; // Impersonate another user!

///////////////////////////////////////////////////////

function createSessionManager() {
    // PRIVATE SESSION DATA
    let userSession = {
        userId: null,
        username: null,
        isAdmin: false,
        token: null
    };
    
    return {
        login: function(userData) {
            userSession = { ...userSession, ...userData };
            return "Login successful";
        },
        logout: function() {
            userSession = { userId: null, username: null, isAdmin: false, token: null };
            return "Logout successful";
        },
        isUserAdmin: function() {
            return userSession.isAdmin;
        },
        getUsername: function() {
            return userSession.username;
        },
        // NO direct access to token or userId!
    };
}

// Usage:
const session = createSessionManager();
session.login({
    userId: 123,
    username: "john_doe", 
    isAdmin: false,
    token: "secret_token_123"
});

console.log(session.isUserAdmin()); // false
console.log(session.getUsername()); // "john_doe"

// 😊 SECURE - CANNOT ACCESS:
console.log(session.userSession); // undefined
console.log(session.token); // undefined