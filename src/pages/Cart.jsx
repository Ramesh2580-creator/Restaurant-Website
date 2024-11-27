import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const Cart = () => {
    const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

    return (
        <div style={styles.cartContainer}>
            <h2 style={styles.cartTitle}>Your Cart</h2>
            <div style={styles.tableHeader}>
                <span>Image</span>
                <span>Title</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>
                <span>Action</span>
            </div>
            <hr style={styles.hr} />
            {food_list.map((item) => {
                if (cartItems[item._id] > 0) {
                    return (
                        <div key={item._id} style={styles.itemRow}>
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                style={styles.itemImage} 
                            />
                            <span style={styles.itemName}>{item.name}</span>
                            <span style={styles.itemPrice}>${item.price.toFixed(2)}</span>
                            <span>{cartItems[item._id]}</span>
                            <span>${(item.price * cartItems[item._id]).toFixed(2)}</span>
                            <button 
                                onClick={() => removeFromCart(item._id)} 
                                style={styles.removeButton}
                                aria-label={`Remove ${item.name} from cart`}
                            >
                                Remove
                            </button>
                        </div>
                    );
                }
                return null;
            })}
            <div style={styles.totalSection}>
                <span style={styles.totalText}>Total:</span>
                <span style={styles.totalAmount}>
                    ${Object.keys(cartItems).reduce((total, itemId) => {
                        const item = food_list.find(i => i._id === itemId);
                        return total + (item.price * cartItems[itemId]);
                    }, 0).toFixed(2)}
                </span>
            </div>
        </div>
    );
}

const styles = {
    cartContainer: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        maxWidth: '900px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    cartTitle: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
        color: '#333',
    },
    tableHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: '10px',
        color: '#555',
    },
    hr: {
        margin: '20px 0',
        borderColor: '#ddd',
    },
    itemRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 0',
        borderBottom: '1px solid #eee',
        backgroundColor: '#fff',
        borderRadius: '5px',
    },
    itemImage: {
        width: '50px',
        height: '50px',
        borderRadius: '5px',
    },
    itemName: {
        flex: 1,
        paddingLeft: '10px',
        color: '#555',
    },
    itemPrice: {
        color: '#888',
    },
    removeButton: {
        backgroundColor: '#f44336',
        color: '#fff',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    removeButtonHover: {
        backgroundColor: '#d32f2f',
    },
    totalSection: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '18px',
        fontWeight: 'bold',
        marginTop: '20px',
        paddingTop: '10px',
        borderTop: '2px solid #eee',
    },
    totalText: {
        color: '#333',
    },
    totalAmount: {
        color: '#333',
    }
};

export default Cart;
