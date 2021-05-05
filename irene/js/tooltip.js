// 0. Set things up so you can interact with circles.
let circle_labels = document.getElementsByClassName('circle');
let circle = Array.from(circle_labels);

for (let i = 0; i < circle.length; i++) {
  circles[i].addEventListener('mouseenter', showTooltip);
  circles[i].addEventListener('mouseleave', hideTooltip);
}

// 1. What happens when you mouse over the circles
function showTooltip() {
  // What tooltip are we going to show?
  // Check the id of the circle we're hovering over.

  let id = this.id;
  console.log(id);
  let circle_number = id.split('-')[1];
  // Show the box the picture is in:
  document.getElementById('show-tooltip-' + circle_number).style.display =
    'block';
  document.getElementById(
    'show-tooltip-' + circle_number
  ).style.backgroundColor = 'white';
  document.getElementById('show-tooltip-' + circle_number).style.width =
    '150px';
  document.getElementById('show-tooltip-' + circle_number).style.height =
    '150px';
}

// 2. What happens when you mouse out of the circle
function hideTooltip() {
  let id = this.id;
  console.log(id);
  let circle_number = id.split('-')[1];

  // Show the box the tooltip is in:
  document.getElementById('show-tooltip-' + circle_number).style.display =
    'none';
}
