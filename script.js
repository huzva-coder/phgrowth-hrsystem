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
  after: 'Po zavedení',
  rows: [
   {
    now: 'Zdlouhavé procházení životopisů bez prioritizace podle vhodnosti kandidátů vede k tomu, že se někteří zájemci vůbec nedostanou k pohovoru. Vedení pak pro své rozhodování postrádá potřebné podklady.',
    after: 'Systém zpracuje a seřadí kandidáty podle vhodnosti na danou pozici. Vedení získá podklady pro rychlejší rozhodnutí, koho pozvat k pohovoru.',
   },

    {
      now: 'Termíny se domlouvají telefonicky. Pokud se kandidátovi nelze dovolat nebo mu čas nevyhovuje, domlouvání se opakuje.',
      after: 'Vybranému kandidátovi se pošle odkaz na volné termíny vedoucího. Po výběru se pozvánka automaticky pošle do kalendáře vedoucího.',
    },
    {
      now: 'Ve spěchu se může zapomenout na odpověď, změnu termínu nebo další kontakt. Kandidát mezitím ztratí zájem a přestane reagovat.',
      after: 'U každého kandidáta bude vidět jeho stav a další kroky. Upozornění a dohodnuté připomínky pomohou udržet průběžnou komunikaci a přehled v náboru.',
    },
  ],
},

  solution: {
   title: 'Od přípravy pozice po potvrzení pracovní nabídky',
    steps: [
  {
  icon: 'doc',
  title: 'Příprava pozice a inzerce',
  text: 'Příprava a zveřejňování inzerátů zůstává beze změny. Nově je však potřeba, aby si vedoucí před ozýváním se kandidátů vypsal v systému volné termíny pohovorů, nastavil kritéria pro třídění životopisů a určil fáze výběrového řízení (psychodiagnostika, osobní/online pohovor apod.).',
},
    {
      icon: 'form',
      title: 'Příjem kandidátů a zpracování CV',
      text: 'Nově budou zprovozněna upozornění na nové kandidáty. Reakce z pracovních portálů se obratem propíší do webové aplikace, kde se životopisy odděleně uloží a před další analýzou se z nich skryjí osobní údaje. Algoritmus následně kandidáty seřadí podle vhodnosti, porovná s požadavky pozice a vytvoří stručné shrnutí pro rychlé oslovení. Oprávněné osoby budou mít i nadále přístup k původním životopisům.',
    },
   {
  icon: 'filter',
  title: 'Výběr kandidátů a komunikace',
  text: 'Vedoucí nebo personalista projde podklady a rozhodne o postupu či zamítnutí uchazeče. Další kroky se řídí nastavením konkrétní pozice. Systém může automaticky nebo po schválení odeslat odkaz na úvodní dotazník, psychodiagnostiku či výběr termínu pohovoru. Tým tak získá potřebná data pro další rozhodování.',
  },
    {
      icon: 'user',
      title: 'Psychodiagnostika vybraných kandidátů',
      text: 'Jako další podklad pro rozhodování lze u vybraných kandidátů využít doplňující dotazník a psychodiagnostiku. Systém uchazeči automaticky odešle odkaz na test k posouzení jeho pracovních preferencí a postojů k různým situacím v týmu (nakolik mu vyhovuje určité pracovní prostředí a způsob spolupráce). Výsledky se ihned propíší do karty kandidáta a včetně grafického přehledu a interpretace poslouží k přípravě na pohovor.',
    },
    {
      icon: 'calendar',
      title: 'Domluvení termínu a pohovor',
      text: 'Vybraný kandidát obdrží odkaz, přes který si vybere termín z dostupných časů vedoucího (stejně probíhá i 2. kolo). Systém při potvrzení ověří volnou kapacitu. Následně se data převedou do Microsoft 365. Z připravených dat se vytvoří pozvánka v Outlooku s detaily schůzky a odkazy na potřebné podklady, včetně psychodiagnostiky. V první verzi se bude tento přenos spouštět ručně. Systém bude pravidelně uchazeči připomínat termín schůzky.',
    },
    {
      icon: 'check',
      title: 'Pracovní nabídka a její potvrzení',
      text: 'Po pohovoru vedení zaznamená své rozhodnutí. Pokud se na to zapomene, systém ho na základě času v pozvánce automaticky upozorní. Následně systém informuje vedoucího i kandidáta o dalších krocích, aby obě strany přesně věděly, zda náborový proces pokračuje, nebo končí.',
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
  peopleTitle: 'Netechnická personální práce',
  vat: 'bez DPH',
  once: {
    title: 'Vývoj celého systému',
    note: 'jednorázově',
  },
  monthly: {
    title: 'Měsíční provoz',
    note: 'měsíčně',
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
      sku: '817k',
    },

    {
      label: 'Spouštění Power Automate workflow a kontrola výstupů, průběžná podpora a údržba systému',
      required: true,
      billing: 'monthly',
      sku: '7z9w',
    },

    {
      label: 'Zapojení psychodiagnostiky do náborového procesu',
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
      // po zaškrtnutí vypne položku, jejíž popis začíná tímto textem
      replaces: 'Spouštění Power Automate',
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
      label: 'Odmítání nevhodných kandidátů v Teamiu pro snížení doby odpovědi.',
      required: false,
      billing: 'monthly',
      sku: '7wx8',
      kind: 'people',
    },

    {
      label: 'První screening a obvolování kandidátů během prvních hodin po projevení zájmu kandidáta o pozici.',
      required: false,
      billing: 'monthly',
      sku: '80tg',
      kind: 'people',
    },



  ],
  footnote: 'Za použití psychodiagnostických metod se platí 500 Kč bez DPH za každého kandidáta, přičemž je možné využít množstevní slevu. Vedení pohovorů s kandidáty nebo zapojení do nich se naceňuje zvlášť.',


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
  const rows = c.rows.map((r, i) => `
    <div class="compare-row" data-reveal style="--i:${i}">
      <div class="cell cell--now">${icon('x', 'mk')}<p><small class="cell-label">${esc(c.now)}</small>${rich(r.now)}</p></div>
      <span class="compare-arrow">${icon('arrow')}</span>
      <div class="cell cell--after">${icon('check', 'mk')}<p><small class="cell-label">${esc(c.after)}</small>${rich(r.after)}</p></div>
    </div>`).join('');
  return `${head(c, n)}
    <div class="compare">
      <div class="compare-head" data-reveal>
        <span class="tag tag--now">${esc(c.now)}</span>
        <span></span>
        <span class="tag tag--after">${esc(c.after)}</span>
      </div>
      ${rows}
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
      <span class="cl-label">${esc(f.label)}<small>${esc(c[f.billing].note)}</small>${f.hint ? `<em class="cl-hint">${esc(f.hint)}</em>` : ''}</span>
    </label>`;
  const checklist = () => {
    const all = c.features.map((f, i) => [f, i]);
    const tech = all.filter(([f]) => f.kind !== 'people');
    const people = all.filter(([f]) => f.kind === 'people');
    return tech.map(([f, i]) => row(f, i)).join('') + (people.length ? `
      <p class="cl-divider">${esc(c.peopleTitle)}</p>
      ${people.map(([f, i]) => row(f, i)).join('')}
      ${c.peopleNote ? `<p class="cl-note">${rich(c.peopleNote)}</p>` : ''}` : '');
  };
  const notes = c.features.map((f, i) => f.note
    ? `<p class="price-foot price-note" data-note="${i}">${rich(f.note)}</p>` : '').join('');
  const plan = (key, i) => {
    const p = c[key];
    const items = c.features.map((f, j) => [f, j]).filter(([f]) => f.billing === key);
    return `
      <article class="plan${key === 'monthly' ? ' plan--alt' : ''}" data-reveal style="--i:${i}">
        <p class="plan-note">${esc(p.note)} · ${esc(c.vat)}</p>
        <h3>${esc(p.title)}</h3>
        <p class="plan-price" data-total="${key}">${MISSING}</p>
        <ul class="plan-list">${items.map(([f, j]) => `
          <li class="${f.required ? 'req-li' : 'opt-li'}" data-li="${j}">${icon(f.required ? 'check' : 'plus')}<span>${esc(f.label)}</span></li>`).join('')}
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
    <div class="plans">${plan('once', 0)}${plan('monthly', 1)}</div>
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
    for (const key of ['once', 'monthly']) {
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
}).join('') + `<footer class="site-foot"><div class="sec-in">${footer(CONTENT.footer)}</div></footer>`;

initReveal();
initFlow();
initPrice();
requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.add('is-loaded')));
