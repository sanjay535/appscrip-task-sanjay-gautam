import Image from "next/image";

function ProductCard({ product }) {
    const { title, price, image } = product;
    return (
        <div className="max-w-[300px] p-4 rounded-lg shadow-md ">
            <div className="relative w-[150px] min-h-[277px] lg:w-[300px] lg:h-[400px] object-contain">
                <Image className="" src={image} alt="product image" fill />
            </div>
            <h3 className="font-bold text-lg md:text-xl text-[#252020]">{title.length > 23 ? `${title.substr(0, 24)}...` : title}</h3>
            <div className="flex items-center justify-between">
                <span className="text-sm md:text-lg font-bold text-gray-900 dark:text-white">${price}</span>
                <Image className='mx-1' src={'/assets/heart.svg'} alt='heart' width={24} height={24} />
            </div>
        </div>
    )
}
export default ProductCard;