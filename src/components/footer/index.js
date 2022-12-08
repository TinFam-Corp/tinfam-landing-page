import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/assets/Logo 7.png'
import Projects from '../../api/projects'

const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="wpo-site-footer">
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <img src={Logo} alt=""/>
                            </div>
                            <p>TinFam - Gọi Vốn Cộng Đồng cho Nông Nghiệp</p>
                            <ul>
                                <li>
                                    <Link to="/">
                                        <i className="ti-facebook"></i>
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link to="/">
                                        <i className="ti-instagram"></i>
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Quick Links</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/about">Về TinFam</Link></li>
                                <li><Link onClick={ClickHandler} to="/cause">Danh Sách Dự Án</Link></li>
                                <li><a href="https://forms.gle/ggVsdwyXqxzuzYHp6">Liên hệ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Thông Tin Liên Hệ</h3>
                            </div>
                            <div className="contact-ft">
                                <p>Would you have any enquiries, please feel free to contact us!</p>
                                <ul>
                                    <li><i className="fi flaticon-mail"></i>tinfam.contact@gmail.com</li>
                                    <li><i className="fi flaticon-phone-call"></i>0382780002 - Bảo Trần</li>
                                    <li><i className="fi flaticon-location"></i>Gia Lâm, Hà Nội, Việt Nam</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright"> &copy; 2022 TinFam, Inc. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;