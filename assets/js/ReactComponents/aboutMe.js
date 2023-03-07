import React from 'react';
import ReactDOM from "react-dom/client";

class AboutMe extends React.Component
{
    constructor(props) {
        super(props);
        this.values = {
            name: props.name,
            content: props.content,
        }
    }

    renderAsHtml(data)
    {
        return {__html: data.toString()}
    }

    render() {
         return (
             <div className="about-me-component">
                 <h2 className="about-me-component-header">{this.props.name}</h2>
                 <p  className="about-me-component-content" dangerouslySetInnerHTML={this.renderAsHtml(this.props.content)} />
             </div>
         );
    }
}

class AboutMeRoot extends React.Component{

    renderComponent(name, content)
    {
        return (<AboutMe name={name} content={content}/>);
    }

    render() {
        return (
            <div className="about-me-root about-me">
                {this.renderComponent("College",
                    "For now I'm studying <b>Computer Science</b> on Kazimierz Wielki University in <b>Bydgoszcz</b>." +
                    "I'm going to finish College with Engineer degree in June 2025."
                )}
                {this.renderComponent("Experience",
                    "I was working in Logonet for the eight months as a <b>Fullstack developer</b>." +
                    "I was using <b>symfony</b>, <b>twig</b>, <b>sass</b> and <b>jquery</b>, to write websites based on company's cms. " +
                    "Through the eight months I made full by myself: " +
                    "Questionnaires system, additional modules to present data on main page and website based on graphic project(<a href='https://marbefes.eu'>marbefes.eu</a>)"
                )}
                {this.renderComponent("WCAG",
                    "Through my career in the first company I was working in " +
                    "I was taught how to make websites accessible for everyone." +
                    "WCAG is a set of rules to create websites that present it's content in a good way for all users." +
                    "It's mostly about good html code, font and tools like contrast version of website."
                )}
                {this.renderComponent("Hobbies",
                "In my free time I mostly play video games like From software games, RPG's, MOBA, or FPS's. " +
                    "I'm always curious about game development process and how they look from the back." +
                    "I also love swimming which helps me to calm myself." +
                    "Also Astronomy is my hobby. I just love stars, space and everything around it."
                )}
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("about-me"));
root.render(<AboutMeRoot />);
