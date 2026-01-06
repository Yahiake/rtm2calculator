document.getElementById("averageForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Modules et coefficients
    const modules = {
        rsf: 3,
        voip: 2,
        ai: 2,
        securite: 2,
        web: 2,
        tp_securite: 1,
        tp_ai: 1,
        tp_rsf: 1,
        iot: 1,
        rechdoc: 1,
        rester: 1,
    };

    let totalPondere = 0;
    const totalCoefficients = 17;

    // Calcul de la somme pondérée
    for (let module in modules) {
        const note = parseFloat(document.getElementById(module).value); // Permet les floats
        if (isNaN(note) || note < 0 || note > 20) {
            document.getElementById("result").innerText = "Veuillez entrer des notes valides (0-20) pour tous les modules.";
            return;
        }
        totalPondere += note * modules[module];
    }

    // Calcul de la moyenne
    const moyenne = (totalPondere / totalCoefficients).toFixed(2);

    // Affichage du résultat
    if (moyenne >= 10) {
        document.getElementById("result").innerText = `Votre moyenne du semestre est ${moyenne}. Validé ✅`;
    } else {
        document.getElementById("result").innerText = `Votre moyenne du semestre est ${moyenne}. Non validé ❌`;
    }
});
