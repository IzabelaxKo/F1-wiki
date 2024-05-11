import { Footer } from "../elements/Footer";
import { Navbar } from "../elements/Navbar";
import { MainHeader } from "../elements/MainHeader";
import { useEffect, useState } from "react";
import { Loader } from "../../components/ui/loader";
import { Card } from "../elements/Card";

const img = [
    'https://www.formula1.com/content/dam/fom-website/sutton/2022/Bahrain/Sunday/1386703905.jpg'
]

export function TeamsPage(){
    const [teams, setTeams] = useState([]);
    const [isData, setIsData] = useState(false);

    const fetchData = async ()=>{   
        if(!isData){
            const resp = await fetch(`http://127.0.0.1:5000/teams`);
            const data  = await resp.json();
            setTeams(data);
            setIsData(true);
    }
    }

    useEffect(()=>{
        fetchData();
    }, []);

    return(
        <>
            <Navbar cur='Teams'></Navbar>
            <MainHeader 
                images={img} 
                text='Teams'
            ></MainHeader>
            {isData ? 
            <div className="flex flex-col flex-wrap mt-10 w-full">
                <div className="md:text-5xl sm:text-3xl text-2xl font-bold mb-7 text-center">Our list of F1 drivers:</div>
                    <div id='infos' className="flex flex-wrap w-full justify-center">
                        {teams.map((d, id) =>
                            <Card 
                                title={`${d.name}`} 
                                short_text={d.about}
                                img={d.img}
                                classes="mb-5 md:ml-5"
                                key={id} 
                            ></Card>
                        )}
                    </div>
                </div>                
            : <Loader></Loader>}
            <Footer></Footer>
        </>
    );
}