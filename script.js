document.addEventListener("DOMContentLoaded", () => {
  // Slider logic for class="slider" (if used elsewhere)
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach((slider) => {
    let index = 0;
    const images = slider.querySelectorAll("img");

    function showSlide(i) {
      images.forEach((img, idx) => {
        img.style.display = idx === i ? "block" : "none";
      });
    }

    function nextSlide() {
      index = (index + 1) % images.length;
      showSlide(index);
    }

    showSlide(index);
    setInterval(nextSlide, 3000);
  });

  // Feedback form submission
  document.getElementById("feedback-form")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    let errorMessage = "";

    const feedbackMessage = document.getElementById("feedback-message") || (() => {
      const msg = document.createElement("div");
      msg.id = "feedback-message";
      msg.style.marginTop = "10px";
      document.getElementById("feedback-form").appendChild(msg);
      return msg;
    })();

    if (!namePattern.test(name)) {
      errorMessage = "❌ Name must contain only letters and spaces.";
    } else if (!emailPattern.test(email)) {
      errorMessage = "❌ Please enter a valid email address.";
    } else if (message.length < 5) {
      errorMessage = "❌ Feedback must be at least 5 characters long.";
    }

    if (errorMessage) {
      feedbackMessage.textContent = errorMessage;
      feedbackMessage.style.color = "red";
    } else {
      const testimonialCard = document.createElement("div");
      testimonialCard.classList.add("testimonial");
      testimonialCard.innerHTML = `<p>"${message}"</p><strong>- ${name}</strong>`;
      document.getElementById("testimonial-cards").appendChild(testimonialCard);

      feedbackMessage.textContent = "✅ Thank you for your feedback!";
      feedbackMessage.style.color = "green";

      document.getElementById("feedback-form").reset();

      setTimeout(() => {
        feedbackMessage.textContent = "";
      }, 5000);
    }
  });

  // Service section animation
  const serviceItems = document.querySelectorAll(".services-list li");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  serviceItems.forEach((item) => observer.observe(item));

  // Portfolio image slider
  document.querySelectorAll(".image-slider").forEach((slider) => {
    const images = slider.querySelectorAll("img");
    let current = 0;

    function showNextImage() {
      images[current].style.opacity = 0;
      current = (current + 1) % images.length;
      images[current].style.opacity = 1;
    }

    images[0].style.opacity = 1;
    setInterval(showNextImage, 3000);
  });

  // HOME SECTION SLIDER (.slide)
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const slideInterval = 5000;

  function showNextHomeSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  setInterval(showNextHomeSlide, slideInterval);

  // NAV MENU TOGGLE
  // Toggle menu function
  function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
  } 
  window.toggleMenu = function () {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("active");
  };

  // Scroll Nav - Make navbar sticky and transparent
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.top2');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled'); // Add class when scrolled
    } else {
      navbar.classList.remove('scrolled'); // Remove class when back at the top
    }
  });

  // CONTACT FORM VALIDATION + NOTIFICATION
  const contactBtn = document.getElementById("contact-send-btn");
  contactBtn?.addEventListener("click", function (e) {
    e.preventDefault();

    const name = document.getElementById("contact-name")?.value.trim();
    const email = document.getElementById("contact-email")?.value.trim();
    const message = document.getElementById("contact-message")?.value.trim();
    const notification = document.getElementById("contact-notification");

    const namePattern = /^[A-Za-z\s]+$/;;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!namePattern.test(name)) {
      notification.textContent = "Invalid name. Only letters and spaces allowed.";
      notification.className = "error";
      return;
    }

    if (!emailPattern.test(email)) {
      notification.textContent = "Invalid email format.";
      notification.className = "error";
      return;
    }

    if (message.length === 0) {
      notification.textContent = "Message cannot be empty.";
      notification.className = "error";
      return;
    }

    notification.textContent = "✅ Thank you! Your message has been sent successfully. We'll get back to you soon.";
    notification.className = "success";
    
    // Remove the message after 3 seconds (3000 milliseconds)
    setTimeout(() => {
      notification.textContent = ""; // Clear the message
      notification.className = "";  // Reset the class
    }, 3000);
    

    document.getElementById("contact-name").value = "";
    document.getElementById("contact-email").value = "";
    document.getElementById("contact-message").value = "";
  });
});
