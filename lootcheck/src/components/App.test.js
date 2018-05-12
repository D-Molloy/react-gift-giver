import React from 'react'
import { shallow } from 'enzyme'
import '../setupTests.js'
import App from './App'


describe('App', () => {
  const app = shallow(<App />)
  it('Should render the App component', () => {
    expect(app).toMatchSnapshot()
  })
})