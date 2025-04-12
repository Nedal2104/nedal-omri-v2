function checkLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "admin" && password === "1234") {
        document.querySelector(".overlay").style.display = "none";
        document.querySelector(".main-content").style.display = "block";
        return false;
    } else {
        document.getElementById("error").innerText = "שם משתמש או סיסמה שגויים";
        return false;
    }
}
function search() {
    const query = document.getElementById("search").value.toLowerCase();
    const links = {
        "דלקת": "https://www.clalit.co.il/he/your_health/family/Pages/inflammation.aspx",
        "סוכרת": "https://www.maccabi4u.co.il/5606-he/Maccabi.aspx",
        "לחץ דם": "https://www.mayoclinic.org/diseases-conditions/high-blood-pressure"
    };
    let result = "לא נמצאה תוצאה";
    for (let term in links) {
        if (query.includes(term)) {
            result = `<a href="${links[term]}" target="_blank">קישור למידע על ${term}</a>`;
            break;
        }
    }
    document.getElementById("results").innerHTML = result;
}
