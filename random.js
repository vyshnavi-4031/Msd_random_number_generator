document.addEventListener('DOMContentLoaded', function () {
    function generateRandomDigit() {
        const minValue = parseInt(document.getElementById('minValue').value);
        const maxValue = parseInt(document.getElementById('maxValue').value);

        if (isNaN(minValue) || isNaN(maxValue)) {
            alert("Please enter valid numbers for both fields.");
            return;
        }

        if (minValue > maxValue) {
            alert("Minimum value should be less than or equal to the maximum value.");
            return;
        }

        const randomDigit = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        document.getElementById('randomDigit').value = randomDigit;
    }

    document.querySelector('button').addEventListener('click', generateRandomDigit);
});
