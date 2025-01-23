function generateEmail() {
    let purpose = document.getElementById("emailPurpose").value.trim();
    let tone = document.getElementById("tone").value;
    let output = document.getElementById("emailOutput");

    if (!purpose) {
        output.value = "Please enter what your email is about.";
        return;
    }

    output.value = "AI is thinking... 🤖"; // Show loading text
    output.disabled = true; // Disable input while AI is "typing"

    let emailContent = createOriginalEmail(purpose, tone);

    // Call the typing effect function
    typeText(output, emailContent, 30); // Adjust speed (lower = faster)
}

// Function to simulate AI typing effect
function typeText(element, text, speed) {
    element.value = ""; // Clear previous text
    let index = 0;

    function type() {
        if (index < text.length) {
            element.value += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            element.disabled = false; // Re-enable textarea after typing
        }
    }

    type();
}

// AI-Generated Email Logic (Fully Dynamic)
function createOriginalEmail(purpose, tone) {
    let greetings = {
        formal: ["Dear [Recipient],", "To Whom It May Concern,", "Hello [Recipient],"],
        casual: ["Hey [Recipient],", "Hi [Recipient],", "Yo [Recipient]!"],
        funny: ["Sup [Recipient],", "Heyo [Recipient],", "Listen up [Recipient]!"],
        professional: ["Hello [Recipient],", "Dear [Recipient],", "Greetings [Recipient],"]
    };

    let closings = {
        formal: ["Best regards,", "Sincerely,", "Looking forward to your response,"],
        casual: ["Cheers,", "Talk soon,", "Take care,"],
        funny: ["Later alligator,", "Stay awesome,", "Catch you on the flip side,"],
        professional: ["Best,", "Thank you,", "Looking forward to discussing further,"]
    };

    let greeting = getRandomElement(greetings[tone]);
    let closing = getRandomElement(closings[tone]);
    let body = generateEmailBody(purpose, tone);

    return `${greeting}\n\n${body}\n\n${closing}\n[Your Name]`;
}

// AI-Generated Email Body (Fully Unique)
function generateEmailBody(purpose, tone) {
    let verbs = ["discuss", "follow up on", "clarify", "ask about", "bring to your attention", "request"];
    let adjectives = ["important", "urgent", "exciting", "quick", "essential", "helpful"];

    let chosenVerb = getRandomElement(verbs);
    let chosenAdjective = getRandomElement(adjectives);

    let openingSentences = {
        formal: [
            `I am reaching out to ${chosenVerb} an ${chosenAdjective} matter regarding ${purpose}.`,
            `I hope this email finds you well. I wanted to ${chosenVerb} ${purpose} with you.`,
            `I am writing to express my interest in discussing ${purpose} in further detail.`
        ],
        casual: [
            `Just wanted to drop a quick message about ${purpose}.`,
            `Hey! I was thinking about ${purpose} and wanted to reach out.`,
            `Hope you're doing well! Quick thing about ${purpose} I wanted to chat about.`
        ],
        funny: [
            `Alright, here’s the deal: ${purpose}. It’s a whole thing, but I figured you should know.`,
            `So, about ${purpose}... yeah, my bad! Hope all’s good though.`,
            `Listen, ${purpose} happened, and I need some serious backup. Let me know what you think!`
        ],
        professional: [
            `I wanted to take a moment to address ${purpose} and explore possible next steps.`,
            `I appreciate your time in considering this email regarding ${purpose}.`,
            `I would love the opportunity to discuss ${purpose} with you further.`
        ]
    };

    let middleSentences = {
        formal: [
            `Please let me know a convenient time to connect.`,
            `I would greatly appreciate your insights on this matter.`,
            `I am open to any recommendations you may have on how to proceed.`
        ],
        casual: [
            `Let me know what you think when you get a chance!`,
            `Would love to hear your thoughts.`,
            `Hit me up when you're free!`
        ],
        funny: [
            `Let’s figure this out before I make things worse 😅.`,
            `Seriously, no rush, but also... help? 😂`,
            `If this email doesn’t make sense, just pretend it never happened.`
        ],
        professional: [
            `I look forward to your thoughts and any next steps you’d recommend.`,
            `Please advise on how we can proceed.`,
            `Your guidance on this would be much appreciated.`
        ]
    };

    let closingSentences = {
        formal: [
            `Thank you for your time and consideration.`,
            `I appreciate your prompt response on this matter.`,
            `Looking forward to hearing from you soon.`
        ],
        casual: [
            `Talk soon!`,
            `Catch you later!`,
            `Looking forward to chatting.`
        ],
        funny: [
            `Hope this email wasn’t too chaotic. Cheers!`,
            `If you got this far, congrats! You survived my email.`,
            `Waiting for your legendary response.`
        ],
        professional: [
            `Please let me know how I can assist further.`,
            `I appreciate your time and effort.`,
            `Looking forward to your response.`
        ]
    };

    let opening = getRandomElement(openingSentences[tone]);
    let middle = getRandomElement(middleSentences[tone]);
    let closing = getRandomElement(closingSentences[tone]);

    return `${opening}\n\n${middle}\n\n${closing}`;
}

// Helper function to get a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function copyToClipboard() {
    let output = document.getElementById("emailOutput");
    output.select();
    document.execCommand("copy");
    alert("Email copied to clipboard!");
}
