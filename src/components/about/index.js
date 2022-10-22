import React from 'react'
import {Link} from 'react-router-dom'
import abimg from '../../images/about.jpg'
import farm from '../../images/assets/vertical-farm.jpeg'

const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <span>Về TinFam</span>
                            <h2>Thúc đẩy phát triển nông nghiệp Việt Nam qua gọi vốn cộng đồng</h2>
                            <p>Các chủ doanh nghiệp/trang trại luôn luôn phải chịu những rủi ro về thời tiết thất thường hay biến động giá cả thị trường.
                                Ngoài ra, rất nhiều những doanh nghiệp nông nghiệp ngoài kia đang ngày ngày phải lo lắng về vấn đề tài chính khi mà họ không tiếp cận được nguồn vay nhà nước.</p>
                            
                            <p>Với TinFam, sự hỗ trợ của bạn, dù nhiều hay ít, cũng có thể tạo ra sự thay đổi đối với nông nghiệp Việt Nam.</p>
                            {/*<h3 style={{color: "#4f555a"}}>What do we offer farms?</h3>*/}
                            {/*<ul>*/}
                            {/*    <li>The standard chunk of Lorem Ipsum used since.</li>*/}
                            {/*    <li>Randomised words which don't look even slightly believable.</li>*/}
                            {/*    <li>Making this the first true generator on the Internet.</li>*/}
                            {/*</ul>*/}
                            <Link onClick={ClickHandler} className="theme-btn" to="/about">Tìm Hiểu Thêm</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <img src={farm} alt=""/>
                               
                                {/*<div className="wpo-total-raised">*/}
                                {/*    <div className="wpo-total-raised-wrap">*/}
                                {/*        <div className="wpo-total-raised-icon">*/}
                                {/*            <i className="fi flaticon-wallet-filled-money-tool"></i>*/}
                                {/*        </div>*/}
                                {/*        <div className="wpo-total-raised-text">*/}
                                {/*            <ul>*/}
                                {/*                <li>Tổng số dự án<span>Coming Soon</span></li>*/}
                                {/*            </ul>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default About;