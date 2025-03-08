const cbmCalc = document.getElementById('cbm');

const landingPriceCalc = document.getElementById('landing-price');


const title = document.getElementById('main-title')

const form1 = document.getElementById('form1');
const len = document.getElementById('length');
const width = document.getElementById('width');
const height = document.getElementById('height');
const form1Result = document.getElementById('result1');

const form2 = document.getElementById('form2');
const price = document.getElementById('price');
const weight = document.getElementById('weight');
const shippingFee = document.getElementById('shipping-fee');
const clearingFee = document.getElementById('clearing-fee');
const exchangeRate = document.getElementById('exchange-rate');

const resultsDiv = document.getElementById('result-div');
const resultForm1 = document.getElementById('result1');


cbmCalc.addEventListener('click', switchToForm1);
landingPriceCalc.addEventListener('click', switchToForm2);

function switchToForm1(){
    form1.style.display = 'block';
    form2.style.display = 'none';
    cbmCalc.style.color = 'var(--accent-color)'
    landingPriceCalc.style.color = 'black'
    resultsDiv.style.display = 'none';
    title.innerText = 'Cubic Meter Calculator'

}

function switchToForm2(){
    form1.style.display = 'none';
    form2.style.display = 'block';
    landingPriceCalc.style.color = 'var(--accent-color)'
    cbmCalc.style.color = 'black'
    resultsDiv.style.display = 'none'
    title.innerText = 'Landing Price Calculator'
}

form1.addEventListener('submit', calculateForm1)
form2.addEventListener('submit', calculateForm2)

function calculateForm1(e){
    e.preventDefault();
    
    const calcForm1 = len.value * width.value * height.value / 1000000;

    form1Result.placeholder = calcForm1 > 0.1 ? calcForm1.toFixed(1) : 0.1
    form1Result.style.fontSize = '25px'

    resultsDiv.style.display = 'block'

    resultsDiv.innerHTML = `
    <p id='results-heading'>RESULTS</p>

    <p>${len.value} * ${width.value} * ${height.value} cm = <strong>${calcForm1} m<sup>3</sup></strong> = <strong>${parseFloat(calcForm1 * 35.31).toFixed(1)} ft<sup>3</sup></strong></p>
    
    <p>${len.value} cm = <strong>${len.value / 100} m</strong>, ${width.value} cm = <strong>${width.value / 100} m</strong>, ${height.value} cm = <strong>${height.value / 100} m</strong>,</p>

    <p>${len.value / 100} * ${width.value / 100} * ${height.value / 100} = <strong>${((len.value / 100) * (width.value / 100) * (height.value / 100)).toFixed(5)} cbm</strong>
    `


}


function calculateForm2(e){
    e.preventDefault();

    const totalShippingFee = shippingFee.value * weight.value * exchangeRate.value;

    const totalClearingFee = weight.value * clearingFee.value

    landingCost = parseFloat(price.value) + parseFloat(totalShippingFee) + parseFloat(totalClearingFee)

    resultsDiv.style.display = 'block';

    resultsDiv.innerHTML = `
    <p id='results-heading'>Landing Cost</p>

    <p>Price of Goods:  <strong>${price.value}</strong></p>

    <p>Shipping in (₦): <strong>(${weight.value} * ${shippingFee.value}) * ${exchangeRate.value} = ${totalShippingFee}₦ </strong></p>

    <p>Clearing Total:  <strong>${weight.value} * ${clearingFee.value} = ${totalClearingFee}₦</strong></p>

    <p>Landing Cost:    <strong>${price.value} + ${totalShippingFee} + ${totalClearingFee} = ${landingCost}₦</strong></p>
    `
}