/* =================================================================
   OBSAH STRÁNKY
   Texty, ceny a položky se mění jen tady.
   *slovo* = zvýraznění, null u ceny = zobrazí se „K doplnění“.
   ================================================================= */

const MISSING = 'K doplnění';

const CONTENT = {
  hero: {
    title: ['Systém pro správu', 'a *automatizaci* náboru'],
    preparedFor: 'připraveno pro',
    logo: 'assets/bohemia-logo.webp',
    logoAlt: 'TS Bohemia',
  },

  problem: {
  title: 'Jak nábor probíhá dnes a co je třeba změnit',
  lede: 'Procházení životopisů, kontaktování kandidátů a domlouvání pohovorů dnes některým vedoucím zabírá více než 20 % pracovního času. Při vytížení zůstávají některé reakce bez odpovědi, což zhoršuje hodnocení zaměstnavatele na portálech. Cílem řešení je omezit opakovanou administrativu, zvýšit efektivitu a uvolnit čas pro podstatnou část náboru.',
  now: 'Dnes',
  pains: [
    { text: 'Zdlouhavé procházení životopisů bez prioritizace podle vhodnosti kandidátů vede k tomu, že se někteří zájemci vůbec nedostanou k pohovoru. Vedení pak pro své rozhodování postrádá potřebné podklady.' },
    { text: 'Termíny se domlouvají telefonicky. Pokud se kandidátovi nelze dovolat nebo mu čas nevyhovuje, domlouvání se opakuje.' },
    { text: 'Ve spěchu se může zapomenout na odpověď, změnu termínu nebo další kontakt. Kandidát mezitím ztratí zájem a přestane reagovat.' },
  ],
  calc: {
    title: 'Kolik vás dnes nábor stojí',
    outLabel: 'Ročně vás to stojí',
    year: '473\u00a0652\u00a0Kč',
    days: '100',
    daysText: 'člověkodnů ročně, které nešly do práce vedení',
    month: '39\u00a0471\u00a0Kč',
    monthText: 'měsíčně',
    roles: [
      { name: 'CEO', count: 1, time: '5–10 % času' },
      { name: 'Vedoucí', count: 2, time: '15–20 % času' },
    ],
  },

},

  solution: {
   title: 'Od přípravy pozice po potvrzení pracovní nabídky',
    steps: [
  {
  icon: 'doc',
  demo: 'request',
  title: 'Příprava pozice a inzerce',
  text: 'Příprava a zveřejňování inzerátů zůstává beze změny. Nově je však potřeba, aby si vedoucí před ozýváním se kandidátů vypsal v systému volné termíny pohovorů, nastavil kritéria pro třídění životopisů a určil fáze výběrového řízení (mapování pracovního profilu, osobní/online pohovor apod.).',
},
    {
      icon: 'form',
      demo: 'candidates',
      title: 'Příjem kandidátů a zpracování CV',
      text: 'Nově budou zprovozněna upozornění na nové kandidáty. Reakce z pracovních portálů se obratem propíší do webové aplikace, kde se životopisy odděleně uloží a před další analýzou se z nich skryjí osobní údaje. Algoritmus následně kandidáty seřadí podle vhodnosti, porovná s požadavky pozice a vytvoří stručné shrnutí pro rychlé oslovení. Oprávněné osoby budou mít i nadále přístup k původním životopisům.',
    },
   {
  icon: 'filter',
  title: 'Výběr kandidátů a komunikace',
  text: 'Vedoucí nebo personalista projde podklady a rozhodne o postupu či zamítnutí uchazeče. Další kroky se řídí nastavením konkrétní pozice. Systém může automaticky nebo po schválení odeslat odkaz na úvodní dotazník, mapování pracovního profilu či výběr termínu pohovoru. Tým tak získá potřebná data pro další rozhodování.',
  },
    {
      icon: 'user',
      title: 'Mapování pracovního profilu vybraných kandidátů',
      text: 'Jako další podklad pro rozhodování lze u vybraných kandidátů využít doplňující dotazník a mapování pracovního profilu. Systém uchazeči automaticky odešle odkaz na dotazník k posouzení jeho pracovních preferencí a postojů k různým situacím v týmu (nakolik mu vyhovuje určité pracovní prostředí a způsob spolupráce). Výsledky se ihned propíší do karty kandidáta a včetně grafického přehledu a interpretace poslouží k přípravě na pohovor.',
    },
    {
      icon: 'calendar',
      title: 'Domluvení termínu a pohovor',
      text: 'Vybraný kandidát obdrží odkaz, přes který si vybere termín z dostupných časů vedoucího (stejně probíhá i 2. kolo). Systém při potvrzení ověří volnou kapacitu. Následně se data převedou do Microsoft 365. Z připravených dat se vytvoří pozvánka v Outlooku s detaily schůzky a odkazy na potřebné podklady, včetně výsledků mapování pracovního profilu. V první verzi se bude tento přenos spouštět ručně. Systém bude pravidelně uchazeči připomínat termín schůzky.',
    },
    {
      icon: 'check',
      title: 'Pracovní nabídka a její potvrzení',
      text: 'Po pohovoru vedení zaznamená své rozhodnutí v systému. Pokud se na to zapomene, systém ho na základě času v pozvánce automaticky upozorní k vypracování pracovní nabídky a upozrňuje i kandidáta na termín, do kdy má nabídku potvrdit. Po potvrzení systém úkoluje vedoucího a finančí oddělení k přípravě podkladů smlouvě a nástupu.',
    },
  ],
},

tech: {
  title: 'Propojení stávajících nástrojů s vlastní aplikací',
  lede: 'Řešení nebude nahrazovat vaše současné nástroje. Systém propojí používané Teamio (Jobs/Práce.cz portál), novou aplikaci vytvořenou na míru a Power Automate pro komunikaci přes Outlook.',
  tools: [
    { icon: 'db', logo: 'assets/teamio.webp', name: 'Teamio' },
    { icon: 'app', logo: '', name: 'Webová aplikace na míru' },
        { icon: 'mail', logo: 'assets/power_automate.svg', name: 'Power Automate a Microsoft 365' },
    { icon: 'sms', logo: '', name: 'SMS brána' },
  ],
  points: [
    'Teamio zajistí inzerci a příjem reakcí. Přesný způsob přenosu dat a dostupnost životopisů potvrdíme po aktivaci exportní služby.',
    'Aplikace je navržena ve striktně oddělené třívrstvé architektuře (decoupled frontend a API backend). Veškerá infrastruktura poběží na vyhrazeném VPS s fyzickou lokací v EU. Aplikační vrstva, databáze i úložiště dokumentů budou izolovány pomocí kontejnerizace a přístup k nim bude řídit Nginx nasazený jako reverzní proxy.',
    'Životopisy budou uložené odděleně a přístupné pouze oprávněným uživatelům. Osobní údaje se oddělí od podkladů pro AI.',
    'Power Automate propojí připravená data s firemním účtem a Outlookem. První verze využije ruční spuštění přenosu, další automatizace se doplní podle potřeb a možností vašeho prostředí.',
    'SMS brána umožní odesílat kandidátům krátká upozornění, odkazy pro výběr termínu a připomínky pohovorů. Zprávy se budou odesílat podle nastavených pravidel a jejich stav se zaznamená u kandidáta. Konkrétního poskytovatele a možnost přijímat odpovědi vybereme podle potřeb.',
  ],

},
price: {
  title: 'Postup a rozsah nabídky',
  next: {
    title: 'Co potřebuji z vaší strany',
    items: [
      {
        icon: 'key',
        title: 'Aktivace a povolení exportu z Teamia',
        text: 'Aktivaci exportní služby pro napojení na webovou aplikaci. Potřebuji ověřit formát exportu, dostupnost příloh a způsob jeho používání.',
      },
      {
        icon: 'key',
        title: 'Firemní účet Microsoft 365',
        text: 'Účet pro připojení Power Automate a dedikovanou e-mailovou adresu k odesílání komunikace a vytváření pozvánek. Ověření konektorů, kalendáře a potřebných oprávnění.',
      },
      {
        icon: 'key',
        title: 'Aktivní spolupráce při vývoji a zavedení',
        text: 'Společně upřesníme, jak mají být informace v systému zobrazené a jak má probíhat komunikace s kandidáty. Při vývoji a nasazení bude potřeba průběžná zpětná vazba a vyzkoušení v praxi, abychom systém upravili podle skutečných potřeb vašeho týmu.',
      },
    ],
  },

  priceTitle: 'Cena',
  currency: 'Kč',
  peopleNote: 'Personální podporu účtuji jen v měsících, kdy ji využijete, například při intenzivnějším náboru.',
  vat: 'bez DPH',
  once: {
    title: 'Vývoj celého systému',
    note: 'jednorázově',
  },
  onDemand: {
    title: 'Personální podpora',
    note: 'jen v měsících, kdy ji využijete',
  },
  // sku: interní kód položky
  features: [
    {
      label: 'Audit procesu, návrh koncepce a ověření integrací',
      required: true,
      billing: 'once',
      sku: '7wog',
    },
    {
      label: 'Vývoj aplikace, integrace CV screeningu a základní Power Automate workflow',
      required: true,
      billing: 'once',
      sku: '7cns',
    },
    {
      label: 'Testování, nasazení, nastavení a správa infrastruktury veškerého technického řešení',
      required: true,
      billing: 'once',
      sku: '7uqs',
    },

    {
      label: 'Zapojení mapování pracovního profilu do náborového procesu',
      required: false,
      billing: 'once',
      sku: '7yf0',
    },

     {
      label: 'Integrace Microsoft 365 a webové aplikace',
      required: false,
      billing: 'once',
      sku: '8bqw',
      checked: false,
      hint: 'Nedoporučujeme pro první verzi systému',
    },


    {
      label: 'SMS komunikace a připomínky',
      required: false,
      billing: 'once',
      sku: '7wog',
    },

    // Netechnická personální práce
    {
      label: 'Netechnická personální práce',
      required: false,
      billing: 'onDemand',
      sku: '819w',
      kind: 'people',
      includes: [
        'Odmítání nevhodných kandidátů v Teamiu',
        'První screening přehledů CV',
        'Obvolávání až 10 kandidátů',
        'Domlouvání schůzek na pohovor',
      ],
    },



  ],
  footnote: 'Mapování pracovního profilu se účtuje 500 Kč bez DPH za každého kandidáta, přičemž je možné využít množstevní slevu. Vedení pohovorů s kandidáty nebo zapojení do nich se naceňuje zvlášť. V ceně není spouštění Power Automate workflow, správa serveru a infrastruktury, podpora na vyžádání po uplynutí záruční doby ani další rozšiřování systému.',


},

about: {
  title: 'Kdo řešení připraví',
  name: 'Mgr. Michal Hužva',
  role: 'Data, Software & Psychologie',
  photo: 'assets/osoba-b.webp',
  bio: 'Propojuji práci s daty, vývoj nástrojů a porozumění lidskému rozhodování. Pro tento projekt zajistím návrh procesu, vývoj a ověření řešení i jeho praktické zavedení. Cílem je systém, který vašemu týmu skutečně ubere administrativu a poskytne přehledné podklady pro rozhodování.',
  references: [
    {
      logo: 'assets/uk-logo.jpg',
      quote: "Vývoj nové metody fuzzy-logického vyvozování v psychologickém testování.",
      author: null,
      company: 'UK',
    },

    {
      logo: 'assets/logo-sociomapping-x1.png',
      quote: "Vedení vývoje enterprise webové aplikace pro mapování sociálních sítí a vizualizaci dat.",
      author: null,
      company: 'Sociomapping',
    },

    {
      logo: 'assets/generali-logo.png',
      quote: "Návrh, vývoj a implementace systému pro 360° zpětnou vazbu s interaktivním reportem.",
      author: null,
      company: 'Generali',
    },
    
  ],
},

  footer: {
    url: 'https://phgrowth.cz/',
    company: 'PH Growth s.r.o.',
    ico: 'IČO 09471669',
    address: ['Bechlínská 705/4, Letňany', '190 00 Praha'],
    links: [
      { label: 'Zásady zpracování osobních údajů', href: 'https://phgrowth.cz/zasady-zpracovani-osobnich-udaju/' },
      { label: 'Soubory cookies', href: 'https://phgrowth.cz/soubory-cookies/' },
    ],
  },
};

/* Ilustrační ukázky aplikace ve vyskakovacím okně; krok je otevře přes `demo: 'request' | 'candidates'`. */
const DEMO = {
  button: 'Ukázka zadání v aplikaci',
  tag: 'Ilustrační návrh · ukázková data',
  app: 'Nábor',
  start: {
    title: 'Co chcete udělat?',
    options: [
      { icon: 'plus', title: 'Požadavek na otevření pozice', text: 'Nastavte kritéria výběru, průběh pohovorů a své volné termíny.' },
      { icon: 'users', title: 'Probíhající moje nábory', text: 'Přehled kandidátů a pohovorů u otevřených pozic.', disabled: 'V ukázce nedostupné' },
    ],
  },
  heading: 'Požadavek na otevření pozice',
  position: 'Skladník / skladnice · inzerát v Teamiu',
  steps: ['Kritéria výběru', 'Průběh výběru', 'Dostupnost'],
  criteria: {
    title: 'Kritéria výběru',
    text: 'Podle těchto požadavků systém seřadí kandidáty a připraví shrnutí životopisů.',
    items: [
      { name: 'Ochota pracovat na dvě směny', detail: 'Ranní 6:00–14:00, odpolední 14:00–22:00.', must: true },
      { name: 'Zkušenost s prací ve skladu', detail: 'Alespoň 1 rok v obdobné roli.', must: true },
      { name: 'Porozumění pracovním pokynům v češtině', detail: 'Domluva při práci a bezpečnostní instrukce.', must: true },
      { name: 'Zkušenost s vysokozdvižným vozíkem', detail: 'Případné zaškolení lze zajistit po nástupu.', must: false },
    ],
    must: 'Nezbytné',
    nice: 'Výhodou',
    add: 'Přidat vlastní kritérium',
    askLabel: 'Na co se při screeningu ještě zeptat?',
    ask: 'Ověřit možný termín nástupu a očekávanou mzdu. Zjistit, zda kandidátovi vyhovuje dojíždění na pracoviště.',
  },
  process: {
    title: 'Průběh výběru',
    text: 'Nastavte kroky, kterými kandidát projde.',
    roundsLabel: 'Počet pohovorů',
    rounds: ['1 kolo', '2 kola', '3 kola'],
    roundsSelected: 1,
    lengthLabel: 'Délka jednoho pohovoru',
    length: '30 minut',
    toggles: [
      { title: 'Úvodní screening', text: 'Ověření kritérií a krátký telefonický rozhovor před pohovory.' },
      { title: 'Mapování pracovního profilu', text: 'Kandidát vyplní dotazník po prvním pohovoru, výsledky se uloží k jeho kartě.' },
    ],
    interviews: [
      { icon: 'app', title: '1. kolo pohovoru', form: 'Online · Microsoft Teams', who: 'Vedoucí týmu + personalista' },
      { icon: 'users', title: '2. kolo pohovoru', form: 'Osobně · na pracovišti', who: 'Vedoucí týmu + prohlídka pracoviště' },
    ],
  },
  availability: {
    title: 'Vaše dostupnost pro pohovory',
    text: 'Označte časy, ze kterých si kandidáti vyberou termín.',
    week: '12.–16. října 2026',
    days: [['Po', 12], ['Út', 13], ['St', 14], ['Čt', 15], ['Pá', 16]],
    hours: [9, 10, 11, 12, 13],
    // [index dne, hodina]
    slots: [[1, 9], [2, 11], [4, 10]],
    note: 'Časové pásmo Praha. Kandidát si vybere jeden z volných časů, systém před potvrzením ověří kapacitu.',
  },
  back: 'Zpět',
  next: 'Pokračovat',
  submit: 'Odeslat požadavek',
  thanks: {
    title: 'Požadavek byl odeslán',
    text: 'Nábor je nastavený. Jakmile se v Teamiu objeví první reakce na inzerát, uvidíte kandidáty v přehledu.',
    nextTitle: 'Co bude následovat',
    next: [
      'Reakce z Teamia se propíší do aplikace a životopisy se seřadí podle vašich kritérií.',
      'U každého kandidáta uvidíte shrnutí a doporučení s odůvodněním.',
      'Vybraní kandidáti dostanou odkaz a vyberou si termín z vaší dostupnosti.',
      'Pozvánky na pohovory se objeví ve vašem kalendáři v Outlooku.',
    ],
    restart: 'Zpět na začátek',
    close: 'Zavřít ukázku',
  },
};

const DEMO_CANDIDATES = {
  button: 'Ukázka přehledu kandidátů',
  tag: 'Ilustrační návrh · smyšlená data',
  app: 'Nábor',
  eyebrow: 'Otevřená pozice',
  position: 'Skladník / skladnice',
  meta: ['Logistika a sklad', 'Praha — Horní Počernice', 'Hledáme 2 lidi'],
  open: 'Nábor probíhá',
  focus: { title: '3 kandidáti s vysokou shodou', text: 'Začněte u nejvyššího skóre. Podklady najdete v detailu kandidáta.', meta: '6 CV vyhodnoceno · 2 čekají' },
  listTitle: 'Kandidáti',
  listNote: 'Priorita podle shody s kritérii pozice',
  search: 'Hledat jméno nebo kontakt…',
  statuses: ['K posouzení', 'Pozván na pohovor', 'K doplnění', 'Čeká na screening'],
  scoreFilter: [['', 'Jakékoli skóre'], ['80', '80 a více bodů'], ['60', '60 a více bodů'], ['pending', 'Bez screeningu']],
  allStatuses: 'Všechny stavy',
  columns: ['Kandidát', 'Přihláška', 'Zdroj', 'Stav', 'CV screening'],
  pending: 'Nevyhodnoceno',
  empty: 'Žádný kandidát neodpovídá zvoleným filtrům.',
  note: 'Skóre 0–100 bodů vychází z kritérií náboru. Kliknutím na kandidáta zobrazíte podklady a důvody hodnocení.',
  back: 'Zpět na přehled',
  detailNote: 'Ukázkové hodnocení pro návrh rozhraní. Chybějící údaje jsou označeny k ověření; skóre slouží k prioritizaci dalšího posouzení, o kandidátovi rozhoduje člověk.',
  notScreened: 'CV zatím nebylo vyhodnoceno. Po dokončení screeningu se zde zobrazí skóre, splnění jednotlivých kritérií a podklady hodnocení.',
  criteria: ['Zkušenost ve skladu', 'Dvousměnný provoz', 'Práce se skladovým systémem', 'Zkušenost s VZV'],
  weights: [40, 25, 20, 15],
  candidates: [
    { name: 'Jan Novák', email: 'jan.novak@example.com', phone: '+420 000 000 001', date: '3. 10. 2026', source: 'Jobs.cz', status: 'K posouzení', points: [40, 25, 20, 9], details: ['4 roky praxe ve skladu a expedici.', 'Ochotu pracovat na dvě směny uvedl v přihlášce.', 'Zkušenost s WMS a evidencí příjmu a výdeje zboží.', 'V CV uvedena obsluha VZV; aktuálnost oprávnění není doložena.'], summary: 'Silná shoda v praxi, pracovním režimu i skladových systémech. Při prvním kontaktu ověřit aktuálnost oprávnění na VZV a možný termín nástupu.' },
    { name: 'Petra Dvořáková', email: 'petra.dvorakova@example.com', phone: '+420 000 000 002', date: '2. 10. 2026', source: 'Doporučení', status: 'Pozván na pohovor', points: [36, 25, 10, 15], details: ['3 roky praxe v logistice a při vychystávání objednávek.', 'Dvousměnný režim vyhovuje podle přihlášky.', 'Základní práce se čtečkou; rozsah zkušenosti s WMS ověřit.', 'Uvedena praxe a platné oprávnění na VZV.'], summary: 'Relevantní praxe, směnná dostupnost a zkušenost s VZV. Na pohovoru doplnit úroveň práce se skladovým systémem.' },
    { name: 'Martin Svoboda', email: 'martin.svoboda@example.com', phone: '+420 000 000 003', date: '4. 10. 2026', source: 'Prace.cz', status: 'K posouzení', points: [37, 25, 20, 0], details: ['3,5 roku praxe při příjmu a výdeji zboží.', 'Ochotu ke dvěma směnám uvedl v přihlášce.', 'Denní práce s WMS a ručním skenerem.', 'Zkušenost s VZV není v podkladech uvedena.'], summary: 'Dobrá shoda s hlavními požadavky a skladovým systémem. Zkušenost s VZV je neověřená; toto kritérium je v zadání výhodou.' },
    { name: 'Lucie Procházková', email: 'lucie.prochazkova@example.com', phone: '+420 000 000 004', date: '1. 10. 2026', source: 'Web firmy', status: 'K posouzení', points: [30, 25, 16, 0], details: ['2 roky praxe při balení a expedici zásilek.', 'Dvě směny vyhovují podle přihlášky.', 'Práce s elektronickou evidencí a skenerem.', 'VZV v životopisu neuveden.'], summary: 'Relevantní zkušenost z expedice a práce s evidencí. Ověřit rozsah činností při příjmu zboží a inventurách.' },
    { name: 'Tomáš Černý', email: 'tomas.cerny@example.com', phone: '+420 000 000 005', date: '3. 10. 2026', source: 'Jobs.cz', status: 'K doplnění', points: [40, 9, 0, 15], details: ['5 let zkušeností s příjmem zboží a skladováním.', 'Podklady zmiňují ranní směnu; dostupnost odpoledne ověřit.', 'Skladový systém není v CV specifikován.', 'Doložena praxe s VZV v předchozím zaměstnání.'], summary: 'Zkušený kandidát. Pro určení priority chybí potvrzení odpoledních směn a informace o používaném skladovém systému.' },
    { name: 'David Beneš', email: 'david.benes@example.com', phone: '+420 000 000 006', date: '30. 9. 2026', source: 'Prace.cz', status: 'K doplnění', points: [20, 25, 7, 0], details: ['6 měsíců skladové praxe; zadání požaduje alespoň 1 rok.', 'Ochotu pracovat na dvě směny uvedl v přihlášce.', 'Základní zkušenost s evidencí objednávek.', 'Zkušenost s VZV není uvedena.'], summary: 'Vyhovující pracovní režim, ale kratší praxe oproti zadání. Doplnit podrobnosti o skladových činnostech a možnosti zaškolení.' },
    { name: 'Anna Veselá', email: 'anna.vesela@example.com', phone: '+420 000 000 007', date: '4. 10. 2026', source: 'Web firmy', status: 'Čeká na screening', points: null },
    { name: 'Pavel Král', email: 'pavel.kral@example.com', phone: '+420 000 000 008', date: '4. 10. 2026', source: 'Jobs.cz', status: 'Čeká na screening', points: null },
  ],
};

const DEMOS = { request: DEMO, candidates: DEMO_CANDIDATES };

/* Pořadí sekcí. Nová sekce = nový řádek + renderovací funkce. */
const SECTIONS = [
  { id: 'uvod', tag: 'header', data: CONTENT.hero, render: hero },
  { id: 'problem', data: CONTENT.problem, render: problem },
  { id: 'reseni', data: CONTENT.solution, render: solution },
  { id: 'technologie', data: CONTENT.tech, render: tech },
  { id: 'cena', data: CONTENT.price, render: price },
  { id: 'o-mne', data: CONTENT.about, render: about },
];


/* =================================================================
   VYKRESLENÍ
   ================================================================= */

const ICONS = {
  form: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/>',
  filter: '<path d="M4 5h16l-6 7v6l-4 2v-8z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
  check: '<path d="m5 12 5 5 9-10"/>',
  db: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  bot: '<rect x="4" y="7" width="16" height="13" rx="3"/><path d="M12 3v4M9 13h.01M15 13h.01M9 17h6"/>',
  chart: '<path d="M5 20V11M11 20V5M17 20v-6M3 20h18"/>',
  doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
  bell: '<path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 21h4"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/>',
  cloud: '<path d="M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 9a4.5 4.5 0 0 1 0 9z"/>',
  plug: '<path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0zM12 17v4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  app: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M6.5 6.5h.01M9 6.5h.01M8 13l-2 2 2 2M16 13l2 2-2 2M13 12l-2 6"/>',
  sms: '<path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4v-4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M17 6l3 3M14 9l2 2"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  users: '<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4.5V20"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  sort: '<path d="M12 4v16m-5-5 5 5 5-5"/>',
  phone: '<path d="m7 3 3 5-3 3c2 3 3 4 6 6l3-3 5 3c0 3-2 5-5 4C8 19 5 16 3 8c-1-3 1-5 4-5z"/>',
  minus: '<path d="M6 12h12"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  back: '<path d="m15 5-7 7 7 7"/>',
  x: '<path d="m7 7 10 10M17 7 7 17"/>',
  arrow: '<path d="M4 12h15m-5-6 6 6-6 6"/>',
};

const icon = (name, cls = '') =>
  `<svg class="ico ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ICONS.doc}</svg>`;

const esc = (s = '') =>
  String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const rich = s => esc(s).replace(/\*(.+?)\*/g, '<mark>$1</mark>');
const pad2 = n => String(n).padStart(2, '0');
const tokens = s => s.match(/\*[^*]+\*|\S+/g) || [];

function words(str, from = 0) {
  return tokens(str).map((t, i) => {
    const inner = t.startsWith('*') ? `<mark>${esc(t.slice(1, -1))}</mark>` : esc(t);
    return `<span class="w"><span class="wi" style="--i:${from + i}">${inner}</span></span>`;
  }).join(' ');
}

function head(c) {
  return `
    <div class="sec-head">
      ${c.title ? `<h2 class="split" data-reveal>${words(c.title)}</h2>` : ''}
      ${c.lede ? `<p class="lede" data-reveal>${rich(c.lede)}</p>` : ''}
    </div>`;
}

function hero(c) {
  let i = 0;
  const lines = c.title.map(l => {
    const html = words(l, i);
    i += tokens(l).length;
    return `<span class="line">${html}</span>`;
  }).join('');
  const logo = c.logo
    ? `<span class="logo-card"><img src="${esc(c.logo)}" alt="${esc(c.logoAlt)}"></span>`
    : `<span class="logo-ph">[LOGO]</span>`;
  return `
    <div class="hero-dots" aria-hidden="true"></div>
    <div class="hero-inner">
      <h1 class="hero-title">${lines}</h1>
      <p class="prepared">${esc(c.preparedFor)}</p>
      <div class="logo-slot">${logo}</div>
    </div>`;
}

function problem(c, n) {
  const pains = c.pains.map((r, i) => `
    <li class="pain" data-reveal style="--i:${i}">
      <span class="pain-ico">${icon('x')}</span>
      <p>${rich(r.text)}</p>
    </li>`).join('');
  return `${head(c, n)}
    <div class="today">
      <div class="today-pains">
        <p class="today-label">${esc(c.now)}</p>
        <ul class="pains">${pains}</ul>
      </div>
      ${c.calc ? costCalc(c.calc) : ''}
    </div>`;
}

function costCalc(k) {
  const people = k.roles.map(r => `
    <li><span>${esc(r.name)}${r.count > 1 ? ` <em>${r.count}×</em>` : ''}</span><b>${esc(r.time)}</b></li>`).join('');
  return `
    <div class="cost" data-reveal>
      <div class="cost-in">
        <h3>${esc(k.title)}</h3>
        <ul class="cost-people">${people}</ul>
      </div>
      <div class="cost-out">
        <p class="cost-label">${esc(k.outLabel)}</p>
        <p class="cost-money">${esc(k.year)}</p>
        <p class="cost-sub"><strong>${esc(k.days)}</strong> ${esc(k.daysText)}</p>
        <p class="cost-sub"><strong>${esc(k.month)}</strong> ${esc(k.monthText)}</p>
      </div>
    </div>`;
}

function solution(c, n) {
  const rows = c.steps.map((s, i) => `
    ${i ? '<div class="flow-link"><i></i></div>' : ''}
    <div class="flow-row"><div class="fcell"><div class="node">${icon(s.icon)}<span>${esc(s.title)}</span></div></div></div>`).join('');
  const steps = c.steps.map((s, i) => `
    <article class="step" data-step="${i}">
      <span class="step-n">${pad2(i + 1)}</span>
      <h3>${esc(s.title)}</h3>
      <p>${rich(s.text)}</p>
      ${s.demo ? `<button class="demo-open" type="button" data-demo="${s.demo}" aria-haspopup="dialog">${icon('app')}${esc(DEMOS[s.demo].button)}</button>` : ''}
    </article>`).join('');
  return `${head(c, n)}
    <div class="solution">
      <div class="flow-wrap" data-reveal><div class="flow">${rows}</div></div>
      <div class="steps">${steps}</div>
    </div>`;
}

function tech(c, n) {
  const tools = c.tools.map((t, i) => `
    <li class="tool" style="--i:${i}">
      <span class="tool-ico">${t.logo ? `<img src="${esc(t.logo)}" alt="">` : icon(t.icon)}</span>
      <strong>${esc(t.name)}</strong>
    </li>`).join('');
  return `${head(c, n)}
    <ul class="tools" data-reveal>${tools}</ul>
    <ul class="points">${c.points.map((p, i) => `<li data-reveal style="--i:${i}">${rich(p)}</li>`).join('')}</ul>`;
}

function money(v, c) {
  return typeof v === 'number' ? `${v.toLocaleString('cs-CZ')} ${c.currency}` : MISSING;
}

function price(c, n) {
  const row = (f, i) => `
    <label class="cl-row ${f.required ? 'is-req' : 'is-opt'}" data-row="${i}">
      <input type="checkbox" ${f.checked === false ? '' : 'checked'} ${f.required ? `disabled data-req="${i}"` : `data-opt="${i}"`}>
      <span class="cl-box">${icon('check')}</span>
      <span class="cl-label">${esc(f.label)}<small>${esc(c[f.billing].note)}</small>${f.hint ? `<em class="cl-hint">${esc(f.hint)}</em>` : ''}${f.includes ? `<span class="cl-sub">${f.includes.map(x => `<span>${esc(x)}</span>`).join('')}</span>` : ''}</span>
    </label>`;
  const checklist = () => {
    const all = c.features.map((f, i) => [f, i]);
    const tech = all.filter(([f]) => f.kind !== 'people');
    const people = all.filter(([f]) => f.kind === 'people');
    return tech.map(([f, i]) => row(f, i)).join('') + (people.length ? `
      ${c.peopleTitle ? `<p class="cl-divider">${esc(c.peopleTitle)}</p>` : '<span class="cl-sep" aria-hidden="true"></span>'}
      ${people.map(([f, i]) => row(f, i)).join('')}
      ${c.peopleNote ? `<p class="cl-note">${rich(c.peopleNote)}</p>` : ''}` : '');
  };
  const notes = c.features.map((f, i) => f.note
    ? `<p class="price-foot price-note" data-note="${i}">${rich(f.note)}</p>` : '').join('');
  const plan = (key, i) => {
    const p = c[key];
    const items = c.features.map((f, j) => [f, j]).filter(([f]) => f.billing === key);
    return `
      <article class="plan${key === 'onDemand' ? ' plan--soft' : ''}" data-reveal style="--i:${i}">
        <p class="plan-note">${esc(p.note)} · ${esc(c.vat)}</p>
        <h3>${esc(p.title)}</h3>
        <p class="plan-price" data-total="${key}">${MISSING}</p>
        <ul class="plan-list">${items.map(([f, j]) => `
          <li class="${f.required ? 'req-li' : 'opt-li'}" data-li="${j}">${icon(f.required ? 'check' : 'plus')}<span>${esc(f.label)}${f.includes ? `<span class="plan-sub">${f.includes.map(x => `<span>${esc(x)}</span>`).join('')}</span>` : ''}</span></li>`).join('')}
        </ul>
      </article>`;
  };
  const next = c.next.items.map((it, i) => `
    <li class="need" data-reveal style="--i:${i}">
      <span class="need-n">${i + 1}.</span>
      <div><h4>${esc(it.title)}</h4><p>${rich(it.text)}</p></div>
    </li>`).join('');
  return `${head(c, n)}
    <h3 class="sub">${esc(c.next.title)}</h3>
    <ol class="needs">${next}</ol>
    <h3 class="sub">${esc(c.priceTitle)}</h3>
    <div class="cl" data-reveal>${checklist()}</div>
    <div class="plans">${plan('once', 0)}${plan('onDemand', 1)}</div>
    ${notes}
    ${c.footnote ? `<p class="price-foot" data-reveal>${rich(c.footnote)}</p>` : ''}`;
}

function about(c, n) {
  const photo = c.photo
    ? `<img src="${esc(c.photo)}" alt="${esc(c.name)}">`
    : `<span class="portrait-ph">[FOTO]</span>`;
  const refs = c.references.map((r, i) => `
    <figure class="ref" data-reveal style="--i:${i}">
      ${r.quote ? `<blockquote>${rich(r.quote)}</blockquote>` : ''}
      ${r.author ? `<figcaption>${esc(r.author)}</figcaption>` : ''}
      <div class="ref-logo">${r.logo ? `<img src="${esc(r.logo)}" alt="${esc(r.company)}">` : `<span>${esc(r.company)}</span>`}</div>
    </figure>`).join('');
  return `${head(c, n)}
    <div class="about" data-reveal>
      <div class="portrait">${photo}</div>
      <div class="about-text">
        <h3 class="about-name">${esc(c.name)}</h3>
        <p class="about-role">${esc(c.role)}</p>
        <p class="about-bio">${rich(c.bio)}</p>
      </div>
    </div>
    <div class="refs">${refs}</div>`;
}

function demo(d) {
  const stepper = active => `
    <ol class="demo-stepper">${d.steps.map((t, i) =>
      `<li class="${i < active ? 'is-done' : i === active ? 'is-active' : ''}"><span>${i < active ? icon('check') : i + 1}</span>${esc(t)}</li>`).join('')}
    </ol>`;
  const head = (t, x) => `<div class="demo-head"><h3 tabindex="-1">${esc(t)}</h3><p>${esc(x)}</p></div>`;
  const nav = (i, last) => `
    <div class="demo-nav">
      <button type="button" class="demo-btn demo-btn--ghost" data-go="${i - 1}">${icon('back')}${esc(d.back)}</button>
      <button type="button" class="demo-btn" data-go="${i + 1}">${esc(last ? d.submit : d.next)}${icon('arrow')}</button>
    </div>`;
  const form = (i, body) => `
    <section class="demo-screen" data-screen="${i}" hidden>
      <p class="demo-kicker">${esc(d.heading)}</p>
      <p class="demo-position">${esc(d.position)}</p>
      ${stepper(i - 1)}
      <div class="demo-card">${body}</div>
      ${nav(i, i === d.steps.length)}
    </section>`;

  const start = `
    <section class="demo-screen" data-screen="0">
      <div class="demo-head"><h3 tabindex="-1">${esc(d.start.title)}</h3></div>
      <div class="demo-options">${d.start.options.map(o => `
        <button type="button" class="demo-option" ${o.disabled ? 'disabled' : 'data-go="1"'}>
          <span class="demo-option-ico">${icon(o.icon)}</span>
          <strong>${esc(o.title)}</strong>
          <span>${esc(o.text)}</span>
          ${o.disabled ? `<em>${esc(o.disabled)}</em>` : ''}
        </button>`).join('')}
      </div>
    </section>`;

  const c = d.criteria;
  const criteria = form(1, `
    ${head(c.title, c.text)}
    <div class="demo-criteria">${c.items.map(it => `
      <div class="demo-crit">
        <span class="demo-crit-ico">${icon(it.must ? 'check' : 'plus')}</span>
        <div><strong>${esc(it.name)}</strong><small>${esc(it.detail)}</small></div>
        <span class="demo-pill${it.must ? ' is-must' : ''}">${esc(it.must ? c.must : c.nice)}</span>
      </div>`).join('')}
    </div>
    <span class="demo-add">${icon('plus')}${esc(c.add)}</span>
    <p class="demo-label">${esc(c.askLabel)}</p>
    <p class="demo-field">${esc(c.ask)}</p>`);

  const pr = d.process;
  const process = form(2, `
    ${head(pr.title, pr.text)}
    <div class="demo-grid2">
      <div><p class="demo-label">${esc(pr.roundsLabel)}</p>
        <div class="demo-seg">${pr.rounds.map((r, i) => `<span class="${i === pr.roundsSelected ? 'is-on' : ''}">${esc(r)}</span>`).join('')}</div></div>
      <div><p class="demo-label">${esc(pr.lengthLabel)}</p><p class="demo-field">${esc(pr.length)}</p></div>
    </div>
    ${pr.toggles.map(t => `
      <div class="demo-toggle"><div><strong>${esc(t.title)}</strong><small>${esc(t.text)}</small></div><span class="demo-switch" aria-hidden="true"></span></div>`).join('')}
    <div class="demo-grid2 demo-rounds">${pr.interviews.map(r => `
      <div class="demo-round"><strong>${icon(r.icon)}${esc(r.title)}</strong><p class="demo-field">${esc(r.form)}</p><small>${esc(r.who)}</small></div>`).join('')}
    </div>`);

  const a = d.availability;
  const has = (di, h) => a.slots.some(([x, y]) => x === di && y === h);
  const calendar = `
    <div class="demo-cal" style="--days:${a.days.length}">
      <span></span>${a.days.map(([n, num]) => `<span class="demo-day">${esc(n)}<b>${num}</b></span>`).join('')}
      ${a.hours.map(h => `<span class="demo-time">${h}:00</span>${a.days.map((_, di) =>
        `<span class="demo-cell">${has(di, h) ? `<i>${h}:00–${h + 1}:00</i>` : ''}</span>`).join('')}`).join('')}
    </div>`;
  const availability = form(3, `
    ${head(a.title, a.text)}
    <p class="demo-week">${esc(a.week)}</p>
    ${calendar}
    <div class="demo-chips">${a.slots.map(([di, h]) => `<span>${esc(a.days[di][0])} ${a.days[di][1]}. 10. · ${h}:00–${h + 1}:00</span>`).join('')}</div>
    <p class="demo-note">${icon('info')}${esc(a.note)}</p>`);

  const t = d.thanks;
  const thanks = `
    <section class="demo-screen demo-thanks" data-screen="${d.steps.length + 1}" hidden>
      <span class="demo-ok">${icon('check')}</span>
      <div class="demo-head"><h3 tabindex="-1">${esc(t.title)}</h3><p>${esc(t.text)}</p></div>
      <div class="demo-card">
        <p class="demo-label">${esc(t.nextTitle)}</p>
        <ol class="demo-next">${t.next.map(x => `<li>${esc(x)}</li>`).join('')}</ol>
      </div>
      <div class="demo-nav demo-nav--center">
        <button type="button" class="demo-btn demo-btn--ghost" data-go="0">${icon('back')}${esc(t.restart)}</button>
        <button type="button" class="demo-btn" data-close>${esc(t.close)}</button>
      </div>
    </section>`;

  return `
    <dialog class="demo" data-demo="request" aria-label="${esc(d.button)}">
      <div class="demo-bar">
        <span class="demo-dots" aria-hidden="true"><i></i><i></i><i></i></span>
        <strong>${esc(d.app)}</strong>
        <span class="demo-tag">${esc(d.tag)}</span>
        <button type="button" class="demo-x" data-close aria-label="${esc(t.close)}">${icon('close')}</button>
      </div>
      <div class="demo-body">${start}${criteria}${process}${availability}${thanks}</div>
    </dialog>`;
}

const demoBar = d => `
  <div class="demo-bar">
    <span class="demo-dots" aria-hidden="true"><i></i><i></i><i></i></span>
    <strong>${esc(d.app)}</strong>
    <span class="demo-tag">${esc(d.tag)}</span>
    <button type="button" class="demo-x" data-close aria-label="Zavřít ukázku">${icon('close')}</button>
  </div>`;

function demoCandidates(d) {
  return `
    <dialog class="demo demo--wide" data-demo="candidates" aria-label="${esc(d.button)}">
      ${demoBar(d)}
      <div class="demo-body">
        <section class="cd-list" data-view="list">
          <div class="cd-pos">
            <div><p class="demo-kicker">${esc(d.eyebrow)}</p><h3 tabindex="-1">${esc(d.position)}</h3><p>${d.meta.map(esc).join(' · ')}</p></div>
            <span class="cd-open">${esc(d.open)}</span>
          </div>
          <div class="cd-focus">
            <span class="cd-focus-ico">${icon('check')}</span>
            <div><strong>${esc(d.focus.title)}</strong><small>${esc(d.focus.text)}</small></div>
            <span class="cd-focus-meta">${esc(d.focus.meta)}</span>
          </div>
          <div class="cd-head"><h4>${esc(d.listTitle)} <span data-cd="count"></span></h4><small>${icon('info')}${esc(d.listNote)}</small></div>
          <div class="cd-filters">
            <label class="cd-search">${icon('search')}<input type="search" data-cd="q" placeholder="${esc(d.search)}" aria-label="${esc(d.search)}"></label>
            <select data-cd="status" aria-label="${esc(d.allStatuses)}"><option value="">${esc(d.allStatuses)}</option>${d.statuses.map(x => `<option>${esc(x)}</option>`).join('')}</select>
            <select data-cd="score" aria-label="${esc(d.scoreFilter[0][1])}">${d.scoreFilter.map(([v, t]) => `<option value="${v}">${esc(t)}</option>`).join('')}</select>
          </div>
          <div class="cd-table">
            <div class="cd-row cd-row--head" aria-hidden="true">
              <span>#</span>${d.columns.slice(0, 4).map(c => `<span>${esc(c)}</span>`).join('')}
              <button type="button" class="cd-sort" data-cd="sort">${esc(d.columns[4])}${icon('sort')}</button>
            </div>
            <div data-cd="rows"></div>
            <p class="cd-empty" data-cd="empty" hidden>${esc(d.empty)}</p>
          </div>
          <p class="demo-note">${icon('info')}${esc(d.note)}</p>
        </section>
        <section class="cd-detail" data-view="detail" hidden></section>
      </div>
    </dialog>`;
}

function footer(c) {
  return `
    <div class="foot-cols">
      <a class="foot-logo" href="${esc(c.url)}" target="_blank" rel="noopener">
        <img src="assets/phg-strom.webp" width="194" height="220" alt="" loading="lazy">
        <img src="assets/phg-text-claim.webp" width="729" height="200" alt="PH Growth" loading="lazy">
      </a>
      <div class="foot-col">
        <p class="foot-nadpis">Provozovatel</p>
        <p>${esc(c.company)}<br>${esc(c.ico)}</p>
        <p>${c.address.map(esc).join('<br>')}</p>
      </div>
      <div class="foot-col">
        <p class="foot-nadpis">Dokumenty</p>
        <nav class="foot-odkazy" aria-label="Právní informace">${c.links.map(l =>
          `<a href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join('')}</nav>
      </div>
    </div>
    <p class="foot-copy">Copyright &copy; ${new Date().getFullYear()} ${esc(c.company)} | Všechna práva vyhrazena</p>`;
}


/* =================================================================
   CHOVÁNÍ A ANIMACE
   ================================================================= */

const still = matchMedia('(prefers-reduced-motion: reduce)').matches;

function onVisible(el, cb, opts = {}) {
  const io = new IntersectionObserver(es => es.forEach(e => cb(e.isIntersecting)), opts);
  io.observe(el);
}

function initReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (still) return els.forEach(el => el.classList.add('is-in'));
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('is-in');
    io.unobserve(e.target);
  }), { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* Krok uprostřed obrazovky zvýrazní svůj uzel v diagramu, předchozí uzly jsou hotové. */
function initFlow() {
  const sec = document.getElementById('reseni');
  if (!sec) return;
  const rows = [...sec.querySelectorAll('.flow-row')];
  const links = [...sec.querySelectorAll('.flow-link')];
  const steps = [...sec.querySelectorAll('.step')];
  const set = k => {
    rows.forEach((r, i) => { r.classList.toggle('is-active', i === k); r.classList.toggle('is-done', i < k); });
    links.forEach((l, i) => l.classList.toggle('is-done', i < k));
    steps.forEach((s, i) => s.classList.toggle('is-active', i === k));
  };
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) set(+e.target.dataset.step);
  }), { rootMargin: '-45% 0px -50% 0px' });
  steps.forEach(s => io.observe(s));
  set(0);
}

function countTo(el, value, c) {
  if (typeof value !== 'number') {
    el.textContent = MISSING;
    el.classList.add('is-missing');
    return;
  }
  el.classList.remove('is-missing');
  const from = parseInt(el.dataset.v || '0', 10);
  el.dataset.v = value;
  if (still) return (el.textContent = money(value, c));
  const t0 = performance.now(), dur = 700;
  const tick = now => {
    const k = Math.min(1, (now - t0) / dur);
    const e = 1 - Math.pow(1 - k, 3);
    el.textContent = money(Math.round(from + (value - from) * e), c);
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const unpack = t => (parseInt(t, 36) - 499) ^ 370085;

if (location.protocol === 'file:' || location.hostname === 'localhost') {
  window.sku = v => (((v | 0) ^ 370085) + 499).toString(36);
}

function initDemo() {
  const dlg = document.querySelector('.demo[data-demo="request"]');
  if (!dlg || typeof dlg.showModal !== 'function') {
    document.querySelectorAll('.demo-open').forEach(b => { b.hidden = true; });
    return;
  }
  const body = dlg.querySelector('.demo-body');
  const show = i => {
    dlg.querySelectorAll('[data-screen]').forEach(s => { s.hidden = +s.dataset.screen !== i; });
    body.scrollTop = 0;
    const h = dlg.querySelector(`[data-screen="${i}"] h3`);
    if (h) h.focus({ preventScroll: true });
  };
  document.querySelectorAll('.demo-open[data-demo="request"]').forEach(b => b.addEventListener('click', () => {
    show(0);
    dlg.showModal();
  }));
  dlg.addEventListener('click', e => {
    if (e.target === dlg || e.target.closest('[data-close]')) return dlg.close();
    const go = e.target.closest('[data-go]');
    if (go) show(+go.dataset.go);
  });
}

function initCandidates() {
  const dlg = document.querySelector('.demo[data-demo="candidates"]');
  if (!dlg || typeof dlg.showModal !== 'function') return;
  const d = DEMO_CANDIDATES;
  const $ = k => dlg.querySelector(`[data-cd="${k}"]`);
  const body = dlg.querySelector('.demo-body');
  const list = dlg.querySelector('[data-view="list"]');
  const detail = dlg.querySelector('[data-view="detail"]');
  const score = c => (c.points ? c.points.reduce((a, b) => a + b, 0) : null);
  const level = s => (s === null ? 'none' : s >= 80 ? 'high' : s >= 60 ? 'mid' : 'low');
  const tone = st => ({ 'Pozván na pohovor': 'invite', 'K doplnění': 'fill', 'Čeká na screening': 'wait' }[st] || '');
  const initials = n => n.split(' ').map(w => w[0]).join('');
  const norm = t => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  let desc = true;

  const scoreHtml = s => (s === null
    ? `<span class="cd-pending">${esc(d.pending)}</span>`
    : `<span class="cd-score"><strong>${s}</strong><small>/ 100</small></span><i class="cd-bar"><b style="width:${s}%"></b></i>`);

  function render() {
    const q = norm($('q').value.trim()), st = $('status').value, sc = $('score').value;
    const rows = d.candidates.map((c, i) => ({ ...c, i, s: score(c) }))
      .filter(c => (!q || norm(`${c.name} ${c.email} ${c.phone}`).includes(q))
        && (!st || c.status === st)
        && (!sc || (sc === 'pending' ? c.s === null : c.s !== null && c.s >= +sc)))
      .sort((a, b) => (a.s === null) - (b.s === null) || (desc ? b.s - a.s : a.s - b.s) || a.i - b.i);
    $('rows').innerHTML = rows.map((c, n) => `
      <button type="button" class="cd-row cd-${level(c.s)}" data-open="${c.i}">
        <span class="cd-rank">${pad2(n + 1)}</span>
        <span class="cd-person"><span class="cd-ava">${esc(initials(c.name))}</span><span><strong>${esc(c.name)}</strong><small>${esc(c.email)}</small></span></span>
        <span class="cd-date">${esc(c.date)}</span>
        <span class="cd-src">${esc(c.source)}</span>
        <span><em class="cd-status ${tone(c.status)}">${esc(c.status)}</em></span>
        <span class="cd-scorecell">${scoreHtml(c.s)}</span>
      </button>`).join('');
    $('empty').hidden = rows.length > 0;
    $('count').textContent = `${rows.length} / ${d.candidates.length}`;
    $('sort').classList.toggle('is-asc', !desc);
  }

  function open(i) {
    const c = d.candidates[i], s = score(c);
    const crit = s === null ? `<p class="cd-none">${esc(d.notScreened)}</p>` : `
      <div class="cd-panel cd-${level(s)}">${scoreHtml(s)}</div>
      <div class="cd-crits">${c.points.map((p, k) => {
        const kind = p === d.weights[k] ? 'ok' : p === 0 ? 'miss' : 'part';
        return `<div class="cd-crit cd-${kind}">${icon(kind === 'ok' ? 'check' : kind === 'miss' ? 'minus' : 'clock')}
          <div><strong>${esc(d.criteria[k])}</strong><small>${esc(c.details[k])}</small></div><span>${p} / ${d.weights[k]}</span></div>`;
      }).join('')}</div>
      <p class="demo-label">Shrnutí screeningu</p><p class="cd-summary">${esc(c.summary)}</p>`;
    detail.innerHTML = `
      <button type="button" class="demo-btn demo-btn--ghost" data-back>${icon('back')}${esc(d.back)}</button>
      <div class="cd-who"><span class="cd-ava cd-ava--big">${esc(initials(c.name))}</span>
        <div><h3 tabindex="-1">${esc(c.name)}</h3><em class="cd-status ${tone(c.status)}">${esc(c.status)}</em></div></div>
      <div class="cd-meta">
        <span>${icon('mail')}${esc(c.email)}</span><span>${icon('phone')}${esc(c.phone)}</span>
        <span><small>Přihláška</small>${esc(c.date)}</span><span><small>Zdroj</small>${esc(c.source)}</span>
      </div>
      <p class="demo-label">CV screening</p>
      ${crit}
      <p class="demo-note">${icon('info')}${esc(d.detailNote)}</p>`;
    list.hidden = true; detail.hidden = false; body.scrollTop = 0;
    detail.querySelector('h3').focus({ preventScroll: true });
  }

  function back() {
    detail.hidden = true; list.hidden = false; body.scrollTop = 0;
  }

  document.querySelectorAll('.demo-open[data-demo="candidates"]').forEach(b => b.addEventListener('click', () => {
    back(); render(); dlg.showModal();
    list.querySelector('h3').focus({ preventScroll: true });
  }));
  dlg.addEventListener('input', e => { if (e.target.matches('[data-cd]')) render(); });
  dlg.addEventListener('click', e => {
    if (e.target === dlg || e.target.closest('[data-close]')) return dlg.close();
    if (e.target.closest('[data-cd="sort"]')) { desc = !desc; return render(); }
    if (e.target.closest('[data-back]')) return back();
    const row = e.target.closest('[data-open]');
    if (row) open(+row.dataset.open);
  });
}

function initPrice() {
  const box = document.getElementById('cena');
  if (!box) return;
  const c = CONTENT.price;
  const update = () => {
    const sel = [...box.querySelectorAll('[data-opt]')].filter(x => x.checked).map(x => +x.dataset.opt);
    // zaškrtnutá položka s `replaces` vypne položku, kterou nahrazuje
    const off = sel.map(i => c.features[i].replaces).filter(Boolean)
      .map(r => c.features.findIndex(f => f.label.startsWith(r))).filter(i => i >= 0);
    const on = i => (c.features[i].required ? !off.includes(i) : sel.includes(i));
    box.querySelectorAll('[data-req]').forEach(x => { x.checked = on(+x.dataset.req); });
    box.querySelectorAll('.cl-row').forEach(r => {
      const i = +r.dataset.row;
      r.classList.toggle('is-on', on(i));
      r.classList.toggle('is-off', !on(i) && c.features[i].required);
    });
    box.querySelectorAll('[data-li]').forEach(li => li.classList.toggle('is-on', on(+li.dataset.li)));
    box.querySelectorAll('[data-note]').forEach(n => n.classList.toggle('is-on', on(+n.dataset.note)));
    for (const key of ['once', 'onDemand']) {
      const items = c.features.filter((f, i) => f.billing === key && on(i));
      const known = items.every(f => typeof f.sku === 'string');
      const total = items.reduce((a, f) => a + (known ? unpack(f.sku) : 0), 0);
      countTo(box.querySelector(`[data-total="${key}"]`), known ? total : null, c);
    }
  };
  box.addEventListener('change', update);
  update();
}


const app = document.getElementById('app');
app.innerHTML = SECTIONS.map((s, i) => {
  const tag = s.tag || 'section';
  return `<${tag} class="sec sec--${s.id}" id="${s.id}"><div class="sec-in">${s.render(s.data, i)}</div></${tag}>`;
}).join('') + `<footer class="site-foot"><div class="sec-in">${footer(CONTENT.footer)}</div></footer>` + demo(DEMO) + demoCandidates(DEMO_CANDIDATES);

initReveal();
// v tisku mají být vidět i rozbalovací poznámky
addEventListener('beforeprint', () => document.querySelectorAll('details').forEach(d => { d.open = true; }));

initFlow();
initDemo();
initCandidates();
initPrice();
requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.add('is-loaded')));
