"use strict";
// const year = document.getElementById("year")
// const thisyear = new Date().getFullYear()
// year.setAttribute("datetime", thisyear)
// year.textContent = thisyear
//1st variation:
// let year: HTMLElement | null
// year = document.getElementById("year")
// let thisyear : string
// thisyear = new Date().getFullYear().toString()
// if(year) {
//     year.setAttribute("datetime", thisyear)
//     year.textContent = thisyear    
// }
// 2nd variation
const year = document.getElementById("year");
const thisyear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisyear);
year.textContent = thisyear;
