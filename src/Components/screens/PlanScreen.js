import React, { useEffect, useState } from 'react'
import "./ProfileScreen.css"
import db from "../../firebase.js"
function PlanScreen() {

    const [products, setProducts] = useState([]);
    useEffect(() =>{
        db.collection('products')
        .get().then(querySnapshot => {
            const products = {};
            querySnapshot.forEach(async (productDoc) => {
                products[productDoc.id] = productDoc.data();
                const priceSbnap = await productDoc.ref.collection('products').get()
                priceSbnap.docs.forEach(price => {
                    products[productDoc.id].prices = {
                        priceId: price.id,
                        priceData: price.data()
                    }
                })
            });
        setProducts(products);
        })
    })

    console.log(products)
  return (
    <div className='planScreen'>
        <h2>This is the Plan Screen</h2>
    </div>
  )
}

export default PlanScreen