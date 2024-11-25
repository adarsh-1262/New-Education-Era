const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-20">
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: <a href="mailto:support@eduhub.com" className="text-blue-400 hover:underline">support@eduhub.com</a></p>
            <p>Phone: <a href="tel:+919876543210" className="text-blue-400 hover:underline">+91-98765-43210</a></p>
            <p>Address: 123 EduHub Street, Knowledge City, India</p>
          </div>
  
          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about-us" className="hover:underline">About Us</a></li>
              <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="/help-center" className="hover:underline">Help Center</a></li>
            </ul>
          </div>
  
          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <p>Stay connected with us:</p>
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src="/icons/facebook-icon.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <img src="/icons/twitter-icon.svg" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src="/icons/linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src="/icons/instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
  
        {/* Bottom Footer Section */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} EduHub. All rights reserved.</p>
          <p>Designed and developed with ❤️ by the EduHub Team.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  