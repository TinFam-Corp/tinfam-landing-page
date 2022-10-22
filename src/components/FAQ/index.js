import React from 'react'
import faqs from '../../api/faq.js'

const FAQ =() => {
    return (
        <section className="wpo-faq-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title default-bold-font">
                            <h2>Câu hỏi thường gặp</h2>
                        </div>
                        <div className="wpo-section-title">
                            <h5 style={{color: "#4f555a"}}>Làm sao để đầu tư trên TinFam?</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ad asperiores consectetur dignissimos error illum obcaecati provident quasi reprehenderit voluptates?</p>
                        </div>
                        <div className="wpo-section-title">
                            <h5 style={{color: "#4f555a"}}>Làm sao tôi có thể đảm bảo các chủ dự án đang sử dụng tiền của tôi đúng cách?</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ad asperiores consectetur dignissimos error illum obcaecati provident quasi reprehenderit voluptates?</p>
                        </div>
                        <div className="wpo-section-title">
                            <h5 style={{color: "#4f555a"}}>Tôi sẽ nhận lại tiền đầu tư như thế nào?</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ad asperiores consectetur dignissimos error illum obcaecati provident quasi reprehenderit voluptates?</p>
                        </div>
                    </div>
                </div>
                
                
                
                {/*<div className="wpo-faq-items">*/}
                {/*    <div className="col">*/}
                {/*        {faqs.slice(0, 3).map((service, sitem) => (*/}
                {/*            <div className="col col-xl-3 col-lg-6 col-sm-6 col-12" key={sitem}>*/}
                {/*                <div className="wpo-features-item">*/}
                {/*                    <div className="wpo-features-text">*/}
                {/*                        <h2>{service.title}</h2>*/}
                {/*                        <p>{service.description}</p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </section>
    )
}

export default FAQ;