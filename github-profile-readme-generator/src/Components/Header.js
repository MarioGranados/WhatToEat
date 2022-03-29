const Header = () => {
    return (
        <>
            <>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Greeting</label>
                    <input type="text" className="form-control" id="formGroupExampleInput"
                           placeholder="Example input placeholder"/>
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Subtitle</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2"
                           placeholder="Another input placeholder"/>
                </div>

            </>
        </>
    );
}
export default Header;