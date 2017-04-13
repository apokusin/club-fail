
const _funnyLines = [
  'Recording new episode…',
  'Calibrating flux capacitor…',
  'Checking privelage…',
  'Construcing additional pylons…',
  'Hawaiian Pizza 4 lyfe…',
  'What\'s the deal with airline food?',

]

export const makeFunny = (idx) => {
  if (!idx) {
    idx = Math.floor(Math.random() * _funnyLines.length );
    console.log(idx);
  }
  return _funnyLines[idx];
}