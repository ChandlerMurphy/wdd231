function daysSinceVisit(lastVisit) {
    const now = new Date();
    const lastVisitDate = new Date(lastVisit);
    const timeDif = now - lastVisitDate;
    return Math.floor(timeDif / (1000 * 60 * 60 *24));
};

document.addEventListener("DOMContentLoaded", function() {
    const lastVisit = localStorage.getItem("lastVisit");
    const now = new Date();

    localStorage.setItem("lastVisit", now.toISOString());

    const messageElement = document.querySelector("#visit-msg");
    if (!lastVisit) {
        messageElement.textContent = `Welcome! Let us know if you have any questions.`;
    } else {
        const daysSinceVisitCount = daysSinceVisit(lastVisit);
        if (daysSinceVisitCount < 1) {
            messageElement.textContent = `Back so soon! Awesome!` 
        } else {
            const dayLabel = daysSinceVisitCount === 1 ? "day" : "days";
            messageElement.textContent = `You last visited ${daysSinceVisitCount} ${dayLabel} ago.`;
        }
    }
});