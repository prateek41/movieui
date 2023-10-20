import React, { Fragment,useState } from 'react';
import { Link } from 'react-router-dom';
import Img3 from './img3.jpg';
import Img5 from './img5.jpg';
import Img6 from './img6.webp';
import six from './six.jpg';
import phantam from './phantam.jpg';
import witcher from './witcher.webp';
import pushpa from './pushpa.webp';
import war from './war.jpg';
import tumbbad from './tumbbad.webp';

import './home.css';

export default function Home() {
  const [first, setfirst] = useState([{
    imgHeading:"lksdfd",
    desc:"jdfhladja"
  },
  {
    imgHeading:"lksdfd",
    desc:"jdfhladja"
  }
])
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-sm text-light bg-dark">
          <div style={{marginRight: '80px'}}>
          <div className="logo m-2 text-danger">SHOW HUB</div>
          </div>
          <div className="collapse navbar-collapse ml-3" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
              <li className="nav-item mr-5">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              {/* <li className="nav-item dropdown dmenu">
                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Location</a>
                <div className="dropdown-menu sm-menu">
                  <a className="dropdown-item" href="#">Banglore</a>
                  <a className="dropdown-item" href="#">Delhi</a>
                  <a className="dropdown-item" href="#">Punjab</a>
                  <a className="dropdown-item" href="#">Rajasthan</a>
                </div>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="m-2"> 
            <button className="btn bg-danger btn-sm rounded">
            <Link className="text-decoration-none text-light p-2" to="/login">Login</Link>
          </button>
          </div>
        </nav>

        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Img3} class="d-block w-100 image3" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={Img5} class="d-block w-100 image3" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={Img6} class="d-block w-100 image3" alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className='text-center m-5'><h1>All Movies</h1></div>
        <div className="row row-cols-3 g-3">
          {
            first.map((item,index)=>{
              return (
<div className="col">
            <div className="card">
            <Link to={`/adipurush/:${index}`}>
              <img src={six} style={{width: '100%', height: '400px', marginLeft: '10px'}} className="card-img-top" alt="Hollywood Sign on The Hill" />
            </Link>
              <div className="card-body text-center fw-bold">
                <h5 className="card-title">{item.imgHeading}</h5>
                <p className="card-text">
               {item.desc}
                </p>
              </div>
            </div>
          </div>
              )
            })
          }
      
          {/* <div className="col">
            <div className="card">
              <img src={phantam} style={{width: '100%', height: '400px'}} className="card-img-top" alt="Palm Springs Road" />
              <div className="card-body text-center fw-bold">
                <h5 className="card-title">PHANTAM</h5>
                <p className="card-text">
                The film tells the story of a Soviet Navy submarine captain attempting to prevent a war. 
                It is loosely based on the real-life events involving the sinking of the submarine K-129 in 1968.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card" style={{marginRight: '10px'}}>
              <img src={witcher} style={{width: '100%', height: '400px'}} className="card-img-top" alt="Los Angeles Skyscrapers" />
              <div className="card-body text-center fw-bold">
                <h5 className="card-title">THE WITCHER</h5>
                <p className="card-text">The series revolves around the eponymous "witcher", Geralt of Rivia. "witchers" are 
                beast hunters who are given supernatural abilities at a young age to battle wild beasts and monsters.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{marginLeft: '10px'}}>
              <img src={pushpa} style={{width: '100%', height: '400px'}} className="card-img-top" alt="Skyscrapers" />
              <div className="card-body text-center fw-bold">
                <h5 className="card-title">PUSHPA</h5>
                <p className="card-text">
                Pushpa tells the story of a coolie Pushparaaj who is denied a surname because of his bastard status.
                He is constantly disrespected by his 'brothers' and the society around him
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={war} style={{width: '100%', height: '400px'}} className="card-img-top" alt="Skyscrapers" />
              <div className="card-body text-center fw-bold">
                <h5 className="card-title">WAR</h5>
                <p className="card-text">
                War film is a film genre concerned with warfare, typically about naval, air, or land battles,
                with combat scenes central to the drama.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{marginRight: '10px'}}>
              <img src={tumbbad} style={{width: '100%', height: '400px'}} className="card-img-top" alt="Skyscrapers" />
              <div className="card-body text-center fw-bold">
                <h5 className="card-title ">TUMBBAD</h5>
                <p className="card-text">
                The story revolves around the three generations of a family facing the consequences when 
                they build a temple for the first-born of a goddess, who must not be worshiped.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="container-fluid">
        <div className="jumbotron text-white text-center">
          <h2 className="colour display-5">BookMyShow</h2>
          <p className="colour lead">This is the application of booking tickets</p>
        </div>
      </div>

      <footer className="footer text-white">
        <div className="container-fluid bg-dark text-white text-center py-2">
          <h6>Copyright <span>&copy;</span> 2021-All rights reserved</h6>
          <button className="btn bg-info btn-sm rounded">
            <Link className="text-decoration-none text-dark" to="/contactme">Contact Us</Link>
          </button>
        </div>
        
      </footer>
    </div>
  );
};