"use strict"; 
(function () {   
    window.addEventListener("load", init);   
    function init() {     
        document.getElementById("calculate").addEventListener("click", calculate);   
    }    
    async function calculate() {     
        const num1 = document.getElementById("num1-txt").value;     
        const num2 = document.getElementById("num2-txt").value;   
        const operator = document.getElementById("operator").value;   
        let result = NaN;     
        const queryParams = new URLSearchParams({         
                num1: num1,         
                num2: num2,
                operator: operator      
            });      
        const response = await fetch(`/calculator?${queryParams}`);     
        if (response.ok) {         
            document.getElementById('answer').innerHTML = await response.json();        
        } 
        else {         
            document.getElementById('answer').innerHTML = await response.text();     
        }   
    } 
})(); 
