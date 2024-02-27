const date = new Date();
const year = date.getFullYear();

document.querySelector("#currentYear").textContent = year;

const lastMod = document.lastModified;
document.querySelector("#lastMod").textContent = lastMod;

//const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
//document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);