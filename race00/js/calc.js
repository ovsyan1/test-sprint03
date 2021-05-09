class Calc {
    _init;
    templates; // Шаблоны видов
    template; // Текущий шаблон
    skin; // OK SY SV
    switcher; // Шаблон переключателя скинов
    result; // Текущий результат вычислений
    history; // История выражений
    expression = '546546'; // Строка формирования выражения
    memory; // Результат памяти калькулятора
    keys; // Map клаввиш - id: {}
    types;
    themes;
    type; // Текущий тип калькулятора
    theme; // Текущая тема калькулятора

    calculator = {
        _render: null,
        _template: "",
        render() {
            this._render(this);
        },
        init(render, template) {
            this._render = render;
            this._template = template;
            console.log(template);
            return this;
        },
    }

    keyboard = {
        _render: null,
        _template: "",
        _simple: null,
        _engineering: null,
        render() {
            console.log(this._template);
            this._render(this);
        },
        init(render, template) {
            this._render = render;
            this._template = template;
            return this;
        },
    }

    display = {//Объект отображения на экран со свойствами и методами
        _render: null,
        _template: "",
        _expression: "23232",
        _text: "text",
        _memoryon: false,
        _historyon: false,
        // template(value) {
        //     this._template = value;
        //     console.log(value);
        //     return this;
        // },
        expression(value) {
            this._expression = value;
            return this;
        },
        text(value) {
            this._text = value;
            return this;
        },
        memoryOn(value) {
            value ? this._memoryon = true : this._memoryon = false;
            return this;
        },
        historyOn(value) {
            value ? this._historyon = true : this._historyon = false;
            return this;
        },
        render() {
            this._render(this);
        },
        init(render, template) {
            this._render = render;
            this._template = template;
            return this;
        },
    };

    constructor() {

    }

    init(skin) {
        //this.templates['template' + this.skin].calculator.html = this.switcher + this.templates['template' + this.skin].calculator.html;
        this.calculator.init(this.render, this.templates['template' + this.skin].calculator).render();
        this.display.init(this.render, this.templates['template' + this.skin].display).render();
        this.calculator._simple = this.types.simple;
        this.calculator._engineering = this.types.engineering;
        this.keyboard.init(this.render, this.templates['template' + this.skin].keyboard).render();
        document.querySelector(`#${skin}`).classList.add('active');
        document.querySelectorAll('.skin-switcher').forEach(item => item.addEventListener('click',(e) => this.switchSkin(e)));



        if(this.skin === 'OK') {
            let body = document.querySelector("body"),
                textArea = document.querySelector(".text"),
                circles = document.querySelectorAll(".circle");

            document.querySelector(".night").addEventListener("click", () => {
                if (body.classList.contains("t-dark")) {
                    body.classList.remove("t-dark");
                    body.classList.add("t-white");
                } else {
                    body.classList.remove("t-white");
                    body.classList.add("t-dark");
                }
            });

            let resultIngener = "";
            function renderIngener() {
                for (let k = 0; k < 24; k++) {
                    resultIngener += `<div class="circle">${k}</div>`;
                }
                return resultIngener
            }


            renderIngener();
            let ingener = document.querySelector(".ingener")
            ingener.innerHTML += resultIngener;
            document.querySelector('.checkbox').addEventListener('click', () => {
                if(ingener.classList.contains('hide')){
                    ingener.classList.remove('hide')
                    ingener.classList.add('show')
                }else{
                    ingener.classList.remove('show')
                    ingener.classList.add('hide')
                }

            })
        }

    }

    render(obj) {
        let result = obj._template.html;
        obj._template.html.match(/#[A-Z]*#/g)?.map(item => {
            result = result.replace(item, obj['_' + item.substr(1, item.length - 2).toLowerCase()]);
        });
        document.querySelector(obj._template.selector).innerHTML = result;
    }

    switchSkin(e) {
        this.skin = e.target.id;
        console.log(this.skin);
        this.init(this.skin);
    }

}