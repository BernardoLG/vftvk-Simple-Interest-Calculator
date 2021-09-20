// Main calculations function
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear() + parseInt(years);
    
    // Check if amount is valid
    var valid = validatePrincipal();

    if(valid) {
        var interest = principal * rate * years / 100;

        document.getElementById("result").innerHTML="If you deposit <mark>"+principal+
        "</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+
        interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>";
    }
}

// Update value shown on page
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;

}

// Validate amount
function validatePrincipal(){
    var principal = document.getElementById("principal").value;

    // Check if amount is valid
    if(principal <= 0){
        alert("Enter a positive number");
        principal.focus();
        return false;
    }
    
    // If amount is valid
    return true;
}
