// // 0. Set things up so you can interact with circles.
// let circle_labels = document.getElementsByClassName('circle');
// let circle = Array.from(circle_labels);

// for (let i = 0; i < circle.length; i++) {
//   circles[i].addEventListener('mouseenter', showTooltip);
//   circles[i].addEventListener('mouseleave', hideTooltip);
// }

let ids = ['Asian_Fam', 'BlackFam', 'WhiteFam'];
for (let i = 0; i < ids.length; i++) {
  let circle = document.getElementById(ids[i]);
  circle.addEventListener('mouseenter', showTooltip);
  circle.addEventListener('mouseleave', hideTooltip);
  console.log(circle);
}

// 1. What happens when you mouse over the circles
function showTooltip() {
  // What tooltip are we going to show?
  // Check the id of the circle we're hovering over.

  let id = this.id;
  console.log(id);

  if (id == 'Asian_Fam') {
    document.getElementById('show-tooltip-0').style.display = 'block';
    document.getElementById('show-tooltip-0').style.marginLeft = '-100px';
  } else if (id == 'WhiteFam') {
    document.getElementById('show-tooltip-1').style.display = 'block';
  } else if (id == 'BlackFam') {
    document.getElementById('show-tooltip-2').style.display = 'block';
  }
}

// 2. What happens when you mouse out of the circle
function hideTooltip() {
  let id = this.id;
  console.log(id);

  if (id == 'Asian_Fam') {
    document.getElementById('show-tooltip-0').style.display = 'none';
  } else if (id == 'WhiteFam') {
    document.getElementById('show-tooltip-1').style.display = 'none';
  } else if (id == 'BlackFam') {
    document.getElementById('show-tooltip-2').style.display = 'none';
  }
}
