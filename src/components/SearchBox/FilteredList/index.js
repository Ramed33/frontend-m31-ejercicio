import "./styles.css";

const oscarWinners = [

    {
        name: 'Oppenheimer',
        year: '2023',
        director: 'Christopher Nolan',
        cast: ['Cillian Murphy, ', 'Emily Blunt, ', 'Matt Damon, ', 'Robert Downey Jr.'],
        summary: 'The exciting paradox of an enigmatic man who must risk destroying the world to save it.',
        image: "https://decine21.com/img/upload/obras/oppenheimer-44627/oppenheimer-44627-c.jpg"
    
    },

    {
        name: 'Everything Everywhere All at Once',
        year: '2022',
        director: ['Daniel Kwan, ', 'Daniel Scheinert'],
        cast: ['Michelle Yeoh, ', 'Jamie Lee Curtis, ', 'Stephanie Hsu, ', 'James Hong'],
        summary: 'When an interdimensional rift alters reality, Evelyn, a Chinese immigrant to the United States, finds herself involved in a wild adventure in which only she can save the world. Lost in the infinite worlds of the multiverse, this unexpected heroine must channel her newfound powers to fight the strange and bewildering dangers of the multiverse as the fate of the world hangs in the balance.',
        image: 'https://decine21.com/img/upload/obras/todo-a-la-vez-en-todas-partes-45461/todo-a-la-vez-en-todas-partes-45461-c.jpg'
    },

    {
        name: 'CODA',
        year: '2021',
        director: 'Sian Heder',
        cast: ['Emilia Jones, ', 'Marlee Matlin, ', 'Troy Kotsur, ', 'Daniel Durant'],
        summary: "Ruby, the daughter of deaf adults, is the only hearing person in her family. When the family's fishing business is threatened, Ruby finds herself torn between following her love of pursuing music and the fear of abandoning her parents.",
        image: 'https://decine21.com/img/upload/obras/coda-42867/coda-42867-c.jpg'
    },

    {
        name: 'Nomadland',
        year: '2020',
        director: 'Chloé Zhao',
        cast: ['Frances McDormand, ', 'David Strathairn, ', 'Linda May, ', 'Charlene'],
        summary: 'After the economic collapse of a town in rural Nevada, due to the bankruptcy of its main company, Fern packs up her truck and hits the road to explore a life outside of conventional society as a modern nomad.',
        image: 'https://decine21.com/img/upload/obras/nomadland-42253/nomadland-42253-c.jpg'
    },

    {
        name: 'Parasite / Gisaengchung',
        year: '2019',
        director: 'Bong Joon-ho',
        cast: ['Song Kang-ho, ', 'Lee Sun-kyun, ', 'Cho Yeo-Jeong, ', 'Choi Woo-sik'],
        summary: "Ki-taek's entire family is unemployed and is very interested in the lifestyle of the very rich Park family. One day, his son manages to get a recommendation to give private English classes at the Parks' house. It is the beginning of an uncontrollable gear, from which no one will truly emerge unscathed.",
        image: 'https://decine21.com/img/upload/obras/parasite-40123/parasite-40123-c.jpg'
    },

    {
        name: 'Green Book',
        year: '2018',
        director: 'Peter Farrelly',
        cast: ['Viggo Mortensen, ', 'Mahershala Ali, ', 'Linda Cardellini, ', 'Don Stark'],
        summary: 'When Tony Lip (Viggo Mortensen), a tough Italian-American from the Bronx, is hired as a chauffeur for the black virtuoso pianist Don Shirley (Mahershala Ali), during a concert tour of the Southern United States, he must rely on "The Green Book" , a guide to the few safe establishments for African Americans to find housing. They are two people who will have to face racism and prejudice, but who will be united by kindness and a sense of humor, forcing them to put aside their differences to survive and prosper on the journey of their lives.',
        image: 'https://decine21.com/img/upload/obras/green-book-38327/green-book-38327-c.jpg'
    },

    {
        name: 'The Shape of Water',
        year: '2017',
        director: 'Guillermo del Toro',
        cast: ['Sally Hawkins, ', 'Michael Shannon, ', 'Richard Jenkins, ', 'Doug Jones'],
        summary: 'Un sobrenatural cuento de hadas que, con el telón de fondo de la Guerra Fría, transcurre en Norteamérica alrededor del año 1962. En el oculto laboratorio gubernamental de alta seguridad donde trabaja, la solitaria Elisa (Sally Hawkins) se halla atrapada en una vida regida por el aislamiento. La vida de Elisa cambia para siempre cuando, junto con su compañera Zelda (Octavia Spencer), descubre un experimento clasificado como secreto.',
        image: 'https://decine21.com/img/upload/obras/the-shape-of-water-36596/the-shape-of-water-36596-c.jpg'
    },

    {
        name: 'Moonlight',
        year: '2016',
        director: 'Barry Jenkins',
        cast: ['Mahershala Ali, ', 'Alex R. Hibbert, ', 'Naomie Harris, ', 'Ashton Sanders'],
        summary: 'A timeless story of human relationships and self-discovery, it chronicles the life of a young man growing up in the suburbs of Miami, from childhood to adulthood. A vital portrait of contemporary African American life that resonates for its depth and universal truths.',
        image: 'https://decine21.com/img/upload/obras/moonlight-34547/moonlight-34547-c.jpg'
    },

    {
        name: 'Spotlight',
        year: '2015',
        director: 'Tom McCarthy',
        cast: ['Mark Ruffalo, ', 'Michael Keaton, ', 'Rachel McAdams, ', 'Liev Schreiber'],
        summary: "The fascinating true story of the Boston Globe's Pulitzer Prize-winning investigation that shook the city and caused a massive crisis at one of the world's oldest and most closely watched institutions. As Spotlight's tenacious team of reporters delve into allegations of abuse within the Catholic Church, their investigation uncovers a decades-long cover-up at the top of Boston's religious, legal and government organizations. , unleashing a wave of revelations around the world.",
        image: 'https://decine21.com/img/upload/obras/spotlight-32877/spotlight-32877-c.jpg'
    },

    {
        name: 'Birdman',
        year: '2014',
        director: 'Alejandro González Iñárritu',
        cast: ['Michael Keaton, ', 'Zach Galifianakis, ', 'Edward Norton, ', 'Andrea'],
        summary: 'Black comedy that tells the story of an actor (Michael Keaton) – famous for giving life to an iconic superhero – who struggles to put on a play on Broadway. In the days leading up to opening night he battles with his ego and tries to win back his family, his career and himself.',
        image: 'https://decine21.com/img/upload/obras/birdman/birdman-c.jpg'
    },

    {
        name: '12 Years a Slave',
        year: '2013',
        director: 'Steve McQueen (II)',
        cast: ['Chiwetel Ejiofor, ', 'Brad Pitt, ', 'Benedict Cumberbatch, ', 'Michael Fassbender'],
        summary: "In the years leading up to the American Civil War, Solomon Northup (Chiwetel Ejiofor), a free black man living in New York, is kidnapped and sold into slavery. Solomon must fight not only to stay alive but also to preserve his dignity in the face of his master's (Michael Fassbender) cruelty. His hope, fueled by unexpected gestures of kindness and help, will not abandon him throughout his twelve-year odyssey. Solomon's chance to meet a Canadian abolitionist (Brad Pitt) will change his life forever.",
        image: 'https://decine21.com/img/upload/obras/12-anos-de-esclavitud-26810/12-anos-de-esclavitud-26810-c.jpg'
    },

    {
        name: 'Argo',
        year: '2012',
        director: 'Ben Affleck',
        cast: ['Ben Affleck, ', 'John Goodman, ', 'Alan Arkin, ', 'Bryan Cranston'],
        summary: "On November 4, 1979, as the Iranian revolution reached its peak, some militants stormed the United States embassy in Tehran and took fifty-two American prisoners. However, in the midst of the chaos, six of them manage to escape and find refuge at the Canadian ambassador's house. Knowing that it is only a matter of time before they are found and, most likely, killed, a CIA special operations specialist named Tony Mendez hatches a risky plan to get them out of the country safely.",
        image: 'https://decine21.com/img/upload/obras/argo-23514/argo-23514-c.jpg'
    },

    {
        name: 'The Artist',
        year: '2011',
        director: 'Michel Hazanavicius',
        cast: ['Jean Dujardin, ', 'Bérénice Bejo, ', 'John Goodman, ', 'James Cromwell'],
        summary: 'Hollywood, 1927. George Valentin is a great silent film star, his films are a guarantee of entertainment and a money-making machine. Which does not prevent him from living in an unhappy marriage. He will meet Peppy Miller, a young woman who wants to succeed on the screen, and whom he gives a little help. The arrival of sound for films will mark the decline of Valentin, while Miller reaches the peak of success. Although she tries to help others, there is a difficulty that is difficult to overcome, her pride, which makes her despise talking movies and any gesture of compassion from others.',
        image: 'https://decine21.com/img/upload/obras/the-artist-22387/the-artist-22387-c.jpg'
    },

    {
        name: "The King's Speech",
        year: '2010',
        director: 'Tom Hooper',
        cast: ['Helena Bonham Carter, ', 'Colin Firth, ', 'Guy Pearce, ', 'Michael Gambon'],
        summary: 'Decade of the 30s of the last century. George V reigns in England, and the air of war is blowing. His second son, Albert, has suffered from a pronounced stutter since he was a child. The many experts who have tried to help you with your problem have failed. Which would not have much importance, were it not for the death of his father and how unsuitable David, the heir, is to assume the role of monarch. The vicissitudes of destiny force him to wear the crown... and his subjects, in difficult times, need to hear the voice of the king. An unorthodox speech therapist, the Australian Lionel Logue, could be the solution to such real difficulties.',
        image: 'https://decine21.com/img/upload/obras/el-discurso-del-rey-21316/el-discurso-del-rey-21316-c.jpg'
    },

    {
        name: 'The Hurt Locker',
        year: '2009',
        director: 'Kathryn Bigelow',
        cast: ['Jeremy Renner, ', 'Anthony Mackie, ', 'Brian Geraghty, ', 'Guy Pearce'],
        summary: 'The best film to date about the Iraq war. It follows the daily work in Baghdad of three US Marines, who make up a unit of bomb disposal specialists. They are Will, very individualistic, who seems not to know what fear is, and has dismantled hundreds of artifacts; Sanborn, a very rational African-American, who thinks that security involves teamwork; and Owen, the youngest, who is being affected by the conflict, and who receives psychological help from a medical colonel. Their different missions serve to delve deeper into their personalities: we touch their humanity, also in regards to family ties, we delve into their fears, and we get a glimpse of the tremendous damage that war does, first and foremost to the combatants themselves.',
        image: 'https://decine21.com/img/upload/obras/en-tierra-hostil-18156/en-tierra-hostil-18156-c.jpg'
    },

    {
        name: 'Slumdog Millionaire',
        year: '2008',
        director: ['Danny Boyle, ', 'Loveleen Tandan'],
        cast: ['Dev Patel, ', 'Anil Kapoor, ', 'Saurabh Shukla, ', 'Rajendranath Zutshi'],
        summary: "The film reiterates, in a very beautiful way, the Eastern idea of ​​man's destiny, that his life itinerary is written. Without going into philosophical casuistries, this conviction underlies the enormous hope that the protagonist of the film breathes, and at times makes us forget the maxim “Nothing is written”, a mythical phrase uttered by the Westerner Peter O'Toole in Lawrence of Arabia. The dualities of the film are also attractive: the difficult balance between the brothers, and the continuous game between truth and lies, that is, between real life, often full of suffering, and the world of television, full of falsehood and appearances. . Of course, it also offers a beautiful reflection that true wealth, more than money, is in love and integrity. The final climax, mounted by parallel actions, is absolutely graphic in this regard. Finally, we must highlight the superb performance of Dev Patel, an actor with a lame face and practically a debutant, but who does an extraordinary job. And the director's final tribute to Bollywood cinema is appreciated, with that 'fantastical' musical number at the station, a fun final touch full of hope.",
        image: 'https://decine21.com/img/upload/obras/slumdog-millionaire-15346/slumdog-millionaire-15346-c.jpg'
    },

    {
        name: 'No Country for Old Men',
        year: '2007',
        director: ['Ethan Coen, ', 'Joel Coen'],
        cast: ['Tommy Lee Jones, ', 'Javier Bardem, ', 'Josh Brolin, ', 'Woody Harrelson'],
        summary: "Somewhere on the border between the United States and Mexico, not far from Rio Grande... A drug trafficking operation has ended in a river of blood, buyers and sellers have not been able to understand each other... To the desert place where they carried out the exchange comes By chance Llewelyn Moss, a welder, finds nearby a recently deceased guy who had a briefcase with two million dollars. The temptation to keep it is too great, although Llewelyn is not naïve. From the moment he unfortunately leaves a clue that allows him to be identified, a sadistic murderer in the service of drug traffickers, Anton Chigurh, is hot on his heels. But he decides to face the risk of withholding the money. So he asks his wife to go to his mother's house, while he tries to endure the hunt for his coveted prey alone. At the same time, the local sheriff, Ed Tom Bell, a member of a family with several generations in the service of the law, also tries to find his whereabouts.",
        image: 'https://decine21.com/img/upload/obras/no-es-pais-para-viejos-11013/no-es-pais-para-viejos-11013-c.jpg'
    },

    {
        name: 'The Departed',
        year: '2006',
        director: 'Martin Scorsese',
        cast: ['Leonardo DiCaprio, ', 'Matt Damon, ', 'Jack Nicholson, ', 'Mark Wahlberg'],
        summary: 'The film tells how the Boston police have managed to infiltrate one of their agents into an Irish mafia gang, who grew up in the neighborhood where they operate; while the Irish mafia has done the same by placing one of its men in a high position in the police. The identities of the moles are only known to their respective superiors. So between them a real game of cat and mouse takes place, in which it is essential to anticipate.',
        image: 'https://decine21.com/img/upload/obras/infiltrados-7270/infiltrados-7270-c.jpg'
    },

    {
        name: 'Crash',
        year: '2005',
        director: 'Paul Haggis',
        cast: ['Don Cheadle, ', 'Matt Dillon, ', 'Sandra Bullock, ', 'Thandie Newton'],
        summary: "The discovery of a boy's body during a particularly cold night in the populous city of Los Angeles serves as the starting point for a plot that goes back to the thirty-six hours prior to the fatal discovery. During that time, Haggis' exemplary script will convey to the viewer – with just a few strokes – the various existential paths and identity crises of a large handful of characters, who want to portray – with the logical limitations of reality – the varied typology of people from a big city and therefore from the entire world. There are the district attorney and his wife, with their disagreements and loneliness; an experienced police officer and his young, idealistic partner; an Iranian shopkeeper and his doctor daughter; a Mexican locksmith and his family; a wealthy African-American couple; two law enforcement officers; two young criminals...",
        image: 'https://decine21.com/img/upload/obras/crash-477/crash-477-c.jpg'
    },

    {
        name: 'Million Dollar Baby',
        year: '2004',
        director: 'Clint Eastwood',
        cast: ['Clint Eastwood, ', 'Hilary Swank, ', 'Morgan Freeman, ', 'Jay Baruchel'],
        summary: 'The events narrated in the film have been imagined by the writer F.X. Toole. But it seems that this former trainer and “cut man” in professional boxing matches was inspired by the real case of Katie Dallam to create Maggie Fitzgerald. Although we will never know for sure, since Toole died in 2002. Here are some characteristics that both women share: both are from Missouri, and of low social extraction. Their families were problematic. Both Katie and Maggie, now over thirty years old, decided to try their luck in the world of boxing.',
        image: 'https://decine21.com/img/upload/obras/million-dollar-baby-384/million-dollar-baby-384-c.jpg'
    },

    {
        name: 'The Lord Of The Rings. The Return Of The King',
        year: '2003',
        director: 'Peter Jackson',
        cast: ['Viggo Mortensen, ', 'Elijah Wood, ', 'Sean Astin, ', 'Ian McKellen'],
        summary: "The film not only follows the decisive evolution of Frodo, accompanied on his foray into the lands of Mordor by his faithful companion Sam Samwise, and by the unexpected guide Gollum. Meanwhile, those who were companions of the Fellowship of the Ring work hard to confront the almighty army of Sauron, the Dark Lord. They know that if Frodo fails, all their efforts will be in vain. But they must buy time, put their all into it, because everything they do is important for the salvation of Middle Earth. Even the smallest creature has a role to play. On the one hand, Aragorn, the legitimate heir of Isildur, has to think about assuming his responsibilities to reign in Gondor. With the help of the elf Legolas and the dwarf Gimli he will face a thousand dangers, including summoning the troops of the king of the dead, who will thus have the opportunity to make amends for the perjury of the past. King Theoden, freed from Saruman's evil tricks, will begin to gather the necessary troops to come to the aid of Minas Tirith. Merry is at your service, and Eowyn will stand out on the battlefield, being the woman capable of standing up to a Nazgûl. Meanwhile, Gandalf goes with Pippin to Gondor, to prepare the defense of Minas Tirith. The task is not easy, since Denethor, the Seneschal, has been mad with grief since learning of the death of his much-loved son Boromir. Subjected to the influence of dark forces, he has never been able to recognize the worth of his other son, Faramir.",
        image: 'https://decine21.com/img/upload/obras/el-senor-de-los-anillos-el-retorno-del-rey-1119/el-senor-de-los-anillos-el-retorno-del-rey-1119-c.jpg'
    },

    {
        name: 'Chicago',
        year: '2002',
        director: 'Rob Marshall',
        cast: ['Renée Zellweger, ', 'Catherine Zeta-Jones, ', 'Richard Gere, ', 'Queen Latifah'],
        summary: 'The promise of adventure and opportunity that the Windy City offers dazzles Roxie Hart, an innocent and outgoing singer who dreams of singing and dancing her way out of her gray life. Her dream is to follow in the golden footsteps of Velma Kelly, vaudeville singer.',
        image: 'https://decine21.com/img/upload/obras/chicago-2002-669/chicago-2002-669-c.jpg'
    },

    {
        name: 'A Beautiful Mind',
        year: '2001',
        director: 'Ron Howard',
        cast: ['Russell Crowe, ', 'Jennifer Connelly, ', 'Ed Harris, ', 'Paul Bettany'],
        summary: "Since his time at Princeton, Nash (Russell Crowe) is revealed to be a reclusive guy, with hardly any friends, very immersed in the imaginary world of mathematical problems. This does not prevent him from getting a prestigious job at the Massachusetts Institute of Technology, where he meets Alicia (Jennifer Connelly), who becomes his wife. But Nash's life is turned upside down when he is asked by one William Parcher (Ed Harris) to decipher coded messages for a top-secret military project. It is just when his mind begins to fail and he is diagnosed with a terrible state of schizophrenia.",
        image: 'https://decine21.com/img/upload/obras/una-mente-maravillosa-2326/una-mente-maravillosa-2326-c.jpg'
    },

    {
        name: 'Gladiator',
        year: '2000',
        director: 'Ridley Scott',
        cast: ['Russell Crowe, ', 'Joaquin Phoenix, ', 'Richard Harris, ', 'Oliver Reed'],
        summary: "Gladiator tells the story of Roman general Maximus (Russell Crowe), chosen by Emperor Marcus Aurelius (Richard Harris) to succeed him on the throne. Commodus (Joaquin Phoenix), the emperor's son, crosses his path, jealous of this situation and orders his execution after murdering his own father. The protagonist survives, becomes a slave and, trained as a gladiator, returns to Rome. From the circus arena, his figure as a hero grows and he sees the possibility of revenge closer.",
        image: 'https://decine21.com/img/upload/obras/gladiator-4953/gladiator-4953-c.jpg'
    },

    {
        name: 'American Beauty',
        year: '1999',
        director: 'Sam Mendes',
        cast: ['Kevin Spacey, ', 'Annette Bening, ', 'Thora Birch, ', 'Allison Janney'],
        summary: "The story is told by a dead man, who explains how he got to this situation. The guy is married and has a daughter. He leads a mediocre and routine life. He has lost all interest in his wife, there is no communication with his daughter, his job does not satisfy him. When he realizes his existential emptiness, he begins to change his lifestyle, doing everything he wants: smoking weed, quitting his job and starting a new job in a hamburger restaurant, building muscles... The situation that can hitting rock bottom is in the form of his daughter's best friend: a true “lolita”, who is making him lose his mind despite being little more than a child.",
        image: 'https://decine21.com/img/upload/obras/american-beauty-5013/american-beauty-5013-c.jpg'
    },

    {
        name: 'Shakespeare in Love',
        year: '1998',
        director: 'John Madden',
        cast: [' Joseph Fiennes, ' , 'Gwyneth Paltrow, ', 'Imelda Staunton, ', 'Geoffrey Rush, ', 'Judi Dench, ', 'Tom Wilkinson, ', 'Antony Sher, ', 'Ben Affleck, ', 'Colin Firth, ', 'Martin Clunes'],
        summary: 'The script by Marc Norman and Tom Stoppard is super original. Both invent a conjunction of possible events that could have happened to the brilliant English author, until they decisively inspired him in the work. Thus they combine humor, wit (it is good entertainment for the viewer to discover which of the events narrated Shakespeare later picks up in the story of the Capulets and the Montagues) and love romance. John Madden, the director, wanted to put an end to the idea that Shakespeare´s work is for brainy people: "I have returned Shakespeare to his place, alongside the people."',
        image: 'https://decine21.com/img/upload/obras/shakespeare-enamorado-5736/shakespeare-enamorado-5736-c.jpg'
    },

    {
        name: 'Titanic',
        year: '1997',
        director: 'James Cameron',
        cast: ['Leonardo DiCaprio, ', 'Kate Winslet, ', 'Billy Zane, ', 'Bill Paxton'],
        summary: 'The film begins with a treasure hunter on sinking ships, who begins the most exciting underwater exploration of his life in the remains of the mythical Titanic. The discovery of a drawing of a young woman, miraculously preserved, leads him to an elderly woman who claims to be the one portrayed. The story begins of a wonderful memory, a youthful love not shared with anyone, which had as its setting the ill-fated ship that in 1912 took 1,500 people to the bottom of the sea. The center of the plot is the intense love between two young people: Jack, an immigrant artist and adventurer, and Rose, rich and with personality. For love, both sacrifice everything: social expectations and even their own lives. Jack and Rose are played by Leonardo DiCaprio and Kate Winslet.',
        image: 'https://decine21.com/img/upload/obras/titanic-1491/titanic-1491-c.jpg'
    },

    {
        name: 'The English Patient',
        year: '1996',
        director: 'Anthony Minghella',
        cast: ['Ralph Fiennes, ', 'Juliette Binoche, ', 'Willem Dafoe, ', 'Kristin Scott Thomas, ', 'Naveen Andrews, ', 'Colin Firth, ', 'Julian Wadham, ', 'Jürgen Prochnow, ', 'Nino Castelnuovo, ', 'Kevin Whately, ', 'Clive Merrison, ', 'Hichem Rostom, ', 'Torri Higginson, ', 'Liisa Repo-Martell, ', 'Raymond Coulthard, ', 'Philip Whitchurch, ', 'Peter Rühring, ', 'Geordie Johnson'],
        summary: "In the years of World War II, an Englishman miraculously survives a plane crash. Apparently amnesiac, with a disfigured face, Count Laszlo of Almassy remembers his passionate love affair, in the Egyptian desert, with Katherine Clifton. She is the wife of one of the men who helps him draw maps for the British Geographical Society.",
        image: 'https://decine21.com/img/upload/obras/el-paciente-ingles-8321/el-paciente-ingles-8321-c.jpg'
    },

    {
        name: 'Braveheart',
        year: '1995',
        director: 'Mel Gibson',
        cast: ['Mel Gibson, ', 'Sophie Marceau, ', 'Brendan Gleeson, ', 'Catherine McCormack'],
        summary: "The recreation of the life of William Wallace, a 13th century Scottish leader who led the rebellion against the King of England Edward I. Wallace managed to unite all the Scottish nobles, so he even managed to defeat the English army in the Battle of Stirling. After the murder of his young wife by the English, Wallace's only motivation is revenge.",
        image: 'https://decine21.com/img/upload/obras/braveheart-2907/braveheart-2907-c.jpg'
    },

    {
        name: 'Forrest Gump',
        year: '1994',
        director: 'Robert Zemeckis',
        cast: ['Tom Hanks, ', 'Robin Wright, ', 'Sally Field, ', 'Gary Sinise'],
        summary: "Forrest Gump (Tom Hanks) is a person with a low IQ. He's sincere, honest and very childish. He lives under the excessive protection of his mother, who was abandoned by his father. She wants Forrest to be normal, like the rest of the children. But Forrest is special. Due to a deviation in his spine, they had to put a frame on him. The tremendous effort with which it was difficult for him to walk strengthened his legs, and thus he became a very fast and tireless runner. As he goes through high school, he becomes the star of the rugby team. Then he will go to the Vietnam War, make great friends and become a hero without knowing it. Thanks to this, he will see the love of his life again, a sweet and somewhat dizzy girl he knew in his childhood, played by Robin Wright Penn, and who has now become a radical pacifist.",
        image: 'https://decine21.com/img/upload/obras/forrest-gump-3637/forrest-gump-3637-c.jpg'
    },

    {
        name: "Schindler's List",
        year: '1993',
        director: 'Steven Spielberg',
        cast: ['Liam Neeson, ', 'Ben Kingsley, ', 'Ralph Fiennes, ', 'Caroline Goodall'],
        summary: "September 1939. The Nazis invade Poland. Jews are interned in ghettos, they are murdered in the streets, they are sent to concentration camps. The German Oskar Schindler sees in the situation a means to prosper economically and begins an interested relationship with the most powerful military to start a factory. Manpower is not a problem, since it will come from the concentration camps... Schindler manages to obtain the services of Itzhak Stern, a Jew who will really take charge of the business, while he will take care of the work in the salon with the leadership. Nazi, with the aim of drawing up a list of Jewish workers who would be solely under his protection. However, what begins as a lucrative means ends up becoming an obsession – pledging his money and his future – to snatch as many people as possible from the psychopathic clutches of Amon Goeth, the commanding officer of one of the camps.",
        image: 'https://decine21.com/img/upload/obras/la-lista-de-schindler-6420/la-lista-de-schindler-6420-c.jpg'
    },

    {
        name: 'Unforgiven',
        year: '1992',
        director: 'Clint Eastwood',
        cast: ['Clint Eastwood, ', 'Gene Hackman, ', 'Morgan Freeman, ', 'Richard Harris'],
        summary: "William Munny (Clint Eastwood) is a former gunfighter who leaves his quiet life by accepting a job with Ned Logan (Morgan Freeman), his previous partner, a very astute man with no reluctance when it comes to pulling the trigger. They are joined by an ambitious young bounty hunter, played by Jaimz Woolvett. Their mission is to destroy the murderers of some prostitutes and thus collect a succulent loot. Even Sheriff Little Bill Dagget (Gene Hackman) is willing to get involved, but always on the side of the law. The last gunman attracted by the reward to Big Whiskey is the Englishman Bob (Richard Harris), who also has a pending score with the sheriff.",
        image: 'https://decine21.com/img/upload/obras/sin-perdon-4670/sin-perdon-4670-c.jpg'
    },

    {
        name: 'The Silence of the Lambs',
        year: '1991',
        director: 'Jonathan Demme',
        cast: ['Jodie Foster, ', 'Anthony Hopkins, ', 'Scott Glenn, ', 'Anthony Heald'],
        summary: "FBI agent Clarice Starling must interview the dangerous murderer Dr. Hannibal Lecter in prison. Clarice trusts that he will reveal information about a serial killer known as Buffalo Bill, who kidnaps women and then murders them. Lecter is captivated by the beautiful Starling and begins to give her clues, which could very well be true, like being part of a simple game. The terror grows when Buffalo Bill kidnaps his latest victim. To find the killer, Starling will have to penetrate Lecter's mind. The countdown then begins. A terrifying race against death.",
        image: 'https://decine21.com/img/upload/obras/el-silencio-de-los-corderos-7413/el-silencio-de-los-corderos-7413-c.jpg'
    },

    {
        name: 'Dancing With Wolves',
        year: '1990',
        director: 'Kevin Costner',
        cast: ['Kevin Costner, ', 'Mary McDonnell, ', 'Graham Greene (II), ', 'Rodney A. Grant'],
        summary: "In the midst of conquest of the unexplored territories of the West in 1860, an intrepid Union soldier decides to visit the Indian frontier before it disappears. There, he comes into contact with a Sioux tribe, with whom lives a white woman who was kidnapped when she was little. After taking the name 'Dances with Wolves' and spending some time with the Indians, he gains their admiration and respect, while he begins to feel friendship with them and lives a passionate romance with 'Standing with His Fist Raised' , the white woman.",
        image: 'https://decine21.com/img/upload/obras/bailando-con-lobos-2859/bailando-con-lobos-2859-c.jpg'
    },

    {
        name: 'Driving Miss Daisy',
        year: '1989',
        director: 'Bruce Beresford',
        cast: ['Morgan Freeman, ', 'Jessica Tandy, ', 'Dan Aykroyd, ', 'Patti LuPone'],
        summary: "An elderly woman of character is losing her faculties. His son hires him a driver; The initial friction leads to an endearing relationship.",
        image: 'https://decine21.com/img/upload/obras/paseando-a-miss-daisy-7189/paseando-a-miss-daisy-7189-c.jpg'
    },

    {
        name: 'Rain Man',
        year: '1988',
        director: 'Barry Levinson',
        cast: ['Dustin Hoffman, ', 'Tom Cruise, ', 'Valeria Golino, ', 'Gerald R. Molen'],
        summary: "Charlie Babbit discovers that he has not inherited his parents' fortune. The beneficiary is Raymond, an older brother that Charlie didn't even know existed, and who suffers from autism. Charlie sets out to look for him, to take him to collect, but he refuses to get on a plane, so they will have to cross the US by road.",
        image: 'https://decine21.com/img/upload/obras/rain-man-6137/rain-man-6137-c.jpg'
    },

    {
        name: 'The Last Emperor',
        year: '1987',
        director: 'Bernardo Bertolucci',
        cast: ["John Lone, ', 'Joan Chen, ', 'Peter O'Toole, ', 'Ruocheng Ying"],
        summary: "In Beijing in 1908, a boy named Pu Yi is separated from his family and imprisoned in the Forbidden City, to be trained as emperor. Years pass, and even though he is young, the country begins to crumble and all the ancient traditions begin to disappear, so the emperor is completely stripped of his power. At that point, he has to abandon everything he knows and continue his life in the outside world, like a normal man.",
        image: 'https://decine21.com/img/upload/obras/el-ultimo-emperador-10359/el-ultimo-emperador-10359-c.jpg'
    },

    {
        name: 'Platoon',
        year: '1986',
        director: 'Oliver Stone',
        cast: ['Tom Berenger, ', 'Charlie Sheen, ', 'Willem Dafoe, ', 'Forest Whitaker'],
        summary: "A university student leaves his studies to enlist as a soldier in the Vietnam War. He soon discovers that not everything is as heroic as he had thought, as a reconnaissance mission ends with a cruel, senseless murder. The men of the platoon divide their loyalty between the two sergeants, totally opposite: Elías, a man who tries to maintain certain moral values ​​above the hell of war, and the violent and aggressive Barnes.",
        image: 'https://decine21.com/img/upload/obras/platoon-6708/platoon-6708-c.jpg'
    },

    {
        name: 'Out of Africa',
        year: '1985',
        director: 'Sydney Pollack',
        cast: ['Meryl Streep, ', 'Robert Redford, ', 'Klaus Maria Brandauer, ', 'Michael Kitchen'],
        summary: "The action takes place in 1914 and introduces us to the writer Karen Blixen (played by Meryl Streep), a strong and determined woman who, together with her husband (Klaus Maria Brandauer), owns a coffee plantation in Kenya. She quickly falls in love with the continent and its people. One day she meets a mysterious white hunter (Robert Redford) to whom she can't help but feel attracted. Together they will experience a strong passion.",
        image: 'https://decine21.com/img/upload/obras/memorias-de-africa-4295/memorias-de-africa-4295-c.jpg'
    },

    {
        name: 'Amadeus',
        year: '1984',
        director: 'Milos Forman',
        cast: ['Tom Hulce, ', 'F. Murray Abraham, ', 'Elizabeth Berridge, ', 'Roy Dotrice'],
        summary: "It tells the life of the most famous composer of all time, Wolfgang Amadeus Mozart. As a child, he became a musical prodigy, admired in all the courts of Europe in the mid-18th century. Antonio Salieri (F. Murray Abraham) is one of the most prestigious composers at the court of Emperor Joseph II of Austria (Jeffrey Jones). He equally admires and hates this musical genius, played by Tom Hulce. From the mental sanatorium where he is confined, Salieri narrates to an astonished priest his agonizing existence since he met Mozart, who had died years before.",
        image: 'https://decine21.com/img/upload/obras/amadeus-2779/amadeus-2779-c.jpg'
    },

    {
        name: 'Terms of Endearment',
        year: '1983',
        director: 'James L. Brooks',
        cast: ['Shirley MacLaine, ', 'Debra Winger, ', 'Jack Nicholson, ', 'Danny DeVito'],
        summary: "It tells the difficult relationship between a mother and her daughter, played sublimely by Shirley MacLaine and Debra Winger respectively. Both have a curious neighbor, a former astronaut, who has become a shameless womanizer and a drunk, a character that suits Jack Nicholson like a glove. The life of the mother and daughter is narrated in a real and convincing way, which provokes tremendous emotion.",
        image: 'https://decine21.com/img/upload/obras/la-fuerza-del-carino-3928/la-fuerza-del-carino-3928-c.jpg'
    },

    {
        name: 'Gandhi',
        year: '1982',
        director: 'Richard Attenborough',
        cast: ['Ben Kingsley, ', 'Candice Bergen, ', 'Edward Fox, ', 'John Gielgud'],
        summary: 'It meticulously recreates the life of the mythical Hindu leader, who revolutionized the world and managed to stop India from being an English colony, thanks to the so-called "peaceful resistance."',
        image: 'https://decine21.com/img/upload/obras/gandhi-7444/gandhi-7444-c.jpg'
    },

    {
        name: 'Chariots of Fire',
        year: '1981',
        director: 'Hugh Hudson',
        cast: ['Nigel Havers, ', 'Ian Charleson, ', 'Ben Cross, ', 'Nicholas Farrell'],
        summary: "Harold Abrahams and Eric Liddell are two extraordinary athletes, one Jewish and the other Christian, who were born to run. But both have different goals, family and different ideas, although both want to compete in the 1924 Olympics and be the best. The boys' desire to improve is admirable, one who dedicates it to God and the other who takes it as a proud personal challenge, to secure their place at the University of Cambridge.",
        image: 'https://decine21.com/img/upload/obras/carros-de-fuego-9843/carros-de-fuego-9843-c.jpg'
    },

    {
        name: 'Ordinary People',
        year: '1980',
        director: 'Robert Redford',
        cast: ['Mary Tyler Moore, ', 'Judd Hirsch, ', 'Timothy Hutton, ', 'M. Emmet Walsh'],
        summary: "The Jarretts are a typically American bourgeois family. The father, played by Donald Sutherland, has a good salary, his wife takes care of the housework, and his son, played by Timothy Hutton, is an attractive young man with a bright future ahead of him. But behind this façade of apparent happiness lies a horrifying drama. The Jarretts' eldest son died due to a terrible accident at sea, and problems arise when Hutton's character feels responsible for his brother's death.",
        image: 'https://decine21.com/img/upload/obras/gente-corriente-3677/gente-corriente-3677-c.jpg'
    },

    {
        name: 'Kramer vs. Kramer',
        year: '1979',
        director: 'Robert Benton',
        cast: ['Dustin Hoffman, ', 'Meryl Streep, ', 'Jane Alexander, ', 'Justin Henry'],
        summary: "Ted Kramer (Dustin Hoffman) is a very responsible man totally absorbed by his profession, who is somewhat distant from his wife. He gets a big surprise when she, Joanna (Meryl Streep), tells him that she has decided to leave him. In addition, he leaves his six-year-old son in his care. Joanna has been attached to Ted all her life and believes that the time has come to live life on her own. In this situation, Ted realizes that he barely knows his son, because he has never spent enough time with him. Although it takes him a lot of effort, he manages to get close to the boy. Already accustomed to this new order of things, Joanna reappears a year and a half later, claiming guardianship of the boy.",
        image: 'https://decine21.com/img/upload/obras/kramer-contra-kramer-3861/kramer-contra-kramer-3861-c.jpg'
    },

    {
        name: 'The Deer Hunter',
        year: '1978',
        director: 'Michael Cimino',
        cast: ['Robert De Niro, ', 'John Cazale, ', 'John Savage, ', 'Christopher Walken'],
        summary: "Three American friends, factory workers in Pennsylvania, are sent to Vietnam. There they are captured by the Vietkong and suffer all kinds of humiliation and torture. When one returns to the USA, he finds out that another has had his legs amputated, and another is still there half crazy...",
        image: 'https://decine21.com/img/upload/obras/el-cazador-3223/el-cazador-3223-c.jpg'
    },

    {
        name: 'Annie Hall',
        year: '1977',
        director: 'Woody Allen',
        cast: ['Woody Allen, ', 'Diane Keaton, ', 'Tony Roberts, ', 'Carol Kane'],
        summary: "Annie Hall narrates the relationship that arises between a neurotic comedy writer (Woody Allen) and a young singer (Diane Keaton).",
        image: 'https://decine21.com/img/upload/obras/annie-hall-2805/annie-hall-2805-c.jpg'
    },

    {
        name: 'Rocky',
        year: '1976',
        director: 'John G. Avildsen',
        cast: ['Sylvester Stallone, ', 'Talia Shire, ', 'Burt Young, ', 'Carl Weathers'],
        summary: "The suburbs of Philadelphia see Rocky Balboa pass by every day. He is a vocational boxer who survives as best he can. However, his mediocre life is going to take a turn. Unexpectedly, he is chosen to face the world heavyweight champion in combat. The desire to excel, the love of his girlfriend and hope will take him on a flight to a glory never imagined.",
        image: 'https://decine21.com/img/upload/obras/rocky-6587/rocky-6587-c.jpg'
    },

    {
        name: "One Flew Over The Cuckoo's Nest",
        year: '1975',
        director: 'Milos Forman',
        cast: ['Jack Nicholson, ', 'Louise Fletcher, ', 'Danny DeVito, ', 'William Redfield'],
        summary: "Randle P. McMurphy (Jack Nicholson) is a criminal who has been transferred to a psychiatric facility after feigning insanity, in order to escape his sentence. There he tries to transmit his humor and his sense of freedom to his truly crazy companions. His behavior clashes with the rigor and order imposed by the motherly Nurse Ratched (Louise Fletcher).",
        image: 'https://decine21.com/img/upload/obras/alguien-volo-sobre-el-nido-del-cuco-2767/alguien-volo-sobre-el-nido-del-cuco-2767-c.jpg'
    },

    {
        name: 'The Godfather: Part II',
        year: '1974',
        director: 'Francis Ford Coppola',
        cast: ['Al Pacino, ', 'Diane Keaton, ', 'Robert De Niro, ', 'Robert Duvall'],
        summary: "At nine years old, Vito Corleone witnesses in his native Sicily how a local mafia boss murders his father, mother and brother. He must emigrate to the United States, where sixteen years later he is already the godfather of an important family. Up to this point, the character is played by Robert De Niro. When he dies, he is succeeded by his son Michael (Al Pacino), who tries to legalize his family's mafia businesses and turn them into a respectable company.",
        image: 'https://decine21.com/img/upload/obras/el-padrino-ii-3404/el-padrino-ii-3404-c.jpg'
    },

    {
        name: 'The Sting',
        year: '1973',
        director: 'George Roy Hill',
        cast: ['Paul Newman, ', 'Robert Redford, ', 'Robert Shaw, ', 'Charles Durning'],
        summary: "In the 1930s, Henry Gondorff and Johnny Hooker are two tough guys who dedicate themselves to scamming and pocketing large sums of money. The death of a friend at the hands of a gangster will make them want revenge and to do so, they will prepare what will be their biggest blow.",
        image: 'https://decine21.com/img/upload/obras/el-golpe-9530/el-golpe-9530-c.jpg'
    },

    {
        name: 'The Godfather',
        year: '1972',
        director: 'Francis Ford Coppola',
        cast: ['Marlon Brando, ', 'Al Pacino, ', 'Robert Duvall, ', 'Diane Keaton, ', 'James Caan, ', 'Richard S. Castellano, ', 'Talia Shire, ', 'John Cazale, ', 'Sterling Hayden, ', 'Al Martino, ', 'Richard Conte, ', 'Al Lettieri, ', 'Abe Vigoda, ', 'Gianni Russo, ', 'Rudy Bond, ', 'Morgana King, ', 'Lenny Montana, ', 'Alex Rocco, ', 'John Marley'],
        summary: "Don Corleone is one of the heads of the New York families, who exercises enormous power, which even reaches the highest political levels. In a world of corruption, Don Corleone is also the mafia's main defender of the old moral order. But the new generations are not willing to abide by his methods, and the godfather does not have the strength to impose himself.",
        image: 'https://decine21.com/img/upload/obras/el-padrino-3403/el-padrino-3403-c.jpg'
    },

    {
        name: 'The French Connection',
        year: '1971',
        director: 'William Friedkin',
        cast: ['Gene Hackman, ', 'Fernando Rey, ', 'Roy Scheider, ', 'Tony Lo Bianco'],
        summary: "Two police officers are trying to carry out their task of policing the streets, when they receive a tip that an important stash of heroin is going to arrive in New York from Marseille. Their mission is to discover where the meeting between the drug and a strong local organization prepared to market it in the city is going to take place.",
        image: 'https://decine21.com/img/upload/obras/french-connection-contra-el-imperio-de-la-droga-3648/french-connection-contra-el-imperio-de-la-droga-3648-c.jpg'
    },

    {
        name: 'Patton',
        year: '1970',
        director: 'Franklin J. Schaffner',
        cast: ['George C. Scott, ', 'Stephen Young, ', 'Karl Malden, ', 'Michael Strong'],
        summary: "This is the filmed biography of General Patton.",
        image: 'https://decine21.com/img/upload/obras/patton-4456/patton-4456-c.jpg'
    },

    {
        name: 'Midnight Cowboy',
        year: '1969',
        director: 'John Schlesinger',
        cast: ['Dustin Hoffman, ', 'Jon Voight, ', 'Sylvia Miles, ', 'John McGiver'],
        summary: "Joe Buck, a handsome and naive Texan Cowboy, is convinced that he is the salvation of the many love-starved women of New York and decides to go to the Big Apple to seek a future. The problem is that the dates with his potential lovers never happen and the only solace he finds is the friendship of Ratso Rizzo, a scruffy, small, freeloader with big dreams. Living on the miserable side of society, these two outcasts develop an unlikely bond that will help them overcome all the setbacks that life has in store for them...",
        image: 'https://decine21.com/img/upload/obras/cowboy-de-medianoche-3049/cowboy-de-medianoche-3049-c.jpg'
    },

    {
        name: 'Oliver!',
        year: '1968',
        director: 'Carol Reed',
        cast: ['Mark Lester, ', 'Ron Moody, ', 'Shani Wallis, ', 'Oliver Reed, ', 'Jack Wild, '],
        summary: "It narrates, as is known, the incredible adventures of Oliver (Mark Lester), a smart and poor boy who manages to escape from the orphanage where he is and fights to survive in the London underworld, full of dirt, petty thieves and double intentions. . Among his friends we must highlight the petty thief called The Big Knave (Jack Wild) and the ringleader Fagin (Ron Moody).",
        image: 'https://decine21.com/img/upload/obras/oliver-4425/oliver-4425-c.jpg'
    },

    {
        name: 'In the Heat of the Night',
        year: '1967',
        director: 'Norman Jewison',
        cast: ['Sidney Poitier, ', 'Rod Steiger, ', 'Warren Oates, ', 'Lee Grant'],
        summary: "In a small town in Mississippi, police officer Sam Wood (Warren Oates) discovers the body of an industrialist. Shortly after, he arrests a black man at the station who, after being questioned by the local police chief, Billl Gillespie (Rod Steiger), turns out to be a Philadelphia police inspector named Virgil Tibbs (Sidney Poitier). Both police officers decide to collaborate to investigate the murder.",
        image: 'https://pics.filmaffinity.com/in_the_heat_of_the_night-342543653-msmall.jpg'
    },

    {
        name: 'A Man for All Seasons',
        year: '1966',
        director: 'Fred Zinnemann',
        cast: ['Paul Scofield, ', 'Wendy Hiller, ', 'Leo McKern, ', 'Robert Shaw, ', 'Orson Welles'],
        summary: 'To divorce his wife Catherine of Aragon (daughter of the Catholic Monarchs and aunt of Emperor Charles V) and marry Anne Boleyn, Henry VIII (1509-1547) tried to obtain the support of the aristocracy and the clergy. Sir Thomas More, one of the most notable European humanists ("Utopia", 1516), a fervent Catholic and trusted man of the monarch, finds himself at a crossroads: should he act in accordance with his conscience, risking being branded a traitor and executed, or must he yield to a king who has no qualms about adapting the law to his needs?',
        image: 'https://pics.filmaffinity.com/a_man_for_all_seasons-258087712-msmall.jpg'
    },

    {
        name: 'The Sound of Music',
        year: '1965',
        director: 'Robert Wise',
        cast: ['Julie Andrews, ', 'Christopher Plummer, ', 'Richard Haydn, ', 'Eleanor Parker, ', 'Peggy Wood'],
        summary: "Austria, 1938. Maria is a cheerful novice who leaves the abbey to become the governess of the seven children of a retired military man, Captain von Trapp, who has recently been widowed. The von Trapp house functions as a barracks, but María manages to restore joy to the children and earn their respect and affection.",
        image: 'https://pics.filmaffinity.com/the_sound_of_music-366969305-msmall.jpg'
    },

    {
        name: 'My Fair Lady',
        year: '1964',
        director: 'George Cukor',
        cast: ['Audrey Hepburn, ', 'Rex Harrison, ', 'Stanley Holloway, ', 'Wilfrid Hyde-White, ', 'Gladys Cooper'],
        summary: "Film version of the myth of Pygmalion, inspired by the play of the same name by the Irish writer G.B. Shaw (1856-1950). On a rainy night in 1912, the eccentric and snobbish linguist Henry Higgins meets Eliza Doolittle, a ragged and ordinary violet seller. The florist's vulgar language arouses his interest so much that he makes a risky bet with his friend Colonel Pickering: he undertakes to teach her to speak English correctly and to make her pass as a lady of high society within six months.",
        image: 'https://pics.filmaffinity.com/my_fair_lady-394149974-msmall.jpg'
    },

    {
        name: 'Tom Jones',
        year: '1963',
        director: 'Tony Richardson',
        cast: ['Albert Finney, ', 'Susannah York, ', 'Hugh Griffith, ', 'David Warner, ', 'Edith Evans'],
        summary: 'Based on the novel of the same name by the English writer Henry Fielding. It was never known who his father was, so Tom Jones (Albert Finney) grew up adopted by the generous Mr. Allworthy, having to share affection and setbacks with his nephew, Blifil (David Warner), as it happens that both of them meet. They will fall in love with the same girl: Sophie Western (Susannah York). who prefers Tom, but seems condemned to marry the "modest" nephew. History of scandals and other frivolities in 18th century England.',
        image: 'https://decine21.com/img/upload/obras/tom-jones-4800/tom-jones-4800-c.jpg'
    },

    {
        name: 'Lawrence of Arabia',
        year: '1962',
        director: 'David Lean',
        cast: ["Peter O'Toole, ", "Omar Sharif, ", "Alec Guinness, ", "Jack Hawkins, ", "Anthony Quinn"],
        summary: "Cairo, 1917. During the Great War (1914-1918), T.E. Lawrence (Peter O'Toole), a conflicted and enigmatic British officer, is sent to the desert to participate in a campaign supporting the Arabs against Turkey. He and his friend Sherif Ali (Omar Sharif) will put all their soul into this mission. The natives adore Lawrence because he has amply proven to be a lover of the desert and the Arab people. Instead, his British superiors believe he has gone mad.",
        image: 'https://pics.filmaffinity.com/lawrence_of_arabia-588633055-msmall.jpg'
    },

    {
        name: 'West Side Story',
        year: '1961',
        director: ['Robert Wise, ', 'Jerome Robbins'],
        cast: ['Natalie Wood, ', 'Richard Beymer, ', 'George Chakiris, ', 'Rita Moreno, ', 'Russ Tamblyn'],
        summary: 'Modern version of "Romeo and Juliet." On the West Side of New York, a marginal neighborhood, two street gangs are fighting for hegemony: the "Sharks" are Puerto Rican, and the "Jets" are of European descent. The leader of the first is Bernardo, who lives with his sister María, who has just arrived in New York. One night, at a dance, the two groups meet and a violent fight breaks out.',
        image: 'https://pics.filmaffinity.com/west_side_story-416800351-msmall.jpg'
    },

    {
        name: 'The Apartment',
        year: '1960',
        director: 'Billy Wilder',
        cast: ['Jack Lemmon, ', 'Shirley MacLaine, ', 'Fred MacMurray, ', 'Ray Walston, ', 'Edie Adams'],
        summary: "DC Baxter (Jack Lemmon) is a modest but ambitious employee of a Manhattan insurance company. He is single and lives alone in a discreet apartment that he occasionally lends to his superiors for their love dates. He hopes that these favors will help him improve his position in the company. But the situation changes when he falls in love with an elevator operator (Shirley MacLaine) who turns out to be the mistress of one of the bosses who use his apartment (Fred MacMurray).",
        image: 'https://pics.filmaffinity.com/the_apartment-815113911-msmall.jpg'
    },

    {
        name: 'Ben-Hur',
        year: '1959',
        director: 'William Wyler',
        cast: ['Charlton Heston,', 'Jack Hawkins, ', 'Stephen Boyd, ', 'Haya Harareet, ', 'Hugh Griffith'],
        summary: "Antigua Roma, bajo el reinado de los emperadores Augusto y Tiberio (s. I d.C.). Judá Ben-Hur (Charlton Heston), hijo de una familia noble de Jerusalén, y Mesala (Stephen Boyd), tribuno romano que dirige los ejércitos de ocupación, son dos antiguos amigos, pero un accidente involuntario los convierte en enemigos irreconciliables: Ben-Hur es acusado de atentar contra la vida del nuevo gobernador romano, y Mesala lo encarcela a él y a su familia. Mientras Ben-Hur es trasladado a galeras para cumplir su condena, un hombre llamado Jesús de Nazaret se apiada de él y le da de beber. En galeras conocerá al comandante de la nave (Jack Hawkins) y más tarde a un jeque árabe (Hugh Griffith) que participa con sus magníficos caballos en carreras de cuadrigas.",
        image: 'https://decine21.com/img/upload/obras/ben-hur-1959-918/ben-hur-1959-918-c.jpg'
    },

    {
        name: 'Gigi',
        year: '1958',
        director: 'Vincente Minnelli',
        cast: ['Leslie Caron, ', 'Maurice Chevalier, ', 'Louis Jourdan, ', 'Hermione Gingold, ', 'Jacques Bergerac'],
        summary: "Paris, 1900. Gaston is a young millionaire who is bored, despite being the most pursued bachelor in the entire city. Gigi is almost a child, she is not yet old enough for dances and love affairs. But Gaston is a friend of her family and visits her frequently. Gigi's grandmother dreams of a wedding between Gastón and her granddaughter. But Gaston's plans for Gigi have nothing to do with marriage.",
        image: 'https://decine21.com/img/upload/obras/gigi-3686/gigi-3686-c.jpg'
    },

    {
        name: 'The Bridge on the River Kwai',
        year: '1957',
        director: 'David Lean',
        cast: ['William Holden, ', 'Alec Guinness, ', 'Jack Hawkins, ', 'James Donald, ', 'Sessue Hayakawa'],
        summary: "During World War II (1939-1945), a group of British prisoners are forced by the Japanese to build a bridge. The officers, led by their phlegmatic colonel, will oppose any order that violates the Geneva Convention on the rights and living conditions of prisoners of war.",
        image: 'https://decine21.com/img/upload/obras/el-puente-sobre-el-rio-kwai-3437/el-puente-sobre-el-rio-kwai-3437-c.jpg'
    },

    {
        name: 'Around the World in 80 Days',
        year: '1956',
        director: 'Michael Anderson',
        cast: ['David Niven, ', 'Mario Moreno "Cantinflas", ', 'Charles Boyer, ', 'Robert Newton, ', 'Ronald Colman'],
        summary: "Adaptation of the homonymous novel by Jules Verne. A thief has stolen £55,000 from the Bank of England. Everyone believes that it was Phileas Fogg, a true English gentleman, who has made a bet with his club mates, ensuring that he is capable of traveling around the world in 80 days.",
        image: 'https://decine21.com/img/upload/obras/la-vuelta-al-mundo-en-80-dias-4096/la-vuelta-al-mundo-en-80-dias-4096-c.jpg'
    },

    {
        name: 'Marty',
        year: '1955',
        director: 'Delbert Mann',
        cast: ['Ernest Borgnine, ', 'Betsy Blair, ', 'Esther Minciotti, ', 'Joe Mantell, ', 'Karen Steele'],
        summary: "Marty is a single butcher who still lives with his mother. He often goes out with his friends at night, trying to find a girl with whom he can share his life and make plans for the future.",
        image: 'https://decine21.com/img/upload/obras/marty-6451/marty-6451-c.jpg'
    },

    {
        name: 'On the Waterfront',
        year: '1954',
        director: 'Elia Kazan',
        cast: ['Marlon Brando, ', 'Eva Marie Saint, ', 'Karl Malden, ', 'Lee J. Cobb, ', 'Pat Henning'],
        summary: "Johnny Friendly (Lee J Cobb), the head of the dock union, uses mafia methods to control and exploit the longshoremen on the New York docks. Terry Malloy (Marlon Brando), a failed boxer who works for him, has been involuntarily implicated in one of his crimes. When Malloy meets Edie Doyle (Eva Marie Saint), the victim's sister, a profound moral transformation occurs in him that leads him to regret his past life. Through Edie he meets Father Barrie (Karl Malden), who tries to encourage him to go to court and tell everything he knows.",
        image: 'https://pics.filmaffinity.com/on_the_waterfront-283446426-msmall.jpg'
    },

    {
        name: 'From Here to Eternity',
        year: '1953',
        director: 'Fred Zinnemann',
        cast: ['Burt Lancaster, ', 'Montgomery Clift, ', 'Deborah Kerr, ', 'Frank Sinatra, ', 'Donna Reed'],
        summary: "Year 1941. Private Prewitt (Montgomery Clift), who has just arrived at the Pearl Harbor military base in Hawaii, is a former boxer retired from the ring. Captain Holmes (Philip Ober), aware of his skills as a boxer, tries to get him to join the army team, but Prewitt rejects the proposal. From that moment on he is subjected to all kinds of punishments and humiliations from both his superiors and his colleagues. He only has the friendship and support of soldier Angelo Maggio (Frank Sinatra). Meanwhile, Sergeant Milton Warden (Burt Lancaster) and Karen (Deborah Kerr), Holmes' wife, live an adulterous love story. But everyone's lives will change with the Japanese attack on Pearl Harbor.",
        image: 'https://decine21.com/img/upload/obras/de-aqui-a-la-eternidad-3093/de-aqui-a-la-eternidad-3093-c.jpg'
    },

    {
        name: 'The Greatest Show on Earth',
        year: '1952',
        director: 'Cecil B. DeMille',
        cast: ['James Stewart, ', 'Charlton Heston, ', 'Betty Hutton, ', 'Cornel Wilde, ', 'Dorothy Lamour'],
        summary: "In order to achieve a successful season, circus entrepreneur Brad Bramen hires the famous trapeze artist Sebastián to pair him with Holly, one of the public's favorite trapeze artists.",
        image: 'https://decine21.com/img/upload/obras/el-mayor-espectaculo-del-mundo-3380/el-mayor-espectaculo-del-mundo-3380-c.jpg'
    },

    {
        name: 'An American in Paris',
        year: '1951',
        director: 'Vincente Minnelli',
        cast: ['Gene Kelly, ', 'Leslie Caron, ', 'Oscar Levant, ', 'Georges Guétary, ', 'Nina Foch'],
        summary: "After the Second World War, Jerry Mulligan (Gene Kelly), an American painter, stays in Paris and exhibits his paintings, which no one buys, in Montparnasse. One day he is lucky enough to meet a millionaire American woman who decides to promote him. At the same time, he meets a shop assistant and falls in love with her.",
        image: 'https://decine21.com/img/upload/obras/un-americano-en-paris-10752/un-americano-en-paris-10752-c.jpg'
    },

    {
        name: 'All About Eve',
        year: '1950',
        director: 'Joseph L. Mankiewicz',
        cast: ['Bette Davis, ', 'Anne Baxter, ', 'George Sanders, ', 'Celeste Holm, ', 'Gary Merrill'],
        summary: 'The young Eva (Anne Baxter), who aspires to become an actress and succeed on stage, manages to get into a group of theater actors and become a friend and confidant of the famous and veteran actress Margo Channing (Bette Davis), great lady of the New York scene. The desire to perform and jealousy consume her to the point that she begins to betray her companions in her climb to success. She flatters, attracts, seduces, but also tramples everyone who crosses her path: writers, directors, producers. Only an intelligent theater critic begins to guess what is hidden behind her sweet appearance, only he is able to see "Eve naked."',
        image: 'https://pics.filmaffinity.com/all_about_eve-696056724-msmall.jpg'
    },

    {
        name: "All the King's Men",
        year: '1949',
        director: 'Robert Rossen',
        cast: ['Broderick Crawford, ', 'Mercedes McCambridge, ', 'John Ireland, ', 'Joanne Dru, ', 'John Derek'],
        summary: "Willie Stark (Broderick Crawford), an honest and brave man, undergoes a transformation the day he decides to enter politics and discovers that it is all foul play. After being elected governor, forgetting his principles, the first thing he does is take over the press and radio. Having become a corrupt being, he will do everything in his power to remain in power.",
        image: 'https://decine21.com/img/upload/obras/el-politico-6260/el-politico-6260-c.jpg'
    },

    {
        name: 'Hamlet',
        year: '1948',
        director: 'Laurence Olivier',
        cast: ['Laurence Olivier, ', 'Jean Simmons, ', 'Basil Sydney, ', 'Eileen Herlie, ', 'Felix Aylmer'],
        summary: "After having murdered his brother, the king of Denmark, Claudius marries the queen and takes the Danish throne. In the midst of pain, the ghost of his father appears to Prince Hamlet demanding revenge against his murderer. Hamlet then decides to hire a company of traveling actors to perform a play at court showing the murder of a king at the hands of his brother and under identical circumstances. Hamlet waits to see how his uncle's reaction confirms his guilt.",
        image: 'https://decine21.com/img/upload/obras/hamlet--1948-3728/hamlet--1948-3728-c.jpg'
    },

    {
        name: "Gentleman's Agreement",
        year: '1947',
        director: 'Elia Kazan',
        cast: ['Gregory Peck, ', 'Dorothy McGuire, ', 'John Garfield, ', 'Celeste Holm, ', 'Anne Revere'],
        summary: "A writer writing a book about anti-Semitism decides to pass himself off as Jewish. This experience will be very useful to him: he had never imagined that there were so many difficulties that a Jewish person has to face. You will also find it very instructive to observe how your friends and co-workers react when they learn of your Semitic origins.",
        image: 'https://decine21.com/img/upload/obras/la-barrera-invisible-10558/la-barrera-invisible-10558-c.jpg'
    },

    {
        name: 'The Best Years of Our Lives',
        year: '1946',
        director: 'William Wyler',
        cast: ['Dana Andrews, ', 'Fredric March, ', 'Myrna Loy, ', 'Harold Russell, ', 'Teresa Wright'],
        summary: "After World War II (1939-1945), the surviving soldiers, some with physical disabilities, return to the United States. Although at first they are treated as heroes, soon after they begin to find themselves marginalized.",
        image: 'https://pics.filmaffinity.com/the_best_years_of_our_lives-210643501-msmall.jpg'
    },

    {
        name: 'The Lost Weekend',
        year: '1945',
        director: 'Billy Wilder',
        cast: ['Ray Milland, ', 'Jane Wyman, ', 'Phillip Terry, ', 'Howard Da Silva, ', 'Doris Dowling'],
        summary: "Don Birnam (Ray Milland) is a failed writer due to his addiction to alcohol, an addiction that has destroyed him physically and morally and has turned him into a man devoid of will. As long as he keeps drinking he is capable of anything, even stealing. Both his girlfriend (Jane Wyman) and his brother try by all means to regenerate him, but their efforts seem fruitless.",
        image: 'https://decine21.com/img/upload/obras/dias-sin-huella-5912/dias-sin-huella-5912-c.jpg'
    },

    {
        name: 'Going My Way',
        year: '1944',
        director: 'Leo McCarey',
        cast: ['Bing Crosby, ', 'Barry Fitzgerald, ', 'Frank McHugh, ', 'James Brown'],
        summary: "A young priest arrives at St. Dominic's church. Father O'Malley (Crosby) clashes with the rigidity of Father Fitzgibbon (Barry Fitzgerald). Despite his differences, O'Malley knows how to inspire his neighbors and even other religious people with a new way of understanding life and opening their hearts.",
        image: 'https://decine21.com/img/upload/obras/siguiendo-mi-camino-4666/siguiendo-mi-camino-4666-c.jpg'
    },

    {
        name: 'Casablanca',
        year: '1942',
        director: 'Michael Curtiz',
        cast: ['Humphrey Bogart, ', 'Ingrid Bergman, ', 'Paul Henreid, ', 'Claude Rains, ', 'Conrad Veidt'],
        summary: "1940s. As a result of the Second World War, Casablanca was a city where people from all over came fleeing Nazism: getting there was easy, but getting out was almost impossible, especially if the fugitive's name appeared on the Gestapo lists. , which put pressure on the French authorities under the command of the corrupt inspector Renault. In this case, the target of the German secret police is Czech leader and resistance hero Victor Laszlo, whose only hope is Rick Blaine, owner of 'Rick's Café' and former lover of his wife, Ilsa Lund. Rick and Ilsa had met in Paris, but the entry of German troops into the French capital separated them.",
        image: 'https://pics.filmaffinity.com/casablanca-612211000-msmall.jpg'
    },

    {
        name: 'Mrs. Miniver',
        year: '1942',
        director: 'William Wyler',
        cast: ['Greer Garson, ', 'Walter Pidgeon, ', 'Teresa Wright, ', 'Dame May Whitty'],
        summary: "During World War II, an English family living in a small town tries to survive the German bombing raids. The mother is in front of the house waiting for her son and her husband to return from the war.",
        image: 'https://decine21.com/img/upload/obras/la-sra-miniver-6428/la-sra-miniver-6428-c.jpg'
    },

    {
        name: 'How Green Was my Valley',
        year: '1941',
        director: 'John Ford',
        cast: ['Walter Pidgeon, ', "Maureen O'Hara, ", 'Roddy McDowall, ', 'Anna Lee'],
        summary: "Childhood memories. Huw as a child, in the mining area of ​​Wales, where his family works hard to get by.",
        image: 'https://decine21.com/img/upload/obras/que-verde-era-mi-valle-7577/que-verde-era-mi-valle-7577-c.jpg'
    },

    {
        name: 'Rebecca',
        year: '1940',
        director: 'Alfred Hitchcock',
        cast: ['Laurence Olivier, ', 'Joan Fontaine, ', 'George Sanders, ', 'Judith Anderson'],
        summary: "A young woman marries an aristocrat and moves to his mansion, Manderley, located in Cornwall. However, the shadow of Rebeca, the millionaire's previous wife, who died under strange circumstances, is still present there.",
        image: 'https://decine21.com/img/upload/obras/rebeca-4553/rebeca-4553-c.jpg'
    },

    {
        name: 'Gone with the Wind',
        year: '1939',
        director: 'Victor Fleming',
        cast: ['Vivien Leigh, ', 'Clark Gable, ', 'Leslie Howard, ', 'Olivia de Havilland'],
        summary: "Georgia, 1861. In the elegant southern mansion of Tara, lives Scarlett O'Hara (Vivien Leigh), the most beautiful, capricious and selfish young woman in the region. She pines for the love of Ashley (Leslie Howard), but he is engaged to her cousin, the sweet and kind Melanie (Olivia de Havilland).",
        image: 'https://decine21.com/img/upload/obras/lo-que-el-viento-se-llevo-6400/lo-que-el-viento-se-llevo-6400-c.jpg'
    },

    {
        name: "You Can't Take It with You",
        year: '1938',
        director: 'Frank Capra',
        cast: ['Jean Arthur, ', 'Lionel Barrymore, ', 'James Stewart, ', 'Edward Arnold'],
        summary: "It tells how young Alice, the only sane member of the eccentric Vanderhof family, has fallen in love with her boss Tony Kirby. Marriage prospects are in sight, but the Vanderhof family's meeting with the more conventional of the Kirbys could have unforeseen consequences.",
        image: 'https://decine21.com/img/upload/obras/vive-como-quieras-7599/vive-como-quieras-7599-c.jpg'
    },

    {
        name: 'In Old Chicago',
        year: '1937',
        director: 'Henry King',
        cast: ['Tyrone Power, ', 'Alice Faye, ', 'Don Ameche, ', 'Andy Devine'],
        summary: "In one of the first disaster films, Henry King reconstructs the colossal fire that devastated Chicago in 1871. The filmmaker follows in the footsteps of the O'Leary family. Older brother Jack is elected mayor with the help of his popular brother Dion.",
        image: 'https://decine21.com/img/upload/obras/chicago--1937-112/chicago--1937-112-c.jpg'
    },

    {
        name: 'The Great Ziegfeld',
        year: '1936',
        director: 'Robert Z. Leonard',
        cast: ['William Powell, ', 'Myrna Loy, ', 'Luise Rainer, ', 'Fanny Brice'],
        summary: "The film begins with Ziegfeld as a humble carny, presenting the show of the strongest man in the world, in competition with his eternal rival Jack Billings. With a comedic tone we witness his rise in the world of show business, thanks to his intuition for discovering variety stars - one, his first wife, Anna Held -, and his ability to get ahead of the competition. And we are also witnesses of their love problems.",
        image: 'https://decine21.com/img/upload/obras/el-gran-ziegfeld-6541/el-gran-ziegfeld-6541-c.jpg'
    },

    {
        name: 'Mutiny On The Bounty',
        year: '1935',
        director: 'Frank Lloyd',
        cast: ['Charles Laughton, ', 'Clark Gable, ', 'Franchot Tone, ', 'Herbert Mundin'],
        summary: "On the occasion of a scientific expedition to the Tahiti area, on April 28, 1787, the British navy clipper 'Bounty' weighed anchor. Captain Bligh (Charles Laughton), cruel and heartless, is in charge. Soon, the cunning first officer Christian Fletcher (Clark Gable) realizes that the voyage cannot continue like this, but instead of rebelling by force, as the crew intends, he wants to do things reasonably and fairly. He is supported by cadet Roger Byam (Franchot Tone). After an idyllic stay on a paradise island, Fletcher decides to return and relieve the evil Bligh of command. The mutiny has occurred.",
        image: 'https://decine21.com/img/upload/obras/rebelion-a-bordo-4556/rebelion-a-bordo-4556-c.jpg'
    },

    {
        name: 'It Happened One Night',
        year: '1934',
        director: 'Frank Capra',
        cast: ['Clark Gable, ', 'Claudette Colbert, ', 'Walter Connolly, ', 'Roscoe Karns'],
        summary: "Ellie Andrews (Claudette Colbert) is a somewhat clumsy millionaire, who is about to marry a beau who only wants to take advantage of her money. Her father, Alexander (Walter Connolly), is very angry with this decision of his daughter, and does not know what to do to convince her to abandon the idea of ​​​​marriage with this fraud. During an argument on the family yacht, the upset Ellie jumps overboard and escapes. She takes a bus to New York, where she has arranged to meet her boyfriend. But along the way he meets journalist Peter Warne (Clark Gable), who has just lost his job. Warne recognizes her right away and decides to follow her to get the scoop on the millionaire fugitive's story.",
        image: 'https://decine21.com/img/upload/obras/sucedio-una-noche-4727/sucedio-una-noche-4727-c.jpg'
    },

    {
        name: 'Cavalcade',
        year: '1933',
        director: 'Frank Lloyd',
        cast: ["Diana Wynyard, ", "Clive Brook, ", "Una O'Connor, ", "Herbert Mundin"],
        summary: "A London family reviews the history of England from the New Year of 1899 to 1933. Husband and wife express their points of view on the different events that occurred, such as the death of Queen Victoria or the sinking of the Titanic.",
        image: 'https://decine21.com/img/upload/obras/cabalgata-11236/cabalgata-11236-c.jpg'
    },

    {
        name: 'Grand Hotel',
        year: '1932',
        director: 'Edmund Goulding',
        cast: ['Greta Garbo, ', 'John Barrymore, ', 'Joan Crawford, ', 'Wallace Beery'],
        summary: "A luxurious hotel in Berlin. The comings and goings of guests. Here is the premise of Grand Hotel, Oscar for best film of 1932. Curiously, it was the only category in which it was nominated. Its origin lies in the novel 'Menschen im Hotel', by Vicky Baum. The author got the idea from her experience as a waitress in a hotel. A successful Broadway play was born from the novel, from which the film was derived.",
        image: 'https://decine21.com/img/upload/obras/grand-hotel-1515/grand-hotel-1515-c.jpg'
    },

    {
        name: 'Cimarron',
        year: '1931',
        director: 'Wesley Ruggles',
        cast: ['Richard Dix, ', 'Irene Dunne, ', 'Estelle Taylor, ', "Nance O'Neil"],
        summary: "Journalist and law graduate Yancey Cravat moves with his family to Oklahoma, where a boiling nation offers ownership of territory to settlers who decide to move. There he will become the leading citizen in transforming that wild frontier territory into a prosperous and civilized community.",
        image: 'https://decine21.com/img/upload/obras/cimarron-41483/cimarron-41483-c.jpg'
    },

    {
        name: 'All Quiet on the Western Front',
        year: '1930',
        director: 'Lewis Milestone',
        cast: ['Lew Ayres, Louis Wolheim, John Wray, Arnold Lucy, Ben Alexander'],
        summary: "Mythical anti-war film that captures the feelings, sensations and disappointments of a group of young students who are sent to the front in the First World War (1914-1918). It is an adaptation of the novel of the same name by the German writer Erich María Remarque. Its premiere caused clashes between Nazis and communists.",
        image: 'https://decine21.com/img/upload/obras/sin-novedad-en-el-frente-607/sin-novedad-en-el-frente-607-c.jpg'
    },

    {
        name: 'The Broadway Melody',
        year: '1929',
        director: 'Harry Beaumont',
        cast: ['Charles King, ', 'Anita Page, ', 'Bessie Love, ', 'Jed Prouty'],
        summary: "Queenie and Hank are two sisters ready to succeed on Broadway. There they fall in love with the same man, the artist Eddie Kearns, who helps them get a number in his company. When Kearns falls in love with Queenie, he will help her rise to the top.",
        image: 'https://decine21.com/img/upload/obras/la-melodia-de-broadway-11238/la-melodia-de-broadway-11238-c.jpg'
    },

    {
        name: 'Wings',
        year: '1927',
        director: 'William A. Wellman',
        cast: ['Clara Bow, ', 'Charles "Buddy" Rogers, ', 'Richard Arlen, ', 'Jobyna Ralston'],
        summary: "Based on real experiences of the director himself, its plot presents us with two young Americans who enlist in the army to fight against the Germans in the First World War. At the same time, both have a great rivalry for the love of a girl.",
        image: 'https://decine21.com/img/upload/obras/alas-9423/alas-9423-c.jpg'
    }
]

const FilteredList = ({filter}) => {

    const film = oscarWinners.filter((winner) => {
            return(
                winner.year === filter
            )
    })
    
    const listItems = film.map(winner =>
        <li key={winner.year}>
            <p>
                <b>Winner of the year {winner.year}</b>
            </p>
            <p>
                <b>{winner.name}</b>
            </p>
            <img src= {winner.image} alt= {winner.image} />
            <p>
                <b>Director: {winner.director}</b>
            </p>
            <p>
                <b>Cast: {winner.cast}</b>
            </p>
            <p>
                <b>Synopsis: {winner.summary}</b>
            </p>
        </li>
    )
    return <ul>{listItems}</ul>
}

export default FilteredList;