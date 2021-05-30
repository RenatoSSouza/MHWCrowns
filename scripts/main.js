var monstersWorld = ['Alatreon',  'Ancient leshen',  'Anjanath',  'Azure rathalos',  'Barroth',  'Bazelgeuse',  'Behemoth', 'Black diablos', 'Deviljho',  'Diablos',
    'Dodogama',  'Furious rajang', 'Great girros', 'Great jagras',  'Jyuratodus',  'Kirin', 'Kulu-ya-ku', 'Kulve taroth', 'Kushala daora',  'Lavasioth', 'Legiana',
    'Leshen',  'Lunastra',  'Nergigante',  'Odogaron',  'Paolumu',  'Pink rathian',  'Pukei-pukei',  'Radobaan',  'Raging brachydios',  'Rajang', 'Rathalos',
    'Rathian', 'Safi\'jiiva', 'Shara ishvalda', 'Stygian zinogre',  'Teostra',  'Tobi-kadachi', 'Tzitzi-ya-ku',  'Uragaan',  'Vaal hazak', 'Xeno\'jiiva',  'Zorah magdaros',
    'Acidic glavenus',  'Banbaro',  'Barioth', 'Beotodus',  'Blackveil vaal hazak',  'Brachydios',  'Brute tigrex', 'Coral pukei-pukei',  'Ebony odogaron',   
    'Fatalis',  'Frostfang barioth', 'Fulgur anjanath',  'Glavenus',  'Gold rathian',  'Namielle',  'Nargacuga',  'Nightshade paolumu',  'Ruiner nergigante',  'Savage deviljho',  
    'Scarred yian garuga', 'Seething bazelgeuse',  'Shrieking legiana',  'Silver rathalos', 'Tigrex',  'Velkhana',  'Viper tobi-kadachi',  'Yian garuga',  'Zinogre'
]; 

for (var i = 0; i < monstersWorld.length; i++) {
    if (i <= 43) {
        monsterClass = "World";
    }
    if (i > 43) {
        monsterClass = "Iceborn";
    }
    var name = monstersWorld;
    var miniCrown = i;
    var largeCrown = i + monstersWorld.length;
    document.getElementById("monster").innerHTML += "<tr></tr><td class=" + monsterClass + "><img src=/images/imageMonster/" + i + ".png alt=" + monstersWorld[i] + ">" + monstersWorld[i] + " </td>" +
        "<td><img src=\"/images/crownImage/crown_mini.png\" alt=\"Mini Crown\"></td>" +
        "<td><img src=\"/images/crownImage/crown_king.png\" alt=\"Large Crown\"></td>" +
        "<td><input type=\"checkbox\" id=" + miniCrown + "></td>" +
        "<td><input type=\"checkbox\" id=" + largeCrown + "></td><tr></tr>";


}