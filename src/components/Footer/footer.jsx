const footer = () => {
  return (
    <div>
      <footer class="bg-[#0b1d36] text-gray-300 mt-12">
        <div class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
          <div class="md:col-span-2">
            <h2 class="text-white font-semibold text-lg mb-4">
              CS — Ticket System
            </h2>
            <p class="text-sm leading-relaxed text-gray-400">
              CS Ticket System is a comprehensive customer support platform
              designed to streamline ticket management and improve response
              times. Our intuitive interface makes it easy for teams to
              collaborate and resolve customer issues efficiently.
            </p>
          </div>
          <div>
            <h3 class="text-white font-semibold mb-4">Company</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-white font-semibold mb-4">Services</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white">
                  Products & Services
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Download Apps
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-white font-semibold mb-4">Information</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Join Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-700 text-center text-sm text-gray-400 py-4">
          © 2026 CS — Ticket System. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default footer;
