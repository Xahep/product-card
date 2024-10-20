import React from 'react';
import imgProducDesktop from '../assets/image-product-desktop.jpg';
import imgProductMobile from '../assets/image-product-mobile.jpg';
import iconCart from '../assets/icon-cart.svg';

const ProductCard = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-cream'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full max-w-xl rounded-lg overflow-hidden md:shadow-2xl m-4'>
                <div className=''>
                    <img src={imgProducDesktop} alt="Product image" srcset="" className='h-full w-full hidden md:block' />
                    <img src={imgProductMobile} alt="Product image" srcset="" className='h-full w-full block md:hidden' />
                </div>
                <div className='bg-white p-4 md:p-8'>
                    <p className='text-grayish-blue mb-4 text-xs font-medium'>P E R F U M E</p>
                    <h2 className='text-3xl font-bold mb-5 font-fraunces leading-8 text-dark-blue'>Gabrielle Essence Eau De Parfum</h2>
                    <p className='text-grayish-blue text-sm mb-6 font-montserrat font-medium leading-6'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                    <div id='price' className='flex flex-row items-center mb-6'>
                        <p className='text-3xl font-bold text-dark-cyan mr-5 font-fraunces font-bold'>$149.99</p>
                        <p className='text-grayish-blue text-sm line-through font-montserrat'>$169.99</p>
                    </div>
                    <div className='flex flex-row items-center justify-center space-x-3 bg-dark-cyan hover:bg-dark-blue hover:cursor-pointer w-full rounded-lg text-white text-sm font-bold p-3 font-medium font-bold'>
                        <img src={iconCart} alt="Icon cart" srcset="" />
                        <button className=''>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;