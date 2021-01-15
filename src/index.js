import React from "react";
import ReactDOM from "react-dom";
import "./scss/custom.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import cog from './editable-stuff/cog.png';

window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let cog11 = document.getElementById("cog11");
    let cog12 = document.getElementById("cog12");
    let cog13 = document.getElementById("cog13");
    let cog14 = document.getElementById("cog14");
    let cog15 = document.getElementById("cog15");
    cog11.style.transform = "translateY(" + window.pageYOffset/100 + "vh)"+ " "+ "rotate(" + window.pageYOffset/15 + "deg)";
    cog12.style.transform = "translateY(" + window.pageYOffset/100 + "vh)"+ " "+ "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog13.style.transform = "translateY(" + window.pageYOffset/100 + "vh)"+ " "+ "rotate(" + window.pageYOffset/15 + "deg)";
    cog14.style.transform = "translateY(" + window.pageYOffset/100 + "vh)"+ " "+ "rotate(" + (-window.pageYOffset/15) + "deg)";
    cog15.style.transform = "translateY(" + window.pageYOffset/100 + "vh)"+ " "+ "rotate(" + window.pageYOffset/15 + "deg)";
}

ReactDOM.render(<>

<cog11>
<img src={cog} style={{height:'5vh', opacity: '0.8'}} id="cog11"/>
</cog11>
<cog12>
<img src={cog} style={{height:'5vh', opacity: '0.8'}} id="cog12"/>
</cog12>
<cog13>
<img src={cog} style={{height:'5vh', opacity: '0.8'}} id="cog13"/>
</cog13>
<cog14>
<img src={cog} style={{height:'5vh', opacity: '0.8'}} id="cog14"/>
</cog14>
<cog15>
<img src={cog} style={{height:'5vh', opacity: '0.8'}} id="cog15"/>
</cog15>
    <App/>
    </>,
    document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
