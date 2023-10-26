document.getElementById('calculateButton').addEventListener('click', function () {
    const rentAmount = parseFloat(document.getElementById('rentAmount').value);
    const startDate = new Date(document.getElementById('startDate').value);
    const leaseTerm = document.getElementById('leaseTerm').value;

    const startDate2021 = new Date('2021-10-01');
    const endDate2022 = new Date('2022-09-30');
    const startDate2022 = new Date('2022-10-01');
    const endDate2023 = new Date('2023-09-30');
    
    let rate = 0; // Initialize rate here

    if (startDate >= startDate2021 && startDate <= endDate2022) {
        if (leaseTerm === '1') {
            // Check if it's the first 6 months or the remaining 6 months
            const sixMonthsLater = new Date(startDate);
            sixMonthsLater.setMonth(sixMonthsLater.getMonth() + 6);
            if (new Date() < sixMonthsLater) {
                rate = 0;
            } else {
                rate = 1.5;
            }
        } else if (leaseTerm === '2') {
            rate = 2.5;
        } else {
            alert('Invalid lease term. Please select 1 for one year or 2 for two years.');
            return;
        }
    } else if (startDate >= startDate2022 && startDate <= endDate2023) {
        if (leaseTerm === '1') {
            rate = 3.25;
        } else if (leaseTerm === '2') {
            rate = 5.0;
        } else {
            alert('Invalid lease term. Please select 1 for one year or 2 for two years.');
            return;
        }
    } else {
        alert('Lease not applicable for the given date.');
        return;
    }

    const total = (rentAmount * rate) / 100;
    document.getElementById('leaseRate').textContent = `Lease rate: ${rate}%`;
    document.getElementById('totalRent').textContent = `Total rent for the lease term: $${total.toFixed(2)}`;

    const newRentAmount = rentAmount + (total * leaseTerm);
    document.getElementById('newRent').textContent = `New rent amount: $${newRentAmount.toFixed(2)}`;
    document.getElementById('results').style.display = 'block';
});
