const jwt = require('jsonwebtoken');

// Secret key for encryption and decryption
const SECRET_KEY = 'your-very-secure-secret-key';

// Function to encrypt (sign) a JWT token
function encryptToken(payload) {
    try {
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
        console.log('Encrypted Token:', token);
        return token;
    } catch (error) {
        console.error('Error encrypting token:', error);
    }
}

// Function to decrypt (verify) a JWT token
function decryptToken(token) {
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        console.log('Decrypted Payload:', decoded);
        return decoded;
    } catch (error) {
        console.error('Error decrypting token:', error);
    }
}

// Example usage
const payload = { userId: 123, role: 'admin' };
const token = encryptToken(payload);
decryptToken(token);