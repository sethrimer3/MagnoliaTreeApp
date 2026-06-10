import './style.css';
import affirmations from './affirmations.json';

const mainWebsite = 'https://magnoliatreecounseling.com/';
const bookingUrl = 'https://clientsecure.me/widget-redirect?scopeId=d4a5818f-8465-4749-829b-a1210b9c2cea&scopeGlobal=true&applicationId=7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b&channel=client_portal&appearance=%7B%22fullScreen%22%3Atrue%7D';
const instagramUrl = 'https://www.instagram.com/magnoliatreecounseling/';
const sourceRoot = 'https://magnoliatreecounseling.com';

const therapistImages = [
  'IMG_4215.jpeg/:/cr=t:5.85%25,l:11.31%25,w:84.75%25,h:57.71%25/rs=w:730,h:730,cg:true,m',
  'Magnolia_130-b7b51ea.jpg/:/cr=t:1.61%25,l:0%25,w:100%25,h:66.64%25/rs=w:730,h:730,cg:true',
  '1748492726555_Magnolia_048.webp/:/cr=t:0%25,l:23.49%25,w:59.54%25,h:89.29%25/rs=w:730,h:730,cg:true,m',
  'Magnolia_105-1f56056.jpg/:/cr=t:0%25,l:10.71%25,w:89.29%25,h:59.5%25/rs=w:730,h:730,cg:true,m',
  'Magnolia_068-da307b8.jpg/:/cr=t:3.93%25,l:0%25,w:100%25,h:66.64%25/rs=w:730,h:730,cg:true',
  'Magnolia_007.jpg/:/cr=t:5.09%25,l:0%25,w:100%25,h:66.64%25/rs=w:730,h:730,cg:true',
  'Magnolia_088.jpg/:/cr=t:0%25,l:10.71%25,w:89.29%25,h:59.5%25/rs=w:730,h:730,cg:true,m',
  'jessie1.jpg/:/cr=t:5.37%25,l:10.71%25,w:89.29%25,h:80.05%25/rs=w:730,h:730,cg:true,m',
  'IMG_9717.jpeg/:/cr=t:14.12%25,l:0%25,w:100%25,h:69.94%25/rs=w:730,h:730,cg:true',
  'file_00000000187071fd9192af9bf6e67580.png/:/cr=t:22.67%25,l:16.01%25,w:70.42%25,h:52.82%25/rs=w:730,h:730,cg:true,m',
  '%20Rachel%202.PNG/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730',
  '01DC4CD4-5C92-45FB-83B1-6FA5EEA65848.jpg/:/cr=t:16.68%25,l:0%25,w:100%25,h:66.65%25/rs=w:730,h:730,cg:true',
].map((path) => `https://img1.wsimg.com/isteam/ip/83610a8f-a98e-4646-9b57-4432fe1d1c35/${path}`);

const therapists = [
  { name:'Karmen Tuivai', credential:'LCSW', slug:'karmen-tuivai%2C-lcsw', accepting:false, specialties:['Grief & loss','Trauma','EMDR','Internal Family Systems'], bio:'Karmen specializes in grief, loss, and trauma care. Her extensive training includes grief-informed practice, EMDR, Internal Family Systems, somatic trauma therapy, sandtray, and trauma-focused CBT.' },
  { name:'Terri Rowley', credential:'LCSW', slug:'terri-rowley%2C-lcsw', accepting:true, specialties:['Attachment','Relationships','Families','Grief & loss'], bio:'With more than 25 years working with children and families in the foster care system, Terri helps clients understand attachment patterns and build deeper, more intentional connections.' },
  { name:'Preston Walker', credential:'LMFT', slug:'preston-walker%2C-lmft', accepting:false, specialties:['ADHD','PTSD','Relationships','Neurofeedback'], bio:'Preston is a Marriage and Family Therapist specializing in ADHD and PTSD. He combines neurofeedback, cognitive-behavioral techniques, memory reconsolidation, and emotionally focused therapy.' },
  { name:'Miranda Powers', credential:'LCSW', slug:'miranda-powers%2C-lcsw', accepting:true, specialties:['Anxiety','Depression','Trauma','Life transitions'], bio:'Miranda provides a safe, empathetic space for clients experiencing anxiety, depression, trauma, and life transitions, helping them uncover patterns, manage emotions, and build confidence.' },
  { name:'Jen George', credential:'CSW', slug:'jen-george%2C-csw', accepting:false, specialties:['Trauma','OCD','Sports psychology','Relationships'], bio:'Jen helps clients discover core issues driving distress and trauma responses so healing can be deep and enduring. Her broad training includes CBT, ACT, DBT, ART, IFS, ERP, and trauma-focused care.' },
  { name:'Claire Remund', credential:'CSW', slug:'claire-remund%2C-csw', accepting:true, specialties:['Trauma','Domestic violence','Substance use','Anxiety & depression'], bio:'Claire works with adults navigating trauma, domestic violence, substance use, anxiety, and depression through warm, nonjudgmental, evidence-based care.' },
  { name:'Amberly Daines', credential:'CSW', slug:'amberly-daines%2C-csw', accepting:true, specialties:['Trauma','Self-esteem','Anxiety & depression','Family issues'], bio:'Amberly helps people feel more at home in themselves through evidence-based practices, mindfulness, nervous-system awareness, EMDR, IFS-informed care, CBT, DBT, and ART.' },
  { name:'Jessie Heaton Hopper', credential:'CSW', slug:'jessie-heaton-hopper%2C-csw', accepting:true, specialties:['Emotional wellness','Personal growth','CBT','ACT & IFS'], bio:'Jessie creates a safe, supportive space where clients can explore emotions and experiences without judgment, build on their strengths, and develop practical tools for growth.' },
  { name:'Tamra Palmer', credential:'CSW', slug:'tamra-palmer-csw', accepting:true, specialties:['Anxiety','Trauma','Faith transitions','Adoption & attachment'], bio:'With more than 16 years in mental health, Tamra works with clients ages 16 and older using mindful, trauma-informed care, Internal Family Systems, expressive therapies, and holistic practices.' },
  { name:'Seth Rimer', credential:'CSW', slug:'seth-rimer%2C-csw', accepting:true, specialties:['Anxiety & depression','Grief & trauma','Relationships','Identity & meaning'], bio:'Seth offers warm, thoughtful, practical therapy for people feeling overwhelmed, stuck, or disconnected, drawing from CBT, ACT, DBT skills, motivational interviewing, and existential therapy.' },
  { name:'Rachel Felix', credential:'MSW-I', slug:'rachel-felix%2C-msw-i', accepting:true, specialties:['Faith transitions','Cognitive behavioral therapy','Self-exploration','Low-cost therapy'], bio:'Rachel is a master’s student intern offering sliding-scale therapy. She uses CBT to help clients untangle difficult thoughts, emotions, and behaviors, with particular empathy for faith transitions.' },
  { name:'Brooke Kralick', credential:'MSW-I', slug:'brooke-kralick%2C-msw-i', accepting:true, specialties:['Anxiety','Grief','Perinatal & postpartum','Low-cost therapy'], bio:'Brooke is a master’s student intern offering sliding-scale therapy. Her collaborative, body-informed approach uses CBT and ACT to help clients build awareness and values-grounded tools.' },
].map((therapist, index) => ({ ...therapist, image: therapistImages[index] }));

const resources = [
  { icon: '✦', title: 'Guided Breathing', text: 'Choose a calming breathing rhythm and follow its gentle visual guide.', tag: 'Open activity', href: '#breathing' },
  { icon: '◌', title: 'Reflection Tools', text: 'Pause and name one feeling, one need, and one kind next step.', tag: 'Quick practice' },
  { icon: '☼', title: 'Wellness Library', text: 'Start with sleep, movement, hydration, connection, and time outdoors.', tag: 'Wellness basics' },
  { icon: '♡', title: 'Between Sessions', text: 'Choose one small supportive action to practice before your next session.', tag: 'Care ideas' },
];

const affirmationFonts = ['Dancing Script', 'Ole', 'Pixelify Sans', 'Playfair Local', 'Shadows Into Light', 'Tangerine', 'Zeyada'];
const affirmationRows = Array.from({ length: 8 }, (_, row) => {
  const items = Array.from({ length: 5 }, (_, index) => {
    const text = affirmations[(row * 5 + index) % affirmations.length];
    const font = affirmationFonts[Math.floor(Math.random() * affirmationFonts.length)];
    return `<span style="font-family:'${font}'">${text}</span>`;
  }).join('');
  return `<div class="affirmation-track ${row % 2 ? 'reverse' : ''}" style="--row:${row};--speed:${32 + row * 3}s"><div>${items}${items}</div></div>`;
}).join('');

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="site-header">
    <nav class="nav-left" aria-label="Main navigation">
      <a href="#resources">Resources</a>
      <a href="#games">Mindfulness games</a>
      <a href="#therapists">Therapists</a>
      <a href="#support">Support</a>
    </nav>
    <a class="header-logo" href="#top" aria-label="Magnolia Tree Counseling home">
      <img src="./magnoliaTreeLogo.webp" alt="Magnolia Tree Counseling" />
    </a>
    <nav class="nav-right" aria-label="External navigation">
      <a href="${mainWebsite}" target="_blank" rel="noreferrer">Main website</a>
      <a class="nav-button" href="${bookingUrl}" target="_blank" rel="noreferrer">Book a session</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero page-view" data-page="home">
      <div class="affirmation-background" aria-hidden="true">${affirmationRows}</div>
      <div class="hero-copy reveal">
        <p class="eyebrow">A space for growth and connection</p>
        <h1>Resources for your<br><em>healing journey.</em></h1>
        <p class="intro">A welcoming collection of tools and support from Magnolia Tree Counseling, created to help you feel grounded, understood, and connected.</p>
        <div class="actions">
          <a class="button primary" href="${bookingUrl}" target="_blank" rel="noreferrer">Book an appointment <span>→</span></a>
          <a class="button secondary" href="#resources">Explore resources</a>
        </div>
      </div>
      <div class="hero-logo reveal">
        <img src="./magnoliaTreeLogo.webp" alt="Magnolia Tree Counseling" />
      </div>
    </section>

    <section class="page-menu page-view" data-page="home" aria-label="Explore">
      <a href="#resources"><span>Resources</span><small>Tools for reflection and support</small></a>
      <a href="#games"><span>Mindfulness Games</span><small>Quiet, interactive activities</small></a>
      <a href="#therapists"><span>Meet Our Therapists</span><small>Find someone who feels right</small></a>
      <a href="#support"><span>Support & Contact</span><small>Connect with Magnolia Tree</small></a>
    </section>

    <section class="therapist-section page-view" id="therapists" data-page="therapists">
      <div class="therapist-heading reveal">
        <div><p class="eyebrow">Magnolia Tree Therapists</p><h2>Find someone who feels right.</h2></div>
        <p>Our therapists bring different specialties and approaches to care, with one shared goal: helping you feel heard, supported, and able to grow.</p>
      </div>
      <div class="therapist-tools reveal">
        <label><span>Search by name or specialty</span><input id="therapist-search" type="search" placeholder="Try “anxiety,” “grief,” or a name" /></label>
        <label class="accepting-toggle"><input id="accepting-filter" type="checkbox" /><span>Accepting new clients</span></label>
      </div>
      <div class="therapist-grid">
        ${therapists.map((therapist) => `<article class="therapist-card reveal" data-search="${[therapist.name, ...therapist.specialties].join(' ').toLowerCase()}" data-accepting="${therapist.accepting}">
          <img src="${therapist.image}" alt="${therapist.name}, ${therapist.credential}" loading="lazy" />
          <div class="therapist-card-body">
            <div class="therapist-status ${therapist.accepting ? '' : 'muted'}">${therapist.accepting ? 'Accepting new clients' : 'View availability'}</div>
            <h3>${therapist.name}</h3><p class="credential">${therapist.credential}</p>
            <div class="specialties">${therapist.specialties.map((item) => `<span>${item}</span>`).join('')}</div>
            <p class="therapist-bio">${therapist.bio}</p>
            <div class="therapist-actions"><button class="profile-toggle" aria-expanded="false">Read profile <span>+</span></button><a href="${sourceRoot}/${therapist.slug}" target="_blank" rel="noreferrer">Full profile ↗</a></div>
          </div>
        </article>`).join('')}
      </div>
      <p class="no-results" hidden>No therapists match that search. Try another name or specialty.</p>
    </section>

    <section class="resource-section page-view" id="resources" data-page="resources">
      <div class="section-heading reveal">
        <p class="eyebrow">Client resources</p>
        <h2>Support, wherever you are.</h2>
        <p>Return anytime you need a moment of reflection, reassurance, or practical support.</p>
      </div>
      <div class="resource-grid">
        ${resources.map((item) => `<article class="resource-card reveal"><span class="card-icon">${item.icon}</span><span class="tag">${item.tag}</span><h3>${item.title}</h3><p>${item.text}</p>${item.href ? `<a href="${item.href}">Open activity <span>→</span></a>` : `<span class="resource-practice">Try this today</span>`}</article>`).join('')}
      </div>
    </section>

    <section class="breathing-section page-view" data-page="breathing">
      <div class="breathing-heading"><p class="eyebrow">Grounding & Calm</p><h2>Guided breathing</h2><p>Select an exercise, then let the animation guide your pace.</p></div>
      <div class="breathing-options" id="breathing-options">
        <button data-breath="box"><strong>Box Breathing</strong><span>4 · 4 · 4 · 4</span></button>
        <button data-breath="calm"><strong>Calming Breath</strong><span>4 in · 6 out</span></button>
        <button data-breath="reset"><strong>Gentle Reset</strong><span>3 · 3 · 5</span></button>
      </div>
      <div class="breathing-player">
        <div class="breathing-visual" id="breathing-visual"><div class="breath-orb"></div><div class="box-path"><i></i><i></i><i></i></div></div>
        <div class="breathing-guide"><p id="breath-name">Box Breathing</p><strong id="breath-prompt">Inhale</strong><span id="breath-count">4</span><button id="breath-toggle">Begin</button></div>
      </div>
    </section>

    <section class="games-section page-view" id="games" data-page="games">
      <div class="games-copy reveal">
        <p class="eyebrow">Mindfulness games</p>
        <h2>Leaf by leaf,<br><em>find your flow.</em></h2>
        <p>Give your mind a gentle place to focus. Arrange the falling leaves, clear each row, and let everything else be quiet for a moment.</p>
        <div class="game-stat-row"><div><span>Score</span><strong id="leaf-score">0</strong></div><div><span>Lines</span><strong id="leaf-lines">0</strong></div><div><span>Level</span><strong id="leaf-level">1</strong></div></div>
        <p class="game-note">Swipe left or right to move, swipe up to rotate, and swipe down to settle the piece.</p>
      </div>
      <div class="leaf-game reveal">
        <div class="leaf-game-layout">
          <div><div class="game-top"><span>Leaf fall</span></div><div class="canvas-wrap"><button id="leaf-start">Restart</button><canvas id="leaf-tetris" width="300" height="600" aria-label="Leaf fall block game. Swipe to control pieces."></canvas><div class="game-message" id="game-message">Take a breath.<br><small>Tap restart when you're ready.</small></div></div></div>
          <div class="mindfulness-jar"><h3>Mindfulness Jar</h3><canvas id="mindfulness-jar" width="220" height="600" aria-label="Bright blue mindfulness water jar"></canvas></div>
        </div>
      </div>
    </section>

    <section class="sand-section page-view" data-page="games">
      <div class="sand-heading reveal">
        <div><p class="eyebrow">Mindfulness games · Sand Garden</p><h2>Pour color.<br><em>Let gravity create.</em></h2></div>
        <p>Press and hold anywhere in the garden to pour a gentle stream of sand. Move slowly, layer colors, and watch each grain find its resting place.</p>
      </div>
      <div class="sand-studio reveal">
        <div class="sand-toolbar">
          <div class="sand-palette"><span>Solid colors</span><div class="sand-colors" id="sand-colors"></div><span>Living gradients</span><div class="sand-colors gradient-colors" id="gradient-colors"></div></div>
          <label><span>Flow</span><input id="sand-flow" type="range" min="1" max="9" value="4" /></label>
          <div class="sand-actions"><button id="sand-clear">Clear</button><button id="sand-save">Save art</button></div>
        </div>
        <canvas id="sand-canvas" width="900" height="560" aria-label="Interactive falling sand art canvas"></canvas>
        <p class="sand-hint">Click, touch, and drag to pour sand.</p>
      </div>
    </section>

    <section class="support reveal page-view" id="support" data-page="support">
      <div><p class="eyebrow">Ready when you are</p><h2>You don't have to navigate it alone.</h2><p>Whether you're returning or taking your first step, we're here to help you find the support that feels right.</p></div>
      <div class="support-links">
        <a href="${bookingUrl}" target="_blank" rel="noreferrer"><span>01</span><strong>Book an appointment</strong><i>→</i></a>
        <a href="${mainWebsite}" target="_blank" rel="noreferrer"><span>02</span><strong>Visit our main website</strong><i>→</i></a>
        <a href="${instagramUrl}" target="_blank" rel="noreferrer"><span>03</span><strong>Follow us on Instagram</strong><i>→</i></a>
      </div>
    </section>
  </main>

  <footer>
    <img class="footer-logo" src="./magnoliaTreeLogo.webp" alt="Magnolia Tree Counseling" />
    <div class="footer-contact">
      <strong>Magnolia Tree Counseling PLLC</strong>
      <address>3651 North 100 East, Suite 300<br />Provo, Utah 84604, United States</address>
      <a href="mailto:admin@magnoliatreecounseling.com">admin@magnoliatreecounseling.com</a>
      <a href="tel:+18019998761">(801) 999-8761</a>
    </div>
    <small>© ${new Date().getFullYear()} Magnolia Tree Counseling</small>
  </footer>
`;

const showPage = () => {
  const page = location.hash.slice(1) || 'home';
  const validPage = ['home', 'resources', 'breathing', 'games', 'therapists', 'support'].includes(page) ? page : 'home';
  document.querySelectorAll<HTMLElement>('.page-view').forEach((section) => {
    section.hidden = section.dataset.page !== validPage;
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
window.addEventListener('hashchange', showPage);
showPage();

const affirmationElements = [...document.querySelectorAll<HTMLElement>('.affirmation-track span')];
const highlightAffirmations = () => {
  affirmationElements.forEach((element) => element.classList.remove('gold'));
  const visible = affirmationElements.filter((element) => {
    const rect = element.getBoundingClientRect();
    return rect.right > 0 && rect.left < window.innerWidth && rect.bottom > 0 && rect.top < window.innerHeight;
  });
  const count = Math.min(visible.length, Math.random() < 0.65 ? 1 : 2);
  for (let index = 0; index < count; index++) {
    const choice = visible.splice(Math.floor(Math.random() * visible.length), 1)[0];
    choice?.classList.add('gold');
  }
};
highlightAffirmations();
window.setInterval(highlightAffirmations, 3200);

const breathingExercises={
  box:{name:'Box Breathing',phases:[['Inhale',4],['Hold',4],['Exhale',4],['Hold',4]]},
  calm:{name:'Calming Breath',phases:[['Inhale',4],['Exhale',6]]},
  reset:{name:'Gentle Reset',phases:[['Inhale',3],['Hold',3],['Exhale',5]]},
} as const;
let breathType:keyof typeof breathingExercises='box',breathPhase=0,breathRemaining=4,breathTimer=0,breathing=false;
const breathName=document.querySelector('#breath-name')!,breathPrompt=document.querySelector('#breath-prompt')!,breathCount=document.querySelector('#breath-count')!,breathToggle=document.querySelector<HTMLButtonElement>('#breath-toggle')!,breathingVisual=document.querySelector('#breathing-visual')!;
const renderBreath=()=>{const exercise=breathingExercises[breathType],phase=exercise.phases[breathPhase];breathName.textContent=exercise.name;breathPrompt.textContent=phase[0];breathCount.textContent=String(breathRemaining);breathingVisual.className=`breathing-visual ${breathType} ${phase[0].toLowerCase()}`};
const tickBreath=()=>{breathRemaining--;if(breathRemaining<=0){breathPhase=(breathPhase+1)%breathingExercises[breathType].phases.length;breathRemaining=breathingExercises[breathType].phases[breathPhase][1]}renderBreath()};
document.querySelectorAll<HTMLButtonElement>('[data-breath]').forEach(button=>button.addEventListener('click',()=>{breathType=button.dataset.breath as keyof typeof breathingExercises;breathPhase=0;breathRemaining=breathingExercises[breathType].phases[0][1];document.querySelectorAll('[data-breath]').forEach(item=>item.classList.remove('active'));button.classList.add('active');renderBreath()}));
document.querySelector<HTMLButtonElement>('[data-breath="box"]')!.classList.add('active');
breathToggle.addEventListener('click',()=>{breathing=!breathing;breathToggle.textContent=breathing?'Pause':'Begin';clearInterval(breathTimer);if(breathing)breathTimer=window.setInterval(tickBreath,1000)});
renderBreath();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'));
}, { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const therapistCards = [...document.querySelectorAll<HTMLElement>('.therapist-card')];
const searchInput = document.querySelector<HTMLInputElement>('#therapist-search')!;
const acceptingFilter = document.querySelector<HTMLInputElement>('#accepting-filter')!;
const filterTherapists = () => {
  const query = searchInput.value.trim().toLowerCase();
  let visible = 0;
  therapistCards.forEach((card) => {
    const show = card.dataset.search!.includes(query) && (!acceptingFilter.checked || card.dataset.accepting === 'true');
    card.hidden = !show;
    if (show) visible++;
  });
  document.querySelector<HTMLElement>('.no-results')!.hidden = visible > 0;
};
searchInput.addEventListener('input', filterTherapists);
acceptingFilter.addEventListener('change', filterTherapists);
document.querySelectorAll<HTMLButtonElement>('.profile-toggle').forEach((button) => button.addEventListener('click', () => {
  const card = button.closest('.therapist-card')!;
  const expanded = card.classList.toggle('expanded');
  button.setAttribute('aria-expanded', String(expanded));
  button.firstChild!.textContent = expanded ? 'Close profile ' : 'Read profile ';
  button.querySelector('span')!.textContent = expanded ? '−' : '+';
}));

const canvas = document.querySelector<HTMLCanvasElement>('#leaf-tetris')!;
const context = canvas.getContext('2d')!;
const COLS = 10, ROWS = 20, SIZE = 30;
const leafColors = ['#000', '#79a37e', '#b8a46d', '#9c7063', '#507c59', '#d2a991', '#6d9475', '#c4be87'];
const shapes = [[[1,1,1,1]],[[2,2],[2,2]],[[0,3,0],[3,3,3]],[[4,0,0],[4,4,4]],[[0,0,5],[5,5,5]],[[0,6,6],[6,6,0]],[[7,7,0],[0,7,7]],[[1,1,1],[0,1,0],[0,1,0]],[[2,0,2],[2,2,2]],[[3,3,0],[0,3,0],[0,3,3]],[[0,4,0],[4,4,4],[0,4,0]],[[5,5,5],[5,0,5]],[[6,6,0],[0,6,6],[0,0,6]]];
let board = Array.from({length:ROWS},()=>Array(COLS).fill(0));
let piece = {shape:shapes[0],x:3,y:0};
let score=0, lines=0, lastDrop=0, running=false, animation=0;
const collides=(candidate=piece)=>candidate.shape.some((row,y)=>row.some((value,x)=>value&&(candidate.y+y>=ROWS||candidate.x+x<0||candidate.x+x>=COLS||board[candidate.y+y]?.[candidate.x+x])));
const newPiece=()=>{const shape=shapes[Math.floor(Math.random()*shapes.length)];piece={shape,x:Math.floor((COLS-shape[0].length)/2),y:0};if(collides())endGame()};
const drawLeaf=(x:number,y:number,value:number)=>{context.save();context.translate(x*SIZE+SIZE/2,y*SIZE+SIZE/2);context.rotate(((value%4)-1.5)*.18);context.fillStyle=leafColors[value];context.beginPath();context.moveTo(-10,10);context.bezierCurveTo(-15,-8,0,-15,11,-11);context.bezierCurveTo(14,2,6,14,-10,10);context.fill();context.strokeStyle='rgba(255,255,255,.55)';context.lineWidth=1.2;context.beginPath();context.moveTo(-8,9);context.lineTo(9,-9);context.stroke();context.restore()};
const drawGame=()=>{context.clearRect(0,0,canvas.width,canvas.height);context.fillStyle='#f4f7f0';context.fillRect(0,0,canvas.width,canvas.height);context.strokeStyle='rgba(23,77,42,.06)';for(let x=1;x<COLS;x++){context.beginPath();context.moveTo(x*SIZE,0);context.lineTo(x*SIZE,canvas.height);context.stroke()}for(let y=1;y<ROWS;y++){context.beginPath();context.moveTo(0,y*SIZE);context.lineTo(canvas.width,y*SIZE);context.stroke()}board.forEach((row,y)=>row.forEach((value,x)=>value&&drawLeaf(x,y,value)));piece.shape.forEach((row,y)=>row.forEach((value,x)=>value&&drawLeaf(piece.x+x,piece.y+y,value)))};
const updateStats=()=>{document.querySelector('#leaf-score')!.textContent=String(score);document.querySelector('#leaf-lines')!.textContent=String(lines);document.querySelector('#leaf-level')!.textContent=String(Math.floor(lines/8)+1)};
const settle=()=>{piece.shape.forEach((row,y)=>row.forEach((value,x)=>{if(value)board[piece.y+y][piece.x+x]=value}));addJarDrops(piece.shape.flat().filter(Boolean).length);let cleared=0;board=board.filter(row=>{if(row.every(Boolean)){cleared++;return false}return true});while(board.length<ROWS)board.unshift(Array(COLS).fill(0));lines+=cleared;score+=[0,100,300,600,1000][cleared];updateStats();newPiece()};
const move=(dx:number)=>{const next={...piece,x:piece.x+dx};if(!collides(next))piece=next;drawGame()};
const rotate=()=>{const shape=piece.shape[0].map((_,i)=>piece.shape.map(row=>row[i]).reverse());const next={...piece,shape};if(!collides(next))piece=next;drawGame()};
const drop=()=>{const next={...piece,y:piece.y+1};if(collides(next))settle();else piece=next;drawGame()};
const hardDrop=()=>{while(!collides({...piece,y:piece.y+1}))piece.y++;settle();drawGame()};
const endGame=()=>{running=false;cancelAnimationFrame(animation);document.querySelector('#game-message')!.innerHTML=`A quiet pause.<br><small>You gathered ${score} points. Begin again whenever you're ready.</small>`;document.querySelector('#game-message')!.classList.remove('hidden');document.querySelector('#leaf-start')!.textContent='Begin again'};
const loop=(time:number)=>{if(!running)return;if(time-lastDrop>Math.max(180,700-lines*8)){drop();lastDrop=time}animation=requestAnimationFrame(loop)};
const startGame=()=>{board=Array.from({length:ROWS},()=>Array(COLS).fill(0));score=0;lines=0;running=true;lastDrop=performance.now();newPiece();updateStats();drawGame();document.querySelector('#game-message')!.classList.add('hidden');document.querySelector('#leaf-start')!.textContent='Restart';cancelAnimationFrame(animation);animation=requestAnimationFrame(loop)};
document.querySelector('#leaf-start')!.addEventListener('click',startGame);
window.addEventListener('keydown',event=>{if(!running)return;if(['ArrowLeft','ArrowRight','ArrowDown','ArrowUp',' '].includes(event.key))event.preventDefault();if(event.key==='ArrowLeft')move(-1);if(event.key==='ArrowRight')move(1);if(event.key==='ArrowDown')drop();if(event.key==='ArrowUp')rotate();if(event.key===' ')hardDrop()});
let swipeStartX=0,swipeStartY=0;
canvas.addEventListener('pointerdown',event=>{swipeStartX=event.clientX;swipeStartY=event.clientY;canvas.setPointerCapture(event.pointerId)});
canvas.addEventListener('pointerup',event=>{if(!running)return;const dx=event.clientX-swipeStartX,dy=event.clientY-swipeStartY;if(Math.max(Math.abs(dx),Math.abs(dy))<24)return;if(Math.abs(dx)>Math.abs(dy))move(dx>0?1:-1);else if(dy>0)hardDrop();else rotate()});
drawGame();

const jarCanvas=document.querySelector<HTMLCanvasElement>('#mindfulness-jar')!,jarContext=jarCanvas.getContext('2d')!;
const jarDrops:{x:number,y:number,speed:number,size:number}[]=[],jarRipples:{x:number,age:number}[]=[];
let jarLevel=70;
function addJarDrops(count:number){for(let i=0;i<count;i++)jarDrops.push({x:30+Math.random()*160,y:-Math.random()*120,speed:3+Math.random()*3,size:3+Math.random()*4})}
const drawJar=()=>{jarContext.clearRect(0,0,jarCanvas.width,jarCanvas.height);jarLevel=Math.min(430,jarLevel+jarDrops.length*.002);const surface=jarCanvas.height-jarLevel;jarContext.save();jarContext.beginPath();jarContext.roundRect(8,8,204,584,30);jarContext.clip();const water=jarContext.createLinearGradient(0,surface,0,jarCanvas.height);water.addColorStop(0,'#35c8ff');water.addColorStop(1,'#087ee8');jarContext.fillStyle=water;jarContext.beginPath();jarContext.moveTo(0,surface);for(let x=0;x<=220;x+=5)jarContext.lineTo(x,surface+Math.sin(x*.055+performance.now()*.004)*4+jarRipples.reduce((wave,ripple)=>wave+Math.sin((x-ripple.x)*.12-ripple.age*.28)*Math.max(0,7-ripple.age*.12),0));jarContext.lineTo(220,600);jarContext.lineTo(0,600);jarContext.fill();jarDrops.forEach(drop=>{drop.y+=drop.speed;drop.speed+=.09;jarContext.fillStyle='#43d8ff';jarContext.beginPath();jarContext.ellipse(drop.x,drop.y,drop.size*.65,drop.size,0,0,Math.PI*2);jarContext.fill();if(drop.y>=surface){jarRipples.push({x:drop.x,age:0});drop.y=700}});for(let i=jarDrops.length-1;i>=0;i--)if(jarDrops[i].y>650)jarDrops.splice(i,1);jarRipples.forEach(ripple=>ripple.age++);for(let i=jarRipples.length-1;i>=0;i--)if(jarRipples[i].age>60)jarRipples.splice(i,1);jarContext.restore();jarContext.strokeStyle='#FDEA9D';jarContext.lineWidth=5;jarContext.beginPath();jarContext.roundRect(8,8,204,584,30);jarContext.stroke();requestAnimationFrame(drawJar)};
drawJar();

const sandCanvas = document.querySelector<HTMLCanvasElement>('#sand-canvas')!;
const sandContext = sandCanvas.getContext('2d')!;
const SW = 600, SH = 374;
const sand = new Uint32Array(SW * SH);
const sandPalette = ['#102f20','#315d3b','#6f9268','#b9a96b','#d6b393','#a87869','#e7d7bd','#f4eee1'];
const sandGradients = [
  ['#FDEA9D','#d6b393','#a87869','#FDEA9D'],
  ['#315d3b','#79a37e','#e7d7bd','#315d3b'],
  ['#9c7063','#f0cfc2','#b9a96b','#9c7063'],
];
const hexToRgb=(color:string)=>color.match(/\w\w/g)!.map(value=>parseInt(value,16));
const packColor=(color:string)=>{const [r,g,b]=hexToRgb(color);return (r<<16)|(g<<8)|b};
const mixColor=(a:string,b:string,amount:number)=>{const start=hexToRgb(a),end=hexToRgb(b);return (Math.round(start[0]+(end[0]-start[0])*amount)<<16)|(Math.round(start[1]+(end[1]-start[1])*amount)<<8)|Math.round(start[2]+(end[2]-start[2])*amount)};
let sandColor = packColor(sandPalette[4]), activeGradient = -1, sandFlow = 4, pouring = false, sandX = SW / 2, sandY = 10;
document.querySelector('#sand-colors')!.innerHTML = sandPalette.map((color,index)=>`<button style="--sand:${color}" data-color="${index}" aria-label="Choose sand color ${index+1}"></button>`).join('');
document.querySelector('#gradient-colors')!.innerHTML = sandGradients.map((colors,index)=>`<button style="--sand:linear-gradient(135deg,${colors.join(',')})" data-gradient="${index}" aria-label="Choose animated gradient ${index+1}"></button>`).join('');
document.querySelector<HTMLButtonElement>('[data-color="4"]')!.classList.add('active');
const clearSandSelection=()=>document.querySelectorAll('.sand-colors button').forEach(item=>item.classList.remove('active'));
document.querySelectorAll<HTMLButtonElement>('[data-color]').forEach(button=>button.addEventListener('click',()=>{activeGradient=-1;sandColor=packColor(sandPalette[Number(button.dataset.color)]);clearSandSelection();button.classList.add('active')}));
document.querySelectorAll<HTMLButtonElement>('[data-gradient]').forEach(button=>button.addEventListener('click',()=>{activeGradient=Number(button.dataset.gradient);clearSandSelection();button.classList.add('active')}));
document.querySelector<HTMLInputElement>('#sand-flow')!.addEventListener('input',event=>sandFlow=Number((event.target as HTMLInputElement).value));
const sandPosition=(event:PointerEvent)=>{const rect=sandCanvas.getBoundingClientRect();sandX=Math.floor((event.clientX-rect.left)/rect.width*SW);sandY=Math.floor((event.clientY-rect.top)/rect.height*SH)};
sandCanvas.addEventListener('pointerdown',event=>{pouring=true;sandCanvas.setPointerCapture(event.pointerId);sandPosition(event)});
sandCanvas.addEventListener('pointermove',event=>{if(pouring)sandPosition(event)});
sandCanvas.addEventListener('pointerup',()=>pouring=false);
const productionColor=()=>{if(activeGradient<0)return sandColor;const colors=sandGradients[activeGradient];const cycle=(performance.now()/5000)%colors.length;const index=Math.floor(cycle);return mixColor(colors[index],colors[(index+1)%colors.length],cycle-index)};
const pourSand=()=>{if(!pouring)return;const color=productionColor();for(let i=0;i<sandFlow*5;i++){const x=Math.max(0,Math.min(SW-1,sandX+Math.floor((Math.random()-.5)*sandFlow*3)));const y=Math.max(0,Math.min(SH-1,sandY+Math.floor(Math.random()*5)));if(!sand[y*SW+x])sand[y*SW+x]=color}};
const moveSand=()=>{for(let y=SH-2;y>=0;y--){const reverse=Math.random()>.5;for(let step=0;step<SW;step++){const x=reverse?SW-1-step:step,index=y*SW+x,value=sand[index];if(!value)continue;const below=index+SW;if(!sand[below]){sand[below]=value;sand[index]=0;continue}const first=Math.random()>.5?1:-1;for(const direction of [first,-first]){const distance=Math.random()<.28?2:1,tx=x+direction*distance,target=below+direction*distance;if(tx>=0&&tx<SW&&!sand[target]){sand[target]=value;sand[index]=0;break}}}}};
const sandBuffer=document.createElement('canvas');sandBuffer.width=SW;sandBuffer.height=SH;const sandBufferContext=sandBuffer.getContext('2d')!;
const drawSand=()=>{const image=sandBufferContext.createImageData(SW,SH);for(let i=0;i<sand.length;i++){const color=sand[i],offset=i*4;image.data[offset]=(color>>16)&255;image.data[offset+1]=(color>>8)&255;image.data[offset+2]=color&255;image.data[offset+3]=color?255:0}sandContext.fillStyle='#f6f1e7';sandContext.fillRect(0,0,sandCanvas.width,sandCanvas.height);sandBufferContext.putImageData(image,0,0);sandContext.imageSmoothingEnabled=false;sandContext.drawImage(sandBuffer,0,0,sandCanvas.width,sandCanvas.height)};
const sandLoop=()=>{pourSand();for(let pass=0;pass<4;pass++)moveSand();drawSand();requestAnimationFrame(sandLoop)};
document.querySelector('#sand-clear')!.addEventListener('click',()=>sand.fill(0));
document.querySelector('#sand-save')!.addEventListener('click',()=>{const link=document.createElement('a');link.download='my-sand-garden.png';link.href=sandCanvas.toDataURL('image/png');link.click()});
sandLoop();
