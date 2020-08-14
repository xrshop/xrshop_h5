type Rules = ((v: string) => true | string)[];

export default function checkRules(value: string, rules: Rules, input: HTMLInputElement) {
  input.setCustomValidity('');
  input.addEventListener(
    'input',
    () => {
      input.setCustomValidity('');
    },
    { once: true },
  );
  return rules.every((f) => {
    const r = f(value);
    if (r === true) return true;
    input.setCustomValidity(r);
    return false;
  });
}

export function isEmail(str: string) {
  if (typeof str === 'string') {
    const regex = /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@([A-Za-z0-9]+(?:-[A-Za-z0-9]+)?\.)+[A-Za-z0-9]+(?:-[A-Za-z0-9]+)?$/;
    const temp = str.split('@');
    return regex.test(str) && temp[0].length <= 64 && temp[1].length <= 255;
  }
  return false;
}

export function isPhone(str: string) {
  return /^1[3456789]\d{9}$/.test(str);
}

export function isUsername(str: string) {
  return /^[a-zA-Z0-9]{6,16}$/.test(str);
}

export function isVerify(str: string) {
  return /^[0-9]{6}$/.test(str);
}

export function isRealName(str: string) {
  return /^[\u4e00-\u9fa5]{1,8}$/.test(str);
}

export function isPostCode(str: string) {
  return /\d{6}(?!\d)/.test(str);
}
