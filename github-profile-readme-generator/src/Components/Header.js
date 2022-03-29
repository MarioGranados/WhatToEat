import {useState} from "react";

const Header = () => {

    const [greeting, setGreeting] = useState("Hello my name is Mario");
    const [subtitle, setSubtitle] = useState("I like to solve all my probles with code!");
    console.log(subtitle);
    console.log(greeting);
    return (
        <>
            <>
                <div className="form-group">
                    <label htmlFor="greeting">Greeting</label>
                    <input type="text" className="form-control" id="greeting"
                           placeholder={greeting}
                           onChange={e => {setGreeting(e.target.value)}}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="subtitle">Subtitle</label>
                    <input type="text" className="form-control" id="subtitle"
                           placeholder={subtitle}
                           onChange={e => {setSubtitle(e.target.value)}}
                    />
                </div>

            </>
        </>
    );
}
export default Header;