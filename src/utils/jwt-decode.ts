export function jwtDecode(token: string) {
  const a = token.split(' ');
  if (!a || !a[1]) return null;
  const b = a[1].split('.');
  return { header: JSON.parse(atob(b[0])), payload: JSON.parse(atob(b[1])) };
}

export function jwtDecode2(token: string) {
  const b = token.split('.');
  return { header: JSON.parse(atob(b[0])), payload: JSON.parse(atob(b[1])) };
}
