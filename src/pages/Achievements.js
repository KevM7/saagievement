import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppLayoutPage,
  Datalist,
  PageHeader,
} from 'saagie-ui/react';
import Achievement from './../Achievement'

export class Achievements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      achievements: [],
    };
  }

  getAchievementsFromAPI() {
    fetch('/api/achievements')
      .then((body) => body.json())
      .then((achievements) => {
        this.setState({
          achievements,
        });
      });
  }

  componentDidMount() {
    this.getAchievementsFromAPI()
  }

  /**
   * Click event on an achievement.
   * Lock or unlock this achievement.
   */
  // Arrow fx for binding
  handleAchievementClick = (id) => {
    fetch('/api/achievement/' + id + '/unlock', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status === 200) {
          this.getAchievementsFromAPI()
        }
      })
  }

  render() {
    const {
      achievements,
    } = this.state;

    return (
      <div className="sui-l-app-layout">
        <div className="sui-l-app-layout__subapp">
          <AppLayoutPage>
            <PageHeader title="SaagieVements">
              <Link to="/new-achievement" className="sui-a-button as--primary">
                New achievement
              </Link>
            </PageHeader>
            <h3>
              Have fun to unlock the following achievements
            </h3>
            <Datalist isHover>
              {achievements.map((achievement) => (
                <Achievement 
                  key={achievement.id}
                  id={achievement.id} 
                  goal={achievement.goal}
                  unlocked={achievement.unlocked}
                  onClick={this.handleAchievementClick}>
                </Achievement>              
              ))}
            </Datalist>
          </AppLayoutPage>
        </div>
      </div>
    );
  }
}
