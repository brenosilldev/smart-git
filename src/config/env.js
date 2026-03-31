// src/config/env.js

/**
 * Load and validate environment variables for API keys and configuration.
 * Make sure to set the following environment variables:
 * 
 * - API_KEY: Your API key for accessing the service.
 * - DATABASE_URL: The URL for your database connection.
 * - PORT: The port on which the application will run.
 */

const dotenv = require('dotenv');
const fs = require('fs');

// Load environment variables from .env file
const result = dotenv.config();

if (result.error) {
    throw new Error(`Failed to load .env file: ${result.error}`);
}

const { API_KEY, DATABASE_URL, PORT } = process.env;

// Validate required environment variables
const validateEnvVariables = () => {
    if (!API_KEY) {
        throw new Error('Missing ENV variable: API_KEY');
    }
    if (!DATABASE_URL) {
        throw new Error('Missing ENV variable: DATABASE_URL');
    }
    if (!PORT) {
        throw new Error('Missing ENV variable: PORT');
    }
};

validateEnvVariables();

module.exports = {
    API_KEY,
    DATABASE_URL,
    PORT
};
