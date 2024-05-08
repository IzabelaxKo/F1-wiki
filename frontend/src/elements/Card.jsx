import PropTypes from 'prop-types';
import './elements.css';

export function Card({title, short_text, img, classes}){
    return(
        <div className={`card w-96 glass ${classes}`}>
        <figure className='h-64'><img src={img} alt="card image" className='image'/></figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p style={{whiteSpace: "pre-wrap"}}>{short_text}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary w-2/5">See more »</button>
            </div>
        </div>
        </div>
    );
}

Card.propTypes = {
    title : PropTypes.node,
    short_text : PropTypes.node,
    img : PropTypes.node,
    classes : PropTypes.node
}