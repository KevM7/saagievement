import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import NewAchievement from './../NewAchievement'

describe('<NewAchievement />', () => {
    it('renders without crashing', () => {
        shallow(<NewAchievement />)
    })

    it('render with a label and a text input field', () => {
        const wrapper = mount(
            <MemoryRouter>
                <NewAchievement />
            </MemoryRouter>
        )

        const label = wrapper.find('label')
        expect(label).toHaveLength(1)

        const input = wrapper.find('input');
        expect(input).toHaveLength(1);
        expect(input.prop('type')).toEqual('text');
    })

    it('submit button exists', () => {
        const wrapper = mount(
            <MemoryRouter>
                <NewAchievement />
            </MemoryRouter>
        )

        const button = wrapper.find('button');
        expect(button).toHaveLength(1);
        expect(button.prop('type')).toEqual('submit');
    })
})