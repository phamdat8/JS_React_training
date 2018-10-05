import Slide from '../slide';

describe('Slide.js', () => {
  const slide = new Slide(
    'The Walking Dead',
    'A show about fighting zombies',
    'https://acollectivemind.files.wordpress.com/2013/12/season-4-complete-cast-poster-the-walking-dead-the-walking-dead-35777405-2528-670.png',
    'http://www.amc.com/shows/the-walking-dead',
    0
  )

  it('returns title', () => {
    expect(slide.title).toBe('The Walking Dead');
  })

  it('returns subtitle', () => {
    expect(slide.subtitle).toBe('A show about fighting zombies');
  })

  it('returns background', () => {
    expect(slide.background).toBe('https://acollectivemind.files.wordpress.com/2013/12/season-4-complete-cast-poster-the-walking-dead-the-walking-dead-35777405-2528-670.png');
  })

  it('returns link', () => {
    expect(slide.link).toBe('http://www.amc.com/shows/the-walking-dead');
  })

  it('returns id', () => {
    expect(slide.id).toBe('slide0');
  })
});
