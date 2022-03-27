import Link from "next/link";

const Footer = () => {
    return(
<>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"/>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous"/>

        <footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>Hyderabad</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>1234567890</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>mail@info.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                       
                                    <h1 style={{color: 'white'}}> Sai Baba</h1>

                               
                            </div>
                            <div className="footer-text">
                                <p>We will be providing animations of Sai Sacharitra and also pooja, sai devotee&apos;s experiences in their life, through this channel.  You people supported Saibaba919 Instagram Page a lot. With that encouragement, a new channel on Youtube has just taken its birth. Hope all of us stay peaceful and happy with Saibaba&apos;s mercy.OM SAI RAM. Through this channel definitely, you will experience a divine moment.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a style={{cursor:'pointer'}}><Link href="#"><i className="fab fa-facebook-f facebook"></i></Link></a>
                              <a style={{cursor:'pointer'}}> <Link href="https://www.instagram.com/saibaba919/"><i className="fab fa-instagram instagram"></i></Link></a> 
                               <a style={{cursor:'pointer'}}><Link href="https://www.youtube.com/c/SaiBaba919"><i className="fab fa-youtube youtube-bg"></i></Link></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><Link href="#">Home</Link></li>
                                <li ><Link href="#">Sai Charitra Audios</Link></li>
                                <li><Link href="#">Sai Charitra Videos</Link></li>
                                <li><Link href="#">Miracle Stories</Link></li>
                                <li><Link href="#">Share Your stories</Link></li>
                                <li><Link href="#">About us</Link></li>
                                <li><Link href="#">Follow us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don&apos;t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><i className="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2021, All Right Reserved <a href="#">Sahana</a></p>
                        </div>
                    </div>
                    {/* <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </footer>
    </>
    )
}

export default Footer;