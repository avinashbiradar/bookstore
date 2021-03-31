import React from 'react';
import {shallow} from 'enzyme';
import axios from "axios";
import Dashboard from "../dashBoard/dashBoard"
import bookImg from "../assests/Image11.png";
import {render, cleanup} from '@testing-library/react'
import DisplayBooks from "../displayBooks/displayBooks"
// describe("<DisplayBooks/>", () => {
//   it("renders an image", () => {
//     const logo = shallow(<DisplayBooks />);

//     expect(logo.find("img").prop("src")).toEqual(bookImg);
//   });
// });
//---------------------------------------------------------------------------------------------------
// // Mock axios directly
// jest.mock('axios')

// describe("MyComponent", () => {

//   it("renders correct data", async () => {
//     const mockData = { data: "foo" };
    
//     // Mock returning your value
//     axios.get.mockResolvedValue(mockData);

//     const { findAllByText } = render(
//       <Dashboard url={'localhost:3000'} />
//     );

//     const text= await findAllByText(/foo/);
//     expect(text).toHaveLength(1);
//   });
// });
//------------------------------------------------------------------------

//cannot read property of undefined error 


// afterEach(cleanup)
 
//  it('should take a snapshot', () => {
//     const { asFragment } = render(<DisplayBooks />)
    
//     expect(asFragment(<DisplayBooks />)).toMatchSnapshot()
//    })