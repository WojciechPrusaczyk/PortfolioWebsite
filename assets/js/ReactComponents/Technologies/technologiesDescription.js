import React from "react";
import ReactHtmlParser from 'react-html-parser';

function Description(props)
{
    if ( props.hidden)
    {
        return (
            <div className="technology-descripton">
                <h2>{props.name}</h2>
                <p>{ ReactHtmlParser ( props.description ) }</p>
            </div>
        );
    } else {
        return null;
    }
}


class Technologies extends React.Component{

    constructor(props) {
        super(props);
        this.values = {
            name: "",
            description: "",
            hidden: true,
        }
    }

    renderDescription(name, description){
        return (
            <Description
                name={name}
                description={description}
            /> );
    }

    render() {
        return (
            <div>
                {
                    this.renderDescription("PHP",
                        "Actually PHP is my strongest argument. " +
                        "I have a good understanding of objective programming which really helps in PHP environment. " +
                        "I can fetch data with parsers and process it in many ways. " +
                        "Also I can use PHP in many environments (depends on ) like Symfony, Zend, or Wordpress." +
                        "I'm also very familiar with using composer."
                    )
                }
                {this.renderDescription("JavaScript", "Opis")}
                {this.renderDescription("VBA", "Opis")}
                {this.renderDescription("Symfony", "Opis")}
                {this.renderDescription("ReactJS", "Opis")}
                {this.renderDescription("MariaDB", "Opis")}
                {this.renderDescription("Zend", "Opis")}
                {this.renderDescription("HTML5", "Opis")}
                {this.renderDescription("CSS", "Opis")}
                {this.renderDescription("Bootstrap", "Opis")}
                {this.renderDescription("WordPress", "Opis")}
            </div>
        );
    }
}



export default Technologies;