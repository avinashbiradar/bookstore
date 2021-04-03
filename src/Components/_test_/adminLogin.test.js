import React from 'react';
import {shallow} from 'enzyme';
import AdminLogin from "../admin/adminlogin"


describe('<AdminLogin /> with no props', () => {
  const container = shallow(<AdminLogin />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});

describe(' Admin Login Component', () => {
  //testing rendering of login component
    it('should render without throwing an error', () => {
        expect(shallow(<AdminLogin/>).exists()).toBe(true)
    })

    it("Expects to run onClick function when button is pressed in the DOM", () => {
        const mockCallBackClick = jest.fn();
        const wrapper = shallow(<button onClick={mockCallBackClick}/>);
        wrapper.find('button').simulate('click');
        expect(mockCallBackClick.mock.calls.length).toEqual(1);
    });
})