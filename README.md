# music
A full featured web audio player using HTML5 Audio and Web Audio API.  

## Dependencies
node 11

## Installation
Clone the repo, run `npm i` inside of cloned directory.  

Copy your mp3 and audio related image files to `src/assets/mp3/[artist]/[album]`.  
Cover images are expected as `src/assets/mp3/[artist]/[album]/folder.jpg`.  
Make sure to have neat ID3 tags with your audio files.  

Related lyrics can be provided via `src/md/[artist]/[album]/[mp3file].md` which means an identical naming related to the mp3 file in `src/assets/mp3/[artist]/[album]/[mp3file].mp3` except for the extension.  

## Configuration
Go to `src/config`.  

Edit `app.json` for base url, fallback image, screensaver and analyser availability.  

Edit `audio.json` for audio files. Configuration is expected as seen in demo file.  
Artists and albums can be configured as hidden only to be seen by logged in users.  

Edit `i18n.json` for providing your own translations.  

## Start the app
Run `npm start`.

## Edit the code
See `src/js` and `src/sass`.
