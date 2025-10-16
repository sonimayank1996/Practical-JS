// without Currying
function apiRequest(method, baseURL, endpoint, headers, data) {
    return fetch(`${baseURL}${endpoint}`, {
        method,
        headers,
        body: JSON.stringify(data)
    });
}

// Repetitive code
apiRequest('GET', 'https://api.example.com', '/users', {'Authorization': 'Bearer token'}, null);
apiRequest('POST', 'https://api.example.com', '/users', {'Authorization': 'Bearer token'}, userData);
apiRequest('GET', 'https://api.example.com', '/products', {'Authorization': 'Bearer token'}, null);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// With Currying:
function apiRequest(method) {
    return function(baseURL) {
        return function(endpoint) {
            return function(headers) {
                return function(data) {
                    return fetch(`${baseURL}${endpoint}`, {
                        method,
                        headers,
                        body: JSON.stringify(data)
                    });
                };
            };
        };
    };
}

// Create specialized API clients
const withBaseURL = apiRequest('GET')('https://api.example.com');
const withAuth = withBaseURL('/users')({'Authorization': 'Bearer token'});

// Reuse configured clients
const getUsers = withAuth(null);
const getUserById = (id) => withBaseURL(`/users/${id}`)({'Authorization': 'Bearer token'})(null);
const createUser = apiRequest('POST')('https://api.example.com')('/users')({'Authorization': 'Bearer token'});

// Clean usage
getUsers();
getUserById(123);
createUser({name: 'John', email: 'john@example.com'});

