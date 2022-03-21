var totalCost = 750;
const patioForm = document.getElementById('patioForm');
var estimateDiv = document.getElementById('putEstimateHere');

function handleSubmit(event){
    event.preventDefault();
    totalCost = 750;
    const formData = new FormData(event.target);
    const squareFootage = formData.get('sqFt');
    console.log(squareFootage);
    const tierValue = formData.get('tiers');
    console.log(tierValue);

    if(tierValue == "Low end"){
        totalCost += squareFootage * 14;
        // console.log(totalCost);
        // estimateDiv.innerHTML = `$${totalCost}`;
    }
    else if(tierValue == "Mid-range"){
        totalCost += squareFootage * 17;
        // console.log(totalCost);
        // estimateDiv.innerHTML = `$${totalCost}`;
    }
    else if(tierValue == "High-end"){
        totalCost += squareFootage * 20;
        // console.log(totalCost);
        // estimateDiv.innerHTML = `$${totalCost}`;
    }
        console.log(totalCost);
        estimateDiv.innerHTML = `Your Projected Estimate: $${totalCost}`;
}

patioForm.addEventListener('submit', handleSubmit);