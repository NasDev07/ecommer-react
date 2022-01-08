import React from 'react'

const Footer = () => {
    return (
        <div>
        <footer className="bg-light text-dark p-5 mt-5 justify-content-center ">
          <div className="row ">
            <div className="col-md-4 ">
              <h5>ALAMAT</h5>
              <ul>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, rem!</li>
              </ul>
            </div>
            <div className="col-md-4 ">
              <h5>Ikuti KAMI</h5>
              <ul>
                <div>
                    <a href="https://www.instagram.com/nas_staiko/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
              </ul>
            </div>
            <div className="col-md-4 ">
              <h5>KONTAK APPLE</h5>
              <ul>
                <li>APPLE MART@gmail.com</li>
              </ul>
            </div>
          </div>
        </footer>
        <div className="copyright text-center text-white font-width-bold bg-primary p-2 ">
          <p>copyright APPLE MART <i class="fa fa-copyright" aria-hidden="true"></i> 2022
          </p>
        </div>
      </div>
    )
}

export default Footer
