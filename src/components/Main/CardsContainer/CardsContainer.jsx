import { use, useState } from "react";
import ModelCards from "../ModelCards/ModelCards";
import Cart from "../Cart/Cart";


const CardsContainer = ({modelData}) => {
    const models = use(modelData);
    const [selectedType, setSelectedType] = useState('model');
    const [selectModel, setSelectModel] = useState([]);
    

  return (
    <div className="space-y-10">
        {/* Buttons */}
        <div className="flex justify-center items-center gap-1">
            <button onClick={() => setSelectedType('model')} className={`px-16 py-[6.3px] 
                ${selectedType === 'model' ? 'bg-linear-to-r from-pink-600 to-red-600 text-white' : 'bg-white text-gray-500'}
            cursor-pointer rounded-2xl text-sm font-medium`}>Models</button>
            <button onClick={() => setSelectedType('cart')} className={`px-16 py-[6.3px] 
                ${selectedType === 'cart' ? 'bg-linear-to-r from-pink-600 to-red-600' : 'bg-white text-gray-500'} 
             cursor-pointer rounded-2xl text-sm font-medium`}>Cart({selectModel.length})</button>
        </div>

        {/* Cards Heading */}
        <div className="flex flex-col justify-center items-center space-y-1">
            <h1 className="text-4xl font-bold ">Choose Your AI Model</h1>
            <p className="text-lg text-gray-500">One subscription gives you access frontier AI model</p>
        </div>

        <div>
            {
                selectedType === 'model' ?
                <ModelCards data={models} selectModel={selectModel} setSelectModel={setSelectModel} />
                : <Cart selectModel={selectModel} setSelectModel={setSelectModel} />
            }
        </div>
    </div>
  )
}

export default CardsContainer
