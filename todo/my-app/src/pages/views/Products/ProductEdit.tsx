import React, { useEffect } from 'react'
import Input from '@mui/material/Input';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductType } from '../../../types/product.type';
import { updateProduct } from '../../../features/ProductSlice';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

type Props = {}
type InputEdit = {
    id?: string,
    name: string,
    price: number,
    desc: string
}
const ProductEdit = (props: Props) => {
    const { control } = useForm();
    const dispath = useAppDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm<ProductType>();
    const products = useAppSelector(item => item.product.value);
    const a = products.find(item => item.id === id);
    console.log(products);
    console.log('a', a);


    useEffect(() => {
        // dispath(readProduct(id));
        // dispath(readProduct(id));
        // reset(a)
        reset(a);
    }, [])

    // const data = {
    //     name: '',
    //     price: '',
    //     desc: ''
    // }
    // const validate = Yup.object().shape({
    //     name: Yup.string()
    //         .required("Không được để trống")
    //         .min(4, "Dài hơn 4 ký tự")
    //         .max(24, "Nhỏ hơn 24 ký tự"),
    //     price: Yup.number()
    //         .required("Không được để trống")
    //         .typeError("Phải là số"),
    //     desc: Yup.string()
    //         .required("Không được để trống")
    // })
    const onSubmit: SubmitHandler<ProductType> = values => {
        try {
            dispath(updateProduct(values));
            toast.info("Update thanh cong");
            navigate('/products');
        } catch (error) {
            console.log(error);
            toast.error('Co loi');
        }

        // try {
        //     dispath(createProduct(values));
        //     navigate('/products')
        //     toast.success('Thêm thành công.');
        // } catch (error) {
        //     console.log(error);
        //     toast.info('Có lỗi xảy ra.');
        // }
    }

    return (
        <div className='px-[20%]'>
            <div className="">
                <h4>Form edit</h4>
            </div>
            <div className="">

                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    {/* id<input type='text' {...register('id')} /> */}
                    <Stack spacing={2} >
                        <div>
                            <TextField fullWidth id="outlined-basic" label="Nhập name" variant="outlined"  {...register('name')} />
                        </div>
                        <div>
                            <TextField fullWidth id="outlined-basic" label="Nhập price" variant="outlined" {...register('price')} />
                        </div>
                        <div>
                            <TextField fullWidth id="outlined-basic" label="Nhập desc" variant="outlined"  {...register('desc')} />
                        </div>
                        <Button type='submit' variant="outlined">Send</Button>
                    </Stack>

                </form>

                {/* <Formik
                    initialValues={data}
                    validationSchema={validate}
                    onSubmit={onSubmit}
                >
                    {({ values, }) => {
                        return <div>
                            <Form>
                                <Stack spacing={2}>
                                    <Controller
                                        control={control}
                                        name='name'
                                        render={() => <>
                                            <Field
                                                fullWidth
                                                label="Name"
                                                id="fullWidth"
                                                name='name'
                                                value={values.name}
                                                component={TextField}
                                            />
                                        </>}
                                    />
                                    <Controller
                                        control={control}
                                        name='price'
                                        render={() => <>
                                            <Field
                                                fullWidth
                                                label="Price"
                                                id="fullWidth"
                                                name='price'
                                                value={values.price}
                                                component={TextField}
                                            />
                                        </>}
                                    />
                                    <Controller
                                        control={control}
                                        name='desc'
                                        render={() => <>
                                            <Field
                                                fullWidth
                                                label="Description"
                                                id="fullWidth"
                                                name='desc'
                                                value={values.desc}
                                                component={TextField}
                                            />
                                        </>}
                                    />
                                    <Button type='submit' variant="contained" endIcon={<SendIcon />}>
                                        Send
                                    </Button>
                                </Stack>
                            </Form>
                        </div>
                    }}
                </Formik> */}
            </div>
        </div>
    )
}

export default ProductEdit