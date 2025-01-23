function generateEmail() {
    let template = document.getElementById("template").value;
    let emailBody = document.getElementById("emailBody");

    let emailTemplates = {
        formal: "Dear [Name],\n\nI hope this email finds you well. I wanted to discuss [Topic]. Please let me know a convenient time to connect.\n\nBest regards,\n[Your Name]",
        casual: "Hey [Name],\n\nJust wanted to check in and say hi! Hope you're doing well. Let’s catch up soon!\n\nCheers,\n[Your Name]",
        funny: "Yo [Name],\n\nI was gonna write something important, but I forgot. Hope you're alive and doing cool stuff. Let's talk soon before AI replaces us all.\n\nLater,\n[Your Name]"
    };

    emailBody.value = emailTemplates[template];
}

function copyToClipboard() {
    let emailBody = document.getElementById("emailBody");
    emailBody.select();
    document.execCommand("copy");
    alert("Email copied to clipboard!");
}
