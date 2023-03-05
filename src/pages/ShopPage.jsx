import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Product from '../components/Product'

function ShopPage() {
    const [products, setProducts] = useState()
    const [search, setSearch] = useState('')

    const fetchProducts = async () => {
        const response = await fetch(
            "https://fakestoreapi.com/products/category/men's%20clothing"
        )
        const data = await response.json()
        setProducts(data)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    useEffect(() => {
        if (!search) {
            fetchProducts()
            return
        }

        const filteredProducts = products?.filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase())
        )

        setProducts(filteredProducts)
    }, [search])

    return (
        <Container fluid className="min-vh-100 mt-20 p-5 bg-gray-800">
            <input
                type="text"
                className="form-control mb-4"
                placeholder="Search"
                value={search}
                onChange={handleSearch}
            />

            <div className="d-flex flex-wrap gap-5">
                {products?.map((product) => (
                    <Product
                        title={product.title}
                        price={product.price}
                        img={product.image}
                        id={product.id}
                    />
                ))}
            </div>
        </Container>
    )
}

export default ShopPage
