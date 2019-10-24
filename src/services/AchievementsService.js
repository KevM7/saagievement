import React from 'react'

const { createContext, useContext } = React;

const AchievementContext = createContext(null);

export const  AchievementProvider = (props) => {
    const value = {
        unlock: props.unlock || unlock,
    }

    return (
        <AchievementProvider.Provider value={value}>
            {props.children}
        </AchievementProvider.Provider>
    )
}

export const useAchievement = () => {
    return useContext(AchievementContext)
}

/**
 * Unlock an achievement
 * @param {id} id number achievement identifier
 */
const unlock = (body) => {
    return fetch({
        method: 'POST',
        url: '/api/achievement/' + body + '/unlock',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    })
    .then((res) => res.json())                
}

