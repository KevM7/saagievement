/**
 * Return all achievements
 */
export function getAchievementsFromAPI() {
    return fetch('/api/achievements')
            .then((body) => body.json())
}

/**
 * Unlock an Achievement
 * @param {*} idAchievement Achievement uniq identifier 
 */
export function unlockFromAPI(idAchievement) {
    return fetch('/api/achievement/' + idAchievement + '/unlock', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
}

/**
 * Add a new achievement
 * @param {*} goal string description of a new achievement
 */
export function addNewAchievementFromAPI(goal) {
    return fetch('/api/achievement', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({goal: goal}),
    })
}

