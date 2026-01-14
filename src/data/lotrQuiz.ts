export interface IQuiz {
  id?: number;
  question: string;
  correctAnswer: string;
  wrongAnswers?: string[];
  allAnswers?: string[];
}

export const lotrQuiz: IQuiz[] = [
  {
    id: 1,
    question: "Where do the hobbits live?",
    correctAnswer: "The Shire",
    wrongAnswers: ["Bree", "Rivendell", "Hobbiton Vale"],
  },
  {
    id: 2,
    question: "Which kingdom answers Gondor’s calls for aid?",
    correctAnswer: "Rohan",
    wrongAnswers: ["Dale", "Gondor", "Lothlórien"],
  },
  {
    id: 3,
    question: "How many members of the Fellowship set out from Rivendell?",
    correctAnswer: "9",
    wrongAnswers: ["7", "8", "10"],
  },
  {
    id: 4,
    question: "Which actor portrays Gandalf?",
    correctAnswer: "Sir Ian McKellen",
    wrongAnswers: ["Christopher Lee", "Sean Connery", "Patrick Stewart"],
  },
  {
    id: 5,
    question:
      "In what year was The Fellowship of the Ring originally published?",
    correctAnswer: "1954",
    wrongAnswers: ["1937", "1965", "1971"],
  },
  {
    id: 6,
    question: "Which country was The Lord of the Rings filmed in?",
    correctAnswer: "New Zealand",
    wrongAnswers: ["Ireland", "Iceland", "Scotland"],
  },
  {
    id: 7,
    question: "How many Oscars did The Return of the King win?",
    correctAnswer: "11",
    wrongAnswers: ["9", "10", "12"],
  },
  {
    id: 8,
    question: "In what age is Lord of the Rings set?",
    correctAnswer: "The Third Age",
    wrongAnswers: ["The First Age", "The Second Age", "The Fourth Age"],
  },
  {
    id: 9,
    question: "What is the name of the giant spider that attacks Frodo?",
    correctAnswer: "Shelob",
    wrongAnswers: ["Ungoliant", "Arachne", "Mirkfang"],
  },
  {
    id: 10,
    question: "Who tosses Gimli at Helm’s Deep?",
    correctAnswer: "Aragorn",
    wrongAnswers: ["Legolas", "Boromir", "Éomer"],
  },
  {
    id: 11,
    question: "What forest did Merry & Pippin escape into in The Two Towers?",
    correctAnswer: "Fangorn Forest",
    wrongAnswers: ["Mirkwood", "Lothlórien", "Old Forest"],
  },
  {
    id: 12,
    question: "After Sauron’s defeat, what name was Aragorn crowned as?",
    correctAnswer: "King Elessar",
    wrongAnswers: ["King Isildur", "King Telcontar", "King Thorongil"],
  },
  {
    id: 13,
    question: "What relation is Frodo to Bilbo Baggins?",
    correctAnswer: "Cousin",
    wrongAnswers: ["Nephew", "Grandson", "Brother"],
  },
  {
    id: 14,
    question: "How many rings were created for Men?",
    correctAnswer: "9",
    wrongAnswers: ["7", "3", "12"],
  },
  {
    id: 15,
    question: "What are Denethor II’s 2 sons called?",
    correctAnswer: "Boromir & Faramir",
    wrongAnswers: ["Faramir & Éomer", "Boromir & Théoden", "Isildur & Anárion"],
  },
  {
    id: 16,
    question:
      "What age does Bilbo celebrate turning in The Fellowship of the Ring?",
    correctAnswer: "111",
    wrongAnswers: ["100", "120", "99"],
  },
  {
    id: 17,
    question: "Who kills Saruman the White?",
    correctAnswer: "Grima Wormtongue",
    wrongAnswers: ["Gandalf", "Aragorn", "Legolas"],
  },
  {
    id: 18,
    question: "What is the name of the story Bilbo wrote about his adventures?",
    correctAnswer: "There and Back Again: A Hobbit’s Tale by Bilbo Baggins",
    wrongAnswers: [
      "The Red Book of Westmarch",
      "A Journey Through Middle Earth",
      "The Hobbit’s Chronicle",
    ],
  },
  {
    id: 19,
    question:
      "The Battle of the Pelennor Fields was fought to defend which city?",
    correctAnswer: "Minas Tirith",
    wrongAnswers: ["Osgiliath", "Minas Morgul", "Edoras"],
  },
  {
    id: 20,
    question: "What language forms the inscription on the One Ring?",
    correctAnswer: "Black Speech",
    wrongAnswers: ["Quenya", "Sindarin", "Westron"],
  },
  {
    id: 21,
    question: "Who killed the Witch-king of Angmar in The Return of the King?",
    correctAnswer: "Éowyn",
    wrongAnswers: ["Aragorn", "Gandalf", "Legolas"],
  },
  {
    id: 22,
    question: "What type of bread do Sam and Frodo eat on their journey?",
    correctAnswer: "Lembas bread",
    wrongAnswers: ["Waybread", "Elven cake", "Honey loaves"],
  },
  {
    id: 23,
    question:
      "How many Black Riders are sent to retrieve the ring from Frodo in the Shire?",
    correctAnswer: "9",
    wrongAnswers: ["7", "5", "12"],
  },
  {
    id: 24,
    question: "What was the password to open the gates to Moria?",
    correctAnswer: "Mellon",
    wrongAnswers: ["Elbereth", "Friend", "Durin"],
  },
  {
    id: 25,
    question: "The Balrog fought by Gandalf is also known by what name?",
    correctAnswer: "Durin’s Bane",
    wrongAnswers: ["Shadowflame", "Morgoth’s Wrath", "Fire of Udûn"],
  },
  {
    id: 26,
    question: "What 2 gifts does Bilbo give to Frodo at Rivendell?",
    correctAnswer: "His sword Sting & a mithril vest",
    wrongAnswers: [
      "The One Ring & Sting",
      "A cloak & lembas bread",
      "A map & a dagger",
    ],
  },
  {
    id: 27,
    question: "Who voices Treebeard?",
    correctAnswer: "John Rhys-Davies",
    wrongAnswers: ["Ian Holm", "Christopher Lee", "Andy Serkis"],
  },
  {
    id: 28,
    question: "What do Merry and Pippin steal from Gandalf in the Shire?",
    correctAnswer: "Fireworks",
    wrongAnswers: ["Pipe-weed", "His staff", "A spell book"],
  },
  {
    id: 29,
    question: "Which character ruled Lothlórien?",
    correctAnswer: "Galadriel",
    wrongAnswers: ["Arwen", "Celeborn", "Elrond"],
  },
  {
    id: 30,
    question: "What sword does Elrond give to Aragorn?",
    correctAnswer: "Andúril",
    wrongAnswers: ["Narsil", "Glamdring", "Sting"],
  },
  {
    id: 31,
    question: "Who does Gandalf find eaves-dropping at the window of Bag End?",
    correctAnswer: "Samwise Gamgee",
    wrongAnswers: ["Merry", "Pippin", "Bilbo"],
  },
  {
    id: 32,
    question:
      "What name is given to the large elephant-like creatures used in battle?",
    correctAnswer: "Mûmakil",
    wrongAnswers: ["Ents", "Wargs", "Trolls"],
  },
  {
    id: 33,
    question: "Which character becomes the King of Rohan after Théoden dies?",
    correctAnswer: "Éomer",
    wrongAnswers: ["Éowyn", "Gríma", "Hama"],
  },
  {
    id: 34,
    question: "What are the surnames of Merry and Pippin?",
    correctAnswer: "Took & Brandybuck",
    wrongAnswers: ["Baggins & Took", "Brandybuck & Gamgee", "Took & Baggins"],
  },
  {
    id: 35,
    question: "Which actor portrays Sméagol and Gollum?",
    correctAnswer: "Andy Serkis",
    wrongAnswers: ["Elijah Wood", "Sean Astin", "Ian Holm"],
  },
  {
    id: 36,
    question:
      "What is the name of the inn where Frodo and the hobbits first meet Aragorn?",
    correctAnswer: "The Prancing Pony",
    wrongAnswers: [
      "The Green Dragon",
      "The Golden Perch",
      "The Sleeping Troll",
    ],
  },
  {
    id: 37,
    question: "Who cut the One Ring from Sauron’s finger?",
    correctAnswer: "Isildur",
    wrongAnswers: ["Elendil", "Aragorn", "Gil-galad"],
  },
  {
    id: 38,
    question:
      "What fake name did Gandalf give to Frodo before he left the Shire?",
    correctAnswer: "Mr. Underhill",
    wrongAnswers: ["Mr. Greenleaf", "Mr. Baggins", "Mr. Took"],
  },
  {
    id: 39,
    question: "Gandalf tells Aragorn to look east at dawn on which day?",
    correctAnswer: "The 5th day",
    wrongAnswers: ["The 3rd day", "The 7th day", "The first day"],
  },
  {
    id: 40,
    question:
      "Which character does Aragorn marry after he is crowned King of Gondor?",
    correctAnswer: "Arwen",
    wrongAnswers: ["Éowyn", "Galadriel", "Tauriel"],
  },
  {
    id: 41,
    question:
      "Which 3 characters leave Middle Earth at the end of The Return of the King?",
    correctAnswer: "Bilbo, Frodo and Gandalf",
    wrongAnswers: [
      "Legolas, Gimli and Aragorn",
      "Elrond, Galadriel and Celeborn",
      "Sam, Merry and Pippin",
    ],
  },
  {
    id: 42,
    question: "What colour is the gate of Mordor?",
    correctAnswer: "Black",
    wrongAnswers: ["Red", "Iron grey", "Dark green"],
  },
  {
    id: 43,
    question: "Who does Samwise marry at the end of the trilogy?",
    correctAnswer: "Rosie Cotton",
    wrongAnswers: ["Goldberry", "Lobelia Sackville-Baggins", "Éowyn"],
  },
  {
    id: 44,
    question: "Which character says: ‘One does not simply walk into Mordor’?",
    correctAnswer: "Boromir",
    wrongAnswers: ["Gandalf", "Aragorn", "Legolas"],
  },
  {
    id: 45,
    question: "What colour does Frodo’s sword glow when orcs are nearby?",
    correctAnswer: "Blue",
    wrongAnswers: ["Red", "White", "Green"],
  },
  {
    id: 46,
    question: "How does Gandalf escape from Isengard?",
    correctAnswer: "The Great Eagles save him",
    wrongAnswers: [
      "He teleports",
      "Saruman releases him",
      "He climbs down the tower",
    ],
  },
  {
    id: 47,
    question: "What is Samwise’s occupation?",
    correctAnswer: "Gardener",
    wrongAnswers: ["Farmer", "Cook", "Messenger"],
  },
  {
    id: 48,
    question:
      "Who did Sméagol kill on his birthday after discovering the ring?",
    correctAnswer: "Déagol",
    wrongAnswers: ["Frodo", "Bilbo", "A goblin"],
  },
  {
    id: 49,
    question:
      "In what year was the animated Lord of the Rings movie starring John Hurt released?",
    correctAnswer: "1978",
    wrongAnswers: ["1972", "1981", "1969"],
  },
  {
    id: 50,
    question: "Which character says: “My friends, you bow to no one”?",
    correctAnswer: "Aragorn",
    wrongAnswers: ["Gandalf", "Frodo", "Sam"],
  },
];
