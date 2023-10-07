//Model

const model = {
    app: {
        loggedInUser: null,
        currentPage: 'loginPage',
        displayMode: 'dark',
        language: 'no',
        logo: './img/turtlePowerLogo',
    },
    inputs: {
        user: {
            username: '',
            password: '',
            email: '',
            profileImage: '',
            isAdmin: false,
            description: '',
            favoriteMovies: [],
        },
    },
    //Data
    users:[
        //user for easy access:
        // {
        //     username: '',
        //     password: '',
        // },
        {
            username: 'Ellie',
            password: '1234',
            email: 'elliemarie@getacademy.no',
            profileImage: './img/profileImages/EllieMarie.jpg',
            isAdmin: true,
            description: "Hello, my name is Ellie, and I'm the developer of this website. I'm writing everthing myself and this is only for training purpuses, but it is a really fun project to work on.",
            favoriteMovies: [],
        },
        {
            username: 'Admin',
            password: '1234',
            email: 'elliemarie@getacademy.no',
            profileImage: '',
            isAdmin: true,
            description: "Im the Admin here",
            favoriteMovies: [],
        },
    ],
    
    movies:[
        {
            id: 1,
            title: 'The Dukes of hazzard',
            releaseDate: '2005',
            cover: 'dukesOfHazzard.jpg',
            duration: '1h and 44m',
            description: "Cousins Bo, Luke, and Daisy Duke, and their uncle Jesse, egg on the authorities of Hazzard County, Boss Hogg and Sheriff Coltrane",
            overallRating: '510',
            personalRating: '950',
            genre: ['Comedy'],
            directors: ['Jay Chandrasekhar'],
            staringActors: ['Seann William Scott', 'Johnny Knoxville', 'Jessica Simpson'],
        },
        {
            id: 2,
            title: 'The Grudge (2004)',
            releaseDate: '2004',
            cover: 'theGrudge.jpg',
            duration: '1h and 31m',
            description: "An American nurse living and working in Tokyo is exposed to a mysterious supernatural curse, one that locks a person in a powerful rage before claiming their life and spreading to another victim.",
            overallRating: '590',
            personalRating: '832',
            genre: ['Horror', 'Mystery', 'Thriller'],
            directors: ['Takashi Shimizu'],
            staringActors: ['Sarah Michelle Gellar', 'Jason Behr', 'Clea DuVall'],
        },
        {
            id: 3,
            title: 'Titanic',
            releaseDate: '1997',
            cover: 'titanic.jpg',
            duration: '3h and 14m',
            description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
            overallRating: '790',
            personalRating: '560',
            genre: ['Drama', 'Romance'],
            directors: ['James Cameron'],
            staringActors: ['Leonardo DiCaprio', 'Kate Winslet', 'Billy Zane'],
        },
        {
            id: 4,
            title: 'Eerie',
            releaseDate: '2018',
            cover: 'eerie.jpg',
            duration: '1h and 41m',
            description: "When a student's suicide rattles an all-girls Catholic school, a clairvoyant guidance counselor leans on a ghost to uncover the convent's abusive past.",
            overallRating: '470',
            personalRating: '654',
            genre: ['Horror', 'Mystery', 'Thriller'],
            directors: ['Mikhal Red'],
            staringActors: ['Bea Alonzo', 'Charo Santos-Concie', 'Jake Cuenca'],
        },
        {
            id: 5,
            title: 'Shrek',
            releaseDate: '2001',
            cover: 'shrek.jpg',
            duration: '1h and 30m',
            description: "A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.",
            overallRating: '790',
            personalRating: '895',
            genre: ['Animation', 'Adventure', 'Comedy'],
            directors: ['Andrew Adamson', 'Vicky Jenson'],
            staringActors: ['Mike Myers', 'Eddie Murphy', 'Cameron Diaz'],
        },
        {
            id: 6,
            title: 'The Lion King',
            releaseDate: '1994',
            cover: 'theLionKing.jpg',
            duration: '1h and 28m',
            description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
            overallRating: '850',
            personalRating: '670',
            genre: ['Animation', 'Adventure', 'Drama'],
            directors: ['Roger Allers', 'Rob Minkoff'],
            staringActors: ['Matthew Broderick', 'Jeremy Irons', 'James Earl Jones'],
        },
        {
            id: 7,
            title: 'Inside Out',
            releaseDate: '2015',
            cover: 'insideOut.jpg',
            duration: '1h and 35m',
            description: "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust, and Sadness - conflict on how best to navigate a new city, house, and school.",
            overallRating: '810',
            personalRating: '937',
            genre: ['Animation','Adventure', 'Comedy'],
            directors: ['Pete Docter', 'Ronnie Del Carmen'],
            staringActors: ['Amy Poehler', 'Bill Hader', 'Lewis Black'],
        },
        {
            id: 8,
            title: 'The Godfather',
            releaseDate: '1972',
            cover: 'theGodfather.jpg',
            duration: '2h and 55m',
            description: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
            overallRating: '920',
            personalRating: '634',
            genre: ['Crime', 'Drama'],
            directors: ['Francis Ford Coppola'],
            staringActors: ['Marlon Brando', 'Al Pacino', 'James Caan'],
        },
        {
            id: 9,
            title: 'Jurassic Park',
            releaseDate: '1993',
            cover: 'jurassicPark.jpg',
            duration: '2h and 7m',
            description: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
            overallRating: '820',
            personalRating: '744',
            genre: ['Action', 'Adventure', 'Sci-Fi'],
            directors: ['Steven SpielBerg'],
            staringActors: ['Sam Niell', 'Laura Dern', 'Jeff Goldblum'],
        },
        {
            id: 10,
            title: 'Monty Python`s Life of Brian',
            releaseDate: '1979',
            cover: 'lifeOfBrian.jpg',
            duration: '1h and 34m',
            description: "Born on the original Christmas in the stable next door to Jesus Christ, Brian of Nazareth spends his life being mistaken for a messiah.",
            overallRating: '800',
            personalRating: '879',
            genre: ['Comedy'],
            directors: ['Terry Jones'],
            staringActors: ['Grahm Chapman', 'John Cleese', 'Michael Palin'],
        },
        {
            id: 11,
            title: 'The Lord of The Rings',
            releaseDate: '2001',
            cover: 'lordOfTheRings.jpg',
            duration: '2h and 58m',
            description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
            overallRating: '880',
            personalRating: '900',
            genre: ['Action', 'Adventure', 'Drama'],
            directors: ['Peter Jackson'],
            staringActors: ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom'],
        },
        {
            id: 12,
            title: 'Pulp Fiction',
            releaseDate: '1994',
            cover: 'pulpFiction.jpg',
            duration: '2h and 34m',
            description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            overallRating: '890',
            personalRating: '903',
            genre: ['Crime', 'Drama'],
            directors: ['Quentin Tarantino'],
            staringActors: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
        },
        {
            id: 13,
            title: 'Fight Club',
            releaseDate: '1999',
            cover: 'fightClub.jpg',
            duration: '2h and 19m',
            description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
            overallRating: '880',
            personalRating: '923',
            genre: ['Drama'],
            directors: ['David Fincher'],
            staringActors: ['Brad Pitt', 'Edward Norton', 'Meat Loaf'],
        },
        {
            id: 14,
            title: 'Forrest Gump',
            releaseDate: '1994',
            cover: 'forrestGump.jpg',
            duration: '2h and 22m',
            description: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
            overallRating: '882',
            personalRating: '611',
            genre: ['Drama', 'Romance'],
            directors: ['Robert Zemeckis'],
            staringActors: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
        },
        {
            id: 15,
            title: 'Se7en',
            releaseDate: '1995',
            cover: 'se7en.jpg',
            duration: '2h and 7m',
            description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
            overallRating: '860',
            personalRating: '600',
            genre: ['Crime', 'Drama', 'Mystery'],
            directors: ['David Fincher'],
            staringActors: ['Morgan Freeman', 'Brad Pitt', 'Kevin Spacey'],
        },
        {
            id: 16,
            title: 'The Silence of the Lambs',
            releaseDate: '1991',
            cover: 'theSilenceOfTheLambs.jpg',
            duration: '1h and 58m',
            description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
            overallRating: '867',
            personalRating: '869',
            genre: ['Crime', 'Drama', 'Thriller'],
            directors: ['Jonathan Demme'],
            staringActors: ['Thomas Harris', 'Ted Tally'],
        },
        {
            id: 17,
            title: 'Interstellar',
            releaseDate: '2014',
            cover: 'interstellar.jpg',
            duration: '2h and 49m',
            description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
            overallRating: '870',
            personalRating: '634',
            genre: ['Adventure', 'Drama', 'Sci-Fi'],
            directors: ['Christopher Nolan'],
            staringActors: ['Matthew McConaghey','Anne Hathaway', 'Jessica Chastain'],
        },
        {
            id: 18,
            title: 'The Green Mile',
            releaseDate: '1999',
            cover: 'theGreenMile.jpg',
            duration: '3h and 9m',
            description: "A tale set on death row in a Southern jail, where gentle giant John possesses the mysterious power to heal people's ailments. When the lead guard, Paul, recognizes John's gift, he tries to help stave off the condemned man's execution.",
            overallRating: '865',
            personalRating: '404',
            genre: ['Crime', 'Drama', 'Fantasy'],
            directors: ['Frank Darabont'],
            staringActors: ['Tom Hanks', 'Michael Clarke Ducan', 'David Morse'],
        },
        {
            id: 19,
            title: 'Back To The Future',
            releaseDate: '1985',
            cover: 'backToTheFuture.jpg',
            duration: '1h and 56m',
            description: "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
            overallRating: '852',
            personalRating: '511',
            genre: ['Adventure', 'Comedy', 'Sci-Fi'],
            directors: ['Robert Zemeckis'],
            staringActors: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
        },
        {
            id: 20,
            title: 'The Pianist',
            releaseDate: '2002',
            cover: 'thePianist.jpg',
            duration: '2h and 30m',
            description: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
            overallRating: '854',
            personalRating: '601',
            genre: ['Biography', 'Drama', 'Music'],
            directors: ['Roman Polanski'],
            staringActors: ['Ardien Brodly', 'Thomas Kretschmann', 'Frank Finlay'],
        },
        // {
        //     id: 21,
        //     title: '',
        //     releaseDate: '',
        //     cover: '',
        //     duration: '',
        //     description: "",
        //     overallRating: '',
        //     personalRating: '',
        //     genre: [],
        //     directors: [],
        //     staringActors: [],
        // },

    ],
    
}