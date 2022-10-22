import React from 'react'
import {Link} from 'react-router-dom'
import Services from '../../api/service'
import Logo from "../../images/logo2.png";

const Service = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(

        <section className={`${props.Fclass} section-padding  ${props.vclassClass}`}>
            <div className="container">
                <div className="row justify-content-center default-spacer default-bold-font">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                            <span>Tại sao bạn nên đầu tư vào nông nghiệp?</span>
                        </div>
                    </div>
                </div>
                <div className="wpo-service-items">
                    <div className="row justify-content-center">
                        {Services.slice(0, 3).map((service, sitem) => (
                            <div className="col col-xl-3 col-lg-6 col-sm-6 col-12" key={sitem}>
                                <div className="wpo-features-item">
                                    <div className="wpo-features-icon">
                                        <div className="icon">
                                            <i className={`fi  ${service.fIcon1}`}></i>
                                        </div>
                                    </div>
                                    <div className="wpo-features-text">
                                        <h2>{service.title}</h2>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Service;