import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello world API")
})
app.post('/', (req, res) => {
    const user = {
        "Username":"John Doe",
        "lastName": "johny"
    }
    res.send(`user with the username ${user.Username} has been created succesfully`);
    
})

app.listen(port, () => console.log(`Server is live on http://localhost:${port}`))

