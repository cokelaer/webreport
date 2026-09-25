// Webreport Common JavaScript

// Image Modal Functionality
function openImage(imgSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modalImg.src = imgSrc;
    modal.classList.add('active');
}

function closeImage() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
}

// Close modal on click outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeImage();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeImage();
    }
});

// Dynamic Table of Contents
function generateTOC() {
    const headings = document.querySelectorAll('h1, h2, h3');
    const tocList = document.getElementById('toc-list');

    if (!tocList) return;

    headings.forEach((heading, index) => {
        // Skip main title (first h1)
        if (heading.tagName === 'H1' && index === 0) return;

        // Set ID if not present
        if (!heading.id) {
            heading.id = `heading-${index}`;
        }

        const level = parseInt(heading.tagName[1]);
        const li = document.createElement('li');
        li.className = `level-${level}`;

        const a = document.createElement('a');
        a.href = `#${heading.id}`;
        a.textContent = heading.textContent;

        li.appendChild(a);
        tocList.appendChild(li);
    });

    // Smooth scroll on click
    document.querySelectorAll('#toc-list a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                updateActiveLink();
            }
        });
    });
}

// Update active link based on scroll position
function updateActiveLink() {
    const headings = document.querySelectorAll('h1, h2, h3');
    const links = document.querySelectorAll('#toc-list a');

    let current = null;
    headings.forEach(heading => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 100) {
            current = heading.id;
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    generateTOC();
    window.addEventListener('scroll', updateActiveLink);
    console.log('Webreport framework loaded');
});
