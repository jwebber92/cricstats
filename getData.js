const https = require('https');
const admin = require('firebase-admin');

let serviceAccount = require('./firebase-admin-key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://cricstats-c6d72.firebaseio.com"
});
let fbdb = admin.firestore();

// let url = "https://cricket.sportmonks.com/api/v2.0/countries?api_token=GfuTuumhFXqDLCKmVugJvviWOgV5tx3wVeCaGMMZakt4n9EYKfpGFLBmOfZR";
// let url = "https://cricket.sportmonks.com/api/v2.0/countries?api_token=GfuTuumhFXqDLCKmVugJvviWOgV5tx3wVeCaGMMZakt4n9EYKfpGFLBmOfZR&include=leagues";
// let url = "https://cricket.sportmonks.com/api/v2.0/teams?api_token=GfuTuumhFXqDLCKmVugJvviWOgV5tx3wVeCaGMMZakt4n9EYKfpGFLBmOfZR";

let base = "https://cricket.sportmonks.com/api/v2.0/";
let token = "?api_token=GfuTuumhFXqDLCKmVugJvviWOgV5tx3wVeCaGMMZakt4n9EYKfpGFLBmOfZR";

let url = base + "teams/40" + token + "&include=squad";
// season 44

let req = https.get(url, res => {
    console.log(`Status code: ${res.statusCode}`);

    let body = "";
    res.on('data', chunk => {
        body += chunk;
    });

    res.on('end', () => {
        let json = JSON.parse(body);
        for (let item of json.data.squad) {
            if (item.squad.season_id == 44) {
                fbdb.collection('players').add({
                    name: item.fullname,
                    position: item.position.name,
                    dob: item.dateofbirth,
                    country: "South Africa",
                    id: item.id
                })
                .then(docRef => {
                    console.log("Added " + item.fullname + " with ref " + docRef.id);
                })
                .catch(err => {
                    console.error("Error adding " + item.name + error);
                })
            }
        }
        // for (let i = 0; i < 1000; i ++) {
        //     if (json.data.squad[i].squad.season_id == 44) {
        //         console.log(json.data.squad[i]);
        //     }
        // }
    })
});

req.on('error', err => {
    console.error(err);
});

req.end();
