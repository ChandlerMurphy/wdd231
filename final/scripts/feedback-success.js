document.addEventListener("DOMContentLoaded", () => {
    const currentUrl = window.location.href;

    const everything = currentUrl.split("?");
    let formData = everything[1].split("&");
    
    function show(cup) {
        formData.forEach(element => {
            if (element.startsWith(cup)) {
                result = element.split("=")[1].replace("%40", "@")
                result = result.replaceAll("+", " ");
                result = result.replaceAll("%28", "(");
                result = result.replaceAll("%29", ")");
                result = result.replaceAll("%21", "!");
                result = result.replaceAll("oneStar", "☆")
                result = result.replaceAll("twoStar", "☆☆")
                result = result.replaceAll("threeStar", "☆☆☆")
                result = result.replaceAll("fourStar", "☆☆☆☆")
                result = result.replaceAll("fiveStar", "☆☆☆☆☆")

                if (result === "") {
                    result = `NA`;
                }
            }
        });
        return(result)
    }

    let numVisits = Number(window.localStorage.getItem("numVisits")) || 0;
    if (numVisits !== 0) {
        numVisits = numVisits;
    } 
    
    numVisits++;
    localStorage.setItem("numVisits", numVisits);
    
    const showInfo = document.querySelector("#results");
    showInfo.innerHTML = `
    <p><span class="results-title">Name: </span><br><br>${show("userName")}</p>
    <p><span class="results-title">Date: </span><br><br>${show("reviewDate")}</p>
    <p><span class="results-title">Site Rating: </span><br><br>${show("starRating")}</p>
    <p><span class="results-title">Referral Source: </span><br><br>${show("writtenReview")}</p>
    <p><span class="results-title">Feedback Given: </span><br><br>${show("feedback")}</p>
    <p><span class="results-title">Total Number of Feedback Forms Submitted: </span><br><br>${numVisits}</p>
    `
})

