import React from 'react';
import ReactDOM from 'react-dom/client';

function Bar(props) {
    return (
    <div>
        <p><img src={props.source} alt={props.name + " logo"} className=""/><h3>{props.name}</h3></p>
        <div className="progressBar">
            <div className="progress" style={{width: props.progress}}>&nbsp;</div>
        </div>
    </div>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.values = {
            name: "",
            source: "#",
            progress: 0,
        }
    };

    renderBar(name, source, progress){
        return (<Bar
            name={name}
            source={source}
            progress={progress+"%"}
        />);
    }

    render() { return (
        <div className="technologies paragraph">
            <h1 className="d-flex flex-row">My strength in technologies:</h1>
            <div className="flex-row justify-content-center">
                <div className="flex-column">
                    <h2>Programming languages</h2><br/>
                    {this.renderBar("PHP", "", 70)}
                    <br/><br/>

                    {this.renderBar("JavaScript", "../../myPortfolio/assets/images/JS.png", 70)}
                    <br/><br/>

                    {this.renderBar("VBA", "../../myPortfolio/assets/images/VB.png", 35)}
                    <br/><br/>
                </div>
                <div className="flex-column">
                    <h2>Frameworks and DataBases</h2><br/>
                    {this.renderBar("Symfony", "../../myPortfolio/assets/images/Symfony.png", 70)}
                    <br/><br/>

                    {this.renderBar("ReactJS", "./../myPortfolio/assets/images/ReactJS.png", 30)}
                    <br/><br/>

                    {this.renderBar("MariaDB / SQL Lite", "../../myPortfolio/assets/images/MariaDB.png", 75)}
                    <br/><br/>

                    {this.renderBar("Zend", "", 30)}
                    <br/><br/>
                </div>
                <div className="flex-column">
                    <h2>Other tools</h2><br/>

                    {this.renderBar("HTML5", "../../myPortfolio/assets/images/HTML5.png", 80)}
                    <br/><br/>

                    {this.renderBar("CSS3 / SASS", "../../myPortfolio/assets/images/HTML5.png", 65)}
                    <br/><br/>
                </div>
            </div>
        </div>
    );
}}

class Game extends React.Component {
    render() {
        return (
            <Board />
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("technologies"));
root.render(<Game />);
