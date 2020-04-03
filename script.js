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
    del: ['DEL'],
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
  del: 'del',
  capslock: 'capslock',
  enter: 'enter',
  shift: 'shift',
  ctrl: 'ctrl',
  alt: 'alt',
  space: 'space',
};

function createKey() {
  const key = document.createElement('div');
  key.classList.add(css.key);
  return key;
}

function getValue() {
  const engArr = Object.entries(keyboardLayout.en);
  const value = engArr.map((arr) => {
    const [keys, values] = arr;
    const [val1, val2] = values;
    const val = document.createElement('span');

    val.setAttribute('class', 'val');
    val.textContent = val1;

    const key = createKey();
    key.append(val);

    key.classList.add(css.backspace);
    key.classList.add(css.tab);
    key.classList.add(css.del);
    key.classList.add(css.capslock);
    key.classList.add(css.enter);
    key.classList.add(css.shift);
    key.classList.add(css.ctrl);
    key.classList.add(css.alt);
    key.classList.add(css.space);

    if (val1 !== 'Backspace') {
      key.classList.remove('backspace');
    }
    if (val1 !== 'Tab') {
      key.classList.remove('tab');
    }
    if (val1 !== 'DEL') {
      key.classList.remove('del');
    }
    if (val1 !== 'CapsLock') {
      key.classList.remove('capslock');
    }
    if (val1 !== 'ENTER') {
      key.classList.remove('enter');
    }
    if (val1 !== 'Shift') {
      key.classList.remove('shift');
    }
    if (val1 !== 'Ctrl') {
      key.classList.remove('ctrl');
    }
    if (val1 !== 'Alt') {
      key.classList.remove('alt');
    }
    if (val1 !== ' ') {
      key.classList.remove('space');
    }

    return key;
  });

  return value;
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

  const allKeys = getValue();
  let indexAllKeys = 0;

  function createRowsWithKeys(row, keysAmount) {
    row.classList.add(css.row);
    for (let i = 0; i < keysAmount; i += 1, indexAllKeys += 1) {
      row.append(allKeys[indexAllKeys]);
      keyboard.append(row);
    }
    return keyboard;
  }

  const row1 = document.createElement('div');
  const row2 = document.createElement('div');
  const row3 = document.createElement('div');
  const row4 = document.createElement('div');
  const row5 = document.createElement('div');

  createRowsWithKeys(row1, 14);
  createRowsWithKeys(row2, 15);
  createRowsWithKeys(row3, 13);
  createRowsWithKeys(row4, 13);
  createRowsWithKeys(row5, 8);

  return wrapper;
}

window.addEventListener('load', () => {
  const pageElements = createElements();
  document.querySelector('body').appendChild(pageElements);
});
