import { Card } from "./Card";
import PropTypes from 'prop-types'

export function Cards({cards}){
    return(
        <div className="flex flex-col flex-wrap mt-10 w-full items-center">
            <div className="md:text-5xl sm:text-3xl text-2xl font-bold mb-7">Check out the latest news:</div>
            <div id='infos' className="flex flex-wrap w-3/4">
                {cards.map((info, ind) =>
                    <Card 
                        key={ind}
                        title={info.title}
                        short_text={info.text}
                        img={info.img}
                        classes="mb-5 md:ml-5"
                    ></Card>
                )}
            </div>
        </div>
    );
}

Cards.propTypes ={
    cards: PropTypes.array
}
