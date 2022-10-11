import React, { useEffect, useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { removeProduct } from '../../../features/ProductSlice';

function createData(
    name: string,
    price: number,
    desc: String
) {
    return { name, price, desc };
}

type Props = {}

const ProductList = (props: Props) => {
    const dispath = useAppDispatch();
    const rows = useAppSelector(item => item.product.value);
    console.log('state tong', rows);

    const [reload, setReload] = useState();

    const onRemove = (id: number) => {
        try {
            const confirm = window.confirm("Bạn có muốn xóa?");
            if (confirm) {
                dispath(removeProduct(id));
                toast.info('Xóa thành công.');
            }
        } catch (error) {
            console.log(error);
            toast.info('Có lỗi.')
        }
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Desc</TableCell>
                            <TableCell align="right">
                                <Link to='/add-product'>
                                    <Button size="small">Create</Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array.isArray(rows) && rows.map((row: any) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.desc}</TableCell>
                                <TableCell align="right">
                                    <Link to={`/product/${row.id}`}>
                                        <Button size="small">Edit</Button>
                                    </Link>
                                    <IconButton aria-label="delete" size="small" onClick={() => onRemove(row.id)}>
                                        <DeleteIcon fontSize="inherit" color='error' />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ProductList