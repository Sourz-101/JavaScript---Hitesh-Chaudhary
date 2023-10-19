const clock = document.getElementById('clock');

setInterval( () => {
    let time = new Date();
    clock.innerHTML = (
        time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
      );
}, 100)