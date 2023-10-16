document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("matrixCanvas");

    // Validation: Ensure canvas is not null before continuing
    if (!canvas) {
        console.error("Unable to get canvas element. Exiting.");
        return;
    }

    const ctx = canvas.getContext("2d");

    // Validation: Ensure context is not null before continuing
    if (!ctx) {
        console.error("Unable to get 2D context. Exiting.");
        return;
    }

    // Set canvas size to window's size and update it on resize
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    window.addEventListener("resize", () => {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
    });

    const characters = "01";
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = [];

    // Initialize drops array
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    function draw() {
        // Set background and text styles
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00FF00";
        ctx.font = fontSize + "px monospace";

        // Iterate through each drop and draw characters
        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Randomly reset drop back to top
            if (Math.random() > 0.99) drops[i] = 0;

            // Move drop down
            drops[i]++;
        }
    }

    // Execute draw function every 33ms to create animation
    setInterval(draw, 33);
});
