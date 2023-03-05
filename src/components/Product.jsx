import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

function Product({ id, title, price, img }) {
    const dispatch = useDispatch()
    return (
        <div style={{ width: '18rem' }} border={false}>
            <div
                className="relative block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${img})`,
                    height: '18rem',
                }}
            >
                <div className="absolute inset-0 bg-black/25"></div>

                <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                    <div className="sm:pt-18 pt-12 text-white lg:pt-24">
                        <h3 className="text-xl font-bold sm:text-2xl">
                            {title}
                        </h3>

                        <p className="text-sm">Almau</p>
                    </div>

                    <div className="items-center rounded-lg bg-black px-4 py-1 text-xs font-semibold text-white">
                        <span>{price}</span>
                        <span>₸</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between p-4 sm:p-6 lg:p-8 w-full">
                <button
                    className="inline-block rounded border border-black bg-black px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500 w-full"
                    onClick={() =>
                        dispatch(addToCart({ id, title, price, img }))
                    }
                >
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default Product
