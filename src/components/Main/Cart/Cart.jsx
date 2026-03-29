import DisplayCarts from "../../UI/DisplayCarts"

const Cart = ({selectModel, setSelectModel}) => {
  const handleCroosBtn = (data) => {
      const filteredSelectedModel = selectModel.filter(selectedData => selectedData.title !== data.title);
      setSelectModel(filteredSelectedModel);
    }

    const totalPrice = selectModel.reduce((total, item) => total + Number(item.price), 0);

  return (
    <div className='pb-10 space-y-6'>
      <h1 className="px-20 font-bold text-4xl ">Your Cart</h1>
      {  
          selectModel.length === 0 ? 
          <div className="flex justify-center items-center py-20">
            <h1 className="text-4xl font-bold">Cart in empty</h1>
          </div>
        : selectModel.map(selectedModelData => <DisplayCarts key={selectedModelData.id} 
          selectedModelData={selectedModelData} selectModel={selectModel} setSelectModel={setSelectModel} 
          handleCroosBtn={handleCroosBtn} />) 
      }
      
      <div className="px-20 pt-6">
        <div className="flex justify-between items-center bg-black 
        py-5 px-8 rounded-xl text-white">
            <h1 className="text-3xl font-semibold">Total</h1>
            <h1 className='text-2xl font-bold text-red-500'>$ {selectModel.length === 0 ? '0' :  totalPrice }</h1>
        </div>
      </div>

      <div className="px-20">
        <div className="flex justify-center items-center bg-red-600 py-3 rounded-xl text-white cursor-pointer transition-all active:scale-95 duration-100">
            <h1 className='text-2xl font-bold'>Proceed to Checkout</h1>
        </div>
      </div>

    </div>

    
  )
}

export default Cart
