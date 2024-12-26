import React from 'react'

const CategoryImage = ({ src, alt, className }) => (
    <img className={`w-80 rounded-lg h-60 xl:h-auto ${className}`} src={src} alt={alt} />
);

const Category = () => {
    return (
        <section>
            <div className='flex flex-col xl:flex-row px-4 md:px-10 lg:px-16 py-20 gap-4 xl:gap-6 items-center justify-center'>

                <CategoryImage
                    src="src/assets/category/clothing.webp"
                    alt="Clothing"
                    className="xl:w-[424px]"
                />

                <div className='space-y-4 xl:space-y-6'>
                    <div className='flex flex-col xl:flex-row gap-4 xl:gap-6'>

                        <CategoryImage
                            src="src/assets/category/bedding.webp"
                            alt="Bedding"
                            className="xl:w-[312px]"
                        />
                        <CategoryImage
                            src="src/assets/category/accesories.webp"
                            alt="Accessories"
                            className="xl:w-[200px]"
                        />
                    </div>

                    <CategoryImage
                        src="src/assets/category/furniture.webp"
                        alt="Furniture"
                        className="xl:w-[536px]"
                    />
                </div>

                <CategoryImage
                    src="src/assets/category/home_goods.webp"
                    alt="Home Goods"
                    className="xl:w-[312px]"
                />
            </div>
        </section>
    )
}

export default Category;