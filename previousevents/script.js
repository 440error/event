









function toggleNav() {
    var navList = document.querySelector("nav ul");
    navList.classList.toggle("active");
  }












document.getElementById("see-more-btn").addEventListener("click", function () {
    // Create and append additional event cards
    var container = document.querySelector(".container");
    for (var i = 0; i < 4; i++) {
      var eventCard = document.createElement("div");
      eventCard.className = "event-card";
      eventCard.innerHTML = `
        <img src="new_image_${i + 1}.jpg.jpg" alt="Event ${i + 5} Image" class="event-image" />
        <h2>Event ${i + 5}</h2>
        <p>Description of Event ${i + 5}...</p>
        <p>Date: May ${i + 1}, 2023</p>
      `;
      container.appendChild(eventCard);
    }
    this.style.display = "none";
  });