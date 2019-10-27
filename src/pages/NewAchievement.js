import React from 'react';

import Formsy from 'formsy-react';
import { Link } from 'react-router-dom';
import { FieldInput } from 'saagie-ui/react/formsy';
import {
  AppLayoutPage,
  PageHeader,
  Icon
} from 'saagie-ui/react';

import { addNewAchievementFromAPI } from '../services/AchievementsService';

export default class NewAchievement extends React.Component {

  /**
   * API call to add a new achievement on submit form
   */
  handleFormSubmit = data => {
    const goal = data.goalField
    addNewAchievementFromAPI(goal)
      .then((res) => {
        if (res.status === 200) {
          alert("Your achievement has been added")
        } else {
          alert("An error has occurred")
        }
      })
  }

  render() {
    return (
      <div className="sui-l-app-layout">
        <div className="sui-l-app-layout__subapp">
          <AppLayoutPage>
            <PageHeader title="SaagieVements">
              <Link to="/" className="sui-a-button as--primary">
                Achievements
              </Link>
            </PageHeader>
            <Formsy
              onValidSubmit={this.handleFormSubmit}
            >
              <FieldInput
                name="goalField"
                label="New achievement"
                placeholder="This is a new achievement."
                helper="Describe your new achievement."
                required
                validationErrors={{
                  isDefaultRequiredValue: 'An achievement description is required',
                }}
              />
              <button type="submit" className="sui-a-button">
                <Icon name="plus" />
              </button>
            </Formsy>
          </AppLayoutPage>
        </div>
      </div>
    )
  }
}