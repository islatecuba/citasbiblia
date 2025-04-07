function generateRandomVerse() {
    const verses = [
        "Filipenses 4:13 - Todo lo puedo en Cristo que me fortalece.",
        "Jeremías 29:11 - Porque yo sé los planes que tengo para ustedes, declara el Señor, planes de bienestar y no de mal.",
        "Isaías 41:10 - No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios.",
        "Juan 3:16 - Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en Él cree no se pierda, sino que tenga vida eterna."
    ];
    const randomIndex = Math.floor(Math.random() * verses.length);
    document.getElementById("verse-text").textContent = verses[randomIndex];
}

function showVerseForSituation() {
    const situation = document.getElementById("situation-select").value;
    let verse = "";

    switch (situation) {
        case "fortaleza":
            verse = "Filipenses 4:13 - Todo lo puedo en Cristo que me fortalece.";
            break;
        case "esperanza":
            verse = "Jeremías 29:11 - Porque yo sé los planes que tengo para ustedes, declara el Señor, planes de bienestar y no de mal.";
            break;
        case "amor":
            verse = "1 Juan 4:19 - Nosotros le amamos a Él, porque Él nos amó primero.";
            break;
        case "sabiduria":
            verse = "Proverbios 2:6 - Porque el Señor da la sabiduría, de su boca vienen el conocimiento y la inteligencia.";
            break;
        case "enfermedad":
            verse = "Isaías 53:5 - Pero Él fue herido por nuestras rebeliones, molido por nuestros pecados; el castigo por nuestra paz fue sobre Él, y por sus heridas fuimos nosotros curados.";
            break;
        case "aliento":
            verse = "Salmo 34:18 - Cercano está el Señor a los quebrantados de corazón, y salva a los contritos de espíritu.";
            break;
        case "desanimo":
            verse = "Isaías 40:29 - Él da esfuerzo al cansado, y multiplica las fuerzas al que no tiene ningunas.";
            break;
        case "familia":
            verse = "Josué 24:15 - Pero, si a ustedes les parece mal servir al Señor, elijan hoy a quién van a servir... pero yo y mi casa serviremos al Señor.";
            break;
        case "miedo":
            verse = "2 Timoteo 1:7 - Porque no nos ha dado Dios un espíritu de temor, sino de poder, de amor y de dominio propio.";
            break;
        default:
            verse = "Por favor, elige una situación.";
    }

    document.getElementById("situation-verse").textContent = verse;
}