import React from 'react'
import Input from '@mui/material/Input';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Button, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Formik, Form, Field, useFormik } from 'formik';
import { TextField } from "formik-material-ui"
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../../../features/ProductSlice';
import { ProductType } from '../../../types/product.type';

type Props = {}
type InputForm = {
  id?: number,
  name: string,
  price: number,
  desc: string
}

const ProductAdd = (props: Props) => {
  const { control, handleSubmit, register } = useForm<InputForm>();
  const dispath = useAppDispatch();
  const navigate = useNavigate();

  // const data = {
  //   name: '',
  //   price: '',
  //   desc: ''
  // }
  // const validate = Yup.object().shape({
  //   name: Yup.string()
  //     .required("Không được để trống")
  //     .min(4, "Dài hơn 4 ký tự")
  //     .max(24, "Nhỏ hơn 24 ký tự"),
  //   price: Yup.number()
  //     .required("Không được để trống")
  //     .typeError("Phải là số"),
  //   desc: Yup.string()
  //     .required("Không được để trống")
  // })

  const onSubmit: SubmitHandler<InputForm> = data => {
    try {
      dispath(createProduct(data));
      navigate('/products')
      toast.success('Thêm thành công.');
    } catch (error) {
      console.log(error);
      toast.info('Có lỗi xảy ra.');
    }
    // try {
    //   dispath(createProduct(values));
    //   navigate('/products')
    //   toast.success('Thêm thành công.');
    // } catch (error) {
    //   console.log(error);
    //   toast.info('Có lỗi xảy ra.');
    // }
  }

  return (
    <div className='px-[20%]'>
      <div className="">
        <h4>Form add product</h4>
      </div>
      <div className="">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          id<input type='number' {...register('id')} />
          <div>
            <label htmlFor="">name</label>
            <input type="text" {...register('name')} />
          </div>
          <div>
            <label htmlFor="">price</label>
            <input type="number" {...register('price')} />
          </div>
          <div>
            <label htmlFor="">desc</label>
            <input type="text" {...register('desc')} />
          </div>
          <button type='submit'>submit</button>
        </form>
        {/* <Formik
          initialValues={data}
          validationSchema={validate}
          onSubmit={onSubmit}
        >
          {({ values }) => {
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

export default ProductAdd