const keyboardLayout = {
  en: {
    backquote: ['`', '~'],
    digit1: ['1', '!'],
    digit2: ['2', '@'],
    digit3: ['3', '#'],
    digit4: ['4', '%'],
    digit5: ['5', '%'],
    digit6: ['6', '^'],
    digit7: ['7', '&'],
    digit8: ['8', '*'],
    digit9: ['9', '('],
    digit0: ['0', ')'],
    dash: ['-', '_'],
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
    leftBracket: ['[', '{'],
    rightBracket: [']', '}'],
    backslash: ['\\', '|'],
    delete: ['DEL'],
    capslock: ['CapsLock'],
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
    dot: ['.', '>'],
    slash: ['/', '?'],
    arrowUp: ['▲'],
    shiftRight: ['Shift'],
    controlLeft: ['Ctrl'],
    windows: ['Win'],
    altLeft: ['Alt'],
    space: [' ', ' '],
    altRight: ['Alt'],
    arrowLeft: ['◄'],
    arrowDown: ['▼'],
    arrowRight: ['►'],
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
    delete: ['DEL'],
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
    windows: ['Win'],
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
  row1: 'row1',
  row2: 'row2',
  row3: 'row3',
  row4: 'row4',
  row5: 'row5',
  key: 'key',
};

function createKey() {
  const key = document.createElement('div');
  key.classList.add(css.key);
  return key;
}

function createElements() {
  const wrapper = document.createElement('div');
  wrapper.classList.add(css.wrapper);

  const textarea = document.createElement('textarea');
  const t = document.createTextNode('');
  textarea.appendChild(t);
  textarea.style = 'resize: none;';
  textarea.setAttribute('cols', 80);
  textarea.setAttribute('rows', 10);
  document.body.appendChild(textarea);
  textarea.classList.add(css.textarea);

  const keyboard = document.createElement('div');
  keyboard.classList.add(css.keyboard);
  wrapper.append(textarea, keyboard);

  const row1 = document.createElement('div');
  row1.classList.add(css.row1);
  for (let i = 0; i < 14; i += 1) {
    row1.append(createKey());
  }

  const row2 = document.createElement('div');
  row2.classList.add(css.row2);
  for (let i = 0; i < 15; i += 1) {
    row2.append(createKey());
  }

  const row3 = document.createElement('div');
  row3.classList.add(css.row3);
  for (let i = 0; i < 13; i += 1) {
    row3.append(createKey());
  }

  const row4 = document.createElement('div');
  row4.classList.add(css.row4);
  for (let i = 0; i < 13; i += 1) {
    row4.append(createKey());
  }

  const row5 = document.createElement('div');
  row5.classList.add(css.row5);
  for (let i = 0; i < 9; i += 1) {
    row5.append(createKey());
  }

  keyboard.append(row1, row2, row3, row4, row5);

  return wrapper;
}

window.addEventListener('load', () => {
  const pageElements = createElements();
  document.querySelector('body').appendChild(pageElements);
});
