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
    let cog1 = document.getElementById("cog1");
    let cog2 = document.getElementById("cog2");
    let cog3 = document.getElementById("cog3");
    let cog4 = document.getElementById("cog4");
    let cog5 = document.getElementById("cog5");
    let cog6 = document.getElementById("cog6");
    let cog7 = document.getElementById("cog7");
    let cog8 = document.getElementById("cog8");
    let cog9 = document.getElementById("cog9");
    let cog10 = document.getElementById("cog10");
    let cog11 = document.getElementById("cog11");
    let cog12 = document.getElementById("cog12");
    let cog14 = document.getElementById("cog14");
    let cog15 = document.getElementById("cog15");
    let cog16 = document.getElementById("cog16");
    let cog17 = document.getElementById("cog17");
    cog1.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog2.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog3.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog4.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog5.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog6.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog7.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog8.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog9.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog10.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog11.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog12.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog14.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog15.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog16.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog17.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    let cog18 = document.getElementById("cog18");
    let cog19 = document.getElementById("cog19");
    let cog20 = document.getElementById("cog20");
    let cog21 = document.getElementById("cog21");
    let cog22 = document.getElementById("cog22");
    let cog23 = document.getElementById("cog23");
    let cog24 = document.getElementById("cog24");
    let cog25 = document.getElementById("cog25");
    let cog26 = document.getElementById("cog26");
    let cog27 = document.getElementById("cog27");
    let cog28 = document.getElementById("cog28");
    cog18.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog19.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog20.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog21.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog22.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog23.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog24.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog25.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog26.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog27.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog28.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";


    let cog31 = document.getElementById("cog31");
    let cog32 = document.getElementById("cog32");
    let cog33 = document.getElementById("cog33");
    let cog34 = document.getElementById("cog34");
    let cog35 = document.getElementById("cog35");
    let cog36 = document.getElementById("cog36");
    let cog37 = document.getElementById("cog37");
    let cog38 = document.getElementById("cog38");
    let cog39 = document.getElementById("cog39");
    let cog40 = document.getElementById("cog40");
    let cog41 = document.getElementById("cog41");
    let cog42 = document.getElementById("cog42");
    let cog44 = document.getElementById("cog44");
    let cog45 = document.getElementById("cog45");
    let cog46 = document.getElementById("cog46");
    let cog47 = document.getElementById("cog47");
    cog31.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog32.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog33.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog34.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog35.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog36.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog37.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog38.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog39.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog40.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog41.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog42.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog44.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog45.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog46.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog47.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    let cog48 = document.getElementById("cog48");
    let cog49 = document.getElementById("cog49");
    let cog50 = document.getElementById("cog50");
    let cog51 = document.getElementById("cog51");
    let cog52 = document.getElementById("cog52");
    let cog53 = document.getElementById("cog53");
    let cog54 = document.getElementById("cog54");
    let cog55 = document.getElementById("cog55");
    let cog56 = document.getElementById("cog56");
    let cog57 = document.getElementById("cog57");
    let cog58 = document.getElementById("cog58");
    cog48.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog49.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog50.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog51.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog52.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog53.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog54.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog55.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog56.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog57.style.transform = "rotate(" + window.pageYOffset/15 + "deg)";
    cog58.style.transform = "rotate(" + (-window.pageYOffset/15) + "deg)";
}

ReactDOM.render(<>
<cog1>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog1"/>
</cog1>
<cog2>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog2"/>
</cog2>
<cog3>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog3"/>
</cog3>
<cog4>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog4"/>
</cog4>
<cog5>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog5"/>
</cog5>
<cog6>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog6"/>
</cog6>
<cog7>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog7"/>
</cog7>
<cog8>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog8"/>
</cog8>
<cog9>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog9"/>
</cog9>
<cog10>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog10"/>
</cog10>
<cog11>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog11"/>
</cog11>
<cog12>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog12"/>
</cog12>
{/* <cog13>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog13"/>
</cog13> */}
<cog14>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog14"/>
</cog14>
<cog15>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog15"/>
</cog15>
<cog16>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog16"/>
</cog16>
<cog17>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog17"/>
</cog17>
<cog18>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog18"/>
</cog18>
<cog19>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog19"/>
</cog19>
<cog20>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog20"/>
</cog20>
<cog21>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog21"/>
</cog21>
<cog22>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog22"/>
</cog22>
<cog23>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog23"/>
</cog23>
<cog24>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog24"/>
</cog24>
<cog25>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog25"/>
</cog25>
<cog26>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog26"/>
</cog26>
<cog27>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog27"/>
</cog27>
<cog28>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog28"/>
</cog28>
{/* <cog29>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog29"/>
</cog29> */}
{/* <cog30>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog30"/>
</cog30> */}





<cog31>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog31"/>
</cog31>
<cog32>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog32"/>
</cog32>
<cog33>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog33"/>
</cog33>
<cog34>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog34"/>
</cog34>
<cog35>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog35"/>
</cog35>
<cog36>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog36"/>
</cog36>
<cog37>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog37"/>
</cog37>
<cog38>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog38"/>
</cog38>
<cog39>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog39"/>
</cog39>
<cog40>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog40"/>
</cog40>
<cog41>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog41"/>
</cog41>
<cog42>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog42"/>
</cog42>
{/* <cog43>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog43"/>
</cog43> */}
<cog44>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog44"/>
</cog44>
<cog45>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog45"/>
</cog45>
<cog46>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog46"/>
</cog46>
<cog47>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog47"/>
</cog47>
<cog48>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog48"/>
</cog48>
<cog49>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog49"/>
</cog49>
<cog50>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog50"/>
</cog50>
<cog51>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog51"/>
</cog51>
<cog52>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog52"/>
</cog52>
<cog53>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog53"/>
</cog53>
<cog54>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog54"/>
</cog54>
<cog55>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog55"/>
</cog55>
<cog56>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog56"/>
</cog56>
<cog57>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog57"/>
</cog57>
<cog58>
<img src={cog} style={{height:'5vh', opacity: '0.5'}} id="cog58"/>
</cog58>
    <App/>
    </>,
    document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
