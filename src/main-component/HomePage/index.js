import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Service from '../../components/Service'
import About from '../../components/about'
import CauseSection from '../../components/CauseSection'
import TeamSection from '../../components/TeamSection'
import CtaSection from '../../components/ctaSection'
import BlogSection from '../../components/BlogSection'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo.png'
import SDGSection from "../../components/SDGSection";
import FAQ from '../../components/FAQ'


const HomePage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <About/>
            <CtaSection cTitle={'Tham gia vào sự phát triển bền vững của nông nghiệp Việt Nam chỉ với từ 100.000 VND'}/>
            <Service Fclass={'wpo-features-section'} vclassClass={'v1'}/>
            <SDGSection/>
            <CauseSection/>
            <TeamSection/>
            <FAQ/>
            <BlogSection/>
            <Scrollbar/>
            <Footer/>
        </Fragment>
    )
};
export default HomePage;