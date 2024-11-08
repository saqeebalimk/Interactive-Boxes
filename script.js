function toggleOptions(boxNumber) {
  // Get the options div for the clicked box
  const optionsDiv = document.getElementById(`options${boxNumber}`);
  
  // Toggle the display property
  if (optionsDiv.style.display === "block") {
    optionsDiv.style.display = "none";
  } else {
    optionsDiv.style.display = "block";
  }
}

function addToCart() {
  // Example action for the "Add to Cart" button
  alert("Items added to cart!");
}
