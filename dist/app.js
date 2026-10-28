"use strict";
const WEEKS = [[["Present simple", "g", "1"], ["Pronouns", "g", "2"], ["Articles", "g", "3"], ["Numbers (cardinal, ordinal)", "v", "22"], ["Money", "v", "23"], ["Countries and nationalities", "v", "24"], ["Greeting and introducing", "t", "42"], ["Buying and asking prices", "t", "43"], ["Asking about personal information", "t", "44"], ["Describing people and objects", "t", "45"]], [["Prepositions of place", "g", "4"], ["Prepositions of time", "g", "5"], ["Conjunctions, linkers", "g", "6"], ["Languages", "v", "25"], ["How to say the time", "v", "26"], ["Days, dates, months, years and seasons", "v", "27"], ["Talking about routines", "t", "46"], ["Talking about frequency and time duration", "t", "47"], ["Talking about likes and dislikes", "t", "48"], ["Giving opinions", "t", "49"]], [["Irregular plurals", "g", "7"], ["Possessive", "g", "8"], ["Adjectives", "g", "9"], ["Shops and places", "v", "28"], ["Interests, sports and activities", "v", "29"], ["Jobs", "v", "30"], ["Rooms and furniture", "v", "31"], ["Talking about past experiences", "t", "50"], ["Inviting, refusing, accepting, thanking", "t", "51"], ["Requesting, offering", "t", "52"]], [["Too, very", "g", "10"], ["Can (ability, possibility)", "g", "11"], ["Short form answers", "g", "12"], ["Going to (future plans)", "g", "13"], ["Colours", "v", "32"], ["Size and weight", "v", "33"], ["Body parts and appearance", "v", "34"], ["Food, meals, cooking", "v", "35"], ["Asking permission", "t", "53"], ["Expressing opinions", "t", "86"]], [["Will (offers)", "g", "14"], ["Adverbs of frequency", "g", "15"], ["Imperatives", "g", "16"], ["Past simple", "g", "17"], ["Weather", "v", "36"], ["Transport", "v", "37"], ["Health", "v", "38"], ["Feelings and emotions", "v", "39"], ["Justifying opinions", "t", "87"], ["Talking about routines and habits", "t", "88"]], [["Present continuous", "g", "18"], ["Comparatives", "g", "19"], ["Superlatives", "g", "20"], ["Street directions", "v", "40"], ["Clothes", "v", "41"], ["Families", "v", "70"], ["Food and meals", "v", "71"], ["Clothing and shopping", "v", "72"], ["Talking about intentions (part 1)", "t", "89"], ["Talking about intentions (part 2)", "t", "90"]], [["Irregular adverbs", "g", "21"], ["Countable, uncountable nouns", "g", "55"], ["Adverbs of frequency and manner", "g", "56"], ["Too, not enough", "g", "57"], ["Prices", "v", "73"], ["Daily routines", "v", "74"], ["Personality", "v", "75"], ["How to talk about life experiences", "t", "91"], ["Talking about experience", "t", "92"], ["Talking about feelings", "t", "93"]], [["Can, could for requests", "g", "58"], ["Adjectives", "g", "59"], ["Adverbs and adjectives as modifiers", "g", "60"], ["Present continuous for temporary situations", "g", "61"], ["Appearance", "v", "76"], ["Present and childhood abilities", "v", "77"], ["Basic suffixes", "v", "78"], ["Making comparisons", "t", "94"], ["Inviting", "t", "95"], ["Making decisions", "t", "96"]], [["Present continuous for the future", "g", "62"], ["Comparative and superlative", "g", "63"], ["Present perfect", "g", "64"], ["Work and jobs", "v", "79"], ["Transport", "v", "80"], ["Travel", "v", "81"], ["Describing things", "t", "97"], ["Buying things", "t", "98"], ["Talking about possibility", "t", "99"], ["Expressing hopes", "t", "100"]], [["Should for advice", "g", "65"], ["Have to, need to, must", "g", "66"], ["Be like for descriptions", "g", "67"], ["Present simple for future facts", "g", "68"], ["Machines and inventions", "v", "82"], ["Festivals and celebrations", "v", "83"], ["Hotel situations", "v", "84"], ["Talking about rules and obligations", "t", "101"], ["Giving instructions", "t", "102"], ["Making offers", "t", "103"]], [["Future simple for future facts", "g", "69"], ["Past continuous", "g", "109"], ["Present perfect", "g", "110"], ["Weather and climate", "v", "85"], ["Describing people", "v", "124"], ["Speak about health and illness", "v", "125"], ["Types of music and concerts", "v", "126"], ["Advising", "t", "104"], ["Suggesting", "t", "105"], ["Apologizing", "t", "106"]], [["Going to and will for predictions", "g", "111"], ["Reflexive pronouns", "g", "112"], ["So, such", "g", "113"], ["Household equipment", "v", "127"], ["Biographical information", "v", "128"], ["Buildings and monuments", "v", "129"], ["Congratulating", "t", "107"], ["Talking about future arrangements", "t", "108"], ["Asking personal questions", "t", "140"], ["Talking about personal experiences", "t", "141"]], [["Passive", "g", "114"], ["When, while", "g", "115"], ["Must, might for deductions", "g", "116"], ["Clothes and accessories", "v", "130"], ["Large numbers", "v", "131"], ["Travel and tourism", "v", "132"], ["Work and careers", "v", "133"], ["Asking directions", "t", "142"], ["Describing personality", "t", "143"], ["Making travel arrangements", "t", "144"]], [["As soon as", "g", "117"], ["Be able to", "g", "118"], ["Be good at", "g", "119"], ["Hobbies, sports and interests", "v", "134"], ["Education", "v", "135"], ["Life changes and events", "v", "136"], ["Political systems and change", "v", "137"], ["Ordering in a restaurant", "t", "145"], ["Talking about preferences", "t", "146"], ["Expressing preferences", "t", "147"]], [["First conditional", "g", "120"], ["Used to + verb", "g", "121"], ["Relative clauses", "g", "122"], ["Animals", "v", "138"], ["Restaurants and leisure venues", "v", "139"], ["Appearances", "v", "171"], ["Making deductions", "t", "148"], ["Making predictions", "t", "149"], ["Making suggestions", "t", "150"], ["Making offers", "t", "151"]], [["Although, however", "g", "123"], ["Used to + infinitive", "g", "154"], ["Past simple and present perfect", "g", "155"], ["Neither, so do I", "g", "156"], ["Character", "v", "172"], ["Make and do", "v", "173"], ["Housework", "v", "174"], ["Holidays and travel brochures", "v", "175"], ["Talking about obligation", "t", "152"], ["Requesting", "t", "153"]], [["Modal verbs", "g", "157"], ["Reported speech", "g", "158"], ["First, second conditional", "g", "159"], ["Illness", "v", "176"], ["Cooking", "v", "177"], ["Furniture and appliances", "v", "178"], ["Describing location, people and things", "t", "187"], ["Stating preferences and opinions", "t", "188"], ["Reporting requests and orders", "t", "189"], ["Guessing", "t", "190"]], [["Adverbs of manner and modifiers", "g", "160"], ["Adjectives and their connotations", "g", "161"], ["Present perfect continuous", "g", "162"], ["Types of books, films, and TV programs", "v", "179"], ["Crime and punishment", "v", "180"], ["Political systems", "v", "181"], ["Possibility, probability and certainty", "t", "191"], ["Describing faulty goods", "t", "192"], ["Refusing", "t", "193"], ["Summarizing", "t", "225"]], [["Look + adjective, look like + noun", "g", "163"], ["Be able to, can, manage to", "g", "164"], ["Past perfect simple", "g", "165"], ["Have and have got", "g", "166"], ["Family relationships", "v", "182"], ["Pets and animals", "v", "183"], ["Consumer services", "v", "184"], ["Expressing regret", "t", "226"], ["Drawing conclusions", "t", "227"], ["Describing cause and effect", "t", "228"]], [["Be allowed to and be supposed to", "g", "167"], ["A few, a little, few, little", "g", "168"], ["Although, in spite of, despite", "g", "169"], ["Hotel facilities", "v", "185"], ["Affixes", "v", "186"], ["Collocations", "v", "211"], ["Work, working conditions", "v", "212"], ["Stating purpose", "t", "229"], ["Emphasizing", "t", "230"], ["Stating contrast", "t", "231"]], [["Question tags", "g", "170"], ["Future perfect continuous", "g", "277"], ["Past perfect continuous", "g", "278"], ["Approximations with -ish", "v", "213"], ["Transportation", "v", "214"], ["Relationships", "v", "215"], ["Connotation", "v", "216"], ["Contradicting", "t", "264"], ["Instructing", "t", "265"], ["Expressing opinions formally and informally", "t", "266"]], [["Habit in the present and in the past", "g", "194"], ["Present perfect simple and continuous", "g", "195"], ["Past simple, past continuous, past perfect", "g", "196"], ["Will, going to", "g", "197"], ["Future perfect", "g", "198"], ["Homonyms", "v", "217"], ["Idiomatic expressions", "v", "218"], ["Sport and leisure", "v", "219"], ["Checking and clarifying information", "t", "267"], ["Paraphrasing", "t", "268"]], [["Phrasal verbs", "g", "199"], ["Zero, first, second and third conditionals", "g", "200"], ["Wish and If only", "g", "201"], ["Compounds of some, any, no, every", "g", "202"], ["Euphemisms", "v", "220"], ["Geography and climate", "v", "221"], ["At the bank", "v", "222"], ["Colloquial expressions and slang", "v", "223"], ["Expanding and exemplifying", "t", "269"], ["Persuading and convincing", "t", "270"]], [["Though, although, despite, in spite of", "g", "203"], ["Unless", "g", "204"], ["Otherwise", "g", "205"], ["Modals: present and perfect", "g", "206"], ["Participle adjectives", "v", "224"], ["Astrology and religions", "v", "246"], ["Nostalgia", "v", "247"], ["Coincidences and experiences", "v", "248"], ["Speculating", "t", "271"], ["Expressing annoyance", "t", "272"]], [["Always for frequency + present continuous", "g", "207"], ["Habit in the present and the past participle", "g", "208"], ["Present perfect simple and continuous", "g", "209"], ["Participles", "g", "210"], ["Uses of continuous tenses", "g", "237"], ["Learning and educational systems", "v", "249"], ["Eccentricity and individuality", "v", "250"], ["Creativity", "v", "251"], ["Comparing and contrasting", "t", "273"], ["Describing people", "t", "274"]], [["Uses of would", "g", "238"], ["Past perfect", "g", "239"], ["Order of adverbs", "g", "240"], ["Order of adjectives", "g", "241"], ["Ellipsis and elision", "g", "242"], ["Age and cultural differences", "v", "252"], ["Gender", "v", "253"], ["Politics", "v", "254"], ["Describing things", "t", "275"], ["Describing situations", "t", "276"]]];
const LISTEN = [["gOMypAhVaXE", "Travel"], ["xL3jQzi7q_M", "Sports"], ["DTvgAxi5mVA", "Reading and Books"], ["GH7x5w7mtjE", "Seasons"], ["audbOVSuCds", "Clothes and Fashion"], ["2Yk1M6URsCU", "Zoo Animals"], ["MX5DVYoggxY", "Nature"], ["M25ieTfZ1eI", "Fears"], ["uvkY-UGeCmk", "Cars and Driving"], ["r1ZZn-vgwVc", "Elementary School"], ["wUKvSlx95xc", "Road Trips"], ["vkOhudt_Ye8", "Museums"], ["LJRJ7IoAvls", "4th of July"], ["irGnL5nzR0Y", "Dentist"], ["AR1fMdWGUPk", "Weddings"], ["F1S8TBRNIU0", "Childhood"], ["zQNWyXKkdv0", "High School"], ["BiZ72VMogIk", "Stress"], ["xoqX3VYD8No", "Manners"], ["BXCQpEqu7L0", "'Listening Time' Podcast - Practice Your English Listening"], ["qu66xCXhxy4", "Job Interviews"], ["LZUM9y0qF3I", "Neighborhoods"], ["8ns2nEZA0YQ", "Middle School"], ["lVhk7UP3taY", "Motivation"], ["AlJ5w1oP1Gc", "Complaining"], ["6kDaIzmEMpE", "Communication"], ["hILfe20PsXk", "Happiness"], ["H8DyKBj5v3M", "Advanced English Listening Podcast"], ["Z-GfkjPXCwc", "Learning"], ["NzQlkiP0AAM", "Quiz - Test Your Skills"], ["QQlen7x2aFs", "Emotions"], ["XUQ9o86ETdg", "Quiz - But, Bought, Boat?"], ["M-kgH22l7lM", "Quiz - Chip, Cheap, Ship, Sheep"], ["0RMHvgtXIBc", "My Listening Tips (Speaking 4 Languages)"], ["Hi8Z1aQT3Lw", "Coffee"], ["_Y4NVXuPAfc", "Names"], ["FD-rEVsPfjg", "Practice - Patience"], ["Ap0sBWo4vw8", "Podcast - Thanksgiving"], ["3DkLcOwpqgg", "Practice - Childhood Activities"], ["d0nA3n5BLBk", "Practice - Inflation"], ["G015RgppUPI", "Practice - Old Age"], ["qWm1SinE5ok", "English Podcast - Pronunciation"], ["eFkAqeY0zaM", "Practice - Introverts and Extroverts"], ["W8oi7HRI6u0", "Podcast - Christmas"], ["AHgDVFP6r28", "Podcast - New Year, New Mindset"], ["C-PdyajGy3s", "Learning to Drive"], ["ROAXxUCnX8o", "Podcast - Why is it Hard to Become Advanced?"], ["56wTC4fQj5k", "Morning and Night People"], ["Y9wGDo_TfTE", "Using Subtitles"], ["FtqbKDuS_ew", "Good English Learners"], ["jqj5FdNIwsQ", "Soft Skills"], ["duqhbEmSmFg", "Relearning a Language"], ["ucngq2IBUew", "Flashcards for Learning English"], ["5uaqP-aSMTo", "Speaking Style"], ["QGZPUt7MP1k", "Learn English With Music"], ["VS2yAvQCaVg", "Unique Things in the US"]];
const TOPIC_VIDEOS = { "22": ["VYeBYn970a8", "How to read ALL NUMBERS in English - BIG NUMBERS, Decimals, Dates, Fractions, Phones, Ordinals", "English with Lucy"], "23": ["h6sAX1y35Zg", "A1 English Listening Practice - Money", "Listening Time"], "26": ["81MmK177K_c", "Learn to talk about the time! Easy English Conversations 💬 Episode 11", "BBC Learning English"], "27": ["DRl6tpsxchw", "DATES & YEARS in British & American English", "English with Lucy"], "28": ["zILBxN25nJs", "Shops: 10 Easy English Words 🏬🛒💳", "BBC Learning English"], "29": ["xL3jQzi7q_M", "A2 English Listening Practice - Sports", "Listening Time"], "30": ["GBiRbb9w3SE", "Learn English Job Vocabulary and Job Phrases", "Learn English with Bob the Canadian"], "31": ["WHYMGNbPv2U", "Let's Learn English Around the House and Home | English Video with Subtitles", "Learn English with Bob the Canadian"], "32": ["48MDYwdwMvY", "Colours: 10 Easy English Words 🌈🎨🏳️‍🌈🖼️", "BBC Learning English"], "33": ["qjwqKPU9uGQ", "Describing Dimensions of an Object in English (length, width, height, etc)", "Learn English with EnglishClass101.com"], "34": ["gNAo43v7QYs", "100 Body Part Words in English with Pictures: Advanced Vocabulary Lesson", "English with Lucy"], "35": ["QL2tNKHB6ew", "How to Cook in English: Cooking Vocabulary", "English Speaking Success"], "36": ["sMg4vj6ugSs", "Describing the weather where you are: Easy English Conversations 💬 Episode 8", "BBC Learning English"], "37": ["Wlehc1l50bk", "A1 English Listening Practice - Transportation", "Listening Time"], "38": ["oO4y4d-3Eus", "How to Talk about Injuries, Health Care, and Medicine in English! 🏥👩‍⚕️🚑", "Learn English with Bob the Canadian"], "39": ["yyClpj_GJDc", "How to talk about your feelings! Easy English Conversations 💬 Episode 14", "BBC Learning English"], "40": ["SHXPpsIJTb0", "Asking for and giving directions: Easy English Conversations 💬 Episode 5", "BBC Learning English"], "41": ["v9aRRuovJFQ", "The Vocabulary Show: Clothes shopping 🩳👚👒👕👖👗 Learn 26 English words and phrases in 10 minutes! 🏪", "BBC Learning English"], "42": ["sp3xU5WvRjA", "English Greetings and Introductions - Spoken English", "Oxford Online English"], "43": ["ug-xjtExqKA", "How to talk about prices in English - Basic Vocabulary", "English with Ronnie · EnglishLessons4U with engVid"], "44": ["I_tRSrPru94", "How to introduce yourself: Easy English Conversations 💬 Episode 1", "BBC Learning English"], "45": ["9OzIMC6XCiE", "How to describe people in English! Easy English Conversations Episode 17", "BBC Learning English"], "46": ["bq6GBbh3uhU", "How to talk about your daily routine: Easy English Conversations 💬 Episode 4", "BBC Learning English"], "47": ["gCs4knrlnD4", "Talk about your habits with Easy English Conversations 💬 Episode 12", "BBC Learning English"], "48": ["RQAWAS-c7xw", "Talking about Likes and Dislikes in English - A Real English Conversation with Bob and Jen", "Learn English with Bob the Canadian"], "49": ["LmDOQbwwlhw", "How to Express Your Opinion in English", "Learn English with Bob the Canadian"], "50": ["kTf0V4HyFtM", "Talk about what you did last weekend: Easy English Conversations 💬 Episode 13", "BBC Learning English"], "52": ["NzYxS_Xy0oM", "How to offer help - 06 - English at Work is here to help", "BBC Learning English"], "53": ["0M5QZmxzL7c", "How to Ask For Permission in English: CAN, COULD, MAY, DO YOU MIND?", "English with Alex · engVid"], "70": ["v9EU41cuhHY", "How to describe your family: Easy English Conversations 💬 Episode 15", "BBC Learning English"], "71": ["4C4wlOAscvY", "Talking about food 🍔🥒🍫 Real Easy English", "BBC Learning English"], "72": ["2mnL9jPVzsk", "Talking about clothes shopping: Easy English Conversations Episode 19", "BBC Learning English"], "73": ["FKwmUNffu7M", "Why are prices going up? 6 Minute English", "BBC Learning English"], "74": ["ecF1y2bI2T4", "Learn How To Talk About Your Daily Routine in English by Watching Me Act Out Mine", "Learn English with Bob the Canadian"], "75": ["osDr7To4Ml4", "How to talk about personality in English! Easy English Conversations 💬 Episode 16", "BBC Learning English"], "76": ["Jq9juAScEdg", "Describing People's Appearance in English - Visual Vocabulary Lesson", "Oxford Online English"], "77": ["1vUTq-Pd4Vs", "Talking about ability: Easy English Conversations 💬 Episode 9", "BBC Learning English"], "78": ["l6XCOoO0Mpk", "ALL Prefixes and Suffixes! - English Lesson", "Learn English with Papa Teach Me"], "79": ["qHWtJtRSYjc", "Talking about jobs 📈  👩‍🔬 💷 Real Easy English", "BBC Learning English"], "80": ["0bHRuF98CDc", "Transport: 10 Easy English Words 🚓🚲🚌✈️🛴", "BBC Learning English"], "81": ["--j2vUyXYEU", "🌎Top MOST Important Travel Phrases in English✈", "Speak English With Vanessa"], "82": ["96SnY-0Ofw0", "A1 English Listening Practice - Technology", "Listening Time"], "84": ["MYX7RVOf3Yc", "Let's Learn English at a Hotel! | An English Travel Lesson with Subtitles", "Learn English with Bob the Canadian"], "85": ["pEO9-iPZQWA", "Climate and extreme weather ⏲️ 6 Minute English", "BBC Learning English"], "86": ["I5l7e6oW-GM", "Phrases for expressing an opinion", "British Council | LearnEnglish Teens"], "87": ["CVCGEJvTays", "Improve Your English Conversations: How to talk about opinions", "English with Emma · engVid"], "88": ["_u5TuMpSQog", "20 Useful Phrases to Talk about Daily Routines: Essential Vocabulary", "English Speaking Success"], "91": ["5ni9VsxnVbE", "Pre-intermediate English #2: How to Talk About Experiences | Easy English at Home", "Easy English at Home"], "92": ["qdxgZPyzM6I", "Vox Pop 15: talking about experiences", "Cambridge English Spain"], "93": ["udWXxCOGgs8", "How to Talk About Emotions in English - Spoken English Lesson", "Oxford Online English"], "94": ["5VGtCbFclgk", "How to compare things in English - Easy English Conversations 💬 Episode 18", "BBC Learning English"], "95": ["JT0FKgE-qPI", "How to INVITE in English: Daily life English lesson", "Speak English With Vanessa"], "97": ["ceOhxZjDt-g", "Learn how to describe things: Easy English Conversations 💬 Episode 10", "BBC Learning English"], "98": ["GlNbzAGZC2M", "Shopping at the Grocery Store - English Conversation", "Easy English"], "99": ["FMGxeChtYLc", "English Modal Verbs - May, Might, Could, Can - Talking About Possibilities", "Oxford Online English"], "100": ["yAsKE9FcJa4", "WISH & HOPE: What's the difference?", "English with Ronnie · EnglishLessons4U with engVid"], "101": ["sFt4kkiJN6Q", "How To Talk About Obligations In English", "Learn English with Bob the Canadian"], "102": ["4MhzYRcj6Nw", "Easy English Conversation: How to Ask for and Give Instructions", "Adam’s English Lessons · engVid"], "103": ["WrCXAnwllHM", "Polite English: 10 Ways to Make Offers (formal → neutral → casual)", "English with Alex · engVid"], "104": ["UsvNXyblKz8", "CONVERSATIONS with Retired People: Life Advice | Easy English 226", "Easy English"], "105": ["7wT7BzAoyj0", "Making Suggestions in English - Spoken English Lesson", "Oxford Online English"], "106": ["T-IV_B3JGgk", "How to apologise in English", "British Council | English"], "107": ["543IqLUq1W4", "5 Ways to Say, \"Thank You!\" and \"Congratulations!\" in English", "Learn English with Bob the Canadian"], "108": ["t76LcMezNN4", "Five ways to talk about the future in English - a Mini English Lesson", "British Council | English"], "124": ["rdldHdDMXDA", "How to describe APPEARANCE in English - Essential Advanced Adjective Vocabulary Lesson", "English with Lucy"], "125": ["RaB5Bydz8rE", "How to Talk About Illness and Medicine in English", "Oxford Online English"], "126": ["S0cCk0-wisU", "Music vocabulary in English - going to a concert", "British Council | English"], "127": ["m27Cck_LGHc", "House vocabulary, Parts of the House, Rooms in the House, House Objects and Furniture", "Easy English"], "129": ["KHimUkNBDiQ", "What are your favourite famous sites? 🎡 | Improve your listening with Real Easy English", "BBC Learning English"], "130": ["audbOVSuCds", "A2 English Listening Practice - Clothes and Fashion", "Listening Time"], "131": ["ioldoJQYKyQ", "How to Say BIG NUMBERS in English", "Speak English With Vanessa"], "132": ["QnxESeRB2j4", "An English Lesson About Travel and Tourism 🧳🚌✈️", "Learn English with Bob the Canadian"], "133": ["GBiRbb9w3SE", "Learn English Job Vocabulary and Job Phrases", "Learn English with Bob the Canadian"], "134": ["hoyhPZDp3dE", "How to Talk About Your Free Time and Hobbies in English - Spoken English Lesson", "Oxford Online English"], "136": ["s_nwSnW4q6I", "Real English Conversation: Big Life Changes", "Speak English With Vanessa"], "137": ["VulvsnX3u0Y", "Learn English Political Vocabulary with TV Series", "Learn English With TV Series"], "138": ["Mmuiq4E7od4", "Animals: 10 Easy English Words 🐱🐶🐍🦁🐄", "BBC Learning English"], "139": ["_mw9-uk_QFk", "Basic English vocabulary for restaurants", "ENGLISH with James · engVid"], "140": ["p4mBf_RgvVQ", "Do Not Ask These Questions in an English Conversation", "Learn English with Bob the Canadian"], "141": ["C8USApQKRg4", "New Experiences and Life Events - English Conversation", "Easy English"], "142": ["DPYJQSA-x50", "Asking for and Giving Directions", "Easy English"], "143": ["dgqFsUAuP24", "Describing People's Appearance and Personality Conversation", "Easy English"], "144": ["JgB6-RWnV9M", "Talking about travel: 🚴🚗🚆 Real Easy English", "BBC Learning English"], "145": ["uUMPULuwdLI", "How to Order Food at a Restaurant in English", "Learn English with Bob the Canadian"], "146": ["wUF33157hYI", "How to talk about likes and dislikes: Easy English Conversations 💬 Episode 7", "BBC Learning English"], "147": ["XlBfQXcGg9w", "'prefer', 'would prefer', or 'would rather'? Ask BBC Learning English", "BBC Learning English"], "148": ["FCIIIDYkqTo", "How to use modals of deduction - a Mini English Lesson", "British Council | English"], "149": ["sv9DItmJvlI", "How do climate scientists make predictions? ⏲️ 6 Minute English", "BBC Learning English"], "150": ["dH7LF_bbHu0", "How to make suggestions in English", "British Council | English"], "151": ["QWBwCoecvkM", "Make polite requests - 05 - English at Work would like you to watch", "BBC Learning English"], "152": ["km3xMfQSmAU", "Must, Have to, and Should for Obligation and Advice in English", "Learn English with EnglishClass101.com"], "153": ["rZkpJBZt_0U", "Conversation Lesson | How To Be Polite & Show Respect in English", "mmmEnglish"], "171": ["Jq9juAScEdg", "Describing People's Appearance in English - Visual Vocabulary Lesson", "Oxford Online English"], "172": ["APUx2YN7sH4", "How to describe personality and character in English (with pronunciation)", "English with Lucy"], "173": ["ybJ-_bVpMsU", "Make vs. Do | Learn English Vocabulary", "Learn English with EnglishClass101.com"], "174": ["q4JyFF46528", "Do you like cleaning? 🚽🧹🧽 | Improve your listening skills with Real Easy English", "BBC Learning English"], "175": ["N2StxicQois", "Talking about holidays 🌊☀️⛱️ Real Easy English", "BBC Learning English"], "176": ["mOo909c50Ko", "English Listening Practice - Being Sick", "Learn English with Bob the Canadian"], "177": ["iUDfTbBg1bc", "Learn English While Baking Cookies with Me in the Kitchen!", "Learn English with Bob the Canadian"], "178": ["NUJsFcYpo5U", "English Vocabulary In Use | Furniture and Rooms Around The House", "English Like A Native"], "179": ["BSABmr8hX7s", "Talking about films 🎬🍿  Real Easy English", "BBC Learning English"], "180": ["AVuC13JIumQ", "Crime and Law English Vocabulary! - IELTS Essential Vocabulary!", "Learn English with Papa Teach Me"], "181": ["dGnju-_KyYE", "Political Vocabulary in English: 21 Common Terms", "Adam’s English Lessons · engVid"], "182": ["SuDCMjuhDxc", "Talking About Your Family in English. Podcast #8 | A1-A2", "Easy English Podcast Show"], "183": ["0UIcwcYrPek", "Talking about pets 🐶🐱🐹 Real Easy English", "BBC Learning English"], "185": ["MYX7RVOf3Yc", "Let's Learn English at a Hotel! | An English Travel Lesson with Subtitles", "Learn English with Bob the Canadian"], "186": ["l6XCOoO0Mpk", "ALL Prefixes and Suffixes! - English Lesson", "Learn English with Papa Teach Me"], "187": ["IEF6rtgcZxQ", "Describing People, Places and Things", "Easy English"], "188": ["jLFz5rzzEJE", "Speaking skills practice: Different opinions (Intermediate B1)", "British Council | LearnEnglish Teens"], "189": ["nec6ozGJli0", "Can you use REPORTED SPEECH? Grammar Lesson + Examples", "mmmEnglish"], "191": ["skqj4jOSQU4", "How to use English Modal Verbs  |  Possibility & Probability", "mmmEnglish"], "192": ["ceOhxZjDt-g", "Learn how to describe things: Easy English Conversations 💬 Episode 10", "BBC Learning English"], "193": ["WFDvDcozhYM", "Politely refusing something – 16 – English at Work helps you make polite refusals", "BBC Learning English"], "211": ["CqRloBkyqQs", "Collocations in English - Learn English Vocabulary", "Oxford Online English"], "212": ["O6h8qq5rBi0", "Talking about the office 💻👨‍💼🖇 Real Easy English", "BBC Learning English"], "214": ["Fxi4uYmCrPo", "Talking about public transport 🚌🚈🚋 Real Easy English", "BBC Learning English"], "215": ["ILYlJIvFZQ4", "Words and Expressions for Dating and Relationships", "Easy English"], "216": ["WuIdsR6lUSk", "Everyday Grammar TV: Connotations", "VOA Learning English"], "217": ["N1VYBbsKgmE", "SAME WORDS: DIFFERENT MEANINGS! (pronunciation AND definition changes!)", "English with Lucy"], "218": ["HclqADvf35Y", "Learn 15 Common English Idioms (With Examples)", "linguamarina"], "219": ["QHOmj2TO4mM", "Talk About Sports in English - Improve Spoken English Conversation", "Oxford Online English"], "221": ["qoNRZKgLDhg", "Climate change: Are there too many people? - 6 Minute English", "BBC Learning English"], "222": ["7Lh1tMsRw3U", "Learn How to Speak English at the Bank | English Video with Subtitles", "Learn English with Bob the Canadian"], "223": ["_bC0J-zFTLE", "BRITISH SLANG | 5 Colloquial British English Words", "English with Lucy"], "225": ["Z2OGUQ5A44Q", "How to Summarise a Text in English - Improve English Comprehension", "Oxford Online English"], "226": ["PxR14JwJZt0", "Easy English Conversation: REGRETS", "English with Emma · engVid"], "227": ["IekcKrnm6ME", "CONCLUSIONS – How to finish speaking in English", "English with Emma · engVid"], "228": ["TkYO-uprqQQ", "How to talk about cause and effect - 6 Minute English", "BBC Learning English"], "229": ["4oCoWq-iuRU", "Elementary English #21: Expressing Purpose | Easy English at Home", "Easy English at Home"], "230": ["P7dcdEoNA_E", "Grammar: Giving emphasis in English - BBC English Masterclass", "BBC Learning English"], "231": ["V8lKfgtCzME", "How to Compare and Contrast: Phrases, Connectors and Idioms", "English Speaking Success"], "246": ["us2JILvMvi8", "Culture & Vocabulary: Major religions of the world", "English with Ronnie · EnglishLessons4U with engVid"], "247": ["pXeYSMVfWpw", "Why Do We Feel Nostalgic? | Learn English Through Real Conversations", "Easy English With Ken And Everlyn"], "248": ["h36Mt9r_gk8", "English Conversation Practice |  Coincidences | Learn English Through Real Conversations", "Easy English Conversations"], "249": ["SXR3KPLyyt0", "A1 English Listening Practice - Education", "Listening Time"], "251": ["s8YxQkCCwAc", "Talking about creativity 🧑‍🎨🪡📷 Real Easy English", "BBC Learning English"], "252": ["G015RgppUPI", "English Listening Practice - Old Age", "Listening Time"], "253": ["xrzl4Bmf1fs", "Gender-inclusive Language - How to avoid sexism", "English with Emma · engVid"], "254": ["h2jBsmGKwLs", "Vocabulary: Talking about POLITICS in English", "Adam’s English Lessons · engVid"], "264": ["fQcga26aoL8", "How to agree or disagree in English", "British Council | English"], "265": ["hgdM-8XQjVs", "The Teachers' Room: Top tips for giving instructions", "BBC Learning English"], "266": ["I5l7e6oW-GM", "Phrases for expressing an opinion", "British Council | LearnEnglish Teens"], "267": ["tAR4AJgJIrs", "Checking information - 09 - English at Work checks that things are correct", "BBC Learning English"], "268": ["sgMJ16WUEPg", "English Writing - Paraphrasing", "Learn English with Rebecca · engVid"], "269": ["TR0JZiapxXM", "50+ Advanced Phrases For English Conversations", "mmmEnglish"], "270": ["kXxY15IVpJ8", "How to persuade someone in English", "British Council | English"], "271": ["LK4Ia7CDYZE", "Mini English Lessons: Speculation", "British Council France"], "272": ["eDNpSddtn6E", "How to... show annoyance", "BBC Learning English"], "273": ["EOsxooAh9_4", "5 Ways to Compare and Contrast in English", "Oxford Online English"], "274": ["7bdRcIpN1jU", "How to Describe a Person in English - Spoken English Lesson", "Oxford Online English"], "275": ["q0iN67jtJxI", "How to Describe Things You've Done in English", "Learn English with Bob the Canadian"], "276": ["yVWrxm6IU3w", "How to Respond to Different Situations in English", "Learn English with Bob the Canadian"] };
const RONNIE = { "1": ["MF4mDLHagSU", "“Do” Questions & Negatives – DO, DOES, DON’T, DOESN’T"], "2": ["eR16ju68eRk", "“She” or “her”? “He” or “his”? Subjective & Objective Pronouns"], "3": ["3zJQoQLCeNo", "A, AN, THE - Articles in English"], "6": ["iYlYJDPh_g8", "English for Beginners & Children: AND, OR, BUT"], "7": ["M7jf50kkP6Y", "I HATE English! Surprising plurals and singulars 😕"], "9": ["c1AFRu2HszU", "Is that word an ADJECTIVE? Use my grammar trick!"], "12": ["HHt52kFa2ow", "English Grammar: AUXILIARY VERBS – be, do, have"], "13": ["SmSKJ-t8lJ8", "Future Tense - WILL & GOING TO"], "17": ["1UFbbr84-VE", "Simple Past Negative (English Tenses for Beginners)"], "18": ["23sIBk6gL4w", "Learn CONTINUOUS TENSES in English the EASY way!"], "20": ["yFWVbV3fd3I", "English Grammar - Superlative Adjectives - biggest, best, most beautiful, etc."], "22": ["Xw1EdCN8Fy4", "English Pronunciation: How to pronounce numbers"], "23": ["u2dX7hhM-Zs", "Vocabulary & Tips to SAVE MONEY"], "28": ["-LmpC72cRcs", "Learn Real English - SHOPPING"], "29": ["xPEChp4DCO8", "English Vocabulary - How to use PLAY, GO, DO for sports"], "30": ["iqeghm8Uut8", "Job Interview Skills: Questions & Answers"], "31": ["ChwuD-_jOSM", "Learn English vocabulary in the BATHROOM :)"], "32": ["Y2VAOHGUh00", "Basic English Vocabulary: COLORS"], "34": ["mxP9FTry6AE", "English Vocabulary: The face & hair"], "35": ["hnz0_t2yz7I", "Learn English - 5 common mistakes when talking about food"], "37": ["qhQ1_Y5l2Qk", "Transportation Vocabulary & Phrasal Verbs - GET ON, GET OUT OF, RIDE, GO"], "38": ["cbH9avLPanU", "Speaking English - Going to the dentist"], "40": ["CH0CakSr_b4", "English Vocabulary - LOST"], "41": ["Nwwhr7RWFs0", "English Vocabulary - Getting Dressed"], "42": ["3PE3e0rXSPw", "How to introduce yourself in a group"], "43": ["ug-xjtExqKA", "How to talk about prices in English - Basic Vocabulary"], "46": ["MDpvtnwqYJM", "PHRASAL VERBS to talk about what you do every morning"], "49": ["SRvL9J4k490", "Conversation Skills - Giving your opinion"], "51": ["zQY7CIO2FSQ", "7 Casual English Expressions for Saying “No” Naturally & Politely"], "55": ["gFc6STGTU4w", "Basic English Grammar - TOO MUCH, TOO MANY, A LOT OF"], "59": ["JSXHFAAM_xU", "Turn NOUNS & VERBS into ADJECTIVES!"], "60": ["0HPKwhngB-U", "English Grammar - Adjectives & Adverbs"], "62": ["W0e3dbx0r7M", "Tenses in English - Future or Present Continuous?"], "63": ["uMhE2dp1rko", "Learn English Grammar: Superlative Adjectives"], "66": ["viOLkYk1QAc", "English Grammar: MUST & HAVE TO"], "70": ["3r7h-jk4b1A", "Speaking English - Talking about Family"], "71": ["gCYnPkdDIQs", "British & American English: Food Vocabulary"], "72": ["LSQ5xi0Biyk", "“TAKE IT OFF!” Learn English Phrasal Verbs for Clothes & Shopping"], "73": ["ug-xjtExqKA", "How to talk about prices in English - Basic Vocabulary"], "74": ["MDpvtnwqYJM", "PHRASAL VERBS to talk about what you do every morning"], "75": ["_f3EOwIfghs", "Learn 20+ words to talk about personality & character in English"], "78": ["RuXv2vyPPZY", "How to change a verb into a noun!"], "79": ["iqeghm8Uut8", "Job Interview Skills: Questions & Answers"], "80": ["qhQ1_Y5l2Qk", "Transportation Vocabulary & Phrasal Verbs - GET ON, GET OUT OF, RIDE, GO"], "84": ["waN0cJ2S2Xk", "English Vocabulary - Appointments & Reservations"], "86": ["SRvL9J4k490", "Conversation Skills - Giving your opinion"], "88": ["oe_KVPPbfPM", "Speaking English - Bad Habits"], "98": ["9QuHTaTLUqw", "English Vocabulary & Expressions for SHOPPING in North America"], "104": ["S1CNJqOCZwE", "STOP giving advice in English!"], "106": ["1MoBQhu9M88", "SORRY! Why Canadians say “sorry” so much"], "110": ["_8ObuO5neR0", "Present Perfect or Past Perfect?"], "114": ["QTQb42w7oig", "English Grammar - Easy Introduction to Passive"], "120": ["ttUbJjKBncQ", "Conditionals: zero & first conditionals (English Grammar)"], "121": ["tN35Lqcpsuk", "“I used to…” & “I would…”: Talking about the past in English"], "125": ["sM3nxSoO3kU", "English Vocabulary - Bad Eyesight: glasses, contacts, optometrist, eye doctor..."], "127": ["x9TM-WhyT7c", "Vocabulary - Tools & hardware: screw, hammer, wrench, level..."], "130": ["Nwwhr7RWFs0", "English Vocabulary - Getting Dressed"], "131": ["Xw1EdCN8Fy4", "English Pronunciation: How to pronounce numbers"], "133": ["R5CEiuJPI3Q", "Update your resume and get a job!"], "134": ["xPEChp4DCO8", "English Vocabulary - How to use PLAY, GO, DO for sports"], "136": ["u7OcCscC7Mo", "English Vocabulary - Birth & Growing Up"], "138": ["GnYFd9-5EQI", "Animals and the sounds they make!"], "139": ["fWafoyMV9ug", "Speaking English - How to order in a restaurant"], "143": ["uNpTKVsRZmY", "Test Your Personality, Improve Your English!"], "144": ["waN0cJ2S2Xk", "English Vocabulary - Appointments & Reservations"], "145": ["fWafoyMV9ug", "Speaking English - How to order in a restaurant"], "158": ["lcnVMh0tR9w", "Grammar: Learn to use REPORTED SPEECH in English"], "160": ["Z4j5MZ3PblA", "Learn English Adverbs FAST! (-ly, -ward, -wise, and more)"], "165": ["7Mni3yDpIWo", "Past Simple and Past Perfect - Tenses in English"], "166": ["7kwRSIIMRXk", "Basic English Grammar: HAVE, HAS, DON’T HAVE, DOESN’T HAVE"], "170": ["jY46m3rhxwk", "English Grammar - Tag Questions"], "172": ["_f3EOwIfghs", "Learn 20+ words to talk about personality & character in English"], "173": ["9wTgV1g8NJQ", "DO & MAKE - How to talk about housework in English"], "174": ["9wTgV1g8NJQ", "DO & MAKE - How to talk about housework in English"], "176": ["-C3ptVkzf5o", "Are You Feeling Bad? These 10 ENGLISH WORDS Say That Better."], "177": ["OvrQJoIS6Hw", "Learn English: Basic Kitchen Vocabulary"], "178": ["OvrQJoIS6Hw", "Learn English: Basic Kitchen Vocabulary"], "182": ["URoJ6l5MVlY", "Learn English: What we call the people we love ❤❤❤"], "183": ["CgGicK1q1eg", "Real English: Taking care of your pet DOG!"], "186": ["c9ZxKIDiF-E", "Noun → Verb: How to Use -ize, -en, -ify, -ate"], "193": ["zQY7CIO2FSQ", "7 Casual English Expressions for Saying “No” Naturally & Politely"], "196": ["7Mni3yDpIWo", "Past Simple and Past Perfect - Tenses in English"], "197": ["SmSKJ-t8lJ8", "Future Tense - WILL & GOING TO"], "199": ["5LuIRvQiJ_E", "VERBS to PHRASAL VERBS: Their meaning changes!"], "201": ["yAsKE9FcJa4", "WISH & HOPE: What's the difference?"], "211": ["TOXFZigrPzE", "How to use “GET” like a native English speaker"], "212": ["4AO6umBH6gQ", "How to Succeed in Work Meetings (Even if English isn’t your first language!)"], "214": ["WCfV7OkNCDo", "British & American English: Cars & Driving Vocabulary"], "217": ["vR-QqujzKMQ", "Learn 17 homophone pairs in English: be/bee, know/no, hear/here…"], "218": ["5RCk5MFSbS0", "EASY ENGLISH: 7 Common Expressions"], "219": ["xPEChp4DCO8", "English Vocabulary - How to use PLAY, GO, DO for sports"], "222": ["-hZjv-E1y7c", "Learn Real English: How to pay with DEBIT and CREDIT CARDS"], "223": ["k8kd-_4TenY", "How slang is \"made\" in English - bad-ass, wicked, deadly, sick"], "226": ["vYzGnlJ263Q", "English Speaking - Mistakes & Regrets (\"I should have studied\" etc.)"], "237": ["23sIBk6gL4w", "Learn CONTINUOUS TENSES in English the EASY way!"], "238": ["tN35Lqcpsuk", "“I used to…” & “I would…”: Talking about the past in English"], "239": ["_8ObuO5neR0", "Present Perfect or Past Perfect?"], "252": ["0gGAiNukfIQ", "Speaking English - Talking about your age"], "267": ["t1RPmY3Xkdc", "How to understand native speakers' questions in English"], "269": ["gw5bkBk0gz4", "Conversation Skills - How to keep a conversation going"], "272": ["TcrfYuIUhT8", "How to fake a conversation (when people are boring or annoying)"], "276": ["tw2ZlBO5w60", "How to handle uncomfortable situations"] };
const CAT = { g: "gramática", v: "vocabulário", t: "tópico" };
const VIDEO = (id) => "https://www.nacaofluente.com/blog/como-aprender-ingles-no-youtube/?video=" + id;
const PLAYLIST_ID = "PLhNRdHEdUQexUblCTMd1ATwOd5J4SxtNM";
const YT = (id) => `https://www.youtube.com/watch?v=${id}&list=${PLAYLIST_ID}`;
const DAYN = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
const CHECKPOINTS = { 8: "Faça o EF SET de 90 min para ver seu nível de partida.", 16: "EF SET de novo: a meta é B1 firme.", 20: "EF SET: se der B2 com folga, marque o B2 First.", 26: "Último EF SET antes da prova." };
const TIPS = { 5: "Past simple está aqui: é um dos seus pontos fracos, não pule.", 16: "Past simple vs Present perfect: foco total, cai muito na prova.", 17: "Second conditional: é o \"I would…\" que você trocava por \"I will\".", 11: "Past continuous e Present perfect juntos: faça frases sobre o seu último emprego.", 22: "Revise todos os passados: Past simple, continuous e perfect." };
const REVIEW = ["Reler anotações da semana", "Anki com o vocabulário da semana", "Escrever 5 frases com a gramática nova e mandar ao Claude", "Conversa de 10 min com o Claude sobre os temas"];
const PHASES = [[1, 8, "Revisão A1–A2"], [9, 16, "A2–B1"], [17, 20, "B2"], [21, 26, "C1 + prova"]];
const PACE_LABEL = { 3: "3 meses", 6: "6 meses", 12: "12 meses" };
const LEVEL = (w) => w <= 8 ? "Revisão A1–A2" : w <= 16 ? "A2–B1" : w <= 20 ? "B2" : "C1 · reforço para a prova";
const DEFAULT_START = "2026-11-02";
const LSKEY = "rumo-b2-v1";
const LISTEN_RULES = [
    [/travel|tourism|holiday|hotel/i, "gOMypAhVaXE"], [/sport|hobbies|leisure|interests/i, "xL3jQzi7q_M"],
    [/book|reading/i, "DTvgAxi5mVA"], [/season|weather|climate/i, "GH7x5w7mtjE"],
    [/cloth|fashion|appearance|accessor/i, "audbOVSuCds"], [/animal|pets/i, "2Yk1M6URsCU"],
    [/geography/i, "MX5DVYoggxY"], [/feel|emotion|hopes/i, "QQlen7x2aFs"],
    [/\bcars?\b|transport|driv/i, "uvkY-UGeCmk"], [/education|school/i, "r1ZZn-vgwVc"],
    [/learning/i, "Z-GfkjPXCwc"], [/festival|celebration/i, "LJRJ7IoAvls"],
    [/wedding|relationship/i, "AR1fMdWGUPk"], [/health|illness/i, "irGnL5nzR0Y"],
    [/\bjobs?\b|work|career|interview/i, "qu66xCXhxy4"], [/food|meal|cooking|restaurant/i, "Hi8Z1aQT3Lw"],
    [/buildings|shops|places|directions/i, "LZUM9y0qF3I"], [/personality|character/i, "eFkAqeY0zaM"],
    [/experience|life changes|biographical/i, "F1S8TBRNIU0"], [/routine|daily/i, "56wTC4fQj5k"],
    [/complain|faulty/i, "AlJ5w1oP1Gc"], [/apolog|manners|refus|thank/i, "xoqX3VYD8No"],
    [/greeting|introducing|countries|personal information/i, "_Y4NVXuPAfc"]
];
function listenFor(items, seen) {
    const out = [];
    items.forEach(it => {
        const tv = TOPIC_VIDEOS[it[2]];
        if (tv && !seen.has(tv[0])) {
            seen.add(tv[0]);
            out.push({ url: "https://www.youtube.com/watch?v=" + tv[0], title: tv[1], ch: tv[2] });
            return;
        }
        const r = LISTEN_RULES.find(x => x[0].test(it[0])), pl = r && LISTEN.find(x => x[0] === r[1]);
        if (pl && !seen.has(pl[0])) {
            seen.add(pl[0]);
            out.push({ url: YT(pl[0]), title: pl[1], ch: "Listening Time" });
        }
    });
    return out.slice(0, 3);
}
const esc = (s) => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const short = (s) => s.length > 70 ? s.slice(0, 67).trimEnd() + "…" : s;
const $ = (id) => document.getElementById(id);
function blank() { return { start: DEFAULT_START, pace: 6, done: {}, when: {}, sent: {}, note: "", extra: {} }; }
function normalize(d) {
    const b = blank();
    if (!d)
        return b;
    return { start: d.start || b.start, pace: ([3, 6, 12].includes(d.pace) ? d.pace : 6), done: d.done || {}, when: d.when || {}, sent: d.sent || {}, note: d.note || "", extra: d.extra || {} };
}
const sig = (s) => JSON.stringify([s.start, s.pace, s.done, s.when, s.sent, s.extra]);
let state = blank();
try {
    state = normalize(JSON.parse(localStorage.getItem(LSKEY) || "null"));
}
catch (e) { }
const DAYS = [];
const LESSON = new Map();
WEEKS.forEach((_, i) => plan(i + 1).forEach(items => {
    const idx = DAYS.length;
    DAYS.push({ w: i + 1, items });
    items.forEach(it => LESSON.set(it[2], { title: it[0], cat: it[1], idx }));
}));
const TOTAL = DAYS.length;
function plan(w) {
    const items = WEEKS[w - 1], by = { g: [], v: [], t: [] };
    items.forEach(it => by[it[1]].push(it));
    const order = [];
    let i = 0;
    while (order.length < items.length) {
        for (const c of ["g", "v", "t"])
            if (by[c][i])
                order.push(by[c][i]);
        i++;
    }
    return [0, 1, 2, 3, 4].map(d => order.slice(d * 2, d * 2 + 2));
}
function scheduled(n) {
    const r = state.pace === 3 ? [2 * n, 2 * n + 1] : state.pace === 6 ? [n] : n % 2 === 0 ? [n / 2] : [];
    return r.filter(i => i >= 0 && i < TOTAL);
}
function weekdayOf(idx) { return state.pace === 3 ? Math.floor(idx / 2) : state.pace === 6 ? idx : idx * 2; }
const calWeekOf = (idx) => Math.floor(weekdayOf(idx) / 5) + 1;
const numWeeks = () => calWeekOf(TOTAL - 1);
function weekIdx(wk) { return [0, 1, 2, 3, 4].flatMap(d => scheduled((wk - 1) * 5 + d)); }
function weekDone(wk) {
    const vids = weekIdx(wk).flatMap(i => DAYS[i].items);
    return [vids.filter(it => state.done["v" + it[2]]).length, vids.length];
}
function levelOfWeek(wk) { const i = weekIdx(wk)[0]; return LEVEL(i === undefined ? 26 : DAYS[i].w); }
function parseDate(s) { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); }
function iso(dt) { return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(dt.getDate()).padStart(2, "0")}`; }
function dayDate(wk, d) { const x = parseDate(state.start); x.setDate(x.getDate() + (wk - 1) * 7 + d); return x; }
function plannedDate(idx) { const n = weekdayOf(idx); return dayDate(Math.floor(n / 5) + 1, n % 5); }
const fmt = new Intl.DateTimeFormat("pt-PT", { day: "numeric", month: "short" });
function currentWeek() {
    const diff = Math.round((new Date().setHours(0, 0, 0, 0) - parseDate(state.start).getTime()) / 86400000);
    return Math.min(numWeeks(), Math.max(1, Math.floor(diff / 7) + 1));
}
let sel = currentWeek();
let uid = 0;
function stats() {
    let v = 0, prak = 0, pod = 0;
    LESSON.forEach((_, id) => { if (state.done["v" + id])
        v++; });
    for (const k in state.done) {
        if (!state.done[k])
            continue;
        if (k.startsWith("p-"))
            prak++;
        if (k.startsWith("c-"))
            pod++;
    }
    const cw = currentWeek();
    $("stats").innerHTML =
        `<div class="stat"><b>${v}/${LESSON.size}</b><span>vídeos assistidos</span></div>
     <div class="stat"><b>${prak}</b><span>dias de Praktika</span></div>
     <div class="stat"><b>${pod}</b><span>podcasts</span></div>
     <div class="stat"><b>Sem. ${cw}/${numWeeks()}</b><span>${levelOfWeek(cw)}</span></div>`;
}
function checkpointWeeks() {
    const m = {};
    Object.keys(CHECKPOINTS).map(Number).forEach(w => { const wk = calWeekOf(w * 5 - 1); (m[wk] = m[wk] || []).push(w); });
    return m;
}
function track() {
    const cw = currentWeek(), n = numWeeks(), el = $("weeks"), cps = checkpointWeeks();
    el.style.setProperty("--n", String(n));
    el.innerHTML = "";
    for (let wk = 1; wk <= n; wk++) {
        const [d, t] = weekDone(wk), b = document.createElement("button");
        b.className = "wk" + (wk === cw ? " cur" : "") + (wk === sel ? " sel" : "");
        b.innerHTML = `<div class="fill" style="height:${t ? Math.round(d / t * 100) : 0}%"></div><span>${wk}</span>` + (cps[wk] ? `<i class="flag"></i>` : "");
        b.title = `Semana ${wk}: ${d}/${t} vídeos`;
        b.setAttribute("aria-label", b.title);
        b.onclick = () => { sel = wk; render(); };
        el.appendChild(b);
    }
    const ph = $("phases");
    const spans = PHASES.map(([a, z]) => [calWeekOf((a - 1) * 5), calWeekOf(z * 5 - 1)]);
    ph.style.gridTemplateColumns = spans.map(([a, z]) => `${z - a + 1}fr`).join(" ");
    ph.innerHTML = PHASES.map(([, , name], i) => `<div${i === 2 ? ' class="p3"' : ""}>Sem. ${spans[i][0]}–${spans[i][1]} · ${name}</div>`).join("");
}
function task(key, labelHtml, tagCls, tagTxt, extra) {
    const on = !!state.done[key], id = "t" + (uid++);
    return `<li class="task${on ? " on" : ""}"><input type="checkbox" id="${id}" data-k="${key}" ${on ? "checked" : ""}><label for="${id}">${labelHtml}${extra || ""}</label>${tagTxt ? `<span class="tag ${tagCls}">${tagTxt}</span>` : ""}</li>`;
}
const vlink = (id) => ` <a class="vlink" href="${VIDEO(id)}" target="_blank" rel="noopener">assistir ↗</a>` +
    (RONNIE[id] ? ` <a class="vlink" href="https://www.youtube.com/watch?v=${RONNIE[id][0]}" target="_blank" rel="noopener" title="engVid Ronnie: ${esc(RONNIE[id][1])}">Ronnie ↗</a>` : "");
const lessonTask = (it) => task("v" + it[2], it[0], it[1], CAT[it[1]], vlink(it[2]));
function nextAdvance(dateIso) {
    const diff = Math.round((parseDate(dateIso).getTime() - parseDate(state.start).getTime()) / 86400000);
    let last = -1;
    if (diff >= 0) {
        const n = Math.floor(diff / 7) * 5 + Math.min(diff % 7, 4);
        last = state.pace === 3 ? 2 * n + 1 : state.pace === 6 ? n : Math.floor(n / 2);
    }
    Object.values(state.extra).forEach(l => l.forEach(e => { if (e.kind === "adv")
        last = Math.max(last, e.ref); }));
    return last + 1;
}
function extrasHtml(dateIso, keys) {
    const list = state.extra[dateIso] || [];
    let html = "";
    list.forEach((e, i) => {
        const rm = `<button class="rm" type="button" data-rm="${dateIso}:${i}" aria-label="Remover">×</button>`;
        if (e.kind === "adv") {
            const sd = DAYS[e.ref];
            if (!sd)
                return;
            sd.items.forEach(it => keys.push("v" + it[2]));
            html += `<div class="extra"><div class="exhead"><span class="tag t">adiantado</span>${rm}</div><ul class="tasks">${sd.items.map(lessonTask).join("")}</ul></div>`;
        }
        else {
            const id = String(e.ref), l = LESSON.get(id);
            if (!l)
                return;
            const k = `rv-${dateIso}-${id}`;
            keys.push(k);
            html += `<div class="extra"><div class="exhead"><span class="tag v">revisão</span>${rm}</div><ul class="tasks">${task(k, l.title, l.cat, CAT[l.cat], vlink(id))}</ul></div>`;
        }
    });
    const nxt = nextAdvance(dateIso);
    const doneLessons = [];
    DAYS.forEach(sd => sd.items.forEach(it => { if (state.done["v" + it[2]])
        doneLessons.push(`<option value="${it[2]}">${it[0]}</option>`); }));
    html += `<div class="addrow">` +
        (nxt < TOTAL ? `<button class="btn sm" type="button" data-add="adv" data-date="${dateIso}">+ Adiantar próxima aula</button>` : "") +
        (doneLessons.length ? `<select class="sm" data-add="rev" data-date="${dateIso}" aria-label="Revisar um tema já assistido"><option value="">+ Revisar tema já visto…</option>${doneLessons.join("")}</select>` : "") +
        `</div>`;
    return html;
}
function week() {
    const wk = sel, today = new Date(), idxs = weekIdx(wk), items = idxs.flatMap(i => DAYS[i].items), cps = checkpointWeeks()[wk] || [];
    uid = 0;
    const [done, total] = weekDone(wk);
    $("wkEyebrow").textContent = `Semana ${wk} de ${numWeeks()} · ${levelOfWeek(wk)}`;
    const grams = [...new Set(items.filter(i => i[1] === "g").map(i => i[0]))];
    $("wkTitle").textContent = grams.slice(0, 4).join(" · ") + (grams.length > 4 ? " …" : "") || "Semana de revisão";
    $("wkDates").textContent = `${fmt.format(dayDate(wk, 0))} a ${fmt.format(dayDate(wk, 6))} · ${done}/${total} vídeos`;
    const tip = [...new Set(idxs.map(i => DAYS[i].w))].map(w => TIPS[w]).filter(Boolean)[0];
    $("focus").innerHTML = tip ? `<b>Foco:</b> ${tip}` : `<b>Foco:</b> assista, repita em voz alta e anote 5 frases úteis por dia.`;
    let html = "";
    const seenListen = new Set();
    for (let d = 0; d < 7; d++) {
        const dt = dayDate(wk, d), di = iso(dt), isToday = iso(today) === di, keys = [];
        let body = "";
        if (d < 5) {
            const sd = scheduled((wk - 1) * 5 + d), lessons = sd.flatMap(i => DAYS[i].items);
            lessons.forEach(it => { keys.push("v" + it[2]); body += lessonTask(it); });
            if (lessons.length)
                body += `<hr class="sep">`;
            const kp = `p-${di}`, kc = `c-${di}`;
            keys.push(kp);
            body += task(kp, "Praktika (20–30 min)", "h", "app") + task(kc, "Podcast (opcional)", "h", "ouvir");
            const ls = listenFor(lessons, seenListen);
            if (ls.length)
                body += `<li class="listen"><span class="note">Listening do tema:</span>` + ls.map(v => `<div class="lrow"><a href="${v.url}" target="_blank" rel="noopener" title="${esc(v.title)}">${esc(short(v.title))} ↗</a> <span class="ch">${esc(v.ch)}</span> <button class="copy" type="button" data-copy="${v.url}">copiar link</button></div>`).join("") + `</li>`;
            body = `<ul class="tasks">${body}</ul>` + (lessons.length ? "" : `<p class="note">Dia sem aula nova neste ritmo. Use Praktika, revisão ou adiante uma aula.</p>`);
        }
        else if (d === 5) {
            const chips = items.map(it => `<span class="tag ${it[1]}">${it[0]}</span>`).join("");
            let list = "";
            REVIEW.forEach((t, i) => { const k = `r-${di}-${i}`; keys.push(k); list += task(k, t, "", ""); });
            body = `<div class="review chips">${chips}</div><ul class="tasks">${list}</ul>`;
        }
        else {
            let list = task(`c-${di}`, "Podcast ou série em inglês com legenda em inglês", "h", "livre");
            cps.forEach(w => { const k = `e-${w}`; keys.push(k); list += task(k, "EF SET de 90 min", "v", "teste"); });
            body = `<ul class="tasks">${list}</ul>` + (cps.length ? cps.map(w => `<div class="checkpoint"><b>Checkpoint:</b> ${CHECKPOINTS[w]} <a href="https://www.efset.org/" target="_blank" rel="noopener">efset.org ↗</a></div>`).join("") : `<p class="note">Dia de descanso. Se quiser, adiante aulas ou revise um tema.</p>`);
        }
        body += extrasHtml(di, keys);
        const complete = keys.length > 0 && keys.every(k => state.done[k]);
        const title = d === 5 ? "Sábado · revisão" : d === 6 ? "Domingo" : DAYN[d];
        html += `<article class="day${isToday ? " today" : ""}${complete ? " complete" : ""}"><div class="dhead"><span class="dname">${title}${isToday ? '<span class="todaytag">HOJE</span>' : ""}</span><span class="ddate">${fmt.format(dt)}</span></div>${body}</article>`;
    }
    $("days").innerHTML = html;
}
function describe(k) {
    const fallback = (m) => state.when[k] || (m ? m[1] : iso(new Date()));
    if (/^v\d+$/.test(k)) {
        const l = LESSON.get(k.slice(1));
        if (!l)
            return null;
        return { cat: l.cat, text: l.title, date: state.when[k] || iso(plannedDate(l.idx)) };
    }
    let m = k.match(/^p-(\d{4}-\d\d-\d\d)$/);
    if (m)
        return { cat: "x", text: "Praktika", date: fallback(m) };
    m = k.match(/^c-(\d{4}-\d\d-\d\d)$/);
    if (m)
        return { cat: "x", text: "podcast", date: fallback(m) };
    m = k.match(/^r-(\d{4}-\d\d-\d\d)-(\d)$/);
    if (m)
        return { cat: "x", text: REVIEW[+m[2]] || "revisão", date: fallback(m) };
    m = k.match(/^rv-(\d{4}-\d\d-\d\d)-(\d+)$/);
    if (m) {
        const l = LESSON.get(m[2]);
        return { cat: "x", text: "revisão de " + (l ? l.title : "um tema"), date: fallback(m) };
    }
    if (/^e-\d+$/.test(k))
        return { cat: "x", text: "EF SET", date: fallback(null) };
    return null;
}
let smode = "pending";
let summaryText = "";
function summaryKeys() {
    const lo = iso(dayDate(sel, 0)), hi = iso(dayDate(sel, 6));
    return Object.keys(state.done).filter(k => {
        if (!state.done[k])
            return false;
        const d = describe(k);
        if (!d)
            return false;
        return smode === "week" ? d.date >= lo && d.date <= hi : !state.sent[k];
    });
}
function summary() {
    const keys = summaryKeys(), groups = {};
    keys.forEach(k => { const x = describe(k); (groups[x.date] = groups[x.date] || []).push(x); });
    const dates = Object.keys(groups).sort();
    const has = dates.length > 0, pre = $("spreview");
    $("sempty").hidden = has;
    pre.hidden = $("sactions").hidden = !has;
    $("ssent").hidden = smode === "week";
    if (!has) {
        summaryText = "";
        return;
    }
    const CATN = { g: "gramática", v: "vocabulário", t: "tópico de conversa" };
    const lines = dates.map(ds => {
        const dt = parseDate(ds), xs = groups[ds];
        const parts = ["g", "v", "t"].map(c => { const t = xs.filter(x => x.cat === c).map(x => x.text); return t.length ? `${CATN[c]}: ${t.join(", ")}` : ""; }).filter(Boolean);
        xs.filter(x => x.cat === "x").forEach(x => parts.push(x.text));
        return `- ${DAYN[(dt.getDay() + 6) % 7]} (${fmt.format(dt)}): ${parts.join("; ")}`;
    });
    const maxW = Math.max(0, ...keys.filter(k => /^v\d+$/.test(k)).map(k => DAYS[LESSON.get(k.slice(1)).idx].w));
    summaryText = `Olá! Estou estudando para o B2 (nível atual do plano: ${maxW ? LEVEL(maxW) : levelOfWeek(sel)}). Este é o resumo do que estudei:\n\n${lines.join("\n")}\n` +
        (state.note.trim() ? `\nMinhas anotações: ${state.note.trim()}\n` : "") +
        `\nQuero praticar com você: faça uma conversa curta em inglês sobre esses temas (uma pergunta por vez), corrija meus erros no final e me peça 5 frases com a gramática nova.`;
    pre.textContent = summaryText;
}
function render() {
    if (sel > numWeeks())
        sel = numWeeks();
    stats();
    track();
    week();
    summary();
    $("start").value = state.start;
    $("pace").value = String(state.pace);
    $("snote").value = state.note;
}
let docRef = null, saveTimer;
const syncEl = $("sync");
function save() {
    try {
        localStorage.setItem(LSKEY, JSON.stringify(state));
    }
    catch (e) { }
    if (!docRef)
        return;
    clearTimeout(saveTimer);
    saveTimer = window.setTimeout(async () => {
        try {
            await docRef.set(state);
            syncEl.textContent = "Progresso salvo na sua conta";
        }
        catch (e) {
            syncEl.textContent = "Salvo só neste navegador";
        }
    }, 600);
}
const daysEl = $("days");
daysEl.addEventListener("change", e => {
    const t = e.target;
    if (t instanceof HTMLSelectElement) {
        if (t.dataset.add === "rev" && t.value) {
            (state.extra[t.dataset.date] = state.extra[t.dataset.date] || []).push({ kind: "rev", ref: t.value });
            save();
            render();
        }
        return;
    }
    const k = t.dataset.k;
    if (!k)
        return;
    if (t.checked) {
        state.done[k] = true;
        state.when[k] = iso(new Date());
    }
    else {
        delete state.done[k];
        delete state.when[k];
    }
    save();
    render();
});
daysEl.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b)
        return;
    if (b.dataset.add === "adv") {
        const di = b.dataset.date, nxt = nextAdvance(di);
        if (nxt < TOTAL) {
            (state.extra[di] = state.extra[di] || []).push({ kind: "adv", ref: nxt });
            save();
            render();
        }
    }
    else if (b.dataset.rm) {
        const [di, i] = b.dataset.rm.split(":"), list = state.extra[di] || [], e0 = list[+i];
        if (!e0)
            return;
        if (e0.kind === "rev") {
            const k = `rv-${di}-${e0.ref}`;
            delete state.done[k];
            delete state.when[k];
        }
        list.splice(+i, 1);
        if (!list.length)
            delete state.extra[di];
        save();
        render();
    }
});
$("start").addEventListener("change", e => { const v = e.target.value; if (v) {
    state.start = v;
    sel = currentWeek();
    save();
    render();
} });
$("pace").addEventListener("change", e => { state.pace = Number(e.target.value); sel = currentWeek(); save(); render(); });
$("prev").onclick = () => { if (sel > 1) {
    sel--;
    render();
} };
$("next").onclick = () => { if (sel < numWeeks()) {
    sel++;
    render();
} };
$("todayBtn").onclick = () => { sel = currentWeek(); render(); };
document.querySelectorAll('input[name="smode"]').forEach(r => r.addEventListener("change", () => { smode = r.value; summary(); }));
$("snote").addEventListener("input", e => { state.note = e.target.value; save(); summary(); });
$("scopy").onclick = async () => {
    const st = $("sstatus");
    try {
        await navigator.clipboard.writeText(summaryText);
        st.textContent = "Copiado! Cole no Claude.";
    }
    catch (e) {
        const r = document.createRange();
        r.selectNodeContents($("spreview"));
        const s = getSelection();
        if (s) {
            s.removeAllRanges();
            s.addRange(r);
        }
        st.textContent = "Selecionado: use Ctrl+C.";
    }
};
$("ssent").onclick = () => {
    summaryKeys().forEach(k => { state.sent[k] = true; });
    state.note = "";
    $("sstatus").textContent = "";
    save();
    render();
};
$("lcount").textContent = `Todos os vídeos (${LISTEN.length})`;
$("vlist").innerHTML = LISTEN.map(v => `<li><a href="${YT(v[0])}" target="_blank" rel="noopener">${v[1]} ↗</a> <button class="copy" type="button" data-copy="${YT(v[0])}">copiar link</button></li>`).join("");
document.addEventListener("click", async (e) => {
    const b = e.target.closest("[data-copy]");
    if (!b)
        return;
    const old = b.textContent;
    try {
        await navigator.clipboard.writeText(b.dataset.copy);
        b.textContent = "copiado!";
    }
    catch (err) {
        window.prompt("Copie o link:", b.dataset.copy);
    }
    setTimeout(() => { b.textContent = old; }, 1500);
});
render();
(async () => {
    syncEl.textContent = "Salvo neste navegador";
    try {
        const cl = window.claude;
        if (!cl || !cl.use)
            return;
        const [db, user] = await Promise.all([cl.use("db"), cl.use("user")]);
        if (!db || !user)
            return;
        const id = await user.id();
        if (!id)
            return;
        docRef = db.collection("data/users/" + id).doc("progresso");
        const snap = await docRef.get();
        if (snap.exists) {
            const r = normalize(snap.data());
            state = { start: r.start, pace: r.pace, done: Object.assign({}, state.done, r.done), when: Object.assign({}, state.when, r.when), sent: Object.assign({}, state.sent, r.sent), note: r.note || state.note, extra: Object.assign({}, state.extra, r.extra) };
        }
        syncEl.textContent = "Progresso salvo na sua conta";
        save();
        render();
        docRef.onSnapshot((s) => {
            if (!s.exists)
                return;
            const r = normalize(s.data());
            if (sig(r) !== sig(state)) {
                state = r;
                try {
                    localStorage.setItem(LSKEY, JSON.stringify(state));
                }
                catch (e) { }
                render();
            }
        });
    }
    catch (e) {
        syncEl.textContent = "Salvo só neste navegador";
    }
})();
