// PROTOTYPE - NOT FOR PRODUCTION
// Question: 把线索拼成记忆的推理玩法成立吗？自己拼出来的故事，会不会比修出来的更让人在意？
// Date: 2026-11-26
// Every tuning value lives here, each with value, min, max and step. The game reads them live
// through tune.<name> (index.html); the tweak panel, an add-on, writes them back here.
window.CONFIG = {
  seed: 1, // every gameplay random call reads rng(), seeded from this (or ?seed= in the address)
  volume: { value: 0.5, min: 0, max: 1, step: 0.05 },
  tell_wrong_count: { value: 1, min: 0, max: 1, step: 1 },   // 1: a full memory says how many blanks are wrong; 0: only "not yet"
  hint_clears: { value: 1, min: 0, max: 3, step: 1 },        // wrong blanks the second hint empties
  decoys: { value: 1, min: 0, max: 1, step: 1 },             // 1: words that fit no blank stay in the tray
  hotspot_slack: { value: 8, min: 0, max: 30, step: 1 },     // px added around each spot you can look at
  boil_rate: { value: 5, min: 0, max: 12, step: 1 },         // times a second the pencil lines redraw themselves
  boil_amount: { value: 1.1, min: 0, max: 4, step: 0.1 },    // px the pencil lines wander
  message_time: { value: 5, min: 1, max: 12, step: 0.5 },    // seconds a line of what you saw stays up
  reveal_time: { value: 2.5, min: 0.5, max: 6, step: 0.5 },  // seconds the first hint lights the spots
  solve_pause: { value: 1.2, min: 0.2, max: 4, step: 0.1 },  // seconds between the last right word and the repair choice
};
