import React from "react";
import ReactDOM from "react-dom";
import "./scss/custom.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import cog from './editable-stuff/cog.png';
import  { ScrollRotate } from 'react-scroll-rotate';

window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let cog41 = document.getElementById("cog41");
    let cog42 = document.getElementById("cog42");
    let cog44 = document.getElementById("cog44");
    let cog45 = document.getElementById("cog45");
    let cog46 = document.getElementById("cog46");
    let cog47 = document.getElementById("cog47");
    cog41.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog42.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog44.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog45.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog46.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog47.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    let cog48 = document.getElementById("cog48");
    let cog49 = document.getElementById("cog49");
    let cog50 = document.getElementById("cog50");
    cog48.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog49.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog50.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    

    let cog11 = document.getElementById("cog11");
    let cog12 = document.getElementById("cog12");
    let cog14 = document.getElementById("cog14");
    let cog15 = document.getElementById("cog15");
    let cog16 = document.getElementById("cog16");
    let cog17 = document.getElementById("cog17");
    cog11.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog12.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog14.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog15.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog16.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog17.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    let cog18 = document.getElementById("cog18");
    let cog19 = document.getElementById("cog19");
    let cog20 = document.getElementById("cog20");
    cog18.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog19.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog20.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
}

ReactDOM.render(<>
<cog41>
<img src={cog} style={{height:'5vh', opacity: '0.8'}} id="cog41"/>
</cog41>
<cog42>
<img src={cog} style={{height:'5vh', opacity: '0.8'}} id="cog42"/>
</cog42>
<cog44>
<img src={cog} style={{height:'5vh', opacity: '0.8'}} id="cog44"/>
</cog44>
<cog45>
<img src={cog} style={{height:'5vh', opacity: '0.8'}} id="cog45"/>
</cog45>
<cog46>
<img src={cog} style={{height:'5vh', opacity: '0.8'}} id="cog46"/>
</cog46>
<cog47>
<img src={cog} style={{height:'5vh', opacity: '0.8'}} id="cog47"/>
</cog47>
<cog48>
<img src={cog} style={{height:'5vh', opacity: '0.8'}} id="cog48"/>
</cog48>
<cog49>
<img src={cog} style={{height:'5vh', opacity: '0.8'}} id="cog49"/>
</cog49>
<cog50>
<img src={cog} style={{height:'5vh', opacity: '0.8'}} id="cog50"/>
</cog50>



<cog11>
<img src={cog} style={{height:'5vh', opacity: '0.8'}} id="cog11"/>
</cog11>
<cog12>
<img src={cog} style={{height:'5vh', opacity: '0.8'}} id="cog12"/>
</cog12>
<cog14>
<img src={cog} style={{height:'5vh', opacity: '0.8'}} id="cog14"/>
</cog14>
<cog15>
<img src={cog} style={{height:'5vh', opacity: '0.8'}} id="cog15"/>
</cog15>
<cog16>
<img src={cog} style={{height:'5vh', opacity: '0.8'}} id="cog16"/>
</cog16>
<cog17>
<img src={cog} style={{height:'5vh', opacity: '0.8'}} id="cog17"/>
</cog17>
<cog18>
<img src={cog} style={{height:'5vh', opacity: '0.8'}} id="cog18"/>
</cog18>
<cog19>
<img src={cog} style={{height:'5vh', opacity: '0.8'}} id="cog19"/>
</cog19>
<cog20>
<img src={cog} style={{height:'5vh', opacity: '0.8'}} id="cog20"/>
</cog20>
    <App/>
    </>,
    document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
