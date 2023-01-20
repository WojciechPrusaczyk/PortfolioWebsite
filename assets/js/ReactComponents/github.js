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
    /*
    TO DO: przerobić datę na obiekt daty i dodać do niej godzinę
     */
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
    const githubDiv = ReactDOM.createRoot(document.getElementById("github"));
    githubDiv.render(<Github />);
}();