import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom'

export function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useOutletContext()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=8')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching data:', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Loading catalog...</h2>;
    }

    return (
        <div className="shop-container">
            <h2>Product Catalog</h2>
            <div className="product-grid">
                {products.map((item) => (
                    <div key={item.id} className="product-card">
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>${item.price}</p>
                        <button className="add-cart-btn" onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}