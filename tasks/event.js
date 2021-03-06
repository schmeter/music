module.exports = function(grunt) {
    grunt.registerTask('event', function() {
        const { readJSON, write } = grunt.file;

        const eventPath = `${grunt.config('datFolder')}/event.json`;
        const imgPath = `${grunt.config('tmpFolder')}/flyer.json`;
        const resultPath = `${grunt.config('tmpFolder')}/event.json`;

        const eventData = readJSON(eventPath);
        const imgData = readJSON(imgPath);

        const addImgPath = (eventData, imgData, path) => {
            if (eventData.artists) {
                eventData.artists.forEach(artist => {
                    if (imgData[artist.id]) {
                        addImgPath(artist, imgData[artist.id], `${path}${artist.id}/`);
                    }
                });
            } else if (eventData.events) {
                eventData.events.forEach((event, index) => {
                    if (imgData[event.date]) {
                        eventData.events[index] = Object.assign({}, event, {
                            imgPath: `${path}${event.date}/flyer.jpg`,
                        });
                    }
                });
            }
        };

        addImgPath(eventData, imgData, '/img/flyer/');

        write(resultPath, JSON.stringify(eventData, null, 4));
    });
};
