document.getElementById('peti-image').addEventListener('click', function() {
    console.log('Mango peti clicked'); // Check if this logs
    const mangoImage = document.getElementById('mango-image');
    mangoImage.style.display = 'block'; // Show the hapus mango
    mangoImage.style.animation = 'slideIn 0.5s forwards'; // Trigger the animation
});