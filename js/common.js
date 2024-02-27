// Ensure common.js is loaded at the right time:
// - Place it in the `<head>` of your HTML before other scripts.
// - Alternatively, include it using a `<script>` tag with `defer` or `async`:
//   <script src="common.js" defer></script>

window.addEventListener('DOMContentLoaded', function() {
    // Verify element IDs exist before fetching:
    if (document.getElementById('header') && document.getElementById('footer')) {
      // Use separate variables for clarity and error handling:
      const headerEl = document.getElementById('header');
      const footerEl = document.getElementById('footer');
  
      // Handle errors gracefully:
      const handleError = (error) => {
        console.error('Error fetching header or footer:', error);
        // Add fallback UI or other error handling as needed
      };
  
      // Fetch and insert content concurrently for efficiency:
      Promise.all([
        fetch('header.html').catch(handleError),
        fetch('footer.html').catch(handleError)
      ]).then(([headerResponse, footerResponse]) => {
        Promise.all([
          headerResponse.text().then(html => headerEl.innerHTML = html),
          footerResponse.text().then(html => footerEl.innerHTML = html)
        ]).catch(handleError);
      });
    } else {
      console.error('Header or footer elements not found');
    }
  });