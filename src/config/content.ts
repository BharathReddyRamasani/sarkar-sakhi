import {
  Language,
  SchemeConfig,
  DocumentItem,
  QuestionConfig,
  OfficeInfo,
  DemoStep
} from '../types';

export interface UIStrings {
  appTitle: string;
  appSubtitle: string;
  homeGreeting: string;
  homeSubGreeting: string;
  tapToSpeak: string;
  listening: string;
  typeInstead: string;
  playDemo: string;
  stopDemo: string;
  privacyBadge: string;
  privacyNote: string;
  demoBadge: string;
  demoSimulationNote: string;
  hearAgain: string;
  next: string;
  back: string;
  confirm: string;
  clear: string;
  resetChecklist: string;
  transcriptLabel: string;
  transcriptEditPrompt: string;
  voiceNotSupported: string;
  voiceNoMic: string;
  voiceNoMatch: string;
  voiceNoTeluguVoice: string;
  selectAnOption: string;
  stepOf: (curr: number, total: number) => string;
  intentFallbackTitle: string;
  intentFallbackPrompt: string;
  schemesHeading: string;
  schemesSubheading: string;
  mayQualifyBadge: string;
  doesNotQualifyBadge: string;
  matchedConditions: string;
  unmetConditions: string;
  verificationNeeded: string;
  viewChecklistCta: string;
  checklistHeading: string;
  checklistSubheading: string;
  readyCount: (ready: number, total: number) => string;
  allReady: string;
  nextStepsCta: string;
  nextStepsHeading: string;
  nextStepsSubheading: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  shareWhatsAppCta: string;
  copySummaryCta: string;
  copiedNotice: string;
  whereToGoTitle: string;
  whereToGoNotice: string;
  inPersonNotice: string;
  disclaimerCard: string;
  aboutTitle: string;
  aboutContent: string;
  noDataStored: string;
  footerRights: string;
}

export const UI_TRANSLATIONS: Record<Language, UIStrings> = {
  te: {
    appTitle: 'సర్కార్-సఖి',
    appSubtitle: 'ప్రభుత్వ పథకాల సాయం',
    homeGreeting: 'నమస్తే! పింఛన్ల గురించి అడగండి.',
    homeSubGreeting: 'తెలంగాణ వృద్ధాప్య మరియు వితంతు పింఛన్ల అర్హత, కావలసిన పత్రాలు తెలుసుకోండి.',
    tapToSpeak: 'మాట్లాడండి',
    listening: 'వింటున్నాము... మాట్లాడండి',
    typeInstead: 'టైప్ చేయండి',
    playDemo: 'డెమో చూడండి',
    stopDemo: 'డెమో ఆపు',
    privacyBadge: 'గోప్యతా హామీ',
    privacyNote: 'మేము మీ సమాధానాలను ఏ సర్వర్‌లోనూ నిల్వ చేయము. వాయిస్ గుర్తింపు మీ బ్రౌజర్ ద్వారా మాత్రమే నిర్వహించబడుతుంది.',
    demoBadge: 'డెమో సమాచారం',
    demoSimulationNote: 'కల్పిత వ్యక్తి (లక్ష్మమ్మ, 68 సం.) ఆధారంగా రూపొందించిన అనుకరణ డెమో.',
    hearAgain: 'మళ్ళీ వినండి',
    next: 'తరువాత',
    back: 'వెనుకకు',
    confirm: 'ఖరారు చేయండి',
    clear: 'మొదటినుండి',
    resetChecklist: 'జాబితాను రీసెట్ చేయండి',
    transcriptLabel: 'మీరు మాట్లాడిన మాటలు:',
    transcriptEditPrompt: 'సరైనది కాకపోతే సరిచేసి ఎంపికపై నొక్కండి',
    voiceNotSupported: 'ఈ బ్రౌజర్‌లో వాయిస్ రికగ్నిషన్ సపోర్ట్ లేదు. దయచేసి కింద ఉన్న బటన్లను నొక్కండి.',
    voiceNoMic: 'మైక్రోఫోన్ అనుమతి రాలేదు. దయచేసి మైక్ అనుమతించండి లేదా బటన్ల ద్వారా కొనసాగించండి.',
    voiceNoMatch: 'క్షమించండి, మీ సమాధానం స్పష్టంగా లేదు. దయచేసి మళ్ళీ చెప్పండి లేదా బటన్ ఎంచుకోండి.',
    voiceNoTeluguVoice: 'మీ పరికరంలో తెలుగు వాయిస్ లేదు. స్క్రీన్‌పై ఉన్న టెక్స్ట్ చదువుకోండి.',
    selectAnOption: 'దయచేసి ఒక ఎంపికను ఎంచుకోండి',
    stepOf: (curr, total) => `దశ ${curr} / ${total}`,
    intentFallbackTitle: 'మీకు ఏ సాయం కావాలి?',
    intentFallbackPrompt: 'కింది వాటిలో మీరు తెలుసుకోవాలనుకుంటున్న పింఛను ఎంచుకోండి:',
    schemesHeading: 'మీకు సరిపోయే పింఛన్లు',
    schemesSubheading: 'మీరు ఇచ్చిన వివరాల ప్రకారం ఈ పథకాలకు మీరు దరఖాస్తు చేసుకోవచ్చు.',
    mayQualifyBadge: 'అర్హత ఉండే అవకాశం ఉంది',
    doesNotQualifyBadge: 'షరతులు సరిపోలడం లేదు',
    matchedConditions: 'సరిపోయిన నిబంధనలు',
    unmetConditions: 'సరిపోలని నిబంధనలు',
    verificationNeeded: 'ధృవీకరించుకోవలసిన వివరాలు',
    viewChecklistCta: 'అవసరమైన పత్రాల జాబితా చూడండి',
    checklistHeading: 'కావలసిన పత్రాల జాబితా',
    checklistSubheading: 'మీ వద్ద సిద్ధంగా ఉన్న పత్రాలను టిక్ చేయండి.',
    readyCount: (ready, total) => `${total} లో ${ready} పత్రాలు సిద్ధం`,
    allReady: 'అన్ని పత్రాలు సిద్ధంగా ఉన్నాయి! దరఖాస్తుకు సిద్ధం.',
    nextStepsCta: 'తదుపరి దశలు & షేర్ చేయండి',
    nextStepsHeading: 'తదుపరి దశలు',
    nextStepsSubheading: 'పింఛను పొందడానికి 3 సులభమైన దశలు',
    step1Title: 'పత్రాలను సిద్ధం చేసుకోండి',
    step1Desc: 'ఆధార్, రేషన్ కార్డు, బ్యాంక్ పాస్‌బుక్ తదితర పత్రాల జిరాక్స్ ప్రతులు తీయించండి.',
    step2Title: 'స్థానిక ప్రభుత్వ కార్యాలయానికి వెళ్లండి',
    step2Desc: 'ఉదయం వేళల్లో మీ గ్రామ పంచాయతీ / వార్డు సచివాలయం లేదా మీసేవ కేంద్రానికి వెళ్లండి.',
    step3Title: 'అధికారికి ఈ జాబితా చూపించండి',
    step3Desc: 'జాబితాను అధికారికి చూపించి మీ దరఖాస్తు ఫారమ్ పూరించడానికి సహాయం పొందండి.',
    shareWhatsAppCta: 'వాట్సాప్‌లో వివరాలు పంపండి',
    copySummaryCta: 'సారాంశాన్ని కాపీ చేయండి',
    copiedNotice: 'సారాంశం కాపీ అయింది!',
    whereToGoTitle: 'ఎక్కడికి వెళ్ళాలి?',
    whereToGoNotice: 'మీసేవ కేంద్రం (MeeSeva) లేదా మీ గ్రామ/వార్డు సచివాలయం, మండల రెవెన్యూ ఆఫీస్ (MRO). స్థానికంగా నిర్ధారించుకోండి.',
    inPersonNotice: 'గమనిక: బయోమెట్రిక్ / వేలిముద్రలు మరియు పత్రాల సమర్పణ కోసం దరఖాస్తుదారు వ్యక్తిగతంగా హాజరుకావలసి ఉంటుంది.',
    disclaimerCard: 'డెమో సమాచారం: ఈ వివరాలను మీ మండల కార్యాలయం లేదా అధికారిక పోర్టల్‌లో నిర్ధారించుకోండి.',
    aboutTitle: 'సర్కార్-సఖి గురించి & పరిమితులు',
    aboutContent: 'సర్కార్-సఖి అనేది గ్రామీణ పౌరులకు ప్రభుత్వ పథకాల వివరాలు, పత్రాల సన్నద్ధతను సులభంగా తెలియజేసే ఉచిత సేవా సాధనం. ఇది అధికారిక ప్రభుత్వ అప్లికేషన్ కాదు. మేము ఎటువంటి ఆధార్ సంఖ్య, ఫోన్ నంబర్ లేదా వ్యక్తిగత సమాచారాన్ని సేకరించము లేదా సర్వర్‌లో భద్రపరచము.',
    noDataStored: 'సర్వర్‌లో ఎటువంటి వ్యక్తిగత సమాచారం నిల్వ చేయబడదు.',
    footerRights: 'ప్రజల సహాయార్థం రూపొందించిన ఉచిత వేదిక.'
  },
  en: {
    appTitle: 'Sarkar-Sakhi',
    appSubtitle: 'Government Scheme Companion',
    homeGreeting: 'Namaste! Ask about pensions.',
    homeSubGreeting: 'Check eligibility and required documents for Telangana Old-Age and Widow pensions.',
    tapToSpeak: 'Tap & Speak',
    listening: 'Listening... Please speak',
    typeInstead: 'Type instead',
    playDemo: 'Play demo',
    stopDemo: 'Stop demo',
    privacyBadge: 'Privacy Guarantee',
    privacyNote: "We don't store your answers on any server. Voice recognition is handled locally by your browser.",
    demoBadge: 'Demo information',
    demoSimulationNote: 'Simulated demo based on Lakshmamma (68 yrs, widow). Fictional person.',
    hearAgain: 'Hear again',
    next: 'Next',
    back: 'Back',
    confirm: 'Confirm',
    clear: 'Restart',
    resetChecklist: 'Reset Checklist',
    transcriptLabel: 'You said:',
    transcriptEditPrompt: 'If not accurate, edit here or tap the buttons below',
    voiceNotSupported: 'Speech recognition is not supported in this browser. Please tap the buttons.',
    voiceNoMic: 'Microphone permission denied. Please allow mic or continue with buttons.',
    voiceNoMatch: 'Could not understand clearly. Please repeat or choose an option below.',
    voiceNoTeluguVoice: 'No Telugu voice installed on your device. Continuing with text.',
    selectAnOption: 'Please select an option',
    stepOf: (curr, total) => `Step ${curr} of ${total}`,
    intentFallbackTitle: 'Which help do you need?',
    intentFallbackPrompt: 'Select which pension scheme you would like to explore:',
    schemesHeading: 'Schemes for You',
    schemesSubheading: 'Based on your answers, here are the government pensions you may check.',
    mayQualifyBadge: 'May qualify',
    doesNotQualifyBadge: 'Does not match criteria',
    matchedConditions: 'Matched conditions',
    unmetConditions: 'Unmet conditions',
    verificationNeeded: 'Needs verification',
    viewChecklistCta: 'Check required documents',
    checklistHeading: 'Documents Needed',
    checklistSubheading: 'Tap each paper you have ready with you.',
    readyCount: (ready, total) => `${ready} of ${total} ready`,
    allReady: 'All documents ready! You are prepared to apply.',
    nextStepsCta: 'Next Steps & Share',
    nextStepsHeading: 'Next Steps',
    nextStepsSubheading: '3 easy steps to get your benefit',
    step1Title: 'Gather your documents',
    step1Desc: 'Keep photocopies of Aadhaar, Ration Card, Passbook, etc. ready.',
    step2Title: 'Visit your local office',
    step2Desc: 'Go during morning hours to your Gram Panchayat / Ward Office or MeeSeva centre.',
    step3Title: 'Show this list to the officer',
    step3Desc: 'Show this checklist to the official who will help you fill and submit the application form.',
    shareWhatsAppCta: 'Share on WhatsApp',
    copySummaryCta: 'Copy Summary',
    copiedNotice: 'Summary copied to clipboard!',
    whereToGoTitle: 'Where to go?',
    whereToGoNotice: 'MeeSeva centre, Gram Panchayat / Ward Sachivalayam, or Mandal Revenue Office (MRO). Confirm locally.',
    inPersonNotice: 'Note: An in-person visit is required for biometric authentication and physical document submission.',
    disclaimerCard: 'Demo information, confirm with your Mandal office or official portal.',
    aboutTitle: 'About Sarkar-Sakhi & Limitations',
    aboutContent: 'Sarkar-Sakhi is an independent accessibility tool to help citizens understand pension readiness. This is not an official government portal. We do not collect names, phone numbers, or Aadhaar numbers.',
    noDataStored: 'No personal data is stored on any server.',
    footerRights: 'Public assistance companion for application readiness.'
  },
  hi: {
    appTitle: 'सरकार-सखी',
    appSubtitle: 'सरकारी योजना साथी',
    homeGreeting: 'नमस्ते! पेंशन के बारे में पूछें।',
    homeSubGreeting: 'तेलंगाना वृद्धावस्था और विधवा पेंशन की पात्रता और आवश्यक दस्तावेज जानें।',
    tapToSpeak: 'बोलें',
    listening: 'सुन रहे हैं... कृपया बोलें',
    typeInstead: 'टाइप करें',
    playDemo: 'डेमो देखें',
    stopDemo: 'डेमो रोकें',
    privacyBadge: 'गोपनीयता गारंटी',
    privacyNote: 'हम आपका कोई भी विवरण किसी सर्वर पर सुरक्षित नहीं करते हैं।',
    demoBadge: 'डेमो जानकारी',
    demoSimulationNote: 'काल्पनिक व्यक्ति (लक्ष्मीअम्मा, 68 वर्ष, विधवा) पर आधारित सिमुलेशन।',
    hearAgain: 'फिर से सुनें',
    next: 'आगे बढ़ें',
    back: 'पीछे जाएं',
    confirm: 'पुष्टि करें',
    clear: 'पुनरारंभ',
    resetChecklist: 'चेकलिस्ट रीसेट करें',
    transcriptLabel: 'आपने कहा:',
    transcriptEditPrompt: 'यदि सही नहीं है, तो संपादित करें या नीचे बटन दबाएं',
    voiceNotSupported: 'इस ब्राउज़र में वॉयस सुविधा उपलब्ध नहीं है। कृपया बटन दबाएं।',
    voiceNoMic: 'माइक की अनुमति नहीं मिली। कृपया अनुमति दें या बटन चुनें।',
    voiceNoMatch: 'स्पष्ट समझ नहीं आया। कृपया दोबारा बोलें या बटन चुनें।',
    voiceNoTeluguVoice: 'डिवाइस पर स्थानीय वॉयस उपलब्ध नहीं है।',
    selectAnOption: 'कृपया एक विकल्प चुनें',
    stepOf: (curr, total) => `चरण ${curr} / ${total}`,
    intentFallbackTitle: 'आपको किस सहायता की आवश्यकता है?',
    intentFallbackPrompt: 'वह पेंशन चुनें जिसके बारे में आप जानना चाहते हैं:',
    schemesHeading: 'आपके लिए योजनाएं',
    schemesSubheading: 'आपके उत्तरों के आधार पर संभावित पेंशन योजनाएं।',
    mayQualifyBadge: 'पात्र हो सकते हैं',
    doesNotQualifyBadge: 'शर्तें पूरी नहीं हैं',
    matchedConditions: 'पूरी शर्तें',
    unmetConditions: 'अपूर्ण शर्तें',
    verificationNeeded: 'सत्यापन आवश्यक',
    viewChecklistCta: 'आवश्यक दस्तावेज देखें',
    checklistHeading: 'आवश्यक दस्तावेज',
    checklistSubheading: 'जो दस्तावेज आपके पास तैयार हैं, उन पर टिक करें।',
    readyCount: (ready, total) => `${total} में से ${ready} तैयार`,
    allReady: 'सभी दस्तावेज तैयार हैं!',
    nextStepsCta: 'अगले कदम और शेयर करें',
    nextStepsHeading: 'अगले कदम',
    nextStepsSubheading: 'पेंशन प्राप्त करने के 3 आसान कदम',
    step1Title: 'दस्तावेज एकत्र करें',
    step1Desc: 'आधार, राशन कार्ड, पासबुक आदि की फोटोकॉपी तैयार रखें।',
    step2Title: 'स्थानीय कार्यालय जाएं',
    step2Desc: 'सुबह के समय अपने ग्राम पंचायत, वार्ड कार्यालय या मी-सेवा केंद्र जाएं।',
    step3Title: 'अधिकारी को यह सूची दिखाएं',
    step3Desc: 'यह सूची अधिकारी को दिखाकर फॉर्म भरने में मदद लें।',
    shareWhatsAppCta: 'व्हाट्सएप पर शेयर करें',
    copySummaryCta: 'सारांश कॉपी करें',
    copiedNotice: 'सारांश कॉपी हो गया!',
    whereToGoTitle: 'कहाँ जाएं?',
    whereToGoNotice: 'मी-सेवा केंद्र या मंडल राजस्व कार्यालय (MRO)। स्थानीय स्तर पर पुष्टि करें।',
    inPersonNotice: 'बायोमेट्रिक और भौतिक सत्यापन के लिए स्वयं उपस्थित होना आवश्यक है।',
    disclaimerCard: 'डेमो जानकारी, अपने मंडल कार्यालय या आधिकारिक पोर्टल से पुष्टि करें।',
    aboutTitle: 'सरकार-सखी के बारे में',
    aboutContent: 'सरकार-सखी नागरिकों की सहायता के लिए बनाया गया एक स्वतंत्र टूल है।',
    noDataStored: 'किसी सर्वर पर कोई व्यक्तिगत डेटा संग्रहीत नहीं होता है।',
    footerRights: 'सार्वजनिक नागरिक सहायता उपकरण।'
  }
};

// Intent keyword dictionary for voice recognition and text matching
export const INTENT_KEYWORDS: Record<Language, { oldAge: string[]; widow: string[]; general: string[] }> = {
  te: {
    oldAge: ['వృద్ధాప్య', 'ముసలి', 'పెద్దల', 'వృద్ధుల', '65', '57', 'ఓల్డ్ ఏజ్'],
    widow: ['వితంతు', 'భర్త లేని', 'వితంతువు', 'విధవ', 'విడో'],
    general: ['పింఛను', 'పెన్షన్', 'సహాయం', 'డబ్బులు', 'పథకం']
  },
  en: {
    oldAge: ['old age', 'elderly', 'senior citizen', 'aged', 'aasara old'],
    widow: ['widow', 'husband death', 'single woman', 'widows'],
    general: ['pension', 'scheme', 'government help', 'assistance', 'aasara']
  },
  hi: {
    oldAge: ['वृद्धावस्था', 'बुजुर्ग', 'बुढ़ापा', 'ओल्ड एज'],
    widow: ['विधवा', 'पति नहीं', 'विवाहिता नहीं'],
    general: ['पेंशन', 'सरकारी योजना', 'सहायता']
  }
};

// Voice mapping for numbers, ages, and choices
export const VOICE_OPTION_MAP: Record<string, string[]> = {
  // Ages & Numbers in Telugu and English
  under_57: ['under 57', 'below 57', '57 కంటే తక్కువ', 'తక్కువ', 'యవ్వనం', 'చిన్న వయస్సు'],
  '57_64': ['57 to 64', '57 నుండి 64', 'యాభై ఏడు', 'అరవై', '60', '58', '59', '61', '62', '63', '64'],
  '65_79': ['65 to 79', '65 నుండి 79', 'అరవై ఐదు', 'డెబ్బై', '68', '65', '66', '67', '69', '70', '75'],
  '80_plus': ['80 plus', 'above 80', '80 కంటే ఎక్కువ', 'ఎనభై', '80'],

  female: ['female', 'woman', 'lady', 'స్త్రీ', 'మహిళ', 'ఆడ'],
  male: ['male', 'man', 'పురుషుడు', 'మగ'],
  other: ['other', 'ఇతర'],

  widow: ['widow', 'వితంతువు', 'భర్త చనిపోయారు', 'భర్త లేరు', 'విధవ'],
  married: ['married', 'వివాహితురాలు', 'వివాహితుడు', 'పెళ్ళయింది'],
  unmarried: ['unmarried', 'single', 'అవివాహిత', 'పెళ్ళికాలేదు'],
  divorced: ['divorced', 'విడాకులు'],
  separated: ['separated', 'వేరుగా ఉంటున్నాము'],

  below_1_5_lakh: ['below 1.5 lakh', 'low income', 'white ration card', 'తెల్ల రేషన్ కార్డు', 'తక్కువ ఆదాయం', 'లక్షన్నర కంటే తక్కువ'],
  above_1_5_lakh: ['above 1.5 lakh', 'high income', 'ఎక్కువ ఆదాయం', 'లక్షన్నర కంటే ఎక్కువ'],
  unknown: ['unknown', 'not sure', 'తెలియదు', 'ఖచ్చితంగా తెలియదు'],

  yes: ['yes', 'avunu', 'అవును', 'వస్తోంది', 'తీసుకుంటున్నాను', 'హా'],
  no: ['no', 'kaadu', 'లేదు', 'రావడం లేదు', 'తీసుకోవడం లేదు', 'నహి']
};

export const SCHEMES: Record<string, SchemeConfig> = {
  telangana_old_age: {
    id: 'telangana_old_age',
    name: {
      te: 'వృద్ధాప్య పింఛను (ఆసరా)',
      en: 'Old-Age Pension (Aasara)',
      hi: 'वृद्धावस्था पेंशन (आसरा)'
    },
    alias: {
      te: 'ఆసరా వృద్ధాప్య పింఛను',
      en: 'Aasara Old Age Pension',
      hi: 'आसरा वृद्धावस्था पेंशन'
    },
    description: {
      te: 'తెలంగాణ ప్రభుత్వం ద్వారా 57 సంవత్సరాలు లేదా అంతకంటే ఎక్కువ వయస్సు గల అర్హులైన వృద్ధులకు అందించే ఆర్థిక సాయం.',
      en: 'Financial assistance by the Government of Telangana for eligible seniors aged 57 years and above.',
      hi: '57 वर्ष या उससे अधिक आयु के वरिष्ठ नागरिकों के लिए वित्तीय सहायता।'
    },
    amountText: {
      te: 'మొత్తం: అధికారిక కార్యాలయంలో నిర్ధారించుకోండి',
      en: 'Amount: Check with official office',
      hi: 'राशि: आधिकारिक कार्यालय से पुष्टि करें'
    },
    disclaimer: {
      te: 'డెమో సమాచారం, మీ మండల కార్యాలయం లేదా అధికారిక పోర్టల్‌లో నిర్ధారించుకోండి.',
      en: 'Demo information, confirm with your Mandal office or official portal.',
      hi: 'डेमो जानकारी, अपने मंडल कार्यालय से पुष्टि करें।'
    },
    icon: 'elderly',
    // VERIFY with official Telangana Aasara sources (age eligibility lowered to 57 in TS)
    rules: {
      minAge: 57,
      incomeLimitBand: ['below_1_5_lakh'],
      disqualifyIfExistingPension: true
    }
  },
  telangana_widow: {
    id: 'telangana_widow',
    name: {
      te: 'వితంతు పింఛను (ఆసరా)',
      en: 'Widow Pension (Aasara)',
      hi: 'विधवा पेंशन (आसरा)'
    },
    alias: {
      te: 'ఆసరా వితంతు పింఛను',
      en: 'Aasara Widow Pension',
      hi: 'आसरा विधवा पेंशन'
    },
    description: {
      te: 'భర్తను కోల్పోయిన 18 సంవత్సరాలు లేదా అంతకంటే ఎక్కువ వయస్సు గల నిరుపేద మహిళలకు ఇచ్చే జీవన భృతి.',
      en: 'Monthly financial assistance to support poor widows aged 18 and above in Telangana.',
      hi: '18 वर्ष और उससे अधिक आयु की विधवा महिलाओं के लिए वित्तीय सहायता।'
    },
    amountText: {
      te: 'మొత్తం: అధికారిక కార్యాలయంలో నిర్ధారించుకోండి',
      en: 'Amount: Check with official office',
      hi: 'राशि: आधिकारिक कार्यालय से पुष्टि करें'
    },
    disclaimer: {
      te: 'డెమో సమాచారం, మీ మండల కార్యాలయం లేదా అధికారిక పోర్టల్‌లో నిర్ధారించుకోండి.',
      en: 'Demo information, confirm with your Mandal office or official portal.',
      hi: 'डेमो जानकारी, अपने मंडल कार्यालय से पुष्टि करें।'
    },
    icon: 'elderly_woman',
    // VERIFY with official Telangana Aasara sources (minimum age 18, must be widow)
    rules: {
      minAge: 18,
      targetGender: ['female'],
      requiredMaritalStatus: ['widow'],
      incomeLimitBand: ['below_1_5_lakh'],
      disqualifyIfExistingPension: true
    }
  }
};

export const DOCUMENTS: Record<string, DocumentItem> = {
  aadhaar: {
    id: 'aadhaar',
    requiredFor: ['telangana_old_age', 'telangana_widow'],
    names: {
      te: 'ఆధార్ కార్డు (Aadhaar Card)',
      en: 'Aadhaar Card',
      hi: 'आधार कार्ड'
    },
    descriptions: {
      te: 'వయస్సు, గుర్తింపు మరియు చిరునామా ధృవీకరణ కోసం.',
      en: 'Proof of identity, age, and residence address.',
      hi: 'पहचान और पते का प्रमाण पत्र।'
    },
    icon: 'badge'
  },
  ration_card: {
    id: 'ration_card',
    requiredFor: ['telangana_old_age', 'telangana_widow'],
    names: {
      te: 'ఆహార భద్రత కార్డు / తెల్ల రేషన్ కార్డు (White Ration Card)',
      en: 'Food Security Card / White Ration Card',
      hi: 'सफेद राशन कार्ड / खाद्य सुरक्षा कार्ड'
    },
    descriptions: {
      te: 'తెలంగాణ నివాసి మరియు పేదరిక రేఖకు దిగువన ఉన్నట్లు ధృవీకరణ.',
      en: 'Proof of Telangana BPL / low income eligibility.',
      hi: 'आय और गरीबी रेखा का प्रमाण।'
    },
    icon: 'receipt_long'
  },
  death_certificate: {
    id: 'death_certificate',
    requiredFor: ['telangana_widow'],
    names: {
      te: "భర్త మరణ ధృవీకరణ పత్రం (Husband's Death Certificate)",
      en: "Husband's Death Certificate",
      hi: 'पति का मृत्यु प्रमाण पत्र'
    },
    descriptions: {
      te: 'మునిసిపాలిటీ లేదా గ్రామ పంచాయతీ జారీ చేసిన అసలు/జిరాక్స్ కాపీ.',
      en: 'Issued by Municipality or Gram Panchayat.',
      hi: 'ग्राम पंचायत या नगर पालिका द्वारा जारी।'
    },
    icon: 'description'
  },
  bank_passbook: {
    id: 'bank_passbook',
    requiredFor: ['telangana_old_age', 'telangana_widow'],
    names: {
      te: 'బ్యాంక్ పాస్‌బుక్ / పోస్టాఫీసు ఖాతా (Bank Passbook)',
      en: 'Bank Passbook / Post Office Account',
      hi: 'बैंक पासबुक या डाकघर खाता'
    },
    descriptions: {
      te: 'ఆధార్ లింక్ చేయబడిన బ్యాంక్ ఖాతా మొదటి పేజీ జిరాక్స్ (DBT కోసం).',
      en: 'First page copy showing IFSC and Account Number linked to Aadhaar.',
      hi: 'आधार से जुड़े खाते की प्रति।'
    },
    icon: 'account_balance'
  },
  passport_photo: {
    id: 'passport_photo',
    requiredFor: ['telangana_old_age', 'telangana_widow'],
    names: {
      te: 'పాస్‌పోర్ట్ సైజు ఫోటోలు (3 కాపీలు)',
      en: 'Passport Size Photos (3 copies)',
      hi: 'पासपोर्ट साइज फोटो (3 प्रतियां)'
    },
    descriptions: {
      te: 'ఇటీవల తీసుకున్న కలర్ ఫోటోలు.',
      en: 'Recent color photographs of the applicant.',
      hi: 'हाल की रंगीन तस्वीरें।'
    },
    icon: 'portrait'
  },
  age_proof: {
    id: 'age_proof',
    requiredFor: ['telangana_old_age'],
    names: {
      te: 'వయస్సు ధృవీకరణ పత్రం (Age Proof / Voter ID / Marks Memo)',
      en: 'Age Proof (Voter ID / School Memo)',
      hi: 'आयु प्रमाण पत्र'
    },
    descriptions: {
      te: 'ఆధార్‌లో వయస్సు స్పష్టంగా లేకపోతే ఓటరు గుర్తింపు కార్డు అవసరం.',
      en: 'Electoral Voter Card or government age certificate.',
      hi: 'मतदाता पहचान पत्र या अन्य दस्तावेज।'
    },
    icon: 'verified_user'
  }
};

export const QUESTIONS: QuestionConfig[] = [
  {
    id: 'age',
    title: {
      te: 'మీ వయస్సు ఎంత?',
      en: 'How old are you?',
      hi: 'आपकी आयु कितनी है?'
    },
    speechPrompt: {
      te: 'మీ వయస్సు ఎంతో చెప్పండి లేదా కింద ఉన్న బటన్‌పై నొక్కండి.',
      en: 'Tell me your age or tap one of the buttons below.',
      hi: 'अपनी उम्र बताएं या नीचे दिए गए बटन पर टैप करें।'
    },
    options: [
      {
        value: 'under_57',
        label: {
          te: '57 సంవత్సరాల కంటే తక్కువ',
          en: 'Under 57 years',
          hi: '57 वर्ष से कम'
        },
        icon: 'person',
        voiceKeywords: {
          te: ['57 కంటే తక్కువ', 'తక్కువ', 'యవ్వనం', 'చిన్న'],
          en: ['under 57', 'below 57', 'younger'],
          hi: ['57 से कम']
        }
      },
      {
        value: '57_64',
        label: {
          te: '57 నుండి 64 సంవత్సరాలు',
          en: '57 to 64 years',
          hi: '57 से 64 वर्ष'
        },
        icon: 'elderly',
        voiceKeywords: {
          te: ['57 నుండి 64', 'అరవై', 'యాభై ఏడు'],
          en: ['57 to 64', '58', '59', '60'],
          hi: ['57 से 64']
        }
      },
      {
        value: '65_79',
        label: {
          te: '65 నుండి 79 సంవత్సరాలు (లక్ష్మమ్మ: 68)',
          en: '65 to 79 years (e.g. 68)',
          hi: '65 से 79 वर्ष'
        },
        icon: 'elderly_woman',
        voiceKeywords: {
          te: ['65 నుండి 79', '68', 'అరవై ఎనిమిది', 'డెబ్బై'],
          en: ['65 to 79', '68', 'sixty eight'],
          hi: ['65 से 79', '68', 'अड़सठ']
        }
      },
      {
        value: '80_plus',
        label: {
          te: '80 సంవత్సరాలు లేదా ఎక్కువ',
          en: '80 years or older',
          hi: '80 वर्ष या अधिक'
        },
        icon: 'accessible',
        voiceKeywords: {
          te: ['80 కంటే ఎక్కువ', 'ఎనభై', 'పెద్ద వయస్సు'],
          en: ['80 plus', '80 or older', 'above 80'],
          hi: ['80 से अधिक', 'अस्सी']
        }
      }
    ]
  },
  {
    id: 'gender',
    title: {
      te: 'మీ లింగం ఏమిటి?',
      en: 'What is your gender?',
      hi: 'आपका लिंग क्या है?'
    },
    speechPrompt: {
      te: 'మీరు స్త్రీలా లేక పురుషులా చెప్పండి.',
      en: 'Please state if you are female, male, or other.',
      hi: 'कृपया बताएं कि आप महिला हैं या पुरुष।'
    },
    options: [
      {
        value: 'female',
        label: {
          te: 'స్త్రీ (మహిళ)',
          en: 'Female (Woman)',
          hi: 'महिला'
        },
        icon: 'female',
        voiceKeywords: {
          te: ['స్త్రీ', 'మహిళ', 'ఆడ'],
          en: ['female', 'woman', 'lady'],
          hi: ['महिला', 'स्त्री']
        }
      },
      {
        value: 'male',
        label: {
          te: 'పురుషుడు',
          en: 'Male (Man)',
          hi: 'पुरुष'
        },
        icon: 'male',
        voiceKeywords: {
          te: ['పురుషుడు', 'మగ'],
          en: ['male', 'man', 'gentleman'],
          hi: ['पुरुष', 'मर्द']
        }
      },
      {
        value: 'other',
        label: {
          te: 'ఇతర',
          en: 'Other',
          hi: 'अन्य'
        },
        icon: 'transgender',
        voiceKeywords: {
          te: ['ఇతర'],
          en: ['other'],
          hi: ['अन्य']
        }
      }
    ]
  },
  {
    id: 'maritalStatus',
    title: {
      te: 'మీ వైవాహిక స్థితి ఏమిటి?',
      en: 'What is your marital status?',
      hi: 'आपकी वैवाहिक स्थिति क्या है?'
    },
    speechPrompt: {
      te: 'మీ వైవాహిక స్థితిని ఎంచుకోండి.',
      en: 'Please state your marital status.',
      hi: 'कृपया अपनी वैवाहिक स्थिति चुनें।'
    },
    options: [
      {
        value: 'widow',
        label: {
          te: 'వితంతువు (భర్త చనిపోయారు)',
          en: 'Widow (Husband deceased)',
          hi: 'विधवा (पति का देहांत)'
        },
        icon: 'sentiment_dissatisfied',
        voiceKeywords: {
          te: ['వితంతువు', 'భర్త చనిపోయారు', 'భర్త లేరు', 'విధవ'],
          en: ['widow', 'husband died', 'husband deceased'],
          hi: ['विधवा', 'पति नहीं रहे']
        }
      },
      {
        value: 'married',
        label: {
          te: 'వివాహితులు (భర్త/భార్య ఉన్నారు)',
          en: 'Married',
          hi: 'विवाहित'
        },
        icon: 'favorite',
        voiceKeywords: {
          te: ['వివాహితురాలు', 'వివాహితుడు', 'పెళ్ళయింది'],
          en: ['married', 'husband alive'],
          hi: ['विवाहित', 'शादीशुदा']
        }
      },
      {
        value: 'unmarried',
        label: {
          te: 'అవివాహితులు',
          en: 'Unmarried / Single',
          hi: 'अविवाहित'
        },
        icon: 'person',
        voiceKeywords: {
          te: ['అవివాహిత', 'పెళ్లి కాలేదు'],
          en: ['unmarried', 'single'],
          hi: ['अविवाहित']
        }
      },
      {
        value: 'separated',
        label: {
          te: 'విడాకులు / విడిపోయినవారు',
          en: 'Divorced / Separated',
          hi: 'तलाकशुदा / अलग'
        },
        icon: 'group_off',
        voiceKeywords: {
          te: ['విడాకులు', 'విడిపోయారు'],
          en: ['divorced', 'separated'],
          hi: ['तलाकशुदा', 'अलग']
        }
      }
    ]
  },
  {
    id: 'incomeBand',
    title: {
      te: 'మీ కుటుంబ వార్షిక ఆదాయం ఎంత?',
      en: 'What is your annual household income?',
      hi: 'आपकी वार्षिक पारिवारिक आय कितनी है?'
    },
    speechPrompt: {
      te: 'మీ వద్ద తెల్ల రేషన్ కార్డు ఉందా లేదా వార్షిక ఆదాయం లక్షన్నర లోపేనా?',
      en: 'Is your income below 1.5 lakh or do you have a white ration card?',
      hi: 'क्या आपकी आय 1.5 लाख से कम है या सफेद राशन कार्ड है?'
    },
    options: [
      {
        value: 'below_1_5_lakh',
        label: {
          te: '₹1.5 లక్షల లోపు (తెల్ల రేషన్ కార్డు ఉంది)',
          en: 'Below ₹1.5 Lakh (Have White Ration Card)',
          hi: '₹1.5 लाख से कम (सफेद राशन कार्ड है)'
        },
        icon: 'check_circle',
        voiceKeywords: {
          te: ['లక్షన్నర లోపు', 'తక్కువ', 'తెల్ల రేషన్ కార్డు ఉంది', 'బీపీఎల్'],
          en: ['below 1.5 lakh', 'under 1.5 lakh', 'have white ration card', 'low income'],
          hi: ['डेढ़ लाख से कम', 'सफेद राशन कार्ड है', 'कम आय']
        }
      },
      {
        value: 'above_1_5_lakh',
        label: {
          te: '₹1.5 లక్షల కంటే ఎక్కువ',
          en: 'Above ₹1.5 Lakh',
          hi: '₹1.5 लाख से अधिक'
        },
        icon: 'payments',
        voiceKeywords: {
          te: ['లక్షన్నర కంటే ఎక్కువ', 'ఎక్కువ ఆదాయం'],
          en: ['above 1.5 lakh', 'higher income'],
          hi: ['डेढ़ लाख से अधिक']
        }
      },
      {
        value: 'unknown',
        label: {
          te: 'ఖచ్చితంగా తెలియదు',
          en: 'Not sure / Need to check',
          hi: 'निश्चित नहीं है'
        },
        icon: 'help_outline',
        voiceKeywords: {
          te: ['తెలియదు', 'గుర్తు లేదు'],
          en: ['not sure', 'unknown'],
          hi: ['पता नहीं']
        }
      }
    ]
  },
  {
    id: 'receivingPension',
    title: {
      te: 'మీకు ప్రస్తుతం ఏదైనా ఇతర ప్రభుత్వ పింఛను వస్తోందా?',
      en: 'Are you currently receiving any other government pension?',
      hi: 'क्या आपको पहले से कोई सरकारी पेंशन मिल रही है?'
    },
    speechPrompt: {
      te: 'మీకు ప్రస్తుతం వేరే పింఛను ఏమైనా వస్తోందా? అవును లేదా కాదు అని చెప్పండి.',
      en: 'Are you currently receiving another pension? Please say yes or no.',
      hi: 'क्या आपको वर्तमान में कोई अन्य पेंशन मिल रही है? हाँ या नहीं कहें।'
    },
    options: [
      {
        value: 'no',
        label: {
          te: 'లేదు (ఎటువంటి పింఛను రావడం లేదు)',
          en: 'No (Not receiving any pension)',
          hi: 'नहीं (कोई पेंशन नहीं मिल रही)'
        },
        icon: 'cancel',
        voiceKeywords: {
          te: ['లేదు', 'రావడం లేదు', 'కాదు', 'ఏమీ రాదు'],
          en: ['no', 'none', 'not receiving', 'no pension'],
          hi: ['नहीं', 'कोई नहीं', 'नहीं मिल रही']
        }
      },
      {
        value: 'yes',
        label: {
          te: 'అవును (ఇప్పటికే వేరే పింఛను వస్తోంది)',
          en: 'Yes (Already receiving another pension)',
          hi: 'हाँ (पहले से पेंशन मिल रही है)'
        },
        icon: 'check',
        voiceKeywords: {
          te: ['అవును', 'వస్తోంది', 'తీసుకుంటున్నాను'],
          en: ['yes', 'receiving', 'already getting'],
          hi: ['हाँ', 'मिल रही है']
        }
      }
    ]
  }
];

export const OFFICE_INFO: OfficeInfo = {
  title: {
    te: 'దరఖాస్తు ఎక్కడ సమర్పించాలి?',
    en: 'Where to submit your application?',
    hi: 'आवेदन कहां जमा करें?'
  },
  description: {
    te: 'తెలంగాణలో పింఛను దరఖాస్తులను మీ గ్రామ/వార్డు సచివాలయంలో లేదా మండల పరిషత్ అభివృద్ధి కార్యాలయం (MPDO) / మీసేవ కేంద్రంలో సమర్పించాలి.',
    en: 'In Telangana, pension applications must be submitted at your Gram Panchayat / Ward Sachivalayam, MeeSeva center, or MPDO office.',
    hi: 'तेलंगाना में पेंशन आवेदन ग्राम पंचायत, मी-सेवा केंद्र या मंडल कार्यालय में जमा किए जाते हैं।'
  },
  places: {
    te: [
      'గ్రామ పంచాయతీ / వార్డు సచివాలయం (Gram Panchayat / Ward Office)',
      'మీసేవ కేంద్రం (MeeSeva Centre)',
      'మండల పరిషత్ అభివృద్ధి అధికారి (MPDO Office)'
    ],
    en: [
      'Gram Panchayat / Ward Sachivalayam Office',
      'MeeSeva Centre',
      'Mandal Parishad Development Office (MPDO)'
    ],
    hi: [
      'ग्राम पंचायत / वार्ड कार्यालय',
      'मी-सेवा केंद्र',
      'मंडल विकास कार्यालय (MPDO)'
    ]
  },
  hours: {
    te: 'ఉదయం 10:00 నుండి సాయంత్రం 5:00 వరకు (పనిదినాలలో)',
    en: '10:00 AM to 5:00 PM (on official working days)',
    hi: 'सुबह 10:00 से शाम 5:00 बजे तक'
  }
};

// Simulation script for Lakshmamma (68 yrs, widow, low income)
export const LAKSHMAMMA_DEMO_STEPS: DemoStep[] = [
  {
    screen: 'intent',
    stepIndex: 0,
    answerField: 'intent',
    answerValue: 'pension',
    speechText: {
      te: 'లక్ష్మమ్మ: "నా పేరు లక్ష్మమ్మ. నాకు పింఛను కావాలమ్మా."',
      en: 'Lakshmamma: "My name is Lakshmamma. I need help with pension."',
      hi: 'लक्ष्मीअम्मा: "मुझे पेंशन चाहिए।"'
    },
    caption: {
      te: 'పింఛను కోసం అభ్యర్థన గుర్తించబడింది',
      en: 'Recognized intent: Pension assistance',
      hi: 'पेंशन की मांग पहचानी गई'
    },
    delayMs: 2500
  },
  {
    screen: 'question_age',
    stepIndex: 1,
    answerField: 'ageRange',
    answerValue: '65_79',
    speechText: {
      te: 'లక్ష్మమ్మ: "నాకు అరవై ఎనిమిదేళ్ళు."',
      en: 'Lakshmamma: "I am 68 years old."',
      hi: 'लक्ष्मीअम्मा: "मेरी उम्र 68 साल है।"'
    },
    caption: {
      te: 'వయస్సు 68 (65-79 గ్రూపు ఎంపిక చేయబడింది)',
      en: 'Age 68 (Selected 65 to 79 group)',
      hi: 'उम्र 68 (65-79 समूह चुना गया)'
    },
    delayMs: 2500
  },
  {
    screen: 'question_gender',
    stepIndex: 2,
    answerField: 'gender',
    answerValue: 'female',
    speechText: {
      te: 'లక్ష్మమ్మ: "నేను స్త్రీని."',
      en: 'Lakshmamma: "I am a woman."',
      hi: 'लक्ष्मीअम्मा: "मैं महिला हूँ।"'
    },
    caption: {
      te: 'లింగం: స్త్రీ',
      en: 'Gender: Female',
      hi: 'लिंग: महिला'
    },
    delayMs: 2200
  },
  {
    screen: 'question_maritalStatus',
    stepIndex: 3,
    answerField: 'maritalStatus',
    answerValue: 'widow',
    speechText: {
      te: 'లక్ష్మమ్మ: "మా ఆయన చనిపోయారమ్మా.. వితంతువుని."',
      en: 'Lakshmamma: "My husband passed away.. I am a widow."',
      hi: 'लक्ष्मीअम्मा: "मेरे पति नहीं रहे, मैं विधवा हूँ।"'
    },
    caption: {
      te: 'వైవాహిక స్థితి: వితంతువు',
      en: 'Marital Status: Widow',
      hi: 'वैवाहिक स्थिति: विधवा'
    },
    delayMs: 2500
  },
  {
    screen: 'question_incomeBand',
    stepIndex: 4,
    answerField: 'incomeBand',
    answerValue: 'below_1_5_lakh',
    speechText: {
      te: 'లక్ష్మమ్మ: "నాకు తెల్ల రేషన్ కార్డు ఉందమ్మా."',
      en: 'Lakshmamma: "I have a white ration card, low income."',
      hi: 'लक्ष्मीअम्मा: "मेरे पास सफेद राशन कार्ड है।"'
    },
    caption: {
      te: 'ఆదాయం: ₹1.5 లక్షల లోపు (తెల్ల రేషన్ కార్డు)',
      en: 'Income: Below ₹1.5 Lakh (White Ration Card)',
      hi: 'आय: 1.5 लाख से कम'
    },
    delayMs: 2500
  },
  {
    screen: 'question_receivingPension',
    stepIndex: 5,
    answerField: 'receivingPension',
    answerValue: 'no',
    speechText: {
      te: 'లక్ష్మమ్మ: "ఇంతవరకు ఎటువంటి పింఛను రావడం లేదమ్మా."',
      en: 'Lakshmamma: "No pension so far, this is my first time."',
      hi: 'लक्ष्मीअम्मा: "अभी तक कोई पेंशन नहीं मिल रही।"'
    },
    caption: {
      te: 'ఇతర పింఛన్లు: ఏమీ లేవు',
      en: 'Existing pension: None',
      hi: 'मौजूदा पेंशन: कोई नहीं'
    },
    delayMs: 2500
  }
];
