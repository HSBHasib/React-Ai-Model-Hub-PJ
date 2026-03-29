import { RxCross2 } from "react-icons/rx";

const DisplayCarts = ({selectedModelData, selectModel, setSelectModel, handleCroosBtn}) => { 
  const {title, description, price, image, status} = selectedModelData;

  return (
    <div>
      <div className='px-20'>
        <div className='border-[1.5px] border-gray-200 p-3 rounded-xl bg-gray-100 flex justify-between items-center '>
          <div className='flex justify-self-start items-center gap-4'>
            <div className='bg-white p-1.5 inline-block rounded-xl'>
              <img className='h-16 w-16' src={image} alt={title} />
            </div>
            <div>
              <h1 className='text-2xl font-bold'>{title}</h1>
              <p className='text-gray-500 text-sm'>{description}</p>
            </div>
          </div>
          <div className='flex items-center gap-2 '>
            <div>
              <h1 className='text-2xl font-bold'>${price}</h1>
              <p className='text-gray-500 text-sm'>per month</p>
            </div>
              <RxCross2 onClick={() => handleCroosBtn(selectedModelData)} size={20} />

          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayCarts
