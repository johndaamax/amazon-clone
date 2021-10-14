import React, { createContext, useState, useContext } from 'react'

const ProductsContext = createContext();

function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);
    const value = [products, setProducts];

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}

const useProductsContext = () => {
    const context = useContext(ProductsContext)
    if (!context)
        throw new Error(`useProductsContext must be used within a ProductsProvider`)
    return context
}

export { ProductsProvider, useProductsContext }
