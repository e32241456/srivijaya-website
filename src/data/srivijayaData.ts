export interface Ruler {
  id: string;
  name: string;
  fullTitle: string;
  dynasty: 'Jayanasa' | 'Shailendra' | 'Cudamani' | 'Late Era';
  reignPeriod: string;
  reignStart: number;
  reignEnd: number;
  inscriptions: string[];
  seat: string;
  significance: string;
  narrative: string;
  achievements: string[];
  primarySources: string[];
  quote?: string;
  quoteAuthor?: string;
}

export interface TimelineEvent {
  id: string;
  year: number;
  yearLabel: string;
  epoch: 'Foundation' | 'Shailendra Alliance' | 'Golden Age' | 'Chola Clashes' | 'Twilight';
  title: string;
  location: string;
  summary: string;
  detailedAnalysis: string;
  stelaOrSource: string;
  historicalImpact: string;
}

export interface MaritimePort {
  id: string;
  name: string;
  ancientName: string;
  coordinates: string;
  svgX: number; // For interactive SVG map (0-1000)
  svgY: number; // For interactive SVG map (0-600)
  role: string;
  commodities: string[];
  description: string;
  strategicSignificance: string;
}

export interface EpigraphicTerm {
  term: string;
  language: 'Old Malay' | 'Sanskrit' | 'Tamil' | 'Chinese' | 'Austronesian' | 'Persian / Old Malay';
  transcription: string;
  meaning: string;
  context: string;
}

export const RULERS_DATA: Ruler[] = [
  {
    id: 'dapunta-hyang',
    name: 'Dapunta Hyang Sri Jayanasa',
    fullTitle: 'Śrī Mahārāja Dapunta Hiyang Śrī Jayanāśa',
    dynasty: 'Jayanasa',
    reignPeriod: 'c. 671 – 692 CE',
    reignStart: 671,
    reignEnd: 692,
    inscriptions: ['Kedukan Bukit (683 CE)', 'Talang Tuo (684 CE)', 'Kota Kapur (686 CE)', 'Karang Brahi (686 CE)'],
    seat: 'Mukha Upang / Palembang (Musi River Estuary)',
    significance: 'The foundational sovereign who conducted the Siddhayatra holy expedition with 20,000 troops, establishing the thalassocracy.',
    narrative: 'On 23 April 683 CE (Saka 605), Dapunta Hyang embarked on an outrigger armada from Minanga Tamwan, conquering rival riverine polities along the Musi and Batanghari rivers. He sanctified the imperial center at Palembang and dedicated the Sri Ksetra public gardens in 684 CE for the spiritual merit and physical sustenance of all sentient beings.',
    achievements: [
      'Conducted the celebrated Siddhayatra (sacred victorious expedition) with 20,000 soldiers and 200 boats.',
      'Subdued Malayu (Jambi) and established complete hegemony across eastern Sumatra.',
      'Consecrated the Talang Tuo park filled with coconut, betel, and sugar palms for public benevolence.',
      'Dispatched naval expeditions to subdue Tarumanagara in Western Java and Bangka Island.'
    ],
    primarySources: ['Kedukan Bukit Stela (Old Malay in Pallava script)', 'Yi Jing (I-Tsing) Nan-hai Chi-kuei Nei-fa Chuan', 'Talang Tuo Inscription'],
    quote: 'Marvuat samvau maṅalap siddhayātra... sukhacitta di yapana Śrīvijaya jaya siddhayātra subhikṣa.',
    quoteAuthor: 'Kedukan Bukit Inscription, 683 CE'
  },
  {
    id: 'sri-indravarman',
    name: 'Sri Indravarman',
    fullTitle: 'Śrī Indravarman Mahārāja',
    dynasty: 'Jayanasa',
    reignPeriod: 'c. 702 – 728 CE',
    reignStart: 702,
    reignEnd: 728,
    inscriptions: ['Imperial Tang Annals (Ce-fu Yuan-kuei)', 'Arab chronicles (Kitab al-Masalik wa al-Mamalik)'],
    seat: 'Palembang',
    significance: 'Master diplomat who consolidated international commerce with Tang China and dispatched royal correspondence to Umayyad Caliph Umar ibn Abd al-Aziz.',
    narrative: 'Sri Indravarman elevated Srivijaya into a global commercial hub. In 718 CE, he dispatched an extraordinary diplomatic mission to Caliph Umar ibn Abd al-Aziz in Damascus, writing: "From the King of Kings, whose palace contains thousands of elephants... to the King of the Arabs who acknowledges no associates with God." His envoys presented gifts of camphor, frankincense, and trained parakeets.',
    achievements: [
      'Established trans-continental diplomatic and trade relations with the Islamic Umayyad Caliphate.',
      'Sent tributary trade missions to Chang’an during the reign of Emperor Xuanzong of Tang (716 & 724 CE).',
      'Secured customs treaties guaranteeing safe passage through the Malacca Strait.'
    ],
    primarySources: ['Tang Annals', 'Ibn Abd Rabbih, Al-Iqd al-Farid', 'Kitab al-Aja’ib al-Hind']
  },
  {
    id: 'rudra-vikraman',
    name: 'Rudra Vikraman',
    fullTitle: 'Śrī Rudra Vikraman / Liu-teng-wei-kung',
    dynasty: 'Jayanasa',
    reignPeriod: 'c. 728 – 742 CE',
    reignStart: 728,
    reignEnd: 742,
    inscriptions: ['New Book of Tang (Xin Tangshu)', 'Canton port custom manifests'],
    seat: 'Palembang',
    significance: 'Maintained maritime dominance during the mid-8th century and defended the sea routes against northern piracy.',
    narrative: 'Recorded in Chinese chronicles as Liu-teng-wei-kung, Rudra Vikraman dispatched multiple missions with precious Sumatran aromatic resins, pearls, and gold ore to the Tang court, securing imperial preferential tariffs for Srivijayan merchants in Canton (Guangzhou).',
    achievements: [
      'Maintained uninterrupted naval patrols protecting international convoys from maritime corsairs.',
      'Expanded tributary alliances with maritime polities in the Sunda Strait and West Kalimantan.'
    ],
    primarySources: ['Xin Tangshu Vol. 222', 'Song Gaoseng Zhuan']
  },
  {
    id: 'dharanindra',
    name: 'Dharanindra / Sri Maharaja',
    fullTitle: 'Śrī Mahārāja Dharanīndra Vairivaravīramardana',
    dynasty: 'Shailendra',
    reignPeriod: 'c. 775 – 800 CE',
    reignStart: 775,
    reignEnd: 800,
    inscriptions: ['Ligor Inscription B (775 CE)', 'Kelurak Inscription (782 CE)'],
    seat: 'Ligor (Chaiya) & Central Java / Palembang',
    significance: 'Consolidated the union between Srivijaya and the Javanese Shailendra dynasty, ruling both Sumatra and the Malay Peninsula.',
    narrative: 'Under Dharanindra, the celebrated Shailendra dynastic network expanded sovereign reach across the Kra Isthmus. In 775 CE, he erected sanctuaries at Ligor dedicated to the Buddha, Padmapani, and Vajrapani, effectively establishing fortified naval checkpoints on both sides of the Malacca Strait.',
    achievements: [
      'Fortified the Kra Isthmus overland portage route at Chaiya/Ligor.',
      'United the naval thalassocracy of Srivijaya with the monumental architectural prowess of the Shailendras.',
      'Commissioned Buddhist monastic complexes across the Malay Peninsula.'
    ],
    primarySources: ['Ligor Stele (Face A and Face B)', 'Kelurak Inscription, Java']
  },
  {
    id: 'samaratungga',
    name: 'Samaratungga',
    fullTitle: 'Śrī Mahārāja Samaratuṅga',
    dynasty: 'Shailendra',
    reignPeriod: 'c. 792 – 835 CE',
    reignStart: 792,
    reignEnd: 835,
    inscriptions: ['Karangtengah Inscription (824 CE)', 'Kayumwungan Inscription'],
    seat: 'Central Java / Srivijayan Hegemony',
    significance: 'Presided over the golden culmination of Buddhist monument construction, completing the Borobudur Mahastupa.',
    narrative: 'Married to Dewi Tara, daughter of the Srivijayan sovereign Dharmasetu, Samaratungga personified the dynastic synthesis of maritime empire and agrarian monumental power. His reign cemented Srivijaya as the paramount spiritual patron of Mahayana-Vajrayana Buddhism across Asia.',
    achievements: [
      'Oversaw the dedication of the great stupa of Borobudur (Bhumisambharabudhara) in 824 CE.',
      'Father of Balaputradewa, who later ascended to rule Srivijaya in Sumatra.',
      'Strengthened trade and spiritual links with Nalanda Mahavihara in Bihar, India.'
    ],
    primarySources: ['Karangtengah Stone (824 CE)', 'Prasati Gondosuli']
  },
  {
    id: 'balaputradewa',
    name: 'Balaputradewa',
    fullTitle: 'Śrī Mahārāja Bālaputradeva',
    dynasty: 'Shailendra',
    reignPeriod: 'c. 835 – 860 CE',
    reignStart: 835,
    reignEnd: 860,
    inscriptions: ['Nalanda Copperplate Charter (860 CE)', 'Shivagrha Inscription (856 CE)'],
    seat: 'Palembang (Suvarnadvipa)',
    significance: 'Architect of the golden era of international Buddhist scholarship; founded a monastery at Nalanda University in India.',
    narrative: 'Following a succession contest in Java, Balaputradewa returned to Suvarnadvipa (Sumatra) and assumed the throne of Srivijaya. In 860 CE, he petitioned King Devapaladeva of the Pala Empire in Bengal to grant five villages to permanently endow a grand monastery for Srivijayan scholars studying at Nalanda.',
    achievements: [
      'Endowed the Srivijaya Monastery at Nalanda, funding food, medicine, and scripture copying for international monks.',
      'Restored Palembang as the undisputed naval capital and primary entrepôt of Southeast Asia.',
      'Expanded trade fleets to southern India, Bengal, Sri Lanka, and China.'
    ],
    primarySources: ['Nalanda Copperplate of Devapala', 'Shivagrha Inscription'],
    quote: 'Being desirous of erecting a vihāra at Nālandā, endowed with great beauty... for the welfare and bliss of his parents and all beings.',
    quoteAuthor: 'Nalanda Copperplate Charter, c. 860 CE'
  },
  {
    id: 'sri-cudamanivarmadeva',
    name: 'Sri Cudamanivarmadeva',
    fullTitle: 'Śrī Cūḍāmaṇivarmadeva Mahārāja',
    dynasty: 'Cudamani',
    reignPeriod: 'c. 988 – 1008 CE',
    reignStart: 988,
    reignEnd: 1008,
    inscriptions: ['Larger Leiden Plates (Tamil & Sanskrit)', 'Song Dynasty Annals (Song Shi)'],
    seat: 'Palembang & Kedah (Kataha)',
    significance: 'Constructed the Chudamani Vihara in Nagapattinam, India, with the consent of Chola Emperor Rajaraja I, and repelled Javanese invasions.',
    narrative: 'A sovereign of immense diplomatic finesse, Cudamanivarmadeva maintained simultaneous warm alliances with the northern Song court in Kaifeng and the Chola Empire in Coromandel. In 990–992 CE, he successfully defended Srivijaya against a severe naval invasion by King Dharmawangsa of Mataram (East Java).',
    achievements: [
      'Founded the Chudamani Vihara in Nagapattinam, Tamil Nadu, under an imperial tax-exemption charter from Rajaraja Chola I.',
      'Dispatched Buddhist bells, gold tapestries, and sandalwood to Song Emperor Zhenzong.',
      'Counter-attacked and broke the Javanese naval blockade in 1006 CE.'
    ],
    primarySources: ['Larger Leiden Inscription', 'Song Shi Vol. 489', 'Hultzsch Epigraphia Indica']
  },
  {
    id: 'sri-mara-vijayottungavarman',
    name: 'Sri Mara-Vijayottungavarman',
    fullTitle: 'Śrī Māra-Vijayottuṅgavarman',
    dynasty: 'Cudamani',
    reignPeriod: 'c. 1008 – 1019 CE',
    reignStart: 1008,
    reignEnd: 1019,
    inscriptions: ['Larger Leiden Grant completion', 'Song Shi diplomatic registry'],
    seat: 'Kedah & Palembang',
    significance: 'Completed the international monastic foundations of his father and preserved peace in the Malacca Strait.',
    narrative: 'Son of Sri Cudamanivarmadeva, he oversaw the final Sanskrit ratification of the Leiden charter from Rajaraja Chola and his successor Rajendra Chola I. Under his tenure, Srivijayan naval trade reached unprecedented revenue levels as Chinese merchants frequented Kataha and Sanfoqi.',
    achievements: [
      'Completed the grand monastery at Nagapattinam for Southeast Asian merchants and pilgrims.',
      'Protected open navigation through both the Malacca and Sunda Straits with bilateral treaties.'
    ],
    primarySources: ['Leiden Copperplates', 'Chinese Song Records']
  },
  {
    id: 'sangrama-vijayottungavarman',
    name: 'Sangrama-Vijayottungavarman',
    fullTitle: 'Śrī Saṅgrāma-Vijayottuṅgavarman',
    dynasty: 'Cudamani',
    reignPeriod: 'c. 1020 – 1035 CE',
    reignStart: 1020,
    reignEnd: 1035,
    inscriptions: ['Thanjavur Prasasti of Rajendra Chola I (1030 CE)'],
    seat: 'Palembang',
    significance: 'The heroic sovereign who confronted the cataclysmic naval invasion of the Chola Empire in 1025 CE.',
    narrative: 'In 1025 CE, Rajendra Chola I launched an unexpected trans-oceanic armada across the Bay of Bengal, attacking 14 key Srivijayan port cities including Kadaram (Kedah), Pannai, Malaiyur (Jambi), and the capital Palembang. Sangrama was captured alongside his war elephants, yet Srivijayan autonomy gradually recovered.',
    achievements: [
      'Organized fierce naval resistance against the Chola trans-oceanic battle fleet.',
      'Preserved the dynastic continuity and cultural resilience of the realm in the post-raid era.'
    ],
    primarySources: ['Thanjavur Temple Inscription of Rajendra I', 'Song Shi records']
  },
  {
    id: 'trailokyaraja',
    name: 'Trailokyaraja Maulibhusana',
    fullTitle: 'Śrī Mahārāja Śrīmat Trailokyarāja Maulibhūṣaṇavarmadeva',
    dynasty: 'Late Era',
    reignPeriod: 'c. 1183 – 1286 CE',
    reignStart: 1183,
    reignEnd: 1286,
    inscriptions: ['Grahi Buddha Inscription (Chaiya, 1183 CE)', 'Padang Roco Inscription (1286 CE)'],
    seat: 'Dharmasraya / Muaro Jambi',
    significance: 'Sovereign of the Dharmasraya-Malayu succession, anchoring the interior riverine gold trade of Sumatra.',
    narrative: 'As power shifted upstream along the Batanghari river to Dharmasraya, Srivijayan authority restructured into the Malayu kingdom. In 1183 CE, the Grahi bronze inscription in Southern Thailand notes royal orders conveyed to the governor of Chaiya, proving continued influence across the Gulf of Siam.',
    achievements: [
      'Governed the lucrative Minangkabau highland gold routes down the Batanghari River.',
      'Maintained regional maritime suzerainty prior to the Singhasari Pamalayu expedition of 1275 CE.'
    ],
    primarySources: ['Grahi Bronze Inscription', 'Padang Roco Amoghapasa Stele']
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'ev-683',
    year: 683,
    yearLabel: '683 CE',
    epoch: 'Foundation',
    title: 'The Sacred Siddhayatra Expedition & Foundation',
    location: 'Musi River Estuary, Palembang',
    summary: 'Dapunta Hyang Sri Jayanasa leads 20,000 soldiers on outrigger war vessels, consecrated at Minanga Tamwan, establishing the imperial seat at Palembang.',
    detailedAnalysis: 'Recorded on the Kedukan Bukit stela on 23 April 683 CE (Saka 605), this sacred martial-spiritual voyage marks the political unification of the Musi river basin and the birth of Srivijaya as a sovereign thalassocracy.',
    stelaOrSource: 'Kedukan Bukit Inscription (Palembang)',
    historicalImpact: 'Consolidated riverine chieftains into a unified naval command with religious merit.'
  },
  {
    id: 'ev-684',
    year: 684,
    yearLabel: '684 CE',
    epoch: 'Foundation',
    title: 'Dedication of the Sri Ksetra Public Park',
    location: 'Talang Tuo, Palembang',
    summary: 'Consecration of the vast Sri Ksetra botanical garden filled with edible palms and water reservoirs for universal sustenance and Mahayana bodhisattva merit.',
    detailedAnalysis: 'Dapunta Hyang explicitly dedicates the park to the alleviation of poverty, drought, and hunger. The inscription reflects profound Buddhist compassion combined with environmental statecraft.',
    stelaOrSource: 'Talang Tuo Inscription',
    historicalImpact: 'Earliest written ecological and social welfare charter in Southeast Asian epigraphy.'
  },
  {
    id: 'ev-686',
    year: 686,
    yearLabel: '686 CE',
    epoch: 'Foundation',
    title: 'The Great Oaths & Subjugation of Bangka and Java',
    location: 'Kota Kapur (Bangka Island) & Karang Brahi',
    summary: 'Naval forces establish control over the Bangka and Sunda straits; sacred curse stones erected warning any who betray the Datu of instant divine doom.',
    detailedAnalysis: 'The Kota Kapur inscription records that Srivijayan naval armies set sail to subdue "Bhumi Java" (likely Tarumanagara) for refusing to pay allegiance, confirming early control over the southern strait entrance.',
    stelaOrSource: 'Kota Kapur & Karang Brahi Stelae',
    historicalImpact: 'Enforced absolute naval monopoly over the Sunda Strait trade corridor.'
  },
  {
    id: 'ev-671',
    year: 671,
    yearLabel: '671–695 CE',
    epoch: 'Foundation',
    title: 'Monk Yi Jing Chronicles Srivijayan Scholarship',
    location: 'Fo-shih (Palembang)',
    summary: 'Chinese Buddhist pilgrim Yi Jing resides in Srivijaya for over a decade, studying Sanskrit grammar alongside more than 1,000 monks.',
    detailedAnalysis: 'Yi Jing advised that Chinese monks traveling to Nalanda in India should first stay in Srivijaya for 1–2 years to study proper rules and language under venerable masters like Sakyakirti.',
    stelaOrSource: 'Yi Jing: A Record of Buddhist Practices in the South Seas',
    historicalImpact: 'Firmly placed Srivijaya as the paramount Buddhist university outside India.'
  },
  {
    id: 'ev-775',
    year: 775,
    yearLabel: '775 CE',
    epoch: 'Shailendra Alliance',
    title: 'The Ligor Stele & Trans-Peninsular Hegemony',
    location: 'Ligor (Chaiya / Nakhon Si Thammarat)',
    summary: 'Erection of royal temples on the Malay Peninsula by the Shailendra sovereign, securing control over the trans-peninsular overland portage route.',
    detailedAnalysis: 'The dual-sided Ligor inscription testifies to the convergence of the Srivijayan maritime empire and the Shailendra dynasty, giving the realm dual naval garrisons on both the Andaman Sea and the Gulf of Siam.',
    stelaOrSource: 'Ligor Inscription (Faces A & B)',
    historicalImpact: 'Prevented foreign shipping from bypassing Srivijayan customs through the Kra Isthmus.'
  },
  {
    id: 'ev-860',
    year: 860,
    yearLabel: 'c. 860 CE',
    epoch: 'Golden Age',
    title: 'Nalanda Copperplate Charter by Balaputradewa',
    location: 'Nalanda University, Bihar, India',
    summary: 'King Balaputradewa of Srivijaya commissions a magnificent monastery at Nalanda, granted five revenue villages by King Devapala of the Pala Dynasty.',
    detailedAnalysis: 'This world-renowned copperplate inscription proves the extraordinary global financial reach, maritime mobility, and high cultural prestige of Srivijayan monarchs in classical India.',
    stelaOrSource: 'Nalanda Copperplate of Devapala',
    historicalImpact: 'Cemented international diplomatic prestige and permanent scholarly residency in India.'
  },
  {
    id: 'ev-1005',
    year: 1005,
    yearLabel: '1005 CE',
    epoch: 'Golden Age',
    title: 'Construction of Chudamani Vihara in Nagapattinam',
    location: 'Nagapattinam, Coromandel Coast, India',
    summary: 'King Sri Cudamanivarmadeva erects an immense Buddhist temple for Srivijayan maritime merchants with full tax exemptions from Emperor Rajaraja Chola I.',
    detailedAnalysis: 'Recorded on the Larger Leiden Plates, the village of Anaimangalam was perpetually assigned to maintain the Vihara. This underscores the peaceful maritime brotherhood that preceded the later naval conflicts.',
    stelaOrSource: 'Larger Leiden Inscription',
    historicalImpact: 'Protected Srivijayan sea merchants docking along the eastern ports of India.'
  },
  {
    id: 'ev-1025',
    year: 1025,
    yearLabel: '1025 CE',
    epoch: 'Chola Clashes',
    title: 'The Chola Armada Trans-Oceanic Invasion',
    location: 'Malacca Strait, Palembang, Kedah, Pannai',
    summary: 'Emperor Rajendra Chola I launches an unprecedented trans-oceanic naval raid across the Bay of Bengal, sacking 14 strategic ports and capturing King Sangrama.',
    detailedAnalysis: 'Driven by trade disputes and toll tensions, the Chola assault shattered Srivijaya’s centralized fleet command. Despite widespread destruction, Srivijaya retained sovereignty, though regional vassals gained autonomy.',
    stelaOrSource: 'Thanjavur Temple Prasasti (1030 CE)',
    historicalImpact: 'Pivotal turning point that decentralized power across the Sumatran and Malay ports.'
  },
  {
    id: 'ev-1275',
    year: 1275,
    yearLabel: '1275–1286 CE',
    epoch: 'Twilight',
    title: 'Singhasari’s Pamalayu Expedition & Dharmasraya',
    location: 'Batanghari River Basin, Dharmasraya',
    summary: 'King Kertanegara of Singhasari (East Java) dispatches the Pamalayu expedition to ally with and subordinate the Srivijayan-Malayu successor state.',
    detailedAnalysis: 'In 1286 CE, Kertanegara presented the monumental Amoghapasa statue to King Tribhuwanaraja of Dharmasraya, transferring the mantle of political leadership to inland Sumatra.',
    stelaOrSource: 'Padang Roco Inscription',
    historicalImpact: 'Transitioned sovereign authority from maritime coast to Minangkabau highlands.'
  },
  {
    id: 'ev-1377',
    year: 1377,
    yearLabel: '1377 CE',
    epoch: 'Twilight',
    title: 'The Majapahit Conquest & The Migration of Parameswara',
    location: 'Palembang & Malacca',
    summary: 'Majapahit launches a punitive naval campaign against Palembang. Prince Parameswara flees northwest, eventually founding the Sultanate of Malacca in 1400 CE.',
    detailedAnalysis: 'The fall of Palembang to Majapahit forces ended seven centuries of Srivijayan imperial continuity, but its maritime traditions, royal ceremonies, and trade networks were directly inherited by the Malacca Sultanate.',
    stelaOrSource: 'Ming Shi-lu (Ming Annals) & Sejarah Melayu',
    historicalImpact: 'The maritime DNA of Srivijaya birthed the great Islamic entrepôt of Malacca.'
  }
];

export const MARITIME_PORTS: MaritimePort[] = [
  {
    id: 'port-palembang',
    name: 'Palembang (Musi River Estuary)',
    ancientName: 'Śrīvijaya / San-fo-tsi / Fo-shih',
    coordinates: '02°59′S 104°45′E',
    svgX: 520,
    svgY: 370,
    role: 'Imperial Capital & Supreme Fleet Anchorage',
    commodities: ['Gold dust', 'Barus camphor', 'Spikenard', 'Tortoiseshell', 'Cloves re-export'],
    description: 'The political and military nerve center of the thalassocracy. Sheltered deep inland along the wide Musi River, immune to open ocean swells yet easily accessible to ocean-going ships.',
    strategicSignificance: 'Commanded the southern naval squadron and the entry into the Bangka Strait.'
  },
  {
    id: 'port-muaro-jambi',
    name: 'Muaro Jambi (Batanghari Basin)',
    ancientName: 'Malāyu / Mo-lo-yeu',
    coordinates: '01°28′S 103°40′E',
    svgX: 470,
    svgY: 330,
    role: 'Sacred Buddhist Monastic University & Riverine Entrepôt',
    commodities: ['Highland gold', 'Dammar resin', 'Benzoin', 'Ivory'],
    description: 'Spanning over 12 square kilometers of brick temple complexes, Muaro Jambi was the intellectual epicentre where scholars like Atisha Dipankara studied before revitalizing Tibetan Buddhism.',
    strategicSignificance: 'Regulated trade from the gold-rich Minangkabau interior down to the Malacca Strait.'
  },
  {
    id: 'port-kedah',
    name: 'Kedah (Kataha / Kalah)',
    ancientName: 'Kaṭāha / Kadāram / Kalah-bar',
    coordinates: '05°42′N 100°20′E',
    svgX: 380,
    svgY: 180,
    role: 'Western Trans-Oceanic Terminal & Bay of Bengal Port',
    commodities: ['Tin ingots', 'Indian textiles', 'Glassware', 'Persian ceramics', 'Frankincense'],
    description: 'The primary land-fall port for vessels crossing the Bay of Bengal from India and Sri Lanka during the southwest monsoon, guarded by Mount Jerai.',
    strategicSignificance: 'Controlled access to the northern mouth of the Malacca Strait.'
  },
  {
    id: 'port-chaiya',
    name: 'Chaiya / Ligor (Kra Isthmus)',
    ancientName: 'Grahi / Tambralinga',
    coordinates: '09°23′N 99°11′E',
    svgX: 395,
    svgY: 110,
    role: 'Trans-Peninsular Overland Portage Hub',
    commodities: ['Spices', 'Chinese silk', 'Porcelain', 'Tin'],
    description: 'Permitted merchants to offload goods and portage across the narrow Kra neck, avoiding the long, pirate-infested sea voyage around the tip of Malaya.',
    strategicSignificance: 'Monopolized the overland shortcut between the Andaman Sea and the Gulf of Thailand.'
  },
  {
    id: 'port-barus',
    name: 'Barus (Fansur)',
    ancientName: 'Varuṣaka / Fansūr',
    coordinates: '02°00′N 98°23′E',
    svgX: 340,
    svgY: 260,
    role: 'World Emporium for Pure Camphor & Benzoin',
    commodities: ['Dryobalanops camphor (Kapur Barus)', 'Benzoin resin (Kemenyan)', 'Gold'],
    description: 'Famous since ancient Roman and Ptolemaic times, Barus produced the world’s most prized crystalline camphor, celebrated in Arabian poetry and Chinese court medicine.',
    strategicSignificance: 'Anchored Srivijayan naval authority on the turbulent western coast of Sumatra.'
  },
  {
    id: 'port-kota-kapur',
    name: 'Kota Kapur (Bangka Island)',
    ancientName: 'Kotakapur / Vanga',
    coordinates: '02°07′S 105°47′E',
    svgX: 580,
    svgY: 390,
    role: 'Naval Bastion & Strait Sentinel',
    commodities: ['Tin', 'Salt fish', 'Timber', 'Fresh water victualing'],
    description: 'Fortified naval stronghold overlooking the Gelasa and Gaspar straits, where Dapunta Hyang consecrated the earliest curse inscription in 686 CE.',
    strategicSignificance: 'Chokepoint controlling all shipping entering or leaving the Java Sea.'
  }
];

export const GLOSSARY_TERMS: EpigraphicTerm[] = [
  {
    term: 'Siddhayātra',
    language: 'Sanskrit',
    transcription: 'siddha-yātrā',
    meaning: 'Sacred expedition to acquire supernatural potency, divine blessing, and victorious statehood.',
    context: 'Used in the Kedukan Bukit inscription (683 CE) to characterize Dapunta Hyang’s 20,000-man founding voyage.'
  },
  {
    term: 'Datu',
    language: 'Old Malay',
    transcription: 'dātu',
    meaning: 'Sovereign regional chieftain, provincial governor, or lord of an autonomous community.',
    context: 'The political subunits of Srivijaya were administered by Datus who swore terrifying loyalty oaths.'
  },
  {
    term: 'Orang Laut',
    language: 'Old Malay',
    transcription: 'orang laut (celates)',
    meaning: 'Indigenous sea nomads and maritime clans who formed the elite strike force of the Srivijayan navy.',
    context: 'Patrolled shallow mangroves and straits, forced foreign vessels into Srivijayan ports, and defended against pirates.'
  },
  {
    term: 'Sāmvau',
    language: 'Old Malay',
    transcription: 'sāmvau',
    meaning: 'Ocean-going sailing vessel or imperial outrigger war galley.',
    context: 'Mentioned in Kedukan Bukit: "dapunta hiyaṁ nāyik di sāmvau" (Dapunta Hyang boarded his ship).'
  },
  {
    term: 'Mandala',
    language: 'Sanskrit',
    transcription: 'maṇḍala',
    meaning: 'Concentric circle of political power radiating from an imperial center, governed by tributary alliances rather than fixed borders.',
    context: 'The geopolitical governance model that enabled Srivijaya to rule across multiple islands and peninsulas.'
  },
  {
    term: 'Kāyastha',
    language: 'Sanskrit',
    transcription: 'kāyastha',
    meaning: 'Imperial scribe, keeper of records, and epigraphic engraver.',
    context: 'The specialized royal class that drafted inscriptions and treaties with China and India.'
  },
  {
    term: 'Suvarṇadvīpa',
    language: 'Sanskrit',
    transcription: 'suvarṇa-dvīpa',
    meaning: 'The Isle of Gold — ancient classical name for Sumatra.',
    context: 'Celebrated in Indian epics (Ramayana, Jatakas) and Nalanda copperplates for immense riverine gold deposits.'
  },
  {
    term: 'Syahbandar',
    language: 'Persian / Old Malay',
    transcription: 'syāhbandar / tuhāna vatak',
    meaning: 'Harbor master responsible for docking permissions, customs tariffs, weights, and pilotage.',
    context: 'Guaranteed transparent and fair trade in Srivijayan ports, winning the trust of foreign merchant guilds.'
  }
];
