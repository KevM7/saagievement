import React from 'react';
import PropTypes from 'prop-types'
import {
    DatalistRow,
    DatalistCol,
    DatalistColActions,
    Icon,
  } from 'saagie-ui/react';

const Achievement = ({ id, goal, unlocked, onClick }) => (
    <DatalistRow onClick={ () => onClick(id)}>
        <DatalistCol isLink level="primary">
            {goal}
        </DatalistCol>
        <DatalistColActions size="xs" >
        <Icon style={{ opacity: unlocked ? 1 : 0.4 }} name={unlocked ? 'fa-trophy' : 'fa-times-circle'} size="xl" />
        </DatalistColActions>
    </DatalistRow>    
)

Achievement.propTypes = {
    id: PropTypes.number.isRequired,
    goal: PropTypes.string.isRequired,
    unlocked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Achievement

