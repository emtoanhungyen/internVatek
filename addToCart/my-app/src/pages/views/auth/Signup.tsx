import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../app/hooks'
import { registerUser } from '../../../features/AuthSlice'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify'

type Props = {}

const defaultValues = {
    username: '',
    email: '',
    password: ''
}

const Signup = (props: Props) => {
    const dispath = useAppDispatch();
    const navigate = useNavigate();
    const { control } = useForm({ defaultValues });

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .min(4, 'Vui lòng nhập hơn 4 ký tự.')
                .max(10, 'Không quá 10 ký tự')
                .required('Không được để trống'),
            email: Yup.string()
                .email('Nhập đúng định dạng email')
                .required('Không được để trống'),
            password: Yup.string()
                .min(5, 'Password dài hơn 4 ký tự')
                .max(12, 'Không dài quá 12 ký tự')
                .required('Không được để trống'),
        }),
        onSubmit: (value: any) => {
            try {
                dispath(registerUser(value));
                toast.success("Đăng ký thành công");
                navigate('/login');
            } catch (error) {
                console.log(error);
                toast.error("Có lỗi xảy ra");
            }
        }
    })

    return (
        <div>
            <section className="h-screen">
                <div className="px-6 h-full text-gray-800">
                    <div
                        className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                    >
                        <div
                            className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                        >
                            <Link to='/'>
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                    className="w-full"
                                    alt="Sample image"
                                />
                            </Link>
                        </div>
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <form onSubmit={formik.handleSubmit} >
                                <div className="text-center">
                                    <p className="text-[25px] tracking-[4px] mb-0 mr-4">Register</p>
                                </div>

                                <div
                                    className="flex items-center my-8 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                >
                                </div>

                                {/* input usename */}
                                <div className="mb-6">
                                    {/* <InputUsername /> */}
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
                                </div>

                                {/* input email */}
                                <div className="mb-6">
                                    <Controller
                                        control={control}
                                        name='email'
                                        render={() => <div>
                                            <input
                                                type="email"
                                                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Email address"
                                                name='email'
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                            />
                                            {formik.errors.email && formik.touched.email && (
                                                <p className='text-red-600 text-left pt-2 text-[12px]'>
                                                    {formik.errors.email}
                                                </p>
                                            )}
                                        </div>}
                                    />
                                </div>

                                {/* email password */}
                                <div className="mb-6">
                                    <Controller
                                        control={control}
                                        name='password'
                                        render={() => <div>
                                            <input
                                                type="password"
                                                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Password"
                                                name='password'
                                                value={formik.values.password}
                                                onChange={formik.handleChange}
                                            />
                                            {formik.errors.password && formik.touched.password && (
                                                <p className='text-red-600 text-left pt-2 text-[12px]'>
                                                    {formik.errors.password}
                                                </p>
                                            )}
                                        </div>}
                                    />
                                </div>

                                <div className="text-center lg:text-left">
                                    <button
                                        type="submit"
                                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Register
                                    </button>
                                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                        Do have an account?
                                        <Link
                                            to='/login'
                                            className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                        >
                                            Login
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup