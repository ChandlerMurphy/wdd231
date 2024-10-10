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
        }
    });
    return(result)
}

const showInfo = document.querySelector("#results");
showInfo.innerHTML = `
<p>Name: ${show("first")} ${show("last")}</p>
<p>Email: ${show("email")}</p>
<p>Phone: ${show("phone")}</p>
<p>Organization: ${show("organization-place")}</p>
<p>Membership: ${show("membership")}</p>
<p>Date: ${show('timestamp')}<p>
`

// First Name, Last Name, Email, Phone, organization, membership, timestamp