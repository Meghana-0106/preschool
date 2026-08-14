import playgroupImg from "@/assets/program-playgroup.jpg";
import nurseryImg from "@/assets/program-nursery.jpg";
import lkgImg from "@/assets/program-lkg.jpg";
import ukgImg from "@/assets/program-ukg.jpg";
import heroImg from "@/assets/hero-classroom.jpg";
import galleryStory from "@/assets/gallery-story.jpg";
import galleryArt from "@/assets/gallery-art.jpg";
import galleryGroup from "@/assets/gallery-group.jpg";
import galleryClassroom from "@/assets/gallery-classroom.jpg";
import galleryOutdoor from "@/assets/gallery-outdoor.jpg";
import galleryStem from "@/assets/gallery-stem.jpg";

export interface DailyRoutineItem {
  time: string;
  activity: string;
}

export interface LearningAreaItem {
  title: string;
  desc: string;
}

export interface ProgramFAQItem {
  q: string;
  a: string;
}

export interface ProgramData {
  id: string;
  title: string;
  age: string;
  tagline: string;
  overview: string;
  focus: string;
  timing: string;
  learningStyle: string;
  heroImage: string;
  classroomImage: string;
  activityImage1: string;
  activityImage2: string;
  experiences: string[];
  learningAreas: LearningAreaItem[];
  developmentGoals: string[];
  dailyRoutine: DailyRoutineItem[];
  faqs: ProgramFAQItem[];
  gallery: { src: string; alt: string }[];
  // Expanded fields for upgraded layout:
  learningObjectives: string[];
  learningApproach: string;
  skills: string[];
  teacherInteraction: string;
  parentInvolvement: string;
  safetyCare: string;
  outcomes: string[];
}

export const programsData: Record<string, ProgramData> = {
  "play-group": {
    id: "play-group",
    title: "Play Group",
    age: "2–3 Years",
    tagline: "Where little learners begin with confidence.",
    overview: "Our Play Group program provides a warm and reassuring introduction to preschool. Children are encouraged to explore their surroundings, interact with peers and discover new experiences through carefully designed play-based activities.",
    focus: "Socialization & Sensory Play",
    timing: "9:00 AM – 12:00 PM",
    learningStyle: "Play-Based",
    heroImage: playgroupImg,
    classroomImage: galleryClassroom,
    activityImage1: galleryGroup,
    activityImage2: galleryArt,
    experiences: [
      "Sensory exploration",
      "Music and movement",
      "Story time",
      "Simple art activities",
      "Outdoor play",
      "Pretend play",
      "Social interaction",
      "Teacher-guided exploration",
      "Fine motor activities",
      "Free-choice play"
    ],
    learningAreas: [
      { title: "Social & Emotional Development", desc: "Building trust with educators, making first friends, and learning emotional expression." },
      { title: "Sensory Exploration", desc: "Engaging with textures, sounds, and objects to build cognitive connections." },
      { title: "Early Communication", desc: "Developing basic vocabulary, listening to simple stories, and expressing needs." },
      { title: "Gross Motor Development", desc: "Running, climbing, and balance activities in our safe outdoor area." },
      { title: "Fine Motor Development", desc: "Scribbling, stacking blocks, and simple pinching tasks." },
      { title: "Creativity & Imagination", desc: "Imaginative pretend play, music, and colorful hands-on arts." }
    ],
    developmentGoals: [
      "Becoming comfortable away from home",
      "Building trust with teachers",
      "Learning to interact with other children",
      "Expressing basic needs and emotions",
      "Developing coordination",
      "Following simple routines",
      "Growing independence"
    ],
    dailyRoutine: [
      { time: "9:00 AM", activity: "Welcome & Settling In" },
      { time: "9:15 AM", activity: "Free Play" },
      { time: "9:45 AM", activity: "Circle Time" },
      { time: "10:15 AM", activity: "Sensory / Creative Activity" },
      { time: "10:45 AM", activity: "Snack & Social Time" },
      { time: "11:10 AM", activity: "Outdoor Movement" },
      { time: "11:40 AM", activity: "Story & Music" },
      { time: "12:00 PM", activity: "Goodbye Routine" }
    ],
    faqs: [
      { q: "Which age group is this program for?", a: "The Play Group program is designed specifically for toddlers aged 2 to 3 years." },
      { q: "What should my child bring to Play Group?", a: "Please pack a small bag containing a water bottle, a healthy snack, a change of clothes, and diapers/wipes if your child is still toilet training." },
      { q: "How do you support children who are new to preschool?", a: "We have a gentle transition policy. Teachers provide close individual attention, comfort, and sensory distractions to help them settle in quickly." },
      { q: "Do children have outdoor play time?", a: "Yes, every day includes supervised gross motor playtime in our child-friendly outdoor zone." },
      { q: "How do parents receive updates about their child's day?", a: "We provide daily digital updates summarizing snack intake, activities, and photos from the day's highlights." }
    ],
    gallery: [
      { src: playgroupImg, alt: "Toddler group play" },
      { src: galleryClassroom, alt: "Bright play group classroom" },
      { src: galleryGroup, alt: "Kids playing together" },
      { src: galleryArt, alt: "Toddler finger painting session" }
    ],
    learningObjectives: [
      "Build positive relationships with peers and adult educators.",
      "Engage actively in sensory-rich environment exploration.",
      "Develop basic verbal and non-verbal expression capabilities.",
      "Form healthy fine and gross physical motor habits."
    ],
    learningApproach: "We believe children learn best when they are leading their own play. Through structured sensory tables, block-building centers, and musical circles, our educators model vocabulary and emotional control in a warm, responsive environment.",
    skills: ["First social friendship skills", "Sensory color/texture matching", "Basic instructions following", "Simple motor balance"],
    teacherInteraction: "Educators are physically close, often sitting on the floor to engage with children at their level. They provide comforting support, guide toddler conflicts gently, and model positive behaviors.",
    parentInvolvement: "We support parent partnerships through digital daily updates, weekend suggestions, and parent observation mornings once a term.",
    safetyCare: "We maintain childproof outlets, soft-cornered play tables, sanitized non-toxic toys, and strict sign-in guidelines to secure our environment.",
    outcomes: [
      "Smooth separation from parents",
      "Confidence to choose activities",
      "Ability to sit and participate in short group circles",
      "Basic hygiene habits (washing hands, packing bags)"
    ]
  },
  "nursery": {
    id: "nursery",
    title: "Nursery",
    age: "3–4 Years",
    tagline: "Growing curiosity, language and confidence every day.",
    overview: "Our Nursery program helps children become confident young learners through purposeful play, storytelling, creative activities, early language experiences and meaningful social interaction.",
    focus: "Early Language & Socialization",
    timing: "8:30 AM – 12:30 PM",
    learningStyle: "Inquiry-Based Play",
    heroImage: nurseryImg,
    classroomImage: galleryClassroom,
    activityImage1: galleryStory,
    activityImage2: galleryArt,
    experiences: [
      "Storytelling",
      "Rhymes and songs",
      "Phonics introduction",
      "Art and craft",
      "Puzzles",
      "Building activities",
      "Number games",
      "Nature exploration",
      "Role play",
      "Group activities",
      "Fine motor practice",
      "Outdoor play"
    ],
    learningAreas: [
      { title: "Language & Communication", desc: "Developing sentence structures, early phonics sounds, and storytelling skills." },
      { title: "Early Numeracy", desc: "Counting objects, identifying shapes, and recognizing basic patterns." },
      { title: "Creative Expression", desc: "Expressing ideas through painting, clay work, and pretend play." },
      { title: "Physical Development", desc: "Fine-tuning pencil grip, cutting with safety scissors, and outdoor games." },
      { title: "Social & Emotional Growth", desc: "Learning cooperation, taking turns, and understanding others' feelings." },
      { title: "Environmental Awareness", desc: "Exploring nature, plants, and understanding the world around them." }
    ],
    developmentGoals: [
      "Expressing ideas clearly",
      "Expanding vocabulary",
      "Recognizing basic patterns",
      "Beginning number awareness",
      "Developing hand-eye coordination",
      "Working with peers",
      "Following classroom routines",
      "Becoming more independent"
    ],
    dailyRoutine: [
      { time: "8:30 AM", activity: "Welcome & Free Play" },
      { time: "9:00 AM", activity: "Circle Time" },
      { time: "9:30 AM", activity: "Language & Story" },
      { time: "10:00 AM", activity: "Snack" },
      { time: "10:20 AM", activity: "Learning Through Play" },
      { time: "11:00 AM", activity: "Outdoor Activity" },
      { time: "11:30 AM", activity: "Creative Exploration" },
      { time: "12:00 PM", activity: "Music / Rhymes" },
      { time: "12:30 PM", activity: "Closing Routine" }
    ],
    faqs: [
      { q: "Is potty training required for Nursery?", a: "While we prefer children to be potty trained or actively training, our staff is fully equipped to support children and work in partnership with parents during this phase." },
      { q: "How do children learn language skills in Nursery?", a: "Language is integrated through daily read-aloud sessions, phonics songs, vocabulary-building games, and group conversational circles." },
      { q: "What is the teacher-to-child ratio in the Nursery class?", a: "We maintain a low ratio to ensure every child gets individualized attention and support." },
      { q: "Can we visit the preschool before enrolling?", a: "Yes, we encourage parent visits! You can book a personalized tour of our classrooms using the Book a Visit button." }
    ],
    gallery: [
      { src: nurseryImg, alt: "Nursery classroom activities" },
      { src: galleryClassroom, alt: "Classroom learning centers" },
      { src: galleryStory, alt: "Storytelling circle" },
      { src: galleryArt, alt: "Nursery art project" }
    ],
    learningObjectives: [
      "Develop phonemic awareness through rhymes and sound associations.",
      "Understand quantities up to 10 and identify simple geometries.",
      "Build coordination for basic tool handling (scissors, large crayons).",
      "Express feelings verbally and negotiate simple play steps."
    ],
    learningApproach: "Our learning approach centers on inquiry. We structure daily questions and reading themes (like 'Under the Sea' or 'Community Helpers') that drive cooperative table work, counting exercises, and roleplaying.",
    skills: ["Phonics sound blending", "Cooperative puzzle solving", "Scissor cutting control", "Social sharing and empathy"],
    teacherInteraction: "Teachers facilitate learning by asking open-ended questions. They listen actively to children, encourage self-expression, and guide them through building projects.",
    parentInvolvement: "We support parent alignment through bi-monthly updates, parent volunteering schedules, and classroom celebrations.",
    safetyCare: "Features child-safe play zones, secure outdoor fences, constant adult oversight, and daily sanitation logs.",
    outcomes: [
      "Ability to speak in complete sentences",
      "Introduction of early math shape recognition",
      "Strong peer empathy and group sharing habits",
      "Independence in self-care (toilet transitions, hand washing)"
    ]
  },
  "lkg": {
    id: "lkg",
    title: "LKG",
    age: "4–5 Years",
    tagline: "Curiosity becomes learning.",
    overview: "Our LKG program introduces children to foundational literacy, numeracy and problem-solving through hands-on activities, stories, games, projects and guided discovery.",
    focus: "Foundational Literacy & STEM",
    timing: "8:30 AM – 1:30 PM",
    learningStyle: "Project & Play-Based",
    heroImage: lkgImg,
    classroomImage: galleryClassroom,
    activityImage1: galleryStem,
    activityImage2: galleryOutdoor,
    experiences: [
      "Alphabet exploration",
      "Phonics activities",
      "Number recognition",
      "Counting games",
      "Pattern activities",
      "Story-based learning",
      "Art and craft",
      "STEM-inspired exploration",
      "Puzzles",
      "Group projects",
      "Music and movement",
      "Outdoor learning"
    ],
    learningAreas: [
      { title: "Early Literacy", desc: "Recognizing letters, writing simple letters, and identifying letter-sound connections." },
      { title: "Early Mathematics", desc: "Number values, simple additions with objects, and basic measurements." },
      { title: "Science & Discovery", desc: "Basic physics, biological elements (plants/animals), and hands-on experiments." },
      { title: "Creative Arts", desc: "Complex crafts, drawing, collaborative group art projects." },
      { title: "Social Development", desc: "Conflict resolution, empathy, and collaborative project-based learning." },
      { title: "Physical Development", desc: "Structured sports, yoga, and advanced fine motor coordination." }
    ],
    developmentGoals: [
      "Recognizing letters and sounds",
      "Developing early reading readiness",
      "Understanding numbers and quantities",
      "Recognizing patterns",
      "Asking questions",
      "Solving age-appropriate problems",
      "Communicating ideas",
      "Building confidence in group activities"
    ],
    dailyRoutine: [
      { time: "8:30 AM", activity: "Arrival & Free Exploration" },
      { time: "9:00 AM", activity: "Morning Circle" },
      { time: "9:20 AM", activity: "Literacy / Phonics" },
      { time: "10:00 AM", activity: "Numeracy" },
      { time: "10:30 AM", activity: "Snack Break" },
      { time: "10:50 AM", activity: "Discovery Activity" },
      { time: "11:30 AM", activity: "Creative / Project Work" },
      { time: "12:00 PM", activity: "Outdoor Play" },
      { time: "12:45 PM", activity: "Story & Reflection" },
      { time: "1:30 PM", activity: "Closing Routine" }
    ],
    faqs: [
      { q: "How is reading taught in the LKG class?", a: "We utilize synthetic phonics, guiding children from individual letter sounds to blending simple three-letter words (CVC words)." },
      { q: "What kind of STEM activities do LKG kids participate in?", a: "They engage in activities like building structural bridges, playing with magnetic tiles, exploring floating/sinking concepts, and basic gardening." },
      { q: "How do you prepare kids for primary school?", a: "LKG builds the academic base of letters and numbers while cultivating self-regulation, focusing skills, and the independence to manage belongings." }
    ],
    gallery: [
      { src: lkgImg, alt: "LKG math activities" },
      { src: galleryClassroom, alt: "Classroom setup for LKG" },
      { src: galleryStem, alt: "STEM learning experiments" },
      { src: galleryOutdoor, alt: "Outdoor sandbox play" }
    ],
    learningObjectives: [
      "Read three-letter phonics words and trace letter structures.",
      "Understand basic addition/subtraction concepts using visual objects.",
      "Execute inquiry steps: hypothesize, test, and note results.",
      "Follow dual-step directions and show focus during lessons."
    ],
    learningApproach: "We merge play with structured academic tables. Children rotate through stations designed for phonics drills, hands-on math, science logs, and team projects, building stamina and academic focus.",
    skills: ["Synthesizing phonics blends", "Early quantitative arithmetic", "Scientific recording", "Two-step routine execution"],
    teacherInteraction: "Educators balance direct, small-group instruction with self-guided coaching, keeping children focused and challenged while encouraging discovery.",
    parentInvolvement: "We support parent alignment with quarterly developmental report cards, class newsletter showcases, and parent workshops.",
    safetyCare: "Features secure child benches, non-toxic art supplies, clean restrooms, and fully first-aid trained personnel.",
    outcomes: [
      "Ability to blend and read three-letter words",
      "Confidence in solving basic measurements and counts",
      "Problem-solving mindset during cooperative learning",
      "Self-regulation inside group settings"
    ]
  },
  "ukg": {
    id: "ukg",
    title: "UKG",
    age: "5–6 Years",
    tagline: "Building confident, curious school-ready learners.",
    overview: "Our UKG program prepares children for the transition into formal schooling by strengthening literacy, numeracy, reasoning, communication, independence and collaborative learning skills.",
    focus: "Advanced Read-Write & STEM",
    timing: "8:30 AM – 2:30 PM",
    learningStyle: "Structured Inquiry & Project",
    heroImage: ukgImg,
    classroomImage: galleryClassroom,
    activityImage1: galleryStem,
    activityImage2: galleryStory,
    experiences: [
      "Reading readiness",
      "Writing practice",
      "Phonics",
      "Number operations",
      "Problem solving",
      "STEM activities",
      "Creative projects",
      "Public speaking",
      "Storytelling",
      "Collaborating activities",
      "Practical life skills",
      "Outdoor learning"
    ],
    learningAreas: [
      { title: "Advanced Literacy", desc: "Fluent reading of short sentences, comprehension, and basic sentence writing." },
      { title: "Mathematics", desc: "Basic addition/subtraction, reading clock times, and spatial reasoning." },
      { title: "Science & STEM", desc: "Interactive experimentation, coding basics through boards, and ecological cycles." },
      { title: "Communication", desc: "Show-and-tell presentations, expressing opinions, and storytelling recitations." },
      { title: "Problem Solving", desc: "Puzzles, logical patterns, and working through conflicts constructively." },
      { title: "Social & Emotional Learning", desc: "Deep self-reliance, leadership duties, and class collaboration tasks." },
      { title: "Creative Expression", desc: "Dramatics, musical instrument play, and advanced craft projects." }
    ],
    developmentGoals: [
      "Developing reading confidence",
      "Improving handwriting readiness",
      "Understanding basic mathematical concepts",
      "Applying logic and reasoning",
      "Communicating ideas confidently",
      "Working independently",
      "Collaborating with classmates",
      "Developing school-readiness skills"
    ],
    dailyRoutine: [
      { time: "8:30 AM", activity: "Welcome & Morning Activity" },
      { time: "9:00 AM", activity: "Literacy" },
      { time: "9:45 AM", activity: "Mathematics" },
      { time: "10:30 AM", activity: "Snack" },
      { time: "10:50 AM", activity: "STEM / Discovery" },
      { time: "11:30 AM", activity: "Writing & Creative Work" },
      { time: "12:15 PM", activity: "Group Activity" },
      { time: "1:00 PM", activity: "Outdoor Play" },
      { time: "1:30 PM", activity: "Reflection / Story" },
      { time: "2:00 PM", activity: "Guided Learning" },
      { time: "2:30 PM", activity: "Closing Routine" },
      { time: "3:30 PM", activity: "End of Day" }
    ],
    faqs: [
      { q: "Is UKG fully academic, or is there still play?", a: "We maintain a balance. While it is more structured to prepare for Grade 1, we still emphasize learning through hands-on activities, outdoor exploration, and creative expression." },
      { q: "What reading level is expected by the end of UKG?", a: "Most children graduate reading simple phonics-based storybooks, identifying common sight words, and writing small sentences independently." },
      { q: "How do you manage primary school applications?", a: "Our team guides parents on key application timelines, school readiness evaluations, and recommendations for primary school admissions." }
    ],
    gallery: [
      { src: ukgImg, alt: "UKG writing practice" },
      { src: galleryClassroom, alt: "UKG table groups" },
      { src: galleryStem, alt: "Robotics and block building" },
      { src: galleryStory, alt: "Reading independently" }
    ],
    learningObjectives: [
      "Read short storybooks with phonetic fluency and write full lines.",
      "Solve basic additions, subtractions, and recognize logic sequences.",
      "Express structured ideas during class show-and-tell circles.",
      "Show absolute independence in managing personal desks and tasks."
    ],
    learningApproach: "Our learning approach blends advanced school prep with active discovery. We simulate primary school learning settings while retaining interactive team workshops and outdoor STEM tasks to ensure a smooth transition.",
    skills: ["Short story book reading", "Advanced logical reasoning", "Public speech sharing", "Classroom task management"],
    teacherInteraction: "Teachers support advanced students through customized assignments, encouraging leadership, critical discussions, and self-evaluation.",
    parentInvolvement: "We support parent transitions with primary school counseling sessions, regular feedback checkpoints, and term-end evaluations.",
    safetyCare: "We run regular drills, monitor all classrooms, use completely eco-friendly building resources, and strictly record medical reports.",
    outcomes: [
      "Fluent reading and writing capabilities",
      "Confidence in dealing with basic mathematical equations",
      "Highly developed speech and peer teamwork skills",
      "Total school-readiness for Grade 1"
    ]
  }
};
