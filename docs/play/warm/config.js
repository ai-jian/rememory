// PROTOTYPE - NOT FOR PRODUCTION
// Question: 记忆是修出来的这个玩法成立吗？亲手修的手感能不能让人在意物主的故事？
// Date: 2026-11-26
// Every tuning value lives here, each with value, min, max and step. The game reads them live
// through tune.<name> (index.html); the tweak panel, an add-on, writes them back here.
window.CONFIG = {
  seed: 1, // every gameplay random call reads rng(), seeded from this (or ?seed= in the address)
  volume: { value: 0.5, min: 0, max: 1, step: 0.05 },
  scrub_radius: { value: 34, min: 12, max: 80, step: 2 },       // px: how wide one stroke of the cloth cleans
  scrub_rate: { value: 5, min: 1, max: 12, step: 0.5 },         // grime removed per second under the cloth (1 = all of it in a second)
  auto_finish: { value: 0.88, min: 0.6, max: 1, step: 0.02 },   // share cleaned at which the last specks clear themselves
  pry_distance: { value: 620, min: 200, max: 1500, step: 20 },  // px of dragging along the rim to pop the watch back
  wind_time: { value: 2.4, min: 0.5, max: 6, step: 0.1 },       // seconds of turning the crown to wind the watch
  screw_time: { value: 0.7, min: 0.2, max: 2, step: 0.05 },     // seconds to undo one screw
  solder_time: { value: 1.6, min: 0.4, max: 4, step: 0.1 },     // seconds of heat to join the wire
  tune_target: { value: 1035, min: 540, max: 1600, step: 5 },   // kHz: where the county station sits on the dial
  tune_tolerance: { value: 14, min: 4, max: 60, step: 1 },      // kHz either side that still counts as on the station
  tune_hold: { value: 1.2, min: 0.2, max: 4, step: 0.1 },       // seconds on the station before the broadcast comes through
  tune_rate: { value: 2.2, min: 0.5, max: 8, step: 0.1 },       // kHz per px of dragging the knob
  tune_auto_speed: { value: 160, min: 40, max: 600, step: 10 }, // kHz per second when Space turns the knob
  auto_speed: { value: 1.5, min: 0.5, max: 4, step: 0.1 },      // how fast the hand sweeps when Space does the work
  hint_glow: { value: 1, min: 0, max: 1, step: 1 },             // 1: the first item (the watch) shows a glow on the next tool and spot
  dust_motes: { value: 26, min: 0, max: 80, step: 1 },          // motes drifting in the lamp light
};
