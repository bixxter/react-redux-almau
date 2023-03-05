import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Container, Image } from 'react-bootstrap'
import {
    openOrCloseCart,
    incrementQuantity,
    decrementQuantity,
} from '../redux/cartSlice'

function CartModal() {
    const open = useSelector((state) => state.open)
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const formatTitle = (title) =>
        title.length <= 14 ? title : `${title.substr(0, 14)}...`

    const totalPrice = () =>
        cart
            .reduce(
                (partialSum, product) =>
                    partialSum + product.quantity * product.price,
                0
            )
            .toFixed(2)
    const sumPrice = (quantity, price) => (price * quantity).toFixed(2)

    return (
        <Modal show={open} onHide={() => dispatch(openOrCloseCart(false))}>
            <Modal.Header closeButton>
                <Modal.Title>Shopping cart</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-column gap-3">
                {cart.length !== 0 &&
                    cart.map(
                        (product) =>
                            product.quantity !== 0 && (
                                <Container className="d-flex" key={product.id}>
                                    <Image
                                        style={{ width: '5rem' }}
                                        src={product.img}
                                    />
                                    <Container className="d-flex flex-column align-items-center justify-content-center">
                                        <p className="h4">
                                            {formatTitle(product.title)}
                                        </p>
                                        <p className="h5">
                                            {sumPrice(
                                                product.quantity,
                                                product.price
                                            )}{' '}
                                            €
                                        </p>
                                        <div className="container d-flex gap-3 align-items-center justify-content-center">
                                            <Button
                                                variant="light"
                                                onClick={() =>
                                                    dispatch(
                                                        decrementQuantity(
                                                            product.id
                                                        )
                                                    )
                                                }
                                            >
                                                -
                                            </Button>
                                            <p className="text-center">
                                                {product.quantity}
                                            </p>
                                            <Button
                                                variant="light"
                                                onClick={() =>
                                                    dispatch(
                                                        incrementQuantity(
                                                            product.id
                                                        )
                                                    )
                                                }
                                            >
                                                +
                                            </Button>
                                        </div>
                                    </Container>
                                </Container>
                            )
                    )}
            </Modal.Body>
            <Modal.Footer className="d-flex align-items-center justify-content-between">
                <Button
                    variant="light"
                    onClick={() => dispatch(openOrCloseCart(false))}
                >
                    Keep Shopping
                </Button>
                <p className="h5 text-center">Total: {totalPrice()} €</p>
                <button type="button">Checkout</button>
            </Modal.Footer>
        </Modal>
    )
}

export default CartModal
