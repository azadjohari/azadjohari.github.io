// Edit confirmed family information here. Keep private details out of this public repository.
// Each display value supports both Bahasa Melayu (ms) and English (en).
// Leave unknown fields null: the portal will show "To be confirmed".
window.RAYA_TRIP = {
  destination: null,
  dates: null,
  transport: null,
  stay: null,
  destinationNote: { ms: 'Destinasi dan tempat berkumpul akan dikongsi setelah disahkan.', en: 'The destination and meeting point will be shared once confirmed.' },
  transportNote: { ms: 'Maklumat perjalanan, waktu bertolak dan pengangkutan akan dikemas kini.', en: 'Travel arrangements, departure times and transport will be added here.' },
  stayNote: { ms: 'Tempat penginapan dan maklumat daftar masuk akan dikemas kini.', en: 'Accommodation and check-in information will be added here.' },
  // Add confirmed itinerary entries, for example:
  // { time: { ms: 'Hari 1 · 9:00 pagi', en: 'Day 1 · 9:00 am' },
  //   title: { ms: 'Berkumpul', en: 'Meet up' },
  //   description: { ms: 'Tempat yang disahkan', en: 'Confirmed meeting point' } }
  itinerary: []
};
