import useState from 'react'
import React from 'react';
import Wordpress from '../Components/wordpress.js'
import Shopify from '../Components/shopify.js'
import Custom from '../Components/Custom.js'
import Fe from '../Components/Fe.js'
import Pos from '../Components/Pos.js'
import Game from '../Components/Game.js'

function MyProjects(props) {
    const [ShowResults, setShowResults] = React.useState(Wordpress)
    document.querySelectorAll('h3').forEach((clickon) => {
        clickon.addEventListener('click', (e) => {
           var valueof = e.target.id;
            setShowResults(valueof)
        })
    })
    return (
        <div className="projectsection">
            <div className="col13">
            
            <h2> Websites </h2>
                <h3 id="Wordpress"> Wordpress </h3>
                <h3 id="shopify"> Shopify </h3>
                <h3 id="custom"> Custom (PhP, JS , HTML, CSS) </h3>
                <h3 id="FE"> Frontend Using (ReactJS) </h3>
            <h2> Softwares & Applications</h2>
                <h3 id="pos">PoS System</h3>
                <h3 id="games">Games Using JS</h3>
            </div>
            <div className="col23">
                <div id="showportfolio">{ShowResults}</div>
            </div>
        </div>
            )

}
export default MyProjects;