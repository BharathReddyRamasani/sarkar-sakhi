import type {
  Language,
  SchemeConfig,
  DocumentItem,
  QuestionConfig,
  OfficeInfo,
} from '../types';

export interface UIStrings {
  appTitle: string;
  appSubtitle: string;
  homeGreeting: string;
  homeSubGreeting: string;
  tapToSpeak: string;
  listening: string;
  startCheckCta: string;
  typeInstead: string;
  voiceGuideOn: string;
  voiceGuideOff: string;
  privacyBadge: string;
  privacyNote: string;
  sampleBadge: string;
  hearAgain: string;
  next: string;
  back: string;
  confirm: string;
  clear: string;
  resetChecklist: string;
  transcriptLabel: string;
  transcriptEditPrompt: string;
  transcriptPlaceholder: string;
  voiceNotSupported: string;
  voiceNoMic: string;
  voiceNoMatch: string;
  voiceNoTeluguVoice: string;
  selectAnOption: string;
  stepOf: (curr: number, total: number) => string;
  questionHeaderLabel: string;
  exactAgeToggle: string;
  exactAgePlaceholder: string;
  intentFallbackTitle: string;
  intentFallbackPrompt: string;
  schemesHeading: string;
  schemesSubheading: string;
  mayQualifyBadge: string;
  doesNotQualifyBadge: string;
  matchedConditions: string;
  unmetConditions: string;
  verificationNeeded: string;
  fillFormCta: string;
  viewChecklistCta: string;
  formHeading: string;
  formSubheading: string;
  formSchemeLabel: string;
  formApplicantName: string;
  formGuardianName: string;
  formDistrict: string;
  formMandal: string;
  formVillage: string;
  formSpeakToFill: string;
  formListeningField: string;
  formPrintPdfCta: string;
  formDownloadTxtCta: string;
  formContinueChecklistCta: string;
  formPrivacyHint: string;
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
    appSubtitle: 'ప్రభుత్వ పథకాల సహాయకుడు',
    homeGreeting: 'నమస్తే! పింఛను గురించి అడగండి.',
    homeSubGreeting: 'తెలంగాణ వృద్ధాప్య, వితంతు మరియు ఒంటరి మహిళా పింఛన్ల అర్హత తెలుసుకోండి, దరఖాస్తు ఫారమ్ నింపండి.',
    tapToSpeak: 'మాట్లాడండి',
    listening: 'వింటున్నాము... మాట్లాడండి',
    startCheckCta: 'ప్రారంభించండి (అర్హత తనిఖీ)',
    typeInstead: 'బటన్ల ద్వారా ఎంచుకోండి',
    voiceGuideOn: 'వాయిస్ గైడ్: ఆన్',
    voiceGuideOff: 'వాయిస్ గైడ్: ఆఫ్',
    privacyBadge: 'గోప్యతా హామీ',
    privacyNote: 'మీ వివరాలు మీ ఫోన్/బ్రౌజర్‌లో మాత్రమే ఉంటాయి. ఏ సర్వర్‌లోనూ నిల్వ చేయబడవు.',
    sampleBadge: 'నమూనా అర్హత నియమాలు',
    hearAgain: 'మళ్ళీ వినండి',
    next: 'తరువాత',
    back: 'వెనుకకు',
    confirm: 'ఖరారు చేయండి',
    clear: 'కొత్తగా ప్రారంభించండి',
    resetChecklist: 'జాబితాను రీసెట్ చేయండి',
    transcriptLabel: 'మీరు మాట్లాడిన మాటలు:',
    transcriptEditPrompt: 'సరైనది కాకపోతే సరిచేసి ఖరారు నొక్కండి లేదా కింది బటన్ ఎంచుకోండి',
    transcriptPlaceholder: 'మీ సమాధానం ఇక్కడ కనిపిస్తుంది...',
    voiceNotSupported: 'ఈ బ్రౌజర్‌లో వాయిస్ రికగ్నిషన్ సపోర్ట్ లేదు. దయచేసి కింద ఉన్న బటన్లను నొక్కండి.',
    voiceNoMic: 'మైక్రోఫోన్ అనుమతి రాలేదు. దయచేసి మైక్ అనుమతించండి లేదా బటన్ల ద్వారా కొనసాగించండి.',
    voiceNoMatch: 'సమాధానం స్పష్టంగా గుర్తించబడలేదు. దయచేసి మళ్ళీ చెప్పండి లేదా కింది బటన్‌పై నొక్కండి.',
    voiceNoTeluguVoice: 'మీ పరికరంలో తెలుగు వాయిస్ లేదు. స్క్రీన్‌పై ఉన్న టెక్స్ట్ చదువుకోండి.',
    selectAnOption: 'దయచేసి ఒక ఎంపికను ఎంచుకోండి',
    stepOf: (curr, total) => `దశ ${curr} / ${total}`,
    questionHeaderLabel: 'అర్హత ప్రశ్న',
    exactAgeToggle: 'ఖచ్చితమైన వయస్సు రాయాలనుకుంటున్నారా?',
    exactAgePlaceholder: 'ఉదా: 68',
    intentFallbackTitle: 'మీకు ఏ పింఛను సాయం కావాలి?',
    intentFallbackPrompt: 'కింది వాటిలో మీరు తెలుసుకోవాలనుకుంటున్న పింఛను ఎంచుకోండి:',
    schemesHeading: 'మీకు సరిపోయే పింఛన్లు',
    schemesSubheading: 'మీ సమాధానాల ఆధారంగా అర్హత ఫలితాలు కింద ఇవ్వబడ్డాయి.',
    mayQualifyBadge: 'అర్హత ఉండే అవకాశం ఉంది',
    doesNotQualifyBadge: 'షరతులు సరిపోలడం లేదు',
    matchedConditions: 'సరిపోయిన నిబంధనలు',
    unmetConditions: 'సరిపోలని నిబంధనలు',
    verificationNeeded: 'ధృవీకరించుకోవలసిన వివరాలు',
    fillFormCta: 'మాట్లాడుతూ దరఖాస్తు ఫారమ్ నింపండి',
    viewChecklistCta: 'కావలసిన పత్రాల జాబితా చూడండి',
    formHeading: 'నమూనా పింఛను దరఖాస్తు ఫారమ్',
    formSubheading: 'ప్రతి బాక్స్ పక్కన ఉన్న మైక్ నొక్కి మాట్లాడండి లేదా టైప్ చేయండి.',
    formSchemeLabel: 'ఎంచుకున్న పథకం',
    formApplicantName: 'దరఖాస్తుదారుని పూర్తి పేరు',
    formGuardianName: 'భర్త / తండ్రి పేరు',
    formDistrict: 'జిల్లా (District)',
    formMandal: 'మండలం / మున్సిపాలిటీ',
    formVillage: 'గ్రామం / వార్డు',
    formSpeakToFill: 'మాట్లాడి నింపండి',
    formListeningField: 'వింటున్నాము...',
    formPrintPdfCta: 'ఫారమ్ ప్రింట్ / PDF సేవ్ చేయండి',
    formDownloadTxtCta: 'ఫారమ్ డౌన్‌లోడ్ (.txt)',
    formContinueChecklistCta: 'తరువాత: పత్రాల జాబితాకు వెళ్ళండి',
    formPrivacyHint: 'మీరు నింపిన వివరాలు మీ డివైజ్‌లో మాత్రమే ఉంటాయి.',
    checklistHeading: 'కావలసిన పత్రాల జాబితా',
    checklistSubheading: 'మీ వద్ద సిద్ధంగా ఉన్న పత్రాలను టిక్ చేయండి.',
    readyCount: (ready, total) => `${total} లో ${ready} పత్రాలు సిద్ధం`,
    allReady: 'అన్ని పత్రాలు సిద్ధంగా ఉన్నాయి! దరఖాస్తుకు సిద్ధం.',
    nextStepsCta: 'తదుపరి దశలు & వాట్సాప్ షేర్',
    nextStepsHeading: 'తదుపరి దశలు',
    nextStepsSubheading: 'పింఛను పొందడానికి 3 సులభమైన దశలు',
    step1Title: 'ఫారమ్ & పత్రాలను సిద్ధం చేసుకోండి',
    step1Desc: 'ప్రింట్ చేసిన ఫారమ్ మరియు ఆధార్, రేషన్ కార్డు, బ్యాంక్ పాస్‌బుక్ జిరాక్స్ ప్రతులు ఉంచండి.',
    step2Title: 'స్థానిక ప్రభుత్వ కార్యాలయానికి వెళ్లండి',
    step2Desc: 'ఉదయం వేళల్లో మీ గ్రామ పంచాయతీ / వార్డు సచివాలయం లేదా మీసేవ కేంద్రానికి వెళ్లండి.',
    step3Title: 'అధికారికి ఈ జాబితా చూపించండి',
    step3Desc: 'జాబితా మరియు నమూనా ఫారమ్ చూపించి అధికారిక పోర్టల్‌లో దరఖాస్తు సమర్పించండి.',
    shareWhatsAppCta: 'వాట్సాప్‌లో పూర్తి వివరాలు పంపండి',
    copySummaryCta: 'సారాంశాన్ని కాపీ చేయండి',
    copiedNotice: 'సారాంశం కాపీ అయింది!',
    whereToGoTitle: 'ఎక్కడికి వెళ్ళాలి?',
    whereToGoNotice: 'మీసేవ కేంద్రం (MeeSeva) లేదా మీ గ్రామ/వార్డు సచివాలయం, మండల పరిషత్ ఆఫీస్ (MPDO).',
    inPersonNotice: 'గమనిక: బయోమెట్రిక్ / వేలిముద్రలు మరియు పత్రాల సమర్పణ కోసం దరఖాస్తుదారు వ్యక్తిగతంగా హాజరుకావలసి ఉంటుంది.',
    disclaimerCard: 'సూచన: ఇవి నమూనా నిబంధనలు & ఫారమ్. తుది సమర్పణకు ముందు మీ మండల కార్యాలయంలో నిర్ధారించుకోండి.',
    aboutTitle: 'సర్కార్-సఖి గురించి & నిబంధనలు',
    aboutContent: 'సర్కార్-సఖి అనేది పౌరులకు ప్రభుత్వ పథకాల అర్హతను తనిఖీ చేయడం, మాటలతో నమూనా దరఖాస్తు ఫారమ్ నింపడం మరియు పత్రాలను సిద్ధం చేసుకోవడంలో సహాయపడే వాయిస్-ఫస్ట్ సాధనం. ఇందులోని పథకాల నిబంధనలను src/config/content.ts ద్వారా రాష్ట్రాల వారీగా సులభంగా మార్చుకోవచ్చు.',
    noDataStored: 'సర్వర్‌లో ఎటువంటి వ్యక్తిగత సమాచారం నిల్వ చేయబడదు.',
    footerRights: 'పౌర సహాయక వాయిస్-ఫస్ట్ అప్లికేషన్.'
  },
  en: {
    appTitle: 'Sarkar-Sakhi',
    appSubtitle: 'Voice-First Civic Companion',
    homeGreeting: 'Namaste! Ask about pensions.',
    homeSubGreeting: 'Check eligibility, fill out a voice-assisted sample application form, and prepare your documents.',
    tapToSpeak: 'Tap & Speak',
    listening: 'Listening... Please speak',
    startCheckCta: 'Start Eligibility Check',
    typeInstead: 'Choose using buttons',
    voiceGuideOn: 'Voice Guide: ON',
    voiceGuideOff: 'Voice Guide: OFF',
    privacyBadge: 'Privacy First',
    privacyNote: 'All answers and form drafts stay strictly inside your browser. Zero server storage.',
    sampleBadge: 'Sample Eligibility Rules',
    hearAgain: 'Hear again',
    next: 'Next',
    back: 'Back',
    confirm: 'Confirm',
    clear: 'Start New Check',
    resetChecklist: 'Reset Checklist',
    transcriptLabel: 'Recognized speech:',
    transcriptEditPrompt: 'Edit text if needed and press Confirm, or tap an option below',
    transcriptPlaceholder: 'Your spoken words will appear here...',
    voiceNotSupported: 'Speech recognition is not supported in this browser. Please tap the buttons below.',
    voiceNoMic: 'Microphone permission denied. Please allow mic access or continue using buttons.',
    voiceNoMatch: 'Could not match your spoken answer. Please repeat clearly or tap an option below.',
    voiceNoTeluguVoice: 'No Telugu TTS voice detected on this device. Continuing with visual text.',
    selectAnOption: 'Please select an option',
    stepOf: (curr, total) => `Step ${curr} of ${total}`,
    questionHeaderLabel: 'Eligibility Check',
    exactAgeToggle: 'Want to enter exact age number?',
    exactAgePlaceholder: 'e.g. 68',
    intentFallbackTitle: 'Which pension help do you need?',
    intentFallbackPrompt: 'Select the scheme category you want to check:',
    schemesHeading: 'Matching Pension Schemes',
    schemesSubheading: 'Real-time evaluation based on your answers:',
    mayQualifyBadge: 'May qualify',
    doesNotQualifyBadge: 'Criteria not met',
    matchedConditions: 'Matched conditions',
    unmetConditions: 'Unmet conditions',
    verificationNeeded: 'Needs verification',
    fillFormCta: 'Fill Sample Form by Voice',
    viewChecklistCta: 'Go to Document Checklist',
    formHeading: 'Sample Pension Application Form',
    formSubheading: 'Tap the mic icon next to any field to speak your details, or type directly.',
    formSchemeLabel: 'Selected Scheme',
    formApplicantName: 'Applicant Full Name',
    formGuardianName: 'Husband / Father Name',
    formDistrict: 'District',
    formMandal: 'Mandal / Municipality',
    formVillage: 'Village / Ward',
    formSpeakToFill: 'Speak to fill',
    formListeningField: 'Listening...',
    formPrintPdfCta: 'Print / Save Form as PDF',
    formDownloadTxtCta: 'Download Draft (.txt)',
    formContinueChecklistCta: 'Next: Check Required Documents',
    formPrivacyHint: 'Form draft is saved locally in your browser only.',
    checklistHeading: 'Documents Needed',
    checklistSubheading: 'Tap each paper you have ready with you.',
    readyCount: (ready, total) => `${ready} of ${total} ready`,
    allReady: 'All documents ready! You are prepared to apply.',
    nextStepsCta: 'Next Steps & Share',
    nextStepsHeading: 'Next Steps',
    nextStepsSubheading: '3 simple steps to submit your application',
    step1Title: 'Prepare your form & documents',
    step1Desc: 'Keep your printed sample form and copies of Aadhaar, Ration Card, and Passbook ready.',
    step2Title: 'Visit your local office',
    step2Desc: 'Visit your Gram Panchayat / Ward Sachivalayam, MPDO office, or MeeSeva centre in the morning.',
    step3Title: 'Submit with the officer',
    step3Desc: 'Show this readiness checklist and draft form to the official for final online submission.',
    shareWhatsAppCta: 'Share Readiness & Form on WhatsApp',
    copySummaryCta: 'Copy Summary',
    copiedNotice: 'Summary copied to clipboard!',
    whereToGoTitle: 'Where to go?',
    whereToGoNotice: 'MeeSeva centre, Gram Panchayat / Ward Sachivalayam, or Mandal Parishad Office (MPDO). Confirm locally.',
    inPersonNotice: 'Note: An in-person visit is required for biometric verification and physical document submission.',
    disclaimerCard: 'Sample rules & application template. Verify final criteria with your Mandal office or official portal.',
    aboutTitle: 'About Sarkar-Sakhi & Configuration',
    aboutContent: 'Sarkar-Sakhi is a live voice-first civic readiness companion. Citizens can speak to check eligibility, dictate a sample pension application form, track required documents, and share summaries via WhatsApp. All scheme rules and forms are modularly configured in src/config/content.ts.',
    noDataStored: 'No personal data is stored on any server.',
    footerRights: 'Voice-First Civic Readiness Companion.'
  },
  hi: {
    appTitle: 'सरकार-सखी',
    appSubtitle: 'सरकारी योजना साथी',
    homeGreeting: 'नमस्ते! पेंशन के बारे में पूछें।',
    homeSubGreeting: 'पात्रता जांचें, बोलकर आवेदन फॉर्म भरें और आवश्यक दस्तावेज तैयार करें।',
    tapToSpeak: 'बोलें',
    listening: 'सुन रहे हैं... कृपया बोलें',
    startCheckCta: 'पात्रता जांच शुरू करें',
    typeInstead: 'बटन से चुनें',
    voiceGuideOn: 'वॉयस गाइड: चालू',
    voiceGuideOff: 'वॉयस गाइड: बंद',
    privacyBadge: 'गोपनीयता गारंटी',
    privacyNote: 'आपका सारा विवरण केवल आपके ब्राउज़र में रहता है। कोई सर्वर स्टोरेज नहीं है।',
    sampleBadge: 'सैंपल पात्रता नियम',
    hearAgain: 'फिर से सुनें',
    next: 'आगे बढ़ें',
    back: 'पीछे जाएं',
    confirm: 'पुष्टि करें',
    clear: 'नया शुरू करें',
    resetChecklist: 'चेकलिस्ट रीसेट करें',
    transcriptLabel: 'आपने कहा:',
    transcriptEditPrompt: 'यदि सही नहीं है, तो संपादित करें या नीचे बटन दबाएं',
    transcriptPlaceholder: 'आपकी आवाज यहाँ दिखाई देगी...',
    voiceNotSupported: 'इस ब्राउज़र में वॉयस सुविधा उपलब्ध नहीं है। कृपया बटन दबाएं।',
    voiceNoMic: 'माइक की अनुमति नहीं मिली। कृपया अनुमति दें या बटन चुनें।',
    voiceNoMatch: 'उत्तर स्पष्ट समझ नहीं आया। कृपया दोबारा बोलें या नीचे विकल्प चुनें।',
    voiceNoTeluguVoice: 'डिवाइस पर स्थानीय वॉयस उपलब्ध नहीं है।',
    selectAnOption: 'कृपया एक विकल्प चुनें',
    stepOf: (curr, total) => `चरण ${curr} / ${total}`,
    questionHeaderLabel: 'पात्रता प्रश्न',
    exactAgeToggle: 'क्या आप सटीक आयु दर्ज करना चाहते हैं?',
    exactAgePlaceholder: 'उदा: 68',
    intentFallbackTitle: 'आपको किस पेंशन की सहायता चाहिए?',
    intentFallbackPrompt: 'वह पेंशन चुनें जिसके बारे में आप जानना चाहते हैं:',
    schemesHeading: 'आपके लिए योजनाएं',
    schemesSubheading: 'आपके उत्तरों के आधार पर वास्तविक समय में पात्रता परिणाम:',
    mayQualifyBadge: 'पात्र हो सकते हैं',
    doesNotQualifyBadge: 'शर्तें पूरी नहीं हैं',
    matchedConditions: 'पूरी शर्तें',
    unmetConditions: 'अपूर्ण शर्तें',
    verificationNeeded: 'सत्यापन आवश्यक',
    fillFormCta: 'बोलकर सैंपल फॉर्म भरें',
    viewChecklistCta: 'आवश्यक दस्तावेज देखें',
    formHeading: 'सैंपल पेंशन आवेदन फॉर्म',
    formSubheading: 'बोलकर भरने के लिए किसी भी बॉक्स के पास माइक आइकन दबाएं।',
    formSchemeLabel: 'चयनित योजना',
    formApplicantName: 'आवेदक का पूरा नाम',
    formGuardianName: 'पति / पिता का नाम',
    formDistrict: 'जिला',
    formMandal: 'मंडल / नगरपालिका',
    formVillage: 'गाँव / वार्ड',
    formSpeakToFill: 'बोलकर भरें',
    formListeningField: 'सुन रहे हैं...',
    formPrintPdfCta: 'फॉर्म प्रिंट / PDF सेव करें',
    formDownloadTxtCta: 'ड्राफ्ट डाउनलोड (.txt)',
    formContinueChecklistCta: 'आगे: दस्तावेज चेकलिस्ट',
    formPrivacyHint: 'फॉर्म केवल आपके डिवाइस में सहेजा जाता है।',
    checklistHeading: 'आवश्यक दस्तावेज',
    checklistSubheading: 'जो दस्तावेज आपके पास तैयार हैं, उन पर टिक करें।',
    readyCount: (ready, total) => `${total} में से ${ready} तैयार`,
    allReady: 'सभी दस्तावेज तैयार हैं!',
    nextStepsCta: 'अगले कदम और शेयर करें',
    nextStepsHeading: 'अगले कदम',
    nextStepsSubheading: 'पेंशन प्राप्त करने के 3 आसान कदम',
    step1Title: 'फॉर्म और दस्तावेज तैयार करें',
    step1Desc: 'प्रिंट किया हुआ फॉर्म, आधार, राशन कार्ड और पासबुक की प्रतियां रखें।',
    step2Title: 'स्थानीय कार्यालय जाएं',
    step2Desc: 'सुबह के समय ग्राम पंचायत, वार्ड कार्यालय या मी-सेवा केंद्र जाएं।',
    step3Title: 'अधिकारी के साथ जमा करें',
    step3Desc: 'अधिकारी को यह सूची और फॉर्म ड्राफ्ट दिखाकर आवेदन जमा करें।',
    shareWhatsAppCta: 'व्हाट्सएप पर शेयर करें',
    copySummaryCta: 'सारांश कॉपी करें',
    copiedNotice: 'सारांश कॉपी हो गया!',
    whereToGoTitle: 'कहाँ जाएं?',
    whereToGoNotice: 'मी-सेवा केंद्र, ग्राम पंचायत या मंडल कार्यालय (MPDO)।',
    inPersonNotice: 'बायोमेट्रिक और भौतिक सत्यापन के लिए स्वयं उपस्थित होना आवश्यक है।',
    disclaimerCard: 'सैंपल नियम और फॉर्म। आधिकारिक पोर्टल या मंडल कार्यालय से अंतिम पुष्टि करें।',
    aboutTitle: 'सरकार-सखी के बारे में',
    aboutContent: 'सरकार-सखी एक वॉयस-फर्स्ट नागरिक सहायता उपकरण है।',
    noDataStored: 'किसी सर्वर पर कोई व्यक्तिगत डेटा संग्रहीत नहीं होता है।',
    footerRights: 'वॉयस-फर्स्ट नागरिक सहायता।'
  }
};

// Intent keyword dictionary for voice recognition and text matching
export const INTENT_KEYWORDS: Record<Language, { oldAge: string[]; widow: string[]; singleWoman: string[]; general: string[] }> = {
  te: {
    oldAge: ['వృద్ధాప్య', 'ముసలి', 'పెద్దల', 'వృద్ధుల', '65', '57', 'ఓల్డ్ ఏజ్', 'వయస్సు'],
    widow: ['వితంతు', 'భర్త లేని', 'వితంతువు', 'విధవ', 'విడో', 'భర్త చనిపోయారు'],
    singleWoman: ['ఒంటరి', 'సింగిల్', 'అవివాహిత', 'విడాకులు'],
    general: ['పింఛను', 'పెన్షన్', 'సహాయం', 'డబ్బులు', 'పథకం', 'ఆసరా', 'ఫారమ్']
  },
  en: {
    oldAge: ['old age', 'elderly', 'senior citizen', 'aged', 'aasara old', 'senior'],
    widow: ['widow', 'husband death', 'widows', 'husband passed'],
    singleWoman: ['single woman', 'unmarried', 'divorced', 'separated'],
    general: ['pension', 'scheme', 'government help', 'assistance', 'aasara', 'form', 'apply']
  },
  hi: {
    oldAge: ['वृद्धावस्था', 'बुजुर्ग', 'बुढ़ापा', 'ओल्ड एज'],
    widow: ['विधवा', 'पति नहीं', 'विवाहिता नहीं'],
    singleWoman: ['अकेली महिला', 'अविवाहित', 'तलाकशुदा'],
    general: ['पेंशन', 'सरकारी योजना', 'सहायता', 'फॉर्म']
  }
};

// Voice mapping for numbers, ages, and choices
export const VOICE_OPTION_MAP: Record<string, string[]> = {
  under_57: ['under 57', 'below 57', '57 కంటే తక్కువ', 'తక్కువ', 'యవ్వనం', 'చిన్న వయస్సు', '57 से कम'],
  '57_64': ['57 to 64', '57 నుండి 64', 'యాభై ఏడు', 'అరవై', '60', '58', '59', '61', '62', '63', '64'],
  '65_79': ['65 to 79', '65 నుండి 79', 'అరవై ఐదు', 'డెబ్బై', '68', '65', '66', '67', '69', '70', '75'],
  '80_plus': ['80 plus', 'above 80', '80 కంటే ఎక్కువ', 'ఎనభై', '80', '80 से अधिक'],

  female: ['female', 'woman', 'lady', 'స్త్రీ', 'మహిళ', 'ఆడ', 'महिला', 'स्त्री'],
  male: ['male', 'man', 'పురుషుడు', 'మగ', 'पुरुष'],
  other: ['other', 'ఇతర', 'अन्य'],

  widow: ['widow', 'వితంతువు', 'భర్త చనిపోయారు', 'భర్త లేరు', 'విధవ', 'विधवा'],
  married: ['married', 'వివాహితురాలు', 'వివాహితుడు', 'పెళ్ళయింది', 'विवाहित'],
  unmarried: ['unmarried', 'single', 'అవివాహిత', 'పెళ్ళికాలేదు', 'अविवाहित'],
  divorced: ['divorced', 'విడాకులు', 'तलाकशुदा'],
  separated: ['separated', 'వేరుగా ఉంటున్నాము', 'ఒంటరి', 'अलग'],

  below_1_5_lakh: ['below 1.5 lakh', 'low income', 'white ration card', 'తెల్ల రేషన్ కార్డు', 'తక్కువ ఆదాయం', 'లక్షన్నర కంటే తక్కువ', 'लक्ष', 'सफेद राशन कार्ड', 'डेढ़ लाख से कम'],
  above_1_5_lakh: ['above 1.5 lakh', 'high income', 'ఎక్కువ ఆదాయం', 'లక్షన్నర కంటే ఎక్కువ', 'डेढ़ लाख से अधिक'],
  unknown: ['unknown', 'not sure', 'తెలియదు', 'ఖచ్చితంగా తెలియదు', 'पता नहीं'],

  yes: ['yes', 'avunu', 'అవును', 'వస్తోంది', 'తీసుకుంటున్నాను', 'హా', 'हाँ'],
  no: ['no', 'kaadu', 'లేదు', 'రావడం లేదు', 'తీసుకోవడం లేదు', 'నహి', 'नहीं']
};

/**
 * Sample Scheme Configurations
 * Modify eligibility rules, benefit amounts, or add new state schemes here.
 */
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
      te: '57 సంవత్సరాలు లేదా అంతకంటే ఎక్కువ వయస్సు గల అర్హులైన సీనియర్ సిటిజన్లకు నెలవారీ ఆర్థిక భృతి.',
      en: 'Monthly social security pension for eligible senior citizens aged 57 years and above.',
      hi: '57 वर्ष या उससे अधिक आयु के वरिष्ठ नागरिकों के लिए मासिक सामाजिक सुरक्षा पेंशन।'
    },
    amountText: {
      te: 'నమూనా భృతి: నెలకు ₹2,016 (అధికారికంగా నిర్ధారించుకోండి)',
      en: 'Sample Benefit: ₹2,016 / month (Verify at office)',
      hi: 'सैंपल सहायता: ₹2,016 / माह (कार्यालय से पुष्टि करें)'
    },
    disclaimer: {
      te: 'ఇది నమూనా అర్హత నిబంధనలపై ఆధారపడింది. తుది దరఖాస్తుకు ముందు మీసేవ / మండల కార్యాలయంలో నిర్ధారించుకోండి.',
      en: 'Based on sample eligibility rules. Confirm final thresholds at your Mandal office or official portal.',
      hi: 'सैंपल पात्रता नियमों पर आधारित। मंडल कार्यालय या आधिकारिक पोर्टल से पुष्टि करें।'
    },
    icon: 'elderly',
    // Sample threshold: age 57+, BPL / < ₹1.5L income, no existing pension
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
      te: 'భర్తను కోల్పోయిన 18 సంవత్సరాలు లేదా అంతకంటే ఎక్కువ వయస్సు గల అర్హులైన మహిళలకు నెలవారీ జీవన భృతి.',
      en: 'Monthly financial support for eligible widows aged 18 years and above.',
      hi: '18 वर्ष और उससे अधिक आयु की विधवा महिलाओं के लिए मासिक वित्तीय सहायता।'
    },
    amountText: {
      te: 'నమూనా భృతి: నెలకు ₹2,016 (అధికారికంగా నిర్ధారించుకోండి)',
      en: 'Sample Benefit: ₹2,016 / month (Verify at office)',
      hi: 'सैंपल सहायता: ₹2,016 / माह (कार्यालय से पुष्टि करें)'
    },
    disclaimer: {
      te: 'ఇది నమూనా అర్హత నిబంధనలపై ఆధారపడింది. తుది దరఖాస్తుకు ముందు మీసేవ / మండల కార్యాలయంలో నిర్ధారించుకోండి.',
      en: 'Based on sample eligibility rules. Confirm final thresholds at your Mandal office or official portal.',
      hi: 'सैंपल पात्रता नियमों पर आधारित। मंडल कार्यालय या आधिकारिक पोर्टल से पुष्टि करें।'
    },
    icon: 'elderly_woman',
    // Sample threshold: age 18+, female, widow, BPL / < ₹1.5L income, no existing pension
    rules: {
      minAge: 18,
      targetGender: ['female'],
      requiredMaritalStatus: ['widow'],
      incomeLimitBand: ['below_1_5_lakh'],
      disqualifyIfExistingPension: true
    }
  },
  telangana_single_woman: {
    id: 'telangana_single_woman',
    name: {
      te: 'ఒంటరి మహిళా పింఛను (ఆసరా)',
      en: 'Single Woman Pension (Aasara)',
      hi: 'एकल महिला पेंशन (आसरा)'
    },
    alias: {
      te: 'ఆసరా ఒంటరి మహిళా భృతి',
      en: 'Aasara Single Women Assistance',
      hi: 'आसरा एकल महिला सहायता'
    },
    description: {
      te: '18 ఏళ్లు పైబడిన అవివాహిత లేదా విడిపోయిన / విడాకులు పొందిన అర్హులైన మహిళలకు ఆర్థిక సహాయం.',
      en: 'Monthly assistance for eligible unmarried, divorced, or separated women aged 18 years and above.',
      hi: '18 वर्ष से अधिक आयु की अविवाहित, तलाकशुदा या अलग रहने वाली महिलाओं के लिए सहायता।'
    },
    amountText: {
      te: 'నమూనా భృతి: నెలకు ₹2,016 (అధికారికంగా నిర్ధారించుకోండి)',
      en: 'Sample Benefit: ₹2,016 / month (Verify at office)',
      hi: 'सैंपल सहायता: ₹2,016 / माह (कार्यालय से पुष्टि करें)'
    },
    disclaimer: {
      te: 'ఇది నమూనా అర్హత నిబంధనలపై ఆధారపడింది. తుది దరఖాస్తుకు ముందు మీసేవ / మండల కార్యాలయంలో నిర్ధారించుకోండి.',
      en: 'Based on sample eligibility rules. Confirm final thresholds at your Mandal office or official portal.',
      hi: 'सैंपल पात्रता नियमों पर आधारित। मंडल कार्यालय या आधिकारिक पोर्टल से पुष्टि करें।'
    },
    icon: 'woman',
    rules: {
      minAge: 18,
      targetGender: ['female'],
      requiredMaritalStatus: ['unmarried', 'divorced', 'separated'],
      incomeLimitBand: ['below_1_5_lakh'],
      disqualifyIfExistingPension: true
    }
  }
};

export const DOCUMENTS: Record<string, DocumentItem> = {
  aadhaar: {
    id: 'aadhaar',
    requiredFor: ['telangana_old_age', 'telangana_widow', 'telangana_single_woman'],
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
    requiredFor: ['telangana_old_age', 'telangana_widow', 'telangana_single_woman'],
    names: {
      te: 'ఆహార భద్రత కార్డు / తెల్ల రేషన్ కార్డు (White Ration Card)',
      en: 'Food Security Card / White Ration Card',
      hi: 'सफेद राशन कार्ड / खाद्य सुरक्षा कार्ड'
    },
    descriptions: {
      te: 'రాష్ట్ర నివాసి మరియు ఆదాయ పరిమితిలో ఉన్నట్లు ధృవీకరణ.',
      en: 'Proof of BPL / low income eligibility.',
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
  single_status_cert: {
    id: 'single_status_cert',
    requiredFor: ['telangana_single_woman'],
    names: {
      te: 'విడిపోయిన / అవివాహిత ధృవీకరణ పత్రం (MRO / Panchayat Certificate)',
      en: 'Single / Separated Status Certificate (MRO / Panchayat)',
      hi: 'एकल / अविवाहित प्रमाण पत्र'
    },
    descriptions: {
      te: 'గ్రామ పంచాయతీ లేదా తహసీల్దార్ కార్యాలయం నుండి పొందిన ధృవీకరణ.',
      en: 'Self-declaration or certificate issued by local Tehsildar / Panchayat.',
      hi: 'तहसीलदार या ग्राम पंचायत द्वारा जारी प्रमाण।'
    },
    icon: 'assignment_ind'
  },
  bank_passbook: {
    id: 'bank_passbook',
    requiredFor: ['telangana_old_age', 'telangana_widow', 'telangana_single_woman'],
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
    requiredFor: ['telangana_old_age', 'telangana_widow', 'telangana_single_woman'],
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
      te: 'వయస్సు ధృవీకరణ పత్రం (Voter ID / Age Proof)',
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
      en: 'Speak your age or tap one of the age groups below.',
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
          te: '65 నుండి 79 సంవత్సరాలు',
          en: '65 to 79 years',
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
      en: 'Please say female, male, or other.',
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
      te: 'మీ వైవాహిక స్థితిని చెప్పండి లేదా కింద ఎంచుకోండి.',
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
      te: 'మీకు ప్రస్తుతం వేరే పింఛను ఏమైనా వస్తోందా? అవును లేదా లేదు అని చెప్పండి.',
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
    en: 'Submit your pension application form and documents at your Gram Panchayat / Ward Sachivalayam, MeeSeva centre, or MPDO office.',
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
