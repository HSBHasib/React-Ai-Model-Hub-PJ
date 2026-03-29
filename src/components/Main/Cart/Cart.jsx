import DisplayCarts from "../../UI/DisplayCarts"

const Cart = ({selectModel, setSelectModel}) => {
  const handleCroosBtn = (data) => {
      const filteredSelectedModel = selectModel.filter(selectedData => selectedData.title !== data.title);
      setSelectModel(filteredSelectedModel);
    }

  return (
    <div className='pb-10 space-y-6'>
      <h1 className="px-20 font-bold text-4xl ">Your Cart</h1>
      {   selectModel.length === 0 ? <div className="flex justify-center items-center py-20">
            <h1 className="text-4xl font-bold">Cart in empty</h1>
          </div>
          : selectModel.map(selectedModelData => <DisplayCarts key={selectedModelData.id} 
            selectedModelData={selectedModelData} selectModel={selectModel} setSelectModel={setSelectModel} 
            handleCroosBtn={handleCroosBtn} />) 
      }
    </div>
  )
}

export default Cart
