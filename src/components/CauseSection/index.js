import React from 'react'
import {Link} from 'react-router-dom'
import Causes from '../../api/cause'

const CauseSection = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(

        <div className={`wpo-campaign-area section-padding ${props.CmClass}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="wpo-section-title">
                            <h2 className="default-bold-font">Đầu tư cùng TinFam ngay hôm nay vì sự phát triển bền vững của Việt Nam</h2>
                            <p>Sự hỗ trợ của bạn dù chỉ với từ 100.000 VND nhưng cùng nhau chúng ta có thể tạo nên sự khác biệt, hỗ trợ thúc đẩy nền nông nghiệp Việt Nam, và góp sức vì một tương lai chúng ta đều được sử dụng các sản phẩm nông nghiệp chất lượng cao với giá cả phải chăng.</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-campaign-wrap">
                    <div className="row">
                    {Causes.slice(0, 3).map((Cause, citem) => (
                        <div className="col-lg-4 col-md-6 col-12" key={citem}>
                            {/*thêm css để giới hạn title của project (title dài quá thì tự giảm size chữ? để cố định size của box)*/}
                            <div className="wpo-campaign-single">
                                <div className="wpo-campaign-item">
                                    <div className="wpo-campaign-img">
                                        <img src={Cause.cImg} alt=""/>
                                        <span className="thumb">{Cause.thumb}</span>
                                    </div>
                                    <div className="wpo-campaign-content">
                                        <div className="wpo-campaign-text-top">
                                            <h2><Link onClick={ClickHandler} to={`/cause-single/${Cause.id}`}>{Cause.cTitle}</Link></h2>
                                            <div className="progress-section">
                                                <div className="process">
                                                    <div className="progress">
                                                        <div className="progress-bar" style={{width: `${Cause.process}%`}}>
                                                            <div className="progress-value"><span>{Cause.process}</span>%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul>
                                                <li><span>Mục Tiêu:</span> ${Cause.Goal}</li>
                                                <li><span>Vốn Đã Nhận:</span> ${Cause.Raised}</li>
                                            </ul>
                                            <div className="campaign-btn">
                                                <ul>
                                                    <li>
                                                        <span><img src={Cause.authorImg} alt=""/></span>
                                                        <span><Link onClick={ClickHandler} to={`/cause-single/${Cause.id}`}>{Cause.authorName}</Link></span>
                                                    </li>
                                                    <li><Link onClick={ClickHandler} className="e-btn" to={`/cause-single/${Cause.id}`}>Đầu Tư Ngay</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CauseSection;