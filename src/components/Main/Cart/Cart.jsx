import { toast } from "react-toastify";
import DisplayCarts from "../../UI/DisplayCarts"
import { useState } from "react";

const Cart = ({selectModel, setSelectModel}) => {

  const handleProceed = () => {
    if(selectModel.length > 0) {
      setSelectModel([]);
      toast.success(`Proceed successfull!`);
      }
  }

  const handleCroosBtn = (data, title) => {
      const filteredSelectedModel = selectModel.filter(selectedData => selectedData.title !== data.title);
      setSelectModel(filteredSelectedModel);
      toast.success(`${title} Remove successfully!`);
      
    }

    const [prosess, setProsess] = useState(false);

    const totalPrice = selectModel.reduce((total, item) => total + Number(item.price), 0);

  return (
    <div className='pb-10 space-y-6'>
      <h1 className="px-20 font-bold text-4xl ">Your Cart</h1>
      {  
          selectModel.length === 0 ? 
          <div className="flex justify-center items-center py-20">
            <h1 className="text-3xl font-bold text-gray-600">Cart is empty</h1>
          </div>
        : selectModel.map(selectedModelData => <DisplayCarts key={selectedModelData.id} 
          selectedModelData={selectedModelData} selectModel={selectModel} setSelectModel={setSelectModel} 
          handleCroosBtn={handleCroosBtn} setProsess={setProsess} prosess={prosess} />) 
      }
      
      <div className='px-20 pt-6'>
        <div className="flex justify-between items-center bg-black 
        py-5 px-8 rounded-xl text-white">
            <h1 className="text-3xl font-semibold">Total</h1>
            <h1 className='text-2xl font-bold text-red-500'>$ {selectModel.length === 0 ? '0' :  totalPrice }</h1>
        </div>
      </div>

      <div onClick={() => setProsess(true)} className="px-20">
        <div className="flex justify-center items-center bg-red-600 py-3 rounded-xl text-white cursor-pointer transition-all active:scale-95 duration-100">
            <h1 onClick={() => handleProceed()} className='text-2xl font-bold'>Proceed to Checkout</h1>
        </div>
      </div>

    </div>

    
  )
}

export default Cart
