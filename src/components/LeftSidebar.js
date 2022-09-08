import React from 'react'

export default function RightSidebar() {
  return (
    <div className='LeftSidebar'> 
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#Future">Future</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#Junior dev">Junior dev</a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="#Senior dev">Senior dev</a>
        </li>
        <li className="nav-item ms-5">
          <a className="nav-link" href="#Log-in">Log in</a>
        </li>
        <li className="nav-item">
          <a className="nav-link border ms-5 align-items-end" href="#All-in-one" tabindex="-1" aria-disabled="true">All in one</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
         <section className='my-5' style={{backgroundColor:"lightGray"}}>
      <div className="container-lg">
        <div className="row g-4 justify-content-center align-items-center">
          <div className="col-md-5 text-center text-md-start">
            <h3>
              <div className="h1">Your Future</div>
            </h3>
            <p className=" my-4 text-muted">Do you have a dream. If you do, it's time to make it real</p>
            <a href="#pricing" className="btn btn-secondary btn-sm btn-shadow-lg rounded-pill border border-5">Start Now</a>
          </div>
          <div className="col-md-5 text-center d-none d-md-block">
            <img src="/assets/image1.jpg" className="img-fluid" alt="cover" />
          </div>
        </div> 
      </div> <br />
    </section> 
    <section className='my-5'>
      <div className="container-lg">
        <div className="row g-4 justify-content-center align-items-center">
          <div className="col-md-5 text-center text-md-start">
            <h3>
              <div className="h1">Your Future</div>
            </h3>
            <p className=" my-4 text-muted">Do you have a dream. If you do, it's time to make it real</p>
          <h5>See more about your future</h5> <hr style={{border:'4px solid red'}} />
            
          </div>
          <div className="col-md-5 text-center d-none d-md-block">
            <img src="/assets/image2.webp" className="img-fluid" alt="cover" />
          </div>
        </div>
      </div> <br /> 
    </section>
    <section className='my-5'>
      <div className="container-lg">
        <div className="row g-4 justify-content-center align-items-center">
        <div className="col-md-5 text-center d-none d-md-block">
            <img src="/assets/image1.jpg" className="img-fluid " alt="cover" />
          </div>
          <div className="col-md-5 text-center text-md-start">
            <h1>
              <div className="h1">Your Future</div>
            </h1>
            <p className="my-4 text-muted">Do you have a dream. If you do, it's time to make it real</p>            
          </div>
  
        </div>
      </div>
    </section>
   
    </div>
  )
}
