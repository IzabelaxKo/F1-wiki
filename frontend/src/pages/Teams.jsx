import { Footer } from "../elements/Footer";
import { Navbar } from "../elements/Navbar";
import { MainHeader } from "../elements/MainHeader";

const img = [
    'https://www.formula1.com/content/dam/fom-website/sutton/2022/Bahrain/Sunday/1386703905.jpg'
]

export function TeamsPage(){
    return(
        <>
            <Navbar cur='Teams'></Navbar>
            <MainHeader 
                images={img} 
                text='Teams'
            ></MainHeader>
            {/* here will be just teams as Cards(maybe like to news IDK yet) */}
            <Footer></Footer>
        </>
    );
}