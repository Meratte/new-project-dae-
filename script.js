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

let findPassion_age = 17;
if (findPassion_age < 18) {
  console.log("You're too young!");
}

let age = 18;
let findpassion_test = 19;
if (findpassion_test === 19 && findPassion_age === 18) {
  console.log("You can be in a theater");
} else {
  console.log(age + findpassion_test);
}
