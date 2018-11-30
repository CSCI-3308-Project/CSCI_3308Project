
const bcrypt = require('bcrypt');

module.exports = [
  {
    email: 'foobar@gmail.com',
    password: bcrypt.hashSync('pineapple', 10),
    user_courses: {
      course_1: "CSCI_1300",
      course_2: "CSCI_2270"
    },
    created_at: new Date()
  },
  {
    email: 'hello@gmail.com',
    password: bcrypt.hashSync('frogger', 10),
    user_courses: {
      course_1: "CSCI_2270",
      course_2: "CSCI_2400"
    },
    created_at: new Date()
  },
  {
    email: 'JuicyJay@superstar.com',
    password: bcrypt.hashSync('thirstyThursday', 10),
    user_courses: {
      course_1: "CSCI_3104",
      course_2: "CSCI_2400",
      course_3: "CSCI_3155",
      course_4: "CSCI_3308"
    },
    created_at: new Date()
  },
  {
    email: 'shaniasShoes@gmail.com',
    password: bcrypt.hashSync('getLit', 10),
    user_courses: {
      course_1: "CSCI_3308",
      course_2: "CSCI_3020"
    },
    created_at: new Date()
  },
  {
    email: 'parisDoppelganger@gmail.com',
    password: bcrypt.hashSync('itsReallyHim', 10),
    user_courses: {
      course_1: "CSCI_3155"
    },
    created_at: new Date()
  },
  {
    email: 'JesusChrist@hotmail.com',
    password: bcrypt.hashSync('hailSatan', 10),
    user_courses: {
      course_1: "CSCI_4302",
      course_2: "CSCI_4113"
    },
    created_at: new Date()
  },
  {
    email: 'TomCruise@gmail.com',
    password: bcrypt.hashSync('iheartliamNeeson', 10),
    user_courses: {
      course_1: "CSCI_1200",
      course_2: "CSCI_1000"
    },
    created_at: new Date()
  },
  {
    email: 'imaNOOB@gmail.com',
    password: bcrypt.hashSync('noobieSuperstar', 10),
    user_courses: {
      course_1: "CSCI_1300"
    },
    created_at: new Date()
  },
  {
    email: 'JamisonRugbyMan@gmail.com',
    password: bcrypt.hashSync('ilovepokemon', 10),
    user_courses: {
      course_1: "CSCI_3104",
      course_2: "CSCI_4308",
      course_3: "CSCI_2400"
    },
    created_at: new Date()
  },
  {
    email: 'JulianBobillian@gmail.com',
    password: bcrypt.hashSync('springbreak07!', 10),
    user_courses: {
      course_1: "CSCI_2270",
      course_2: "CSCI_2400"
    },
    created_at: new Date()
  },
  {
    email: 'whereIsJennifer@aol.com',
    password: bcrypt.hashSync('theresheis!', 10),
    user_courses: {
      course_1: "CSCI_3287",
      course_2: "CSCI_3403"
    },
    created_at: new Date()
  },
  {
    email: 'ParisMassiveBook@gmail.com',
    password: bcrypt.hashSync('fuckinShakespeare', 10),
    user_courses: {
      course_1: "CSCI_2270"
    },
    created_at: new Date()
  },
  {
    email: 'AlansDog@woofwoof.com',
    password: bcrypt.hashSync('bestinshow', 10),
    user_courses: {
      course_1: "CSCI_3020",
      course_2: "CSCI_3287"
    },
    created_at: new Date()
  },
  {
    email: 'beerIsGod@gmail.com',
    password: bcrypt.hashSync('notjustforbreakfast', 10),
    user_courses: {
      course_1: "CSCI_1300",
      course_2: "CSCI_2400",
      course_3: "CSCI_3020"

    },
    created_at: new Date()
  },
  {
    email: 'prettyPrincessPari94@gmail.com',
    password: bcrypt.hashSync('barbiegirl42', 10),
    user_courses: {
      course_1: "CSCI_2270"
    },
    created_at: new Date()
  },
  {
    email: 'boulderite@green.com',
    password: bcrypt.hashSync('soGranola', 10),
    user_courses: {
      course_1: "CSCI_2400"
    },
    created_at: new Date()
  },
  {
    email: 'TheDonald@yahoo.com',
    password: bcrypt.hashSync('grabem!', 10),
    user_courses: {
      course_1: "CSCI_1300",
      course_2: "CSCI_1000"
    },
    created_at: new Date()
  },
  {
    email: 'smallBatchWhiskey@gmail.com',
    password: bcrypt.hashSync('twocubes', 10),
    user_courses: {
      course_1: "CSCI_2270",
      course_2: "CSCI_2400",
      course_3: "CSCI_3020"
    },
    created_at: new Date()
  },
  {
    email: 'dirtyThirty@gmail.com',
    password: bcrypt.hashSync('onemoreyear!', 10),
    user_courses: {
      course_1: "CSCI_3104",
      course_2: "CSCI_3020"
    },
    created_at: new Date()
  },
  {
    email: 'ColoradoTransplants@fortheweed.com',
    password: bcrypt.hashSync('dontbogardthejoint', 10),
    user_courses: {
      course_1: "CSCI_3104"
    },
    created_at: new Date()
  }
];
