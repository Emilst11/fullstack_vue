import "dotenv/config"
import http from 'http';
import express from 'express'
import bodyParser from 'body-parser';
import router from "./main.router";
import cors from 'cors'

const app = express()
const port = process.env.PORT || 8000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())
app.use(router);

const server = http.createServer(app);
server.listen(port, () => console.log(`Server listening to http://localhost:${port}`))