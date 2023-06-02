import React from 'react'

export default function Footer() {
  return (
    <div className='bg-success text-white' >
      <footer className="py-5 border-top  ">
        <div className="row">
          <div className=" col-7 col-md-2 mb-3 ">
            <img src={'/media/logo.png'} alt='logo' style={{ "height": "290px", "margin-top": "-60px" }} />
          </div>

          <div className="col-5 col-md-3 offset-md-1 mb-2 mx-md-5">
            <h5 className='justify-content-center'>Company Detail</h5>
            <p className='font-weight-bold'>Akfood was founded in 2023 by Aman Singh Rathore. The website started for delivery of Delicious Food item on time at reasonable Price. </p>
          </div>

          <div className="col-10 mx-4 col-md-5 offset-md-2  mb-2">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-center border-top">
          <p>© 2023 Company, Inc. All rights reserved. Developed by Aman Kumar</p>
        </div>
      </footer></div>

  )
}

