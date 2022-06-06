
export default Profile => {
    return (
        <>
            <div className='justify-content-center d-flex flex-column align-content-center'>
                <img
                    src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                    alt="default image"
                />
                <h4>Mario Granados (user)</h4>
                <h5>@MarioGranados</h5>

                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                aria-selected="true">Created
                        </button>
                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                                aria-selected="false">Favorites
                        </button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                         aria-labelledby="nav-home-tab">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae distinctio esse
                            ex excepturi impedit laborum odit quia quod rem repellat sint totam, veniam. Aperiam fuga
                            non porro reiciendis.</p>
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel"
                         aria-labelledby="nav-profile-tab">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolore, est iste molestias optio
                            voluptatibus?</p>
                    </div>
                </div>
            </div>
        </>
    );
}
