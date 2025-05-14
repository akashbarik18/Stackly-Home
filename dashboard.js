document.addEventListener('DOMContentLoaded', function() {
  // Navigation functionality
  const navLinks = {
    dashboard: document.getElementById('dashboard-link'),
    projects: document.getElementById('projects-link'),
    clients: document.getElementById('clients-link'),
    appointments: document.getElementById('appointments-link'),
    analytics: document.getElementById('analytics-link'),
    settings: document.getElementById('settings-link'),
    mainSite: document.getElementById('main-site-link')
  };

  const contentSections = {
    dashboard: document.getElementById('dashboard-section'),
    projects: document.getElementById('projects-section'),
    clients: document.getElementById('clients-section'),
    appointments: document.getElementById('appointments-section'),
    analytics: document.getElementById('analytics-section'),
    settings: document.getElementById('settings-section')
  };

  // Set active navigation link and show corresponding section
  function setActiveNav(activeLink) {
    // Remove active class from all links and sections
    Object.values(navLinks).forEach(link => {
      if (link) link.parentElement.classList.remove('active');
    });
    Object.values(contentSections).forEach(section => {
      if (section) section.classList.remove('active');
    });

    // Add active class to clicked link and corresponding section
    if (activeLink && activeLink !== 'mainSite') {
      navLinks[activeLink].parentElement.classList.add('active');
      contentSections[activeLink].classList.add('active');
    }
  }

  // Add click event listeners to navigation links
  Object.keys(navLinks).forEach(key => {
    if (navLinks[key]) {
      navLinks[key].addEventListener('click', function(e) {
        if (key !== 'mainSite') {
          e.preventDefault();
          setActiveNav(key);
          // Update browser history
          history.pushState({ section: key }, '', `#${key}`);
        }
      });
    }
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', function(e) {
    const section = e.state ? e.state.section : 'dashboard';
    setActiveNav(section);
  });

  // Set initial active section based on URL hash
  const initialSection = window.location.hash.substring(1) || 'dashboard';
  if (contentSections[initialSection]) {
    setActiveNav(initialSection);
  }

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      sidebar.classList.toggle('active');
    });
  }

  // Notification dropdown
  const notifications = document.querySelector('.notifications');
  if (notifications) {
    notifications.addEventListener('click', function(e) {
      e.stopPropagation();
      this.querySelector('.notification-dropdown').classList.toggle('show');
    });
  }

  // Close dropdowns when clicking outside
  document.addEventListener('click', function() {
    const dropdowns = document.querySelectorAll('.notification-dropdown');
    dropdowns.forEach(dropdown => {
      dropdown.classList.remove('show');
    });
  });

  // User profile dropdown
  const userProfile = document.querySelector('.user-profile');
  if (userProfile) {
    userProfile.addEventListener('click', function(e) {
      e.stopPropagation();
      this.querySelector('.profile-dropdown').classList.toggle('show');
    });
  }

  // Add Project button
  const addProjectBtn = document.getElementById('add-project-btn');
  if (addProjectBtn) {
    addProjectBtn.addEventListener('click', function() {
      // In a real app, this would open a modal or navigate to a form
      alert('Add new project functionality would open here');
    });
  }

  // Add Client button
  const addClientBtn = document.getElementById('add-client-btn');
  if (addClientBtn) {
    addClientBtn.addEventListener('click', function() {
      alert('Add new client functionality would open here');
    });
  }

  // New Appointment button
  const newAppointmentBtn = document.getElementById('new-appointment-btn');
  if (newAppointmentBtn) {
    newAppointmentBtn.addEventListener('click', function() {
      alert('Schedule new appointment functionality would open here');
    });
  }

  // Tab functionality in Settings
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Remove active class from all tabs and content
      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });
      
      // Add active class to clicked tab and corresponding content
      this.classList.add('active');
      document.getElementById(`${tabId}-tab`).classList.add('active');
    });
  });

  // Initialize charts if Chart.js is available
  if (typeof Chart !== 'undefined') {
    initializeCharts();
  }

  // Sample data loading
  loadSampleData();
});

function initializeCharts() {
  // Revenue Chart
  const revenueCtx = document.getElementById('revenue-chart');
  if (revenueCtx) {
    new Chart(revenueCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Revenue',
          data: [4500, 5200, 4800, 5800, 6200, 7500, 8200, 7800, 8500, 9200, 8800, 9500],
          borderColor: '#6C5CE7',
          backgroundColor: 'rgba(108, 92, 231, 0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }

  // Projects Chart
  const projectsCtx = document.getElementById('projects-chart');
  if (projectsCtx) {
    new Chart(projectsCtx, {
      type: 'bar',
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
          label: 'Projects',
          data: [8, 12, 10, 15],
          backgroundColor: '#A29BFE'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }

  // Client Acquisition Chart
  const clientsCtx = document.getElementById('client-acquisition-chart');
  if (clientsCtx) {
    new Chart(clientsCtx, {
      type: 'doughnut',
      data: {
        labels: ['Referrals', 'Website', 'Social Media', 'Ads'],
        datasets: [{
          data: [35, 25, 20, 20],
          backgroundColor: [
            '#6C5CE7',
            '#A29BFE',
            '#FD79A8',
            '#00B894'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
}

function loadSampleData() {
  // Simulate loading data
  setTimeout(() => {
    const loadingElements = document.querySelectorAll('.loading');
    loadingElements.forEach(el => {
      el.classList.remove('loading');
    });
  }, 1000);
}