// Template for creating a custom Slide object
function Slide(title, subtitle, background, link, slideIndex) {
  this.title = title;
  this.subtitle = subtitle;
  this.background = background;
  this.link = link;
  this.id = 'slide' + slideIndex;
}

export function Add(x, y) {
  if (x === undefined || y === undefined) return 0;
  return x + y;
}

export default Slide;
