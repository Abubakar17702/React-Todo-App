import React from 'react'

function Footer() {
  return (
    <>
     <div className="container-fluid">
        <div className="row ">
            <div className="col">
                <p className='mb-0 p-2 text-center bg-dark text-white'>&copy; {new Date().getFullYear()}. All Rights Reserved By Abubakar. </p>
            </div>
        </div>
     </div> 
    </>
  )
}

export default Footer
