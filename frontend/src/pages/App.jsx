import './App.css'
import { MainHeader } from "../elements/MainHeader.jsx"
import { Navbar } from "../elements/Navbar.jsx"
import { Cards } from '../elements/Cards.jsx'
import { Footer } from '../elements/Footer.jsx'
import { useState, useEffect } from 'react'
import { Loader } from '../../components/ui/loader.jsx'

// const ex_info = [
//   {
//     "title": "example",
//     "text": "example more",
//     "img": "https://i.pinimg.com/736x/20/b4/52/20b452bf37cd1329950072bec30a81b5.jpg"
//   },
//   {
//     "title": "example",
//     "text": "example more",
//     "img": "https://i.pinimg.com/736x/20/b4/52/20b452bf37cd1329950072bec30a81b5.jpg"
//   },
//   {
//     "title": "example",
//     "text": "example more",
//     "img": "https://i.pinimg.com/736x/20/b4/52/20b452bf37cd1329950072bec30a81b5.jpg"
//   },
//   {
//     "title": "example",
//     "text": "example more",
//     "img": "https://i.pinimg.com/736x/20/b4/52/20b452bf37cd1329950072bec30a81b5.jpg"
//   },
//   {
//     "title": "example",
//     "text": "example more",
//     "img": "https://i.pinimg.com/736x/20/b4/52/20b452bf37cd1329950072bec30a81b5.jpg"
//   },
//   {
//     "title": "example",
//     "text": "example more",
//     "img": "https://i.pinimg.com/736x/20/b4/52/20b452bf37cd1329950072bec30a81b5.jpg"
//   }
// ]

const images = [
  'https://media.formula1.com/image/upload/t_16by9North/f_auto/q_auto/v1706626658/fom-website/2023/Miscellaneous/GettyImages-1656999898.jpg',
  'https://media.formula1.com/content/dam/fom-website/manual/Misc/TeamByTeam2023/ferrari-tbt-2023.png',
  'https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2023-10/nba-plain--6a571e43-4405-4d8d-9c3d-be7276aa02b6.png?h=920929c4&itok=qWwFCtkG'
];

function App() {
  const [news, setNews] = useState([]);
  const [isData, setIsData] = useState(false);

  const fetchData = async ()=>{   
      if(!isData){
          const resp = await fetch(`http://127.0.0.1:5000/fetch_news`);
          const data  = await resp.json();
          setNews(data);
          setIsData(true);
  }
  }

  useEffect(()=>{
      fetchData();
  }, []);



  return (
    <>
      <Navbar cur='Dashboard'/>
      <MainHeader images={images} isMain={true} text={'Your main source for Formula 1 information'}/>
      {isData ? <Cards cards={news}/> : <div className='w-full flex items-center justify-center m-10'><Loader/></div>
      }
      <Footer/>
    </>
  );
}

export default App