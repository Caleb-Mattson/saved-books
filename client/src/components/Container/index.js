import React from "react";
import "./style.css";

export default {
    Container: function(props){
        return <div className="container"> {props.children} </div>;
    }
}