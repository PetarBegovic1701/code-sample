import React, { Component } from 'react';
import './TeamMembers.css';
import {persons} from './fakeData';

class TeamMembers extends Component {
  // Yes, here, the state management is redundant
  // but serves a purpose for the demo
  constructor(props) {
    super(props);
    this.state = {
      team: {},
    };
  }

  componentWillMount = () => {
    this.setState({
      team: persons
    }, () => {
      console.log(this.state.team)
      // nested arrow function because 
      // the setState is asynchronous
    }); 
  }

  render() {
    const { team } = this.state;
    // easier state management because this avoids
    // reusing "this.state", and makes the code more readable

    return (
      <div className="teamHolder">
        {team.map((member, index) => (
          <div className="teamColumn members" key={index}>
            <div className="memberContainer">
              <div className="avatarContainer">
                <img src={member.image} alt="" className="avatar" />
              </div>
              <div className="memberFullname">
                {member.fullname.map((name, index) => (
                  <h2 className="memberFullnameMargin" key={index}>
                    { name }
                  </h2>
                ))}
              </div>
              <div className="memberPositionCenter">
                {member.positions && member.positions.map((position, index) => (
                  <p className="memberPositionRow" key={index}>
                    { position }
                  </p>
                ))}
              </div>
              <p className="memberInfo">
                { member.info }
              </p>
            </div>
            <div className="socialHolder">
              {member.social[0].linkedIn === "" ?
                ""
                :
                <a
                  className="social"
                  href={member.social[0].linkedIn}
                  target="_blank"
                  onClick={(e) => {e.preventDefault()}}
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              }
              {member.social[0].twitter === "" ?
                ""
                :
                <a
                  className="social"
                  href="#"
                  onClick={(e) => {e.preventDefault()}}
                >
                  <i className="fab fa-twitter"></i>
                </a>
              }
              {member.social[0].email === "" ?
                ""
                :
                <a
                  className="social"
                  href={"mailto:" + member.social[0].email}
                  target="_self"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              }
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default TeamMembers;
