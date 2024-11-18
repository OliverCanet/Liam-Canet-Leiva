document.addEventListener('wheel', (event) => {
    event.preventDefault();
    const container = document.querySelector('#container');
    const sectionHeight = window.innerHeight;

    // Modify the scroll distance to control smoothness
    const scrollDistance = sectionHeight;

    if (event.deltaY > 0) {
        container.scrollBy({ top: scrollDistance, left: 0, behavior: 'smooth' });
    } else {
        container.scrollBy({ top: -scrollDistance, left: 0, behavior: 'smooth' });
    }
}, { passive: false });

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    // IntersectionObserver to handle the visibility of each section (audio)
    const audioObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const audio = entry.target.querySelector("audio");
            if (audio) {
                audio.volume = 0.1; // Set volume to 30%
                if (entry.isIntersecting) {
                    audio.play();  // Play the audio when the section is in view
                } else {
                    audio.pause();  // Pause the audio when the section is out of view
                }
            }
        });
    }, { threshold: 0.6 }); // Trigger when 60% of the section is visible

    // IntersectionObserver to handle the visibility of each section (video)
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target.querySelector("video");
            if (video) {
                video.volume = 0.1; // Set volume to 30%
                if (entry.isIntersecting) {
                    video.play();  // Play the video when the section is in view
                } else {
                    video.pause();  // Pause the video when the section is out of view
                }
            }
        });
    }, { threshold: 0.6 }); // Trigger when 60% of the section is visible

    // Observe each section
    sections.forEach(section => {
        audioObserver.observe(section);
        videoObserver.observe(section);
    });
});
