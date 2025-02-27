import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard';

export const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [product, setProduct] = useState(null);
    const [numberOfPages, setNoOfPages] = useState(1);

    useEffect(() => {
        fetchProducts();
    }, [currentPage])

    const fetchProducts = async() => {
        const data = await fetch(`https://dummyjson.com/products?limit=10&skip=${currentPage*10}&select=title,price`);
        const jsonData = await data.json();
        setProduct(jsonData?.products);
        //in these case limit is 10 so we divide total page with 10
        const totalPage = Math.ceil((jsonData?.total)/10);
        setNoOfPages(totalPage >= 1 ? totalPage : 1);
        console.log("numberOfPages", numberOfPages)
    } 
    console.log(product)
    return (
        <div>
        <div className='flex flex-wrap' >
            {
                product?.map((item) => {
                return <ProductCard key={item.id} {...item}  />})
            }
        </div>
        <div>
            {
                currentPage > 0 && <span onClick={() => {setCurrentPage((currentPage) => currentPage - 1)}}>prev</span>
            }
            
            {
                [...Array(numberOfPages).keys()].map((pageNum) => <span onClick={() => {setCurrentPage(pageNum)}} key={pageNum}>{pageNum + 1} </span>)
            }
            {
                currentPage < numberOfPages-1 && <span onClick={() => {setCurrentPage((currentPage) => currentPage + 1)}}>next</span>
            }
            
        </div>
        </div>
    )
}
