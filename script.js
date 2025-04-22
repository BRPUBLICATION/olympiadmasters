<script>
    // Handle page navigation
    function handleHashChange() {
      const hash = window.location.hash.substring(1);
      
      if (hash === 'codewars') {
        document.body.className = 'show-codewars';
      } else if (hash === 'agrihack') {
        document.body.className = 'show-agrihack';
      } else {
        document.body.className = '';
      }
      
      // Scroll to top when changing views
      window.scrollTo(0, 0);
      
      // Trigger animations for visible elements
      setTimeout(animateElements, 100);
    }
    
    // Animation on scroll
    function animateElements() {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          element.classList.add('visible');
        }
      });
    }
    
    // Back button functionality
    document.querySelectorAll('.back-button').forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.hash = '';
        document.body.className = '';
      });
    });
    
    // Initial setup
    window.addEventListener('load', handleHashChange);
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', animateElements);
    
    // Trigger initial animation
    setTimeout(animateElements, 500);
  </script>