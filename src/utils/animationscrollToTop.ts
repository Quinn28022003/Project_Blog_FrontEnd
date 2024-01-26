export const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 30);

    const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
};