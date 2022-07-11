import React from "react";

const ChartBar = props => {

    let barFillHeight = '0%';

    if(props.maxValue > 0){
        barFillHeight = Math.Round((props.value/props.maxValue)*100)+'%';
    }

    return <div className="chartBar">
        <div className="chartBar__inner">
            <div className="chartBar_fill" style={{height: barFillHeight}}></div>
        </div>
        <div className="chartBar__label">{props.label}</div>

    </div>
}

export default ChartBar;