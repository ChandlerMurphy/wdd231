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

                if (result === "") {
                    result = `NA`;
                }
            }
        });
        return(result)
    }
    
    const showInfo = document.querySelector("#results");
    showInfo.innerHTML = `
    <p>Name: ${show("userName")}</p>
    <p>Date: ${show("reviewDate")}</p>
    <p>Phone: ${show("phone")}</p>
    <p>Organization: ${show("organization-place")}</p>
    <p>Membership: ${show("membership")}</p>
    <p>Date: ${show('timestamp')}<p>
    `
})

