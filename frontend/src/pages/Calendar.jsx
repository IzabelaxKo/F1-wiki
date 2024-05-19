import { Footer } from "../elements/Footer";
import { Navbar } from "../elements/Navbar";
import { MainHeader } from "../elements/MainHeader";
import { useState, useEffect } from "react";
import { Loader } from "../../components/ui/loader";

const img = [
    'https://i.pinimg.com/originals/14/18/dd/1418dddb19ee00fb9fe64c9d99167c71.jpg'
];

const cur_year = new Date().getFullYear()

var years = [];
for(let i=cur_year; i>=1994; i--) {years.push(i);}

export function CalendarPage(){
    const [callendar, setCallendar] = useState([]);
    const [isData, setIsData] = useState(false);
    const [curYear, setCurYear] = useState(cur_year);
    
    const fetchCallendar = async (year) =>{
        const resp = await fetch(`http://127.0.0.1:5000/races/${year}`);
        const data  = await resp.json();
        setCallendar(data);
        setIsData(true);
    }

    useEffect(()=>{
        if(!isData){
            fetchCallendar(curYear);
        }
    }, []);

    const handleChange = () => {
        let ev = document.getElementById('select').value;
        setCurYear(ev);
        setIsData(false);
        fetchCallendar(ev);
    }


    return(
        <>
            <Navbar cur='Calendar'></Navbar>
            <MainHeader images={img} text="Callendars"></MainHeader>
            <div className="flex flex-col items-center w-full mt-10">
                <h1 className="font-bold text-5xl mb-7">Current year callendar:</h1>
                <div className="flex mb-5 w-full justify-around">
                    <select className="select select-error w-full max-w-xs" id='select'>
                        <option disabled selected>You can also get the previous years</option>
                            {years.map((i)=>
                                <option key={i} value={i}>{i}</option>
                            )} 
                    </select>
                    <button className="btn btn-outline btn-error" onClick={handleChange}>Check this</button>
                </div>
                    {isData ?  
                        <table className="border-collapse border w-3/4">
                            <thead>
                                <tr>
                                    <th className="border text-lg">Race name</th>
                                    <th className="border text-lg">Circuit name</th>
                                    <th className="border text-lg">Date</th>
                                    <th className="border text-lg">Winner</th>
                                </tr>
                            </thead>
                            <tbody>
                                {callendar.map((el, i) => {
                                    if(i!=0){
                                        return(
                                            <tr key={i}>
                                                <td className="border h-20 px-10">{el.name}</td>
                                                <td className="border px-10">{el.circuit}</td>
                                                <td className="border px-10">{el.date}</td>
                                                <td className="border px-10">{el.winner}</td>
                                            </tr>
                                        );
                                    }
                                })}
                            </tbody>
                        </table> 
                    : <Loader></Loader>
                    }
            </div>
            <Footer></Footer>
        </>
    );
}