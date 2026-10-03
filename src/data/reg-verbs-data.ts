import type { AllVerbsObj, RegVerbFlags, VerbGroup } from "../types/types";

export let regVerbFlags: RegVerbFlags = {
  currentVerbCommon: 0,
  currentVerbUncommon: 0,
  currentVerbGroup: "common",
}

export const regVerbData: VerbGroup[] = [
  {
    mainVerbs1: ['Wanted', 'Needed'],
    mainVerbs2: ['Grabbed', 'Stuffed', 'Plugged', 'Worked', 'Called', 'Seemed', 'Cleaned', 'Stopped', 'Offered', 'Passed', 'Lived', 'Fixed', 'Amazed', 'Watched', 'Washed'],
  },
  {
    commonVerbs: [ 
      "Talked", "Expected", "Crashed","Taxed","Begged", "Touched", "Brushed", "Provided", "Pushed", "Waited", "Pulled", "Jogged", "Mixed", "Stabbed", "Asked", "Kissed", "Loved", "Rained","Jumped", "Answered", "Opened", "Reached","Squeezed", "Sniffed", "Added", "Finished", "Started", "Filled", "Relaxed", "Robbed", "Looked", "Raced", "Moved","Flexed", "Dropped", "Cleared", "Turned", "Dreamed", "Disturbed","Promised", "Hugged", "Sneezed", "Laughed", "Improved", "Punched","Typed", "Helped", "Occurred", "Learned", "Hummed", "Snoozed", "Mailed", "Cuffed", "Hoped", "Listened", "Placed", "Rammed", "Organized", "Sounded","Surfed", "Created", "Walked","Calmed", "Seized", "Spilled", "Searched","Killed", "Danced", "Saved", "Dragged", "Served", "Boxed", "Wished", "Marched","Scrubbed", "Liked", "Rested", "Zoomed", "Snagged", "Bored", "Reminded", "Absorbed","Dwarfed", "Included","Barred", 
    ],

    uncommonVerbs: [
      "Jolted", "Roughed", "Itched", "Zigzagged", "Ducked", "Padded","Dwelled", "Charmed", "Yearned", "Clipped", "Scarred", "Hissed", "Weaved", "Waxed", "Quizzed", "Bashed", "Tilted", "Dubbed", "Scuffed", "Tugged", "Snacked", "Yielded", "Firmed", "Glistened", "Belched", "Striped", "Noticed", "Carved", "Maxed", "Fizzed", "Swooshed",  "Gutted", "Blabbed", "Buffed", "Mugged", "Peeked", "Chilled", "Bleached","Harmed", "Summoned", "Gripped", "Blurred", "Dismissed", "Starved", "Faxed", "Jazzed", "Mushed", "Nodded", "Knitted", "Bobbed", "Muffed", "Shrugged", "Licked", "Thrilled", "Warmed", "Shunned", "Snapped", "Steered", "Broached", "Welded", "Produced", "Observed", "Fluxed", "Whizzed", "Demolished", "Wedded", "Netted", "Curbed", "Huffed", "Clogged", "Shacked", "Puzzled", "Stormed", "Scorned", "Tapped", "Roared", "Reduced",  "Reserved", "Plexed",  "Leeched","Glazed", "Abolished",  "Glided", "Dabbed", "Stirred", 
    ]
  }
];

export const allVerbs: AllVerbsObj = {
  Grabbed: ["Stabbed", "Robbed", "Absorbed", "Disturbed", "Scrubbed", "Dabbed", "Dubbed", "Blabbed", "Bobbed", "Curbed"],
  Stuffed: ["Sniffed", "Laughed", "Cuffed", "Surfed", "Dwarfed", "Roughed", "Scuffed", "Buffed", "Muffed", "Huffed"],
  Plugged: ["Begged", "Jogged", "Hugged", "Dragged", "Snagged", "Zigzagged", "Tugged", "Mugged", "Shrugged", "Clogged"],
  Worked: ["Asked", "Looked", "Walked", "Talked", "Liked", "Ducked", "Snacked", "Peeked", "Licked", "Shacked"],
  Called: ["Pulled", "Filled", "Mailed", "Spilled", "Killed", "Dwelled", "Yielded", "Chilled", "Thrilled", "Puzzled"],
  Seemed: ["Zoomed", "Dreamed", "Hummed", "Rammed", "Calmed", "Charmed", "Firmed", "Harmed", "Warmed", "Stormed"],
  Cleaned: ["Opened", "Turned", "Learned", "Listened", "Rained", "Yearned", "Glistened", "Summoned", "Shunned", "Scorned"],
  Stopped: ["Jumped", "Dropped", "Helped", "Hoped", "Typed", "Clipped", "Striped", "Gripped", "Snapped", "Tapped"],
  Offered: ["Answered", "Cleared", "Occured", "Barred", "Bored", "Scarred", "Stirred", "Blurred", "Steered", "Roared"],
  Passed: ["Kissed", "Raced", "Danced", "Placed", "Promised", "Hissed", "Noticed", "Dismissed", "Produced", "Reduced"],
  Lived: ["Loved", "Moved", "Saved", "Improved", "Served", "Weaved", "Carved", "Starved", "Observed", "Reserved"],
  Fixed: ["Mixed", "Relaxed", "Boxed", "Taxed", "Flexed", "Waxed", "Maxed", "Faxed", "Fluxed", "Plexed"],
  Amazed: ["Squeezed", "Sneezed", "Snoozed", "Organized", "Seized", "Quizzed", "Fizzed", "Jazzed", "Whizzed", "Glazed"],
  Watched: ["Touched", "Reached", "Punched", "Searched", "Marched", "Itched", "Belched", "Bleached", "Broached", "Leeched"],
  Washed: ["Pushed", "Finished", "Brushed", "Crashed", "Wished", "Bashed", "Swooshed", "Mushed", "Demolished", "Abolished"],
  Wanted: ["Waited", "Started", "Created", "Rested", "Expected", "Jolted", "Tilted", "Gutted", "Knitted", "Netted"],
  Needed: ["Provided", "Reminded", "Included", "Sounded", "Added", "Nodded", "Wedded", "Padded", "Glided", "Welded"],
};

console.log(regVerbData[1]!.commonVerbs!.length);
console.log(regVerbData[1]!.uncommonVerbs!.length);