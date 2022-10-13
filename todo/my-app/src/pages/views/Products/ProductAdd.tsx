import React from 'react'
import TextField from '@mui/material/TextField';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../../../features/ProductSlice';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

type Props = {}
type InputForm = {
  id?: string,
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
      console.log('data', data);

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
            <Button type='submit' variant="outlined">Create</Button>
          </Stack>

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