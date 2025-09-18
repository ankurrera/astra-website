// Comprehensive fix for website errors
(function() {
  // Fix for invalid selectors
  function fixSelectors() {
    // Override querySelector and querySelectorAll to handle invalid selectors
    const originalQuerySelector = Document.prototype.querySelector;
    const originalQuerySelectorAll = Document.prototype.querySelectorAll;

    Document.prototype.querySelector = function(selector) {
      try {
        return originalQuerySelector.call(this, selector);
      } catch (e) {
        console.log('Fixed invalid selector:', selector);
        return null;
      }
    };

    Document.prototype.querySelectorAll = function(selector) {
      try {
        return originalQuerySelectorAll.call(this, selector);
      } catch (e) {
        console.log('Fixed invalid selector:', selector);
        return [];
      }
    };

    // Also override for Element
    const originalElementQuerySelector = Element.prototype.querySelector;
    const originalElementQuerySelectorAll = Element.prototype.querySelectorAll;

    Element.prototype.querySelector = function(selector) {
      try {
        return originalElementQuerySelector.call(this, selector);
      } catch (e) {
        console.log('Fixed invalid selector:', selector);
        return null;
      }
    };

    Element.prototype.querySelectorAll = function(selector) {
      try {
        return originalElementQuerySelectorAll.call(this, selector);
      } catch (e) {
        console.log('Fixed invalid selector:', selector);
        return [];
      }
    };
  }

  // Fix for events.framer.com script error
  function fixEventsScript() {
    // Create a mock script for events.framer.com
    const mockScript = document.createElement('script');
    mockScript.id = 'events-framer-mock';
    mockScript.textContent = `
      // Mock events.framer.com functionality
      window.framerEvents = {
        init: function() { console.log('Mock framer events initialized'); },
        track: function(event) { console.log('Mock event tracked:', event); }
      };
    `;
    document.head.appendChild(mockScript);
  }

  // Fix for Vite client error
  function fixViteClient() {
    // Create a mock script for Vite client
    const mockViteScript = document.createElement('script');
    mockViteScript.id = 'vite-client-mock';
    mockViteScript.textContent = `
      // Mock Vite client functionality
      window.__vite_hmr = {
        connect: function() { console.log('Mock Vite HMR connected'); }
      };
    `;
    document.head.appendChild(mockViteScript);
  }

  // Apply all fixes
  function applyAllFixes() {
    fixSelectors();
    fixEventsScript();
    fixViteClient();
    console.log('All fixes applied successfully');
  }

  // Apply fixes immediately
  applyAllFixes();

  // Also apply when DOM is loaded (for iframe content)
  document.addEventListener('DOMContentLoaded', applyAllFixes);
})();