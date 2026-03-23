// Display current time when page loads
document.addEventListener('DOMContentLoaded', function() {
    const timeElement = document.getElementById('time');
    if (timeElement) {
        const now = new Date();
        const timeString = now.toLocaleString('vi-VN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        timeElement.textContent = `Page deployed at: ${timeString}`;
        timeElement.style.color = '#667eea';
        timeElement.style.fontWeight = 'bold';
    }

    console.log('✓ CI/CD Pipeline Demo Page Loaded Successfully');
    console.log('✓ HTML: Loaded');
    console.log('✓ CSS: Loaded');
    console.log('✓ JavaScript: Running');
});

// Optional: Add click animation to stage buttons
document.querySelectorAll('.stage').forEach(stage => {
    stage.addEventListener('click', function() {
        this.style.transform = 'scale(1.05)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});