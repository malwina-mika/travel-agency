import React from 'react'
import { shallow } from 'enzyme'
import DaysToSummer from './DaysToSummer'

const select = {
  title: '.title',
}

const mockProps = {
  info: ' days to summer!',
  info2: ' day to summer!',
  info3: 'It is summer!',
}

describe('Component DaysToSummer', () => {

  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />)
    expect(component).toBeTruthy()

  })

  it('should render content', () => {
    const component = shallow(<DaysToSummer />)
    expect(component.find(select.title).exists()).toEqual(true)
  })


})


const trueDate = Date
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if (args.length) {
      super(...args)
    } else {
      super(customDate)
    }
  }
  static now() {
    return (new Date(customDate)).getTime()
  }
}

const checkDescriptionAtDay = (date, expectedDescription) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T00:00:00.000Z`)

    const component = shallow(<DaysToSummer />)
    const renderedTime = component.find(select.title).text()
    expect(renderedTime).toEqual(expectedDescription)

    global.Date = trueDate
  })
}


describe('Component DaysToSummer  with mocked Date', () => {
  checkDescriptionAtDay('2020-06-20', '1' + mockProps.info2)
  checkDescriptionAtDay('2020-06-19', '2' + mockProps.info)
  checkDescriptionAtDay('2020-01-03', '170' + mockProps.info)

})

describe('Component DaysToSummer  with mocked Date and delay', () => {
  checkDescriptionAtDay('2020-09-28', '266' + mockProps.info)
  checkDescriptionAtDay('2020-10-20', '244' + mockProps.info)
})

describe('Component DaysToSummer  with mocked Date', () => {
  checkDescriptionAtDay('2020-06-21', mockProps.info3)
  checkDescriptionAtDay('2020-07-21', mockProps.info3)
  checkDescriptionAtDay('2020-09-23', mockProps.info3)
})



