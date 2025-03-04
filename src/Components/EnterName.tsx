import { useState } from 'react';

const EnterName = () => {
    const [name, setName] = useState("");

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        alert (`Hello ${name}, thank you for your time. Please rate this page. \n 
            Note: hope you are a cat person`);
    }

    return(
        <form onSubmit={handleSubmit}>
            
                <label>Enter your name:
                    <br/>
                <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                </label>
                <br />
                <div className='button'>
                    <input type="submit"/>
                </div>
            
        </form>
    );
}
export default EnterName;