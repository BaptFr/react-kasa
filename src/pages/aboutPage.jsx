import React from 'react';
import Banner from '../components/banner.jsx';
import Collapse from '../components/collapse.jsx';
import aboutBannerPic from '../assets/about-banner-pic.jpg';
import data from '../datas/about.json'; 


function About() {
  return (
      <div>
          <Banner imageSrc={aboutBannerPic} showText={false}/>
          <div className='about-collapses'>
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