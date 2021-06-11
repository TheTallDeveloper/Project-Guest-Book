const path = require('path');

module.exports = {
    devServer: {
        errorDataPath: 'property',
        Proxy: {
            '/api': {
                target: 'http://localhost:5000'
            }
        }
    }
};