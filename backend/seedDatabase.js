const axios = require('axios')
const db = require("./config/db")

// fetch the data

async function fetchAndSeed() {
    try {
        const response = await axios.get('https://fakestoreapi.com/products', {timeout: 5000})
        const products = response.data

        products.forEach((product) => {
            const { title, description, price, category, image, rating} = product;
            const { rate, count} = rating

            db.query('SELECT * FROM products WHERE title = ?', [title], (err, results) => {
                if(err) {
                    console.error('Error checking data', err)
                    return;
                }

                if(results.length === 0){
                    db.query('INSERT INTO products (title, description, price, category, image_link, rate, count) values (?, ?, ?, ?, ?, ?, ?)', 
                        [title, description, price, category, image, rate, count], (err) =>{
                            if(err){
                                console.error("Error inserting data ", err)
                            };
                        }
                    )
                } 
                
            })
            console.log("Data seeded successfully!");
        
    });
    
    } catch (error) {
        console.log("Error Fetching data", error);
        
    }
}

fetchAndSeed()