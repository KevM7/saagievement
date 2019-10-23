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

  componentDidMount() {
    fetch('/api/achievements')
      .then((body) => body.json())
      .then((achievements) => {
        this.setState({
          achievements,
        });
      });
  }

  /**
   * Click event on an achievement.
   * Lock or unlock this achievement.
   */
  // Arrow fx for binding
  handleAchievementClick = (id) => {
    const { achievements } = this.state
    var achievement = achievements.find((element) => id === element.id)
    if (achievement) {
      // switch unlocked/locked
      achievement.unlocked = !achievement.unlocked
      this.setState({ achievements: achievements })
    }
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
