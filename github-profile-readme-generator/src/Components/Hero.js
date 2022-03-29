import Header from "./Header";
import Social from "./Social";
import ProgrammingLanguages from "./ProgrammingLanguages";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Database from "./Database";
import AddOns from "./AddOns";
import Testing from "./Testing";

const Hero = () => {
    return(<>
        <div className="container">
        <Header/>
            <ProgrammingLanguages/>
            <FrontEnd/>
            <BackEnd/>
            <Database/>
            <Testing/>
            <Social/>
            <AddOns/>
        </div>
    </>);

}
export default Hero;