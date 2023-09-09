import React from 'react';
import { Link } from 'react-router-dom';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { removeFromCart, updateCartItem } from '../redux/cartreducers'; // Asegúrate de que la ruta sea correcta

const ShowCart = ({ cartItems, removeFromCart, updateCartItem }) => {
    // Función para calcular el total de productos en el carrito
    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.precio * item.cont; // Actualizado para usar la cantidad (cont)
        });
        return total.toFixed(2); // Formatear el total como número decimal con 2 decimales
    };

    return (
        <section className="h-100 gradient-custom">
            <div className="container py-5">
                <div className="row d-flex justify-content-center my-4">
                    <div className="col-md-8">
                        <div className="card mb-4">
                            <div className="card-header py-3">
                                <h5 className="mb-0 text-center">Lista de productos</h5>
                            </div>
                            <div className="card-body">
                                {cartItems.map((item) => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        removeFromCart={removeFromCart}
                                        updateCartItem={updateCartItem}
                                    />
                                ))}
                                <div>
                                    <span>
                                        <strong>Total de productos: ${calculateTotal()}</strong>
                                    </span>
                                </div>
                            </div>
                            <Link to="/checkout" className="btn btn-dark btn-lg btn-block">
                                Pagar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CartItem = ({ item, removeFromCart, updateCartItem }) => {
    const increaseQuantity = () => {
        updateCartItem(item.id, item.cont + 1);
    };

    const decreaseQuantity = () => {
        if (item.cont > 1) {
            updateCartItem(item.id, item.cont - 1);
        } else {
            removeFromCart(item.id);
        }
    };

    return (
        <div>
            <div className="row d-flex align-items-center">
                <div className="col-lg-3 col-md-12">
                    <div className="bg-image rounded" data-mdb-ripple-color="light">
                        <img src={item.imagen} alt={item.nombre} width={100} height={100} />
                    </div>
                </div>
                <div className="col-lg-5 col-md-6">
                    <p>
                        <strong>{item.nombre}</strong>
                    </p>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                        <button className="btn px-3" onClick={decreaseQuantity}>
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <p className="mx-5">{item.cont}</p>
                        <button className="btn px-3" onClick={increaseQuantity}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                    <p className="text-start text-md-center">
                        <strong>
                            <span className="text-muted">{item.cont}</span> x ${item.precio}
                        </strong>
                    </p>
                </div>
            </div>
            <hr className="my-4" />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems,
    };
};

export default connect(mapStateToProps, { removeFromCart, updateCartItem })(ShowCart);
