import express from 'express';
import cors from 'cors';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, 'data');
const PRODUCTS_PATH = path.join(DATA_DIR, 'products.json');
const GALLERY_PATH = path.join(DATA_DIR, 'gallery.json');
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '10mb' }));

async function ensureDataFile(filePath, fallback) {
  try {
    await fs.access(filePath);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(fallback, null, 2), 'utf8');
  }
}

async function readJson(filePath) {
  const raw = await fs.readFile(filePath, 'utf8');
  return JSON.parse(raw);
}

async function writeJson(filePath, data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/login', (req, res) => {
  const password = req.body?.password;
  if (password === ADMIN_PASSWORD) {
    return res.json({ ok: true });
  }
  return res.status(401).json({ ok: false, message: 'Invalid password' });
});

app.get('/api/products', async (_req, res) => {
  try {
    await ensureDataFile(PRODUCTS_PATH, []);
    const data = await readJson(PRODUCTS_PATH);
    res.json(data);
  } catch (error) {
    console.error('Failed to read products', error);
    res.status(500).json({ error: 'Unable to read products' });
  }
});

app.put('/api/products', async (req, res) => {
  try {
    const payload = Array.isArray(req.body) ? req.body : [];
    await ensureDataFile(PRODUCTS_PATH, []);
    await writeJson(PRODUCTS_PATH, payload);
    res.json({ ok: true, count: payload.length });
  } catch (error) {
    console.error('Failed to save products', error);
    res.status(500).json({ error: 'Unable to save products' });
  }
});

app.get('/api/gallery', async (_req, res) => {
  try {
    await ensureDataFile(GALLERY_PATH, []);
    const data = await readJson(GALLERY_PATH);
    res.json(data);
  } catch (error) {
    console.error('Failed to read gallery', error);
    res.status(500).json({ error: 'Unable to read gallery' });
  }
});

app.put('/api/gallery', async (req, res) => {
  try {
    const payload = Array.isArray(req.body) ? req.body : [];
    await ensureDataFile(GALLERY_PATH, []);
    await writeJson(GALLERY_PATH, payload);
    res.json({ ok: true, count: payload.length });
  } catch (error) {
    console.error('Failed to save gallery', error);
    res.status(500).json({ error: 'Unable to save gallery' });
  }
});

await ensureDataFile(PRODUCTS_PATH, []);
await ensureDataFile(GALLERY_PATH, []);

app.listen(port, '0.0.0.0', () => {
  console.log(`Admin data server running on http://localhost:${port}`);
});
