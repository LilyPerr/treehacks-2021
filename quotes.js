/**
 * List of quotes
 * @type {{}}
 */

// Usage: quotes.low.serious[0].title

const quotes = {
    low: {
        serious: [
            {
                title: "Guarantee Timmie an Education",
                description: "Donate to the Kids in Need Foundation to provide children with the school supplies they need to flourish.",
                image_url: "/img/entry-kidsinneed.png",
                organization: "Kids in Need Foundation"
            },
            {
                title: "Provide Food for People Experiencing Homelessness",
                description: "Donate to the National Alliance to End Homelessness to provide housing and crisis funds to the homeless in the United States.",
                image_url: "/img/entry-homelessness.png",
                organization: "National Alliance to End Homelessness"
            },
            {
                title: "Save a Child’s Life",
                description: "Donate to St. Jude Children’s Research Hospital to help children recover from unfortunate ailments.",
                image_url: "/img/entry-jude.png",
                organization: "St. Jude Children's Research Hospital"
            }
        ],
        silly: [
            {
                title: "UC Berkeley Hoodie",
                description: "Such a waste of money, right?",
                image_url: "/img/entry-hoodie.png"
            },
            {
                title: "Among Us Skins",
                description: "Gotta make sure your virtual avatar looks cute when you’re inevitably tossed into the vacuum of space.",
                image_url: "/img/amongus.png"
            },
            {
                title: "An Extra iPhone Headphones Dongle",
                description: "Who doesn’t want their phone to look like an octopus?",
                image_url: "/img/dongle.png"
            },
            {
                title: "More Baking Supplies",
                description: "One more batch of quarantine cookies won’t hurt, right?",
                image_url: "/img/baking.png"
            }
        ],
    },
    medium: {
        serious: [
            {
                title: "Sponsor a Future US Citizenship",
                description: "Donate to Citizenshipworks to help make applying for United States citizenship safer, simpler, and more affordable, and to bring the power of citizenship to more people.",
                image_url: "/img/entry-citizenship.png"
            },
            {
                title: "Adopt a Puppy or Kitten",
                description: "Provide a forever home for an adorable new friend from the Humane Society or donate to support the organization’s efforts.",
                image_url: "/img/adopt.png"
            },
            {
                title: "Support Mental Health Initiatives",
                description: "Donate to Mental Health America to help fund mental health therapy programs for children and adults in the United States.",
                image_url: "/img/mental.png"
            }
        ],
        silly: [
            {
                title: "Invest in Gamestop Stock",
                description: "With a peak price of $350, you’re sure to net a great return on your investment!",
                image_url: "/img/entry-gme.png"
            },
            {
                title: "500 Cup Noodles",
                description: "Try all of their 100+ delicious flavors at least 5 times each!",
                image_url: "/img/entry-ramen.png"
            },
            {
                title: "Upgrade Your Wifi",
                description: "Make sure that your Netflix and Disney Plus accounts never decrease their streaming quality by ensuring that you have the best wifi possible.",
                image_url: "/img/streaming.png"
            }
        ],
    },
    high: {
        serious: [
            {
                title: "End COVID-19",
                description: "Donate money to the National Foundation for Infectious Diseases to support vaccine research for deadly diseases, such as Covid-19, Polio, and more.",
                image_url: "/img/entry-disease.png"
            },
            {
                title: "End Deforestation in the Amazon",
                description: "Stop hacking the trees and go to TreeHacks!",
                image_url: "/img/entry-trees.png"
            },
            {
                title: "Cleanup Oil Spills in the World",
                description: "Support the International Spill Control Organization (ISCO) to raise worldwide preparedness to oil and chemical spills all over the world.",
                image_url: "/img/entry-oil.png"
            }
        ],
        silly: [
            {
                title: "A Semester of your Online College’s Tuition",
                description: "Still paying full price to attend Zoom University?",
                image_url: "/img/entry-zoom.png"
            },
            {
                title: "Sue the Electoral College",
                description: "Lost an election recently? Go ahead and sue them!",
                image_url: "/img/entry-electoral.png"
            }
        ]
    }
}

function getQuote(level, type, index) {
    var level_string;
    var type_string;
    switch (parseInt(level)) {
        case 1: level_string = "low"; break;
        case 2: level_string = "medium"; break;
        case 3: level_string = "high"; break;
        default: level_string = "unknown";
    }
    type_string = (type == 1) ? "serious" : "silly";
    return quotes[level_string][type_string][parseInt(index)];
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