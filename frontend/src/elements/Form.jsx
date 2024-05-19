import { Input } from "./Input";
import PropTypes from 'prop-types';

export function Form({name, inputs, post, dataBuild, height}){

    const sendInfo = async (e) => {
        e.preventDefault();
        let isOk = true;

        const data = Array.from(document.querySelectorAll('input, textarea')).map((x)=>x.value);
        
        data.forEach((e) => {
            if(e == '' || e == null) isOk = false;
        });
        
        
        if(isOk){
            let sendData = {};
            dataBuild.map((x, i) => sendData[x] = data[i]);
            console.log(sendData);
            
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(sendData)
            }
            const resp = await fetch(post, options);

            const mess = await resp.json();
            alert(mess.msg);
        }

        
        }

    return(
        <div className={`flex w-full justify-center ${height}`}>
                <div className="lg:w-1/4 w-5/6 glass flex flex-col items-center p-2 rounded-md mt-10 text-slate-100">
                    <h1 className="font-bold lg:text-5xl text-3xl mt-5">Add new {name}:</h1>
                    {inputs.map((el, i)=>
                        <Input key={i} label={`${el.label}:`} holder={el.holder} otherType={el.otherType}></Input>
                    )}
                    <button className="btn btn-outline btn-accent btn-wide my-5" onClick={sendInfo}>Add</button>
                </div>
        </div>
    );
}

Form.propTypes = {
    name: PropTypes.string,
    inputs: PropTypes.array,
    post: PropTypes.string,
    height: PropTypes.string,
    dataBuild: PropTypes.array
}