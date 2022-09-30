import { useFormik } from 'formik';
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as Yup from 'yup';
type Props = {}

const InputUsername = (props: Props) => {
    const { control } = useForm({});
    const formik = useFormik({
        initialValues: {
            username: '',
            // email: '',
            // password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .min(4, 'Vui lòng nhập hơn 4 ký tự.')
                .max(10, 'Không quá 10 ký tự')
                .required('Không được để trống'),
            // email: Yup.string()
            //     .email('Nhập đúng định dạng email')
            //     .required('Không được để trống'),
            // password: Yup.string()
            //     .min(5, 'Password dài hơn 4 ký tự')
            //     .max(12, 'Không dài quá 12 ký tự')
            //     .required('Không được để trống'),
        }),
        onSubmit: (value: any) => {

            console.log('test', value);


            // try {
            //     dispath(registerUser(value));
            //     toastr.success("Đăng ký thành công");
            // } catch (error) {
            //     console.log(error);
            //     toastr.error("Có lỗi xảy ra");
            // }
        }
    })

    return (
        <div>
            <Controller
                name='username'
                control={control}
                render={() => <div>
                    <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="User Name"
                        name='username'
                        value={formik.values.username}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.username && formik.touched.username && (
                        <p className='text-red-600 text-left pt-2 text-[12px]'>
                            {formik.errors.username}
                        </p>
                    )}
                </div>}
            />
        </div >
    )
}

export default InputUsername