import React from "react";

import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/aos/aos.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../assets/css/main.css';
import hero from '../assets/img/hero-img.png';
import herobacg from '../assets/img/hero-bg-2.jpg';

export default function HomePage() {
  return (
    <div > 

<header id="header" className="header d-flex align-items-center fixed-top" >
  <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between" >
  <a className="logo d-flex align-items-center">
        <h1 className="sitename">HomeTaste</h1>
      </a>

    <nav id="navmenu" className="navmenu" >
      <ul>
        <li><a href="#hero" className="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
        <li> <div className="d-flex">
            <a href="#about" className="btn-get-started">SignIn</a>
          </div></li>
      </ul>
      <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>

  </div>
</header>

<main className="main">

  <section id="hero" className="hero section dark-background">
    <img src={herobacg} alt="" className="hero-bg"/>

    <div className="container">
      <div className="row gy-4 justify-content-between">
        <div className="col-lg-4 order-lg-last hero-img" data-aos-delay="100">
          <img src={hero} className="img-fluid animated" alt=""/>
        </div>

        <div className="col-lg-6  d-flex flex-column justify-content-center" >
          <h1>Launch Your Small Business With <span>HomeTaste</span></h1>
          <p>We help small businesses sell handmade clothing, homemade food, and more through a user-friendly marketplace.</p>
          <div className="d-flex">
            <a href="#about" className="btn-get-started">Get Started</a>
          </div>
        </div>

      </div>
    </div>

    <svg className="hero-waves" viewBox="0 24 150 28" preserveAspectRatio="none">
  <defs>
    <path id="wave-path" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
  </defs>
  <g className="wave1">
    <use xlinkHref="#wave-path" x="50" y="3"></use>
  </g>
  <g className="wave2">
    <use xlinkHref="#wave-path" x="50" y="0"></use>
  </g>
  <g className="wave3">
    <use xlinkHref="#wave-path" x="50" y="9"></use>
  </g>
</svg>


  </section>

  <section id="about" className="about section">

    <div className="container"  data-aos-delay="100">
      <div className="row align-items-xl-center gy-5">

        <div className="col-xl-5 content">
          <h3>About Us</h3>
          <h2>Ducimus rerum libero reprehenderit cumque</h2>
          <p>Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem tempora deleniti soluta.</p>
          <a href="#" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
        </div>

        <div className="col-xl-7">
          <div className="row gy-4 icon-boxes">

            <div className="col-md-6"  data-aos-delay="200">
              <div className="icon-box">
                <i className="bi bi-buildings"></i>
                <h3>Eius provident</h3>
                <p>Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem</p>
              </div>
            </div> 

            <div className="col-md-6"  data-aos-delay="300">
              <div className="icon-box">
                <i className="bi bi-clipboard-pulse"></i>
                <h3>Rerum aperiam</h3>
                <p>Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia</p>
              </div>
            </div> 

            <div className="col-md-6"  data-aos-delay="400">
              <div className="icon-box">
                <i className="bi bi-command"></i>
                <h3>Veniam omnis</h3>
                <p>Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti</p>
              </div>
            </div> 

            <div className="col-md-6" data-aos-delay="500">
              <div className="icon-box">
                <i className="bi bi-graph-up-arrow"></i>
                <h3>Delares sapiente</h3>
                <p>Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda</p>
              </div>
            </div> 

          </div>
        </div>

      </div>
    </div>

  </section>

  <section id="features" className="features section">

    <div className="container">

      <div className="row gy-4">

        <div className="col-lg-3 col-md-4"  data-aos-delay="100">
          <div className="features-item">
            <i className="bi bi-eye" style={{color:'#ffbb2c'}}></i>
            <h3><a href="" className="stretched-link">Lorem Ipsum</a></h3>
          </div>
        </div>

        <div className="col-lg-3 col-md-4" data-aos-delay="200">
          <div className="features-item">
            <i className="bi bi-infinity" style={{color:'#5578ff'}}></i>
            <h3><a href="" className="stretched-link">Dolor Sitema</a></h3>
          </div>
        </div>

        <div className="col-lg-3 col-md-4"  data-aos-delay="300">
          <div className="features-item">
            <i className="bi bi-mortarboard" style={{color:'#e80368'}}></i>
            <h3><a href="" className="stretched-link">Sed perspiciatis</a></h3>
          </div>
        </div>

        <div className="col-lg-3 col-md-4" data-aos-delay="400">
          <div className="features-item">
            <i className="bi bi-nut" style={{color: '#e361f'}}></i>
            <h3><a href="" className="stretched-link">Magni Dolores</a></h3>
          </div>
        </div>

        <div className="col-lg-3 col-md-4"  data-aos-delay="500">
          <div className="features-item">
            <i className="bi bi-shuffle" style={{color: '#47aeff'}}></i>
            <h3><a href="" className="stretched-link">Nemo Enim</a></h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4"  data-aos-delay="600">
          <div className="features-item">
            <i className="bi bi-star" style={{color: '#ffa76e'}}></i>
            <h3><a href="" className="stretched-link">Eiusmod Tempor</a></h3>
          </div>
        </div>

        <div className="col-lg-3 col-md-4"  data-aos-delay="700">
          <div className="features-item">
            <i className="bi bi-x-diamond" style={{color: '#11dbcf'}}></i>
            <h3><a href="" className="stretched-link">Midela Teren</a></h3>
          </div>
        </div>

        <div className="col-lg-3 col-md-4"  data-aos-delay="800">
          <div className="features-item">
            <i className="bi bi-camera-video" style={{color: '#4233ff'}}></i>
            <h3><a href="" className="stretched-link">Pira Neve</a></h3>
          </div>
        </div>

        <div className="col-lg-3 col-md-4"  data-aos-delay="900">
          <div className="features-item">
            <i className="bi bi-command" style={{color: '#b2904f'}}></i>
            <h3><a href="" className="stretched-link">Dirada Pack</a></h3>
          </div>
        </div>

        <div className="col-lg-3 col-md-4"  data-aos-delay="1000">
          <div className="features-item">
            <i className="bi bi-dribbble"style={{color: '#b20969'}}></i>
            <h3><a href="" className="stretched-link">Moton Ideal</a></h3>
          </div>
        </div>

        <div className="col-lg-3 col-md-4"  data-aos-delay="1100">
          <div className="features-item">
            <i className="bi bi-activity" style={{color: '#ff5828'}} ></i>
            <h3><a href="" className="stretched-link">Verdo Park</a></h3>
          </div>
        </div>

        <div className="col-lg-3 col-md-4" data-aos-delay="1200">
          <div className="features-item">
            <i className="bi bi-brightness-high"style={{color: '#29cc61'}} ></i>
            <h3><a href="" className="stretched-link">Flavor Nivelanda</a></h3>
          </div>
        </div>

      </div>

    </div>

  </section>

  <section id="stats" className="stats section light-background">

    <div className="container"  data-aos-delay="100">

      <div className="row gy-4">

        <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
          <i className="bi bi-emoji-smile"></i>
          <div className="stats-item">
            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
            <p>Happy Clients</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
          <i className="bi bi-journal-richtext"></i>
          <div className="stats-item">
            <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
            <p>Projects</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
          <i className="bi bi-headset"></i>
          <div className="stats-item">
            <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
            <p>Hours Of Support</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
          <i className="bi bi-people"></i>
          <div className="stats-item">
            <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
            <p>Hard Workers</p>
          </div>
        </div>

      </div>

    </div>

  </section>

  
  <section id="details" className="details section">

 
    <div className="container section-title" >
      <h2>Details</h2>
      <div><span>Check Our</span> <span className="description-title">Details</span></div>
    </div>

    <div className="container">

      <div className="row gy-4 align-items-center features-item">
        <div className="col-md-5 d-flex align-items-center" data-aos-delay="100">
          <img src="assets/img/details-1.png" className="img-fluid" alt=""/>
        </div>
        <div className="col-md-7"data-aos-delay="100">
          <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <ul>
            <li><i className="bi bi-check"></i><span> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
            <li><i className="bi bi-check"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
            <li><i className="bi bi-check"></i> <span>Ullam est qui quos consequatur eos accusamus.</span></li>
          </ul>
        </div>
      </div>

      <div className="row gy-4 align-items-center features-item">
        <div className="col-md-5 order-1 order-md-2 d-flex align-items-center"  data-aos-delay="200">
          <img src="../assets/img/details-2.png" className="img-fluid" alt=""/>
        </div>
        <div className="col-md-7 order-2 order-md-1"  data-aos-delay="200">
          <h3>Corporis temporibus maiores provident</h3>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>

      <div className="row gy-4 align-items-center features-item">
        <div className="col-md-5 d-flex align-items-center" >
          <img src="../assets/img/details-3.png" className="img-fluid" alt=""/>
        </div>
        <div className="col-md-7" >
          <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
          <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
          <ul>
            <li><i className="bi bi-check"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
            <li><i className="bi bi-check"></i><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
            <li><i className="bi bi-check"></i> <span>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat</span>.</li>
          </ul>
        </div>
      </div>

      <div className="row gy-4 align-items-center features-item">
        <div className="col-md-5 order-1 order-md-2 d-flex align-items-center" >
          <img src="../assets/img/details-4.png" className="img-fluid" alt=""/>
        </div>
        <div className="col-md-7 order-2 order-md-1" >
          <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>

    </div>

  </section>

  <section id="contact" className="contact section">

    <div className="container section-title">
      <h2>Contact</h2>
      <div><span>Check Our</span> <span className="description-title">Contact</span></div>
    </div>

    <div className="container" data-aos-delay="100">

      <div className="row gy-4">

        <div className="col-lg-4">
          <div className="info-item d-flex"  data-aos-delay="200">
            <i className="bi bi-geo-alt flex-shrink-0"></i>
            <div>
              <h3>Address</h3>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>

          <div className="info-item d-flex" ata-aos-delay="300">
            <i className="bi bi-telephone flex-shrink-0"></i>
            <div>
              <h3>Call Us</h3>
              <p>+1 5589 55488 55</p>
            </div>
          </div>

          <div className="info-item d-flex"  data-aos-delay="400">
            <i className="bi bi-envelope flex-shrink-0"></i>
            <div>
              <h3>Email Us</h3>
              <p>info@example.com</p>
            </div>
          </div>

        </div>

        <div className="col-lg-8">
          <form action="forms/contact.php" method="post" className="php-email-form" data-aos-delay="200">
            <div className="row gy-4">

              <div className="col-md-6">
                <input type="text" name="name" className="form-control" placeholder="Your Name" required=""/>
              </div>

              <div className="col-md-6 ">
                <input type="email" className="form-control" name="email" placeholder="Your Email" required=""/>
              </div>

              <div className="col-md-12">
                <input type="text" className="form-control" name="subject" placeholder="Subject" required=""/>
              </div>

              <div className="col-md-12">
                <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
              </div>

              <div className="col-md-12 text-center">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>

                <button type="submit">Send Message</button>
              </div>

            </div>
          </form>
        </div>

      </div>

    </div>

  </section>

</main>

<footer id="footer" className="footer dark-background">

  <div className="container footer-top">
    <div className="row gy-4">
      <div className="col-lg-4 col-md-6 footer-about">
        <a href="index.html" className="logo d-flex align-items-center">
          <span className="sitename">HomeTaste</span>
        </a>
        <div className="footer-contact pt-3">
          <p>Tunis, Tunisie</p>
          <p className="mt-3"><strong>Phone:</strong> <span>+216 55 444 333</span></p>
          <p><strong>Email:</strong> <span>HomeTaste@gmail.com</span></p>
        </div>
        <div className="social-links d-flex mt-4">
          <a href=""><i className="bi bi-twitter-x"></i></a>
          <a href=""><i className="bi bi-facebook"></i></a>
          <a href=""><i className="bi bi-instagram"></i></a>
          <a href=""><i className="bi bi-linkedin"></i></a>
        </div>
      </div>

      <div className="col-lg-2 col-md-3 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Terms of service</a></li>
          <li><a href="#">Privacy policy</a></li>
        </ul>
      </div>

      <div className="col-lg-2 col-md-3 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><a href="#">Handmade Clothing Sales</a></li>
          <li><a href="#">Homemade Food Products</a></li>
          <li><a href="#">Marketplace for Creators</a></li>
          <li><a href="#">Order Management</a></li>
          <li><a href="#">Customer Support</a></li>
        </ul>
      </div>

      <div className="col-lg-4 col-md-12 footer-newsletter">
        <h4>Our Newsletter</h4>
        <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
        
      </div>

    </div>
  </div>

  <div className="container copyright text-center mt-4">
    <p>© <span>Copyright</span> <strong className="px-1 sitename">HomeTaste</strong> <span>All Rights Reserved</span></p>
  </div>
</footer>

<script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="../assets/vendor/php-email-form/validate.js"></script>
<script src="../assets/vendor/aos/aos.js"></script>
<script src="../assets/vendor/glightbox/js/glightbox.min.js"></script>
<script src="../assets/vendor/purecounter/purecounter_vanilla.js"></script>
<script src="../assets/vendor/swiper/swiper-bundle.min.js"></script>

<script src="../assets/js/main.js"></script>

    </div>
    
  );
}
