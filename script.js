// Energy Savings Calculator
function calculateSavings() {
  const kwh = parseFloat(document.getElementById('kwh').value);
  const result = document.getElementById('savings-result');
  const avgCO2 = 0.5; // kg CO2 per kWh

  if (isNaN(kwh) || kwh <= 0) {
    result.textContent = 'Please enter a valid number greater than 0.';
    result.style.color = 'red';
    return;
  }

  const saved = (kwh * avgCO2).toFixed(2);
  result.textContent = `Estimated CO₂ saved per day: ${saved} kg`;
  result.style.color = 'green';
}

// Handle pledge form
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('pledge-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const checkboxes = document.querySelectorAll('input[name="pledge"]:checked');
    if (checkboxes.length === 0) {
      alert('Please select at least one clean energy type to pledge.');
      return;
    }
    const values = Array.from(checkboxes).map(cb => cb.value).join(', ');
    alert(`Thank you for pledging to use: ${values}`);
    this.reset();
  });

  // Handle quiz form
  document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const answers = {
      q1: 'Solar',
      q2: 'Electricity',
    };

    let score = 0;
    Object.keys(answers).forEach(q => {
      const selected = document.querySelector(`input[name="${q}"]:checked`);
      if (selected && selected.value === answers[q]) score++;
    });

    alert(`Your Score: ${score}/2`);
    this.reset();
  });
});
