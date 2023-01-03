import React from 'react';
import ReactDOM from 'react-dom/client';

let gitHubUsername = "WojciechPrusaczyk";
let messageLength = 35;

let githubData = {
    status: "Loading...",
    username: "",
    bio: "",
    imgUrl: "",
    profileLink: "",
    work: "Nowhere",
    location: "Nowhere",
    lastUpdate: "2021-07-09 10:32:34",
    commitDate: "",
    commitMessage: "",
}

function Bar(props) {
    return (
    <div>
        <p><div className={"nameWithLogo"}><img src={props.source} alt={props.name + " logo"} className=""/><h3 className={"my-1"}>{props.name}</h3></div></p>
        <div className="progressBar">
            <div className="progress" style={{width: props.progress}}>&nbsp;</div>
        </div>
    </div>
    );
}

class Technologies extends React.Component {
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
            <div className="technologies paragraph flex-row row justify-content-around">
                <div className="flex-column col-xl-3 col-sm-5 col-12">
                    <h2>Programming languages</h2><br/>
                    {this.renderBar("PHP", "/build/images/PHP.png", 70)}
                    <br/><br/>

                    {this.renderBar("JavaScript", "/build/images/JS.png", 70)}
                    <br/><br/>

                    {this.renderBar("VBA", "/build/images/VB.png", 35)}
                    <br/><br/>
                </div>
                <div className="flex-column col-xl-3 col-sm-5 col-12 m-sm-0 m-5">
                    <h2>Frameworks and DataBases</h2><br/>
                    {this.renderBar("Symfony", "/build/images/Symfony.png", 70)}
                    <br/><br/>

                    {this.renderBar("ReactJS", "/build/images/ReactJS.png", 30)}
                    <br/><br/>

                    {this.renderBar("MariaDB / SQL Lite", "/build/images/MariaDB.png", 75)}
                    <br/><br/>

                    {this.renderBar("Zend", "", 30)}
                    <br/><br/>
                </div>
                <div className="flex-column col-xl-3 col-sm-6 col-12 m-sm-0 m-5">
                    <h2>Other tools</h2><br/>

                    {this.renderBar("HTML5", "/build/images/HTML5.png", 80)}
                    <br/><br/>

                    {this.renderBar("CSS3 / SASS", "/build/images/HTML5.png", 65)}
                    <br/><br/>
                </div>
            </div>
    );
}}

class Github extends React.Component {
    constructor(props) {
        super(props);
        this.values = githubData;
    }
    render() {
            return (
                <div>
                    <img className="profilePicture" src={this.values.imgUrl} alt="profile picture"/>
                    <h2 className="h4"> {this.values.username} </h2>
                    <p>
                        <strong>Bio: </strong>{this.values.bio}
                    </p>
                    <p>
                        <strong>Github profile link: </strong><a href={this.values.profileLink}>GitHub</a>
                    </p>
                    <p>
                        <strong>Number of repositories: </strong>{this.values.repos}
                    </p>
                    <p>
                        <strong>Currently working in: </strong>{this.values.work}
                    </p>
                    <p>
                        <strong>Currently living in: </strong>{this.values.location}
                    </p>
                    <p>
                        <strong>Last commit date: </strong>{this.values.commitDate}
                    </p>
                    <p>
                        <strong>Last commit message: </strong>{this.values.commitMessage}
                    </p>
                </div>
            )
    }
}

const technologiesDiv = ReactDOM.createRoot(document.getElementById("technologies"));
const githubDiv = ReactDOM.createRoot(document.getElementById("github"));

technologiesDiv.render(<Technologies />);

!async function(){
    let data = await fetch("https://api.github.com/users/"+gitHubUsername)
        .then((response) => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error(error);
        });
    let repos = await fetch("https://api.github.com/users/"+gitHubUsername+"/repos")
        .then((response) => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error(error);
        });
    let events = await fetch("https://api.github.com/users/"+gitHubUsername+"/events")
        .then((response) => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error(error);
        });
    let commitMessage = "";
    let commitDate = "";

    // generowanie ostatniego commita wraz z datą
    for ( let event of events)
    {
        if ( event["type"] === "PushEvent"  )
        for ( let commit of event['payload']['commits'])
        {
            if ( commit['author']['name'] === gitHubUsername)
            {
                if ( commit['author']['name'] === gitHubUsername && commitDate === "" && commitMessage === "")
                {
                    commitDate = event['created_at'].substr(0,10)+" "+event['created_at'].substr(11,8);

                    if (commit['message'].length <= messageLength)
                        commitMessage = commit['message'];
                    else
                        commitMessage = commit['message'].substring(0, messageLength)+"...";
                    break;
                }
            }
        }
    }

    githubData = {
        status: "Done",
        username: data['login']?data['login']:null,
        bio: data['bio']?data['bio']:null,
        imgUrl: data['avatar_url']?data['avatar_url']:null,
        profileLink: data['html_url']?data['html_url']:null,
        work: data['company']?data['company']:"Nowhere",
        location: data['location']?data['location']:"Nowhere",
        commitDate: commitDate,
        commitMessage: commitMessage,
        repos: repos.length,
    }
    console.log(githubData);

    githubDiv.render(<Github />);
}();
