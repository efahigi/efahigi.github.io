import { Link } from 'react-router-dom';
import { a } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/fontawesome-free";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
    
    return (
        <footer className='myProjectFooter' >
                <div className='footContainer'>
                    <div className='footLinkContainer'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About Me</Link>
                            </li>
                            <li>
                                <Link to='/Resume'>My Resume</Link>
                            </li>
                            <li>
                                <Link to='/Project'>My Project</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className = 'footSocialContainer'  >
                        <div className='title'>
                        <h5>Social Media</h5>
                        </div>

                        <div className='socialInfo'>           
                         <a href=' http://instagram.com/com'className='instagram'>
                        <i className='fa fa-instagram' />
                        </a>{' '}
                          
                       
                        <a href='http://www.facebook.com'className='facebook'>
                        <i className='fa fa-facebook' />
                        </a>{' '}

                        <a href='http://twitter.com/'className='twitter'>                      
                        <i className='fa fa-twitter' />
                        </a>{' '}
                        <a href='http://youtube.com/' className='youtube'>
                            <i className='faYoutube' />
                            
                        </a>{' '}
                        <a href='http://www.linkedin.com/'className='linkedin'>
                        <i className='fa fa-youtube' />
                        </a> {' '} 
                        </div>  
                    </div> 
                    <div className = 'footContactContainer' >
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+14694076748'
                        >
                            <i className='fa fa-phone' /> 1-469-407-6748 </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:efawaken22005@gmail.com'
                        >
                            <i className='fa fa-envelope-o' /> efawaken22005@gmail.com
                        </a>
                    </div>
                </div>
         
        </footer>
    );
};

export default Footer;
