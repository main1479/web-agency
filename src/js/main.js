// ========================================
// MOBILE NAV
// ========================================
const navButton = document.querySelector('.nav__button');
const navTriggers = document.querySelectorAll('.menu__trigger');
const nav = document.querySelector('.nav');

navTriggers.forEach((btn) => {
	btn.addEventListener('click', () => {
		nav.classList.toggle('active');
		navButton.classList.toggle('active');
	});
});

// =======================================
// sticky nav
// =======================================
const stickyNav = (entries) => {
	const [entry] = entries;
	console.log(entry.isIntersecting);
	if (!entry.isIntersecting) nav.classList.add('sticky');
	else nav.classList.remove('sticky');
};
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);
const headerObserver = new IntersectionObserver(stickyNav, {
	root: null,
	threshold: 0,
	rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// ===================================================
// TESTIMONIAL SLIDER ACTIVE
// ===================================================
$('.testimonial__slider').owlCarousel({
	loop: true,
	margin: -100,
	nav: true,
	center: true,
	smartSpeed: 1000,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 2,
		},
		1000: {
			items: 3,
			nav: true,
		},
	},
});

// ===================================================
// BRANDS SLIDER ACTIVE
// ===================================================
$('.brands__slider').owlCarousel({
	loop: true,
	margin: 50,
	nav: true,
	smartSpeed: 1000,
	responsive: {
		0: {
			items: 2,
		},
		600: {
			items: 3,
		},
		1000: {
			items: 6,
			nav: true,
		},
	},
});
