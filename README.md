# music
A full featured web audio player using HTML5 Audio and Web Audio API.  

## Dependencies
See .nvmrc file.

## Quickstart
Clone the repo, run `npm install` inside of the cloned directory.  

To have your own music collection available in the app, follow these steps:  

- Make sure to have neat ID3 tags with your mp3 files.  
- Copy your mp3 files to `src/assets/mp3/[artist]/[album]/[mp3file].mp3`.  
- Copy your cover images to `src/assets/mp3/[artist]/[album]/folder.jpg`.  
- Edit `src/config/audio.json` and fill in your artist and album structure.  

To display your own lyrics belonging to your music collection, follow these steps:  

- Use markdown files for lyrics.  
- Name your markdown files corresponding to your mp3 files except for the extension.  
- Copy your lyrics files to `src/md/[artist]/[album]/[mp3file].md`.  

To start the local environment, run `npm start`.  

## Configuration
Go to `src/config`.  

With `app.json` it is possible to edit the base url of your project, the path to a fallback image, the availability of the screensaver and the analyser.  

With `audio.json` it is possible to define the order of artists and albums.  
Only artists and albums configured in this file will be displayed within the app.  
Artists and albums can be configured as hidden to be seen by logged in users only.  

To change or to provide own translations in the app, edit `i18n.json`.  
In this file it is possible to add more languages according to the existing ones.  
The first language will be used as a default.   

## Customize the app
See `src/js` and `src/sass`.  
These directories contain the files for app logic and styles.  
