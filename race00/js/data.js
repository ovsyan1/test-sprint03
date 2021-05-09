'use strict'
const switcher = `
<div class="switch-skins">
    <div class="skin-title">Skins </div>
    <div class="skin-switcher" id="OK"></div>
    <div class="skin-switcher" id="SY"></div>
    <div class="skin-switcher" id="SV"></div>
</div>
`;
let firstSkin = "OK";

const simple = [
  {
    id: "key-clear",
    name: "C",
    handler: "clear",
    classes: "functional"
  },
  {
    id: "key-sign",
    name: "&#177;",
    handler: "sign"
  },
  {
    id: "key-percent",
    name: "%",
    handler: "percent"
  },
  {
    id: '_division',
    name: "&#247;",
  },
  {
    id: '_seven',
    name: '7',
  },
  {
    id: '_eight',
    name: '8',
    handler: 'eight'
  },
  {
    id: '_nine',
    name: '9',
    handler: 'nine'
  },
  {
    id: '_multiply',
    name: "&#215;",
    handler: 'multiply'
  },
  {
    id: '_four',
    name: '4',
    handler: 'four'
  },
  {
    id: '_five',
    name: '5',
    handler: 'five'
  },
  {
    id: '_six',
    name: '6',
    handler: 'six'
  },
  {
    id: '_minus',
    name: "-",
    handler:'minus'
  },
  {
    id: '_one',
    name: '1',
    handler: 'one'
  },
  {
    id: '_two',
    name: '2',
    handler: 'two'
  },
  {
    id: '_three',
    name: '3',
    handler: 'three'
  },
  {
    id: '_add',
    name: "+",
    handler: "add"
  },
  {
    id: '_zero',
    name: '0',
    handler: "zero"
  },
  {
    id: '_double-zero',
    name: '00',
    handler: 'doubleZero'
  },
  {
    id: '_comma',
    name: ",",
    handler: 'comma'
  },
  {
    id: '_equal',
    name: "=",
    handler: 'equal'
  },
];
const engineering = [
  {
    name: '',
    handler: ''
  }
];
// Подключение шаблонов калькулятора
function getTemplateKeyboard(template) {
  let keyboardTemplate = '';
  simple.map(item => {
    let res = template;
    res = res.replace('#ID#', item.id);
    res = res.replace('#HANDLER#', item.handler);
    res = res.replace('#NAME#', item.name);
    res = res.replace('#CLASSES#', item.classes);
    keyboardTemplate += res;
  });
  return keyboardTemplate;
}

const templates = {
  templateOK: {
    'calculator' : {
      selector: "#calculator",
      html: switcher + templateOK.calc
    },
    'display': {
      selector: "#display",
      html: templateOK.display
    },
    'keyboard': {
      selector: "#keyboard",
      html: getTemplateKeyboard(templateOK.keyboard)
    },
  },
  // templateSV: {
  //   'calculator': {
  //     selector: "#calculator",
  //     html: switcher + templateSV.calc
  //   },
  //   'display': {
  //     selector: "#display",
  //     html: templateSV.display
  //   },
  //   'keyboard': {
  //     selector: "#keyboard",
  //     html: getTemplateKeyboard(templateSV.keyboard)
  //   },
  // },
  //   templateSY: {
  //     'calculator': {
  //       selector: "#calculator",
  //       html: switcher + templateSY.calc
  //     },
  //     'display': {
  //       selector: "#display",
  //       html: templateSY.display
  //     },
  //     'keyboard': {
  //       selector: "#keyboard",
  //       html: getTemplateKeyboard(templateSY.keyboard)
  //     },
    //}
  }

