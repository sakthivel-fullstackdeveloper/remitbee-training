let values = [];
let result = 0;
let method = '';
let element = document.getElementById('num');
let ele = document.getElementById('msged');
let msg = [];
let data = ""
// get values
const getValues = (num) => { element.value += num; }

const clearAll=()=>{
  element.value=''
  ele.innerText='';
  values = [];
  result = 0;
  method = '';
  msg = [];
  data = ""
}

const clr = () => {
    element.value = '';
    values.length = 0;
    method = '';
    result = 0;
}

const add = () => {
    const valued = element.value;
    if (valued.length != 0) {
        values.push(valued - 0);
        result = values.reduce((a, b) => (a + b), 0);
        method = 'add';
        values = [result];
        msgSetter(valued);
        element.value = '';

    }
    else alert("please enter the number");
}

const sub = () => {
    const valued = element.value;
    if (valued.length != 0) {
        values.push(valued - 0);
        result = values.reduce((a, b) => (a - b), 0);
        values = [result]
        method = 'sub';
        msgSetter(valued);
        element.value = '';
    }
    else alert("please enter the number");
}

const multi = () => {
    const valued = element.value;
    if (valued.length != 0) {
        values.push(valued - 0);
        result = values.reduce((a, b) => (a * b), 1);
        values = [result]
        method = 'multi';
        element.value = '';
        msgSetter(valued)
    }
    else alert("please enter the number");
}

const mod = () => {
    const valued = element.value;
    if (valued.length != 0) {
        values.push(valued - 0);
        result = values.reduce((a, b) => a % b);
        values = [result]
        method = 'mod';
        element.value = '';
        msgSetter(valued);
    }
    else alert("please enter the number");
}

const square = () => {
    const valued = element.value;
    if (valued.length != 0) {
        result = valued ** 2;
        values = [result];
        method = 'sq';
        msgSetter(valued);
        element.value = '';
    }
    else alert("please enter the number");
}

const sqrte = () => {
    const valued = element.value;
    if (valued.length != 0) {
        result = Math.sqrt(valued);
        values = [result]
        method = 'sqrt';
        msgSetter('√' + valued)
        element.value = '';
    }
    else alert("please enter the number");
}

const divide = () => {
    const valued = element.value;
    if (valued.length != 0) {
        values.push(valued - 0);
        try {
            result = values.reduce((a, b) => (a / b), 1);
            if (result == "Infinity") {
                throw new Error("Zero division error");
            }
        }
        catch (error) { alert(error.message) }
        values = [result]
        method = 'divide';
        msgSetter(valued);
        element.value = '';
    }
    else alert("please enter the number");
}

const display = () => {
    element.value = result;
    values = []
}

const msgSetter = (sym) => {
    data += sym
}

const msgUpdater = (sym) => {
    data += "=" + result;
    display();
    msg.push(data);
    data = ""
    ele.innerHTML='';
    for(let n of msg ){
        let content = document.createElement('li');
        content.innerText=n;
        ele.appendChild(content);
    }
    method='';
    
}

const prcs = () => {
    const valued = element.value;
    if (valued.length != 0 && method != '') {
        switch (method) {
            case 'mod':
                msgSetter('%');
                mod();
                msgUpdater();
                break;
            case 'sub':
                msgSetter('-');
                sub();
                msgUpdater();
                break;
            case 'add':
                msgSetter('+');
                add();
                msgUpdater();
                break;
            case 'multi':
                msgSetter('x');
                multi();
                msgUpdater();
                break;
            case 'divide':
                msgSetter('/');
                divide();
                msgUpdater();
                break;
        }
        element.value = result;
    }
    else {
        switch (method) {
            case 'sq':
                msgSetter("²");
                msgUpdater();
                break;
            case 'sqrt':
                msgUpdater();
                break;
        }
    }
    
}