document.addEventListener("DOMContentLoaded", function () {
    const img = document.createElement("img");
    img.src = "images/Bloxy-Icon.png"; // Updated image path
    img.style.position = "absolute";
    img.style.pointerEvents = "none";
    img.style.transform = "translate(-50%, -50%)";
    img.style.width = "32px";
    img.style.height = "32px";
    img.style.transition = "transform 0.1s linear";
    document.body.appendChild(img);

    document.body.style.cursor = "none";

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY + window.scrollY; // Update mouse position with scroll
    });

    function updateCursorImage() {
        img.style.left = `${mouseX}px`;
        img.style.top = `${mouseY}px`;
        requestAnimationFrame(updateCursorImage); // Keep updating the position
    }

    updateCursorImage(); // Start the position correction loop

    document.querySelectorAll("a, button, input, [role='button']").forEach(element => {
        element.addEventListener("mouseenter", () => {
            let angle = 0;
            img.rotationInterval = setInterval(() => {
                angle += 10;
                img.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
            }, 50);
        });
        element.addEventListener("mouseleave", () => {
            clearInterval(img.rotationInterval);
            img.style.transform = "translate(-50%, -50%)";
        });
    });

    document.querySelectorAll("iframe").forEach(iframe => {
        iframe.addEventListener("mouseenter", () => {
            img.style.display = "none";
        });
        iframe.addEventListener("mouseleave", () => {
            img.style.display = "block";
        });
    });
});
