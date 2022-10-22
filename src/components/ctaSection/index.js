import React from 'react'
import { Link } from 'react-router-dom'


const CtaSection = (props) => {

    return (
        <div className={`wpo-cta-area ${props.ctClass}`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-cta-section">
                            <div className="wpo-cta-content">
                                <h2>{props.cTitle}</h2>
                                <p>Thu về lợi nhuận từ tiền rảnh rỗi đồng thời đóng góp cho sự phát triển của ngành nông nghiệp Việt Nam bằng cách giúp đỡ các dự án nông nghiệp thông qua TinFam.</p>
                                <Link to="/cause">Xem danh sách dự án</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CtaSection;