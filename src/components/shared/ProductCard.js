import Image from "next/image";

function ProductCard({ product }) {
    const { title, price, image } = product;
    return (
        <div className="max-w-[300px] flex flex-col justify-between p-4 rounded-lg shadow-md h-full">
            <div className="relative w-[150px] min-h-[277px] lg:w-[300px] lg:h-[400px] object-contain">
                <Image className="" src={image} alt="product image" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <h3 className="font-bold text-lg md:text-xl text-[#252020]">{title.length>30?`${title.substr(0,30)}...`:title}</h3>
            <div className="flex content-end justify-between">
                <div className="text-sm md:text-lg font-bold text-gray-900">${price}</div>
                <Image className='mx-1' src={'/assets/heart.svg'} alt='heart' width={24} height={24} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
        </div>
    )
}
export default ProductCard;