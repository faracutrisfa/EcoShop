import React from 'react';
import ProductCard from '../ProductCard';
import { ProductMost } from '../../data/ProductMost';

const MostProduct = () => {
    return (
        <section className='bg-secondaryLight'>
            <div className='px-4 lg:px-16 py-20 space-y-10'>
                <div className='flex flex-col justify-center text-center gap-2'>
                    <h1 className='text-grey-600 text-3xl lg:text-5xl font-bold font-libre'>Our Most Wanted Products</h1>
                    <h2 className='text-sm lg:text-xl text-grey-500 leading-tight lg:leading-7 font-inter'>Good for environment, good for you</h2>
                </div>
                <div className='flex justify-center'>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                        {ProductMost.map((product, index) => (
                            <ProductCard
                                key={index}
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                discountPrice={product.discountPrice}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MostProduct;
