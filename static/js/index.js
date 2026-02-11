function scrollToTop(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMoreWorks(){
  const el = document.getElementById('moreWorksDropdown');
  if(!el) return;
  el.classList.toggle('open');
}

function copyBibTeX(){
  const el = document.getElementById('bibtex-code');
  if(!el) return;
  const text = el.innerText;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.copy-bibtex-btn .copy-text');
    if(btn){
      const old = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => btn.textContent = old, 1200);
    }
  }).catch(() => {
    // fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  });
}

window.addEventListener('scroll', () => {
  const btn = document.querySelector('.scroll-to-top');
  if(!btn) return;
  btn.style.display = (window.scrollY > 300) ? 'flex' : 'none';
});

// close dropdown when clicking outside
document.addEventListener('click', (e) => {
  const dd = document.getElementById('moreWorksDropdown');
  const container = document.querySelector('.more-works-container');
  if(!dd || !container) return;
  if(!container.contains(e.target)){
    dd.classList.remove('open');
  }
});
