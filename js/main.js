document.addEventListener('DOMContentLoaded', () => {
  // Inisialisasi Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Inisialisasi AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out-cubic',
      offset: 40
    });
  }

  // Toggle Navigasi Mobile
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        if (menuIcon) menuIcon.setAttribute('data-lucide', 'x');
      } else {
        mobileMenu.classList.add('hidden');
        if (menuIcon) menuIcon.setAttribute('data-lucide', 'menu');
      }
      if (window.lucide) lucide.createIcons();
    });

    // Menutup menu mobile saat salah satu link diklik
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        if (menuIcon) menuIcon.setAttribute('data-lucide', 'menu');
        if (window.lucide) lucide.createIcons();
      });
    });
  }

  // Filter Kategori Produk di Halaman Katalog
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productItems = document.querySelectorAll('.product-item');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('bg-gold-500', 'text-white');
          b.classList.add('bg-white', 'text-brand-brown', 'border', 'border-[#E5DFD5]');
        });

        btn.classList.add('bg-gold-500', 'text-white');
        btn.classList.remove('bg-white', 'border-[#E5DFD5]');

        const category = btn.getAttribute('data-category');

        productItems.forEach(item => {
          if (category === 'all' || item.getAttribute('data-category') === category) {
            item.classList.remove('hidden');
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 30);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.96)';
            setTimeout(() => {
              item.classList.add('hidden');
            }, 200);
          }
        });
      });
    });
  }
});