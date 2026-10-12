export const blueprintData = {
  brand: {
    name: "Sports Blueprint",
    tagline: "Build Champions. Shape Futures. Define Legacy.",
    subheadline: "Sports Blueprint is the premier athletic development platform where elite training meets real results. We don't just train athletes — we build complete champions.",
    phone: "(404) 555-0182",
    email: "info@sportsblueprint.com",
    address: "1250 Champion Drive, Suite 100, Atlanta, GA 30301",
    hours: "Mon–Fri: 6AM–9PM | Sat: 7AM–5PM | Sun: Closed",
    chatHours: "Available Mon–Fri, 9AM–6PM",
    rating: "4.9/5",
    reviewsCount: "200+ Reviews",
    established: "2014"
  },

  stats: [
    { label: "Athletes Trained", value: "500+", subtext: "From youth to pros", icon: "Users" },
    { label: "Championship Titles", value: "120+", subtext: "Regional & State", icon: "Trophy" },
    { label: "Certified Coaches", value: "25+", subtext: "CSCS & USATF certified", icon: "Award" },
    { label: "Years of Excellence", value: "10+", subtext: "Since 2014", icon: "Sparkles" }
  ],

  whatWeDo: [
    {
      id: "training",
      icon: "Dumbbell",
      title: "Elite Training Programs",
      desc: "Personalized, science-backed programs designed for every level, from youth beginners to professional competitors.",
      badge: "Science-Backed",
      highlights: ["Periodized Cycles", "Biomechanics Lab", "Progressive Overload"]
    },
    {
      id: "mental",
      icon: "Brain",
      title: "Mental Performance Coaching",
      desc: "We train the mind as hard as the body. Our mental conditioning programs build focus, resilience, and winning mindsets.",
      badge: "Mindset First",
      highlights: ["Pressure Management", "Visualization", "Leadership IQ"]
    },
    {
      id: "analytics",
      icon: "Activity",
      title: "Performance Analytics",
      desc: "Data-driven insights that track progress, identify weaknesses, and accelerate athletic development like never before.",
      badge: "Real-time Metrics",
      highlights: ["VO2 Max & Speed Gating", "Force Plate Testing", "Digital Dashboard"]
    }
  ],

  featuredPrograms: [
    {
      id: "youth",
      name: "Youth Foundation Program",
      age: "Ages 8–12",
      badge: "Foundation",
      color: "#22D3EE",
      duration: "8 Weeks",
      sessions: "2x per week",
      price: "$149",
      period: "month",
      desc: "Fundamental movement, athletic coordination, sports introduction, fun and confidence building.",
      image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=800&q=80",
      includes: ["Skills assessment", "Bi-weekly progress report", "Parent updates"]
    },
    {
      id: "junior-elite",
      name: "Junior Elite Program",
      age: "Ages 13–17",
      badge: "Most Popular",
      color: "#D4FF00",
      duration: "12 Weeks",
      sessions: "3x per week",
      price: "$199",
      period: "month",
      desc: "Speed, explosive strength, sport-specific skill development, and mental championship conditioning.",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
      includes: ["Comprehensive fitness testing", "Video movement analysis", "Sports nutrition blueprint"]
    },
    {
      id: "adult-performance",
      name: "Adult Performance Program",
      age: "Ages 18+",
      badge: "Longevity",
      color: "#F59E0B",
      duration: "Ongoing",
      sessions: "3–5x per week",
      price: "$179",
      period: "month",
      desc: "Strength & conditioning, body composition optimization, and sustained athletic longevity.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      includes: ["Custom training plan", "Monthly body composition checks", "Training app mobile access"]
    },
    {
      id: "elite-athlete",
      name: "Elite Athlete Program",
      age: "High School & College Pro",
      badge: "By Application",
      color: "#EC4899",
      duration: "6-Month Commitment",
      sessions: "5x per week + 1:1",
      price: "Custom",
      period: "tailored",
      desc: "Competition prep, peak performance tuning, recruiting exposure, and collegiate/pro transition.",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
      includes: ["Full telemetry dashboard", "Game film breakdown", "NCAA/NAIA recruiting advisory"]
    },
    {
      id: "camps",
      name: "Sport-Specific Camps",
      age: "All Ages (Seasonal)",
      badge: "Intensive",
      color: "#10B981",
      duration: "1–2 Week Intensives",
      sessions: "Full-day immersive",
      price: "$299–$499",
      period: "per camp",
      desc: "Football, Basketball, Soccer, Track & Field, and Baseball/Softball position-mastery clinics.",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80",
      includes: ["Position breakdown drills", "Game IQ seminars", "Combine simulation test"]
    },
    {
      id: "mental-bootcamp",
      name: "Mental Performance Bootcamp",
      age: "Ages 12+",
      badge: "Mind Gym",
      color: "#8B5CF6",
      duration: "4 Weeks",
      sessions: "Hybrid (Online + Gym)",
      price: "$99",
      period: "full course",
      desc: "Visualization protocols, high-pressure management, poise under duress, and locker room leadership.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
      includes: ["Workbook & daily journals", "Live visualization labs", "1:1 sports psychology check-in"]
    }
  ],

  programsComparison: [
    { feature: "Fitness & Movement Assessment", youth: true, junior: true, adult: true, elite: true },
    { feature: "Custom Periodized Training Plan", youth: false, junior: true, adult: true, elite: true },
    { feature: "Biomechanics & Video Analysis", youth: false, junior: true, adult: false, elite: true },
    { feature: "Sports Nutrition Guide & Protocols", youth: false, junior: true, adult: true, elite: true },
    { feature: "1:1 Dedicated Performance Coach", youth: false, youth: false, adult: false, elite: true },
    { feature: "College Recruiting Advisory & Film", youth: false, junior: false, adult: false, elite: true }
  ],

  featuredAthletes: [
    {
      id: "marcus",
      name: "Marcus Thompson",
      sport: "Football (Wide Receiver)",
      age: 19,
      achievement: "Signed D1 scholarship to State University",
      quote: "Sports Blueprint didn't just make me a better athlete — they made me a better person. My speed, strength, and confidence are at an all-time high.",
      image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=800&q=80",
      beforeStats: { speed: "4.7s", vertical: "28\"", bench: "215 lbs" },
      afterStats: { speed: "4.4s", vertical: "36\"", bench: "295 lbs" },
      improvement: "+8\" Vertical, -0.3s 40-yd Dash"
    },
    {
      id: "jasmine",
      name: "Jasmine Carter",
      sport: "Track & Field (100m/200m)",
      age: 16,
      achievement: "State Champion, 100m Dash (11.9s)",
      quote: "Coach Blake changed the way I run. My biomechanics and drive phase feel effortless now. I'm a completely different competitor.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
      beforeStats: { speed: "12.8s", reaction: "0.22s", power: "185W" },
      afterStats: { speed: "11.9s", reaction: "0.14s", power: "240W" },
      improvement: "-0.9s 100m Sprint Time"
    },
    {
      id: "devon",
      name: "Devon Williams",
      sport: "Basketball (Point Guard)",
      age: 17,
      achievement: "Selected for Regional All-Star Team",
      quote: "The mental coaching and agility training gave me the poise to execute in the 4th quarter under immense pressure.",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80",
      beforeStats: { vertical: "29\"", agility: "11.4s", ppg: "12.4" },
      afterStats: { vertical: "35\"", agility: "9.8s", ppg: "21.6" },
      improvement: "+6\" Vertical, +9.2 PPG"
    }
  ],

  alumniMetrics: {
    collegePlaced: "45+",
    proAthletes: "12",
    nationalTeams: "8",
    scholarshipsValue: "$4.8M+"
  },

  latestNews: [
    {
      tag: "Signing Day",
      title: "Marcus Thompson signs D1 National Letter of Intent",
      date: "Fall 2025",
      badge: "Scholarship"
    },
    {
      tag: "Record Broken",
      title: "Jasmine Carter claims State 100m Gold with 11.9s PR",
      date: "Spring 2025",
      badge: "1st Place"
    },
    {
      tag: "Combine Success",
      title: "3 Blueprint Athletes rank in Top 5 at State Football Combine",
      date: "Summer 2025",
      badge: "Combine Elite"
    }
  ],

  about: {
    story: `Sports Blueprint was founded in 2014 by former collegiate athletes who saw a gap in the market — talented young athletes with no access to structured, professional development. What started as weekend training sessions in a local park has grown into a full-scale athletic performance organization serving 500+ athletes annually.

We believe that greatness isn't reserved for the gifted few. It's built — rep by rep, session by session, day by day. That's the Sports Blueprint philosophy.`,
    mission: "To empower every athlete — regardless of background or experience level — with the tools, coaching, and community they need to reach their highest potential.",
    vision: "To be the most trusted name in athletic development, producing champions on the field and leaders in life.",
    values: [
      { name: "Excellence", icon: "Flame", desc: "We pursue the highest standard in everything we do, leaving no rep unfinished." },
      { name: "Integrity", icon: "Handshake", desc: "We coach with honesty, transparency, deep ethics, and mutual respect." },
      { name: "Resilience", icon: "Shield", desc: "We teach athletes to rise with composure and grit after every setback." },
      { name: "Growth", icon: "TrendingUp", desc: "Continuous improvement is our daily commitment on and off the turf." },
      { name: "Results", icon: "Trophy", desc: "Everything we do is engineered to produce measurable, indisputable outcomes." },
      { name: "Community", icon: "Heart", desc: "We build more than athletes — we build an enduring, supportive family." }
    ]
  },

  coaches: [
    {
      id: "david-reeves",
      name: "Coach David Reeves",
      title: "Founder & Head of Athletic Performance",
      credentials: "CSCS | 12 Years Experience | Former D1 Athlete",
      specialties: ["Strength & Conditioning", "Athlete Development", "Locker Room Leadership"],
      bio: "Former Division I linebacker with 12 years of coaching experience. Certified Strength & Conditioning Specialist (CSCS). David has trained over 300 collegiate and professional athletes, dedicated to developing the complete human athlete.",
      quote: "My job isn't to make you comfortable. My job is to make you capable.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      social: { instagram: "@coachreeves", linkedin: "david-reeves-cscs" }
    },
    {
      id: "angela-morris",
      name: "Coach Angela Morris",
      title: "Director of Youth Development",
      credentials: "M.S. Sports Psychology | 8 Years Youth Experience",
      specialties: ["Youth Athletic IQ", "Confidence Architecture", "Fundamental Motor Skills"],
      bio: "8-year youth sports veteran with a background in sports psychology. Specializes in building confidence, foundational speed patterns, and mental toughness in young athletes aged 8–16.",
      quote: "Confidence isn't something you're born with; it's something you earn through deliberate preparation.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      social: { instagram: "@coachangela", linkedin: "angela-morris-sports" }
    },
    {
      id: "terrence-blake",
      name: "Coach Terrence Blake",
      title: "Head Speed & Agility Coach",
      credentials: "USATF Level 2 | Former Pro Sprinter | Sub-4.3 Specialist",
      specialties: ["Sprint Biomechanics", "Lateral Deceleration", "Combine Sprint Prep"],
      bio: "Former professional sprinter and USATF certified coach. Holds the program record for the most athletes achieving sub-4.4 40-yard dash times and sub-10.8 100m sprints.",
      quote: "Speed is not a birthright — it is a precise mathematical formula of force and angle.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      social: { instagram: "@coachblakespeed", twitter: "@blake_track" }
    }
  ],

  certifications: [
    { title: "NSCA Certified", desc: "Strength & Conditioning Specialists (CSCS)" },
    { title: "USATF Level 1 & 2", desc: "Track & Field Olympic-standard coaching" },
    { title: "Precision Nutrition", desc: "Certified Elite Sports Nutritionists" },
    { title: "CPR / AED Certified", desc: "Safety, first aid, & concussion protocol certified" },
    { title: "NYSA Affiliated", desc: "National Youth Sports Association Member" },
    { title: "100% Background Checked", desc: "Fully insured and vetted coaching staff" }
  ],

  services: [
    {
      number: "01",
      title: "Strength & Conditioning",
      desc: "Personalized S&C programs built around your sport, body type, and performance goals. Periodized training cycles ensure peak performance when it matters most.",
      icon: "Dumbbell",
      metric: "+47 lbs avg squat gain"
    },
    {
      number: "02",
      title: "Speed & Agility Training",
      desc: "Our signature speed development system has produced measurable improvements in 40-yard dash, vertical jump, and lateral quickness in 90% of participants within 8 weeks.",
      icon: "Zap",
      metric: "-0.3s avg 40-yd dash"
    },
    {
      number: "03",
      title: "Sports Psychology & Mental Coaching",
      desc: "Work 1:1 with our mental performance coach to develop focus, pre-competition routines, resilience after losses, and leadership skills.",
      icon: "Brain",
      metric: "98% clutch score boost"
    },
    {
      number: "04",
      title: "Sports Nutrition Consulting",
      desc: "Fuel your performance with personalized meal plans, supplement guidance, and hydration strategies developed by certified sports nutritionists.",
      icon: "Apple",
      metric: "Optimal lean muscle mass"
    },
    {
      number: "05",
      title: "Video Analysis & Biomechanics",
      desc: "We film, analyze, and break down your movement patterns to identify inefficiencies and optimize your technique using industry-standard software.",
      icon: "Video",
      metric: "High-speed 240fps breakdown"
    },
    {
      number: "06",
      title: "Performance Testing & Analytics",
      desc: "Comprehensive athletic testing including: VO2 max, 40-yard dash, vertical jump, broad jump, pro agility, grip strength, and body composition.",
      icon: "Activity",
      metric: "7 Core Biometric Benchmarks"
    },
    {
      number: "07",
      title: "College Recruiting Guidance",
      desc: "We help high school athletes build recruiting profiles, create highlight reels, connect with college coaches, and navigate the NCAA/NAIA process.",
      icon: "GraduationCap",
      metric: "45+ Collegiate Placements"
    },
    {
      number: "08",
      title: "Parent Education Workshops",
      desc: "Monthly workshops for sports parents covering: how to support your athlete, avoiding burnout, nutrition at home, and navigating youth sports culture.",
      icon: "Users2",
      metric: "Monthly masterclasses"
    }
  ],

  servicePackages: [
    {
      id: "starter",
      name: "Starter",
      badge: "Foundational",
      price: "$149",
      period: "/month",
      desc: "Ideal for young athletes starting structured performance training.",
      features: [
        "2x Weekly Group Training Sessions",
        "Sports Nutrition Starter Guide",
        "Baseline Performance Testing",
        "Blueprint Community Portal Access",
        "Quarterly Progress Evaluation"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      id: "performance",
      name: "Performance",
      badge: "Most Selected",
      price: "$249",
      period: "/month",
      desc: "Comprehensive athletic enhancement for competitive middle and high school athletes.",
      features: [
        "3x Weekly Group Performance Sessions",
        "Bi-weekly Video Biomechanics Analysis",
        "Monthly 1:1 Mental Conditioning Lab",
        "Personalized Nutrition Meal Blueprint",
        "Training App Digital Telemetry",
        "Combine & Speed Metric Benchmarking"
      ],
      cta: "Join Performance",
      popular: true
    },
    {
      id: "elite-pkg",
      name: "Elite",
      badge: "Championship Tier",
      price: "Custom",
      period: "evaluation required",
      desc: "Bespoke full-service ecosystem for prospective college athletes and pros.",
      features: [
        "Unlimited Facility & Strength Lab Access",
        "Dedicated 1:1 CSCS Performance Coach",
        "Full NCAA/NAIA Recruiting Guidance & Film",
        "High-Speed Biomechanics Breakdown",
        "Weekly Sports Nutrition & Supplement Audit",
        "Priority Recovery Lounge & Ice Bath Suite"
      ],
      cta: "Apply For Elite",
      popular: false
    }
  ],

  trainingPillars: [
    {
      num: "01",
      title: "Science-Based Programming",
      desc: "Every program is built using evidence-based principles: progressive overload, velocity-based training, recovery optimization, and long-term athletic development (LTAD)."
    },
    {
      num: "02",
      title: "Technology-Enhanced Training",
      desc: "Athletes use our training app to access workouts, track progress, log nutrition, and communicate with coaches — all in one place with real-time biometric telemetry."
    },
    {
      num: "03",
      title: "Position & Sport Specificity",
      desc: "We don't believe in generic training. Every program is tailored to the exact kinematic demands of your specific sport and field position."
    },
    {
      num: "04",
      title: "Recovery & Regeneration",
      desc: "Training is only half the equation. We educate athletes on sleep cycles, myofascial release, nutrition timing, and active recovery to maximize adaptation."
    }
  ],

  weeklySchedule: [
    { day: "Monday", focus: "Lower Body Strength + Speed Acceleration Work", intensity: "High", badge: "Speed & Power" },
    { day: "Tuesday", focus: "Upper Body Hypertrophy & Strength + Multi-directional Agility", intensity: "Medium-High", badge: "Agility & Core" },
    { day: "Wednesday", focus: "Active Recovery / Mobility Lab & Joint Regeneration", intensity: "Low", badge: "Recovery" },
    { day: "Thursday", focus: "Explosive Power Development + Sport-Specific Position Drills", intensity: "High", badge: "Power" },
    { day: "Friday", focus: "Cardiovascular Conditioning + Mental Performance Simulation", intensity: "High", badge: "Championship Mind" },
    { day: "Saturday", focus: "Game Simulation / Competition Prep & Combine Speed Trials", intensity: "Peak", badge: "Game Day Ready" },
    { day: "Sunday", focus: "Full Rest / Mental Regeneration & Nutrition Planning", intensity: "Rest", badge: "Recharge" }
  ],

  facilityHighlights: [
    { title: "10,000 Sq Ft Training Facility", desc: "Spacious climate-controlled athletic center engineered for elite movement.", image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80" },
    { title: "Olympic Lifting Platform Complex", desc: "Custom Eleiko and Rogue barbell stations with velocity measurement.", image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80" },
    { title: "60-Yard Indoor Sprint Turf", desc: "High-traction competition turf with laser speed-gate timing sensors.", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80" },
    { title: "Video Biomechanics Studio", desc: "Multi-angle 240fps cameras for instant movement feedback and gait correction.", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80" },
    { title: "Recovery & Cryo Lounge", desc: "Normatec compression boots, ice baths, infrared saunas, and mobility tools.", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80" },
    { title: "Sports Nutrition & Hydration Bar", desc: "Pre-workout electrolytes, post-workout protein shakes, and recovery snacks.", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80" }
  ],

  resultsMetrics: [
    { label: "Average 40-Yard Dash Improvement", value: "-0.3s", detail: "Over 8-week cycle" },
    { label: "Average Vertical Jump Improvement", value: "+4.2\"", detail: "Measured on force plates" },
    { label: "Average Squat Strength Gain", value: "+47 lbs", detail: "In 12 weeks of training" },
    { label: "Athletes Placed in College Programs", value: "45+", detail: "D1, D2, D3 & NAIA" },
    { label: "Athletes Achieving Personal Records", value: "94%", detail: "In verified season meets" },
    { label: "Parent Satisfaction Rate", value: "98%", detail: "From 200+ annual reviews" }
  ],

  seasonHighlights: [
    { medal: "🥇", title: "Regional Speed & Agility Championship", result: "1st Place Overall Team" },
    { medal: "🥇", title: "State Youth Football Combine", result: "Top 5 performers included 3 Blueprint athletes" },
    { medal: "🥇", title: "Track & Field Invitational", result: "4 Gold Medals (100m, 200m, 400m, 4x100m)" },
    { medal: "🥈", title: "National Youth Basketball Showcase", result: "2nd Place National Tournament Finish" }
  ],

  collegesPlaced: [
    "University of Georgia", "Georgia Tech", "Florida State University", "Auburn University",
    "Clemson University", "Vanderbilt", "North Carolina", "Tennessee",
    "Wake Forest", "Kentucky", "Alabama", "Duke"
  ],

  testimonials: {
    athletes: [
      {
        quote: "I came in as a good athlete. I left as a great one. The coaches here genuinely care about your development both on the turf and in your character.",
        author: "Tyler M.",
        role: "Basketball Player, Age 17",
        rating: 5,
        badge: "Varsity Starter"
      },
      {
        quote: "The speed training alone was worth every penny. I dropped 0.4 seconds off my 40-yard dash in 10 weeks and colleges finally started reaching out.",
        author: "Darius K.",
        role: "Football Player, Age 16",
        rating: 5,
        badge: "D1 Recruit"
      },
      {
        quote: "Before Blueprint, I struggled with tournament anxiety. Coach Angela taught me visualization techniques that transformed my game.",
        author: "Mia S.",
        role: "Tennis Competitor, Age 15",
        rating: 5,
        badge: "State Finalist"
      }
    ],
    parents: [
      {
        quote: "As a parent, I was skeptical at first. But watching my daughter's confidence grow both on and off the field has been priceless. Worth every single penny.",
        author: "Sandra L.",
        role: "Parent of Youth Athlete",
        rating: 5,
        badge: "Parent of 8th Grader"
      },
      {
        quote: "Sports Blueprint is the real deal. Professional staff, structured programs, clean facility, and they actually communicate with parents weekly.",
        author: "Robert J.",
        role: "Father of 2 Blueprint Athletes",
        rating: 5,
        badge: "Parent of HS Athletes"
      },
      {
        quote: "The coaches treat these kids like young professionals while keeping it fun and supportive. Our son made varsity as a freshman!",
        author: "Elena G.",
        role: "Mother of Freshman Athlete",
        rating: 5,
        badge: "Varsity Parent"
      }
    ],
    coaches: [
      {
        quote: "I've seen a noticeable difference in the athletes who train at Sports Blueprint. They come back faster, stronger, and significantly more coachable.",
        author: "Coach Williams",
        role: "High School Head Football Coach",
        rating: 5,
        badge: "5A State Champions"
      },
      {
        quote: "Their biomechanics work is unmatched in the Southeast. When an athlete tells me they train at Blueprint, I know their foundation is solid.",
        author: "Coach Henderson",
        role: "Club Soccer Technical Director",
        rating: 5,
        badge: "ECNL Coach"
      }
    ]
  },

  videos: [
    {
      id: "v1",
      title: "Sports Blueprint 2025 — Year in Review",
      category: "Highlights",
      duration: "3:45",
      views: "12.4K",
      thumbnail: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80",
      featured: true,
      desc: "A cinematic look back at state championships, combine record-breaking dashes, and athlete milestones."
    },
    {
      id: "v2",
      title: "Speed Training Breakdown: Drive Phase Mechanics",
      category: "Coach Tips",
      duration: "4:12",
      views: "8.9K",
      thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
      desc: "Coach Terrence Blake dissects foot strike angles and ground reaction force in elite sprinters."
    },
    {
      id: "v3",
      title: "Marcus Thompson's Journey to Division I",
      category: "Athlete Stories",
      duration: "6:30",
      views: "15.2K",
      thumbnail: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=800&q=80",
      desc: "From an overlooked high school sophomore to signing a full scholarship at State University."
    },
    {
      id: "v4",
      title: "Summer Elite Camp 2025 High Intensity Recap",
      category: "Camp Recaps",
      duration: "5:00",
      views: "6.7K",
      thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80",
      desc: "Two weeks of relentless competition, positional drills, and leadership development."
    },
    {
      id: "v5",
      title: "Top 10 Drills for Explosive Vertical Power",
      category: "Training",
      duration: "8:15",
      views: "22.1K",
      thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      desc: "Plyometric progressions and velocity bar techniques to add 4+ inches to your vertical."
    },
    {
      id: "v6",
      title: "Parent Q&A with Founder Coach David Reeves",
      category: "Education",
      duration: "12:00",
      views: "4.3K",
      thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      desc: "Navigating youth sports specialization, avoiding burnout, and maximizing long-term athletic health."
    }
  ],

  photos: [
    { id: "p1", title: "Explosive Sprint Starts", category: "Training", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80", caption: "Track athletes perfecting acceleration angles on the sprint strip." },
    { id: "p2", title: "Olympic Barbell Power", category: "Facility", image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80", caption: "Elite lifting platform complex designed for maximal velocity training." },
    { id: "p3", title: "Game Day Intensity", category: "Competition", image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=800&q=80", caption: "Football wide receiver running precision routes under pressure." },
    { id: "p4", title: "Youth Camp Teamwork", category: "Camp", image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80", caption: "Young competitors building trust and athletic fundamentals together." },
    { id: "p5", title: "Basketball Agility Cut", category: "Training", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80", caption: "Deceleration and change of direction drills on indoor court." },
    { id: "p6", title: "Championship Huddle", category: "Culture", image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80", caption: "Team culture and unity before stepping out to compete." },
    { id: "p7", title: "Biomechanics Screen Lab", category: "Facility", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80", caption: "High-speed motion capture studio breakdown." },
    { id: "p8", title: "Podium Celebration", category: "Competition", image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80", caption: "Celebrating state title victories with family and teammates." }
  ],

  resources: {
    downloads: [
      { id: "d1", title: "The Ultimate Pre-Season Training Guide", pages: "24 Pages", format: "PDF", size: "4.2 MB", desc: "Comprehensive 6-week conditioning roadmap for peak game day fitness." },
      { id: "d2", title: "Sports Nutrition Starter Kit", pages: "18 Pages", format: "PDF", size: "2.8 MB", desc: "Macros, pre/post game meal plans, and hydration benchmarks." },
      { id: "d3", title: "Parent's Guide to Youth Athletic Development", pages: "16 Pages", format: "PDF", size: "3.1 MB", desc: "How to nurture athletic potential without injury or psychological burnout." },
      { id: "d4", title: "Mental Performance Workbook for Athletes", pages: "32 Pages", format: "PDF", size: "5.4 MB", desc: "Interactive exercises for visualization, confidence, and bounce-back resilience." },
      { id: "d5", title: "College Recruiting Checklist & Timeline", pages: "12 Pages", format: "PDF", size: "1.9 MB", desc: "Grade-by-grade roadmap for connecting with NCAA/NAIA collegiate coaches." }
    ],
    articles: [
      { id: "a1", title: "5 Speed Drills Every Athlete Should Be Doing Daily", readTime: "5 min read", category: "Speed Development", snippet: "The foundational biomechanics of ground force reaction and hip flexion for sprint mastery." },
      { id: "a2", title: "How to Fuel Your Body for Peak 4th Quarter Performance", readTime: "7 min read", category: "Sports Nutrition", snippet: "Nutrient timing, glycogen replenishment, and why hydration begins 48 hours before competition." },
      { id: "a3", title: "The Mental Side of Sports: Building an Unshakeable Mindset", readTime: "6 min read", category: "Mental Toughness", snippet: "How elite competitors transform pre-game butterflies into razor-sharp focus." },
      { id: "a4", title: "What College Coaches Are Really Looking For in Recruits", readTime: "8 min read", category: "Recruiting IQ", snippet: "Beyond stats: body language, coachability, academics, and locker room intangibles." },
      { id: "a5", title: "How to Prevent the 5 Most Common Youth Sports Injuries", readTime: "6 min read", category: "Injury Prevention", snippet: "Targeted mobility, hamstring strengthening, and pitch-count monitoring protocols." },
      { id: "a6", title: "Youth Sports Burnout: Signs, Causes & Concrete Solutions", readTime: "9 min read", category: "Parenting & Health", snippet: "Recognizing emotional fatigue early and restructuring seasonal training cycles." }
    ],
    podcasts: [
      { id: "pc1", ep: "Episode 01", title: "Building Champions from the Ground Up", guest: "Coach David Reeves", duration: "42 min" },
      { id: "pc2", ep: "Episode 02", title: "Inside D1 Strength & Conditioning Standards", guest: "Coach Terrence Blake", duration: "38 min" },
      { id: "pc3", ep: "Episode 03", title: "Sports Parenting Done Right: Raising Resilient Kids", guest: "Coach Angela Morris", duration: "45 min" }
    ]
  }
};
