import React from 'react'
import { shallow, mount } from 'enzyme'

import Achievements from './../Achievements'

describe('<Achievements />', () => {
    it('renders without crashing', () => {
        shallow(<Achievements />)
    })
})