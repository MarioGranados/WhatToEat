import {useState} from "react";

const Social = () => {
    /*simple solution for a bigger problem. Col1 & col2 must be the same lengh for the render to work*/
    let col1 = ["Twitter", "LinkedIn", "Github"];
    let col2 = ["Instagram", "HackerRank", "CodeWars"];
    let rows = [];

    const [input, setInput] = useState('');
    let userInput = [];

    for (let i = 1; i < col1.length; i++) {
        rows.push(
            <div className="row">
                <div className="col">
                    <label htmlFor={col1[i]}>{col1[i]}</label>
                    <input type="text"
                           className="form-control"
                           placeholder={col1[i]}
                           onChange={
                               (e) => {
                                   setInput(e.target.value);
                               }
                           }
                    />
                </div>
                <div className="col">
                    <label htmlFor={col2[i]}>{col2[i]}</label>
                    <input type="text"
                           className="form-control"
                           placeholder={col2[i]}
                           onChange={(e) => {
                               setInput(e.target.value);
                               userInput.push(e.target.value);
                           }}
                    />
                </div>
            </div>
        );
    }
    console.log(userInput)
    return (
        <>
            <div className='display-4'>Social</div>
            {rows}
        </>
    )

}
export default Social;