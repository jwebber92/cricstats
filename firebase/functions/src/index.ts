import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// import * as serviceAccount from '../../../firebase-admin-key.json';

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://cricstats-c6d72.firebaseio.com"
// });
// const fbdb = admin.firestore();

admin.initializeApp();

// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.addMessage = functions.https.onRequest(async (req, res) => {
    const original = req.query.text;
    const snapshot = await admin.database().ref('/messages').push({original});
    res.redirect(303, snapshot.ref.toString());
});

exports.makeUpperCase = functions.database.ref('/messages/{pushId}/original')
    .onCreate((snapshot, context) => {
        const original = snapshot.val();
        console.log(`Upper case triggered by ${context.params.pushId}: ${original}`);
        const upper = original.toUpperCase();
        if (snapshot.ref.parent) {
            return snapshot.ref.parent.child('uppercase').set(upper);
        } else {
            return null;
        }
    });
