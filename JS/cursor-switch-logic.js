function changeCursor(cursorStyle) {
    const existingScript = document.getElementById('cursor-script');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'cursor-script';
    script.src = `JS/custom-cursor-${cursorStyle}.js`;
    document.body.appendChild(script);
  }
