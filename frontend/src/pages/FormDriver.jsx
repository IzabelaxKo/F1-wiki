import { Footer } from "../elements/Footer";
import { Navbar } from "../elements/Navbar";
import { MainHeader } from "../elements/MainHeader";
import { Form } from "../elements/Form";

const img = ["https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9North/f_auto/q_auto/fom-website/2023/Austria/GettyImages-1247769286"];

const inputs = [
    {'label': "First name", 'holder': "Ayrton"},
    {'label': "Last name", 'holder': "Senna"},
    {'label': "Last name", 'otherType': "date"},
    {'label': "Team", 'holder': "Mclaren"},
    {'label': "Portrait image", 'holder': "https://[...].jpg"}
]

const dataBuild = ['firstName', 'lastName', 'birth','teamName','img']

export function DriverFormPage(){
    return(
        <>
            <Navbar></Navbar>
            <MainHeader images={img} text='Add new driver'></MainHeader>
            <Form name="driver" inputs={inputs} post={'http://127.0.0.1:5000/create_driver'}  dataBuild={dataBuild} height="h-min"></Form>
            <Footer></Footer>
        </>
    );
}