'use strict';
(() => {
  const translations = {
    ms: {
      meetingEyebrow: 'JOM BERBINCANG', meetingTitle: 'Mesyuarat keluarga',
      addToCalendar: 'Tambah ke kalendar (.ics)',
      nextMeeting: 'Mesyuarat seterusnya', meetingDate: 'Sabtu, 24 Oktober 2026 · 9:00 pagi (waktu Malaysia)',
      meetingDescription: 'Bincang rancangan Aidilfitri kita bersama di Google Meet.', joinMeeting: 'Sertai Google Meet',
      meetingNewTab: 'Dibuka dalam tab baharu.', countdownTitle: 'Menghitung hari ke Ipoh', datesTbc: 'KEDUA-DUA PILIHAN: TBC',
      optionOne: 'PILIHAN 1', optionTwo: 'PILIHAN 2', countdownUnits: ['hari', 'jam', 'minit', 'saat'],
      countdownReached: 'Tarikh mula pilihan ini telah tiba.',
      countdownNote: 'Kiraan ke 00:00 waktu Malaysia pada hari pertama setiap pilihan. Tarikh dan waktu bertolak masih akan disahkan.',
      accommodationEyebrow: 'CADANGAN PENGINAPAN', accommodationTitle: 'Pilihan tempat menginap.',
      accommodationNote: 'Cadangan sahaja. Harga, ketersediaan dan tempahan belum disahkan.',
      accommodationCaption: 'Penginapan yang dicadangkan untuk perjalanan keluarga',
      accommodationType: 'Jenis', accommodationName: 'Nama', accommodationDescription: 'Penerangan ringkas', accommodationLink: 'Pautan',
      villaDescription: 'Vila di Ipoh dengan 7 bilik tidur dan 6 bilik mandi. Ada kolam renang peribadi, dapur, penyaman udara, Wi-Fi percuma dan tempat letak kereta percuma.', viewBooking: 'Lihat di Booking.com',
      navOverview: 'Ringkasan', navItinerary: 'Atur cara', navEssentials: 'Persediaan',
      heroEyebrow: 'SATU KELUARGA, SATU PERJALANAN', heroTitle: ['Balik bersama.', 'Aidilfitri bermakna.'],
      heroDescription: 'Jauh dekat, kita tetap bersama. Semua maklumat perjalanan Aidilfitri 2027 keluarga kita, dalam satu tempat.',
      viewTrip: 'Lihat perjalanan', heroFootnote: 'Untuk semua ahli keluarga, dari yang kecil hingga yang besar.',
      artNote: 'Kenangan paling indah, kita cipta bersama.', destination: 'DESTINASI', travelDates: 'TARIKH PERJALANAN',
      tripStatus: 'STATUS PERJALANAN', planning: 'Dalam perancangan', overviewEyebrow: '01 / PERJALANAN KITA',
      overviewTitle: 'Semua yang perlu tahu.', overviewDescription: ['Semak di sini sebelum bertolak.', 'Maklumat disahkan akan dikemas kini.'],
      notice: 'Perjalanan ini masih dalam perancangan. Destinasi kita ialah Ipoh, Perak. Pilihan tarikh dan tempahan masih belum disahkan.', draft: 'DRAF',
      destinationTitle: 'Ke mana kita?', transportTitle: 'Perjalanan & pengangkutan', stayTitle: 'Tempat menginap',
      itineraryEyebrow: '02 / MASA BERSAMA', itineraryTitle: 'Ruang untuk kenangan.',
      itineraryDescription: ['Rancangan perjalanan keluarga.', 'Masa untuk berkumpul, berehat dan beraya.'],
      emptyTitle: 'Atur cara sedang dirancang', emptyDescription: 'Jadual perjalanan akan dipaparkan di sini setelah tarikh dan aktiviti disahkan. Semak semula untuk perkembangan terkini.',
      essentialsEyebrow: '03 / SEBELUM BERTOLAK', essentialsTitle: ['Dah sedia', 'untuk beraya?'],
      essentialsDescription: 'Sedikit persediaan, perjalanan lebih tenang. Tandakan senarai anda apabila sudah siap.',
      yourProgress: 'Persediaan anda', localNote: 'Senarai ini disimpan pada peranti ini sahaja.',
      storageUnavailable: 'Storan peranti tidak tersedia. Senarai ini hanya kekal semasa halaman ini dibuka.',
      shareEyebrow: 'SIMPAN & KONGSI', shareTitle: 'Satu pautan untuk seisi keluarga.',
      shareDescription: 'Simpan portal ini untuk rujukan sepanjang perjalanan.', copyLink: 'Salin pautan', print: 'Cetak ringkasan',
      copied: 'Pautan disalin. Sedia dikongsi dengan keluarga!', copyFallback: 'Salin pautan dalam kotak di bawah.',
      footer: 'Dirancang dengan kasih, untuk keluarga kita.', pending: 'Akan disahkan',
      packing: [
        ['documents', 'Dokumen perjalanan', 'Kad pengenalan, pasport jika perlu dan tiket.'],
        ['raya', 'Baju Raya & pakaian', 'Baju Raya, pakaian selesa dan kelengkapan solat.'],
        ['medicine', 'Ubat & keperluan kesihatan', 'Ubat peribadi dan kit pertolongan cemas.'],
        ['devices', 'Telefon & pengecas', 'Pengecas, power bank dan penyesuai jika perlu.'],
        ['children', 'Keperluan anak-anak', 'Makanan ringan, pakaian tambahan dan barang keselesaan.'],
        ['home', 'Rumah & perjalanan', 'Kunci rumah dan semak pengangkutan sebelum bertolak.']
      ]
    },
    en: {
      meetingEyebrow: 'LET’S PLAN TOGETHER', meetingTitle: 'Family meeting',
      addToCalendar: 'Add to calendar (.ics)',
      nextMeeting: 'Next meeting', meetingDate: 'Saturday, 24 October 2026 · 9:00 AM (Malaysia time)',
      meetingDescription: 'Discuss our Aidilfitri plans together on Google Meet.', joinMeeting: 'Join Google Meet',
      meetingNewTab: 'Opens in a new tab.', countdownTitle: 'Counting down to Ipoh', datesTbc: 'BOTH OPTIONS: TBC',
      optionOne: 'OPTION 1', optionTwo: 'OPTION 2', countdownUnits: ['days', 'hours', 'minutes', 'seconds'],
      countdownReached: 'This option’s start date has arrived.',
      countdownNote: 'Counting down to 00:00 Malaysia time on the first day of each option. Travel dates and departure times are still to be confirmed.',
      accommodationEyebrow: 'PROPOSED ACCOMMODATION', accommodationTitle: 'Places we could stay.',
      accommodationNote: 'Proposal only. Prices, availability and bookings are not confirmed.',
      accommodationCaption: 'Proposed accommodation for our family trip',
      accommodationType: 'Type', accommodationName: 'Name', accommodationDescription: 'Short description', accommodationLink: 'Link',
      villaDescription: 'A villa in Ipoh with 7 bedrooms and 6 bathrooms. It has a private pool, a kitchen, air conditioning, free Wi-Fi and free parking.', viewBooking: 'View on Booking.com',
      navOverview: 'Overview', navItinerary: 'Itinerary', navEssentials: 'Get ready',
      heroEyebrow: 'ONE FAMILY, ONE JOURNEY', heroTitle: ['Together again.', 'An Aidilfitri to remember.'],
      heroDescription: 'Near or far, we come together. Your home for all our family’s Aidilfitri 2027 travel information.',
      viewTrip: 'Explore the trip', heroFootnote: 'For every member of the family, little ones and grown-ups alike.',
      artNote: 'The best memories are the ones we make together.', destination: 'DESTINATION', travelDates: 'TRAVEL DATES',
      tripStatus: 'TRIP STATUS', planning: 'Planning in progress', overviewEyebrow: '01 / OUR JOURNEY',
      overviewTitle: 'Everything you need to know.', overviewDescription: ['Check here before you set off.', 'Confirmed details will be added as we plan.'],
      notice: 'Our trip is still being planned. Our destination is Ipoh, Perak. The date options and bookings are not yet confirmed.', draft: 'DRAFT',
      destinationTitle: 'Where are we going?', transportTitle: 'Travel & transport', stayTitle: 'Where we’re staying',
      itineraryEyebrow: '02 / TIME TOGETHER', itineraryTitle: 'Make room for memories.',
      itineraryDescription: ['Our family travel plans.', 'Time to gather, unwind and celebrate.'],
      emptyTitle: 'Our itinerary is taking shape', emptyDescription: 'The itinerary will appear here once dates and activities are confirmed. Check back for the latest updates.',
      essentialsEyebrow: '03 / BEFORE YOU GO', essentialsTitle: ['A little prep.', 'A happier Aidilfitri.'],
      essentialsDescription: 'A little preparation makes for a smoother journey. Tick off your essentials as you get ready.',
      yourProgress: 'Your preparations', localNote: 'This checklist is saved on this device only.',
      storageUnavailable: 'Device storage is unavailable. Your checklist lasts only while this page is open.',
      shareEyebrow: 'SAVE & SHARE', shareTitle: 'One link for the whole family.',
      shareDescription: 'Keep this portal handy throughout our journey.', copyLink: 'Copy portal link', print: 'Print summary',
      copied: 'Link copied. Ready to share with the family!', copyFallback: 'Copy the link from the box below.',
      footer: 'Planned with love, for our family.', pending: 'To be confirmed',
      packing: [
        ['documents', 'Travel documents', 'Identification, passports if needed and tickets.'],
        ['raya', 'Raya outfits & clothes', 'Baju Raya, comfortable clothes and prayer essentials.'],
        ['medicine', 'Medication & health essentials', 'Personal medication and a small first-aid kit.'],
        ['devices', 'Phone & chargers', 'Chargers, a power bank and adapters if needed.'],
        ['children', 'Little ones’ essentials', 'Snacks, extra clothes and familiar comforts.'],
        ['home', 'Home & travel checks', 'Lock up and check your transport before setting off.']
      ]
    }
  };
  const trip = window.RAYA_TRIP || {};
  const storageKey = 'raya-2027-preparations-v1';
  let language = 'ms';
  let checked = new Set();
  let storageAvailable = true;
  try {
    language = localStorage.getItem('raya-2027-language') === 'en' ? 'en' : 'ms';
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    if (Array.isArray(saved)) checked = new Set(saved.filter(id => translations.ms.packing.some(item => item[0] === id)));
  } catch { storageAvailable = false; }

  const byId = id => document.getElementById(id);
  const value = entry => typeof entry === 'string' ? entry : (entry?.[language] || entry?.ms || entry?.en || translations[language].pending);
  function updateProgress() {
    byId('progress-text').textContent = `${checked.size} / ${translations[language].packing.length}`;
    byId('packing-progress').max = translations[language].packing.length;
    byId('packing-progress').value = checked.size;
    byId('packing-progress').setAttribute('aria-label', translations[language].yourProgress);
    byId('storage-note').textContent = translations[language][storageAvailable ? 'localNote' : 'storageUnavailable'];
  }
  function updateCountdowns() {
    const now = Date.now();
    const t = translations[language];
    (trip.departureOptions || []).forEach((option, index) => {
      const target = Date.parse(option.start);
      const container = byId(`countdown-values-${index + 1}`);
      const heading = byId(`countdown-date-${index + 1}`);
      if (!container || !heading) return;
      heading.textContent = value(option.dates);
      container.replaceChildren();
      if (!Number.isFinite(target)) {
        container.textContent = t.pending;
        return;
      }
      if (target <= now) {
        container.textContent = t.countdownReached;
        return;
      }
      const seconds = Math.floor((target - now) / 1000);
      const parts = [Math.floor(seconds / 86400), Math.floor(seconds / 3600) % 24, Math.floor(seconds / 60) % 60, seconds % 60];
      parts.forEach((part, unit) => {
        const cell = document.createElement('span');
        const number = document.createElement('strong');
        number.textContent = String(part).padStart(2, '0');
        const label = document.createElement('small');
        label.textContent = t.countdownUnits[unit];
        cell.append(number, label);
        container.append(cell);
      });
    });
  }
  function render() {
    const t = translations[language];
    document.documentElement.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const text = t[element.dataset.i18n] ?? translations.ms[element.dataset.i18n];
      // Preserve the HTML fallback when newer content has no translation yet.
      if (typeof text !== 'string' && !Array.isArray(text)) return;
      element.replaceChildren();
      (Array.isArray(text) ? text : [text]).forEach((line, index) => {
        if (index) element.append(document.createElement('br'));
        element.append(document.createTextNode(line));
      });
    });
    byId('language').textContent = language === 'ms' ? 'EN ↗' : 'BM ↗';
    byId('language').setAttribute('aria-label', language === 'ms' ? 'Switch to English' : 'Tukar ke Bahasa Melayu');
    document.title = 'Aidilfitri 2027 · Keluarga Johari';
    for (const [id, field] of Object.entries({ 'summary-destination': 'destination', 'summary-dates': 'dates', 'destination-value': 'destination', 'transport-value': 'transport', 'stay-value': 'stay', 'destination-note': 'destinationNote', 'transport-note': 'transportNote', 'stay-note': 'stayNote' })) {
      byId(id).textContent = value(trip[field]);
    }
    const itinerary = byId('itinerary-items');
    itinerary.replaceChildren();
    if (Array.isArray(trip.itinerary) && trip.itinerary.length) {
      trip.itinerary.forEach(item => {
        const row = document.createElement('article');
        row.className = 'itinerary-row';
        const time = document.createElement('span');
        time.className = 'itinerary-time';
        time.textContent = value(item.time);
        const content = document.createElement('div');
        const title = document.createElement('h3');
        title.textContent = value(item.title);
        const description = document.createElement('p');
        description.textContent = value(item.description);
        content.append(title, description);
        row.append(time, content);
        itinerary.append(row);
      });
    } else {
      const empty = document.createElement('div');
      empty.className = 'itinerary-empty';
      const icon = document.createElement('span');
      icon.className = 'itinerary-icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = '✳';
      const content = document.createElement('div');
      const title = document.createElement('h3');
      title.textContent = t.emptyTitle;
      const description = document.createElement('p');
      description.textContent = t.emptyDescription;
      content.append(title, description);
      const badge = document.createElement('span');
      badge.className = 'badge';
      badge.textContent = t.draft;
      empty.append(icon, content, badge);
      itinerary.append(empty);
    }
    const checklist = byId('checklist');
    checklist.replaceChildren();
    t.packing.forEach(([id, title, description]) => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.checked = checked.has(id);
      input.addEventListener('change', () => {
        if (input.checked) checked.add(id); else checked.delete(id);
        try { localStorage.setItem(storageKey, JSON.stringify([...checked])); }
        catch { storageAvailable = false; }
        updateProgress();
      });
      const text = document.createElement('span');
      const strong = document.createElement('strong');
      strong.textContent = title;
      const small = document.createElement('small');
      small.textContent = description;
      text.append(strong, small);
      label.append(input, text);
      checklist.append(label);
    });
    byId('share-status').textContent = '';
    byId('share-fallback').hidden = true;
    updateProgress();
    updateCountdowns();
  }
  byId('language').addEventListener('click', () => {
    language = language === 'ms' ? 'en' : 'ms';
    try { localStorage.setItem('raya-2027-language', language); } catch { /* Language switching still works without storage. */ }
    render();
  });
  byId('share').addEventListener('click', async () => {
    const link = new URL(window.location.href);
    link.hash = '';
    link.search = '';
    try {
      await navigator.clipboard.writeText(link.href);
      byId('share-status').textContent = translations[language].copied;
    } catch {
      const field = byId('share-fallback');
      field.value = link.href;
      field.hidden = false;
      field.focus();
      field.select();
      byId('share-status').textContent = translations[language].copyFallback;
    }
  });
  byId('print').addEventListener('click', () => window.print());
  render();
  window.setInterval(updateCountdowns, 1000);
})();
