import React from 'react'
import img1 from '../assets/123.png'

const Home = () => {
    return (
        <React.Fragment>
            <div className=''>
                <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
                    <div class="container-fluid">
                        <span class="navbar-brand" href="#">Navbar</span>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <span class="nav-link active" aria-current="page" href="#">Home</span>
                                </li>
                                <li class="nav-item">
                                    <span class="nav-link" href="#">Link</span>
                                </li>
                                <li class="nav-item dropdown">
                                    <span class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </span>
                                    <ul class="dropdown-menu">
                                        <li><span class="dropdown-item" href="#">Action</span></li>
                                        <li><span class="dropdown-item" href="#">Another action</span></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><span class="dropdown-item" href="#">Something else here</span></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <span class="nav-link disabled" aria-disabled="true">Disabled</span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
            {/* {hero section} */}
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            {/* <h5>First slide label</h5> */}
                            {/* <p>Some representative placeholder content for the first slide.</p> */}
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={img1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            {/* <h5>Second slide label</h5> */}
                            {/* <p>Some representative placeholder content for the second slide.</p> */}
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={img1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            {/* <h5>Third slide label</h5> */}
                            {/* <p>Some representative placeholder content for the third slide.</p> */}
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            {/* {<!-- About us -->} */}
            <div className='container mt-5'>
                <h2 className='text-center'>About Us</h2>
                <p>Welcome to our website! We are a team of passionate individuals dedicated to providing the best services possible.</p>
            </div>
            {/* {portfolio section} */}
            <div className='container-fluid mt-5'>
                <h2 className='text-center'>Our Portfolio</h2>
                <div className='d-flex flex-wrap justify-content-center'>

                    < img className='m-5' img src={img1} alt="project 1" height={200} />
                    < img className='m-5' img src={img1} alt="project 1" height={200} />
                    < img className='m-5' img src={img1} alt="project 1" height={200} />
                    < img className='m-5' img src={img1} alt="project 1" height={200} />
                    < img className='m-5' img src={img1} alt="project 1" height={200} />
                    < img className='m-5' img src={img1} alt="project 1" height={200} />
                </div>
            </div>

            {/* {services} */}
            <div className='container mt-5'>
                <h2 className='text-center'>services</h2>
                HTML
                <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '100%', backgroundColor: "greenyellow" }}><span style={{ color: "black" }}>HTML</span></div>
                </div><br></br>
                CSS
                <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '75%', backgroundColor: "red" }}>CSS</div>
                </div><br></br>
                JAVASCRIPT
                <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '76.5%', backgroundColor: "violet" }}>JAVASCRIPT</div>
                </div><br></br>
                REACT.JS
                <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '80%', backgroundColor: "aquamarine" }}>REACT.JS</div>
                </div><br></br>
            </div>

            {/* contact us */}
            <div className='container mt-'>
                <h2 className='text-center'>Contact Us</h2>

                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                        <label for="floatingTextarea2">Comments</label>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <div className=''></div>
                </form>


            </div>

            {/* bottom bar */}
            <footer className='d-flex p-5 bg-dark justify-content-around ' data-bs-theme="dark">
                <div className='card pe-5'>
                    <h2>Link</h2>
                    <ul>
                        <li>data 1</li>
                        <li>data 2</li>
                        <li>data 3</li>
                        <li>data 4</li>
                    </ul>

                </div>
                <div className='card pe-5'><h2>Views</h2>
                    <ul>
                        <li>data 1</li>
                        <li>data 2</li>
                        <li>data 3</li>
                        <li>data 4</li>
                    </ul>
                </div>
                <div className='card pe-5'><h2>Brands</h2>
                    <ul>
                        <li>data 1</li>
                        <li>data 2</li>
                        <li>data 3</li>
                        <li>data 4</li>
                    </ul>
                </div>
            </footer>
        </React.Fragment >
    )
}

export default Home