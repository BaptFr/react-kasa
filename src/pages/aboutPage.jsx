import React from 'react';
import Banner from '../components/banner/banner.jsx';
import Collapse from '../components/collapse/collapse.jsx';
import aboutBannerPic from '../assets/about-banner-pic.jpg';
import data from '../datas/about.json'; 


function About() {
    const aboutBannerBrightness = '70%';
    return (
        <div>
            <Banner imageSrc={aboutBannerPic} showText={false} brightness={aboutBannerBrightness} />
            <div className='about__collapses'>
                <ul>
                    {data.map((collapseData, index) => (
                        <li key={index}>
                            <Collapse title={collapseData.title}>
                                <p>{collapseData.content}</p>
                            </Collapse>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


export default About;