// without currying

function createLogger(level, format, timestamp) {
    return function(message) {
        const time = timestamp ? new Date().toISOString() : '';
        const formatted = `${time} [${level}] ${message}`;
        console.log(formatted);
    };
}

// Have to pass all config every time
const debugLogger = createLogger('DEBUG', 'text', true);
const errorLogger = createLogger('ERROR', 'json', false);

debugLogger('User logged in');
errorLogger('Database connection failed');

// // with currying
function createLogger1(level) {
    return function(format) {
        return function(timestamp) {
            return function(message) {
                const time = timestamp ? new Date().toISOString() : '';
                const formatted = `${time} [${level}] ${message}`;
                console.log(formatted);
            };
        };
    };
}

// Create specialized loggers 
const debugLogger1 = createLogger1('DEBUG')('text')(true);
const errorLogger1 = createLogger1('ERROR')('json')(false);

// Or create intermediate configurations
const withDebugLevel = createLogger1('DEBUG');
const withTextFormat = withDebugLevel('text');
const debugWithTime = withTextFormat(true);
const debugWithoutTime = withTextFormat(false);

debugWithTime('User logged in');    // "2023-10-01T10:00:00.000Z [DEBUG] User logged in"
debugWithoutTime('Cache cleared');  // "[DEBUG] Cache cleared"