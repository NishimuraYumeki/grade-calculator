# Grade Calculator (Ionic -> APK)

## Easiest: build the APK on GitHub (no Android Studio)
1. Create a new GitHub repo and upload everything in this folder (keep the .github folder).
2. Open the repo > Actions tab > "Build APK" run (starts automatically on push).
3. When it's green, open the run and download the "GradeCalculator-APK" artifact. Unzip it to get app-debug.apk.
4. Copy app-debug.apk to your Android phone, install it, and test it.

## Or with Android Studio
npm install
npm run prepare-www
npx cap add android
npx cap sync android
npx cap open android      # Build > Build APK(s)
