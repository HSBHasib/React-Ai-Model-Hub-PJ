import DisplayCarts from "../../UI/DisplayCarts"

const Cart = ({data}) => {

  return (
    <div className='text-4xl text-center py-10 font-semibold'>
      <h1>Cart Data Loading......</h1>
      {
          data.map(modelData => <DisplayCarts data={modelData} key={modelData.id} />) 
      }
    </div>
  )
}

export default Cart
