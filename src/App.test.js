import React from 'react';
import ReactDOM from 'react-dom';
import {render, cleanup} from '@testing-library/react'
import App from './App';
afterEach(cleanup)
 
 it('should take a snapshot', () => {
    const { asFragment } = render(<App />)
    
    expect(asFragment(<App />)).toMatchSnapshot()
   })


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});