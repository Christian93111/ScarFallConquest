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

const aboutText = "ScarFall Conquest is a platform for competitive gaming enthusiasts who want to challenge themselves and others in the exciting world of ScarFall 2.0. We are a team of passionate gamers who love to create and host tournaments that are fun, fair, and rewarding for all participants. Our mission is to provide an inclusive and accessible gaming experience for everyone who loves ScarFall 2.0. We believe that anyone can be a champion, regardless of their skill level, background, or budget. That's why we offer free entry to all our tournaments, as well as attractive prize pools that can motivate and inspire players to achieve their goals. At ScarFall Conquest, we value community, integrity, and excellence. We strive to create a friendly and supportive environment where gamers can connect, learn, and grow together. We also uphold the highest standards of professionalism and ethics in organizing and conducting our tournaments. We respect the rules, the players, and the game. If you share our vision and passion for ScarFall 2.0, we invite you to join us on this gaming adventure. Whether you want to compete, spectate, or collaborate, you are welcome at ScarFall Conquest. Your journey to glory starts here. let the gaming commence!";

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

function handleAppLink(appScheme, appDeepLink, webUrl) {
    if (isMobile) {
        try {
            navigator.startApp.check(appScheme).then(function () {
                window.location.href = appDeepLink;
            }).catch(function () {
                window.location.href = webUrl;
            });
        } catch (error) {
            window.location.href = webUrl;
        }
    } else {
        window.location.href = webUrl;
    }
}

document.getElementById('discord').addEventListener('click', function () {
    handleAppLink('discord://', 'discord://discordapp.com/invite/r378Ey3Z4D', 'https://discord.gg/r378Ey3Z4D');
});

document.getElementById('youtube').addEventListener('click', function () {
    handleAppLink('vnd.youtube://', 'vnd.youtube://user/UCOh7Qq9mmn6m1U17D9JxLpw', 'https://m.youtube.com/@SCARFALL_CONQUEST');
});

document.getElementById('instagram').addEventListener('click', function () {
    handleAppLink('instagram://', 'instagram://user?username=scarfall_conquest', 'https://www.instagram.com/scarfall_conquest');
});

document.getElementById('whatsapp').addEventListener('click', function () {
    handleAppLink('whatsapp://', 'whatsapp://chat?code=0029VaFeaAF4SpkO5Ggu050k', 'https://whatsapp.com/channel/0029VaFeaAF4SpkO5Ggu050k');
});
