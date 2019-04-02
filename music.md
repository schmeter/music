# music

## The goals

- Create a webbased music player in the browser.  
- Display albums or playlists to chose from.  
- Connect audio to analyser and display analysed data.  
- Display lyrics or information regarding current audio.  
- Create an open source project on Github, use MIT license.  


## The work

### Toolchain setup:

Discuss technologies to use: React, Redux, Sass.  

Create base configuration:  
    - .node-version  
    - .editorconfig  

Prepare linting:  
    - ESLintrc  
    - Sass Lint  

Use tests:  
    - Jest  


### The app

#### Questions

Build own audio interface?  
Nope. Use native elements.  
HTML5 Audio: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio  

How to get audio content analysed?  
Use Web Audio API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API  

How to display the analysis?  
Use canvas: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API  

How to handle state?  
Use Redux when needed, local state otherwise.  

What else?  
Use sitemap.  
Have update cycles.  

#### The solutions

Data collection:  
    - Scan folders with mp3 files, cover images, lyrics files (build process).  
    - Configure order and display mode.  
    - Store data in audio model (runtime).  

Audio tag:  
    - Use mp3 only  
    - Positioning: Continuous availability in mobile browsers  
    - Style that ugly thing in Chrome: Shadow DOM  
    - API and React state  

Audio context:
    - When to start? Chrome wants it on user interaction.  
    - CORS: No sound available. Where to host the files?  
    - Analyse data: What's the content?  
    - Waveform analysis  
    - Frequency analysis  
    - Playing with Audio context  

Display data:  
    - Canvas redraw  
    - Screensaver mode  
    
