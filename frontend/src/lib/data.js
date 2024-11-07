import axios from 'axios'

async function FetchProducts() {
    try {
        const response = await axios.get('http://localhost:5000/products', {timeout: 5000})
        const data = response.data

        return data
        
    } catch (error) {
        console.error('Error fetching the products', error)
    }
}
export default FetchProducts