import React from "react";
import Collapse from './collapse.jsx';
import data from '../datas/about.json';

function AboutCollapses () {
    return (
        <ul className='about-collapses-container'>
            {data.map((collapse, index) => (
                <li key={index}>
                    <Collapse title={collapse.title} content={collapse.content} />
                </li>
            ))}
        </ul>
    )
}

export default AboutCollapses