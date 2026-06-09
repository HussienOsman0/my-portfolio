const isMobile = window.innerWidth <= 768;

if (isMobile) {

    gsap.set(
        ".profile-img,.cb-anim-card,.cb-feature-anim,.sh-feature,.gb-feature",
        {
            opacity: 1,
            x: 0,
            y: 0
        }
    );

    ScrollTrigger.getAll().forEach(trigger => {
        trigger.refresh();
    });
}