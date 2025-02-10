const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(sum.toString());
});

app.get("/sub", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a - b;
    res.send(sum.toString());
});

app.get("/mul", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a * b;
    res.send(sum.toString());
});

app.get("/divide", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = (a / b);
    res.send(sum.toString());
});

app.get("/modulo", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = (a % b);
    res.send(sum.toString());
});
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});