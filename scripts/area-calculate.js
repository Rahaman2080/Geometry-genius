// function for triangle card
function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    
    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    
    // calculate base and height
    const area = 0.5 * base * height;
    console.log(area);

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
} 

// function for Rectangle card
function calculateRectangleArea(){
    // get triangle base value
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    
    // get triangle height value
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    
    // calculate base and height
    const area = width * length;
    console.log(area);

    // show triangle area
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;
}