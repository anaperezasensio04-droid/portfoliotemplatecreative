/* --------------------------------------------------------------------------
   Modal System for Projects
   -------------------------------------------------------------------------- */

// Project data
const projects = {
	'img-a': {
		title: 'Olympics Poster Design',
		category: 'Motion Design / Branding',
		media: {
			type: 'video',
			src: 'https://ik.imagekit.io/cohwnscdit/06_POSTERSMOCKUP.mp4'
		},
		description: 'A dynamic motion design project for the Olympics, featuring bold typography and vibrant color schemes that capture the energy and spirit of international competition.',
		tags: ['Motion Design', 'Branding', 'Typography', 'After Effects']
	},
	'img-b': {
		title: 'Tote Bag Design',
		category: 'Product Design / Illustration',
		media: {
			type: 'image',
			src: 'https://ik.imagekit.io/cohwnscdit/Captura%20de%20pantalla%202026-01-05%20122730.png'
		},
		description: 'A creative illustration for eco-friendly tote bags, combining bold graphics with sustainable messaging to create a unique wearable art piece.',
		tags: ['Illustration', 'Product Design', 'Print Design']
	},
	'img-c': {
		title: 'Rosalía Album Concept',
		category: 'Album Art / Visual Identity',
		media: {
			type: 'image',
			src: 'https://ik.imagekit.io/cohwnscdit/Captura%20de%20pantalla%202026-01-05%20112336.png'
		},
		description: 'Visual identity concept for a music album, exploring themes of cultural heritage and contemporary aesthetics through expressive illustration and typography.',
		tags: ['Album Art', 'Visual Identity', 'Illustration', 'Photoshop']
	},
	'img-e': {
		title: 'Youth Culture Editorial',
		category: 'Editorial Design / Photography',
		media: {
			type: 'image',
			src: 'https://ik.imagekit.io/cohwnscdit/IMG_2950.jpeg'
		},
		description: 'Editorial photography exploring youth culture and contemporary identity, featuring bold compositions and expressive visual storytelling.',
		tags: ['Photography', 'Editorial', 'Art Direction']
	},
	'img-f': {
		title: 'Alternative Media',
		category: 'Motion Graphics / Digital Art',
		media: {
			type: 'video',
			src: 'https://ik.imagekit.io/cohwnscdit/PRESENTACI%C3%93N%20VIDEO%20(1).mp4'
		},
		description: 'Experimental motion graphics project that pushes boundaries of visual communication through abstract forms and dynamic transitions.',
		tags: ['Motion Graphics', 'Experimental', 'Digital Art', 'Cinema 4D']
	},
	'img-g': {
		title: 'Portrait Series',
		category: 'Illustration / Digital Art',
		media: {
			type: 'image',
			src: 'https://ik.imagekit.io/cohwnscdit/IMG_2948.jpeg'
		},
		description: 'A series of digital portraits exploring color, emotion, and contemporary aesthetics through expressive illustration techniques.',
		tags: ['Digital Illustration', 'Portrait', 'Photoshop', 'Color Theory']
	},
	'img-h': {
		title: 'Print Making',
		category: 'Traditional Art / Printmaking',
		media: {
			type: 'image',
			src: 'https://ik.imagekit.io/cohwnscdit/IMG_9049.png'
		},
		description: 'Traditional printmaking work combining handcrafted techniques with contemporary visual language, creating unique textural pieces.',
		tags: ['Printmaking', 'Traditional Art', 'Texture', 'Handcraft']
	},
	'img-k': {
		title: 'Graphic Compositions',
		category: 'Graphic Design / Illustration',
		media: {
			type: 'image',
			src: 'https://ik.imagekit.io/cohwnscdit/IMG_2952.jpeg?updatedAt=1767615331789'
		},
		description: 'Bold graphic compositions that explore form, color, and visual impact through contemporary illustration and design principles.',
		tags: ['Graphic Design', 'Illustration', 'Composition', 'Visual Impact']
	}
};

// Create modal HTML
function createModal() {
	const modal = document.createElement('div');
	modal.className = 'modal-overlay';
	modal.innerHTML = `
		<div class="modal-content">
			<button class="modal-close" aria-label="Close modal">&times;</button>
			<div class="modal-header">
				<h3 class="modal-title"></h3>
				<div class="modal-category"></div>
			</div>
			<div class="modal-media"></div>
			<p class="modal-description"></p>
			<div class="modal-tags"></div>
		</div>
	`;
	document.body.appendChild(modal);
	return modal;
}

// Open modal with project data
function openModal(projectKey) {
	const project = projects[projectKey];
	if (!project) return;

	const modal = document.querySelector('.modal-overlay') || createModal();
	
	// Populate modal content
	modal.querySelector('.modal-title').textContent = project.title;
	modal.querySelector('.modal-category').textContent = project.category;
	modal.querySelector('.modal-description').textContent = project.description;
	
	// Add media
	const mediaContainer = modal.querySelector('.modal-media');
	if (project.media.type === 'video') {
		mediaContainer.innerHTML = `
			<video autoplay muted loop playsinline>
				<source src="${project.media.src}" type="video/mp4">
			</video>
		`;
	} else {
		mediaContainer.innerHTML = `<img src="${project.media.src}" alt="${project.title}">`;
	}
	
	// Add tags
	const tagsContainer = modal.querySelector('.modal-tags');
	tagsContainer.innerHTML = project.tags
		.map(tag => `<span class="modal-tag">${tag}</span>`)
		.join('');
	
	// Show modal
	document.body.classList.add('modal-open');
	modal.classList.add('active');
}

// Close modal
function closeModal() {
	const modal = document.querySelector('.modal-overlay');
	if (modal) {
		modal.classList.remove('active');
		document.body.classList.remove('modal-open');
	}
}

// Initialize modal system
function initModals() {
	// Add click handlers to project images
	document.querySelectorAll('.hero-img').forEach(img => {
		const classes = Array.from(img.classList);
		const projectKey = classes.find(c => c.startsWith('img-'));
		
		if (projectKey && projects[projectKey]) {
			img.addEventListener('click', () => openModal(projectKey));
		}
	});
	
	// Close modal on overlay click
	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('modal-overlay')) {
			closeModal();
		}
	});
	
	// Close modal on close button click
	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('modal-close')) {
			closeModal();
		}
	});
	
	// Close modal on Escape key
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			closeModal();
		}
	});
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initModals);
} else {
	initModals();
}
