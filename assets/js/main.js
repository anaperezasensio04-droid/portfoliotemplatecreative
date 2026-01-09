/**
 * Portfolio JavaScript - Scroll Animations & Interactions
 * IntersectionObserver-based animations with accessibility support
 */

// IntersectionObserver Configuration
const observerOptions = {
	root: null,
	rootMargin: '0px 0px -10% 0px',
	threshold: 0.1,
};

// Callback for single-element reveals
const revealOnScroll = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
			observer.unobserve(entry.target);
		}
	});
};

// Callback for staggered container reveals
const revealStaggered = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('revealed');
			observer.unobserve(entry.target);
		}
	});
};

// Create observer instances
const singleObserver = new IntersectionObserver(revealOnScroll, observerOptions);
const staggerObserver = new IntersectionObserver(revealStaggered, observerOptions);

// Initialize scroll animations
function initScrollAnimations() {
	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (prefersReducedMotion) {
		document.querySelectorAll('.animate-on-scroll').forEach((el) => {
			el.classList.add('visible');
		});
		document.querySelectorAll('[data-reveal-stagger]').forEach((el) => {
			el.classList.add('revealed');
		});
		return;
	}

	document.querySelectorAll('.animate-on-scroll').forEach((el) => {
		singleObserver.observe(el);
	});

	document.querySelectorAll('[data-reveal-stagger]').forEach((el) => {
		staggerObserver.observe(el);
	});
}

// Smooth scroll for anchor links
function initSmoothScroll() {
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', function (e) {
			const href = this.getAttribute('href');
			if (href === '#') return;

			e.preventDefault();
			const target = document.querySelector(href);
			if (!target) return;

			const headerOffset = 80;
			const elementPosition = target.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			});

			if (history.pushState) {
				history.pushState(null, null, href);
			}
		});
	});
}

// Mobile navigation toggle
function initMobileNav() {
	const navToggle = document.querySelector('.nav-toggle');
	const nav = document.querySelector('.nav');
	const navLinks = document.querySelectorAll('.nav-links a');

	if (!navToggle) return;

	navToggle.addEventListener('click', () => {
		nav.classList.toggle('open');
	});

	navLinks.forEach((link) => {
		link.addEventListener('click', () => {
			nav.classList.remove('open');
		});
	});

	document.addEventListener('click', (e) => {
		if (!nav.contains(e.target) && nav.classList.contains('open')) {
			nav.classList.remove('open');
		}
	});
}

// Services accordion
function initServicesAccordion() {
	const serviceHeaders = document.querySelectorAll('.service-header');

	serviceHeaders.forEach((header) => {
		header.addEventListener('click', () => {
			const item = header.parentElement;
			const wasActive = item.classList.contains('active');

			document.querySelectorAll('.service-item').forEach((otherItem) => {
				otherItem.classList.remove('active');
			});

			if (!wasActive) {
				item.classList.add('active');
			}
		});
	});
}

// Initialize all on DOM ready
// Highlight nav link based on scroll position
function initActiveNavLink() {
	const sections = [
		{ id: 'hero', nav: 'hero' },
		{ id: 'about', nav: 'about' },
		{ id: 'projects', nav: 'projects' },
		{ id: 'services', nav: 'services' },
		{ id: 'contact', nav: 'contact' }
	];
	const navLinks = document.querySelectorAll('.nav-links a');

	// Eliminar clase active al hacer clic (solo scroll la controla)
	navLinks.forEach(link => {
		link.addEventListener('click', function() {
			navLinks.forEach(l => l.classList.remove('active'));
		});
	});

	function onScroll() {
		let current = '';
		const scrollY = window.pageYOffset;
		sections.forEach(section => {
			const el = document.getElementById(section.id);
			if (el) {
				const sectionTop = el.offsetTop - 120;
				if (scrollY >= sectionTop) {
					current = section.nav;
				}
			}
		});
		navLinks.forEach(link => {
			link.classList.remove('active');
			const href = link.getAttribute('href');
			if (href === `#${current}`) {
				link.classList.add('active');
			}
		});
	}
	window.addEventListener('scroll', onScroll);
	onScroll();
}

document.addEventListener('DOMContentLoaded', () => {
	initScrollAnimations();
	initSmoothScroll();
	initMobileNav();
	initServicesAccordion();
	initActiveNavLink();
});
