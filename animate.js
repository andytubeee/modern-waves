function* infiniteNum() {
  let i = 0;
  while (true) {
    yield i;
    ++i;
  }
}

const tween = KUTE.fromTo(
  '#blob1',
  {
    path: '#blob1',
  },
  { path: '#blob2' },
  { repeat: 10e100, duration: 1900, yoyo: true }
);

tween.start();
