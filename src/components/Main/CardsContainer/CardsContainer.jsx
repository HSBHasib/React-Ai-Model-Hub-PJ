import { use } from "react";
import Cards from "../../UI/Cards/Cards";


const CardsContainer = ({modelData}) => {
    const models = use(modelData);
    console.log(models);
    
  return (
    <div className="space-y-10">
        <div className="flex flex-col justify-center items-center space-y-1">
            <h1 className="text-4xl font-bold ">Choose Your AI Model</h1>
            <p className="text-lg text-gray-500">One subscription gives you access frontier AI model</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:px-10 lg:px-36 px-12">
            {
                models.map((data, idx) => <Cards data={data} key={idx}/> )
            }
        </div>
    </div>
  )
}

export default CardsContainer
