# Udacity React Native Course

## Description

This course covers the foundations of building apps with React Native, including creating interactive views and navigation, managing data with Redux, and creating push notifications. Specifically, this covers how to build apps using [Expo](https://docs.expo.dev/).

[Course link](https://www.udacity.com/course/react-native--cd0444)

## Getting started

### Development setup

 Follow the [Installation](https://docs.expo.dev/get-started/installation/#requirements) requirements for Expo. As of the time of creating this project, requirements include:
   - Node.js (LTS release)
      1. `brew install nvm`
      2. `nvm install --lts`
      3. `node -v` & `npm -v` to confirm you successfully installed the latest (desired) versions
   - Git
   - Watchman

### Project setup
1. Navigate to the directory where you want to create your app.
2. Run `npx create-expo-app --template` to start creating your project.
3. Select the desired template.
4. Enter your desired project name.
5. `cd` into your new project directory.
6. Run `npx expo` to kick off Expo.
7. To run the app in your web browser, enter `w`. The first time you do this you may see some additional dependency requirements. Copy the provided command needed to install these dependencies, exit Expo, run the command, and restart Expo.
8. Enter `w` again, and you should see your app open in your web browser.

#### Android

To use the Android emulator, follow the instructions in [Setting up the development environment](https://reactnative.dev/docs/environment-setup?guide=native&platform=android) for `macOS` > `Android`.

#### Xcode

To use the Xcode simulator, follow the instructions in [Setting up the development environment](https://reactnative.dev/docs/environment-setup?guide=native&platform=ios) for `macOS` > `iOS`.

Note that when installing Cocoapods, you may need to specifically install version `1.8.4` per thread [here](https://developer.apple.com/forums/thread/668456).
```
sudo gem install -n /usr/local/bin cocoapods -v 1.8.4
```
