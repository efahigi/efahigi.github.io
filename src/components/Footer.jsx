import { Link } from 'react-router-dom';
import { a } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className='myProjectFooter' sticky='bottom' >
            <div className='container'>
                <div className='rowContainer'>
                    <div className='footCol1' xs={{ size: 4, offset: 1 }} sm='2'>
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
                    <div className = 'footCol2'  xs='6' sm='3'>
                        <h5>Social</h5>
                        <a className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/'
                        > 
                        <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                        <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                        className='btn btn-social-icon btn-twitter'
                            href='http://twitter.com/'
                        >
                        <i className='fa fa-twitter' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-google'
                            href='http://youtube.com/'
                        >
                            <i className='fa fa-youtube' />
                        </a>
                    </div>
                    <div className = 'footCol3' sm='4'>
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
            </div>
        </footer>
    );
};

export default Footer;
