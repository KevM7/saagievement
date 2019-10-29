import React from 'react';
import PropTypes from 'prop-types'
import {
    DatalistRow,
    DatalistCol,
    DatalistColActions,
    Icon,
  } from 'saagie-ui/react';

/**
 * Achievement component for Datalist component.
 * @param {number} id unique identifier
 * @param {string} goal achievement description
 * @param {boolean} unlocked true if unlocked else false
 * @param {function} onClick event function fired on click (for example to unlock an achievement)
 */
const Achievement = ({ id, goal, unlocked, onClick }) => (
    <DatalistRow onClick={ () => onClick(id) }>
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

