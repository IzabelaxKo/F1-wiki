import { Footer } from "../elements/Footer";
import { Navbar } from "../elements/Navbar";
import { MainHeader } from "../elements/MainHeader";

const img = [
    'https://i.pinimg.com/originals/51/1b/f7/511bf7e2963e46b296171987cbeaed6c.jpg'
]

export function DriversPage(){
    return(
        <>
            <Navbar cur='Drivers'></Navbar>
            <MainHeader 
                images={img} 
                text='Drivers'
            ></MainHeader>
            {/* here will be just teams as Cards(maybe like to news IDK yet) */}
            <Footer></Footer>
        </>
    );
}