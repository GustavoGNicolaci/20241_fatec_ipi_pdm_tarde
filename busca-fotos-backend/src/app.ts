import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import axios from 'axios';

const { PORT, PEXELS_KEY } = process.env;

const app = express();
app.use(express.json());

app.get("/search", async (req, res) => {
    const client = axios.create({
        baseURL: "https://api.pexels.com/v1",
        headers: {
            Authorization: PEXELS_KEY
        }
    })

    const result = await client.get("/search", {
        params: {
            query: req.query.termo,
            per_page: req.query.per_page
        }
    });

    res.json(result.data) 

});

app.get("/hello", (req, res) => {
    res.send("Hello!");
});

app.listen(PORT, () => console.log(`Executando na porta ${PORT}`));