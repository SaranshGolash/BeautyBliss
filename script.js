import express from 'express';
import bodyParser from 'body-parser';
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

//File paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true}));

// Set up static files and view engine
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
});