import { Footer } from "../elements/Footer";
import { Navbar } from "../elements/Navbar";
import { MainHeader } from "../elements/MainHeader";
import { Form } from "../elements/Form";

const img = ["https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9North/f_auto/q_auto/fom-website/2023/Austria/GettyImages-1247769286"];

const inputs = [
    {'label': "Team name", 'holder': "Redbull"},
    {'label': "Team logo", 'holder': "https://[...].jpg"},
    {'label': "About", 'holder': "Some short text", 'otherType': 'textarea'}
]

const dataBuild = ['name','img','about']


export function TeamFormPage(){
    return(
        <>
            <Navbar></Navbar>
            <MainHeader images={img} text='Add new team'></MainHeader>
            <Form dataBuild={dataBuild} inputs={inputs} name='team' post={'http://127.0.0.1:5000/create_team'}  height="h-[40em]"></Form>
            <Footer></Footer>
        </>
    );
}