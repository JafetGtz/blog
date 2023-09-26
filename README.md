# TRX BUSINESS APP

## Dependencies, software or technologies required

* [NodeJs v19.2.0](https://nodejs.org/download/release/v19.2.0/)
* Npm or Yarn
* [JDK v11.0.17](https://www.oracle.com/mx/java/technologies/javase/jdk11-archive-downloads.html)
* [Xcode-tools]()
* [Ruby v](https://github.com/rbenv/rbenv)
* [Android Studio](https://developer.android.com/studio?gclid=Cj0KCQiA9YugBhCZARIsAACXxeIpN9kuPjWpc4Uiv7RFLM-ubGKJreBXhXqZBYBz5LOXokHEXeS2WH8aAsL1EALw_wcB&gclsrc=aw.ds)
* [Xcode](https://developer.apple.com/xcode/)

## Recommended dependencies, packages or extensions

* [Nvm](https://github.com/nvm-sh/nvm)
* [Sdkman](https://sdkman.io)
* [rbenv](https://github.com/rbenv/rbenv)

## Installation

You need install the dependencies

```
npm install
```

## Run the project

```
npx react-native start
```

```
npx react-native run-android
```

```
npx react-native run-ios
```

## Build an APK

```
cd android
```

```
./gradlew assembleRelease
```

## Useful commands

```
adb devices
```

```
adb logcat | grep 'traxi' 
```
## Known Issues

The android emulator has problems with macbooks apple m1 soc. The app would be crash without reason. 