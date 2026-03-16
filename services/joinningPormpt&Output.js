function buildPairedPromptOutputs({
    promptModules,
    outputModules
}) {

    // 🔹 Normaliza nombres: XPrompt / XOutput → X
    function normalizeName(name) {
        return name.replace(/(Prompt|Output)$/, "");
    }

    // 🔹 Crear índice de outputs
    const outputIndex = {};

    outputModules.forEach(({ source, outputs }) => {
        Object.entries(outputs).forEach(([name, fn]) => {
            if (typeof fn !== "function") return;

            outputIndex[normalizeName(name)] = fn;
        });
    });

    // 🔹 Emparejar prompts con outputs
    const pairedFunctions = [];

    promptModules.forEach(({ source, prompts }) => {

        Object.entries(prompts).forEach(([name, promptFn]) => {
            if (typeof promptFn !== "function") return;
            const baseName = normalizeName(name);
            const outputFn = outputIndex[baseName];

            if (!outputFn) {
                console.warn(
                    `⚠️ No se encontró función de output para el prompt: ${name} (source: ${source})`
                );
                return;
            }

            pairedFunctions.push({
                source,
                name: baseName,
                promptFn,
                outputFn
            });
        });
    });

    return pairedFunctions;
}

export { buildPairedPromptOutputs };