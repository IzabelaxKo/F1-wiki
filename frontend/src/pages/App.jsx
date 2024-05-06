import './App.css'
import { MainHeader } from "../elements/MainHeader.jsx"
import { Navbar } from "../elements/Navbar.jsx"
import { Cards } from '../elements/Cards.jsx'
import { Footer } from '../elements/Footer.jsx'

const ex_info = [
  {
    "title": "example",
    "text": "example more",
    "img": "https://i.pinimg.com/736x/20/b4/52/20b452bf37cd1329950072bec30a81b5.jpg"
  },
  {
    "title": "example",
    "text": "example more",
    "img": "https://i.pinimg.com/736x/20/b4/52/20b452bf37cd1329950072bec30a81b5.jpg"
  },
  {
    "title": "example",
    "text": "example more",
    "img": "https://i.pinimg.com/736x/20/b4/52/20b452bf37cd1329950072bec30a81b5.jpg"
  },
  {
    "title": "example",
    "text": "example more",
    "img": "https://i.pinimg.com/736x/20/b4/52/20b452bf37cd1329950072bec30a81b5.jpg"
  },
  {
    "title": "example",
    "text": "example more",
    "img": "https://i.pinimg.com/736x/20/b4/52/20b452bf37cd1329950072bec30a81b5.jpg"
  },
  {
    "title": "example",
    "text": "example more",
    "img": "https://i.pinimg.com/736x/20/b4/52/20b452bf37cd1329950072bec30a81b5.jpg"
  }
]

function App() {
  return (
    <>
      <Navbar />
      <MainHeader />
      <Cards cards={ex_info}/>
      <Footer/>
    </>
  );
}

export default App