import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { readProduct } from '../../../features/ProductSlice'

type Props = {}

const DetailProduct = (props: Props) => {
    const { id } = useParams();
    const detailProduct = useAppSelector((item: any) => item.product.value);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(readProduct(id));
    }, [])
    return (
        <div>
            <h3 className='font-bold py-6'>Chi tiết sản phẩm</h3>
            <p>{detailProduct.name}</p>
            <p>{detailProduct.price}</p>
            <p>{detailProduct.desc}</p>
            
        </div>
    )
}

export default DetailProduct