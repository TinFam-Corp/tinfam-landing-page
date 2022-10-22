import React from 'react'
import sdg1 from '../../images/assets/SDGs/SDG goals_01.png'
import sdg2 from '../../images/assets/SDGs/SDG goals_-02.png'
import sdg9 from '../../images/assets/SDGs/SDG goals_09.png'
import sdg15 from '../../images/assets/SDGs/SDG goals_15.png'
import sdg17 from '../../images/assets/SDGs/SDG goals_17.jpg'


const SDGSection = () => {
    return (
        <section className="wpo-faq-section section-padding">
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-lg-6">
                        <div className="wpo-section-title default-bold-font">
                            <h3 style={{color: "#4f555a"}}>Mục tiêu phát triển bền vững của Liên Hợp Quốc</h3>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-2">
                            <img className="img-fluid"
                                 src={sdg1} alt=""/>
                        </div>
                        <div className="col-md-2">
                            <img className="img-fluid"
                                 src={sdg2} alt=""/>
                        </div>
                        <div className="col-md-2">
                            <img className="img-fluid"
                                 src={sdg9} alt=""/>
                        </div>
                
                        <div className="col-md-2">
                            <img className="img-fluid"
                                 src={sdg15} alt=""/>
                        </div>
                        <div className="col-md-2">
                            <img className="img-fluid" 
                                 src={sdg17} alt=""/>
                        </div>
                    </div>
                </div>

                
            </div>

        </section>
    )
}

export default SDGSection;