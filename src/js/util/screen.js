export const scrollTop = (querySelector) => {
    const container = document.querySelectorAll(querySelector)[0];
    if (container) {
        container.scrollTop = 0;
    }
};

export const isTouch = () => !!('ontouchstart' in window);
