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
                        "Also I can use PHP in many environments like Symfony, Zend, or Wordpress. " +
                        "I'm also very familiar with using composer. " +
                        "My code in PHP is really clean with many data validators, comments and functions usage. "
                    )
                }
                {
                    this.renderDescription("JavaScript",
                        "This language is my second most known language. " +
                        "I'm familiar with fetching data from APIs (fetch and AJAX methods)," +
                        " processing it and then displaying data in the appropriate way. " +
                        "I have been using JS mostly with jquery and reactJS, for making websites more interactive. "
                    )
                }
                {
                    this.renderDescription("VBA",
                        "More like fun fact, because I was using it mostly for automating data processing in Excel. " +
                        "I was using VBA to pass an IT mature exam (actually fun and effective way to get good grade). "
                    )
                }
                {
                    this.renderDescription("Symfony",
                        "My another strong argument, because Symfony is for me the most known Framework for now. " +
                        "I have deep knowledge about Symfony environment, entities, controllers, and entire MVC model. "
                    )
                }
                {
                    this.renderDescription("ReactJS",
                    "Actually I'm learning how to use this framework properly. " +
                    "I have good basics of JS and objective programming and for now i just need some good practise. " +
                    "I understand components model of the framework and I can write basic components. "
                    )
                }
                {
                    this.renderDescription("MariaDB",
                        "For me MariaDB along with MySQL are engines, that I'm familiar since I started my CS adventure. " +
                        "I have very good basics, and understanding of what is going on inside of these database engines. "
                    )
                }
                {
                    this.renderDescription("Zend",
                        "This is the framework i was working with in my first job as Fullstack Dev. " +
                        "I've never made an actual controller, but I became familiar with Zend's MVC model. " +
                        "Mostly I was dealing with CSS, JS and adjusting websites for WCAG purposes. " +
                        "I was doing the same thing for Wordpress environments, so I also became familiar with Wordpress. "
                    )
                }
                {
                    this.renderDescription("HTML5",
                        "Actually I have much higher than common understanding and knowledge about html. " +
                        "I know semantic tags, aria properties and basic rules of good HTML code, " +
                        "that is accessible for people with disabilities. "
                    )
                }
                {
                    this.renderDescription("CSS",
                        "I'm pretty common on CSS, but I already know how to use it with JS in an effective way. " +
                        "I also have good sense of style, so I'm able to work and exchange my experience with designers. " +
                        "Also I know how to use CSS to make website accessible for all users. "
                    )
                }
                {
                    this.renderDescription("Bootstrap",
                        "As far as I know CSS I just love using Bootstrap in many possible ways. " +
                        "It helps me with positioning and RWD with ready to use classes, which I'm using in a very effective way. "
                    )
                }
                {
                    this.renderDescription("Unity",
                        "I'm not yet a game developer, but I made a first steps into coding games. " +
                        "I participated in game jams, where I made 2 games with my team in a small amount of time. " +
                        "Making this games, showed me how to games are made and how to work with people effectively. " +
                        "I was also trying myself with Unreal Engine, " +
                        "but only thing I've done is designing map and putting components together."
                    )
                }
            </div>
        );
    }
}



export default Technologies;