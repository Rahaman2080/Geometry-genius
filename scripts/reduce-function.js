// Reuseable function --> for reduce duplicate code

// Global function-1 for get input value
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
// Globla function-2 for set span, p, div, etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

// Triangle card using global function 1 & 2 
function calculateTriangleArea(){
    const b = getInputValue('triangle-base');
    const h = getInputValue('triangle-height');
    const area = 0.5 * b * h;
    setElementInnerText('triangle-area', area);
}

// Rectangle card using global function 1 & 2 
function calculateRectangleArea(){
    const w = getInputValue('rectangle-width');
    const l = getInputValue('rectangle-length');
    const multiple = w * l;
    setElementInnerText('rectangle-area', multiplel);
}
// Parallelogram card using global function 1 & 2 
function calculateParallelogramArea(){
    const b = getInputValue('parallelogram-base');
    const h = getInputValue('parallelogram-height');
    const gunFol = b * h;
    setElementInnerText('parallelogram-area', gunFol);
}

// Rhombus card using global function 1 & 2 
function calculateRhombusArea(){
    const d1 = getInputValue('Rhombus-base');
    const d2 = getInputValue('Rhombus-height');
    const multiple = 0.5 * d1 * d2;
    setElementInnerText('Rhombus-area', multiple);
}

// Pentagon card using globla function 1 & 2
function calculatePentagonArea(){
    const p = getInputValue('pentagon-p');
    const b = getInputValue('pentagon-b');
    const gunFol = 0.5 * p * b;
    setElementInnerText('pentagon-area', gunFol);
}

// Ellipse card using global function 1 & 2 
function calculateEllipseArea(){
    const a = getInputValue('ellipse-major-radius');
    const b = getInputValue('ellipse-minor-radius');
    const multiply = 3.14 * a * b;
    setElementInnerText('ellipse-area', multiply);
}
