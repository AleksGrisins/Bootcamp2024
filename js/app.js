// accept button
function accept() {
  console.log('hooray');
  alert('Success');
  hideForm();
}

// reject button
function reject() {
  console.log('fail');
  alert('Rejected');
  hideForm();
}

// simple hide
// document.getElementById('container').style.display = 'none';

// hide form function
function hideForm() {
  let x = document.getElementById("container");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.classList.add('hidden');
    setTimeout(function() {
      x.style.display = 'none';
    }, 300);
  }
}

// close button
document.getElementById('closeBtn').addEventListener('click', function() {
  let container = document.querySelector('.container');
  container.classList.add('hidden');
  hideForm();
});
