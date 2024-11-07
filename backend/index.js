// IMPORT THE REQUIRED MODULES FOR CREATING THE SERVER
const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/db')
const cors = require('cors')

// CREATING THE APP AND THE PORT NUMBER FOR COMMUNICATION
const app = express()
const PORT = 5000

// MIDDLEWARE
app.use(bodyParser.json())
app.use(cors())


// START SERVER

app.listen(PORT, () =>{
    console.log(`Server running on https://localhost/${PORT}`)
})

// CRUD OPERATIONS

// get all pruducts

app.get('/products', (req, res) =>{
    db.query('SELECT * FROM products', (err, results) => {
        if(err) throw err;
        res.json(results)
    })

});

// get element by id

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
   
    db.query('SELECT * FROM PRODUCTS WHERE id = ?', [id], (err, results) => {
        if(err) throw err;
        res.json(results)
    })
})

// add a product

app.post('/products', (req, res) => {
    const { name ,description, price, category } = req.body;

    db.query('INSERT INTO products (name, description, price, category) VALUES (?, ?, ?, ?)',
        [name, description, price, category], (err, results) =>{
            if(err) throw err;
            res.json({ id: results.insertId, name, description, price, category})
        }
    )
})

// update a product

app.put('/product/:id', (req, res) => {
    const { id } = re.params
    const {name, description, price, category} = req.body

    db.query('UPDATE products SET name = ? description = ? price = ? category = ? WHERE ID = ?', 
        [name, description, price, category, id], (err) => {
            if(err) throw err;
            res.json({id, name, description, price, category} )
        })
})

// delete a product

app.delete('/product/:id', (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM products WHERE id = ? ', [id], (err) => {
        if(err) throw err;
        res.json({ message: 'Product Deleted', id })
    })

})
