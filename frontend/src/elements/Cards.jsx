import { Card } from "./Card";
import PropTypes from 'prop-types'

export function Cards({cards}){
    return(
        <div className="grid flex flex-col flex-wrap mt-10 w-3/4">
            <div className="text-5xl text-left font-bold mb-7">Check out the latest news:</div>
            <div id='infos' className="flex flex-wrap">
                {cards.map((info, ind) =>
                    <Card 
                        key={ind}
                        title={info.title}
                        short_text={info.text}
                        img={info.img}
                        classes="mr-5"
                    ></Card>
                )}
        </div>
        </div>
    );
}

Cards.propTypes ={
    cards: PropTypes.array
}
