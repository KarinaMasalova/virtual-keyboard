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
    backspace: ['Backspace'],
    tab: ['Tab'],
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
    delete: ['DEL'],
    capsLock: ['CapsLock'],
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
    enter: ['ENTER'],
    shiftLeft: ['Shift'],
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
    arrowUp: ['↑'],
    shiftRight: ['Shift'],
    controlLeft: ['Ctrl'],
    altLeft: ['Alt'],
    space: [' ', ' '],
    altRight: ['Alt'],
    arrowLeft: ['←'],
    arrowDown: ['↓'],
    arrowRight: ['→'],
    controlRight: ['Ctrl'],
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
    backspace: ['Backspace'],
    tab: ['Tab'],
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
    del: ['DEL'],
    capslock: ['CapsLock'],
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
    enter: ['ENTER'],
    shiftLeft: ['Shift'],
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
    arrowUp: ['↑'],
    shiftRight: ['Shift'],
    controlLeft: ['Ctrl'],
    altLeft: ['Alt'],
    space: [' ', ' '],
    altRight: ['Alt'],
    arrowLeft: ['←'],
    arrowDown: ['↓'],
    arrowRight: ['→'],
    controlRight: ['Ctrl'],
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
    const [keyID, values] = arr;
    const [val1, val2] = values;
    const val = document.createElement('span');

    val.setAttribute('class', 'val');
    val.textContent = val1;

    const key = createKey();
    key.append(val);
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

function changeLayout() {
  curLangIndex = (curLangIndex + 1) % languages.length;
  saveLanguage();
  const lang = languages[curLangIndex];
  const keys = getKeysByLang(lang);
  const keyboard = document.querySelector('.keyboard');
  keyboard.innerHTML = '';
  keyboard.append(...createRows(keys));
}

let isShiftDown = false;
let isCtrlDown = false;

const printSpecialKey = (key) => {
  switch (key) {
    case 'Tab':
      textarea.value += '  ';
      break;
    case 'ENTER':
      textarea.value += '\n';
      break;
    case 'Alt':
    case 'Ctrl':
    case 'Shift':
    case 'DEL':
    case '↑':
    case '↓':
      textarea.value += '';
      break;
    case 'Backspace':
      textarea.value = textarea.value.slice(0, -1);
      break;
    case '←':
      textarea.selectionStart -= 1;
      textarea.selectionEnd = textarea.selectionStart;
      break;
    case '→':
      textarea.selectionStart += 1;
      textarea.selectionEnd = textarea.selectionStart;
      break;
    default:
      textarea.value += key;
      break;
  }
  textarea.innerHTML += key;
};

function handleKeydown(event) {
  event.preventDefault();
  const keyID = `#${event.code[0].toLowerCase()}${event.code.substring(1)}`; /* make 1st letter in event.code capitalized */
  const keyElem = document.querySelector(keyID);
  keyElem.classList.add(css.keydown);

  printSpecialKey(keyElem.textContent);

  if (event.shiftKey === true) isShiftDown = true;
  else isShiftDown = false;

  if (event.ctrlKey === true) isCtrlDown = true;
  else isCtrlDown = false;

  if (isShiftDown && isCtrlDown) changeLayout();

  return true;
}

function handleKeyup(event) {
  event.preventDefault();
  const keyID = `#${event.code[0].toLowerCase()}${event.code.substring(1)}`;
  const keyElem = document.querySelector(keyID);
  keyElem.classList.remove(css.keydown);
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

  return wrapper;
}

function mouseDownHandler(elem) {
  elem.classList.add(css.keydown);
  printSpecialKey(elem.textContent);
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
