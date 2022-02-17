
// ---------- Aufgabe 1_2 ----------
let person = {
    name: 'Frank',
    alter: 48,
    sagNameAlter: function test() {
        alert("Name: " + this.name + ", Alter:" + this.alter)
    }

}
console.log("Name: " + person.name + ", Alter:" + person.alter);
// console.log(person.sagNameAlter());

// ---------- Aufgabe 1_4 ----------
let unsereHaustiere = [
    {
        tiertyp: "Katze",

        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    }
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log(unsereHaustiere[1].names);

function editName(newName1, newName2, newName3) {

    for (let i = 0; i < arguments.length; i++) {

        let oldName = unsereHaustiere[1].names[i];
        unsereHaustiere[1].names[i] = oldName.replace(oldName, arguments[i]);

    }

    console.log(unsereHaustiere[1].names);

}
editName('hund1', 'hund2', 'hund3')

// ---------- Aufgabe 1_5 ----------
let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);

// ---------- Aufgabe 1_6 ----------
let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Placebo",
        title: "Sleeping with ghosts",
        release_year: 2002,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

console.log(`"${myMusic[0].artist}"`);
console.log('Von ' + myMusic[1].artist + ': ' + `"${myMusic[1].medium[3]}"`);
console.log('Von ' + myMusic[1].artist + ': ' + `${myMusic[1].gold}`);
console.log(myMusic[2].release_year + ' und ' + myMusic[3].release_year);
console.log("Von " + myMusic[3].artist + " das Wort: " + `"${myMusic[3].medium[2]}"`);
console.log("Von " + myMusic[3].artist + " das Wort: " + myMusic[3].title.substring(17, 21));
console.log("Von " + myMusic[2].artist + " das Wort: " + myMusic[2].title.substring(13, 15));
console.log("Von " + myMusic[1].artist + " das Wort: " + myMusic[1].artist.substring(5, 10));

// ---------- Aufgabe 1_7 ----------

myMusic.forEach(e => {
    document.getElementById("artist").innerHTML += `<p>${e.artist}</p> <p>${e.title}</p><p>${e.medium}</p>}`;
});

myMusic.forEach(e => {
    if (e.release_year > 1975) {
        document.getElementById("artist").innerHTML += `<h1>---------- Release nach 1975 ------------</h1> <p>${e.artist}</p> <p>${e.title}</p><p>${e.medium}</p>}`;
    }
});

// ---------- Aufgabe 1_8 ----------
let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

function print() {

    let cityArr = [];

    studentData.forEach(e => {
        console.log(e.name);
        console.log(e.coop);
        console.log(e.emails);
        cityArr.push(e.address.city);
    });
    console.log(cityArr);
}

print()

// ---------- Aufgabe 2_2 ----------