import React from 'react'; 
import {shallow,mount} from 'enzyme';
import Logo from "../AppBar/AppBar"; 
import logoImage from "../assests/education.svg";

import Badge from "@material-ui/core/Badge";

describe('<Logo /> with no props', () => {
    const container = shallow(<Logo />);
    it('should match the snapshot', () => {
      expect(container.html()).toMatchSnapshot();
    });
  });

describe("<Logo />", () => {
    it("renders an image", () => {
        const logo = shallow(<Logo />);
        expect(logo.find("img").prop("src")).toEqual(logoImage);

     });
 });

//  describe("props testing ", () => {
//     it("renders an image", () => {
//         const logo =shallow(<Logo  totalCartItem={2} />);
//         // expect(logo.find("#badge-cart"));
//         // const result = logo.find("#badge-cart").contains(5)
//         // console.log("result",result.debug())
//          const debug = Logo.find(Badge).debug()
//          console.log("debug",debug)
//      });
//  });

