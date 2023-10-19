const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <table style="border: none;">

    <tr>
        <th style="padding: 10px;">Key</th>
        <th style="padding: 10px;">KeyCode</th>
        <th style="padding: 10px;">Code</th>
    </tr>

    <tr>
        <td style="padding: 10px;">${e.key === ' ' ? 'space' : e.key}</td>
        <td style="padding: 10px;">${e.keycode}</td>
        <td style="padding: 10px;">${e.code}</td>
    </tr>
    
  </table>
    `;
});
