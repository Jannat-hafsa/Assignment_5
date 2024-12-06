
function modal() {
    const modals = document.getElementById('modal').innerText;
    return modals; }
    



const donateButton = document.getElementById('donate-button');
const cardHeading =document.getElementById('card-1');
donateButton.addEventListener('click', function () {
    const inputSection = parseFloat(document.getElementById('input-section').value) || 0; // Donation input
    const totalAmountElement = document.getElementById('total-amount'); // Balance display element
    const currentBalance = parseFloat(totalAmountElement.innerText) || 0; // Current balance

    if (inputSection <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    if (currentBalance >= inputSection) {
        // Deduct donation amount from total balance
        const newBalance = currentBalance - inputSection;
        totalAmountElement.innerText = newBalance.toFixed(2);

        // Update the donation total
        const bdtElement = document.getElementById('BDT'); // Total donation element
        const currentDonationTotal = parseFloat(bdtElement.innerText) || 0;
        const newDonationTotal = currentDonationTotal + inputSection;
        bdtElement.innerText = newDonationTotal.toFixed(2);

        
        
        alert(modal()); // Call the function and pass its result to alert
        

        const p = document.createElement('p');
        const date = new Date(); // Get the current date and time
        p.innerText = `${inputSection} Taka is Donated for ${cardHeading.innerText}
        ${date}`;

    console.log(p); 
    document.getElementById('transaction-container').appendChild(p);
    } else {
        alert("You have insufficient balance.");
    }

});
const donateButton2 = document.getElementById('donate-button2');
const cardHeading2 =document.getElementById('card-2');
donateButton2.addEventListener('click', function () {
    const inputSection2 = parseFloat(document.getElementById('input-section2').value) || 0; // Donation input
    const totalAmountElement2 = document.getElementById('total-amount'); // Balance display element
    const currentBalance2 = parseFloat(totalAmountElement2.innerText) || 0; // Current balance

    if (inputSection2 <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    if (currentBalance2 >= inputSection2) {
        // Deduct donation amount from total balance
        const newBalance2 = currentBalance2 - inputSection2;
        totalAmountElement2.innerText = newBalance2.toFixed(2);

        // Update the donation total
        const bdtElement2 = document.getElementById('BDT2'); // Total donation element
        const currentDonationTotal2 = parseFloat(bdtElement2.innerText) || 0;
        const newDonationTotal2 = currentDonationTotal2 + inputSection2;
        bdtElement2.innerText = newDonationTotal2.toFixed(2);

        
        
        alert(modal()); // Call the function and pass its result to alert
        

        const p2 = document.createElement('p');
        const date2 = new Date(); // Get the current date and time
        p2.innerText = `${inputSection2} Taka is Donated for ${cardHeading2.innerText}
        ${date2}`;

    console.log(p2); 
    document.getElementById('transaction-container2').appendChild(p2);
    } else {
        alert("You have insufficient balance.");
    }

});
const donateButton3 = document.getElementById('donate-button3');
const cardHeading3 =document.getElementById('card-3');
donateButton3.addEventListener('click', function () {
    const inputSection3 = parseFloat(document.getElementById('input-section2').value) || 0; // Donation input
    const totalAmountElement3 = document.getElementById('total-amount'); // Balance display element
    const currentBalance3 = parseFloat(totalAmountElement3.innerText) || 0; // Current balance

    if (inputSection3 <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    if (currentBalance3 >= inputSection3) {
        // Deduct donation amount from total balance
        const newBalance3 = currentBalance3 - inputSection3;
        totalAmountElement3.innerText = newBalance3.toFixed(2);

        // Update the donation total
        const bdtElement3 = document.getElementById('BDT3'); // Total donation element
        const currentDonationTotal3 = parseFloat(bdtElement3.innerText) || 0;
        const newDonationTotal3 = currentDonationTotal3 + inputSection3;
        bdtElement3.innerText = newDonationTotal3.toFixed(2);

        
        
        alert(modal()); // Call the function and pass its result to alert
        

        const p3 = document.createElement('p');
        const date3 = new Date(); // Get the current date and time
        p3.innerText = `${inputSection3} Taka is Donated for ${cardHeading3.innerText}
        ${date3}`;

    console.log(p3); 
    document.getElementById('transaction-container3').appendChild(p3);
    } else {
        alert("You have insufficient balance.");
    }

});


    
const donationSection=document.getElementById('donationSection');
const transactionSection=document.getElementById('transaction-section');
const historyBtn =document.getElementById('historyBtn');
const donationBtn =document.getElementById('donationBtn');


donationBtn.addEventListener('click', () => {
  donationSection.style.display = 'block';
  transactionSection.style.display = 'none';
  donationBtn.classList.add('active');
  historyBtn.classList.remove('active');
  donationBtn.style.backgroundColor='green';
  historyBtn.style.backgroundColor='white'

});

historyBtn.addEventListener('click', () => {
    transactionSection.style.display = 'block';
  donationSection.style.display = 'none';
  historyBtn.classList.add('active');
  donationBtn.classList.remove('active');
  historyBtn.style.backgroundColor='green';
  donationBtn.style.backgroundColor='white';
});


















  