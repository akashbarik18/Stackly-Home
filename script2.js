function showDetails(name, description) {
    document.getElementById("modalTitle").textContent = name;
    document.getElementById("modalDescription").textContent = description;
    document.getElementById("modal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
// Fade in team cards on scroll
window.addEventListener('scroll', () => {
    document.querySelectorAll('.team-member').forEach(member => {
      const top = member.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        member.classList.add('show');
      }
    });
  });
  
  // Optional: Smooth scrolling effect on page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelectorAll('.team-member').forEach(member => {
        const top = member.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          member.classList.add('show');
        }
      });
    }, 100);
  });
    // achivment
    function animateOnScroll() {
        const elements = document.querySelectorAll('[data-animate]');
        const triggerBottom = window.innerHeight * 0.85;
    
        elements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < triggerBottom) {
            el.classList.add('show');
          }
        });
      }
    
      window.addEventListener('scroll', animateOnScroll);
      window.addEventListener('load', animateOnScroll);
      
      //model content
      const galleryData = {
        "Priya Sharma": [
          "https://cdn.pixabay.com/photo/2017/03/28/12/16/tables-2181979_1280.jpg",
          "https://cdn.pixabay.com/photo/2015/11/07/21/29/livingroom-1032733_1280.jpg",
          "https://cdn.pixabay.com/photo/2014/08/11/21/35/room-416049_1280.jpg"
        ],
        "Rahul Verma": [
          "https://media.istockphoto.com/id/2164305033/photo/happy-project-manager-greeting-a-construction-worker-in-the-building.jpg?s=612x612&w=0&k=20&c=5tUApuYOWcqEY1pbz1j-WOqNgYbntQehpRa0mAHehZo=",
          "https://media.istockphoto.com/id/2196905211/photo/happy-female-architect-came-to-an-agreement-with-workers-at-construction-site.jpg?s=612x612&w=0&k=20&c=3mIokrBcwMAKd8myAK7NDnYqHML_9L3V-lxBUlhU11w=",
          "https://media.istockphoto.com/id/2112749005/photo/modern-contemporary-style-small-wooden-terrace-in-lush-garden-with-house-interior-background.jpg?s=612x612&w=0&k=20&c=rtiD90a0nA3UpHfGsL1GnVG19GjIZd8H762MTgGcJug="
        ],
        "Simran Kaur": [
          "https://media.istockphoto.com/id/512622632/photo/3d-furnished-house-interior.jpg?s=612x612&w=0&k=20&c=0_lWAOWiFrCp3Ec-7ulxDzFtx10BTWWdEpRCkt2Ut_Q=",
          "https://media.istockphoto.com/id/1098277678/photo/shop-store-shopping-mall-interior-visualization-3d-illustration.jpg?s=612x612&w=0&k=20&c=SpQUyeWSJUGXkfHoM0Sk4k84RvhpBHd4wduV94N6pLk=",
          "https://media.istockphoto.com/id/2191924479/photo/3d-illustration-of-building-project.jpg?s=612x612&w=0&k=20&c=ZcJDKd2LJgZMBD7JG9eHCobWweeqbtpiBi0hKVuz8D4="
        ],
        "Arjun Mehta": [
          "https://media.istockphoto.com/id/528056142/photo/abstract-sketch-design-of-interior-kitchen.jpg?s=612x612&w=0&k=20&c=fy9jGxYoG2vngC8PyIQ6eIubdWqAgFnDzbBOYku5lH4=",
          "https://media.istockphoto.com/id/2151912551/photo/building-contractor-talking-to-clients-renovating-their-house.jpg?s=612x612&w=0&k=20&c=QhL8-C4dGz4ATIhLTaFYD_tKjHTLAKWZIBsuBW_n-ms=",
          "https://media.istockphoto.com/id/140183283/photo/architect-viewing-blueprints.jpg?s=612x612&w=0&k=20&c=0nNswar7gYXG77Uz-mnHizdwpSw2BnQCqTTI_vroY_o="
        ],
        "Sneha Iyer": [
          "https://media.istockphoto.com/id/811852936/photo/living-room-interior-with-orange-armchair.jpg?s=612x612&w=0&k=20&c=-5WtRls-oMDuhiV8zZjD-9HebARb-IyR9beqAjIipbQ=",
          "https://media.istockphoto.com/id/2206668604/photo/handmade-pottery-creation-in-artisan-home-workshop-with-natural-lighting.jpg?s=612x612&w=0&k=20&c=zR67j5hrEd708gQhU6n-nWsceWxavitzK-v0gL85RqM=",
          "https://media.istockphoto.com/id/1804885488/photo/modern-luxurious-villa-with-garden.jpg?s=612x612&w=0&k=20&c=DtDmytbEW4-2GEKK-ZmAGf9YRttre65I-0bKjczWKXY="
        ]
      };
      
      function showDetails(name, desc) {
        document.getElementById('memberName').innerText = name;
        document.getElementById('memberDesc').innerText = desc;
      
        const gallery = document.getElementById('workGallery');
        gallery.innerHTML = '';
      
        galleryData[name]?.forEach(url => {
          const img = document.createElement('img');
          img.src = url;
          gallery.appendChild(img);
        });
      
        document.getElementById('workModal').style.display = 'block';
      }
      
      function closeModal() {
        document.getElementById('workModal').style.display = 'none';
      }
      