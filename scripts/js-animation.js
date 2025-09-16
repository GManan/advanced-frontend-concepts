document.addEventListener('DOMContentLoaded', () => {
    const ball = document.getElementById('js-ball');
    const container = document.querySelector('.js-animation-container');
    const startButton = document.getElementById('start-bounce');

    const gravity = 0.1;
    const bounceFactor = -0.8;
    
    let positionY = 0;
    let velocityY = 0;
    function animate() {
        // Update velocity with gravity
        velocityY += gravity;

        // Update position
        positionY += velocityY;

        // Check for collision with the container bottom
        const containerHeight = container.clientHeight - 20; // Subtract ball margin
        const ballHeight = ball.clientHeight;

        if (positionY + ballHeight > containerHeight) {
            // Adjust position to prevent it from going below the bottom
            positionY = containerHeight - ballHeight;

            // Reverse and reduce velocity to simulate a bounce
            velocityY *= bounceFactor;
        }

        // Apply the new position to the ball
        ball.style.transform = `translateY(${positionY}px)`;

        // Continue the animation loop
        requestAnimationFrame(animate);
        
    }

    startButton.addEventListener('click', () => {
        // Reset and start the animation
        positionY = 0;
        velocityY = 0;
        animate();
    });
});