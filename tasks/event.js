module.exports = function(grunt) {
    grunt.registerTask('event', function() {
        const { readJSON, write } = grunt.file;

        const eventPath = `${grunt.config('datFolder')}/event.json`;
        const imgPath = `${grunt.config('tmpFolder')}/flyer.json`;
        const resultPath = `${grunt.config('tmpFolder')}/event.json`;

        const eventData = readJSON(eventPath);
        const imgData = readJSON(imgPath);

        const addImgPath = (eventData, imgList, path) => {
            if (eventData.artists) {
                eventData.artists.forEach(artist => {
                    if (imgList[artist.id]) {
                        addImgPath(artist, imgList[artist.id], `${path}${artist.id}/`);
                    }
                });
            } else if (eventData.events) {
                eventData.events.forEach((event, index) => {
                    if (imgList[event.date]) {
                        eventData.events[index] = Object.assign({}, event, {
                            imgPath: `${path}${event.date}/flyer.jpg`,
                        });
                    }
                });
            }
        };

        const baseItem = eventData.id ? imgData[eventData.id] : imgData;
        const basePath = `img/flyer/${(eventData.id ? `${eventData.id}/` : '')}`;

        addImgPath(eventData, baseItem, basePath);

        write(resultPath, JSON.stringify(eventData, null, 4));
    });
};
