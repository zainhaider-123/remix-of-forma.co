/* Static build of the Forma.co page: scroll animations + product carousel. */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- Heading letter/word stagger ---------------- */
  document.querySelectorAll('[data-stagger]').forEach(function (el) {
    var words = el.textContent.split(' ');
    el.textContent = '';
    words.forEach(function (word, i) {
      var span = document.createElement('span');
      span.textContent = word + (i < words.length - 1 ? '\u00a0' : '');
      span.style.transitionDelay = (i * 0.06) + 's';
      el.appendChild(span);
    });
  });

  /* ---------------- Per-element delays ---------------- */
  document.querySelectorAll('[data-fade-up]').forEach(function (el) {
    var d = parseInt(el.getAttribute('data-delay') || '0', 10);
    if (d) el.style.transitionDelay = d + 'ms';
  });

  document.querySelectorAll('[data-fade-scale]').forEach(function (el) {
    var i = parseInt(el.getAttribute('data-index') || '0', 10);
    if (i) el.style.transitionDelay = (i * 100) + 'ms';
  });

  /* ---------------- Reveal on scroll (once) ---------------- */
  var revealTargets = document.querySelectorAll('[data-fade-up], [data-fade-scale], [data-stagger]');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });

    // One frame in the initial state first, so above-the-fold items animate visibly.
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        revealTargets.forEach(function (el) { observer.observe(el); });
      });
    });
  }

  /* ---------------- Hero video reveal ---------------- */
  var heroWrap = document.getElementById('heroVideoWrap');
  var heroVideo = document.getElementById('heroVideo');
  if (heroWrap && heroVideo) {
    var showHero = function () { heroWrap.classList.add('is-visible'); };
    if (reduceMotion || heroVideo.readyState >= 2) {
      showHero();
    } else {
      heroVideo.addEventListener('loadeddata', showHero, { once: true });
      setTimeout(showHero, 2500); // fallback if the video never reports data
    }
  }

  /* ---------------- Product carousel ---------------- */
  var products = [
    { title: 'Drive', subtitle: 'Cloud file\naggregator', image: 'assets/products/drive.png', dark: false },
    { title: 'Connect', subtitle: 'Everything for\ncommunication', image: 'assets/products/connect.png', dark: true },
    { title: 'Calendar', subtitle: 'Smart meeting\nplanner built in', image: 'assets/products/calendar.png', dark: false },
    { title: 'Video', subtitle: 'Video calls via\nyour inbox', image: 'assets/products/video.png', dark: true },
    { title: 'Cloud', subtitle: 'Secure file\nstorage', image: 'assets/products/cloud.png', dark: false },
    { title: 'Giving', subtitle: 'We help people and\ncharitable causes', image: 'assets/products/giving.png', dark: true },
    { title: 'Tasks', subtitle: 'Get things done\nwith ease', image: 'assets/products/tasks.png', dark: false },
    { title: 'Feed', subtitle: 'Daily digest and\npersonal picks', image: 'assets/products/feed.png', dark: true },
    { title: 'Voice', subtitle: 'Friendly voice\nassistant', image: 'assets/products/voice.png', dark: false },
    { title: 'Browser', subtitle: 'Fast and secure\nweb browser', image: 'assets/products/browser.png', dark: true },
    { title: 'Stream', subtitle: 'A video service\nthat entertains', image: 'assets/products/stream.png', dark: false },
    { title: 'Mail', subtitle: 'The email service\nof tomorrow', image: 'assets/products/mail.png', dark: true }
  ];

  var track = document.getElementById('carouselTrack');
  if (!track) return;

  function buildCard(product) {
    var item = document.createElement('div');
    item.className = 'carousel-item';
    item.setAttribute('data-card', '');

    var card = document.createElement('div');
    card.className = 'carousel-card';

    var thumb = document.createElement('div');
    thumb.className = 'carousel-thumb';
    var img = document.createElement('img');
    img.src = product.image;
    img.alt = product.title;
    img.loading = 'lazy';
    img.draggable = false;
    thumb.appendChild(img);

    var caption = document.createElement('span');
    caption.className = 'carousel-caption ' + (product.dark ? 'on-dark' : 'on-light');
    var title = document.createElement('span');
    title.className = 'carousel-title';
    title.textContent = product.title;
    var sub = document.createElement('span');
    sub.className = 'carousel-sub';
    sub.textContent = product.subtitle;
    caption.appendChild(title);
    caption.appendChild(sub);

    card.appendChild(thumb);
    card.appendChild(caption);
    item.appendChild(card);
    return item;
  }

  // Two passes of the list give us a seamless loop.
  products.concat(products).forEach(function (p) { track.appendChild(buildCard(p)); });

  function cardWidth() {
    var card = track.querySelector('[data-card]');
    return card ? card.getBoundingClientRect().width : 0;
  }

  function loopWidth() {
    return cardWidth() * products.length;
  }

  function normalize() {
    var loop = loopWidth();
    if (!loop) return;
    if (track.scrollLeft >= loop) {
      track.style.scrollBehavior = 'auto';
      track.scrollLeft -= loop;
      track.style.scrollBehavior = '';
    } else if (track.scrollLeft < 0) {
      track.style.scrollBehavior = 'auto';
      track.scrollLeft += loop;
      track.style.scrollBehavior = '';
    }
  }

  function step(direction) {
    normalize();
    track.scrollTo({
      left: track.scrollLeft + direction * cardWidth(),
      behavior: reduceMotion ? 'auto' : 'smooth'
    });
  }

  document.getElementById('carouselPrev').addEventListener('click', function () { step(-1); });
  document.getElementById('carouselNext').addEventListener('click', function () { step(1); });
  track.addEventListener('scroll', function () {
    if (!dragging) normalize();
  });

  /* Auto-advance, paused on hover, focus or drag */
  var timer = null;
  var paused = false;

  function start() {
    if (timer || reduceMotion) return;
    timer = setInterval(function () { if (!paused) step(1); }, 2000);
  }
  function stop() { clearInterval(timer); timer = null; }

  track.addEventListener('mouseenter', function () { paused = true; });
  track.addEventListener('mouseleave', function () { paused = false; });
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stop(); else start();
  });
  start();

  /* Drag / swipe */
  var dragging = false;
  var startX = 0;
  var startScroll = 0;
  var moved = false;

  track.addEventListener('pointerdown', function (e) {
    dragging = true;
    moved = false;
    paused = true;
    startX = e.clientX;
    startScroll = track.scrollLeft;
    track.classList.add('dragging');
    track.setPointerCapture(e.pointerId);
  });

  track.addEventListener('pointermove', function (e) {
    if (!dragging) return;
    var delta = e.clientX - startX;
    if (Math.abs(delta) > 3) moved = true;
    track.scrollLeft = startScroll - delta;
  });

  function endDrag(e) {
    if (!dragging) return;
    dragging = false;
    paused = false;
    track.classList.remove('dragging');
    if (e && e.pointerId !== undefined && track.hasPointerCapture(e.pointerId)) {
      track.releasePointerCapture(e.pointerId);
    }
    normalize();
  }

  track.addEventListener('pointerup', endDrag);
  track.addEventListener('pointercancel', endDrag);
  track.addEventListener('click', function (e) {
    if (moved) { e.preventDefault(); e.stopPropagation(); }
  }, true);
})();
