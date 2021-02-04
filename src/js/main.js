"use strict";

//Form
const form = document.querySelector(".jsform");

function handleForm(ev) {
    ev.preventDefault();
}

form.addEventListener("submit", handleForm);

//Name
const fullName = document.querySelector(".jsname");
const previewName = document.querySelector(".jsnamepreview");

function handleName(ev) {
    let nameValue = fullName.value;

    if (nameValue === "") {
        previewName.innerHTML = "Paquita Salas";
    } else {
        previewName.innerHTML = nameValue;
    }
    // check intro key
    if (ev.keyCode === 13) {
        jobElement.focus();
    }
    saveInLocalStorage();
}

fullName.addEventListener("keyup", handleName);

//Job
const jobElement = document.querySelector(".jsjob");
const previewJob = document.querySelector(".jsjobpreview");

function handleJob(ev) {
    let jobValue = jobElement.value;

    if (jobValue === "") {
        previewJob.innerHTML = "CEO PS Management";
    } else {
        previewJob.innerHTML = jobValue;
    }

    if (ev.keyCode === 13) {
        mail.focus();
    }
    saveInLocalStorage();
}

jobElement.addEventListener("keyup", handleJob);

//Mail
const mail = document.querySelector(".jsmail");
const previewMail = document.querySelector(".jsmaillink");

function handleMail(ev) {
    let mailValue = mail.value;
    if (mailValue === "") {
        previewMail.href = "#";
    } else {
        previewMail.href = `mailto:${mailValue}`;
    }
    if (ev.keyCode === 13) {
        telephone.focus();
    }
    saveInLocalStorage();
}
mail.addEventListener("keyup", handleMail);

function preventLink(event) {
    console.log(event);
    if (mail.value === "") {
        event.preventDefault();
    }
    saveInLocalStorage();
}
previewMail.addEventListener("click", preventLink);

//Phone
const telephone = document.querySelector(".jsphone");
const previewTelephone = document.querySelector(".jsphonelink");

function handlePhone(ev) {
    let telephoneValue = telephone.value;

    if (telephoneValue === "") {
        previewTelephone.href = "#";
    } else {
        previewTelephone.href = `tel:${telephoneValue}`;
    }

    if (ev.keyCode === 13) {
        linkedin.focus();
    }
    saveInLocalStorage();
}
telephone.addEventListener("keyup", handlePhone);

function preventTelephone(event) {
    console.log(event);
    if (telephone.value === "") {
        event.preventDefault();
    }
    saveInLocalStorage();
}
previewTelephone.addEventListener("click", preventTelephone);

//Linkedin
const linkedin = document.querySelector(".jslinkedin");
const previewLinkedin = document.querySelector(".jslinkedinlink");

function handleLinkedin(ev) {
    let linkedinValue = linkedin.value;
    let newLinkedinValue = linkedinValue.replace(
        "https://www.linkedin.com/in/",
        ""
    );

    if (linkedinValue === "") {
        previewLinkedin.href = "#";
    } else {
        previewLinkedin.href = `https://www.linkedin.com/in/${newLinkedinValue}`;
    }
    if (ev.keyCode === 13) {
        github.focus();
    }
    saveInLocalStorage();
}
linkedin.addEventListener("keyup", handleLinkedin);

function preventLinkedin(event) {
    console.log(event);
    if (linkedin.value === "") {
        event.preventDefault();
    }
    saveInLocalStorage();
}
previewLinkedin.addEventListener("click", preventLinkedin);

//Github
const github = document.querySelector(".jsgithub");
const previewGithub = document.querySelector(".jsgithublink");

function handleGithub(ev) {
    let githubValue = github.value;
    let newGithubValue = githubValue.replace("https://github.com/", "");

    if (githubValue === "") {
        previewGithub.href = "#";
    } else {
        previewGithub.href = `https://github.com/${newGithubValue}`;
    }
    // check intro key
    if (ev.keyCode === 13) {
        const dropdownShareBtn = document.querySelector(".dropdownshare-btn");
        dropdownShareBtn.click();
        const shareBtn = document.querySelector(".jssharebtn");
        shareBtn.focus();
    }
    saveInLocalStorage();
}
github.addEventListener("keyup", handleGithub);

function preventGithub(event) {
    console.log(event);
    if (github.value === "") {
        event.preventDefault();
    }
    saveInLocalStorage();
}


getFromLocalStorage(); //A priori, no es necesario invocarlas de nuevo al final, porque ya quedan invocadas cuando comienza a correr getFromLocalStorage() /* updateAllInputs(); updatePalette(); updatePhoto(); */