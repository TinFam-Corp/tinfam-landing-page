import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import VideoSec from '../../components/VideoSec';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo.png'
import Service from '../../components/Service';
import FunFact from '../../components/FunFact';
import TeamSection from '../../components/TeamSection';
import FAQ from '../../components/FAQ'



const AboutPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Về TinFam abcdef'} pagesub={'About'}/> 
            <FAQ/>
            <Service Fclass={'wpo-features-section'} vclassClass={'v1'}/>
            <TeamSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutPage;
