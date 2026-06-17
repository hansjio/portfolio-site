/* ═══════════ PAGE SCRIPT ═══════════ */

function buildBlogSidebar(activeKey){
  const list=document.getElementById('blog-sidebar-list');
  list.innerHTML='';
  Object.entries(BLOG_POSTS).forEach(([key,post])=>{
    const item=document.createElement('div');
    item.className=`blog-sidebar-item${key===activeKey?' active':''}`;
    item.dataset.postKey=key;
    item.innerHTML=`<div><span class="si-icon">□</span><span class="si-title">${post.title}</span></div><div class="si-meta"><span class="si-date">${post.date}</span><span class="si-read">· ${post.readtime}</span></div><div class="si-excerpt">${BLOG_POSTS[key].body.replace(/<[^>]+>/g,'').trim().slice(0,100)}...</div>`;
    item.addEventListener('click',()=>loadBlogPost(key));
    list.appendChild(item);
  });
}

function loadBlogPost(key){
  const post=BLOG_POSTS[key];
  if(!post) return;
  document.querySelectorAll('.blog-sidebar-item').forEach(el=>el.classList.toggle('active',el.dataset.postKey===key));
  const tagsHtml=post.tags.map(t=>`<span class="art-tag">${t}</span>`).join('');
  document.getElementById('blog-article-content').innerHTML=`<div class="blog-article"><div class="art-category">${post.category}</div><div class="art-title">${post.title}</div><div class="art-meta"><span class="art-date">${post.date}</span><span class="art-readtime">${post.readtime}</span><div class="art-tags">${tagsHtml}</div></div><div class="art-body">${post.body}</div></div>`;
  document.querySelector('.blog-article-wrap').scrollTop=0;
}

function openBlogModal(postKey){
  buildBlogSidebar(postKey||null);
  if(postKey) loadBlogPost(postKey);
  else document.getElementById('blog-article-content').innerHTML=`<div class="art-placeholder"><div class="art-ph-ico">◎</div><div class="art-ph-txt">Select a post from the list to read it</div></div>`;
  document.getElementById('blog-modal').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeBlogModal(){
  document.getElementById('blog-modal').classList.remove('open');
  document.body.style.overflow='';
}

document.getElementById('blog-modal-close').addEventListener('click',closeBlogModal);
document.getElementById('blog-modal-backdrop').addEventListener('click',closeBlogModal);
document.getElementById('open-blog-modal').addEventListener('click',()=>openBlogModal(null));

const blogCount=Object.keys(BLOG_POSTS).length;
const projectCount=Object.keys(PROJECTS).length;
document.getElementById('open-blog-modal').textContent=`Browse All Posts → ${blogCount} total`;
const projectCountEl=document.getElementById('project-count');
if(projectCountEl) projectCountEl.textContent=`${projectCount} projects`;

document.querySelectorAll('.blog-row[data-post]').forEach(row=>{
  row.addEventListener('click',()=>openBlogModal(row.dataset.post));
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&document.getElementById('blog-modal').classList.contains('open'))closeBlogModal();
});

/* ═══════════ PROJECT MODAL ═══════════ */
function buildModal(key){
  const p=PROJECTS[key]; if(!p) return;
  document.getElementById('modal-breadcrumb-name').textContent=p.title;

  let h='';

  // Badge
  if(p.badge) h+=`<div class="modal-badge">${p.badge}</div>`;

  // Large title + period subtitle
  h+=`<div class="modal-title">${p.title}</div>`;
  h+=`<div class="modal-period">${p.label} &bull; ${p.period}</div>`;

  // Button row — Visit Project only (add githubLink to project data for GitHub button)
  if(p.link || p.githubLink){
    h+=`<div class="modal-btn-row">`;
    if(p.link) h+=`<a href="${p.link}" target="_blank" class="modal-btn"><span class="modal-btn-ico">↗</span>${p.linkText||'Visit Project'}</a>`;
    if(p.githubLink) h+=`<a href="${p.githubLink}" target="_blank" class="modal-btn"><span class="modal-btn-ico">⊙</span>GitHub Repo</a>`;
    h+=`</div>`;
  }

  // Metrics (if any)
  if(p.metrics){
    h+=`<div class="modal-metrics">`;
    p.metrics.forEach(m=>h+=`<div class="modal-metric"><div class="m-val">${m.val}</div><div class="m-lbl">${m.lbl}</div></div>`);
    h+=`</div>`;
  }

  // Tech Stack
  h+=`<div class="modal-section">`;
  h+=`<div class="modal-section-label">Tech Stack</div>`;
  h+=`<div class="modal-stack">`;
  p.stack.forEach(t=>h+=`<span class="modal-tag">${t}</span>`);
  h+=`</div></div>`;

  // Tasks
  h+=`<div class="modal-section">`;
  h+=`<div class="modal-section-label">Tasks</div>`;
  h+=`<div class="modal-tasks">`;
  p.tasks.forEach(t=>h+=`<span class="modal-task">${t}</span>`);
  h+=`</div></div>`;

  // References & Diagrams
  if(p.refs){
    h+=`<div class="modal-section">`;
    h+=`<div class="modal-section-label">References & Diagrams</div>`;
    h+=`<div class="modal-refs">`;
    p.refs.forEach(r => {
      if(r.file){
        // opens in the ref viewer modal
        h += `<a href="javascript:void(0)" class="modal-ref" data-ref-label="${r.label}" data-ref-file="${r.file}"><span class="modal-ref-icon">${r.icon}</span>${r.label}<span style="font-size:7px;color:var(--text-mute);margin-left:auto">View File</span></a>`;
      } else if(r.url){
        // opens external link in new tab
        h += `<a href="${r.url}" target="_blank" class="modal-ref"><span class="modal-ref-icon">${r.icon}</span>${r.label}<span style="font-size:7px;color:var(--amber-dim);margin-left:auto">↗ External</span></a>`;
      } else {
        h += `<a href="javascript:void(0)" class="modal-ref"><span class="modal-ref-icon">${r.icon}</span>${r.label}<span style="font-size:7px;color:var(--text-mute);margin-left:auto">No file</span></a>`;
      }
    });
    h+=`</div></div>`;
  }

  // Origin / Overview — serif heading + readable body text
  h+=`<div class="modal-origin-heading">Origin</div>`;
  h+=`<div class="modal-body-txt">${p.body}</div>`;

  document.getElementById('modal-content-area').innerHTML=h;
  // Wire up ref clicks (after innerHTML is set)
  document.querySelectorAll('.modal-ref[data-ref-file]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      openRefModal(el.dataset.refLabel, el.dataset.refFile);
    });
  });
  document.querySelector('.modal-left').scrollTop=0;

  // Slides
  const slides=p.slides;
  document.getElementById('modal-slide-count').textContent=`${slides.length} Slide${slides.length>1?'s':''}`;
  const stack=document.getElementById('modal-slides-stack');
  stack.innerHTML='';
  slides.forEach((s,i)=>{
    const card=document.createElement('div');
    card.className='vis-slide-card';
    const media = s.img 
      ? `<img src="${s.img}" alt="${s.label}" style="width:100%;height:auto;display:block;" />`
      : `<div class="vis-ph"><div class="vis-ph-ico">${s.ph}</div><div class="vis-ph-txt">${s.label}</div></div>`;
    card.innerHTML=`${media}<div class="vis-slide-label">${s.label}</div><div class="vis-slide-num">${i+1}/${slides.length}</div>`;
    stack.appendChild(card);
  });
}

function openModal(k){buildModal(k);document.getElementById('proj-modal').classList.add('open');document.body.style.overflow='hidden';}
function closeModal(){document.getElementById('proj-modal').classList.remove('open');document.body.style.overflow='';}

document.getElementById('modal-close-btn').addEventListener('click',closeModal);
document.getElementById('modal-backdrop').addEventListener('click',closeModal);
document.querySelectorAll('[data-project]').forEach(c=>c.addEventListener('click',()=>openModal(c.dataset.project)));
document.addEventListener('keydown',e=>{
  if(!document.getElementById('proj-modal').classList.contains('open'))return;
  if(e.key==='Escape')closeModal();
});

/* ═══════════ GALLERY ═══════════ */
const GAL_DATA = GALLERY;

function adjustGridSpans() {
  document.querySelectorAll('.proj-grid, .lab-grid').forEach(grid => {
    const cards = Array.from(grid.children);
    let col = 0;
    cards.forEach(card => card.classList.remove('lone-card'));
    cards.forEach((card, index) => {
      const isLast = (index === cards.length - 1);
      const isFeatured = card.classList.contains('featured-card') || card.style.gridColumn === 'span 2';
      if (isFeatured) {
        col = 0;
      } else {
        if (isLast && col === 0) {
          card.classList.add('lone-card');
        }
        col = (col === 0) ? 1 : 0;
      }
    });
  });
}
adjustGridSpans();

// Add this function to build the track from data
function buildGallery() {
  const track = document.getElementById('gallery-track');
  track.innerHTML = '';
  GALLERY.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'gal-item';
    div.style.width = item.width;
    // remove div.style.height — let image decide
    div.dataset.idx = i;

    const inner = item.img
      ? `<img src="${item.img}" alt="${item.title}" style="width:100%;height:auto;display:block;" />`
      : `<div class="gal-ph"><div class="gal-ph-ico">◎</div><div class="gal-ph-lbl">${item.title}</div></div>`;

    div.innerHTML = `
      ${inner}
      <div class="gal-overlay">
        <div class="gal-ov-title">${item.title}</div>
        <div class="gal-ov-sub">${item.sub}</div>
      </div>
    `;
    track.appendChild(div);
  });
}

// Call it before the gallery observer code
buildGallery();

['spr-top','spr-bot'].forEach(id=>{
  const el=document.getElementById(id);
  for(let i=0;i<100;i++){const h=document.createElement('div');h.className='spr-edge-hole';el.appendChild(h);}
});

const galTrack=document.getElementById('gallery-track');
const galItems=[...galTrack.querySelectorAll('.gal-item')];
const galObs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){const i=galItems.indexOf(e.target);setTimeout(()=>e.target.classList.add('appeared'),i*60);galObs.unobserve(e.target);}});},{threshold:.05,rootMargin:'0px 200px 0px 0px'});
galItems.forEach(el=>galObs.observe(el));

// Desktop — click and drag to scroll (no momentum, just direct)
let isDrag = false, dStartX = 0, dScrollL = 0, didDrag = false;

galTrack.addEventListener('mousedown', e => {
  isDrag = true;
  didDrag = false;
  dStartX = e.pageX;
  dScrollL = galTrack.scrollLeft;
  galTrack.style.cursor = 'grabbing';
  e.preventDefault();
});

window.addEventListener('mouseup', () => {
  if (!isDrag) return;
  isDrag = false;
  galTrack.style.cursor = 'grab';
});

window.addEventListener('mousemove', e => {
  if (!isDrag) return;
  const dx = e.pageX - dStartX;
  if (Math.abs(dx) > 4) didDrag = true;
  galTrack.scrollLeft = dScrollL - dx;
});

document.querySelectorAll('.cert-view').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    openRefModal(btn.dataset.label, btn.dataset.file);
  });
});

let glbCur=0;
function openGlb(i){glbCur=i;renderGlb();document.getElementById('gal-lb').classList.add('open');document.body.style.overflow='hidden';}
function closeGlb(){document.getElementById('gal-lb').classList.remove('open');document.body.style.overflow='';}
function renderGlb(){
  const d = GAL_DATA[glbCur];
  const wrap = document.getElementById('glb-wrap');

  if(d.img){
    wrap.innerHTML = `<img src="${d.img}" alt="${d.title}" style="max-width:88vw;max-height:80vh;object-fit:contain;" />`;
  } else {
    wrap.innerHTML = `<div class="glb-ph-box"><div class="glb-ph-ico">◎</div><div class="glb-ph-lbl">${d.title}</div></div>`;
  }

  document.getElementById('glb-cap').textContent = `${d.title} — ${d.sub}`;
  document.getElementById('glb-count').textContent = `${glbCur+1} / ${GAL_DATA.length}`;
}

galItems.forEach((el,i)=>el.addEventListener('click',()=>{if(!didDrag)openGlb(i);}));
document.getElementById('glb-close').addEventListener('click',closeGlb);
document.getElementById('glb-prev').addEventListener('click',()=>{glbCur=(glbCur-1+GAL_DATA.length)%GAL_DATA.length;renderGlb();});
document.getElementById('glb-next').addEventListener('click',()=>{glbCur=(glbCur+1)%GAL_DATA.length;renderGlb();});
document.getElementById('gal-lb').addEventListener('click',e=>{if(e.target===document.getElementById('gal-lb'))closeGlb();});
document.addEventListener('keydown',e=>{if(document.getElementById('gal-lb').classList.contains('open')){if(e.key==='Escape')closeGlb();if(e.key==='ArrowLeft'){glbCur=(glbCur-1+GAL_DATA.length)%GAL_DATA.length;renderGlb();}if(e.key==='ArrowRight'){glbCur=(glbCur+1)%GAL_DATA.length;renderGlb();}}});

/* ═══════════ CURSOR ═══════════ */
const ring = document.getElementById('cursor-ring'), dot = document.getElementById('cursor-dot');
const hasTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (!hasTouch && ring && dot) {
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    // Hardware-accelerated translate3d offset by 2.5px (half of 5px width/height)
    dot.style.transform = `translate3d(${mx - 2.5}px, ${my - 2.5}px, 0)`;
  });
  
  (function loop() {
    rx += (mx - rx) * 0.11;
    ry += (my - ry) * 0.11;
    // Hardware-accelerated translate3d offset by 17px (half of 34px width/height)
    ring.style.transform = `translate3d(${rx - 17}px, ${ry - 17}px, 0)`;
    requestAnimationFrame(loop);
  })();

  // Optimized Event Delegation (only 2 global listeners instead of hundreds)
  const interactiveSelectors = 'a, button, .proj-card, .lab-card, .blog-row, .edu-card, .tl-item, .h-chip, .h-tag, .frame-dot, .gal-item, .c-card, .gear-item, .blog-sidebar-item, .theme-toggle';
  
  document.addEventListener('mouseover', e => {
    if (e.target.closest(interactiveSelectors)) {
      document.body.classList.add('c-hover');
    }
  });
  
  document.addEventListener('mouseout', e => {
    const target = e.target.closest(interactiveSelectors);
    if (target) {
      if (!e.relatedTarget || !e.relatedTarget.closest(interactiveSelectors)) {
        document.body.classList.remove('c-hover');
      }
    }
  });
} else {
  // If touch is detected, make sure default cursor behavior is fallback
  document.body.classList.remove('c-hover');
  if (ring) ring.style.display = 'none';
  if (dot) dot.style.display = 'none';
}

/* ═══════════ THEME ═══════════ */
const sunSvg = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
const moonSvg = `<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

let dark=true;
document.getElementById('theme-toggle').addEventListener('click',()=>{
  dark=!dark;
  document.documentElement.setAttribute('data-theme',dark?'dark':'light');
  document.getElementById('t-icon').innerHTML=dark?moonSvg:sunSvg;
});

/* ═══════════ FILM LINES ═══════════ */
const fl=document.getElementById('filmLines');
for(let i=0;i<18;i++){const l=document.createElement('div');l.className='film-line';const h=40+Math.random()*160;l.style.cssText=`left:${5+i*5.3}%;height:${h}px;animation-delay:${Math.random()*3}s;animation-duration:${2.5+Math.random()*2}s`;fl.appendChild(l);}

/* ═══════════ SCROLL REVEAL ═══════════ */
const ro=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

/* ═══════════ SECTION NAV ═══════════ */
const so=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)document.querySelectorAll('.frame-dot').forEach(d=>d.classList.toggle('active',d.dataset.sec===e.target.id));});},{threshold:.3});
document.querySelectorAll('section[id]').forEach(s=>so.observe(s));

/* ═══════════ TABS ═══════════ */
document.querySelectorAll('.t-btn').forEach(btn=>{btn.addEventListener('click',()=>{document.querySelectorAll('.t-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');document.querySelectorAll('.proj-panel').forEach(p=>p.classList.remove('on'));document.getElementById('tab-'+btn.dataset.tab).classList.add('on');adjustGridSpans();setTimeout(()=>{document.querySelectorAll('.reveal').forEach(el=>{if(el.getBoundingClientRect().top<window.innerHeight*.9)el.classList.add('visible')});},60);});});

/* ═══════════ SMOOTH ANCHOR LINKS ═══════════ */
document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(a=>{a.addEventListener('click',e=>{e.preventDefault();const t=document.querySelector(a.getAttribute('href'));if(t)t.scrollIntoView({behavior:'smooth'});});});

/* ═══════════ CONTACT FORM ═══════════ */
document.querySelectorAll('.cf-stag').forEach(btn=>{btn.addEventListener('click',()=>{document.querySelectorAll('.cf-stag').forEach(b=>b.classList.remove('sel'));btn.classList.add('sel');document.getElementById('cf-subject').value=btn.textContent;if(btn.id!=='cf-others-btn'){document.getElementById('cf-others').style.display='none';document.getElementById('cf-others').value='';}});});
document.getElementById('cf-others-btn').addEventListener('click',()=>{const o=document.getElementById('cf-others');o.style.display='block';o.focus();document.getElementById('cf-subject').value='Others';});
document.getElementById('cf-others').addEventListener('input',e=>{document.getElementById('cf-subject').value=e.target.value;});

/* ═══════════ REF VIEWER ═══════════ */
function openRefModal(label, file) {
  const modal = document.getElementById('ref-modal');
  const body = document.getElementById('ref-modal-body');
  const lbl = document.getElementById('ref-modal-label');
  const dl = document.getElementById('ref-modal-download');

  lbl.textContent = label;
  dl.href = file;

  const ext = file.split('.').pop().toLowerCase();
  if (['png','jpg','jpeg','gif','webp','svg'].includes(ext)) {
    body.innerHTML = `<img src="${file}" alt="${label}" />`;
  } else if (ext === 'pdf') {
    body.innerHTML = `<iframe src="${file}"></iframe>`;
  } else {
    body.innerHTML = `<div class="ref-ph"><div class="ref-ph-ico">◎</div><div class="ref-ph-txt">Cannot preview this file type.<br>Use the link above to open it.</div></div>`;
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeRefModal() {
  document.getElementById('ref-modal').classList.remove('open');
  document.getElementById('ref-modal-body').innerHTML = '';
  document.body.style.overflow = '';
}

document.getElementById('ref-modal-close').addEventListener('click', closeRefModal);
document.getElementById('ref-modal').addEventListener('click', e => {
  if (e.target === document.getElementById('ref-modal')) closeRefModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.getElementById('ref-modal').classList.contains('open')) closeRefModal();
});