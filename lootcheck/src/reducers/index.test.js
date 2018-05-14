import rootReducer from './index';
import balance from './balance';

describe("rootReducer", ()=>{
    it("initializes the default state", ()=>{
        expect(rootReducer({}, {})).toEqual({ balance: 0, bitcoin:{} })
    })
})