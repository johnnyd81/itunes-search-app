import React from 'react'
import { create } from 'react-test-renderer'
// react test renderer has to be imported seperately as it is not included in the react testing library
import Header from '../components/Header'

describe('Header Component', () => {
  test('Matches the snapshot', () => {
    const header = create(<Header />)
    expect(header.toJSON()).toMatchSnapshot()
  })
})
