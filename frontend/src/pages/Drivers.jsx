import { Footer } from "../elements/Footer";
import { Navbar } from "../elements/Navbar";
import { MainHeader } from "../elements/MainHeader";
import { useEffect, useState } from "react";
import { Card } from "../elements/Card";
import { Loader } from "../../components/ui/loader";

const img = [
    'https://i.pinimg.com/originals/51/1b/f7/511bf7e2963e46b296171987cbeaed6c.jpg'
]

export function DriversPage(){
    const [drivers, setDrivers] = useState([]);
    const [isData, setIsData] = useState(false);

    const fetchData = async ()=>{
        if(!isData){
            const resp = await fetch('http://127.0.0.1:5000/drivers');
            const data = await resp.json();
            setDrivers(data['drivers']);
            setIsData(true);
        }
    }

    useEffect(()=>{
       fetchData();
    }, [drivers]);

    return(
        <>
            <Navbar cur='Drivers'></Navbar>
            <MainHeader 
                images={img} 
                text='Drivers'
            ></MainHeader>
            <div>
            {isData ? 
            <div className="flex flex-col flex-wrap mt-10 w-full">
                <div className="md:text-5xl sm:text-3xl text-2xl font-bold mb-7 text-center">Our list of F1 drivers:</div>
                    <div id='infos' className="flex flex-wrap w-full justify-center">
                        {drivers.map((d, id) =>
                            <Card 
                                title={`${d.name} ${d.surname}`} 
                                short_text={`Team: ${d.team},\nDate of birth: ${d.birth_date}`} 
                                img={d.img_link} 
                                key={id} 
                                classes="mb-5 md:ml-5"
                                is_btn={false}
                            ></Card>
                        )}
                    </div>
                </div>                
            : <Loader></Loader>}
            </div>
            <Footer></Footer>
        </>
    );
}