import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

// ✅ Added console.log inside the callback
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
