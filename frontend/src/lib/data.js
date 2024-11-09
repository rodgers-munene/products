import axios from 'axios'

export default async function FetchProducts() {
    try {
        const response = await axios.get('http://localhost:5000/products', {timeout: 5000})
        const data = response.data

        return data
        
    } catch (error) {
        console.error('Error fetching the products', error)
    }
}

export const Categories = [
    {
        title: 'Electronics',
        subcategories: [
            "Mobile Phones",
            "Computer & Tablets",
            "Cameras",
            "Headphones & Earphones",
            "Wearable Technology",
            "Gaming Consoles & Accessories",
            "Home Appliances"
        ] 

    },
    {
        title: "Fashion",
        subcategories: [
            "Men's Clothing",
            "Women’s Clothing",
            "Kids’ Clothing",
            "Shoes",
            "Accessories",
            "Activewear & Sportswear"
        ]
  },
  {
        title: "Home & Kitchen",
        subcategories: [
            "Furniture",
            "Home Decor",
            "Kitchen Appliances",
            "Bedding & Linens",
            "Storage & Organization",
            "Lighting"
        ]
  },
  {
        title: "Beauty & Health",
        subcategories: [
            "Skincare",
            "Haircare",
            "Makeup",
            "Health Supplements",
            "Personal Care",
            "Fitness & Wellness"
        ]
  },
  {
        title: "Sports & Outdoor",
        subcategories: [
            "Exercise & Fitness Equipment",
            "Outdoor Gear",
            "Sports Apparel",
            "Water Sports",
            "Team Sports Gear"
        ]
  },
  {
        title: "Toys & Baby Products",
        subcategories: [
            "Toys & Games",
            "Baby Clothing",
            "Baby Essentials",
            "Strollers & Car Seats",
            "Educational Toys"
        ]
  },
  {
        title: "Automotive",
        subcategories: [
            "Car Accessories",
            "Motorcycle Parts & Accessories",
            "Tools & Equipment",
            "Tires & Wheels"
        ]
  },
  {
        title: "Books & Media",
        subcategories: [
            "Books",
            "Music",
            "Movies",
            "Video Games",
            "Stationery"
        ]
  },
  {
        title: "Groceries & Essentials",
        subcategories: [
            "Food & Beverages",
            "Cleaning Supplies",
            "Pet Supplies",
            "Household Essentials"
        ]
  }
        
    
]
