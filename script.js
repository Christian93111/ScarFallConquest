//--------------------------------------------------------------------------------- Index (Main Page) ---------------------------------------------------------------------------------

const descriptionText = "Your ultimate destination for competitive gaming excitement! Immerse yourself in the adrenaline-pumping world of ScarFall 2.0 tournaments, where skilled players come together to showcase their prowess in thrilling scrim matches. At ScarFall Conquest, we take pride in organizing high-stakes Tournaments with enticing prize pools, offering participants the chance to claim victory and earn fantastic rewards. What sets us apart is our commitment to providing an inclusive gaming experience. We believe in leveling the playing field, and that's why entry to our Tournaments is entirely free. Whether you're a seasoned gamer or just starting your Esports journey, Scarfall Conquest welcomes players of all skill levels to join the action-packed battles. Join us on this gaming adventure, where every match is a chance to prove your skills, forge new connections with fellow gamers, and bask in the thrill of ScarFall 2.0 Conquest. Your journey to glory starts here. let the gaming commence!";

function typeDescription() {
    const descriptionElement = document.getElementById('description');
    if (!descriptionElement) return; // Check if element exists

    descriptionElement.textContent = ''; // Clear existing text

    let index = 0;

    function type() {
        if (index < descriptionText.length) {
            descriptionElement.textContent += descriptionText.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust the typing speed (milliseconds)
        }
    }

    type();
}

document.addEventListener('DOMContentLoaded', typeDescription);


//--------------------------------------------------------------------------------- Links ---------------------------------------------------------------------------------

const linkText = "Be sure Follow to keep up with the Latest News and Updates.";

function typelink() {
    const linkElement = document.getElementById('links');
    if (!linkElement) return; // Check if element exists

    linkElement.textContent = ''; // Clear existing text

    let index = 0;

    function type() {
        if (index < linkText.length) {
            linkElement.textContent += linkText.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust the typing speed (milliseconds)
        }
    }

    type();
}

document.addEventListener('DOMContentLoaded', typelink());


//--------------------------------------------------------------------------------- About ---------------------------------------------------------------------------------

const aboutText = "ScarFall Conquest is a platform for competitive gaming enthusiasts who want to challenge themselves and others in the exciting world of ScarFall 2.0. We are a team of passionate gamers who love to create and host tournaments that are fun, fair, and rewarding for all participants. Our mission is to provide an inclusive and accessible gaming experience for everyone who loves ScarFall 2.0. We believe that anyone can be a champion, regardless of their skill level, background, or budget. That's why we offer free entry to all our tournaments, as well as attractive prize pools that can motivate and inspire players to achieve their goals. At ScarFall Conquest, we value community, integrity, and excellence. We strive to create a friendly and supportive environment where gamers can connect, learn, and grow together. We also uphold the highest standards of professionalism and ethics in organizing and conducting our tournaments. We respect the rules, the players, and the game. If you share our vision and passion for ScarFall 2.0, we invite you to join us on this gaming adventure. Whether you want to compete, spectate, or collaborate, you are welcome at ScarFall Conquest. Your journey to glory starts here let the gaming commence!";

function typeabout() {
    const aboutElement = document.getElementById('about');
    if (!aboutElement) return; // Check if element exists

    aboutElement.textContent = ''; // Clear existing text

    let index = 0;

    function type() {
        if (index < aboutText.length) {
            aboutElement.textContent += aboutText.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust the typing speed (milliseconds)
        }
    }

    type();
}

document.addEventListener('DOMContentLoaded', typeabout());


//--------------------------------------------------------------------------------- History ---------------------------------------------------------------------------------

const historyText = "It all began on November 25, 2023, when two visionaries, FUNLIX VFX and Christian, joined forces to create a server that would change the gaming landscape forever. Later, BESTSG joined the team as a tournament manager and played a crucial role in shaping the organization's success. His dedication and hard work earned him the title of co-owner of SC! Together, they organized the first-ever ESports Tournament in the ScarFall 2.0 community, introducing competitive gaming to the platform. The prize pool was a modest 100 INR, but the support from the community was overwhelming! This marked the beginning of ScarFall Conquest journey, and since then, the organization has hosted numerous tournaments, with the Jagannath Season Cup being the most popular among fans. As we move forward, we're committed to taking ScarFall Conquest to new heights, and we're excited to have you along for the ride! Stay tuned for more updates, and let's make history together!";

function typehistory() {
    const historyElement = document.getElementById('history');
    if (!historyElement) return; // Check if element exists

    historyElement.textContent = ''; // Clear existing text

    let index = 0;

    function type() {
        if (index < historyText.length) {
            historyElement.textContent += historyText.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust the typing speed (milliseconds)
        }
    }

    type();
}

document.addEventListener('DOMContentLoaded', typehistory());


//--------------------------------------------------------------------------------- Deep Links (For Mobile And PC) ---------------------------------------------------------------------------------

// 1.) Check For Mobile Device
var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);

// 2.) Use Different Url Scheme for App if Mobile
document.getElementById('discord').addEventListener('click', function () {
    if (isMobile) {
        // 3.) Try to Open the App
        try {
            navigator.startApp.check('discord://discordapp.com/invite/r378Ey3Z4D').then(function () {
                window.location.href = 'discord://discordapp.com/invite/r378Ey3Z4D'; // 4.) App is Installed, Redirect to App Url
            });
        } catch (error) {
            window.location.href = 'https://discord.gg/r378Ey3Z4D'; // 5.) App is not Installed, Show a Link to The App
        }
    } else {
        window.location.href = 'https://discord.gg/r378Ey3Z4D'; // Desktop Users
    }
});

// 6.) Repeat the same Logic for other Apps
document.getElementById('youtube').addEventListener('click', function () {
    if (isMobile) {
        try {
            navigator.startApp.check('vnd.youtube://user/UCOh7Qq9mmn6m1U17D9JxLpw').then(function () {
                window.location.href = 'vnd.youtube://user/COh7Qq9mmn6m1U17D9JxLpw';
            });
        } catch (error) {
            window.location.href = 'https://youtube.com/@SCARFALL_CONQUEST';
        }
    } else {
        window.location.href = 'https://www.youtube.com/@SCARFALL_CONQUEST';
    }
});

document.getElementById('instagram').addEventListener('click', function () {
    if (isMobile) {
        try {
            navigator.startApp.check('instagram://user?username=scarfall_conquest').then(function () {
                window.location.href = 'instagram://user?username=scarfall_conquest';
            });
        } catch (error) {
            window.location.href = 'https://www.instagram.com/scarfall_conquest';
        }
    } else {
        window.location.href = 'https://www.instagram.com/scarfall_conquest';
    }
});

document.getElementById('whatsapp').addEventListener('click', function () {
    if (isMobile) {
        try {
            navigator.startApp.check('whatsapp://chat?code=0029VaFeaAF4SpkO5Ggu050k').then(function () {
                window.location.href = 'whatsapp://chat?code=0029VaFeaAF4SpkO5Ggu050k';
            });
        } catch (error) {
            window.location.href = 'https://whatsapp.com/channel/0029VaFeaAF4SpkO5Ggu050k';
        }
    } else {
        window.location.href = 'https://whatsapp.com/channel/0029VaFeaAF4SpkO5Ggu050k';
    }
});