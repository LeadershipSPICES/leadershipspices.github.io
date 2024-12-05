// Add a dynamic year to the footer
const footerText = document.getElementById('footer-text');
const currentYear = new Date().getFullYear();
footerText.textContent = `© ${currentYear} Leadership SPICES™. All rights reserved.`;
