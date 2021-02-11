import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
configure({ adapter: new Adapter() });

let data = {
  temp : 31.44,
  temp_max: 31.44,
  temp_min: 29.81,
  feels_like: 31.15,
  humidity: 39,
  pressure: 1015,
  sea_level: 1015
}


jest.mock("react-redux", () => ({
  getState: jest.fn(() => ({})),
  useSelector: jest.fn(state => state),
  useDispatch: () => jest.fn( {type:"Submit", payload:data} )
}));

describe("AppComponent", () => {

  afterEach(() => {
    jest.clearAllMocks();
  });
  
  test('renders weather Report Application', () => {
    render(<App/>);
    const linkElement = screen.getByText(/Weather Forecast/i);
    expect(linkElement).toBeInTheDocument();
  });

});