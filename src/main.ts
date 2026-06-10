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
  { icon: '✦', title: 'Grounding & Calm', text: 'Simple practices to help you reconnect with the present moment.', tag: 'Coming soon' },
  { icon: '◌', title: 'Reflection Tools', text: 'Gentle prompts and worksheets to support your therapeutic work.', tag: 'Coming soon' },
  { icon: '☼', title: 'Wellness Library', text: 'Curated articles, books, podcasts, and supportive resources.', tag: 'Coming soon' },
  { icon: '♡', title: 'Between Sessions', text: 'Ideas for caring for yourself and building on each session.', tag: 'Coming soon' },
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
    <section class="hero">
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
      <div class="hero-art reveal" aria-hidden="true">
        <div class="sun"></div>
        <div class="leaf leaf-one"></div><div class="leaf leaf-two"></div>
        <div class="leaf leaf-three"></div><div class="leaf leaf-four"></div>
        <div class="flower"><span></span><span></span><span></span><span></span><span></span><i></i></div>
        <p>Rooted in care.<br><strong>Growing together.</strong></p>
      </div>
    </section>

    <section class="therapist-section" id="therapists">
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

    <section class="resource-section" id="resources">
      <div class="section-heading reveal">
        <p class="eyebrow">Client resources</p>
        <h2>Support, wherever you are.</h2>
        <p>Return anytime you need a moment of reflection, reassurance, or practical support.</p>
      </div>
      <div class="resource-grid">
        ${resources.map((item) => `<article class="resource-card reveal"><span class="card-icon">${item.icon}</span><span class="tag">${item.tag}</span><h3>${item.title}</h3><p>${item.text}</p><button disabled>Explore resource <span>→</span></button></article>`).join('')}
      </div>
    </section>

    <section class="games-section" id="games">
      <div class="games-copy reveal">
        <p class="eyebrow">Mindfulness games</p>
        <h2>Leaf by leaf,<br><em>find your flow.</em></h2>
        <p>Give your mind a gentle place to focus. Arrange the falling leaves, clear each row, and let everything else be quiet for a moment.</p>
        <div class="game-stat-row"><div><span>Score</span><strong id="leaf-score">0</strong></div><div><span>Lines</span><strong id="leaf-lines">0</strong></div><div><span>Level</span><strong id="leaf-level">1</strong></div></div>
        <p class="game-note">Use arrow keys to move, up to rotate, and space to settle a piece.</p>
      </div>
      <div class="leaf-game reveal">
        <div class="game-top"><span>Leaf fall</span><button id="leaf-start">Begin</button></div>
        <div class="canvas-wrap"><canvas id="leaf-tetris" width="300" height="600" aria-label="Leaf fall block game"></canvas><div class="game-message" id="game-message">Take a breath.<br><small>Press Begin when you're ready.</small></div></div>
        <div class="touch-controls" aria-label="Game controls"><button data-move="-1">←</button><button data-rotate="true">↻</button><button data-move="1">→</button><button data-drop="true">↓</button></div>
      </div>
    </section>

    <section class="sand-section">
      <div class="sand-heading reveal">
        <div><p class="eyebrow">Mindfulness games · Sand Garden</p><h2>Pour color.<br><em>Let gravity create.</em></h2></div>
        <p>Press and hold anywhere in the garden to pour a gentle stream of sand. Move slowly, layer colors, and watch each grain find its resting place.</p>
      </div>
      <div class="sand-studio reveal">
        <div class="sand-toolbar">
          <div><span>Palette</span><div class="sand-colors" id="sand-colors"></div></div>
          <label><span>Flow</span><input id="sand-flow" type="range" min="1" max="9" value="4" /></label>
          <div class="sand-actions"><button id="sand-clear">Clear</button><button id="sand-save">Save art</button></div>
        </div>
        <canvas id="sand-canvas" width="900" height="560" aria-label="Interactive falling sand art canvas"></canvas>
        <p class="sand-hint">Click, touch, and drag to pour sand.</p>
      </div>
    </section>

    <section class="support reveal" id="support">
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
const shapes = [[[1,1,1,1]],[[2,2],[2,2]],[[0,3,0],[3,3,3]],[[4,0,0],[4,4,4]],[[0,0,5],[5,5,5]],[[0,6,6],[6,6,0]],[[7,7,0],[0,7,7]]];
let board = Array.from({length:ROWS},()=>Array(COLS).fill(0));
let piece = {shape:shapes[0],x:3,y:0};
let score=0, lines=0, lastDrop=0, running=false, animation=0;
const collides=(candidate=piece)=>candidate.shape.some((row,y)=>row.some((value,x)=>value&&(candidate.y+y>=ROWS||candidate.x+x<0||candidate.x+x>=COLS||board[candidate.y+y]?.[candidate.x+x])));
const newPiece=()=>{const shape=shapes[Math.floor(Math.random()*shapes.length)];piece={shape,x:Math.floor((COLS-shape[0].length)/2),y:0};if(collides())endGame()};
const drawLeaf=(x:number,y:number,value:number)=>{context.save();context.translate(x*SIZE+SIZE/2,y*SIZE+SIZE/2);context.rotate(((value%4)-1.5)*.18);context.fillStyle=leafColors[value];context.beginPath();context.moveTo(-10,10);context.bezierCurveTo(-15,-8,0,-15,11,-11);context.bezierCurveTo(14,2,6,14,-10,10);context.fill();context.strokeStyle='rgba(255,255,255,.55)';context.lineWidth=1.2;context.beginPath();context.moveTo(-8,9);context.lineTo(9,-9);context.stroke();context.restore()};
const drawGame=()=>{context.clearRect(0,0,canvas.width,canvas.height);context.fillStyle='#f4f7f0';context.fillRect(0,0,canvas.width,canvas.height);context.strokeStyle='rgba(23,77,42,.06)';for(let x=1;x<COLS;x++){context.beginPath();context.moveTo(x*SIZE,0);context.lineTo(x*SIZE,canvas.height);context.stroke()}for(let y=1;y<ROWS;y++){context.beginPath();context.moveTo(0,y*SIZE);context.lineTo(canvas.width,y*SIZE);context.stroke()}board.forEach((row,y)=>row.forEach((value,x)=>value&&drawLeaf(x,y,value)));piece.shape.forEach((row,y)=>row.forEach((value,x)=>value&&drawLeaf(piece.x+x,piece.y+y,value)))};
const updateStats=()=>{document.querySelector('#leaf-score')!.textContent=String(score);document.querySelector('#leaf-lines')!.textContent=String(lines);document.querySelector('#leaf-level')!.textContent=String(Math.floor(lines/8)+1)};
const settle=()=>{piece.shape.forEach((row,y)=>row.forEach((value,x)=>{if(value)board[piece.y+y][piece.x+x]=value}));let cleared=0;board=board.filter(row=>{if(row.every(Boolean)){cleared++;return false}return true});while(board.length<ROWS)board.unshift(Array(COLS).fill(0));lines+=cleared;score+=[0,100,300,600,1000][cleared];updateStats();newPiece()};
const move=(dx:number)=>{const next={...piece,x:piece.x+dx};if(!collides(next))piece=next;drawGame()};
const rotate=()=>{const shape=piece.shape[0].map((_,i)=>piece.shape.map(row=>row[i]).reverse());const next={...piece,shape};if(!collides(next))piece=next;drawGame()};
const drop=()=>{const next={...piece,y:piece.y+1};if(collides(next))settle();else piece=next;drawGame()};
const hardDrop=()=>{while(!collides({...piece,y:piece.y+1}))piece.y++;settle();drawGame()};
const endGame=()=>{running=false;cancelAnimationFrame(animation);document.querySelector('#game-message')!.innerHTML=`A quiet pause.<br><small>You gathered ${score} points. Begin again whenever you're ready.</small>`;document.querySelector('#game-message')!.classList.remove('hidden');document.querySelector('#leaf-start')!.textContent='Begin again'};
const loop=(time:number)=>{if(!running)return;if(time-lastDrop>Math.max(180,700-lines*8)){drop();lastDrop=time}animation=requestAnimationFrame(loop)};
const startGame=()=>{board=Array.from({length:ROWS},()=>Array(COLS).fill(0));score=0;lines=0;running=true;lastDrop=performance.now();newPiece();updateStats();drawGame();document.querySelector('#game-message')!.classList.add('hidden');document.querySelector('#leaf-start')!.textContent='Restart';cancelAnimationFrame(animation);animation=requestAnimationFrame(loop)};
document.querySelector('#leaf-start')!.addEventListener('click',startGame);
window.addEventListener('keydown',event=>{if(!running)return;if(['ArrowLeft','ArrowRight','ArrowDown','ArrowUp',' '].includes(event.key))event.preventDefault();if(event.key==='ArrowLeft')move(-1);if(event.key==='ArrowRight')move(1);if(event.key==='ArrowDown')drop();if(event.key==='ArrowUp')rotate();if(event.key===' ')hardDrop()});
document.querySelectorAll<HTMLButtonElement>('.touch-controls button').forEach(button=>button.addEventListener('click',()=>{if(!running)return;if(button.dataset.move)move(Number(button.dataset.move));if(button.dataset.rotate)rotate();if(button.dataset.drop)drop()}));
drawGame();

const sandCanvas = document.querySelector<HTMLCanvasElement>('#sand-canvas')!;
const sandContext = sandCanvas.getContext('2d')!;
const SW = 300, SH = 187;
const sand = new Uint8Array(SW * SH);
const sandPalette = ['#102f20','#315d3b','#6f9268','#b9a96b','#d6b393','#a87869','#e7d7bd','#f4eee1'];
let sandColor = 4, sandFlow = 4, pouring = false, sandX = SW / 2, sandY = 10;
document.querySelector('#sand-colors')!.innerHTML = sandPalette.map((color,index)=>`<button style="--sand:${color}" data-color="${index}" aria-label="Choose sand color ${index+1}"></button>`).join('');
document.querySelector<HTMLButtonElement>('[data-color="4"]')!.classList.add('active');
document.querySelectorAll<HTMLButtonElement>('[data-color]').forEach(button=>button.addEventListener('click',()=>{sandColor=Number(button.dataset.color);document.querySelectorAll('[data-color]').forEach(item=>item.classList.remove('active'));button.classList.add('active')}));
document.querySelector<HTMLInputElement>('#sand-flow')!.addEventListener('input',event=>sandFlow=Number((event.target as HTMLInputElement).value));
const sandPosition=(event:PointerEvent)=>{const rect=sandCanvas.getBoundingClientRect();sandX=Math.floor((event.clientX-rect.left)/rect.width*SW);sandY=Math.floor((event.clientY-rect.top)/rect.height*SH)};
sandCanvas.addEventListener('pointerdown',event=>{pouring=true;sandCanvas.setPointerCapture(event.pointerId);sandPosition(event)});
sandCanvas.addEventListener('pointermove',event=>{if(pouring)sandPosition(event)});
sandCanvas.addEventListener('pointerup',()=>pouring=false);
const pourSand=()=>{if(!pouring)return;for(let i=0;i<sandFlow*2;i++){const x=Math.max(0,Math.min(SW-1,sandX+Math.floor((Math.random()-.5)*sandFlow*2)));const y=Math.max(0,Math.min(SH-1,sandY+Math.floor(Math.random()*3)));if(!sand[y*SW+x])sand[y*SW+x]=sandColor+1}};
const moveSand=()=>{for(let y=SH-2;y>=0;y--){const reverse=Math.random()>.5;for(let step=0;step<SW;step++){const x=reverse?SW-1-step:step;const index=y*SW+x;if(!sand[index])continue;const below=index+SW;if(!sand[below]){sand[below]=sand[index];sand[index]=0;continue}const direction=Math.random()>.5?1:-1;const diagonal=below+direction;if(x+direction>=0&&x+direction<SW&&!sand[diagonal]){sand[diagonal]=sand[index];sand[index]=0}}}};
const drawSand=()=>{const image=sandContext.createImageData(SW,SH);for(let i=0;i<sand.length;i++){const color=sandPalette[Math.max(0,sand[i]-1)];const rgb=color.match(/\w\w/g)!.map(value=>parseInt(value,16));const offset=i*4;image.data[offset]=rgb[0];image.data[offset+1]=rgb[1];image.data[offset+2]=rgb[2];image.data[offset+3]=sand[i]?255:0}sandContext.fillStyle='#f6f1e7';sandContext.fillRect(0,0,sandCanvas.width,sandCanvas.height);const buffer=document.createElement('canvas');buffer.width=SW;buffer.height=SH;buffer.getContext('2d')!.putImageData(image,0,0);sandContext.imageSmoothingEnabled=false;sandContext.drawImage(buffer,0,0,sandCanvas.width,sandCanvas.height)};
const sandLoop=()=>{pourSand();moveSand();drawSand();requestAnimationFrame(sandLoop)};
document.querySelector('#sand-clear')!.addEventListener('click',()=>sand.fill(0));
document.querySelector('#sand-save')!.addEventListener('click',()=>{const link=document.createElement('a');link.download='my-sand-garden.png';link.href=sandCanvas.toDataURL('image/png');link.click()});
sandLoop();
