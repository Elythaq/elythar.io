document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("matrixCanvas");

    if (!canvas) {
        console.error("Unable to get canvas element. Exiting.");
        return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
        console.error("Unable to get 2D context. Exiting.");
        return;
    }

    const characters = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん1234567890";
    const fontSize = 10;
    let columns = canvas.width / fontSize;
    const drops = [];

    const resizeCanvas = () => {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        columns = canvas.width / fontSize;
        initializeDrops();
    }

    const initializeDrops = () => {
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }
    }

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00FF00"; 
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (Math.random() > 0.99) drops[i] = 0;

            drops[i]++;
        }
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    setInterval(draw, 100);
});
