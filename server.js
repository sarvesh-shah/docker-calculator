"use strict"; 
const express = require('express'); 
const app = express(); 
const PORT = 8000; 
app.listen(PORT); 
app.use(express.static("public"));
app.get('/add', function (req, res) 
{ 
    const num1 = Number(req.query['num1']); 
    const num2 = Number(req.query['num2']); 
    res.set("Content-Type", "text/plain"); 
    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send("Not a Number");
        return;
    }
    
    res.send(String(num1 + num2)); 
}
);
app.get('/calculator', async function (req, res) 
{ 
    const operator = req.query['operator']; 
    const num1 = Number(req.query['num1']); 
    const num2 = Number(req.query['num2']); 
    let result = 0; 
    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send("Not a number");
        return;
    }
    switch (operator) 
    { 
        case 'add': result = num1 + num2; 
        break; 
        case 'subtract': 
            result = num1 - num2; 
            break;
        case 'multiply': 
            result = num1 * num2; 
            break;
        case 'divide': 
            if (num2 === 0) {
                return res.status(400).send("Zero is not allowed for division.");
            }
            result = num1 / num2; 
            break;
        default: res.status(400).send("Incorrect Operator"); 
        return; 
    } 
    res.send(String(result)); 
}
); 
