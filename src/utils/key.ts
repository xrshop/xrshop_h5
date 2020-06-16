function rand(min: any, max: any) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function key() {
  return String(Date.now().toString(16)).padStart(16, '0') + Array(16).fill('').map(() => rand(0, 15).toString(16)).join('');
}


export default key;
