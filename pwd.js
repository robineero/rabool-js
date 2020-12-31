'use strict';

let items = ["aasta", "aastaga", "aastaid", "aastaks", "aastal", "aastas", "aastast", "aastat", "aastate", "aastatel", "abi", "abikaasa", "abil", "aeg", "aega", "aga", "ainult", "ainus", "aitab", "aja", "ajaks", "ajal", "aktsia", "alates", "alati", "algab", "algul", "alguses", "all", "alla", "alles", "alt", "alusel", "alustas", "anda", "andis", "andmetel", "andnud", "anna", "annab", "antud", "aru", "arv", "arvab", "arvan", "arvas", "arvates", "arvestades", "arvu", "asemel", "asi", "asja", "asjad", "asju", "asub", "auto", "autor", "avaliku", "avatud", "direktor", "dollari", "dollarit", "edasi", "edaspidi", "edu", "eelarve", "eelmise", "eelmisel", "ees", "eest", "ega", "ehk", "ehkki", "ei", "eile", "elab", "elu", "elus", "elust", "ema", "enam", "enamasti", "enamik", "end", "enda", "endale", "endast", "endine", "endiselt", "ennast", "enne", "ent", "eraldi", "eri", "eriti", "esialgu", "esimees", "esimene", "esimese", "esimesel", "esimeses", "esimest", "esindaja", "esitatud", "et", "ette", "euro", "eurot", "filmi", "firma", "hakanud", "hakata", "hakkab", "hakkama",
    "hakkas", "hakkavad", "hea", "head", "heaks", "hetkel", "hiljem", "hiljuti", "hind", "hinna", "hinnad", "hinnangul", "hoida", "homme", "hommikul", "hooaja", "hoolimata", "hoone", "hoopis", "hulgas", "hulk", "hulka", "huvi", "idee", "iga", "igal", "ikka", "ikkagi", "ilma", "ilmselt", "inglise", "inimene", "inimese", "inimesed", "inimesi", "inimest", "inimeste", "inimestele", "isa", "ise", "isegi", "ja", "jaoks", "jne", "jooksul", "ju", "juba", "juhataja", "juhatuse", "juhi", "juht", "juhtus", "juhul", "just", "justkui", "juurde", "juures", "ka", "kaasa", "kahe", "kaheksa", "kahju", "kahjuks", "kaks", "kaotas", "kas", "kasutada", "kasv", "kasvab", "kasvanud", "kasvas", "kasvu", "kaua", "kaudu", "keda", "keegi", "keeles", "kel", "kell", "kella", "kelle", "kellel", "kellele", "kes", "keskmine", "keskmiselt", "kevadel", "kiire", "kiiresti", "kindel", "kindlasti", "kinni", "kinnisvara", "kinnitab", "kinnitas", "kinnitusel", "kirja", "kirjutab", "kirjutas", "kl", "klubi", "km", "kodu", "kodus", "kogu", "koguni", "koha", "kohal", "kohale", "kohaselt", "kohe", "koht", "kohta", "kohus",
    "koju", "kokku", "kolm", "kolmanda", "kolmas", "kolme", "kommenteeris", "kooli", "koos", "kord", "korda", "korra", "korraga", "korral", "korras", "krooni", "kroonini", "kuhu", "kui", "kuid", "kuidagi", "kuidas", "Kuigi", "kuigi", "kukkus", "kuna", "kunagi", "kuni", "kus", "kust", "kuu", "kuud", "kuulub", "kuuluvad", "kuus", "kvartali", "kvartalis", "laadida", "laenu", "lahti", "langenud", "langes", "laps", "lapse", "lapsed", "last", "laste", "lausa", "lausus", "leiab", "leida", "leidis", "leidnud", "lepingu", "ligi", "lihtne", "lihtsalt", "liiga", "liige", "linn", "linna", "linnapea", "linnas", "lisab", "Lisaks", "lisaks", "lisas", "Loe", "lood", "lubab", "lubas", "lugeda", "lugu", "luua", "ma", "maa", "maailma", "maailmas", "maha", "mail", "maja", "majandus", "majanduse", "maksab", "maksma", "maksta", "me", "meeldib", "meelest", "meenutab", "mees", "meest", "meeste", "meetri", "mehe", "mehed", "meid", "meie", "meil", "meile", "mida", "midagi", "miks", "mil", "miljardi", "miljardit", "miljoni", "miljonit", "millal", "mille", "millega", "millele", "milles", "millest", "milline",
    "mina", "mind", "minema", "mingi", "mingit", "minna", "minu", "minutit", "mis", "mitmed", "mitte", "mitu", "mln", "mu", "muidu", "muidugi", "mul", "mulle", "mullu", "muu", "muud", "muusika", "muuta", "muutub", "muutunud", "nad", "nagu", "naine", "naise", "naised", "naiste", "natuke", "need", "neid", "neil", "neile", "neist", "neli", "nelja", "nemad", "nende", "nentis", "nii", "nime", "nimel", "nimi", "ning", "noored", "noorte", "ole", "oled", "oleks", "oleksid", "olema", "olemas", "oleme", "olen", "olete", "olevat", "olgu", "oli", "olid", "olin", "olla", "olnud", "olukord", "olukorda", "olukorras", "oluline", "oluliselt", "oma", "omakorda", "omanik", "ometi", "on", "ongi", "oodata", "ootab", "osa", "osakonna", "osas", "oska", "osta", "otsa", "otse", "otsus", "otsuse", "otsustas", "paar", "paari", "pakkuda", "pakub", "palju", "paljud", "pandud", "paneb", "panga", "pani", "pank", "panna", "parem", "paremini", "parim", "pea", "peaaegu", "peab", "peaks", "peaksid", "peal", "peale", "pealt", "peame", "peaminister", "peamiselt", "pean", "peatreener", "peavad", "peetakse", "pere",
    "pidada", "pidanud", "pidas", "pidevalt", "pidi", "pigem", "piisavalt", "pikk", "pisut", "pole", "poleks", "politsei", "polnud", "pool", "poole", "poolest", "poolt", "praegu", "praegune", "praeguse", "presidendi", "president", "pressiesindaja", "probleem", "probleeme", "projekti", "protsendi", "protsenti", "puhul", "punkti", "puudub", "raha", "rahul", "rahva", "rahvas", "raske", "reedel", "riigi", "riigikogu", "riigis", "riik", "riikide", "ringi", "rohkem", "sa", "saa", "saab", "saad", "saada", "saadud", "saaks", "saama", "saame", "saanud", "saavad", "sageli", "sai", "said", "sain", "sama", "Samal", "samal", "samas", "samuti", "seaduse", "seal", "sealt", "seas", "seda", "see", "Seega", "seega", "seekord", "sees", "seisab", "seitse", "sekka", "sel", "selge", "selgelt", "selgitas", "selgub", "selgus", "selle", "sellega", "selleks", "sellel", "sellele", "selles", "sellest", "selline", "sellise", "sellised", "selliseid", "sellist", "seni", "seoses", "seotud", "sest", "siia", "siiani", "siin", "siis", "siiski", "silma", "sinna", "sinu", "sisse", "soovi", "soovib", "soovitab",
    "suhteliselt", "suhtes", "summa", "surma", "suuda", "suudab", "suunas", "suur", "suure", "suured", "suurem", "suurema", "suuremat", "suuri", "suurim", "suurima", "suurt", "suutnud", "suvel", "ta", "taas", "taga", "tagasi", "taha", "tahab", "tahaks", "tal", "talle", "tasemel", "tasu", "tasuta", "tavaliselt", "te", "tea", "teab", "teada", "teatas", "teatel", "teatud", "teda", "tee", "teeb", "teed", "teel", "teema", "teemal", "teevad", "tegelikult", "tegema", "tegemist", "tegi", "tegu", "teha", "tehakse", "tehti", "tehtud", "teie", "teine", "teinud", "teise", "teised", "teisel", "teises", "teist", "teiste", "tekib", "tekkinud", "tema", "terve", "tihti", "tohi", "toimub", "toimunud", "toimus", "too", "toob", "tugev", "tule", "tuleb", "tuleks", "tulemus", "tulevad", "tulevikus", "tuli", "tulla", "tulnud", "tunda", "tundi", "tundub", "tunne", "tunnistab", "tunnistas", "tuntud", "turul", "tuua", "umbes", "uue", "uued", "uuesti", "uus", "uusi", "uut", "uute",
    "vaadata", "vaatamata", "vaatamiseks", "vaba", "vahel", "vahele", "vahendab", "vahendas", "vahepealkiri", "vaid", "vaja", "vajab", "vajalik", "valitsus", "valitsuse", "vallas", "valmis", "vana", "vara", "varem", "vastas", "vastavalt", "vastu", "veel", "veelgi", "veidi", "Vene", "viia", "viie", "viimane", "viimase", "viimasel", "viimastel", "viis", "vist",];


function getPwd (len) {
    let password = [];
    for (let i = 0; i <= len; i++) {
        password.push(items[randInt(items.length)].toLowerCase());
    }
    document.getElementById('pwd').innerText = password.join("-");
    document.getElementById('tooltip').innerText = "Click on the pwd to copy it.";

};

getPwd (3);

function copy() {

    const span = document.getElementById("pwd");

    span.addEventListener("copy", function(event) {
        event.preventDefault();
        if (event.clipboardData) {
            event.clipboardData.setData("text/plain", span.textContent);
            console.log(event.clipboardData.getData("text"))
        }
    });

    span.onclick = function() {
        document.execCommand("copy");
        document.getElementById('tooltip').innerText = "Copied!";
    }
}

copy();


// Code that helps

function randInt(max) {
    return Math.floor(Math.random() * (max - 0));
};
