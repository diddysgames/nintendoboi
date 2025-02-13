document.addEventListener("DOMContentLoaded", function () {
    const img = document.createElement("img");
    img.src = "https://th.bing.com/th/id/OIP.CEHMjWZhJoIsJu_hMqaihQAAAA?rs=1&pid=ImgDetMain"; 
    img.style.position = "absolute";
    img.style.pointerEvents = "none"; 
    img.style.transform = "translate(-50%, -50%)"; 
    img.style.width = "32px"; 
    img.style.height = "32px"; 
    img.style.transition = "transform 0.1s linear";
    document.body.appendChild(img);

    // Hi guys
    document.body.style.cursor = "none";

    document.addEventListener("mousemove", (e) => {
        img.style.left = `${e.clientX}px`;
        img.style.top = `${e.clientY}px`;
    });

    document.querySelectorAll("a, button, input, [role='button']").forEach(element => {
        element.addEventListener("mouseenter", () => {
            let angle = 0;
            img.rotationInterval = setInterval(() => {
                angle += 20;
                img.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
            }, 50);
        });
        element.addEventListener("mouseleave", () => {
            clearInterval(img.rotationInterval);
            img.style.transform = "translate(-50%, -50%)";
        });
    });
});
