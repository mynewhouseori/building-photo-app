# Firebase trial setup

This app can run in two modes:

- Local trial mode: currently active. The 7-day timer is stored in the browser.
- Firebase trial mode: recommended for colleagues. Users sign in with Firebase Authentication, and the 7-day timer is stored in Firestore by user ID.

## Recommended Firebase setup

1. In Firebase Console, use a dedicated Firebase project, or reuse an existing one with a separate collection.
2. Enable Authentication with Email/Password.
3. Create colleague users in Firebase Authentication.
4. Enable Cloud Firestore.
5. Publish the rules in `firestore.rules`.
6. Copy the Web app Firebase config into `firebase-config.js`.
7. Set `enabled: true`.

## Firestore collection

The app uses:

`buildingPhotoTrials/{uid}`

Each document stores:

- `uid`
- `email`
- `startsAt`
- `expiresAt`
- `createdAt`

## Important note

The Firebase web config is not a secret. Access control must come from Firebase Authentication and Firestore Security Rules.
