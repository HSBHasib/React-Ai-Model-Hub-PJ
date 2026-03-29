import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import CardsContainer from './components/Main/CardsContainer/CardsContainer'

const fetchModel = async () => {
    const res = await fetch('/model.json');
    const data = await res.json();
    return data;
}
const modelData = fetchModel();

const App = () => {

  return (
    <div>
      <Header />
      <CardsContainer modelData={modelData} />
      <Footer />
    </div>
  )
}

export default App

