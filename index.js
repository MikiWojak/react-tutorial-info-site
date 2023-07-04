function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

function MainContent() {
    return (
        <div>
            <h1>React tutorial</h1>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel maximus neque, vitae lobortis eros. Maecenas aliquet, felis quis porttitor volutpat, quam ante vestibulum velit, non facilisis orci ex eu purus. Praesent lobortis at velit nec gravida. Aenean vel malesuada urna. Duis sem nisi, imperdiet in viverra nec, viverra id quam. Morbi a dictum enim. Duis porttitor, augue id dapibus pharetra, turpis magna tempus dui, ut consequat sapien sapien quis ligula. Cras pulvinar ante vel leo blandit, et dapibus ipsum varius.
            </p>
            <p>
                Nulla a laoreet velit. Ut vel viverra enim. Etiam ex metus, venenatis id euismod non, eleifend eget massa. Vestibulum dolor risus, euismod in nisi a, dapibus lobortis justo. Fusce facilisis, dui in ullamcorper tristique, lectus lacus efficitur odio, vel suscipit tortor justo a libero. Duis eget eros a erat iaculis pulvinar. Vivamus hendrerit aliquam diam, id volutpat orci vehicula a. Sed porta, odio pellentesque lacinia sodales, velit lorem sollicitudin elit, non tincidunt quam mi nec purus. Nulla facilisi. Fusce vel commodo ipsum. In scelerisque, sem nec aliquam sodales, nunc nulla vehicula lectus, in tincidunt nunc elit at tellus. Sed eu pellentesque quam. Nullam ultricies ut lacus sollicitudin sollicitudin. Phasellus dignissim vestibulum odio, eget interdum dui rhoncus non.
            </p>
        </div>
    )
}

ReactDOM.render(
    <div>
        <Navbar />
        
        <MainContent />
    </div>
    ,
    document.getElementById("root")
)