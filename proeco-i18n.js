/* PROECO i18n — EN | IT Language Switch
   Titles (h1, h2, hero-tagline, section-title) ALWAYS stay in English.
   Body text, labels, descriptions translate to Italian. */
(function(){
  var lang = localStorage.getItem('proeco-lang') || 'en';
  var originals = {};

  var T = {
    // ── NAV & SHARED ──
    "Sectors":"Settori", "Team":"Team", "Technology":"Tecnologia",
    "Services":"Servizi", "Contact":"Contatti",
    "Get in Touch":"Contattaci", "Explore Expertise":"Esplora le Competenze",
    "Contact us":"Contattaci", "Learn More":"Scopri di Pi\u00f9",
    "Explore sector":"Esplora il settore", "Back to Home":"Torna alla Home",
    "Scroll":"Scorri",

    // ── FOOTER ──
    "Proud to Develop Solutions":"Orgogliosi di Sviluppare Soluzioni",
    "Navigate":"Navigazione", "On this page":"In questa pagina",
    "Headquarters":"Sede Centrale", "Home":"Home",
    "Digital Eng.":"Ing. Digitale", "Capability":"Capacit\u00e0",
    "Our Team":"Il Nostro Team", "Hero":"Hero",

    // ── LANDING: labels ──
    "Key Figures":"Dati Chiave",
    "Revenue Target 2026":"Obiettivo Fatturato 2026",
    "Internal Experts":"Esperti Interni",
    "Years of Experience":"Anni di Esperienza",
    "Countries where we operate":"Paesi in cui operiamo",
    "Market Sectors":"Settori di Mercato",
    "The People":"Le Persone",
    "Permanent Engineers":"Ingegneri Permanenti",
    "Disciplines":"Discipline",
    "Years Experience":"Anni di Esperienza",
    "Meet the people behind PROECO":"Scopri le persone dietro PROECO",
    "PROECO Leadership":"Leadership PROECO",
    "Engineering Team":"Team di Ingegneria",
    "Project Culture":"Cultura di Progetto",
    "Innovation":"Innovazione",
    "Scan Accuracy":"Precisione Scansione",
    "Coverage":"Copertura",
    "3D Model":"Modello 3D",
    "Engineering Services":"Servizi di Ingegneria",

    // ── LANDING: paragraphs ──
    "landing.hero_sub":
      "Soluzioni ingegneristiche multidisciplinari per Energia & Industria. Dalla progettazione di processo alla tecnologia 3D digital twin \u2014 costruiamo ci\u00f2 che altri non possono.",
    "landing.sectors_desc":
      "Operazioni ingegneristiche in Oil & Gas, Energia Verde, Chimico ed Energia Elettrica \u2014 dall\u2019Adriatico all\u2019Africa Occidentale, dal Golfo al Sud-est Asiatico.",
    "landing.og_desc":
      "Piattaforme offshore, impianti onshore, ingegneria di perforazione e sistemi di pipeline.",
    "landing.green_desc":
      "Efficienza energetica industriale, progetti di sostenibilit\u00e0 e integrazione di sistemi rinnovabili.",
    "landing.chem_desc":
      "Progettazione di processo, ingegneria della sicurezza e supporto completo al ciclo di vita per impianti chimici.",
    "landing.power_desc":
      "Ingegneria elettrica e strumentale per sistemi di generazione e distribuzione.",
    "landing.team_desc":
      "Dietro ogni consegna di progetto, ogni calcolo di precisione e ogni consegna puntuale c\u2019\u00e8 un team di 105 ingegneri che hanno scelto di costruire le loro carriere intorno all\u2019eccellenza. Parte del Gruppo Parlym, PROECO riunisce specialisti in 8 discipline \u2014 uniti da un impegno condiviso nel risolvere i problemi che altri non possono.",
    "landing.quote1":
      "Non assumiamo ingegneri che conoscono le risposte. Assumiamo ingegneri che fanno le domande giuste.",
    "landing.quote2":
      "La precisione non \u00e8 un obiettivo \u2014 \u00e8 lo standard minimo che ci poniamo.",
    "landing.quote3":
      "Quando otto discipline pensano come una sola, l\u2019impossibile diventa il prossimo progetto.",
    "landing.digital_desc":
      "Operiamo alla frontiera della tecnologia ingegneristica, combinando il 3D Laser Scanning con piattaforme di modellazione intelligente per garantire precisione e velocit\u00e0 senza pari.",
    "landing.services_desc":
      "Un team integrato di oltre 75 specialisti interni che copre ogni disciplina ingegneristica necessaria per progetti industriali complessi.",
    "landing.svc_process_desc":
      "PFD, P&ID, HAZOP, simulazione di processo, calcoli idraulici e studi di fattibilit\u00e0 dal concept al dettaglio.",
    "landing.svc_civil_desc":
      "Fondazioni, strutture in acciaio, progettazione in cemento, supporti per tubazioni e planimetrie per impianti industriali.",
    "landing.svc_mech_desc":
      "Specifiche apparecchiature, analisi delle sollecitazioni, progettazione piping 3D, ingegneria skid & packages.",
    "landing.svc_ei_desc":
      "Sistemi di potenza, schemi unifilari, datasheet strumenti, filosofia di controllo e studi SIL.",
    "landing.svc_auto_desc":
      "Architettura DCS/PLC, diagrammi causa & effetto, sistemi strumentali di sicurezza e ingegneria SCADA.",
    "landing.svc_fire_desc":
      "Sistemi di protezione antincendio, QRA, valutazione del rischio, ingegneria della risposta alle emergenze e classificazione ATEX.",
    "landing.contact_desc":
      "Raccontaci il tuo progetto. Il nostro team multidisciplinare \u00e8 pronto a progettare soluzioni che superano le aspettative."
  };

  function apply(l) {
    lang = l;
    localStorage.setItem('proeco-lang', l);

    // Update switch look
    var en = document.getElementById('lang-en');
    var it = document.getElementById('lang-it');
    if (en && it) {
      en.style.color = l==='en' ? '#fff' : 'rgba(200,210,220,0.4)';
      en.style.fontWeight = l==='en' ? '600' : '400';
      it.style.color = l==='it' ? '#fff' : 'rgba(200,210,220,0.4)';
      it.style.fontWeight = l==='it' ? '600' : '400';
    }

    // Translate data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var k = el.getAttribute('data-i18n');
      if (!originals[k]) originals[k] = el.textContent;
      el.textContent = (l==='it' && T[k]) ? T[k] : originals[k];
    });
  }

  function init() {
    var ph = document.getElementById('lang-switch-placeholder');
    if (!ph) return;
    ph.innerHTML =
      '<span id="lang-en" style="cursor:pointer;font-size:11px;letter-spacing:.08em;transition:all .2s" onclick="window.__i18n(\'en\')">EN</span>' +
      '<span style="font-size:10px;color:rgba(200,210,220,0.3);margin:0 3px">|</span>' +
      '<span id="lang-it" style="cursor:pointer;font-size:11px;letter-spacing:.08em;transition:all .2s" onclick="window.__i18n(\'it\')">IT</span>';
    apply(lang);
  }

  window.__i18n = apply;

  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', init);
  else
    init();
})();
