import React from 'react'
import { shallow } from 'enzyme'
import TripSummary from './TripSummary'

describe('Component TripSummary', () => {
  it('should render correct link', () => {
    const TripId = 'abc'
    const expectedLink = '/trip/abc'
    const component = shallow(<TripSummary id={TripId} tags={[]} />)
    expect(component.find('.link').prop('to')).toEqual(expectedLink)
  })

  it('should render correct source and alt', () => {
    const expectedAlt = 'Lorem ipsum'
    const expectedSrc = 'image.jpg'
    const component = shallow(<TripSummary name={expectedAlt} image={expectedSrc} tags={[]} />)

    expect(component.find('img').prop('src')).toEqual(expectedSrc)
    expect(component.find('img').prop('alt')).toEqual(expectedAlt)
  })

  it('should render correct name, cost and days props', () => {

    const propName = 'Lorem ipsum'
    const propCost = '$51,380.61'
    const propDays = 5

    const component = shallow(<TripSummary name={propName} days={propDays} cost={propCost} tags={[]} />)

    const renderedTitle = component.find('.title').text()
    expect(renderedTitle).toEqual(propName)

    const renderedDays = component.find('.details').childAt(0).text()
    expect(renderedDays).toEqual(`${propDays} days`)

    const renderedCost = component.find('.details').childAt(1).text()
    expect(renderedCost).toEqual(`from ${propCost}`)

  })

  it('should throw error without required props', () => {

    expect(() => shallow(<TripSummary image='image.jpg' name='Turkey' cost='1000.00' days={3} />)).toThrow()
  })


  it('should render correct tags', () => {

    const ExpTags = ['beach', 'sea', 'lake']
    const component = shallow(<TripSummary tags={ExpTags} />)
    expect(component.find('.tag').at(0)).toEqual[ExpTags[0]]
    expect(component.find('.tag').at(1)).toEqual[ExpTags[1]]
    expect(component.find('.tag').at(2)).toEqual[ExpTags[2]]
  })

  it('should render without crashing', () => {
    const wrapper = shallow(<TripSummary tags={[]} />)
    expect(wrapper.find('.tags').exists()).toEqual(true)
  })

})