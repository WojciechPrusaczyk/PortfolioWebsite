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
                 <h2>{this.props.name}</h2>
                 <p dangerouslySetInnerHTML={this.renderAsHtml(this.props.content)} />
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
                {this.renderComponent("")}
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("about-me"));
root.render(<AboutMeRoot />);
