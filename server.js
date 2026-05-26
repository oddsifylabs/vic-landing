import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS, JS, etc.)
app.use(express.static(__dirname));

// Serve index.html for all routes (SPA)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check endpoint for Railway
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'vic-landing' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✓ VIC Landing Page running on port ${PORT}`);
  console.log(`✓ Open http://localhost:${PORT}`);
});
