# Firebase email-only usage setup

This app can run in two modes:

- Local mode: currently active while `firebase-config.js` has `enabled: false`.
- Firebase mode: users enter an email once. The app silently uses Firebase Anonymous Authentication, stores the email on the device, starts a 7-day trial, and logs basic usage counters in Firestore.

## Recommended dedicated Firebase setup

1. Create a new Firebase project only for `building-photo-app`.
2. Add a Web app in Firebase Project settings.
3. Enable Authentication -> Sign-in method -> Anonymous.
4. Enable Cloud Firestore.
5. Publish the rules from `firestore.rules`.
6. Copy the Web app Firebase config into `firebase-config.js`.
7. Set `enabled: true`.

## What the user sees

On first use only:

- Email field
- Confirm email button

After that, the browser remembers the anonymous Firebase session and the email in local storage, so the user does not need to enter anything again on the same phone/browser.

## Firestore collection

The app uses:

`buildingPhotoTrials/{anonymousUserUid}`

Each document stores:

- `uid`
- `email`
- `startsAt`
- `expiresAt`
- `createdAt`
- `lastSeenAt`
- `openCount`
- `captureCount`
- `createImageCount`
- `saveCount`

## Notes

This is intentionally simple. It is stronger than a browser-only trial because the start date and usage counters are stored in Firebase, but it is still not high-security licensing. A technical user who clears browser data can create a new anonymous identity.
