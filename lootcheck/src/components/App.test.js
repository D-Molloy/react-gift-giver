import React from 'react'
import { shallow } from 'enzyme'
import '../setupTests.js'
import App from './App'


describe('App', () => {
  const app = shallow(<App />)
  it('Should render the App component', () => {
    expect(app).toMatchSnapshot()
  })

  //test to make sure the Wallet component renders
  it("contains a connected Wallet component", ()=>{
    //need to find the connect version using an enzyme trick
    // console.log(app.debug())
    //shows that our Wallet is connected
    // <div>
    //   <h2>
    //     Loot Check
    //   </h2>
    //   <hr />
    //   <Connect(Wallet) />
    // </div>

    //expect app to find a Wallet component
    // expect(app.find("Wallet").exists()).toBe(true);
    //expect to find a connected wallet component
    expect(app.find("Connect(Wallet)").exists()).toBe(true);
  })

  it('contains a connected Loot component', ()=>{
    expect(app.find("Connect(Loot)").exists()).toBe(true);
  })
})