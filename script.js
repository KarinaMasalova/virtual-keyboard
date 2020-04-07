const keyboardLayout = {
  en: {
    backquote: ['`', '~'],
    digit1: ['1', '!'],
    digit2: ['2', '@'],
    digit3: ['3', '#'],
    digit4: ['4', '$'],
    digit5: ['5', '%'],
    digit6: ['6', '^'],
    digit7: ['7', '&'],
    digit8: ['8', '*'],
    digit9: ['9', '('],
    digit0: ['0', ')'],
    minus: ['-', '_'],
    equal: ['=', '+'],
    backspace: ['Backspace', 'Backspace'],
    tab: ['Tab', 'Tab'],
    keyQ: ['q', 'Q'],
    keyW: ['w', 'W'],
    keyE: ['e', 'E'],
    keyR: ['r', 'R'],
    keyT: ['t', 'T'],
    keyY: ['y', 'Y'],
    keyU: ['u', 'U'],
    keyI: ['i', 'I'],
    keyO: ['o', 'O'],
    keyP: ['p', 'P'],
    bracketLeft: ['[', '{'],
    bracketRight: [']', '}'],
    backslash: ['\\', '|'],
    delete: ['DEL', 'DEL'],
    capsLock: ['CapsLock', 'CapsLock'],
    keyA: ['a', 'A'],
    keyS: ['s', 'S'],
    keyD: ['d', 'D'],
    keyF: ['f', 'F'],
    keyG: ['g', 'G'],
    keyH: ['h', 'H'],
    keyJ: ['j', 'J'],
    keyK: ['k', 'K'],
    keyL: ['l', 'L'],
    semicolon: [';', ':'],
    quote: ['\'', '"'],
    enter: ['ENTER', 'ENTER'],
    shiftLeft: ['Shift', 'Shift'],
    keyZ: ['z', 'Z'],
    keyX: ['x', 'X'],
    keyC: ['c', 'C'],
    keyV: ['v', 'V'],
    keyB: ['b', 'B'],
    keyN: ['n', 'N'],
    keyM: ['m', 'M'],
    comma: [',', '<'],
    period: ['.', '>'],
    slash: ['/', '?'],
    arrowUp: ['↑', '↑'],
    shiftRight: ['Shift', 'Shift'],
    controlLeft: ['Ctrl', 'Ctrl'],
    altLeft: ['Alt', 'Alt'],
    space: [' ', ' '],
    altRight: ['Alt', 'Alt'],
    arrowLeft: ['←', '←'],
    arrowDown: ['↓', '↓'],
    arrowRight: ['→', '→'],
    controlRight: ['Ctrl', 'Ctrl'],
  },
  ru: {
    backquote: ['ё', 'Ё'],
    digit1: ['1', '!'],
    digit2: ['2', '"'],
    digit3: ['3', '№'],
    digit4: ['4', ';'],
    digit5: ['5', '%'],
    digit6: ['6', ':'],
    digit7: ['7', '?'],
    digit8: ['8', '*'],
    digit9: ['9', '('],
    digit0: ['0', ')'],
    dash: ['-', '_'],
    equal: ['=', '+'],
    backspace: ['Backspace', 'Backspace'],
    tab: ['Tab', 'Tab'],
    keyQ: ['й', 'Й'],
    keyW: ['ц', 'Ц'],
    keyE: ['у', 'У'],
    keyR: ['к', 'К'],
    keyT: ['е', 'Е'],
    keyY: ['н', 'Н'],
    keyU: ['г', 'Г'],
    keyI: ['ш', 'Ш'],
    keyO: ['щ', 'Щ'],
    keyP: ['з', 'З'],
    leftBracket: ['х', 'Х'],
    rightBracket: ['ъ', 'Ъ'],
    backslash: ['\\', '/'],
    delete: ['DEL', 'DEL'],
    capslock: ['CapsLock', 'CapsLock'],
    keyA: ['ф', 'Ф'],
    keyS: ['ы', 'Ы'],
    keyD: ['в', 'В'],
    keyF: ['а', 'А'],
    keyG: ['п', 'П'],
    keyH: ['р', 'Р'],
    keyJ: ['о', 'О'],
    keyK: ['л', 'Л'],
    keyL: ['д', 'Д'],
    semicolon: ['ж', 'Ж'],
    quote: ['э', 'Э'],
    enter: ['ENTER', 'ENTER'],
    shiftLeft: ['Shift', 'Shift'],
    keyZ: ['я', 'Я'],
    keyX: ['ч', 'Ч'],
    keyC: ['с', 'С'],
    keyV: ['м', 'М'],
    keyB: ['и', 'И'],
    keyN: ['т', 'Т'],
    keyM: ['ь', 'Ь'],
    comma: ['б', 'Б'],
    dot: ['ю', 'Ю'],
    slash: ['.', ','],
    arrowUp: ['↑', '↑'],
    shiftRight: ['Shift', 'Shift'],
    controlLeft: ['Ctrl', 'Ctrl'],
    altLeft: ['Alt', 'Alt'],
    space: [' ', ' '],
    altRight: ['Alt', 'Alt'],
    arrowLeft: ['←', '←'],
    arrowDown: ['↓', '↓'],
    arrowRight: ['→', '→'],
    controlRight: ['Ctrl', 'Ctrl'],
  },
};

const css = {
  wrapper: 'wrapper',
  textarea: 'textarea',
  keyboard: 'keyboard',
  row: 'row',
  key: 'key',
  backspace: 'backspace',
  tab: 'tab',
  delete: 'delete',
  capsLock: 'capsLock',
  enter: 'enter',
  shift: 'shift',
  ctrl: 'ctrl',
  alt: 'alt',
  space: 'space',
  keydown: 'keydown',
  switchLang: 'switchLang',
  text: 'text',
};

const textarea = document.createElement('textarea');

function createKey() {
  const key = document.createElement('div');
  key.classList.add(css.key);
  return key;
}

const languages = ['en', 'ru'];
let curLangIndex = 0;

function getLanguage() {
  const langIndex = window.localStorage.getItem('language');
  return (langIndex || 0);
}

function saveLanguage() {
  window.localStorage.setItem('language', curLangIndex);
}

function getKeysByLang() {
  const lang = languages[curLangIndex];
  const langArr = Object.entries(keyboardLayout[lang]);
  const value = langArr.map((arr) => {
    const [keyID, values] = arr; /* [backquote, ['`', '~'//]] */
    const [val1, val2] = values; /* ['`', '~'] */
    const valVisible = document.createElement('span');

    valVisible.setAttribute('class', 'val');
    valVisible.textContent = val1;

    const valHidden = document.createElement('span');
    valHidden.textContent = val2;
    valHidden.setAttribute('class', 'hidden');

    const key = createKey();
    key.append(valVisible, valHidden);
    key.id = keyID;

    key.classList.add(css.backspace);
    key.classList.add(css.tab);
    key.classList.add(css.delete);
    key.classList.add(css.capsLock);
    key.classList.add(css.enter);
    key.classList.add(css.shift);
    key.classList.add(css.ctrl);
    key.classList.add(css.alt);
    key.classList.add(css.space);

    function specialKeys(keyWord, cssClass) {
      if (val1 !== keyWord) {
        key.classList.remove(cssClass);
      }
      return key;
    }

    specialKeys('Backspace', 'backspace');
    specialKeys('Tab', 'tab');
    specialKeys('DEL', 'delete');
    specialKeys('CapsLock', 'capsLock');
    specialKeys('ENTER', 'enter');
    specialKeys('Shift', 'shift');
    specialKeys('Ctrl', 'ctrl');
    specialKeys('Alt', 'alt');
    specialKeys(' ', 'space');

    return key;
  });

  return value;
}

function createRowsWithKeys(keysAmount, allKeys, startIndex) {
  const row = document.createElement('div');
  row.classList.add(css.row);

  for (let i = startIndex; i < startIndex + keysAmount; i += 1) {
    row.append(allKeys[i]);
  }
  return row;
}

function createRows(allKeys) {
  const row1 = createRowsWithKeys(14, allKeys, 0);
  const row2 = createRowsWithKeys(15, allKeys, 14);
  const row3 = createRowsWithKeys(13, allKeys, 29);
  const row4 = createRowsWithKeys(13, allKeys, 42);
  const row5 = createRowsWithKeys(8, allKeys, 55);
  return [row1, row2, row3, row4, row5];
}

const shift = () => {
  const visible = document.querySelectorAll('.val');
  const hidden = document.querySelectorAll('.hidden');
  visible.forEach((v) => {
    v.classList.add('hidden');
    v.classList.remove('val');
  });
  hidden.forEach((h) => {
    h.classList.remove('hidden');
    h.classList.add('val');
  });
};

function changeLayout() {
  curLangIndex = (curLangIndex + 1) % languages.length;
  saveLanguage();
  const lang = languages[curLangIndex];
  const keys = getKeysByLang(lang);
  const keyboard = document.querySelector('.keyboard');
  keyboard.innerHTML = '';
  keyboard.append(...createRows(keys));
  shift();
}

let isShiftDown = false;
let isCtrlDown = false;

const printSpecialKey = (key, span) => {
  switch (key) {
    case 'tab':
      textarea.value += '  ';
      break;
    case 'enter':
      textarea.value += '\n';
      break;
    case 'altLeft':
    case 'altRight':
    case 'controlLeft':
    case 'controlRight':
    case 'delete':
    case 'arrowUp':
    case 'arrowDown':
    case 'shiftRight':
    case 'shiftLeft':
      break;
    case 'backspace':
      textarea.value = textarea.value.slice(0, -1);
      break;
    case 'arrowLeft':
      textarea.selectionStart -= 1;
      textarea.selectionEnd = textarea.selectionStart;
      break;
    case 'arrowRight':
      textarea.selectionStart += 1;
      textarea.selectionEnd = textarea.selectionStart;
      break;
    default:
      textarea.value += span;
      break;
  }
};

function handleKeydown(event) {
  event.preventDefault();
  const keyID = `${event.code[0].toLowerCase()}${event.code.substring(1)}`; /* make 1st letter in event.code capitalized */
  const keyIdSelector = `#${keyID}`;
  const keyElem = document.querySelector(keyIdSelector);
  keyElem.classList.add(css.keydown);

  const span = keyElem.querySelector('.val').textContent;

  console.log(keyElem);
  console.log(span);

  printSpecialKey(keyID, span);

  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    isShiftDown = true;
    shift();
  }

  if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
    isCtrlDown = true;
  } else {
    isCtrlDown = false;
  }

  if (isShiftDown && isCtrlDown) changeLayout();

  return true;
}

function handleKeyup(event) {
  event.preventDefault();
  const keyID = `#${event.code[0].toLowerCase()}${event.code.substring(1)}`;
  const keyElem = document.querySelector(keyID);
  keyElem.classList.remove(css.keydown);
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    isShiftDown = false;
    shift();
  }

  if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
    isCtrlDown = true;
  } else {
    isCtrlDown = false;
  }

  return true;
}

function createElements() {
  const wrapper = document.createElement('div');
  wrapper.classList.add(css.wrapper);

  textarea.style = 'resize: none;';
  textarea.setAttribute('cols', 80);
  textarea.setAttribute('rows', 10);
  document.body.appendChild(textarea);
  textarea.classList.add(css.textarea);

  const keyboard = document.createElement('div');
  keyboard.classList.add(css.keyboard);
  wrapper.append(textarea, keyboard);

  const allKeys = getKeysByLang();
  curLangIndex = getLanguage();
  saveLanguage();

  const rows = createRows(allKeys);
  keyboard.append(...rows);

  const howToSwitchLang = document.createElement('div');
  howToSwitchLang.classList.add(css.switchLang);
  howToSwitchLang.innerHTML = '<p><strong>Shift + Ctrl</strong> - to switch language (переключить язык)</p>';
  wrapper.appendChild(howToSwitchLang);

  return wrapper;
}

function mouseDownHandler(elem) {
  elem.classList.add(css.keydown);
  printSpecialKey(elem.firstElementChild.textContent);
}

function mouseUpHandler(elem) {
  elem.classList.remove(css.keydown);
}

window.addEventListener('load', () => {
  const pageElements = createElements();
  document.querySelector('body').appendChild(pageElements);
  window.addEventListener('keydown', handleKeydown);
  window.addEventListener('keyup', handleKeyup);

  document.querySelectorAll('.key').forEach((element) => {
    element.addEventListener('mousedown', () => mouseDownHandler(element));
    element.addEventListener('mouseup', () => mouseUpHandler(element));
  });
});
