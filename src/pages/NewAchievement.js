import React from 'react';

import Formsy from 'formsy-react';
import { Link } from 'react-router-dom';
import { FieldInput } from 'saagie-ui/react/formsy';
import {
  AppLayoutPage,
  PageHeader,
  Icon
} from 'saagie-ui/react';

const NewAchievement = () => (
  <div className="sui-l-app-layout">
    <div className="sui-l-app-layout__subapp">
      <AppLayoutPage>
        <PageHeader title="SaagieVements">
          <Link to="/" className="sui-a-button as--primary">
            Achievements
          </Link>
        </PageHeader>
        <Formsy
          onValidSubmit={data => {
            console.log(data)
            alert('Form Submitted')
          }}
        >
          <FieldInput
            name="goalField"
            label="New achievement"
            placeholder="This is a new achievement."
            helper="Describe your new achievement."
            required
            validationErrors={{
              isDefaultRequiredValue: 'This is required',
            }}
          />
          <button type="submit" className="sui-a-button">
            <Icon name="plus" />
          </button>
        </Formsy>
      </AppLayoutPage>
    </div>
  </div>
);

export default NewAchievement