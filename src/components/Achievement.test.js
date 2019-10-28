import React from 'react'
import { shallow } from 'enzyme'

import Achievement from './Achievement'

describe('<Achievement />', () => {
    it('renders without crashing', () => {
        const onClick = jest.fn()
        shallow(
            <Achievement                   
                id={0} 
                goal={'goal test'}
                unlocked={false}
                onClick={onClick}
            />
        )
    })

    it('should trigger its `onClick` prop when clicked', () => {
        const onClick = jest.fn()
        const wrapper = shallow(
            <Achievement                   
                id={0} 
                goal={'goal test'}
                unlocked={false}
                onClick={onClick}
            />
        )

        wrapper.simulate('click')
        expect(onClick).toHaveBeenCalledWith(0)
    })
})