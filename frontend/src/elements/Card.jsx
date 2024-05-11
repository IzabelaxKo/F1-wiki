import PropTypes from 'prop-types';
import './elements.css';

export function Card({title, short_text, img, classes, link_to, is_btn}){
    return(
        <div className={`card w-96 glass ${classes}`}>
        <figure className='h-64'><img src={img} alt="card image" className='image'/></figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p style={{whiteSpace: "pre-wrap"}}>{short_text}</p>
            <div className="card-actions justify-end">
            {is_btn &&
                <button className="btn btn-primary w-2/5"><a href={link_to} target='_blank'>See more »</a></button>
            }
            </div>
        </div>
        </div>
    );
}

Card.propTypes = {
    title : PropTypes.node,
    short_text : PropTypes.node,
    img : PropTypes.node,
    classes : PropTypes.node,
    link_to : PropTypes.node,
    is_btn : PropTypes.bool
}