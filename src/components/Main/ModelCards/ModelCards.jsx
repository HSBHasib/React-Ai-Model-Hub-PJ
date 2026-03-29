import DisplayModelCards from "../../UI/DisplayModelCards"

const ModelCards = ({data}) => {
    // const {title, description, price, image, status} = data;
    console.log(data)
    return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:px-10 lg:px-36 px-12">
        {
          data.map(modelData => <DisplayModelCards data={modelData} key={modelData.id} />) 
        }
      </div>
    </div>
  )
}

export default ModelCards

