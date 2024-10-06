
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3005;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the fonts from the 'fonts' directory
app.use('/fonts', express.static(path.join(__dirname, 'fonts')));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});