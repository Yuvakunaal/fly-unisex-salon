export type Lang = "en" | "hi" | "te";

export const languages: { code: Lang; label: string; nativeLabel: string }[] = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "hi", label: "Hindi", nativeLabel: "हिन्दी" },
  { code: "te", label: "Telugu", nativeLabel: "తెలుగు" },
];

export type Dict = {
  nav: { services: string; gallery: string; reviews: string; visit: string; call: string };
  hero: {
    eyebrow: string;
    line1: string;
    line2: string;
    subheadPrefix: string;
    subheadSuffix: string;
    callNow: string;
    whatsapp: string;
    directions: string;
  };
  about: {
    eyebrow: string;
    letters: { letter: string; word: string; meaning: string }[];
    quote: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    disclaimer: string;
    items: { category: string; blurb: string; items: { name: string; price: string }[] }[];
  };
  gallery: { eyebrow: string; heading: string; tiles: string[] };
  testimonials: {
    eyebrow: string;
    heading: string;
    justdial: string;
    googleMaps: string;
    items: { quote: string; name: string; source: string }[];
  };
  location: {
    eyebrow: string;
    heading: string;
    hours: { day: string; time: string }[];
    callNow: string;
    whatsapp: string;
    directions: string;
    justdial: string;
  };
  footer: { tagline: string; instagram: string; justdial: string };
};

export const translations: Record<Lang, Dict> = {
  en: {
    nav: { services: "Services", gallery: "Gallery", reviews: "Reviews", visit: "Visit", call: "Call" },
    hero: {
      eyebrow: "Unisex Salon · Yousufguda, Hyderabad",
      line1: "Walk in ordinary.",
      line2: "Fly out unforgettable.",
      subheadPrefix: "F·L·Y stands for First Love Yourself — ",
      subheadSuffix: "the idea behind every cut, colour and consultation at our chair in Yousufguda.",
      callNow: "Call Now",
      whatsapp: "WhatsApp Us",
      directions: "Get directions",
    },
    about: {
      eyebrow: "The story behind the name",
      letters: [
        { letter: "F", word: "First", meaning: "You, before anyone else's expectations." },
        { letter: "L", word: "Love", meaning: "Not vanity — care. The kind that shows up in the mirror." },
        { letter: "Y", word: "Yourself", meaning: "However that looks today. We just help it show." },
      ],
      quote:
        "Fly isn't a spa you visit once for a birthday. It's the unisex chair around the corner in Yousufguda — for a Monday-morning trim, a beard shape-up before a meeting, or a full bridal morning. Everyone's welcome in the same chair.",
    },
    services: {
      eyebrow: "The menu",
      heading: "A little something for everyone.",
      disclaimer: "Indicative pricing shown below — the final menu and prices are confirmed at the salon.",
      items: [
        {
          category: "Hair",
          blurb: "Cuts, colour, keratin and everything in between — for every hair type.",
          items: [
            { name: "Haircut & style", price: "from ₹299" },
            { name: "Global colour", price: "from ₹1,499" },
            { name: "Keratin treatment", price: "from ₹2,999" },
          ],
        },
        {
          category: "Skin & Face",
          blurb: "Facials and cleanups that leave your skin looking rested.",
          items: [
            { name: "Signature facial", price: "from ₹999" },
            { name: "Cleanup & polish", price: "from ₹599" },
          ],
        },
        {
          category: "Spa & Massage",
          blurb: "Slow down for an hour. Full-body and head massage therapies.",
          items: [
            { name: "Head massage", price: "from ₹399" },
            { name: "Full body spa", price: "from ₹1,799" },
          ],
        },
        {
          category: "Men's Grooming",
          blurb: "Beard sculpting, hot towel shaves, and grooming done properly.",
          items: [
            { name: "Beard shape-up", price: "from ₹149" },
            { name: "Hot towel shave", price: "from ₹249" },
          ],
        },
        {
          category: "Bridal & Party",
          blurb: "Full glam for the day you want to remember. Trials available.",
          items: [
            { name: "Party makeup", price: "from ₹1,999" },
            { name: "Bridal package", price: "on consultation" },
          ],
        },
      ],
    },
    gallery: {
      eyebrow: "The runway",
      heading: "Work that speaks for itself.",
      tiles: [
        "Before → after",
        "Fresh fade",
        "Balayage",
        "Bridal glam",
        "Beard sculpt",
        "Blowout",
        "Colour correction",
        "Spa ritual",
      ],
    },
    testimonials: {
      eyebrow: "Reviews",
      heading: "Loved on Google & JustDial.",
      justdial: "View on JustDial",
      googleMaps: "Read on Google Maps",
      items: [
        {
          quote:
            "Walked in for a trim, walked out feeling like I actually loved what I saw in the mirror. That's the whole F.L.Y. thing, I get it now.",
          name: "Priya S.",
          source: "Google review",
        },
        {
          quote: "Best beard shape-up in Yousufguda, easily. Clean space, no rush.",
          name: "Arjun K.",
          source: "JustDial review",
        },
        {
          quote: "Booked a bridal trial and they actually listened to what I wanted instead of pushing a package.",
          name: "Sneha R.",
          source: "Google review",
        },
      ],
    },
    location: {
      eyebrow: "Visit us",
      heading: "Come as you are.",
      hours: [
        { day: "Monday – Saturday", time: "10:00 AM – 9:00 PM" },
        { day: "Sunday", time: "10:00 AM – 8:00 PM" },
      ],
      callNow: "Call Now",
      whatsapp: "WhatsApp",
      directions: "Directions",
      justdial: "JustDial",
    },
    footer: {
      tagline: "First Love Yourself — unisex hair, skin, spa and grooming in Yousufguda, Hyderabad.",
      instagram: "Instagram",
      justdial: "JustDial",
    },
  },

  hi: {
    nav: { services: "सेवाएं", gallery: "गैलरी", reviews: "समीक्षाएं", visit: "पता", call: "कॉल" },
    hero: {
      eyebrow: "यूनिसेक्स सैलून · यूसुफगुडा, हैदराबाद",
      line1: "आइए रोज़ की तरह।",
      line2: "निकलिए बिल्कुल नए अंदाज़ में।",
      subheadPrefix: "F·L·Y का मतलब है First Love Yourself — यानी पहले खुद से प्यार करें। ",
      subheadSuffix: "यूसुफगुडा में हर कट, कलर और कंसल्टेशन के पीछे यही सोच है।",
      callNow: "अभी कॉल करें",
      whatsapp: "व्हाट्सएप करें",
      directions: "रास्ता देखें",
    },
    about: {
      eyebrow: "नाम के पीछे की कहानी",
      letters: [
        { letter: "F", word: "First", meaning: "सबसे पहले आप — किसी और की उम्मीदों से पहले।" },
        { letter: "L", word: "Love", meaning: "दिखावा नहीं, देखभाल। वो देखभाल जो आईने में नज़र आती है।" },
        { letter: "Y", word: "Yourself", meaning: "जैसे भी आप आज नज़र आना चाहें। हम बस उसे उभारते हैं।" },
      ],
      quote:
        "Fly सिर्फ जन्मदिन पर एक बार जाने वाला स्पा नहीं है। ये यूसुफगुडा के कोने की वो यूनिसेक्स कुर्सी है — सोमवार की सुबह के ट्रिम के लिए, मीटिंग से पहले दाढ़ी सेट करने के लिए, या दुल्हन की पूरी सुबह के लिए। यहाँ हर कोई एक ही कुर्सी पर खुशी से आता है।",
    },
    services: {
      eyebrow: "मेन्यू",
      heading: "हर किसी के लिए कुछ खास।",
      disclaimer: "नीचे दिखाई गई कीमतें अनुमानित हैं — अंतिम मेन्यू और कीमतें सैलून में तय होंगी।",
      items: [
        {
          category: "बाल",
          blurb: "कट, कलर, केराटिन और भी बहुत कुछ — हर तरह के बालों के लिए।",
          items: [
            { name: "हेयरकट व स्टाइल", price: "₹299 से" },
            { name: "ग्लोबल कलर", price: "₹1,499 से" },
            { name: "केराटिन ट्रीटमेंट", price: "₹2,999 से" },
          ],
        },
        {
          category: "स्किन व फेस",
          blurb: "फेशियल और क्लीनअप जो आपकी त्वचा को तरोताज़ा बना दें।",
          items: [
            { name: "सिग्नेचर फेशियल", price: "₹999 से" },
            { name: "क्लीनअप व पॉलिश", price: "₹599 से" },
          ],
        },
        {
          category: "स्पा व मसाज",
          blurb: "एक घंटे के लिए धीमे हो जाइए। फुल-बॉडी और हेड मसाज थेरेपी।",
          items: [
            { name: "हेड मसाज", price: "₹399 से" },
            { name: "फुल बॉडी स्पा", price: "₹1,799 से" },
          ],
        },
        {
          category: "मेन्स ग्रूमिंग",
          blurb: "दाढ़ी शेपिंग, हॉट टॉवल शेव, और सही तरीके से ग्रूमिंग।",
          items: [
            { name: "बीयर्ड शेप-अप", price: "₹149 से" },
            { name: "हॉट टॉवल शेव", price: "₹249 से" },
          ],
        },
        {
          category: "ब्राइडल व पार्टी",
          blurb: "उस दिन के लिए पूरा ग्लैम जिसे आप यादगार बनाना चाहते हैं। ट्रायल उपलब्ध।",
          items: [
            { name: "पार्टी मेकअप", price: "₹1,999 से" },
            { name: "ब्राइडल पैकेज", price: "कंसल्टेशन पर" },
          ],
        },
      ],
    },
    gallery: {
      eyebrow: "हमारा हुनर",
      heading: "काम खुद बोलता है।",
      tiles: [
        "पहले → बाद में",
        "फ्रेश फेड",
        "बालायाज",
        "ब्राइडल ग्लैम",
        "बीयर्ड स्कल्प्ट",
        "ब्लोआउट",
        "कलर करेक्शन",
        "स्पा रिचुअल",
      ],
    },
    testimonials: {
      eyebrow: "समीक्षाएं",
      heading: "Google और JustDial पर पसंद किया गया।",
      justdial: "JustDial पर देखें",
      googleMaps: "Google Maps पर पढ़ें",
      items: [
        {
          quote: "ट्रिम के लिए आई थी, आईने में खुद को देखकर सच में अच्छा लगा। यही तो है F.L.Y. वाली बात, अब समझ आया।",
          name: "प्रिया एस.",
          source: "Google समीक्षा",
        },
        {
          quote: "यूसुफगुडा में सबसे अच्छा बीयर्ड शेप-अप, आसानी से। साफ जगह, कोई जल्दबाज़ी नहीं।",
          name: "अर्जुन के.",
          source: "JustDial समीक्षा",
        },
        {
          quote: "ब्राइडल ट्रायल बुक किया और उन्होंने पैकेज थोपने की बजाय सच में मेरी बात सुनी।",
          name: "स्नेहा आर.",
          source: "Google समीक्षा",
        },
      ],
    },
    location: {
      eyebrow: "हमसे मिलें",
      heading: "जैसे हैं वैसे आइए।",
      hours: [
        { day: "सोमवार – शनिवार", time: "सुबह 10:00 – रात 9:00" },
        { day: "रविवार", time: "सुबह 10:00 – रात 8:00" },
      ],
      callNow: "अभी कॉल करें",
      whatsapp: "व्हाट्सएप",
      directions: "रास्ता",
      justdial: "JustDial",
    },
    footer: {
      tagline: "First Love Yourself — यूसुफगुडा, हैदराबाद में यूनिसेक्स हेयर, स्किन, स्पा और ग्रूमिंग।",
      instagram: "Instagram",
      justdial: "JustDial",
    },
  },

  te: {
    nav: { services: "సేవలు", gallery: "గ్యాలరీ", reviews: "రివ్యూలు", visit: "అడ్రస్", call: "కాల్" },
    hero: {
      eyebrow: "యూనిసెక్స్ సెలూన్ · యూసుఫ్‌గూడ, హైదరాబాద్",
      line1: "మామూలుగా రండి.",
      line2: "కొత్త లుక్‌తో వెళ్లండి.",
      subheadPrefix: "F·L·Y అంటే First Love Yourself — అంటే ముందు మిమ్మల్ని మీరు ప్రేమించండి. ",
      subheadSuffix: "యూసుఫ్‌గూడలో మేము చేసే ప్రతి కట్, కలర్, కన్సల్టేషన్ వెనుక ఉన్న ఆలోచన ఇదే.",
      callNow: "ఇప్పుడే కాల్ చేయండి",
      whatsapp: "వాట్సాప్ చేయండి",
      directions: "దారి చూడండి",
    },
    about: {
      eyebrow: "పేరు వెనుక కథ",
      letters: [
        { letter: "F", word: "First", meaning: "అందరి కంటే ముందు మీరు — ఎవరి అంచనాలకన్నా ముందు." },
        { letter: "L", word: "Love", meaning: "ఆడంబరం కాదు, శ్రద్ధ. అద్దంలో కనిపించే శ్రద్ధ." },
        { letter: "Y", word: "Yourself", meaning: "ఈరోజు మీరు ఎలా కనిపించాలనుకున్నా. మేము దాన్ని బయటకు తీసుకొస్తాం." },
      ],
      quote:
        "Fly అంటే పుట్టినరోజుకి ఒక్కసారి వెళ్లే స్పా కాదు. ఇది యూసుఫ్‌గూడ మూలలో ఉన్న యూనిసెక్స్ కుర్చీ — సోమవారం ఉదయం ట్రిమ్‌కి, మీటింగ్‌కి ముందు గడ్డం సెట్ చేసుకోవడానికి, లేదా పెళ్లికూతురి పూర్తి ఉదయానికి. ఇక్కడ అందరూ ఒకే కుర్చీలో స్వాగతం.",
    },
    services: {
      eyebrow: "మెనూ",
      heading: "అందరికీ ఏదో ఒకటి ప్రత్యేకంగా.",
      disclaimer: "కింద చూపిన ధరలు సూచనప్రాయం మాత్రమే — తుది మెనూ, ధరలు సెలూన్‌లో ఖరారు చేస్తారు.",
      items: [
        {
          category: "హెయిర్",
          blurb: "కట్స్, కలర్, కెరాటిన్ మరియు ఇంకా చాలా — ప్రతి హెయిర్ టైప్‌కి.",
          items: [
            { name: "హెయిర్‌కట్ & స్టైల్", price: "₹299 నుండి" },
            { name: "గ్లోబల్ కలర్", price: "₹1,499 నుండి" },
            { name: "కెరాటిన్ ట్రీట్‌మెంట్", price: "₹2,999 నుండి" },
          ],
        },
        {
          category: "స్కిన్ & ఫేస్",
          blurb: "మీ చర్మాన్ని రిఫ్రెష్‌గా మార్చే ఫేషియల్స్, క్లీనప్‌లు.",
          items: [
            { name: "సిగ్నేచర్ ఫేషియల్", price: "₹999 నుండి" },
            { name: "క్లీనప్ & పాలిష్", price: "₹599 నుండి" },
          ],
        },
        {
          category: "స్పా & మసాజ్",
          blurb: "ఒక గంట రిలాక్స్ అవ్వండి. ఫుల్-బాడీ, హెడ్ మసాజ్ థెరపీలు.",
          items: [
            { name: "హెడ్ మసాజ్", price: "₹399 నుండి" },
            { name: "ఫుల్ బాడీ స్పా", price: "₹1,799 నుండి" },
          ],
        },
        {
          category: "మెన్స్ గ్రూమింగ్",
          blurb: "బియర్డ్ షేపింగ్, హాట్ టవల్ షేవ్, సరైన గ్రూమింగ్.",
          items: [
            { name: "బియర్డ్ షేప్-అప్", price: "₹149 నుండి" },
            { name: "హాట్ టవల్ షేవ్", price: "₹249 నుండి" },
          ],
        },
        {
          category: "బ్రైడల్ & పార్టీ",
          blurb: "మీరు గుర్తుంచుకోవాలనుకునే రోజుకి పూర్తి గ్లామ్. ట్రయల్స్ అందుబాటులో ఉన్నాయి.",
          items: [
            { name: "పార్టీ మేకప్", price: "₹1,999 నుండి" },
            { name: "బ్రైడల్ ప్యాకేజీ", price: "కన్సల్టేషన్‌పై" },
          ],
        },
      ],
    },
    gallery: {
      eyebrow: "మా నైపుణ్యం",
      heading: "పని దానికదే చెబుతుంది.",
      tiles: [
        "ముందు → తర్వాత",
        "ఫ్రెష్ ఫేడ్",
        "బాలయాజ్",
        "బ్రైడల్ గ్లామ్",
        "బియర్డ్ స్కల్ప్ట్",
        "బ్లోఅవుట్",
        "కలర్ కరెక్షన్",
        "స్పా రిచువల్",
      ],
    },
    testimonials: {
      eyebrow: "రివ్యూలు",
      heading: "Google & JustDialలో ఇష్టపడ్డారు.",
      justdial: "JustDialలో చూడండి",
      googleMaps: "Google Mapsలో చదవండి",
      items: [
        {
          quote: "ట్రిమ్ కోసం వచ్చాను, అద్దంలో నన్ను నేను చూసుకుని నిజంగా నచ్చింది. F.L.Y. అంటే ఇదేనని ఇప్పుడు అర్థమైంది.",
          name: "ప్రియా ఎస్.",
          source: "Google రివ్యూ",
        },
        {
          quote: "యూసుఫ్‌గూడలో బెస్ట్ బియర్డ్ షేప్-అప్, ఈజీగా. క్లీన్ స్పేస్, తొందరపాటు లేదు.",
          name: "అర్జున్ కె.",
          source: "JustDial రివ్యూ",
        },
        {
          quote: "బ్రైడల్ ట్రయల్ బుక్ చేసాను, వాళ్లు ప్యాకేజీ నెట్టకుండా నేను కోరుకున్నది నిజంగా విన్నారు.",
          name: "స్నేహ ఆర్.",
          source: "Google రివ్యూ",
        },
      ],
    },
    location: {
      eyebrow: "మమ్మల్ని కలవండి",
      heading: "ఎలా ఉన్నారో అలానే రండి.",
      hours: [
        { day: "సోమవారం – శనివారం", time: "ఉదయం 10:00 – రాత్రి 9:00" },
        { day: "ఆదివారం", time: "ఉదయం 10:00 – రాత్రి 8:00" },
      ],
      callNow: "ఇప్పుడే కాల్ చేయండి",
      whatsapp: "వాట్సాప్",
      directions: "దారి",
      justdial: "JustDial",
    },
    footer: {
      tagline: "First Love Yourself — యూసుఫ్‌గూడ, హైదరాబాద్‌లో యూనిసెక్స్ హెయిర్, స్కిన్, స్పా & గ్రూమింగ్.",
      instagram: "Instagram",
      justdial: "JustDial",
    },
  },
};
