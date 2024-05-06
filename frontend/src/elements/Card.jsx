import PropTypes from 'prop-types'

export function Card({title, short_text, img, classes}){
    return(
        <div className={`card w-96 glass ${classes}`}>
        <figure><img src={img} alt="car!"/></figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{short_text}</p>
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