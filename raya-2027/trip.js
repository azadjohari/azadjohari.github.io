// Edit confirmed family information here. Keep private details out of this public repository.
// Each display value supports both Bahasa Melayu (ms) and English (en).
// Leave unknown fields null: the portal will show "To be confirmed".
window.RAYA_TRIP = {
  destination: { ms: 'Ipoh, Perak', en: 'Ipoh, Perak' },
  dates: {
    ms: 'Tarikh akan disahkan (TBC)\nPilihan 1: 10–12 Mac 2027, Rabu–Jumaat.\nPilihan 2: 11–13 Mac 2027, Khamis–Sabtu.',
    en: 'Dates to be confirmed (TBC)\nOption 1: 10–12 March 2027, Wednesday–Friday.\nOption 2: 11–13 March 2027, Thursday–Saturday.'
  },
  // Countdown targets are midnight in Malaysia, not confirmed departure times.
  departureOptions: [
    { start: '2027-03-10T00:00:00+08:00', dates: { ms: '10–12 Mac 2027 · Rabu–Jumaat', en: '10–12 March 2027 · Wednesday–Friday' } },
    { start: '2027-03-11T00:00:00+08:00', dates: { ms: '11–13 Mac 2027 · Khamis–Sabtu', en: '11–13 March 2027 · Thursday–Saturday' } }
  ],
  transport: null,
  stay: null,
  destinationNote: { ms: 'Kita akan ke Ipoh, Perak. Tempat berkumpul akan dikongsi setelah disahkan.', en: 'We are heading to Ipoh, Perak. The meeting point will be shared once confirmed.' },
  transportNote: { ms: 'Maklumat perjalanan, waktu bertolak dan pengangkutan akan dikemas kini.', en: 'Travel arrangements, departure times and transport will be added here.' },
  stayNote: { ms: 'Tempat penginapan dan maklumat daftar masuk akan dikemas kini.', en: 'Accommodation and check-in information will be added here.' },
  // Add confirmed itinerary entries, for example:
  // { time: { ms: 'Hari 1 · 9:00 pagi', en: 'Day 1 · 9:00 am' },
  //   title: { ms: 'Berkumpul', en: 'Meet up' },
  //   description: { ms: 'Tempat yang disahkan', en: 'Confirmed meeting point' } }
  itinerary: []
};
