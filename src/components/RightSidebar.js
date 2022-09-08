import React from 'react'

export default function RightSidebar() {
  return (
    <div>
       <section className='my-5 mx-5'>
      <div className="container-lg">
        <div className="g-4 justify-content-center align-items-center">
        <div className="md-5 text-center text-md-start">
            <h1>
              <div className="h1">Your Future</div>
            </h1>
            <p className="my-4 text-muted">Do you have a dream. If you do, it's time to make it real</p>            
          </div> <hr style={{border:'4px solid red'}} />
        <div className="md-5 text-center d-none d-md-block">
            <img src="/assets/image1.jpg" className="img-fluid" alt="cover" />
          </div>

        </div>
      </div>
    </section>
    <section className='my-5 mx-5' style={{backgroundColor:"lightGray"}}>
      <div className="container-lg">
        <div className="g-4 justify-content-center align-items-center">
        <div className="md-5 text-center text-md-start">
            <h1>
              <div className="h1">Your Future</div>
            </h1>
            <p className="my-4 text-muted">Do you have a dream. If you do, it's time to make it real</p>            
          </div>
        <div className="md-5 pb-3 text-center d-none d-md-block">
            <img src="/assets/image3.jpg" className="img-fluid rounded-circle " style={{height:'40px', width:'40px'}} alt="cover" />
            <img src="/assets/image3.jpg" className="col-img-fluid rounded-circle px-3 " style={{height:'60px', width:'90px'}} alt="cover" />
            <img src="/assets/image4.jpg" className="col-img-fluid rounded-circle" style={{height:'40px', width:'40px'}} alt="cover" />
            
            
          </div>
        </div>
      </div>
    </section>
    <section className='my-5'>
      <div className="container-lg">
        <div className="g-4 justify-content-center align-items-center">
        <div className="row md-5 text-center d-none d-md-block">
            <img src="/assets/image2.webp" className="col-img-fluid" alt="cover" />
            
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
