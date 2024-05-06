import { Footer } from "../elements/Footer";
import { Navbar } from "../elements/Navbar";
import { MainHeader } from "../elements/MainHeader";

const img = [
    'https://i.pinimg.com/originals/14/18/dd/1418dddb19ee00fb9fe64c9d99167c71.jpg'
]

export function CalendarPage(){
    return(
        <>
            <Navbar cur='Calendar'></Navbar>
            <MainHeader images={img} text="Callendars"></MainHeader>
            {/* here will be just teams as Cards(maybe like to news IDK yet) */}
            <Footer></Footer>
        </>
    );
}