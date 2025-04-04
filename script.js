function showManual(platform) {
    // Verstecke beide Anleitungen zuerst
    document.getElementById("windows-manual").classList.add("hidden");
    document.getElementById("linux-manual").classList.add("hidden");

    // Zeige die richtige Anleitung
    if (platform === "windows") {
        document.getElementById("windows-manual").classList.remove("hidden");
    } else if (platform === "linux") {
        document.getElementById("linux-manual").classList.remove("hidden");
    }
}
