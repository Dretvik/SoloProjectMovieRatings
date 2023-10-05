//Model

const model = {
    app: {
        loggedInUser: null,
        currentPage: 'loginPage',
        displayMode: 'dark',
        language: 'no',
    },
    inputs: {

    },
    //Data
    
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
        // {
        //     id: 11,
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