/* --------------------------------------------------------------------------
	 404 Page Animations (GSAP) – Responsive + Reduced Motion
	 -------------------------------------------------------------------------- */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function startAnimations() {
	// Compute amplitudes based on viewport width for responsiveness
	const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	const base = Math.min(35, Math.max(20, vw * 0.04)); // between ~20 and 35px
	const zeroShift = base;
	const shadowShift = -Math.round(base * 1.4);

	// Clear existing tweens before re-running
	gsap.killTweensOf([".zero", ".zero-shadow"]);

	// Animate the zero with subtle parallax
	gsap.to(".zero", {
		x: zeroShift,
		duration: 1.8,
		ease: "power4.inOut",
		repeat: -1,
		yoyo: true
	});

	// Animate the shadow opposite for depth
	gsap.to(".zero-shadow", {
		x: shadowShift,
		opacity: 0.5,
		duration: 1.8,
		ease: "power4.inOut",
		repeat: -1,
		yoyo: true
	});
}

if (prefersReducedMotion) {
	// Respect reduced motion: no animation, set static state
	gsap.set(".zero", { x: 0 });
	gsap.set(".zero-shadow", { x: 0, opacity: 0.35 });
} else {
	startAnimations();
	// Recompute on resize for responsiveness
	window.addEventListener('resize', () => {
		startAnimations();
	});
}
