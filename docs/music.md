# music

## Goals

- Create a web-based music player in the browser.  
- Display albums or playlists to chose from.  
- Connect audio to analyser and display analysed data.  
- Display lyrics or information regarding current audio.  
- Create an open source project on Github, use MIT license.  


## Work

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


### Questions

Build own audio interface?  
Nope. Use native elements.  
HTML5 Audio: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio  

How to get audio content analysed?  
Use Web Audio API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API  

How to display the analysis?  
Use canvas: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API  

How to handle state?  
Use Redux only when needed, local state otherwise.  
Local storage for user settings.  

Device support?
Mobile first: Android, iOS, Chrome, Firefox, Safari.

What else?  
Use sitemap.  
Have update cycles.  


### Solution

Data collection:  
    - Scan folders with mp3 files, cover images, lyrics files (build process):  
        - Read ID3 tags, add images, parse markdown files.  
    - Configure order and display mode of artists and albums:  
        - Provide visible and hidden content for logged in users.  
    - Store data in audio model (runtime).  

Audio tag:  
    - Use mp3 support only.  
    - Positioning:  
        - Continuous availability in mobile browsers.  
        - Fix screen to prevent scrolling issues.  
        - Native scroll feeling in iOS.  
    - Style that ugly thing in Chrome:  
        - Activate Shadow DOM.  
        - Apply styles to shadow DOM elements.  
    - Web Audio API and React state:  
        - Connect audio events to app behaviour.  
        - Trigger audio from mp3 links.  
    - Safari issues: ...  

Audio context:  
    - When to start? Chrome wants it on user interaction.  
    - Safari: AudioContext or WebkitAudioContext?  
    - CORS: No sound available. Where to host the files?  
    - Analyse data: What's the content?  
    - Waveform analysis example.  
    - Frequency analysis example.  
    - Playing with Audio context: More possibilities.  

Display data:  
    - Canvas redraw: Device support?  
    - Screensaver mode: Device support?  

Handling:  
    - Cursor navigation: Navigate through audio file.  

User settings persistance:  
    - Login state: Show hidden data.  
    - Current audio file: Store user selection.  


### Next steps / possibilities

Zip download
SEO optimization
Content sharing / server side rendering
Progressive webapp
(React) native app / webframe
Electron app
Heroku / Netlify continuous deployment


## Conclusion

Autoplay (next file) on mobile  
Display on mobile devices  
Styling possibilities in Chrome  
Not simply an audio context  
Everything works  
Contributions welcome  
