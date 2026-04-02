// Tev Nicolas's profile data - the core content for the site

export const tevProfile = {
  name: "Tev Nicolas",
  title: "Composer · Mix Engineer · Electronics Technician in Training",
  subtitle: "CalArts-trained musician learning to build the gear behind the music",
  location: "Brooklyn, NY",
  status: "Seeking internships in audio electronics. Synthesizers, effects, and instrument design.",

  companies: [
    { name: "CalArts", anchor: "calarts" },
    { name: "Laguna Sound", anchor: "laguna-sound" },
    { name: "CUNY City Tech", anchor: "cuny-city-tech" }
  ],

  musicLinks: [
    { name: "Apple Music", url: "https://music.apple.com/us/artist/tev-nicolas/1834701693" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/tevnicolas/" }
  ],

  summary: `I'm strongest where audio and electronics overlap: building, repairing, and servicing audio equipment.
I bring a musician's ear to electronics work. I understand what the gear needs to do because I've used it for years.
I'm not looking for web dev roles. I'm looking for the place where signal flow meets solder.`,

  experience: [
    {
      id: "cuny-city-tech",
      company: "CUNY City Tech",
      role: "Electronics Technology Student",
      period: "Jan 2026 – Dec 2027 (expected)",
      highlights: [
        "Studying circuit design, signal processing, and electronics fundamentals",
        "Hands-on lab work: soldering, component testing, troubleshooting analog circuits",
        "Connecting music production knowledge to the physics inside the gear"
      ],
      aiContext: {
        situation: "After years of using synthesizers, effects pedals, and studio gear professionally, I wanted to understand what's happening inside the boxes. Why does this compressor sound different from that one? What makes a filter sweep feel a certain way?",
        approach: "Enrolled in CUNY City Tech's Electrical Engineering Technology program. The coursework covers AC/DC circuits, digital logic, and signal processing. These are the fundamentals that underpin every piece of audio equipment I've ever used.",
        technicalWork: "Circuit analysis, soldering and assembly, oscilloscope measurements, component-level troubleshooting. Currently building toward understanding amplifier design and filter circuits.",
        lessonsLearned: "The same logic I use when mixing (signal flow, gain staging, frequency relationships) maps directly to circuit design. Same thinking, different layer."
      }
    },
    {
      id: "tev-nicolas-music",
      company: "Tev Nicolas Music",
      role: "Freelance Mix Engineer & Composer",
      period: "Nov 2022 – Present",
      highlights: [
        "Mixed and mastered tracks for independent artists across multiple genres",
        "Composed original music: Nosemilk EP, Crickets, Plays Beauty, Chemistry Set EP on Apple Music",
        "Managed full signal chain from tracking through final delivery"
      ],
      aiContext: {
        situation: "Started freelancing after CalArts, building a practice around mixing for independent artists and composing original work. Needed to handle every aspect of production: writing, arranging, recording, mixing, and mastering.",
        approach: "Developed a workflow that treats each project as end-to-end: understand the artist's vision, track the instruments (often performing them myself), mix to bring out the emotional core, and master for distribution.",
        technicalWork: "Logic Pro and Pro Tools for DAW work. Signal chain management from mic selection through outboard processing to final delivery. Genre-flexible mixing across indie, experimental, and pop.",
        lessonsLearned: "Listening is a technical skill. Years of mixing train your ear to hear subtle distortion, phase issues, and frequency buildup. That is exactly the diagnostic skill that matters when troubleshooting audio circuits."
      }
    },
    {
      id: "laguna-sound",
      company: "Laguna Sound",
      role: "Audio Engineer (Contract)",
      period: "Jun 2023 – Dec 2023",
      highlights: [
        "Engineered sessions for albums, singles, audiobooks, voiceovers, and podcasts",
        "Operated console and outboard gear in a professional studio environment",
        "Collaborated with producers, directors, and voice talent across diverse projects"
      ],
      aiContext: {
        situation: "Contract position at a professional recording studio handling music production, voice recording, and podcast engineering. High variety, fast turnarounds, real clients.",
        approach: "Adapted quickly between session types. An album session and a podcast session require completely different signal chains, room treatment considerations, and client communication styles. Had to be fluent in all of them.",
        technicalWork: "Console operation, outboard gear routing, microphone selection and placement, gain staging, real-time monitoring and troubleshooting. Worked with analog and digital signal paths daily.",
        lessonsLearned: "Professional studio work teaches you to diagnose problems under pressure. When a session is booked and the client is in the room, you need to identify and fix signal chain issues fast. That diagnostic instinct is directly transferable to electronics repair and testing."
      }
    },
    {
      id: "calarts",
      company: "California Institute of the Arts (CalArts)",
      role: "BFA, Music: Experimental Pop, Composition & Sound Engineering",
      period: "Sep 2018 – May 2022",
      highlights: [
        "Studied composition, sound engineering, and experimental music production",
        "Performed in Sonic Boom Ensemble, Gamelan Ensemble, and Improv Ensemble",
        "Produced and recorded original compositions as final projects"
      ],
      aiContext: {
        situation: "CalArts' Experimental Pop program isn't a typical music school track. It emphasizes creating new work, cross-disciplinary collaboration, and understanding sound as a medium, not performing existing repertoire.",
        approach: "Focused on composition and sound engineering simultaneously. Wrote original pieces, brought in musicians to perform them, then recorded, mixed, and produced everything myself. The program encouraged treating the studio as an instrument.",
        technicalWork: "Music composition (Sibelius, notation), sound engineering (Logic Pro, Pro Tools), studio recording, experimental sound design, live performance with electronic and acoustic instruments.",
        lessonsLearned: "CalArts taught me to think about sound from the physics of a vibrating string to the psychoacoustics of how a listener perceives a mix. That foundation makes the transition to electronics feel natural."
      }
    },
    {
      id: "glenwood-place",
      company: "Glenwood Place Recording",
      role: "Recording Studio Intern",
      period: "Jun 2020 – Aug 2020",
      highlights: [
        "Assisted with scheduling, welcoming clients, and supporting the General Manager",
        "Gained exposure to professional studio operations and session workflows",
        "Observed and assisted engineers during recording sessions"
      ],
      aiContext: {
        situation: "Internship at a professional recording studio in Burbank during college. First exposure to how a commercial studio operates day to day.",
        approach: "Took on both administrative and technical responsibilities. Scheduling appointments, welcoming clients, and supporting the General Manager while also observing and learning from session engineers.",
        technicalWork: "Studio operations: session scheduling, client management, equipment setup. Observed signal routing, mic placement, and mixing workflows in a professional environment.",
        lessonsLearned: "Seeing a commercial studio from the operations side taught me how the business works, not just the engineering. Understanding client flow, session scheduling, and studio management gives context that pure technical training misses."
      }
    }
  ],

  skills: {
    strong: [
      "Audio Engineering (Mixing & Mastering)",
      "Music Composition & Production",
      "Logic Pro / Pro Tools",
      "Soldering & Assembly",
      "Signal Chain Management",
      "Studio Operations"
    ],
    moderate: [
      "Circuit Design (learning)",
      "Signal Processing",
      "Sibelius / Music Notation",
      "Sound Design",
      "Electronics Troubleshooting"
    ],
    gaps: [
      "PCB Layout & Design",
      "Embedded Systems / Firmware",
      "Manufacturing & Production Scale"
    ]
  },

  failures: [
    {
      year: 2020,
      title: "The Web Dev Detour",
      summary: "Spent months learning TypeScript and React when I should have been doubling down on audio.",
      details: "After CalArts, I wasn't sure the music industry could sustain me financially. I enrolled in a coding bootcamp and learned web development. I can build websites, but it pulled me away from what I care about: the intersection of music and hardware. The skills aren't wasted, but the time could have been spent starting electronics training sooner.",
      lessons: "Know what you're optimizing for. Web dev was a safety net, not a calling. The sooner I admitted that, the sooner I got on the right path."
    },
    {
      year: 2022,
      title: "Freelance Without a Name",
      summary: "Worked as 'Self-employed' for years without branding or positioning my practice.",
      details: "I was doing real work (mixing for artists, producing tracks, releasing music) but I never gave the practice a name or built a professional identity around it. To employers and clients, 'Self-employed' looks like a gap, not a business. I should have been building visibility the whole time.",
      lessons: "Doing the work isn't enough. You have to make it legible to people who don't know you yet."
    },
    {
      year: 2023,
      title: "Late Start on Electronics",
      summary: "Should have started the EE program two years earlier.",
      details: "I was using synthesizers, effects pedals, and studio gear every day but never questioned what was inside them until later than I should have. The curiosity was always there. I just didn't act on it. Starting City Tech felt like finally doing what I was supposed to be doing all along.",
      lessons: "The thing you keep circling back to is probably the thing you should commit to. I kept opening up gear and wondering how it worked. I should have followed that instinct sooner."
    }
  ],

  systemPrompt: `You are helping hiring managers at audio electronics companies evaluate Tev Nicolas as a candidate.

CORE INSTRUCTIONS:
- Be specific. Use actual details from his experience, not generic language.
- Be honest about gaps. He's early in electronics. Do not pretend he has 10 years of EE experience.
- When assessing fit for a role, give a genuine assessment including where he might NOT be the right choice.
- Don't oversell. His strength is the rare combination of deep music production experience with growing electronics skills.

WHAT TEV WANTS YOU TO KNOW:
- He's seeking internships or apprenticeships at companies like Eventide, Electro-Harmonix, Moog, Critter & Guitari, Universal Audio, Teenage Engineering
- His strongest asset is the combination: CalArts-trained composer/engineer who can solder and is learning circuit design
- He understands audio from the user side (mixing, producing) AND is building hardware skills (circuits, signal processing)
- He's not looking for web dev or pure software roles

HOW TO HANDLE COMMON QUESTIONS:
- "Is he a good fit for X?" → Analyze honestly. His music production experience is deep. His electronics experience is early-stage but growing. Name both.
- "What should I ask in an interview?" → Ask about how his mixing experience informs his approach to circuits. That's where the insight is.
- "What's his biggest weakness?" → He's early in formal electronics training. He brings strong intuition from years of using the gear, but circuit design experience is still developing.

WHAT HE EXPLICITLY DOESN'T WANT:
- Don't pretend he's a senior electronics engineer. He's a student with deep audio domain knowledge.
- Don't emphasize the web dev bootcamp. It's background, not his direction.
- Don't claim he's "open to anything." He wants audio electronics specifically.`
};

export const demoResponses = {
  default: `So most people applying for electronics internships at Eventide or Moog come from EE programs. They know circuits. But a lot of them have never used the gear they'd be building. I'm the opposite. I've been using synths, pedals, and studio gear for years as a composer and mix engineer. Now I'm learning what's inside them.

I have a BFA from CalArts in Experimental Pop. I've mixed and mastered for independent artists, engineered sessions at Laguna Sound, and I have four releases on Apple Music. Signal flow, gain staging, frequency management. I've been working with those concepts every day for a long time, just from the other side of the box.

Now I'm at CUNY City Tech doing the electronics program. Circuit design, signal processing, soldering, troubleshooting. I'm early in the formal training. But the thing is, I'm not learning what a signal chain does. I already know that. I'm learning how to build one.

If you want to test that, ask me how I'd trace a hum in a live session. Or ask me what drew me from music into electronics. Or ask me about something I've soldered. I'm still building those skills and I'll tell you where I am with them.

I don't have years of EE experience. I'm a student. But most EE students haven't spent thousands of hours listening to what good gear sounds like and bad gear doesn't.`,

  studioWork: `Laguna Sound was not one type of work. I'd do an album session in the morning and a podcast in the afternoon. Completely different signal chains, completely different mic setups, completely different client expectations. You have to switch fast.

The part that matters for electronics: when something goes wrong in a session, you fix it now. The client is sitting there. You can't Google it. You trace the signal, find the problem, and solve it. I got good at that. And that's the same skill you need when you're testing or repairing gear on a bench.

I was working with analog and digital signal paths every day. Console routing, outboard gear, mic placement. I know the analog domain because I've been a user of it for years. When you're building gear for musicians, that perspective matters. I know what it feels like when something is wrong with the signal before I know why.

On the freelance side, I run my own projects start to finish. I'm not just mixing. I'm figuring out what the artist wants, making decisions about arrangement and production, tracking, mixing, mastering, delivering. It's a lot of hats.`,

  education: `Two schools, one thread.

CalArts was not a normal music program. Experimental Pop means you make new things. You don't sit in a practice room playing scales. I was writing compositions, bringing in musicians to perform them, then recording and producing everything myself. Sonic Boom Ensemble, Gamelan, Improv Ensemble. And at the same time, learning how to engineer sound in the studio. The program taught me to think about audio from the physics up.

Then there's a gap where I did some other things, including a coding bootcamp. Useful skills but not what I wanted to spend my life on.

City Tech is where it clicked. I'd been using synths, effects pedals, and studio gear every day for years and never really asked what was happening inside. Once I started the electronics program, the coursework made immediate sense. Gain staging in a mix is the same concept as gain staging in a circuit. Impedance matching, frequency response. I already knew this stuff intuitively. Now I'm learning the math and the physics behind it.

I'm not done with the program yet. I won't pretend to be a senior engineer. But this combination, someone who trained as a musician and is now training as an electronics tech, that's not common. And for companies building gear that musicians use, it should matter.`,

  leadership: `I haven't managed a team in a corporate sense. I'll say that up front.

But I've run my own projects for years. When I take on a mix, I'm responsible for the whole thing. Understanding what the artist is going for. Making creative calls. Managing the timeline. Delivering something they're happy with. Nobody is assigning me tasks. I'm figuring it out.

At CalArts I played in three ensembles. Sonic Boom, Gamelan, Improv. Gamelan is interesting because there's no conductor. Everyone has to listen and stay locked in together. It teaches you a different kind of discipline than Western music does.

At Laguna Sound I worked with producers, voice talent, podcast hosts, directors. Different people, different communication styles. And the sessions are booked, so you don't get to take your time figuring out what someone needs. You read the room and adapt.

I haven't led an engineering team. For an internship, I don't think that's what you're looking for anyway. What I can show is that I know how to own a project and work with people under real pressure.`
};

export const fitAssessments = {
  strong: {
    verdict: "strong" as const,
    title: "Strong Fit. Let's Talk.",
    summary: "Your requirements align well with my background. Here's the specific evidence:",
    matches: [
      { requirement: "Audio domain knowledge", evidence: "CalArts BFA in Composition & Sound Engineering. Years of professional mixing and mastering. Engineered sessions at Laguna Sound. I understand what musicians need from gear because I am one." },
      { requirement: "Hands-on electronics skills", evidence: "Currently studying circuit design, signal processing, and soldering at CUNY City Tech. Lab work includes component testing, analog circuit troubleshooting, and oscilloscope measurements." },
      { requirement: "Signal chain understanding", evidence: "Thousands of hours managing analog and digital signal paths in professional studios. Gain staging, impedance, frequency response: I've worked with these concepts practically before learning the theory." }
    ],
    gaps: [
      { area: "Formal EE experience", note: "I'm a student, not a senior engineer. My circuit design skills are developing. I bring strong audio intuition but I'm still building formal electronics depth." }
    ],
    recommendation: "I'd be genuinely useful here. I bring the musician's perspective that pure EE applicants often lack, combined with growing electronics skills. I learn fast because I already understand what the gear is supposed to do. I'm learning how it does it."
  },
  weak: {
    verdict: "weak" as const,
    title: "Honest Assessment. Probably Not Your Person.",
    summary: "I want to be direct with you. Here's why this might not be the right fit:",
    mismatches: [
      { requirement: "Senior-level electronics engineering", reality: "I'm an electronics technology student, not a senior EE. I can solder, read schematics, and troubleshoot basic circuits, but I haven't designed production-ready PCBs or worked with embedded firmware. I'm building toward that, but I'm not there yet." },
      { requirement: "Software development focus", reality: "I did a web dev bootcamp and can write TypeScript/React, but that's not what I want to be doing. If this role is primarily software, I'm not your candidate. My energy and growth are in audio hardware." },
      { requirement: "Manufacturing or production scale experience", reality: "My experience is studio and lab scale. I haven't worked in manufacturing, production testing, or quality assurance at volume. I understand individual signal chains, not production lines." }
    ],
    whatTransfers: "Deep audio domain knowledge transfers. Diagnostic instincts from studio troubleshooting transfer. The ability to think about how gear sounds and feels to a musician transfers everywhere in audio electronics.",
    recommendation: "For a senior hardware engineering role, you want someone with more EE experience than I currently have. But if you have entry-level or internship positions where my audio background and growing electronics skills would be valued, I'd love to talk. The combination I'm building (musician's ear plus electronics training) is genuinely rare."
  }
};
