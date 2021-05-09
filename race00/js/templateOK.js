'use strict'
// Шаблон калькулятора в index.html
const calcTemplateOK = `
<div class="switch-box">
    <div class="switch">
        <input type="checkbox" class="checkbox">
        
    </div>
    <div class="night-box">
            <div class="night"><div>
                   &#9789;
    </div>    
</div>
    </div>
    </div>
    <div class="container">
      <div class="ingener hide"></div>
    <div class="box">
      <div class="text" id="display">12345</div>
      <div class="keyboard" id="keyboard"></div>
    </div>
    </div>
`;

// Шаблон дисплея
const displayTemplateOK = `

`;

// Шаблон клавиатуры
const keyboardTemplateOK = `
<div class="circle #CLASSES#" id="#ID#" onclick="#HANDLER#">#NAME#</div>
`;

const templateOK = {
    calc: calcTemplateOK,
    display: displayTemplateOK,
    keyboard: keyboardTemplateOK
}