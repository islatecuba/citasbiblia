// Mostrar un versículo aleatorio
function generateRandomVerse() {
    const verses = [
        "Filipenses 4:13 - Todo lo puedo en Cristo que me fortalece.",
        "Jeremías 29:11 - Porque yo sé los planes que tengo para ustedes, declara el Señor...",
        "Isaías 41:10 - No temas, porque yo estoy contigo...",
        "Juan 3:16 - Porque de tal manera amó Dios al mundo...",
        "Salmo 23:1 - El Señor es mi pastor; nada me faltará.",
        "Romanos 8:28 - A los que aman a Dios, todas las cosas les ayudan a bien.",
        "Proverbios 3:5-6 - Confía en el Señor con todo tu corazón...",
        "Salmo 46:1 - Dios es nuestro refugio y fortaleza.",
        "Mateo 11:28 - Venid a mí todos los que estáis cargados...",
        "Isaías 40:31 - Los que esperan al Señor tendrán nuevas fuerzas.",
        "2 Corintios 5:7 - Porque por fe andamos, no por vista.",
        "Salmo 118:24 - Este es el día que hizo el Señor.",
        "1 Pedro 5:7 - Echando toda vuestra ansiedad sobre Él...",
        "Romanos 12:12 - Gócense en la esperanza, sean pacientes...",
        "Lamentaciones 3:22-23 - Por la misericordia del Señor no hemos sido consumidos.",
        "Salmo 37:4 - Deléitate en el Señor, y Él concederá tus peticiones.",
        "Juan 14:27 - La paz os dejo, mi paz os doy.",
        "Hebreos 11:1 - La fe es la certeza de lo que se espera.",
        "Salmo 91:1 - El que habita al abrigo del Altísimo...",
        "1 Corintios 10:13 - No os ha sobrevenido ninguna tentación que no sea humana..."
    ];
    const randomIndex = Math.floor(Math.random() * verses.length);
    document.getElementById("verse-text").textContent = verses[randomIndex];
}

// Mostrar versículo según situación
function showVerseForSituation() {
    const situation = document.getElementById("situation-select").value;

    const versesBySituation = {
        fortaleza: [
            "Filipenses 4:13 - Todo lo puedo en Cristo que me fortalece.",
            "Isaías 40:29 - Él da esfuerzo al cansado...",
            "Salmo 18:2 - El Señor es mi roca, mi fortaleza y mi libertador."
        ],
        esperanza: [
            "Jeremías 29:11 - Porque yo sé los planes que tengo para ustedes...",
            "Romanos 15:13 - Que el Dios de la esperanza los llene de gozo y paz.",
            "Salmo 39:7 - Y ahora, Señor, ¿qué esperaré? Mi esperanza está en ti."
        ],
        amor: [
            "1 Juan 4:19 - Nosotros le amamos a Él, porque Él nos amó primero.",
            "1 Corintios 13:4-5 - El amor es paciente, es bondadoso...",
            "Juan 15:13 - Nadie tiene mayor amor que este..."
        ],
        sabiduria: [
            "Proverbios 2:6 - Porque el Señor da la sabiduría.",
            "Santiago 1:5 - Si alguno tiene falta de sabiduría, pídala a Dios.",
            "Proverbios 3:7 - No seas sabio en tu propia opinión..."
        ],
        enfermedad: [
            "Isaías 53:5 - Por sus heridas fuimos nosotros curados.",
            "Santiago 5:15 - La oración de fe sanará al enfermo.",
            "Éxodo 15:26 - Yo soy el Señor, tu sanador."
        ],
        aliento: [
            "Salmo 34:18 - Cercano está el Señor a los quebrantados de corazón.",
            "Salmo 147:3 - Él sana a los quebrantados de corazón.",
            "Mateo 5:4 - Bienaventurados los que lloran..."
        ],
        desanimo: [
            "Isaías 40:31 - Los que esperan al Señor tendrán nuevas fuerzas.",
            "Josué 1:9 - Esfuérzate y sé valiente...",
            "2 Corintios 4:16 - Aunque nuestro hombre exterior se va desgastando..."
        ],
        familia: [
            "Josué 24:15 - Yo y mi casa serviremos al Señor.",
            "Salmo 127:1 - Si el Señor no edifica la casa...",
            "Efesios 6:1 - Hijos, obedeced a vuestros padres..."
        ],
        miedo: [
            "2 Timoteo 1:7 - Dios no nos ha dado espíritu de temor...",
            "Salmo 56:3 - En el día que temo, yo en ti confío.",
            "Isaías 41:13 - Yo soy el Señor tu Dios... No temas."
        ],
        provision: [
            "Filipenses 4:19 - Mi Dios suplirá todo lo que os falta.",
            "Salmo 37:25 - No he visto justo desamparado...",
            "Mateo 6:31-33 - No os afanéis... buscad primeramente el reino de Dios."
        ],
        perdon: [
            "1 Juan 1:9 - Si confesamos nuestros pecados...",
            "Isaías 1:18 - Aunque vuestros pecados sean como la grana...",
            "Salmo 103:12 - Cuanto está lejos el oriente del occidente..."
        ],
        gratitud: [
            "1 Tesalonicenses 5:18 - Dad gracias en todo.",
            "Colosenses 3:15 - Y sed agradecidos.",
            "Salmo 100:4 - Entrad por sus puertas con acción de gracias."
        ],
        paz: [
            "Juan 14:27 - La paz os dejo, mi paz os doy.",
            "Filipenses 4:7 - La paz de Dios guardará vuestros corazones.",
            "Isaías 26:3 - Tú guardarás en completa paz al que persevera."
        ]
    };

    if (versesBySituation[situation]) {
        const verses = versesBySituation[situation];
        const randomIndex = Math.floor(Math.random() * verses.length);
        document.getElementById("situation-verse").textContent = verses[randomIndex];
    } else {
        document.getElementById("situation-verse").textContent = "Por favor, elige una situación.";
    }
}