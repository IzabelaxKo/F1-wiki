import PropTypes from 'prop-types';
import './elements.css';

export function Input({label, holder, otherType}){
    return(
        <>
            {otherType == 'textarea' ?
            <label className="input input-md input-bordered flex items-top gap-2 w-3/4 h-1/2 mt-4">
                {label}
                <textarea placeholder={holder} className='bg-inherit focus:outline-none textar w-2/3'></textarea>
            </label>
            : 
            <label className="input input-md input-bordered flex items-center gap-2 lg:w-3/4 sm:w-5/6 mt-4">
                {label}
                <input type={otherType ? otherType : "text"} className="w-2/3" placeholder={holder}/>
            </label>
            }
        </>
    );
}

Input.propTypes = {
    label: PropTypes.string,
    holder: PropTypes.string,
    otherType: PropTypes.string,
}