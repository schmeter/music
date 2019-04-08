export const scrollTop = (querySelector) => {
    const container = document.querySelector(querySelector);

    if (container) {
        container.scrollTop = 0;
    }
};

export const isTouch = () => !!('ontouchstart' in window);
