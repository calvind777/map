var options = {
  valueNames: [ 
    'name', 
    'company',
    { data: ['id']},
    { attr: 'src', name: 'image'}
  ]
};

var userList = new List('users', options);
            if (i === nameLocationWork.length - 1) {
                console.log("arcs", arcs);
                setData(arcs);
            }

/* Unused data */
/*
{  
      "name":"Canzhi Ye",
      "location":"Berkeley, California",
      "companies":[  
         {  
            "name":"Nextdoor",
            "location":"San Francisco, California"
         },
         {  
            "name":"Rise",
            "location":"San Francisco, California"
         },
         {  
            "name":"One, Inc.",
            "location":"San Francisco, California"
         },
         {  
            "name":"Apps for Aptitude",
            "location":"San Antonio, Texas"
         }
      ]
   },
   {  
      "name":"Shivam Thapar",
      "location":"Los Angeles, California",
      "companies":[  
         {  
            "name":"Evernote",
            "location":"Redwood City, California"
         },
         {  
            "name":"@WalmartLabs",
            "location":null
         },
         {  
            "name":"TokBox",
            "location":"San Francisco, California"
         },
         {  
            "name":"TokBox",
            "location":"San Francisco, California"
         },
         {  
            "name":"Codewars",
            "location":"Santa Monica, California"
         },
         {  
            "name":"Troy NJROTC",
            "location":null
         }
      ]
   },
   {  
      "name":"Lenny Dong",
      "location":"Gaithersburg, Maryland",
      "companies":[  
         {  
            "name":"Naehas Inc.",
            "location":"Palo Alto, California"
         },
         {  
            "name":"Uniformed Services University of the Health Sciences",
            "location":null
         }
      ]
   },
   {  
      "name":"Michael Ge",
      "location":"West Covina, California",
      "companies":[  
         {  
            "name":"Autodesk",
            "location":null
         },
         {  
            "name":"edX",
            "location":"Cambridge, Massachusetts"
         },
         {  
            "name":"CS50",
            "location":"Cambridge, Massachusetts"
         }
      ]
   },
   {  
      "name":"Daniel Chen",
      "location":"Potomac, Maryland",
      "companies":[  
         {  
            "name":"Facebook",
            "location":"Menlo Park, California"
         },
         {  
            "name":"Google",
            "location":"Mountain View, California"
         },
         {  
            "name":"Maryland Cybersecurity Center",
            "location":"College Park, Maryland"
         },
         {  
            "name":"Center for Advanced Transportation Technology",
            "location":"College Park, Maryland"
         },
         {  
            "name":"National Institutes of Health (NIH)",
            "location":null
         }
      ]
   },
   {  
      "name":"Shashank Bhargava",
      "location":"Berkeley, California",
      "companies":[  
         {  
            "name":"Slack",
            "location":"San Francisco, California"
         },
         {  
            "name":"Cal Hacks",
            "location":"Berkeley, California"
         },
         {  
            "name":"Nestio",
            "location":"New York, New York"
         },
         {  
            "name":"Forward Philly",
            "location":"Philadelphia, Pennsylvania"
         },
         {  
            "name":"Loadstar Sensors",
            "location":"Fremont, California"
         },
         {  
            "name":"Kumon",
            "location":null
         }
      ]
   },
   {  
      "name":"Eric Gao",
      "location":"Arcadia, California",
      "companies":[  
         {  
            "name":"Facebook",
            "location":"Menlo Park, California"
         },
         {  
            "name":"Lockitron",
            "location":"Mountain View, California"
         },
         {  
            "name":"Xvolve, Inc.",
            "location":null
         }
      ]
   },
   {  
      "name":"Michael Fan",
      "location":"Rockville, Maryland",
      "companies":[  
         {  
            "name":"KAB Laboratories, Inc.",
            "location":"San Diego, California"
         },
         {  
            "name":"National Institutes of Health (NIH)",
            "location":"Bethesda, Maryland"
         },
         {  
            "name":"University of Maryland, College Park",
            "location":"College Park, Maryland"
         }
      ]
   },
   {  
      "name":"Rahul Bhale",
      "location":"Olney, Maryland",
      "companies":[  
         {  
            "name":"MedStar Montgomery Medical Center",
            "location":"Olney, Maryland"
         },
         {  
            "name":"Children's National Medical Center",
            "location":null
         }
      ]
   },
   {  
      "name":"Sean Nair",
      "location":"Singapore",
      "companies":[  
         {  
            "name":"International Enterprise Singapore",
            "location":"Singapore, Singapore"
         },
         {  
            "name":"National Institute of Standards and Technology",
            "location":"Gaithersburg, Maryland"
         },
         {  
            "name":"Stony Brook University",
            "location":"Stony Brook, New York"
         },
         {  
            "name":"Institute of Molecular and Cell Biology (IMCB)",
            "location":"Singapore, Singapore"
         }
      ]
   },
   {  
      "name":"John Ababseh",
      "location":"San Francisco, California",
      "companies":[  
         {  
            "name":"SUPERB Productions",
            "location":"Berkeley, California"
         },
         {  
            "name":"See Your Future",
            "location":null
         },
         {  
            "name":"Tea With Strangers",
            "location":"San Francisco, California"
         },
         {  
            "name":"IBM",
            "location":"Austin, Texas"
         },
         {  
            "name":"Appcoin",
            "location":"San Francisco, California"
         },
         {  
            "name":"Uber",
            "location":"San Francisco, California"
         },
         {  
            "name":"Morgan Stanley",
            "location":"San Francisco, California"
         },
         {  
            "name":"Chime",
            "location":"San Francisco, California"
         },
         {  
            "name":"Doe Library at UC Berkeley",
            "location":"Berkeley, California"
         }
      ]
   },
   {  
      "name":"Prashan Dharmasena",
      "location":"Berkeley, California",
      "companies":[  
         {  
            "name":"Fitbit",
            "location":"San Francisco, California"
         },
         {  
            "name":"Fitbit",
            "location":"San Francisco, California"
         },
         {  
            "name":"Lockitron",
            "location":"Mountain View, California"
         },
         {  
            "name":"Center for Advanced Transportation Technology",
            "location":"College Park, Maryland"
         },
         {  
            "name":"University Of Maryland",
            "location":null
         },
         {  
            "name":"Center for Advanced Transportation Technology",
            "location":"College Park, Maryland"
         },
         {  
            "name":"Xvolve, Inc.",
            "location":"San Francisco, California"
         }
      ]
   },
   {  
      "image":"https://randomuser.me/api/portraits/men/0.jpg",
      "companies":[  
         {  
            "name":"Uber",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"Xiaomi",
            "location":"Beijing, China"
         },
         {  
            "name":"Airbnb",
            "location":"San Francisco, Calif."
         }
      ],
      "name":"Antione Holcombe",
      "location":"San Francisco, Calif."
   },
*/

var data = [  
   {  
      "image":"https://randomuser.me/api/portraits/men/1.jpg",
      "companies":[  
         {  
            "name":"Palantir",
            "location":"Palo Alto, Calif."
         },
         {  
            "name":"Didi Kuaidi",
            "location":"Beijing, China"
         },
         {  
            "name":"Snapchat",
            "location":"Venice, Calif."
         }
      ],
      "name":"Chase Beliveau",
      "location":"Venice, Calif."
   },
   {  
      "image":"https://randomuser.me/api/portraits/men/2.jpg",
      "companies":[  
         {  
            "name":"China Internet Plus",
            "location":"Beijing, China"
         },
         {  
            "name":"Flipkart",
            "location":"Bangalore, India"
         },
         {  
            "name":"SpaceX",
            "location":"Hawthorne, Calif."
         }
      ],
      "name":"Maxwell Colyer",
      "location":"Hawthorne, Calif."
   },
   {  
      "image":"https://randomuser.me/api/portraits/men/3.jpg",
      "companies":[  
         {  
            "name":"Pinterest",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"Dropbox",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"Lufax",
            "location":"Shanghai, China"
         }
      ],
      "name":"Bernie Strickland",
      "location":"Shanghai, China"
   },
   {  
      "image":"https://randomuser.me/api/portraits/men/4.jpg",
      "companies":[  
         {  
            "name":"WeWork",
            "location":"New York, N.Y."
         },
         {  
            "name":"Theranos",
            "location":"Palo Alto, Calif."
         },
         {  
            "name":"Spotify",
            "location":"Stockholm, Sweden"
         }
      ],
      "name":"Gino Vu",
      "location":"Stockholm, Sweden"
   },
   {  
      "image":"https://randomuser.me/api/portraits/men/5.jpg",
      "companies":[  
         {  
            "name":"DJI",
            "location":"Beijing, China"
         },
         {  
            "name":"Zhong An",
            "location":"Hong Kong"
         },
         {  
            "name":"Intarcia Therapeutics",
            "location":"Boston, Mass."
         }
      ],
      "name":"Donte Brodsky",
      "location":"Boston, Mass."
   },
   {  
      "image":"https://randomuser.me/api/portraits/men/6.jpg",
      "companies":[  
         {  
            "name":"Lyft",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"Coupang",
            "location":"Seoul, South Korea"
         },
         {  
            "name":"Ola (aka Olacabs; dba Ani Technologies)",
            "location":"Bangalore, India"
         }
      ],
      "name":"Ulysses Overton",
      "location":"Bangalore, India"
   },
   {  
      "image":"https://randomuser.me/api/portraits/men/7.jpg",
      "companies":[  
         {  
            "name":"Snapdeal",
            "location":"New Delhi, India"
         },
         {  
            "name":"Stemcentrx",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"Stripe",
            "location":"San Francisco, Calif."
         }
      ],
      "name":"Rodolfo Ullrich",
      "location":"San Francisco, Calif."
   },
   {  
      "image":"https://randomuser.me/api/portraits/men/8.jpg",
      "companies":[  
         {  
            "name":"Zenefits (dba YourPeople)",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"Social Finance (aka SoFi)",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"Vice Media",
            "location":"New York, N.Y."
         }
      ],
      "name":"Alton Sheely",
      "location":"New York, N.Y."
   },
   {  
      "image":"https://randomuser.me/api/portraits/men/9.jpg",
      "companies":[  
         {  
            "name":"Tanium",
            "location":"Emeryville, Calif."
         },
         {  
            "name":"UCar (dba Shenzhou Zuche)",
            "location":"Beijing, China"
         },
         {  
            "name":"Credit Karma",
            "location":"San Francisco, Calif."
         }
      ],
      "name":"Weldon Lindblad",
      "location":"San Francisco, Calif."
   },
   {  
      "image":"https://randomuser.me/api/portraits/men/10.jpg",
      "companies":[  
         {  
            "name":"Global Fashion Group",
            "location":"London, U.K."
         },
         {  
            "name":"Jawbone (dba AliphCom)",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"Meizu",
            "location":"Zhuhai, China"
         }
      ],
      "name":"Mariano Paz",
      "location":"Zhuhai, China"
   },
   {  
      "image":"https://randomuser.me/api/portraits/men/11.jpg",
      "companies":[  
         {  
            "name":"CloudFlare",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"Delivery Hero",
            "location":"Berlin, Germany"
         },
         {  
            "name":"Machine Zone",
            "location":"Palo Alto, Calif."
         }
      ],
      "name":"Renato Sautner",
      "location":"Palo Alto, Calif."
   },
   {  
      "image":"https://randomuser.me/api/portraits/men/12.jpg",
      "companies":[  
         {  
            "name":"Bloom Energy",
            "location":"Sunnyvale, Calif."
         },
         {  
            "name":"DocuSign",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"Ele.me",
            "location":"Shanghai, China"
         }
      ],
      "name":"Colin Ott",
      "location":"Shanghai, China"
   },
   {  
      "image":"https://randomuser.me/api/portraits/men/13.jpg",
      "companies":[  
         {  
            "name":"Fanatics",
            "location":"Jacksonville, Fla."
         },
         {  
            "name":"Legendary Entertainment",
            "location":"Burbank, Calif."
         },
         {  
            "name":"Moderna Therapeutics",
            "location":"Cambridge, Mass."
         }
      ],
      "name":"Louie Alexander",
      "location":"Cambridge, Mass."
   },
   {  
      "image":"https://randomuser.me/api/portraits/men/14.jpg",
      "companies":[  
         {  
            "name":"Sogou",
            "location":"Beijing, China"
         },
         {  
            "name":"Vancl",
            "location":"Beijing, China"
         },
         {  
            "name":"Wish (dba ContextLogic)",
            "location":"San Francisco, Calif."
         }
      ],
      "name":"Jame Ketcham",
      "location":"San Francisco, Calif."
   },
   {  
      "image":"https://randomuser.me/api/portraits/men/15.jpg",
      "companies":[  
         {  
            "name":"HelloFresh",
            "location":"Berlin, Germany"
         },
         {  
            "name":"Slack",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"Powa",
            "location":"London, U.K."
         }
      ],
      "name":"Tracy Moor",
      "location":"London, U.K."
   },
   {  
      "image":"https://randomuser.me/api/portraits/men/16.jpg",
      "companies":[  
         {  
            "name":"Garena Online",
            "location":"Singapore"
         },
         {  
            "name":"InMobi",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"Klarna",
            "location":"Stockholm, Sweden"
         }
      ],
      "name":"Rex Sheets",
      "location":"Stockholm, Sweden"
   },
   {  
      "image":"https://randomuser.me/api/portraits/men/17.jpg",
      "companies":[  
         {  
            "name":"Meitu",
            "location":"Xiamen, China"
         },
         {  
            "name":"Mozido",
            "location":"Austin, Texas"
         },
         {  
            "name":"Adyen",
            "location":"Amsterdam, The Netherlands"
         }
      ],
      "name":"Les Leaver",
      "location":"Amsterdam, The Netherlands"
   },
   {  
      "image":"https://randomuser.me/api/portraits/men/18.jpg",
      "companies":[  
         {  
            "name":"Houzz",
            "location":"Palo Alto, Calif."
         },
         {  
            "name":"AppDynamics",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"Avant",
            "location":"Chicago, Ill."
         }
      ],
      "name":"Scottie Sobotka",
      "location":"Chicago, Ill."
   },
   {  
      "image":"https://randomuser.me/api/portraits/men/19.jpg",
      "companies":[  
         {  
            "name":"Blue Apron",
            "location":"New York, N.Y."
         },
         {  
            "name":"Domo",
            "location":"American Fork, Utah"
         },
         {  
            "name":"Github",
            "location":"San Francisco, Calif."
         }
      ],
      "name":"Tyrone Galban",
      "location":"San Francisco, Calif."
   },
   {  
      "image":"https://randomuser.me/api/portraits/men/20.jpg",
      "companies":[  
         {  
            "name":"Instacart",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"Magic Leap",
            "location":"Dania, Fla."
         },
         {  
            "name":"NantHealth",
            "location":"Culver City, Calif."
         }
      ],
      "name":"Mauro Mcginnis",
      "location":"Culver City, Calif."
   },
   {  
      "image":"https://randomuser.me/api/portraits/men/21.jpg",
      "companies":[  
         {  
            "name":"Nutanix",
            "location":"San Jose, Calif."
         },
         {  
            "name":"SurveyMonkey",
            "location":"Palo Alto, Calif."
         },
         {  
            "name":"Trendy Group",
            "location":"Hong Kong"
         }
      ],
      "name":"Lawerence Zoeller",
      "location":"Hong Kong"
   },
   {  
      "image":"https://randomuser.me/api/portraits/men/22.jpg",
      "companies":[  
         {  
            "name":"Prosper Marketplace",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"Avito.ru",
            "location":"Moscow, Russia"
         },
         {  
            "name":"One97 Communications",
            "location":"Delhi, India"
         }
      ],
      "name":"Dwain Dau",
      "location":"Delhi, India"
   },
   {  
      "image":"https://randomuser.me/api/portraits/men/23.jpg",
      "companies":[  
         {  
            "name":"Zocdoc",
            "location":"New York, N.Y."
         },
         {  
            "name":"Mogujie",
            "location":"Hangzhou, China"
         },
         {  
            "name":"The Honest Co.",
            "location":"Los Angeles, Calif."
         }
      ],
      "name":"Forrest Smitherman",
      "location":"Los Angeles, Calif."
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/24.jpg",
      "companies":[  
         {  
            "name":"Yidao Yongche",
            "location":"Beijing, China"
         },
         {  
            "name":"AppNexus",
            "location":"New York, N.Y."
         },
         {  
            "name":"BlaBlaCar",
            "location":"Paris, France"
         }
      ],
      "name":"Harland Petitt",
      "location":"Paris, France"
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/25.jpg",
      "companies":[  
         {  
            "name":"GrabTaxi",
            "location":"Singapore"
         },
         {  
            "name":"Lakala",
            "location":"Beijing, China"
         },
         {  
            "name":"MongoDB",
            "location":"New York, N.Y."
         }
      ],
      "name":"Jeanice Thiede",
      "location":"New York, N.Y."
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/26.jpg",
      "companies":[  
         {  
            "name":"Skyscanner",
            "location":"Edinburgh, Scotland"
         },
         {  
            "name":"WePiao",
            "location":"Kagochima, China"
         },
         {  
            "name":"Apttus",
            "location":"San Mateo, Calif."
         }
      ],
      "name":"Maricruz Bezio",
      "location":"San Mateo, Calif."
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/27.jpg",
      "companies":[  
         {  
            "name":"Blippar",
            "location":"London, U.K."
         },
         {  
            "name":"BuzzFeed",
            "location":"New York, N.Y."
         },
         {  
            "name":"GuaHao",
            "location":"Hangzhou, China"
         }
      ],
      "name":"Hertha Bettinger",
      "location":"Hangzhou, China"
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/28.jpg",
      "companies":[  
         {  
            "name":"InsideSales",
            "location":"Provo, Utah"
         },
         {  
            "name":"IronSource",
            "location":"Tel Aviv, Israel"
         },
         {  
            "name":"Koudai Shopping",
            "location":"Beijing, China"
         }
      ],
      "name":"Freida Wiseman",
      "location":"Beijing, China"
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/29.jpg",
      "companies":[  
         {  
            "name":"Mu Sigma",
            "location":"Northbrook, Ill."
         },
         {  
            "name":"MuleSoft",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"Oscar Health Insurance",
            "location":"New York, N.Y."
         }
      ],
      "name":"Lorraine Rase",
      "location":"New York, N.Y."
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/30.jpg",
      "companies":[  
         {  
            "name":"Oxford Nanopore",
            "location":"Oxford, U.K."
         },
         {  
            "name":"Tango",
            "location":"Mountain View, Calif."
         },
         {  
            "name":"Cloudera",
            "location":"Palo Alto, Calif."
         }
      ],
      "name":"Odelia Sergi",
      "location":"Palo Alto, Calif."
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/31.jpg",
      "companies":[  
         {  
            "name":"Deem",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"Jasper Technologies",
            "location":"Santa Clara, Calif."
         },
         {  
            "name":"Jet",
            "location":"Hoboken, N.J."
         }
      ],
      "name":"Vashti Barkley",
      "location":"Hoboken, N.J."
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/32.jpg",
      "companies":[  
         {  
            "name":"FanDuel",
            "location":"New York, N.Y."
         },
         {  
            "name":"Lazada Group",
            "location":"Singapore"
         },
         {  
            "name":"Medallia",
            "location":"Palo Alto, Calif."
         }
      ],
      "name":"Judi Opitz",
      "location":"Palo Alto, Calif."
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/33.jpg",
      "companies":[  
         {  
            "name":"Thumbtack",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"Auction.com",
            "location":"Irvine, Calif."
         },
         {  
            "name":"Auto1 Group",
            "location":"Berlin, Germany"
         }
      ],
      "name":"Kirsten Blick",
      "location":"Berlin, Germany"
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/34.jpg",
      "companies":[  
         {  
            "name":"Automattic",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"CureVac",
            "location":"T\u00fcbingen, Germany"
         },
         {  
            "name":"DraftKings",
            "location":"Boston, Mass."
         }
      ],
      "name":"Bettyann Chica",
      "location":"Boston, Mass."
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/35.jpg",
      "companies":[  
         {  
            "name":"Eventbrite",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"Evernote",
            "location":"Redwood City, Calif."
         },
         {  
            "name":"Infinidat",
            "location":"Herzliya, Israel"
         }
      ],
      "name":"Jeri Jeffreys",
      "location":"Herzliya, Israel"
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/36.jpg",
      "companies":[  
         {  
            "name":"NJOY",
            "location":"Scottsdale, Ariz."
         },
         {  
            "name":"Okta",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"Sprinklr",
            "location":"New York, N.Y."
         }
      ],
      "name":"Palma Laxton",
      "location":"New York, N.Y."
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/37.jpg",
      "companies":[  
         {  
            "name":"Warby Parker (dba Jand)",
            "location":"New York, N.Y."
         },
         {  
            "name":"Actifio",
            "location":"Waltham, Mass."
         },
         {  
            "name":"Docker",
            "location":"San Francisco, Calif."
         }
      ],
      "name":"Maia Bromberg",
      "location":"San Francisco, Calif."
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/38.jpg",
      "companies":[  
         {  
            "name":"Gusto (formerly ZenPayroll)",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"MediaMath",
            "location":"New York, N.Y."
         },
         {  
            "name":"Nextdoor",
            "location":"San Francisco, Calif."
         }
      ],
      "name":"Carole Alto",
      "location":"San Francisco, Calif."
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/39.jpg",
      "companies":[  
         {  
            "name":"Proteus Digital Health",
            "location":"Redwood City, Calif."
         },
         {  
            "name":"Shopclues",
            "location":"Gurgaon, India"
         },
         {  
            "name":"Uptake",
            "location":"Chicago, Ill."
         }
      ],
      "name":"Barbie Fischbach",
      "location":"Chicago, Ill."
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/40.jpg",
      "companies":[  
         {  
            "name":"Anaplan",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"23andMe",
            "location":"Mountain View, Calif."
         },
         {  
            "name":"58 Daojia",
            "location":"Beijing, China"
         }
      ],
      "name":"Denice Montz",
      "location":"Beijing, China"
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/41.jpg",
      "companies":[  
         {  
            "name":"Adaptive Biotechnologies",
            "location":"Seattle, Wash."
         },
         {  
            "name":"Aiwujiwu",
            "location":"Shangai, China"
         },
         {  
            "name":"Alteryx",
            "location":"Irvine, Calif."
         }
      ],
      "name":"Huong Lofton",
      "location":"Irvine, Calif."
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/42.jpg",
      "companies":[  
         {  
            "name":"AppDirect",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"Apus Group",
            "location":"Beijing, China"
         },
         {  
            "name":"Avast Software",
            "location":"Prague, Czech Republic"
         }
      ],
      "name":"Suellen Dowler",
      "location":"Prague, Czech Republic"
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/43.jpg",
      "companies":[  
         {  
            "name":"BeiBei",
            "location":"Hangzhou, China"
         },
         {  
            "name":"Carbon3D",
            "location":"Redwood City, Calif."
         },
         {  
            "name":"China Rapid Finance",
            "location":"Shanghai, China"
         }
      ],
      "name":"Brittni Erickson",
      "location":"Shanghai, China"
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/44.jpg",
      "companies":[  
         {  
            "name":"Coupa Software",
            "location":"San Mateo, Calif."
         },
         {  
            "name":"Datto",
            "location":"Norwalk, Conn."
         },
         {  
            "name":"Decolar",
            "location":"Sao Paulo, Brazil"
         }
      ],
      "name":"Juliana Usrey",
      "location":"Sao Paulo, Brazil"
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/45.jpg",
      "companies":[  
         {  
            "name":"Fanli (dba China Zhongyan Holdings)",
            "location":"Shanghai, China"
         },
         {  
            "name":"Farfetch",
            "location":"London, U.K."
         },
         {  
            "name":"Funding Circle",
            "location":"London, U.K."
         }
      ],
      "name":"Verdell Stroupe",
      "location":"London, U.K."
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/46.jpg",
      "companies":[  
         {  
            "name":"Home24",
            "location":"Berlin, Germany"
         },
         {  
            "name":"Hootsuite",
            "location":"Vancouver, British Columbia, Canada"
         },
         {  
            "name":"Illumio",
            "location":"Sunnyvale, Calif."
         }
      ],
      "name":"Corinna Loranger",
      "location":"Sunnyvale, Calif."
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/47.jpg",
      "companies":[  
         {  
            "name":"iwjw.com",
            "location":"Shanghai, China"
         },
         {  
            "name":"Jiuxian (aka Beijing Jiuxian Ecommerce)",
            "location":"Beijing, China"
         },
         {  
            "name":"JustFab",
            "location":"El Segundo, Calif."
         }
      ],
      "name":"Leanna Opp",
      "location":"El Segundo, Calif."
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/48.jpg",
      "companies":[  
         {  
            "name":"Kabam",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"Kabbage",
            "location":"Atlanta, Ga."
         },
         {  
            "name":"Kik Interactive",
            "location":"Waterloo, Ontario, Canada"
         }
      ],
      "name":"Kaleigh Dunne",
      "location":"Waterloo, Ontario, Canada"
   },
   {  
      "image":"https://randomuser.me/api/portraits/women/49.jpg",
      "companies":[  
         {  
            "name":"Lamabang",
            "location":"Beijing, China"
         },
         {  
            "name":"Lookout",
            "location":"San Francisco, Calif."
         },
         {  
            "name":"MarkLogic",
            "location":"San Carlos, Calif."
         }
      ],
      "name":"Genny Weir",
      "location":"San Carlos, Calif."
   }
]

function populateData(city) {
  for (var i = 0; i < data.length; i++) {
    if (data[i]["location"].indexOf(city) > -1) {
      data[i].company = data[i].companies[data[i].companies.length-1].name
      userList.add(data[i]);
    }
  }
}

$( document ).ready(function() {
    $("#template").hide();
    populateData("San Carlos");
    //open the lateral panel
    $('.cd-btn').on('click', function(event){
      event.preventDefault();
      $('.cd-panel').addClass('is-visible');
    });
    //close the lateral panel
    $('.cd-panel').on('click', function(event){
      if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
        $('.cd-panel').removeClass('is-visible');
        event.preventDefault();
      }
      
      $('#container').on('click', function(event){
         if (isClicked) {
         alert(5);
         }});
      

      })
      
    });
    
    $("#listButton").click();
    $("#map").hide();
});
