// Use Case 5: Validation System

// Without Currying:
function validateField(value, minLength, maxLength, regex, isRequired) {
    if (isRequired && !value) return 'Field is required';
    if (value.length < minLength) return `Minimum ${minLength} characters`;
    if (value.length > maxLength) return `Maximum ${maxLength} characters`;
    if (!regex.test(value)) return 'Invalid format';
    return null;
}

// Repetitive validation calls
validateField(username, 3, 20, /^[a-zA-Z0-9]+$/, true);
validateField(email, 1, 50, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, true);
validateField(bio, 0, 500, /.*/, false);

// With Currying
function validateField(minLength) {
    return function(maxLength) {
        return function(regex) {
            return function(isRequired) {
                return function(value) {
                    if (isRequired && !value) return 'Field is required';
                    if (value.length < minLength) return `Minimum ${minLength} characters`;
                    if (value.length > maxLength) return `Maximum ${maxLength} characters`;
                    if (!regex.test(value)) return 'Invalid format';
                    return null;
                };
            };
        };
    };
}

// Create field validators
const validateUsername = validateField(3)(20)(/^[a-zA-Z0-9]+$/)(true);
const validateEmail = validateField(1)(50)(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)(true);
const validateBio = validateField(0)(500)(/.*/)(false);

// Clean usage
validateUsername('john_doe123');
validateEmail('john@example.com');
validateBio('Software developer...');