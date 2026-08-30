(() => {
  const header = document.querySelector('header.top');
  if (header && !header.querySelector('.v2-brand')) {
    header.innerHTML = `
      <div class="v2-brand" aria-label="صلاتي">
        <div class="v2-brand-copy">
          <span class="v2-eyebrow">رفيقك إلى الصلاة</span>
          <span class="v2-logo">صــلاتي</span>
        </div>
        <div class="v2-mark" aria-hidden="true">☾</div>
      </div>`;
  }

  document.title = 'صلاتي — مواقيت الصلاة والأذكار';

  const city = document.getElementById('cityName');
  const locButton = document.getElementById('locBtn');
  if (city && locButton) {
    locButton.setAttribute('role', 'button');
    locButton.setAttribute('tabindex', '0');
    locButton.setAttribute('aria-label', 'تغيير الموقع');
    locButton.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        locButton.click();
      }
    });

    window.setTimeout(() => {
      const value = city.textContent.trim();
      if (/جار|تحديد|\.\.\./.test(value)) {
        city.textContent = 'اختر مدينتك لحساب المواقيت';
      }
    }, 8000);
  }

  document.querySelectorAll('button:not([type])').forEach((button) => button.type = 'button');
})();
