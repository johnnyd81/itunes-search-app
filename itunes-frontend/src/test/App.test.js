import { render, screen } from '@testing-library/react'
import App from '../App.js'

//the describe function contains all the tests that checks if my app renders correctly on the webpage
describe('App', () => {
  test('renders the data correctly', async () => {
    render(<App />)
    const input = screen.getByRole('textbox')
    expect(input.placeholder).toBe('Type search terms here...')

    const findData = screen.getByRole('combobox')
    expect(findData.textContent).toBe(
      'AllMovieMusicEbookShort FilmAudiobookPodcastTV ShowSoftware',
    )
  })
})
