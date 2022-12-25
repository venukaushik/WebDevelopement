function generateHex() {
    let charset = "0123456789ABCDEF",
        hex = "";
    for (var i = 0, n = charset.length; i < 6; ++i) {
        hex += charset.charAt(Math.floor(Math.random() * n));
    }

    document.getElementById("hex").innerText = `#${hex}`;
    document.querySelector("body").style.background = `#${hex}`;
}

