import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { convertString } from '../components/ProductItem'
import { getCart } from '../redux/actions'

const Checkout = () => {
    const dispatch = useDispatch()
    const [cartView, setCartView] = useState(false)

    const { carts } = useSelector(state => state.productReducers)

    const total = carts?.map((x) => x.price * x.qtn)
    useEffect(() => {
        dispatch(getCart())
    }, [dispatch])

    return (
        <>
            <section>
                <div className='checkout flex flex-col-reverse py-5 max-w-lg w-[90%] mx-auto lg:flex-row lg:max-w-6xl lg:justify-between lg:gap-10 lg:items-start'>
                    <form className='lg:w-[60%] lg:border-[#e6e6e6]  lg:border lg:border-y-0  lg:border-r-[#e8e8e8] lg:border-l-0 lg:pr-10'>
                        <div className="flex flex-col gap-5 mt-5">
                            <div>
                                <h2 className='text-md'>contact information</h2>
                            </div>
                            <div className='input'>
                                <label htmlFor="email"></label>
                                <input type="text" placeholder='Email' />
                            </div>
                            <div className="input gap-5 flex flex-col md:flex-row">
                                <input type="text" placeholder='First name' />
                                <input type="text" placeholder='Last name' />
                            </div>
                            <div className="input">
                                <input type="text" placeholder='Company (Optional)' />
                            </div>
                            <div className="input">
                                <input type="text" placeholder='Address' />
                            </div>
                            <div className="input gap-5 flex flex-col md:flex-row">

                                <input type="text" placeholder='City' />
                                <input type="text" placeholder='State' />
                            </div>
                            <div className="input">
                                <input type="text" placeholder='Phone' />
                            </div>

                        </div>
                        <div className="flex my-5 font-medium justify-center text-center flex-col-reverse gap-5">
                            <Link href='/'>
                                <p><span className='text-[#0479b8]'>{"<"}</span> Return to Cart</p>
                            </Link>
                            <button className='bg-[#0087d2] rounded-md  shadow-lg text-white p-5'>
                                Continue to shipping
                            </button>
                        </div>
                    </form>
                    <div className='flex flex-col lg:w-[40%] lg:flex-col-reverse'>
                        <div className="total" onClick={() => setCartView(!cartView)}>

                            <div className='hidden px-3 lg:flex lg:flex-col lg:gap-4 justify-between py-5 border bg-[#fafafa] border-[#e6e6e6] lg:bg-inherit lg:border lg:border-x-0 lg:border-y-[#e8e8e8] lg:py-7'>
                                <div className='flex justify-between  text-sm'>
                                    <p className='text-sm'>SubTotal</p>
                                    <h3 className='mr-3 text-right text-gray-400'>
                                        <b className='text-black '>#{total.length > 0 ? convertString(total.reduce((a, b) => a + b)) : 0}</b></h3>
                                </div>
                                <div className='flex text-md justify-between'>
                                    <p className='text-sm'>Shipping</p>
                                    <p>Calculated at next step</p>
                                </div>

                            </div>


                            <div className='flex justify-between py-5 border bg-[#fafafa] border-[#e6e6e6] px-3 lg:bg-inherit lg:border-0 lg:py-7'>
                                <p>Total</p>

                                <h3 className='mr-3 text-right text-gray-400'>
                                    <span>NGN </span>
                                    <b className='text-black lg:text-3xl'>#{total.length > 0 ? convertString(total.reduce((a, b) => a + b)) : 0}</b>
                                </h3>

                            </div>


                        </div>

                        <div className="flex flex-col">
                            {carts?.map((cart) => (
                                <div className={`${!cartView && "hidden"} w-[90%] mx-auto py-6 flex items-center justify-between font-semibold lg:flex`} key={cart.id}>
                                    <div className='flex relative items-center gap-3 justify-between '>
                                        <div className='relative inline-block'>
                                            <Image className=' w-[50px] rounded-md p-1 border border-[#0000001a]' src={cart.img.src} alt='pro-imgage' width={100} height={100} />

                                            <span className='absolute -top-3 bg-[#808080] px-1 rounded-full h-5 leading-5 text-white right-0'>{cart.qtn}</span>

                                        </div>

                                        <p className=' text-sm'> {cart.title}</p>
                                    </div>
                                    <div className="text-sm">
                                        <p>
                                            {`#${convertString(cart.price * cart.qtn)}`}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div >
            </section></>
    )
}

export default Checkout