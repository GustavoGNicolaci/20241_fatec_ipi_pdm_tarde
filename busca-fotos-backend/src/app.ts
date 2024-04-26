import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import axios from 'axios';

const { PORT } = process.env;

const app = express();
app.use(express.json());

app.listen(PORT, () => console.log(`Executando na porta ${PORT}`));