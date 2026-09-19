/**
 * OUSTOURI FIT - Core Application Logic
 * High-performance Daily Workout Tracker & PWA
 */

// ==========================================================================
// PRE-LOADED WORKOUT DATA
// ==========================================================================
const DEFAULT_WORKOUTS = {
  mon: {
    dayName: "Monday",
    title: "PUSH DAY OUSTOURI",
    phase1: [
      { id: "mon-p1-1", name: "Band Over-and-Backs", sets: "2 sets", reps: "15 reps", cues: "Shoulder joint lubricating & mobility", numSets: 2 },
      { id: "mon-p1-2", name: "Scapular Push-Ups", sets: "2 sets", reps: "12 reps", cues: "Protraction & retraction focus", numSets: 2 },
      { id: "mon-p1-3", name: "Arm Circles & Wrist Rolls", sets: "2 sets", reps: "10 slow circles/dir", cues: "Elbow and wrist tendon prep", numSets: 2 },
      { id: "mon-p1-4", name: "Tempo Push-Ups", sets: "2 sets", reps: "8 reps (3s negative)", cues: "Chest activation & control", numSets: 2 }
    ],
    phase2: [
      { id: "mon-p2-1", name: "Barbell Flat Bench Press", sets: "4 sets", reps: "6-8 reps", cues: "Arch locked, drive through heels", numSets: 4 },
      { id: "mon-p2-2", name: "Incline DB Press (30° Angle)", sets: "3 sets", reps: "8-10 reps", cues: "Clavicular head deep stretch", numSets: 3 },
      { id: "mon-p2-3", name: "Weighted Chest Dips", sets: "3 sets", reps: "8-12 reps", cues: "Forward lean for sternal pec engagement", numSets: 3 },
      { id: "mon-p2-4", name: "Cable Lateral Raises", sets: "4 sets", reps: "12-15 reps", cues: "Continuous tension, lead with elbows", numSets: 4 },
      { id: "mon-p2-5", name: "Overhead Rope Tricep Extensions", sets: "3 sets", reps: "12-15 reps", cues: "Long head maximum stretch", numSets: 3 }
    ],
    phase3: [
      { id: "mon-p3-1", name: "Mechanical Push-Up Dropset", sets: "3 rounds", reps: "Deficit to Flat to Knees to failure", cues: "Burnout finisher with zero rest between drops", numSets: 3 }
    ],
    phase4: [
      { id: "mon-p4-1", name: "Doorway Pec Stretch", sets: "1 set", reps: "40s per side", cues: "Elbow at 90° angle, breathe into ribcage", numSets: 1 },
      { id: "mon-p4-2", name: "Cross-Body Shoulder Stretch", sets: "1 set", reps: "35s per side", cues: "Depress scapula during stretch", numSets: 1 },
      { id: "mon-p4-3", name: "Overhead Tricep Extension Stretch", sets: "1 set", reps: "35s per side", cues: "Gentle pull behind neck", numSets: 1 }
    ]
  },
  tue: {
    dayName: "Tuesday",
    title: "LEG DAY OUSTOURI",
    phase1: [
      { id: "tue-p1-1", name: "Hip CARs", sets: "2 sets", reps: "5 rotations/leg", cues: "Controlled articular rotations for hip capsule", numSets: 2 },
      { id: "tue-p1-2", name: "World's Greatest Stretch", sets: "2 sets", reps: "4 reps/side", cues: "Thoracic reach with deep hip flexor opening", numSets: 2 },
      { id: "tue-p1-3", name: "Mini-Band Monster Walks", sets: "2 sets", reps: "15 steps lateral/dir", cues: "Glute medius activation with knees bent", numSets: 2 },
      { id: "tue-p1-4", name: "Pause Bodyweight Squats", sets: "2 sets", reps: "8 reps (2s hold)", cues: "2-second dead stop in deepest pocket", numSets: 2 }
    ],
    phase2: [
      { id: "tue-p2-1", name: "Front Squat", sets: "2 sets", reps: "6-8 reps", cues: "Quad & vertical torso focus", numSets: 2 },
      { id: "tue-p2-2", name: "Back Squat", sets: "2 sets", reps: "8-10 reps", cues: "Full depth, explosive drive", numSets: 2 },
      { id: "tue-p2-3", name: "Leg Extensions", sets: "4 sets", reps: "10 bilateral + 5 single-leg + 2 (4s negative)", cues: "Brutal quad pump & eccentric overload", numSets: 4 },
      { id: "tue-p2-4", name: "Single-Leg DB Romanian Deadlift (RDL)", sets: "2 sets", reps: "12 reps/leg", cues: "Hips square to ground, posterior chain hinge", numSets: 2 },
      { id: "tue-p2-5", name: "Hip Machine Superset (Adductor + Abductor)", sets: "3 sets", reps: "Adduction 12-15 reps + Abduction 15-20 reps", cues: "Inner thigh power into lateral glute burnout", numSets: 3 },
      { id: "tue-p2-6", name: "Barbell Hip Thrusts", sets: "3 sets", reps: "10-12 reps", cues: "1s hard lock at peak contraction", numSets: 3 },
      { id: "tue-p2-7", name: "Standing Calf Raises", sets: "4 sets", reps: "10 slow 3s negative + 10 normal + 10 fast to failure", cues: "Total 30 reps per set to complete exhaustion", numSets: 4 }
    ],
    phase3: [
      { id: "tue-p3-1", name: "Copenhagen Plank superset with Wall Sit", sets: "2 rounds", reps: "30s plank/side + 45-60s wall sit", cues: "Groin adductor stability into isometric quad torture", numSets: 2 }
    ],
    phase4: [
      { id: "tue-p4-1", name: "Pigeon Pose", sets: "1 set", reps: "30-45s hold per side", cues: "Deep glute & piriformis release", numSets: 1 },
      { id: "tue-p4-2", name: "Kneeling Quad Stretch", sets: "1 set", reps: "30-45s hold per side", cues: "Posterior pelvic tilt to unlock rectus femoris", numSets: 1 },
      { id: "tue-p4-3", name: "Seated Hamstring Fold", sets: "1 set", reps: "30-45s hold", cues: "Hinge from hips with neutral lumbar", numSets: 1 },
      { id: "tue-p4-4", name: "Wall Calf Stretch", sets: "1 set", reps: "30-45s hold per leg", cues: "Straight knee for gastrocnemius, bent knee for soleus", numSets: 1 }
    ]
  },
  wed: {
    dayName: "Wednesday",
    title: "CORE & CARDIO IGNITION",
    phase1: [
      { id: "wed-p1-1", name: "Jumping Jacks & High Knees", sets: "2 sets", reps: "45s each", cues: "Elevate core body temperature", numSets: 2 },
      { id: "wed-p1-2", name: "Inchworms with Push-Up", sets: "2 sets", reps: "6 reps", cues: "Hamstring stretch into plank stability", numSets: 2 },
      { id: "wed-p1-3", name: "Side Plank Rotations", sets: "2 sets", reps: "8 reps/side", cues: "Oblique activation and shoulder stability", numSets: 2 }
    ],
    phase2: [
      { id: "wed-p2-1", name: "Hanging Leg Raises", sets: "4 sets", reps: "12-15 reps", cues: "Strict pelvic tuck, no momentum", numSets: 4 },
      { id: "wed-p2-2", name: "Ab Wheel Rollouts", sets: "3 sets", reps: "10-12 reps", cues: "Hollow body posture, squeeze abs back", numSets: 3 },
      { id: "wed-p2-3", name: "Cable Standing Woodchoppers", sets: "3 sets", reps: "12 reps/side", cues: "Rotational power from hips through torso", numSets: 3 },
      { id: "wed-p2-4", name: "Assault Bike / Rowing HIIT Sprints", sets: "6 rounds", reps: "20s max effort sprint / 40s cruising", cues: "Target 100% anaerobic burst", numSets: 6 }
    ],
    phase3: [
      { id: "wed-p3-1", name: "Tabata Hollow Body Rocks & Plank", sets: "4 minutes", reps: "20s hollow rock / 10s rest x 8 rounds", cues: "Gymnastics hollow hold, lumbar pinned flat", numSets: 8 }
    ],
    phase4: [
      { id: "wed-p4-1", name: "Cobra Pose", sets: "1 set", reps: "45s hold", cues: "Abdominal wall decompression", numSets: 1 },
      { id: "wed-p4-2", name: "Child's Pose", sets: "1 set", reps: "60s hold", cues: "Deep diaphragmatic breathing", numSets: 1 },
      { id: "wed-p4-3", name: "Standing Side Reach Stretch", sets: "1 set", reps: "30s/side", cues: "Latissimus & intercostal stretch", numSets: 1 }
    ]
  },
  thu: {
    dayName: "Thursday",
    title: "PULL DAY OUSTOURI",
    phase1: [
      { id: "thu-p1-1", name: "Scapular Pull-Ups", sets: "2 sets", reps: "10 reps", cues: "Strict depression & retraction without elbow bend", numSets: 2 },
      { id: "thu-p1-2", name: "Cable / Band Face Pulls", sets: "2 sets", reps: "15 reps", cues: "External rotation focus, thumbs pointing backward", numSets: 2 },
      { id: "thu-p1-3", name: "Cat-Cow Stretch", sets: "2 sets", reps: "8 slow cycles", cues: "Vertebra by vertebra spinal articulation", numSets: 2 },
      { id: "thu-p1-4", name: "Dead Hang from Bar", sets: "2 sets", reps: "30-45s hold", cues: "Decompress spine & shoulder subacromial space", numSets: 2 }
    ],
    phase2: [
      { id: "thu-p2-1", name: "Wide-Grip Lat Pulldown superset with Bodyweight Pull-Ups", sets: "4 sets", reps: "10-12 pulldowns + max strict pull-ups", cues: "Full stretch at top into maximal lat engagement", numSets: 4 },
      { id: "thu-p2-2", name: "Single-Arm DB Row", sets: "3 sets", reps: "10-12 reps/arm", cues: "Lat thickness focus; drive elbow towards hip pocket", numSets: 3 },
      { id: "thu-p2-3", name: "Straight-Arm Cable Lat Pullover", sets: "3 sets", reps: "12-15 reps", cues: "Lat length & deep upper stretch at top", numSets: 3 },
      { id: "thu-p2-4", name: "T-Bar Row / Chest-Supported Row", sets: "3 sets", reps: "8-10 reps", cues: "Mid-back, rhomboids & rear lat thickness", numSets: 3 },
      { id: "thu-p2-5", name: "Barbell Good Mornings / Hyperextensions", sets: "3 sets", reps: "12 reps", cues: "Lumbar erectors & lower back extension", numSets: 3 },
      { id: "thu-p2-6", name: "Incline Dumbbell Curls", sets: "3 sets", reps: "10-12 reps", cues: "Long head stretch & bicep peak", numSets: 3 },
      { id: "thu-p2-7", name: "Preacher Curls / Concentration Curls", sets: "3 sets", reps: "10-12 reps", cues: "Peak contraction, zero shoulder swing", numSets: 3 }
    ],
    phase3: [
      { id: "thu-p3-1", name: "Barbell Shrugs superset with Rear Delt Reverse Flyes", sets: "3 sets", reps: "12-15 reps each", cues: "Upper trap overload paired with posterior delt isolation", numSets: 3 }
    ],
    phase4: [
      { id: "thu-p4-1", name: "Hanging Lat Stretch", sets: "1 set", reps: "30-45s hold/side", cues: "Single-arm grasp on upright bar, lean away", numSets: 1 },
      { id: "thu-p4-2", name: "Cobra Stretch", sets: "1 set", reps: "30-45s hold", cues: "Gentle spinal extension & anterior chain relief", numSets: 1 },
      { id: "thu-p4-3", name: "Child's Pose", sets: "1 set", reps: "30-45s hold", cues: "Sit on heels, reach fingertips far forward", numSets: 1 },
      { id: "thu-p4-4", name: "Doorway Bicep Stretch", sets: "1 set", reps: "30-45s hold/arm", cues: "Palm against doorframe, rotate torso away", numSets: 1 }
    ]
  },
  fri: {
    dayName: "Friday",
    title: "UPPER HYPERTROPHY & DELTS",
    phase1: [
      { id: "fri-p1-1", name: "Resistance Band Pull-Aparts", sets: "2 sets", reps: "20 reps", cues: "Warm posterior deltoids and scapular retractors", numSets: 2 },
      { id: "fri-p1-2", name: "Shoulder Dislocates with PVC", sets: "2 sets", reps: "10 reps", cues: "Full smooth range overhead", numSets: 2 },
      { id: "fri-p1-3", name: "Light DB Hammer Curls", sets: "2 sets", reps: "15 reps", cues: "Brachialis and tendon warm-up", numSets: 2 }
    ],
    phase2: [
      { id: "fri-p2-1", name: "Standing Barbell Overhead Press (OHP)", sets: "4 sets", reps: "6-8 reps", cues: "Glutes squeezed, press head through window", numSets: 4 },
      { id: "fri-p2-2", name: "Seated Dumbbell Lateral Raises", sets: "4 sets", reps: "12-15 reps", cues: "Eliminate leg drive, pour the pitcher", numSets: 4 },
      { id: "fri-p2-3", name: "EZ-Bar Skull Crushers", sets: "3 sets", reps: "10-12 reps", cues: "Lower to crown of head for tricep stretch", numSets: 3 },
      { id: "fri-p2-4", name: "Standing Dumbbell Hammer Curls", sets: "3 sets", reps: "10-12 reps", cues: "Forearm & brachialis mass", numSets: 3 },
      { id: "fri-p2-5", name: "Face Pulls with External Rotation", sets: "3 sets", reps: "15 reps", cues: "Rear delts and rotator cuff health", numSets: 3 }
    ],
    phase3: [
      { id: "fri-p3-1", name: "21s Bicep Curls superset with Cable Pushdowns", sets: "2 rounds", reps: "21 reps (7 low + 7 high + 7 full) + 20 pushdowns", cues: "The legendary Arnold bicep pump", numSets: 2 }
    ],
    phase4: [
      { id: "fri-p4-1", name: "Cross-Body Deltoid Stretch", sets: "1 set", reps: "40s per side", cues: "Shoulder depression & gentle pull", numSets: 1 },
      { id: "fri-p4-2", name: "Overhead Tricep & Lat Stretch", sets: "1 set", reps: "40s per side", cues: "Elbow high, side bend gently", numSets: 1 },
      { id: "fri-p4-3", name: "Wrist Flexor & Extensor Stretch", sets: "1 set", reps: "30s per arm", cues: "Relieve forearm and grip tension", numSets: 1 }
    ]
  },
  sat: {
    dayName: "Saturday",
    title: "FULL BODY METCON OUSTOURI",
    phase1: [
      { id: "sat-p1-1", name: "Spiderman Lunge with Thoracic Twist", sets: "2 sets", reps: "5 reps/side", cues: "Open hip flexors and thoracic cage", numSets: 2 },
      { id: "sat-p1-2", name: "Kettlebell Halos", sets: "2 sets", reps: "8 rotations/dir", cues: "Core and shoulder circle mobility", numSets: 2 },
      { id: "sat-p1-3", name: "Broad Jumps / Plyo Squats", sets: "2 sets", reps: "6 explosive reps", cues: "Central nervous system activation", numSets: 2 }
    ],
    phase2: [
      { id: "sat-p2-1", name: "Trap Bar Deadlift", sets: "4 sets", reps: "6-8 reps", cues: "Drive floor away, neutral neck", numSets: 4 },
      { id: "sat-p2-2", name: "Dumbbell Thrusters", sets: "3 sets", reps: "10-12 reps", cues: "Squat into overhead press in one fluid movement", numSets: 3 },
      { id: "sat-p2-3", name: "Heavy Kettlebell Swings", sets: "4 sets", reps: "15 reps", cues: "Crisp hip snap, glute engagement", numSets: 4 },
      { id: "sat-p2-4", name: "Farmer's Heavy Carries", sets: "3 sets", reps: "40 meters", cues: "Grip strength, upright posture, short steps", numSets: 3 }
    ],
    phase3: [
      { id: "sat-p3-1", name: "500m Row / Echo Bike All-Out Time Trial", sets: "1 round", reps: "1 all-out sprint for time", cues: "Empty the tank completely", numSets: 1 }
    ],
    phase4: [
      { id: "sat-p4-1", name: "Deep Squat Hold (Malasana)", sets: "1 set", reps: "60s hold", cues: "Elbows press knees out, tall spine", numSets: 1 },
      { id: "sat-p4-2", name: "Foam Rolling Quads & Upper Back", sets: "1 set", reps: "90s total", cues: "Slow controlled pressure on trigger points", numSets: 1 },
      { id: "sat-p4-3", name: "Diaphragmatic Box Breathing", sets: "1 set", reps: "3 minutes (4s in / 4s hold / 4s out / 4s hold)", cues: "Switch nervous system to parasympathetic", numSets: 1 }
    ]
  },
  sun: {
    dayName: "Sunday",
    title: "ACTIVE MOBILITY & RESET",
    phase1: [
      { id: "sun-p1-1", name: "Thoracic Windmills", sets: "2 sets", reps: "8 reps/side", cues: "Side-lying spine rotation", numSets: 2 },
      { id: "sun-p1-2", name: "Ankle Dorsiflexion Wall Rocks", sets: "2 sets", reps: "12 rocks/foot", cues: "Knee over toe ankle mobility", numSets: 2 }
    ],
    phase2: [
      { id: "sun-p2-1", name: "90/90 Hip Transitions", sets: "3 sets", reps: "10 smooth shifts", cues: "Internal and external hip rotation", numSets: 3 },
      { id: "sun-p2-2", name: "Cossack Squats", sets: "3 sets", reps: "8 reps/side", cues: "Deep groin and hamstring mobility", numSets: 3 },
      { id: "sun-p2-3", name: "Jefferson Curls (Light Weight)", sets: "3 sets", reps: "6 slow reps", cues: "Segmental spinal flexion & hamstring length", numSets: 3 },
      { id: "sun-p2-4", name: "Prone Y-T-W Raises", sets: "3 sets", reps: "8 reps each", cues: "Lower trapezius and mid-back posture reinforcement", numSets: 3 }
    ],
    phase3: [
      { id: "sun-p3-1", name: "Incline Treadmill Walk or Light Sauna", sets: "1 round", reps: "15-20 minutes", cues: "Heart rate in Zone 1 (100-120 bpm)", numSets: 1 }
    ],
    phase4: [
      { id: "sun-p4-1", name: "Butterfly Stretch", sets: "1 set", reps: "60s hold", cues: "Soles together, gentle adductor stretch", numSets: 1 },
      { id: "sun-p4-2", name: "Corpse Pose (Savasana)", sets: "1 set", reps: "5 minutes", cues: "Complete physical and mental reset for the week ahead", numSets: 1 }
    ]
  }
};

// ==========================================================================
// STORAGE MANAGER (localStorage)
// ==========================================================================
const STORAGE_KEYS = {
  WORKOUTS: "oustouri_workouts_data_v1",
  COMPLETED: "oustouri_completed_v1",
  SET_BUBBLES: "oustouri_set_bubbles_v1",
  ACTIVE_DAY: "oustouri_active_day_v1"
};

function loadStoredWorkouts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.WORKOUTS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.WORKOUTS, JSON.stringify(DEFAULT_WORKOUTS));
      return JSON.parse(JSON.stringify(DEFAULT_WORKOUTS));
    }
    const parsed = JSON.parse(raw);
    // Ensure all days are present
    const merged = { ...DEFAULT_WORKOUTS };
    for (const d of Object.keys(DEFAULT_WORKOUTS)) {
      if (parsed[d]) {
        merged[d] = parsed[d];
      }
    }
    return merged;
  } catch (e) {
    console.error("Failed to parse workouts from storage", e);
    return JSON.parse(JSON.stringify(DEFAULT_WORKOUTS));
  }
}

function saveWorkouts(workouts) {
  try {
    localStorage.setItem(STORAGE_KEYS.WORKOUTS, JSON.stringify(workouts));
  } catch (e) {
    console.error("Failed to save workouts to storage", e);
  }
}

function loadCompletedMap() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.COMPLETED);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveCompletedMap(completedMap) {
  try {
    localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify(completedMap));
  } catch (e) {
    console.error("Failed to save completion state", e);
  }
}

function loadSetBubblesMap() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SET_BUBBLES);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveSetBubblesMap(bubblesMap) {
  try {
    localStorage.setItem(STORAGE_KEYS.SET_BUBBLES, JSON.stringify(bubblesMap));
  } catch (e) {
    console.error("Failed to save set bubbles state", e);
  }
}

// ==========================================================================
// AUDIO ENGINE (Synthesized Gym Chime / Timer Web Audio)
// ==========================================================================
class SoundEngine {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playBeep(freq = 600, duration = 0.12, type = 'sine') {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Sound play error", e);
    }
  }

  playGymChime() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      // Bell harmonics
      [587.33, 880, 1174.66].forEach((f, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now + idx * 0.08);
        gain.gain.setValueAtTime(0.25, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.6);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.6);
      });
      // Try haptic vibration if supported on mobile
      if (navigator.vibrate) {
        navigator.vibrate([100, 50, 150]);
      }
    } catch (e) {
      console.warn("Chime error", e);
    }
  }

  playCelebrationFanfare() {
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      const now = this.ctx.currentTime;
      notes.forEach((f, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, now + i * 0.12);
        gain.gain.setValueAtTime(0.3, now + i * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.45);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.12);
        osc.stop(now + i * 0.12 + 0.45);
      });
      if (navigator.vibrate) {
        navigator.vibrate([120, 60, 120, 60, 300]);
      }
    } catch (e) {}
  }
}

const sounds = new SoundEngine();

// ==========================================================================
// REST TIMER LOGIC
// ==========================================================================
class RestTimer {
  constructor(displayElem, badgeElem, actionBtn) {
    this.display = displayElem;
    this.badge = badgeElem;
    this.actionBtn = actionBtn;
    this.totalSeconds = 60;
    this.remainingSeconds = 60;
    this.isRunning = false;
    this.intervalId = null;
  }

  formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  updateDisplay() {
    this.display.textContent = this.formatTime(this.remainingSeconds);
    if (this.isRunning) {
      this.display.classList.add('active');
      this.badge.classList.add('running');
      this.actionBtn.textContent = 'Pause';
      this.actionBtn.classList.remove('paused');
    } else {
      this.display.classList.remove('active');
      this.badge.classList.remove('running');
      this.actionBtn.textContent = 'Start';
      if (this.remainingSeconds < this.totalSeconds && this.remainingSeconds > 0) {
        this.actionBtn.classList.add('paused');
      } else {
        this.actionBtn.classList.remove('paused');
      }
    }
  }

  setPreset(sec) {
    this.pause();
    this.totalSeconds = sec;
    this.remainingSeconds = sec;
    this.updateDisplay();
    this.start();
  }

  start() {
    if (this.isRunning) return;
    sounds.init();
    this.isRunning = true;
    this.updateDisplay();

    this.intervalId = setInterval(() => {
      this.remainingSeconds--;
      if (this.remainingSeconds <= 3 && this.remainingSeconds > 0) {
        sounds.playBeep(440, 0.08); // countdown tick
      }
      if (this.remainingSeconds <= 0) {
        this.remainingSeconds = 0;
        this.pause();
        this.updateDisplay();
        sounds.playGymChime(); // gym bell
      } else {
        this.updateDisplay();
      }
    }, 1000);
  }

  pause() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.isRunning = false;
    this.updateDisplay();
  }

  toggle() {
    if (this.isRunning) {
      this.pause();
    } else {
      if (this.remainingSeconds <= 0) {
        this.remainingSeconds = this.totalSeconds;
      }
      this.start();
    }
  }

  reset() {
    this.pause();
    this.remainingSeconds = this.totalSeconds;
    this.updateDisplay();
  }
}

// ==========================================================================
// CONFETTI CELEBRATION ENGINE (Lightweight Canvas Confetti)
// ==========================================================================
function triggerConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const colors = ["#06b6d4", "#f59e0b", "#ef4444", "#10b981", "#ffffff"];

  for (let i = 0; i < 110; i++) {
    pieces.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 120,
      y: canvas.height * 0.4 + (Math.random() - 0.5) * 60,
      w: Math.random() * 8 + 6,
      h: Math.random() * 12 + 8,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() * -18) - 4,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 15,
      color: colors[Math.floor(Math.random() * colors.length)],
      gravity: 0.45,
      opacity: 1
    });
  }

  let animationFrame;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let aliveCount = 0;

    pieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotSpeed;
      if (p.y > canvas.height * 0.6) {
        p.opacity -= 0.015;
      }

      if (p.opacity > 0) {
        aliveCount++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
    });

    if (aliveCount > 0) {
      animationFrame = requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  animate();
  sounds.playCelebrationFanfare();
}

// ==========================================================================
// MAIN APP CONTROLLER
// ==========================================================================
class OustouriApp {
  constructor() {
    this.workouts = loadStoredWorkouts();
    this.completedMap = loadCompletedMap();
    this.bubblesMap = loadSetBubblesMap();
    this.activeDay = this.resolveInitialDay();
    this.hasCelebratedToday = false;

    this.initElements();
    this.initTimer();
    this.bindEvents();
    this.render();
  }

  resolveInitialDay() {
    // Check localStorage first
    const stored = localStorage.getItem(STORAGE_KEYS.ACTIVE_DAY);
    if (stored && DEFAULT_WORKOUTS[stored]) {
      return stored;
    }
    // Match today's day of week
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const todayIndex = new Date().getDay();
    const todayCode = days[todayIndex];
    return DEFAULT_WORKOUTS[todayCode] ? todayCode : "tue";
  }

  initElements() {
    this.progressBar = document.getElementById("progress-fill");
    this.progressPercent = document.getElementById("progress-percent");
    this.progressCount = document.getElementById("progress-count");
    this.activeDayTag = document.getElementById("active-day-tag");
    this.activeDayTitle = document.getElementById("active-day-title");
    this.weekSelector = document.getElementById("week-selector");
    this.resetDayBtn = document.getElementById("reset-day-btn");
    this.addExerciseBtn = document.getElementById("add-exercise-modal-btn");
    this.celebrationBanner = document.getElementById("celebration-banner");

    // Phase lists
    this.phaseLists = {
      phase1: document.getElementById("phase-1-list"),
      phase2: document.getElementById("phase-2-list"),
      phase3: document.getElementById("phase-3-list"),
      phase4: document.getElementById("phase-4-list")
    };

    // Phase counters
    this.phaseCounters = {
      phase1: document.getElementById("phase-1-count"),
      phase2: document.getElementById("phase-2-count"),
      phase3: document.getElementById("phase-3-count"),
      phase4: document.getElementById("phase-4-count")
    };

    // Modal elements
    this.modal = document.getElementById("add-modal");
    this.modalClose = document.getElementById("modal-close");
    this.modalCancel = document.getElementById("modal-cancel");
    this.modalForm = document.getElementById("add-exercise-form");
    this.modalDaySelect = document.getElementById("modal-day-select");
    this.modalPhaseSelect = document.getElementById("modal-phase-select");
  }

  initTimer() {
    const clock = document.getElementById("timer-clock");
    const badge = document.getElementById("timer-badge");
    const actionBtn = document.getElementById("timer-action-btn");
    this.timer = new RestTimer(clock, badge, actionBtn);

    // Bind preset buttons
    document.querySelectorAll(".preset-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const sec = parseInt(btn.dataset.sec, 10);
        this.timer.setPreset(sec);
      });
    });

    actionBtn.addEventListener("click", () => {
      this.timer.toggle();
    });

    document.getElementById("timer-reset-btn").addEventListener("click", () => {
      this.timer.reset();
    });
  }

  bindEvents() {
    // Reset Day button
    this.resetDayBtn.addEventListener("click", () => {
      const dayData = this.workouts[this.activeDay];
      const confirmed = confirm(`Reset progress for ${dayData.title}? All checked exercises for this day will be cleared.`);
      if (confirmed) {
        if (this.completedMap[this.activeDay]) {
          delete this.completedMap[this.activeDay];
          saveCompletedMap(this.completedMap);
        }
        // Also clear bubble sets for this day's exercises
        for (let p = 1; p <= 4; p++) {
          const list = dayData[`phase${p}`] || [];
          list.forEach(ex => {
            if (this.bubblesMap[ex.id]) {
              delete this.bubblesMap[ex.id];
            }
          });
        }
        saveSetBubblesMap(this.bubblesMap);
        this.hasCelebratedToday = false;
        sounds.playBeep(320, 0.15);
        this.render();
      }
    });

    // Add exercise modal open
    this.addExerciseBtn.addEventListener("click", () => {
      this.openAddModal();
    });

    // Quick add buttons inside phase cards
    document.querySelectorAll(".phase-quick-add").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const phase = e.currentTarget.dataset.phase;
        this.openAddModal(phase);
      });
    });

    // Modal close events
    this.modalClose.addEventListener("click", () => this.closeAddModal());
    this.modalCancel.addEventListener("click", () => this.closeAddModal());
    this.modal.addEventListener("click", (e) => {
      if (e.target === this.modal) this.closeAddModal();
    });

    // Modal submit
    this.modalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleFormSubmit();
    });

    // Keyboard shortcut (Escape closes modal)
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.modal.classList.contains("open")) {
        this.closeAddModal();
      }
    });
  }

  openAddModal(preselectedPhase = null) {
    this.modalDaySelect.value = this.activeDay;
    if (preselectedPhase) {
      this.modalPhaseSelect.value = preselectedPhase;
    }
    this.modal.classList.add("open");
    setTimeout(() => {
      document.getElementById("modal-exercise-name").focus();
    }, 100);
  }

  closeAddModal() {
    this.modal.classList.remove("open");
    this.modalForm.reset();
  }

  handleFormSubmit() {
    const day = this.modalDaySelect.value;
    const phaseKey = this.modalPhaseSelect.value;
    const name = document.getElementById("modal-exercise-name").value.trim();
    const sets = document.getElementById("modal-sets").value.trim();
    const reps = document.getElementById("modal-reps").value.trim();
    const cues = document.getElementById("modal-cues").value.trim();

    if (!name) return;

    // Parse numerical sets for set bubbles
    let numSets = 3;
    const match = sets.match(/\d+/);
    if (match) {
      numSets = Math.min(10, Math.max(1, parseInt(match[0], 10)));
    }

    const newExercise = {
      id: `custom-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      name,
      sets: sets || "3 sets",
      reps: reps || "10-12 reps",
      cues: cues || "Focus on form and controlled tempo",
      numSets
    };

    if (!this.workouts[day][phaseKey]) {
      this.workouts[day][phaseKey] = [];
    }

    this.workouts[day][phaseKey].push(newExercise);
    saveWorkouts(this.workouts);

    sounds.playBeep(650, 0.12);
    this.closeAddModal();

    if (this.activeDay !== day) {
      this.switchDay(day);
    } else {
      this.render();
    }
  }

  switchDay(dayKey) {
    if (!this.workouts[dayKey]) return;
    this.activeDay = dayKey;
    localStorage.setItem(STORAGE_KEYS.ACTIVE_DAY, dayKey);
    this.hasCelebratedToday = false;
    this.render();
  }

  toggleExerciseCheck(exerciseId, totalSets = 3) {
    sounds.init();
    if (!this.completedMap[this.activeDay]) {
      this.completedMap[this.activeDay] = {};
    }

    const currentStatus = !!this.completedMap[this.activeDay][exerciseId];
    const newStatus = !currentStatus;
    this.completedMap[this.activeDay][exerciseId] = newStatus;
    saveCompletedMap(this.completedMap);

    // Sync set bubbles
    const bubbleArray = Array(totalSets).fill(newStatus);
    this.bubblesMap[exerciseId] = bubbleArray;
    saveSetBubblesMap(this.bubblesMap);

    if (newStatus) {
      sounds.playBeep(780, 0.1);
    } else {
      sounds.playBeep(420, 0.08);
    }

    this.render();
  }

  toggleSetBubble(exerciseId, setIndex, totalSets) {
    sounds.init();
    if (!this.bubblesMap[exerciseId]) {
      this.bubblesMap[exerciseId] = Array(totalSets).fill(false);
    }

    this.bubblesMap[exerciseId][setIndex] = !this.bubblesMap[exerciseId][setIndex];
    saveSetBubblesMap(this.bubblesMap);

    // If all sets are checked, complete the exercise
    const allChecked = this.bubblesMap[exerciseId].every(Boolean);
    if (!this.completedMap[this.activeDay]) {
      this.completedMap[this.activeDay] = {};
    }
    this.completedMap[this.activeDay][exerciseId] = allChecked;
    saveCompletedMap(this.completedMap);

    sounds.playBeep(520 + setIndex * 80, 0.08);
    this.render();
  }

  deleteExercise(exerciseId, phaseKey) {
    const list = this.workouts[this.activeDay][phaseKey];
    const idx = list.findIndex(ex => ex.id === exerciseId);
    if (idx !== -1) {
      const exName = list[idx].name;
      const confirmed = confirm(`Remove "${exName}" from this workout?`);
      if (confirmed) {
        list.splice(idx, 1);
        saveWorkouts(this.workouts);

        // Clean up completion maps
        if (this.completedMap[this.activeDay]) {
          delete this.completedMap[this.activeDay][exerciseId];
          saveCompletedMap(this.completedMap);
        }
        delete this.bubblesMap[exerciseId];
        saveSetBubblesMap(this.bubblesMap);

        sounds.playBeep(350, 0.12);
        this.render();
      }
    }
  }

  render() {
    const dayData = this.workouts[this.activeDay];

    // 1. Render Header Title and Meta
    this.activeDayTag.textContent = `${dayData.dayName} Workout`;
    this.activeDayTitle.textContent = dayData.title;

    // 2. Render Weekly Scroller
    this.renderWeekScroller();

    // 3. Render 4 Phases and Exercises
    let totalExercises = 0;
    let completedExercises = 0;

    for (let p = 1; p <= 4; p++) {
      const phaseKey = `phase${p}`;
      const list = dayData[phaseKey] || [];
      const container = this.phaseLists[phaseKey];
      const counter = this.phaseCounters[phaseKey];

      let phaseCompleted = 0;
      container.innerHTML = "";

      if (list.length === 0) {
        container.innerHTML = `
          <div class="empty-phase-state">
            No exercises scheduled. Tap '+' to add exercises to this phase.
          </div>
        `;
      } else {
        list.forEach(ex => {
          totalExercises++;
          const isDone = !!(this.completedMap[this.activeDay] && this.completedMap[this.activeDay][ex.id]);
          if (isDone) {
            completedExercises++;
            phaseCompleted++;
          }

          const itemEl = this.createExerciseElement(ex, phaseKey, isDone);
          container.appendChild(itemEl);
        });
      }

      counter.textContent = `${phaseCompleted} / ${list.length}`;
    }

    // 4. Update Live Progress Bar
    const percent = totalExercises > 0 ? Math.round((completedExercises / totalExercises) * 100) : 0;
    this.progressBar.style.width = `${percent}%`;
    this.progressPercent.textContent = `${percent}%`;
    this.progressCount.textContent = `${completedExercises} of ${totalExercises} completed`;

    // 5. Check for 100% Celebration
    if (percent === 100 && totalExercises > 0) {
      this.celebrationBanner.style.display = "flex";
      if (!this.hasCelebratedToday) {
        this.hasCelebratedToday = true;
        setTimeout(() => triggerConfetti(), 250);
      }
    } else {
      this.celebrationBanner.style.display = "none";
    }
  }

  createExerciseElement(ex, phaseKey, isDone) {
    const el = document.createElement("div");
    el.className = `exercise-item ${isDone ? "is-completed" : ""}`;
    el.dataset.id = ex.id;

    // Setup bubble state
    const numSets = ex.numSets || 3;
    let bubbleStates = this.bubblesMap[ex.id];
    if (!bubbleStates || bubbleStates.length !== numSets) {
      bubbleStates = Array(numSets).fill(isDone);
      this.bubblesMap[ex.id] = bubbleStates;
    }

    const setBubblesHtml = Array.from({ length: numSets }, (_, i) => {
      const checked = bubbleStates[i];
      return `<button type="button" class="set-bubble ${checked ? 'done' : ''}" data-set-index="${i}">Set ${i + 1} ${checked ? '✓' : ''}</button>`;
    }).join("");

    el.innerHTML = `
      <div class="exercise-primary-row">
        <div class="checkbox-container" title="Mark exercise complete">
          <div class="custom-checkbox">
            <svg viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>

        <div class="exercise-body">
          <div class="exercise-title-row">
            <span class="exercise-name">${ex.name}</span>
            <button class="exercise-delete-btn" title="Delete exercise" aria-label="Delete exercise">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div class="badge-row">
            <span class="pill-badge sets-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <rect x="2" y="7" width="20" height="10" rx="2" />
                <line x1="6" y1="17" x2="6" y2="7" />
                <line x1="18" y1="17" x2="18" y2="7" />
              </svg>
              ${ex.sets}
            </span>
            <span class="pill-badge reps-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              ${ex.reps}
            </span>
          </div>

          ${ex.cues ? `<div class="exercise-cue-text">${ex.cues}</div>` : ""}

          <div class="set-bubbles-row">
            ${setBubblesHtml}
          </div>
        </div>
      </div>
    `;

    // Event: Toggle main exercise check
    const chk = el.querySelector(".checkbox-container");
    chk.addEventListener("click", () => {
      this.toggleExerciseCheck(ex.id, numSets);
    });

    // Event: Toggle set bubbles
    el.querySelectorAll(".set-bubble").forEach(b => {
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        const setIdx = parseInt(b.dataset.setIndex, 10);
        this.toggleSetBubble(ex.id, setIdx, numSets);
      });
    });

    // Event: Delete exercise
    const delBtn = el.querySelector(".exercise-delete-btn");
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.deleteExercise(ex.id, phaseKey);
    });

    return el;
  }

  renderWeekScroller() {
    this.weekSelector.innerHTML = "";
    const days = [
      { key: "mon", short: "Mon" },
      { key: "tue", short: "Tue" },
      { key: "wed", short: "Wed" },
      { key: "thu", short: "Thu" },
      { key: "fri", short: "Fri" },
      { key: "sat", short: "Sat" },
      { key: "sun", short: "Sun" }
    ];

    days.forEach(d => {
      const dayData = this.workouts[d.key];
      let total = 0;
      let done = 0;

      for (let p = 1; p <= 4; p++) {
        const list = dayData[`phase${p}`] || [];
        total += list.length;
        list.forEach(ex => {
          if (this.completedMap[d.key] && this.completedMap[d.key][ex.id]) {
            done++;
          }
        });
      }

      const percent = total > 0 ? Math.round((done / total) * 100) : 0;
      const isCompleted = total > 0 && done === total;
      const isActive = d.key === this.activeDay;

      const pill = document.createElement("button");
      pill.className = `day-pill ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
      pill.innerHTML = `
        <span class="day-short-name">${d.short}</span>
        <span class="day-status-pill">${percent}%</span>
      `;

      pill.addEventListener("click", () => {
        this.switchDay(d.key);
      });

      this.weekSelector.appendChild(pill);
    });
  }
}

// ==========================================================================
// PWA SERVICE WORKER REGISTRATION
// ==========================================================================
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js")
      .then(reg => console.log("Oustouri Fit ServiceWorker registered:", reg.scope))
      .catch(err => console.log("ServiceWorker registration failed:", err));
  });
}

// ==========================================================================
// BOOTSTRAP APPLICATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  window.app = new OustouriApp();
});
