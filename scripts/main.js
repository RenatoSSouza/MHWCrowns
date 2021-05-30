var monstersWorld = ['Alatreon',  'Ancient leshen',  'Anjanath',  'Azure rathalos',  'Barroth',  'Bazelgeuse',  'Behemoth', 'Black diablos', 'Deviljho',  'Diablos',
    'Dodogama',  'Furious rajang', 'Great-girros', 'Great-Jagras',  'Jyuratodus',  'Kirin', 'Kulu-ya-ku', 'Kulve taroth', 'Kushala daora',  'Lavasioth', 'Legiana',
    'Leshen',  'Lunastra',  'Nergigante',  'Odogaron',  'Paolumu',  'Pink rathian',  'Pukei-pukei',  'Radobaan',  'Raging brachydios',  'Rajang', 'Rathalos',
    'Rathian', 'Safi\'jiiva', 'Shara ishvalda', 'Stygian zinogre',  'Teostra',  'Tobi-kadachi', 'Tzitzi-ya-ku',  'Uragaan',  'Vaal hazak', 'Xeno\'jiiva',  'Zorah magdaros',
    'Acidic glavenus',  'Banbaro',  'Barioth', 'Beotodus',  'Blackveil vaal hazak',  'Brachydios',  'Brute tigrex', 'Coral pukei-pukei',  'Ebony odogaron',   
    'Fatalis',  'Frostfang barioth', 'Fulgur anjanath',  'Glavenus',  'Gold rathian',  'Namielle',  'Nargacuga',  'Nightshade paolumu',  'Ruiner nergigante',  'Savage deviljho',  
    'Scarred yian garuga', 'Seething bazelgeuse',  'Shrieking legiana',  'Silver rathalos', 'Tigrex',  'Velkhana',  'Viper tobi-kadachi',  'Yian garuga',  'Zinogre'
]; 
var j = 1;
for (var i = 0; i < monstersWorld.length; i++) {
    if (i <= 43) {
        monsterClass = "World";
    }
    if (i > 43) {
        monsterClass = "Iceborn";
    }
    j++;
    var miniCrown = i;
    var largeCrown = j + monstersWorld.length;
    document.getElementById("monster").innerHTML += "<tr onclick=\"UnhiddenCrowns()\"></tr><td class=" + monsterClass + "><img src=/images/imageMonster/" + i + ".png alt=" + monstersWorld[i] + ">" + monstersWorld[i] + "</td>" +
        "<td id=A" + monstersWorld[i] + "><img class=\"minicrown\"  onclick=\"UnhiddenCrowns()\" src=\"/images/crownImage/crown_mini.png\" alt=\"Mini Crown\" id=mini" + monstersWorld[i] + "></td>" +
        "<td id=B" + monstersWorld[i] + "><img class=\"largecrown \"onclick=\"UnhiddenCrowns()\" src=\"/images/crownImage/crown_king.png\" alt=\"Large Crown\" id=large" + monstersWorld[i] + "></td>"
}
var text;
var identification;

function UnhiddenCrowns() {
    var el = document.getElementById("body");
    el.addEventListener('click', function(e) {
        text = e.target.id;
        identification = text.substr(1, 50);
        if (text.substr(0, 1) == "A") {
            complement = "mini";
            document.getElementById(complement + identification).style.display = "initial";

        }
        if (text.substr(0, 1) == "B") {
            complement = "large";
            document.getElementById(complement + identification).style.display = "initial";

        }
        if (text.substr(0, 4) == "mini" || text.substr(0, 5) == "large") {
            document.getElementById(text).style.display = "none";

        } else {
            return;
        }
    });
    DetectCrownsOfMarked(text);
};

function DetectCrownsOfMarked(text) {

    //document.getElementById(complement + identification).nodeValue = localStorage.complement + identification;
}
document.onchange = DetectCrownsOfMarked();