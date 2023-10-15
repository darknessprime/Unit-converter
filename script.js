/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const len = document.getElementById('len');
const vol = document.getElementById('vol');
const mass = document.getElementById('mass');

const convert = document.getElementById('convert');
const reset = document.getElementById('reset');

let input = document.getElementById('input');


convert.addEventListener('click', () => {
    len.textContent = `${input.value} meters = ${(input.value * 3.281).toFixed(2)} feet | ${input.value} feet = ${(input.value / 3.281).toFixed(2)} meters`;
    vol.textContent = `${input.value} liters = ${(input.value * 0.264).toFixed(2)} gallons | ${input.value} gallons = ${(input.value / 0.264).toFixed(2)} liters`;
    mass.textContent = `${input.value} kilograms = ${(input.value * 2.204).toFixed(2)} pounds | ${input.value} pounds = ${(input.value / 2.204).toFixed(2)} kilograms`;
});

reset.addEventListener('click', () => {
    input.value = 0;
    len.textContent = `${input.value} meters = ${(input.value * 3.281).toFixed(2)} feet | ${input.value} feet = ${(input.value / 3.281).toFixed(2)} meters`;
    vol.textContent = `${input.value} liters = ${(input.value * 0.264).toFixed(2)} gallons | ${input.value} gallons = ${(input.value / 0.264).toFixed(2)} liters`;
    mass.textContent = `${input.value} kilograms = ${(input.value * 2.204).toFixed(2)} pounds | ${input.value} pounds = ${(input.value / 2.204).toFixed(2)} kilograms`;
});