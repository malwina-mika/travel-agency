import React from 'react'
import { shallow } from 'enzyme'
import TripSummary from './TripSummary'

describe('Component TripSummary', () => {
  it('should render correct link', () => {
    const TripId = 'abc'
    const tags =
      ['beach', 'sea']

    const expectedLink = '/trip/abc'
    const component = shallow(<TripSummary id={TripId} tags={tags} />)
    expect(component.find('.link').prop('to')).toEqual(expectedLink)
  })

  it('should render correct source and alt', () => {
    const tags =
      ['beach', 'sea']
    const expectedAlt = 'Lorem ipsum'
    const expectedSrc = 'image.jpg'
    const component = shallow(<TripSummary name={expectedAlt} image={expectedSrc} tags={tags} />)

    expect(component.find('img').prop('src')).toEqual(expectedSrc)
    expect(component.find('img').prop('alt')).toEqual(expectedAlt)
  })
})