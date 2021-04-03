import React from 'react';
import {shallow} from 'enzyme';
import Login from "../LogIn/LogIn"

describe('<Login /> with no props', () => {
  const container = shallow(<Login />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});

describe('Login Component', () => {
  //testing rendering of login component
    it('should render without throwing an error', () => {
        expect(shallow(<Login/>).exists()).toBe(true)
    })
   // testing the email and password input existence by id
    it('renders a email input', () => {
        expect(shallow( <Login/> ).find('#outlined-email-input').length).toEqual(1)
      })
     it('renders a password input', () => {
        expect(shallow( <Login/> ).find('#outlined-pass-input').length).toEqual(1)
      })
      
   // testing the email and password input existence by id
    it('renders a email input', () => {
        expect(shallow( <Login/> ).find('#outlined-secondary-name').length).toEqual(1)
      })
     it('renders a email input', () => {
        expect(shallow( <Login/> ).find('#outlined-secondary-email').length).toEqual(1)
      })
      it('renders a password input', () => {
        expect(shallow( <Login/> ).find('#outlined-secondary-password').length).toEqual(1)
      })
      
})

describe('counter testing ',()=>{
  //testing for specific text in element 
  test('render the title ', () => {
    const wrapper = shallow(<Login/>);
    expect(wrapper.find('span').text()).toContain("ONLINE BOOK SHOPPING");
  })

})

describe("Button Component Tests", () => {
    it("Renders correctly in DOM", () => {
        shallow(
            <button text="Test" />
        );
    });
    it("Expects to find button HTML element in the DOM", () => {
        const wrapper = shallow(<button text="test"/>)
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it("Expects to find button HTML element with className lgn in the DOM", () => {
        const wrapper = shallow(<button className="lgn" text="test"/>)
        expect(wrapper.find('button.lgn')).toHaveLength(1);
    });

    it("Expects to run onClick function when button is pressed in the DOM", () => {
        const mockCallBackClick = jest.fn();
        const wrapper = shallow(<button onClick={mockCallBackClick} className="btn" text="test"/>);
        wrapper.find('button').simulate('click');
        expect(mockCallBackClick.mock.calls.length).toEqual(1);
    });
})