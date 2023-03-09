import React from "react";
import TechnologiesDescription from "./technologiesDescription";
import {findDOMNode} from "react-dom";

const $ = require('jquery');
function Details(props) {
    return (
        <div className="progressBarParent" data-techn-name={props.name} onClick={ () => {
            var element = document.getElementById(props.name);
            $(".technology-desc").each(function (){
                $(this).hide();
                $(element).data('is-hidden', true);
            })
            if ( $(element).data('is-hidden') == true ) {
                $(element).show();
                $(element).data('is-hidden', false);
            }
            var url = new URL(window.location.href);
            url.hash = "technologies";
            window.location.href = url.href;

        }}>
            <p><div className={"nameWithLogo"}><img src={props.source} alt={props.name + " logo"} className="icon"/><h3 className={"my-1"}>{props.name}</h3></div></p>
            <div className="progressBar">
                <div className="progress" style={{width: props.progress}}><span className="progress-percent">{props.progress}</span></div>
            </div>
        </div>
    );
}

class TechnologiesHeader extends React.Component {
    constructor(props) {
        super(props);
        this.values = {
            name: "",
            source: "#",
            progress: 0,
        }
    };

    renderBar(name, source, progress){
        return (<Details
            name={name}
            source={source}
            progress={progress+"%"}
        />);
    }

    render() {
        return (
            <div className="technologies paragraph flex-row row justify-content-around">
                <h1>My strength in technologies:</h1>
                <span className="text-center mb-4">this is only to compare my abilities, not my actual level</span>
                <div className="flex-column col-xl-3 col-sm-5 col-12">
                    <h2>Programming languages</h2><br/>
                    {this.renderBar("php", "/build/images/PHP.png", 70)}

                    {this.renderBar("javascript", "/build/images/JS.png", 65)}

                    {this.renderBar("C#", "/build/images/csharp.png", 35)}
                </div>
                <div className="flex-column col-xl-3 col-sm-5 col-12 m-sm-0 m-5">
                    <h2>Frameworks and DataBases</h2>
                    {this.renderBar("symfony", "/build/images/Symfony.png", 70)}

                    {this.renderBar("reactjs", "/build/images/ReactJS.png", 30)}

                    {this.renderBar("mysql", "/build/images/mysql.png", 75)}

                    {this.renderBar("zend", "/build/images/zend.png", 30)}
                </div>
                <div className="flex-column col-xl-3 col-sm-6 col-12 m-sm-0 m-5">
                    <h2>Other tools</h2>

                    {this.renderBar("html5", "/build/images/html.png", 80)}

                    {this.renderBar("css", "/build/images/css.png", 65)}

                    {this.renderBar("unity", "/build/images/unity.png", 23)}

                    {this.renderBar("bootstrap", "/build/images/bootstrap.png", 85)}
                </div>
            </div>
        );
    }
}

export default TechnologiesHeader;