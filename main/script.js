
  document.addEventListener('DOMContentLoaded', function() {
    const navButton = document.getElementById('navButton');
    const navList = document.querySelector('nav ul');
    
    navButton.addEventListener('click', function() {
      navList.classList.toggle('active');
    });
  
    document.addEventListener('click', function(event) {
      if (!event.target.closest('nav ul') && !event.target.closest('.side-buttons')) {
        navList.classList.remove('active');
      }
    });
  });
  


  document.addEventListener('DOMContentLoaded', function() {
    const logoLink = document.getElementById('logo-link');
    const userProfile = document.getElementById('user-profile');
  
    logoLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior
      userProfile.classList.toggle('hidden'); // Toggle the visibility of the user profile
    });
  });
  