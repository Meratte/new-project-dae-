// script.js
function findPassion() {
  const interests = document.getElementById('interests').value.split(',').map(item => item.trim());
  const activities = document.getElementById('activities').value.split(',').map(item => item.trim());
  const skills = document.getElementById('skills').value.split(',').map(item => item.trim());


  const allInputs = [...interests, ...activities, ...skills];
  const uniqueInputs = Array.from(new Set(allInputs));
  const recommendations = uniqueInputs.filter(input => input.length > 0);

  const resultElement = document.getElementById('result');
  if (recommendations.length > 0) {
      resultElement.innerText = `Based on your inputs, you might be passionate about: ${recommendations.join(', ')}.`;
  } else {
      resultElement.innerText = 'Please enter some interests, activities, or skills to get recommendations.';
  }
}
