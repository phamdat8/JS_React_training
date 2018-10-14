import Slide, {Add} from '../slide';

describe('Slide.js', () => {
  const slide = new Slide('n1', 'n2', 'n3', 'n4', 0);

  it('returns title', () => {
    expect(slide.title).toBe('n1');
  });
});

describe('Add()', () => {
  it('returns 3 with Add(1, 2)', () => {
    expect(Add(1, 2)).toBe(3);
  });

  it('returns NaN with Add()', () => {
    expect(Add()).toEqual(0);
  });
});

describe('Slide.js', () => {
  const slide = new Slide(
    'The Walking Dead',
    'A show about fighting zombies',
    'https://acollectivemind.files.wordpress.com/2013/12/season-4-complete-cast-poster-the-walking-dead-the-walking-dead-35777405-2528-670.png',
    'http://www.amc.com/shows/the-walking-dead',
    0,
  );

  it('returns title', () => {
    expect(slide.title).toBe('The Walking Dead');
  });

  it('returns subtitle', () => {
    expect(slide.subtitle).toBe('A show about fighting zombies');
  });

  it('returns background', () => {
    expect(slide.background).toBe(
      'https://acollectivemind.files.wordpress.com/2013/12/season-4-complete-cast-poster-the-walking-dead-the-walking-dead-35777405-2528-670.png',
    );
  });

  it('returns link', () => {
    expect(slide.link).toBe('http://www.amc.com/shows/the-walking-dead');
  });

  it('returns id', () => {
    expect(slide.id).toBe('slide0');
  });
});
