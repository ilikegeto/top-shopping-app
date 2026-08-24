import { useOutletContext, Link } from 'react-router-dom'
import Swal from 'sweetalert2'

export function Cart() {
    const { cart, setCart } = useOutletContext()

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0)
    const buy = (id, name, price) => {
        Swal.fire ({
            title: 'fake transaction',
            text: `Buy ${name}?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: `Buy (${price})`,
            cancelButtonText: 'Cancel'    
        }).then ((result) => {
            if (result.isConfirmed) {
                removeItem(id);
                Swal.fire('success', `enjoy your ${name} :)`, 'success');
            }
        })
    }

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <>
                    <p>nothing here</p>
                    <br />
                    <div className='shoppingbtn'>
                        <div className='shopbtn'>
                            <Link to="/shop" className='Link'>Start shopping</Link>
                        </div>
                    </div>
                </>
            ) : (
                <div className='cart-grid'>
                    {cart.map((item) => (
                        <div key={item.id} className='item-label'>
                            <div className='about-label'>
                                <div className='name'>{item.title} <span style={{ color: 'white', fontFamily: 'Arial'}}>x{item.qty}</span></div>
                                <div className='price'>${(item.price * item.qty).toFixed(2)}</div>
                            </div>
                            <div className='propertybtn'>
                                <button onClick={() => removeItem(item.id)} className='deletebtn'> <img src="/img/bin.png" alt="delete" /> </button>
                                <button onClick={() => buy(item.id, item.title, item.price * item.qty) } className='buybtn'> <img src="/img/buy-cart.png" alt="buy" /> </button>
                            </div>
                        </div>
                    ))}
                    <h3 className='price'>Total: ${totalPrice.toFixed(2)}</h3>
                </div>
            )}
        </div>
    )
}