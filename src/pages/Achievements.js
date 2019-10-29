import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppLayoutPage,
  Datalist,
  PageHeader,
} from 'saagie-ui/react';
import Achievement from './../components/Achievement'
import { getAchievementsFromAPI, unlockFromAPI } from '../services/AchievementsService';

/**
 * Achievements components is a set of Achievement component.
 */
export default class Achievements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Array of achievements
      achievements: [],
    };
  }

  /**
   * Get all achivements from API
   */
  getAchievements() {
    getAchievementsFromAPI()
      .then((achievements) => {
        this.setState({
          achievements,
        });
      });
  }

  /**
   * Initialize component with achievements data
   */
  componentDidMount() {
    this.getAchievements()
  }

  /**
   * Unlock this achievement on click
   */
  // Arrow function for binding
  handleAchievementClick = (id) => {
    unlockFromAPI(id)
      .then((res) => {
        // Success
        if (res.status === 200) {
          this.getAchievements()
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
