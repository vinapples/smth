// Default messages bawaan (biar langsung muncul pas pertama buka)
const defaultMessages = [
  {
    to: "Afifa",
    message: `hey cewe happy graduation (⁠≧⁠▽⁠≦⁠)! PLEASE MASUK SMAN 2 AJAA YAKK PIPPP!!! selamat kamuu suda menyelesaikan Junior High School, CONGRATS FOR YOUUY!! tolong apip ntar jangan judes yak sm orang imut sepertiku, apip pasti nanti aku bakal kangen banget sama kamu (kangen mam di rumah apip wlee). sehatt selaluu yaa apipp & keluarga! i lovyuuu somay (JANGANN GAMONNN SAMA ARMANN)`,
    from: "You",
    song: ""
  },
  {
    to: "Indana",
    message: `HEYY CEWE GANTENGG, happy graduation Phi! semoga nanti di sma kamu dapet temennn yangg baikk!! omg pasti aku bakal kangen digambarin sama kamu, jangan asing plss.. NANTIII KASII KITA THR LAGII YAA (aku mau BMW 1 ajaa gapapaa kokkk)!! take care of you cewe gantengg, i love you sooo muchhh.`,
    from: "You",
    song: ""
  },
  {
    to: "Karenia",
    message: `hey KAYENNNN, HAPPYYY GRADUATION sist! kamu sudah menyelesaikan smp dengan baik ✅ AKU PASTIII KANGEN PULANG BARENGGG HUHUHU, KEYENN PLEASEEE JANGAN ASINGG.. jangann canggung juga, jangan lupain kita.. aku sangat sayang sama kayen, i love you so much my bestie.`,
    from: "You",
    song: ""
  },
  {
    to: "Patma",
    message: `sorri gakenal. JUST KIDDING BUB, happy graduation, ok, y. aduh bingung mw bilang apa 😭, pokonya timakaci suda menemani aku selama 3 tahun, i love you so much.`,
    from: "You",
    song: ""
  },
  {
    to: "Sintiya",
    message: `OMG KETUA KUUU, happy graduation ketos hebat! jangan terlalu ngeforsir tubuh kamu yaa, semangatt di sekolah baru!!hhh sana nonton aja sama MANTAN. ok y bye. i love you so much. iniii buatt pesannyaa. ituu pesannya.`,
    from: "You",
    song: ""
  }
];

// Saat load halaman, cek dulu di localStorage kalau kosong, isi default messages
function loadMessages() {
  const stored = localStorage.getItem('ponyo_messages');
  if (!stored) {
    localStorage.setItem('ponyo_messages', JSON.stringify(defaultMessages));
  }
}

// Panggil loadMessages saat init
loadMessages();
renderMessages();
