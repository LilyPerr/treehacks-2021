/**
 * List of quotes
 * @type {{}}
 */

// Usage: quotes.low.serious[0].title

const quotes = {
    low: {
        serious: [
            {
                title: "Guarantee Timmie's Education",
                description: "Donate to Kids in Need Foundation to provide children with school supplies they need to succeed.",
                image_url: "img/entry-kidsinneed.png",
                org: "Kids in Need Foundation"
            },
            {
                title: "Feed People Experiencing Homelessness",
                description: "Donate to the National Alliance to End Homelessness to provide crisis funds for those without homes.",
                image_url: "img/entry-homelessness.png",
                org: "National Alliance to End Homelessness"
            },
            {
                title: "Save a Child’s Life",
                description: "Donate to St. Jude Children’s Research Hospital to help children recover from ailments and diseases.",
                image_url: "img/entry-jude.png",
                org: "St. Jude Children’s Research Hospital"
            }
        ],
        silly: [
            {
                title: "UC Berkeley Hoodie",
                description: "A common enemy for Stanford, USC, and UCI! Why would you ever wear this?",
                image_url: "img/entry-hoodie.png"
            },
            {
                title: "Among Us Skins",
                description: "Cuteness is top priority when your avatar’s tossed into the vacuum of space.",
                image_url: "img/entry-amongus.png"
            },
            {
                title: "Extra iPhone Dongle",
                description: "Who doesn’t want their phone to look like an octopus, especially when you already bought headphones?",
                image_url: "img/entry-dongle.png"
            },
            {
                title: "More Baking Supplies",
                description: "One more batch of quarantine cookies on your Insta story won’t hurt, right?",
                image_url: "img/entry-baking.png"
            }
        ],
    },
    medium: {
        serious: [
            {
                title: "Sponsor a Future US Citizen",
                description: "Help Citizenshipworks make applying for American citizenship safe, simple, and affordable.",
                image_url: "img/entry-citizenship.png",
                org: "Citizenshipworks"
            },
            {
                title: "Adopt a Puppy or Kitten",
                description: "Provide a fur-ever home for an adorable new friend from the Humane Society.",
                image_url: "img/entry-adopt.png",
                org: "Humane Society"
            },
            {
                title: "Support Mental Health Initiatives",
                description: "Donate to Mental Health America to help fund therapy for youth and adults.",
                image_url: "img/entry-mental.png",
                org: "Mental Health America"
            }
        ],
        silly: [
            {
                title: "Invest in Gamestop Stock",
                description: "With a peak price of $350, get a stock everyone believes in! To the moon!",
                image_url: "img/entry-gme.png"
            },
            {
                title: "500 Cup Noodles",
                description: "Try all of their 100+ delicious flavors at least 5 times each!",
                image_url: "img/entry-ramen.png"
            },
            {
                title: "Upgrade Your Wifi",
                description: "Binge quarantine shows even faster from the comfort of your couch.",
                image_url: "img/entry-streaming.png"
            }
        ],
    },
    high: {
        serious: [
            {
                title: "End COVID-19",
                description: "Help National Foundation for Infectious Diseases support vaccine research for deadly diseases.",
                image_url: "img/entry-disease.png",
                org: "National Foundation for Infectious Diseases"
            },
            {
                title: "End Deforestation in the Amazon",
                description: "Preserve the environment’s resources. Stop hacking trees and keep Trees Hacking!",
                image_url: "img/entry-trees.png",
                org: "Amazon Watch"
            },
            {
                title: "Clean Up Oil Spills",
                description: "Support International Spill Control to raise global preparedness for oil and chemical spills.",
                image_url: "img/entry-oil.png",
                org: "International Spill Control"
            }
        ],
        silly: [
            {
                title: "Semester of Online College Tuition",
                description: "Because ZoomU is just as valuable to your education as the real thing, right?",
                image_url: "img/entry-zoom.png"
            },
            {
                title: "Contest the Electoral College",
                description: "Lost a fair and free election for President of the United States recently? Go ahead and sue!",
                image_url: "img/entry-trump.png"
            }
        ]
    }
}

function getQuote(level, type, index) {
    // var level_string;
    // var type_string;
    // switch (parseInt(level)) {
    //     case 1: level_string = "low"; break;
    //     case 2: level_string = "medium"; break;
    //     case 3: level_string = "high"; break;
    //     default: level_string = "unknown";
    // }
    // type_string = (type == 1) ? "serious" : "silly";
    // return quotes[level_string][type_string][parseInt(index)];
    var quotes = getQuotesByType(level, type);
    return quotes[index];
}

function getQuotesByType(level, type) {
    var level_string;
    var type_string;
    switch (parseInt(level)) {
        case 1: level_string = "low"; break;
        case 2: level_string = "medium"; break;
        case 3: level_string = "high"; break;
        default: level_string = "unknown";
    }
    type_string = (type == 1) ? "serious" : "silly";
    return quotes[level_string][type_string];
}