// Navigation
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        mobileMenu.classList.add('hidden');
    }
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-lg', 'border-b');
        nav.classList.remove('bg-transparent');
    } else {
        nav.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-lg', 'border-b');
        nav.classList.add('bg-transparent');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Testimonials Carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.add('hidden');
        if (i === index) {
            testimonial.classList.remove('hidden');
        }
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentTestimonial);
}

if (totalTestimonials > 0) {
    // Auto-play carousel
    setInterval(nextTestimonial, 5000);
}

// Gallery Filter
const filterButtons = document.querySelectorAll('.gallery-filter-button');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;

        filterButtons.forEach(btn => btn.classList.remove('bg-blue-500', 'text-white'));
        button.classList.add('bg-blue-500', 'text-white');

        galleryItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Blog Filter
const blogFilterButtons = document.querySelectorAll('.blog-filter-button');
const blogPosts = document.querySelectorAll('.blog-post');

blogFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;

        blogFilterButtons.forEach(btn => {
            btn.classList.remove('bg-blue-500', 'text-white');
            btn.classList.add('border', 'border-blue-500', 'text-blue-500');
        });
        button.classList.add('bg-blue-500', 'text-white');
        button.classList.remove('border', 'border-blue-500', 'text-blue-500');

        blogPosts.forEach(post => {
            if (category === 'all' || post.dataset.category === category) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });
});