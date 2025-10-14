// GLOBAL CONFIG - MESSY!  Configuration Manager
let appConfig = {
    apiUrl: "https://api.example.com",
    theme: "dark",
    debugMode: true,
    maxRetries: 3
};

function updateConfig(newConfig) {
    appConfig = { ...appConfig, ...newConfig };
}

// PROBLEMS:
console.log(appConfig.theme); // "dark"

// 😱 CONFIG CORRUPTION:
appConfig.apiUrl = "malicious-site.com"; // API hijacked!
appConfig.debugMode = "yes"; // Wrong data type!
appConfig = null; // Complete config loss!

// Different parts of app overwrite each other

function createConfigManager(initialConfig) {
    // PRIVATE CONFIG - Validated and protected
    let config = { ...initialConfig };
    
    return {
        get: function(key) {
            return config[key];
        },
        set: function(key, value) {
            // Validation before setting
            if (key === "apiUrl" && !value.startsWith("https://")) {
                throw new Error("API URL must use HTTPS");
            }
            if (key === "maxRetries" && (value < 0 || value > 10)) {
                throw new Error("Max retries must be between 0-10");
            }
            
            config[key] = value;
            return `Config ${key} updated successfully`;
        },
        getAll: function() {
            return { ...config }; // Return copy
        }
    };
}

// Usage:
const config = createConfigManager({
    apiUrl: "https://api.example.com",
    theme: "dark",
    debugMode: true,
    maxRetries: 3
});

console.log(config.get("theme")); // "dark"
config.set("theme", "light"); // "Config theme updated successfully"

// 😊 PROTECTED - CANNOT CORRUPT:
config.set("apiUrl", "http://insecure.com"); // Error: must use HTTPS
config.set("maxRetries", 999); // Error: must be between 0-10
console.log(config.config); // undefined - No direct access