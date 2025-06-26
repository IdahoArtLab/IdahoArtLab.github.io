document.addEventListener('DOMContentLoaded', function() {
    // Set hero background with gradient
    const hero = document.querySelector('.hero');
    hero.style.background = 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), #2563eb';
    
    // Create placeholder images
    const resources = document.querySelectorAll('.resource');
    const colors = ['#3b82f6', '#2563eb', '#1d4ed8', '#1e40af'];
    
    resources.forEach((resource, index) => {
        const img = resource.querySelector('img');
        if (img) {
            const placeholder = document.createElement('div');
            placeholder.className = 'resource-placeholder';
            placeholder.style.backgroundColor = colors[index % colors.length];
            placeholder.style.height = '200px';
            placeholder.style.display = 'flex';
            placeholder.style.alignItems = 'center';
            placeholder.style.justifyContent = 'center';
            placeholder.style.color = 'white';
            placeholder.style.fontSize = '1.25rem';
            placeholder.style.fontWeight = '500';
            placeholder.innerHTML = `<span>${img.alt}</span>`;
            
            img.parentNode.replaceChild(placeholder, img);
        }
    });
});
