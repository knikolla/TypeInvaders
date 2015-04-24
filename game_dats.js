/*
**
** The JavaScript code is generated by atscc2js
** The starting compilation time is: 2015-4-23: 17h: 0m
**
*/

var statmp0

var statmp1

var statmp2

var statmp3

var statmp4

var statmp5

var statmp6

var statmp7

var statmp8

var statmp9

var statmp10

function
init_0()
{
//
// knd = 0
  var tmp14
  var tmp17
//
  // __patsflab_init_0
  init_stage();
  init_resources();
  tmp14 = init_player(304, 576);
  stage_add(tmp14);
  tmp17 = [tmp14];
  ats2jspre_ref_set_elt(statmp0, tmp17);
  init_enemies(statmp3, 8, 4);
  return/*_void*/;
} // end-of-function


function
_057_home_057_grad3_057_knikolla_057_Documents_057_PPL_057_TypeInvaders_057_game_056_sats__player_get()
{
//
// knd = 0
  var tmpret18
//
  // __patsflab_player_get
  tmpret18 = ats2jspre_ref_get_elt(statmp0);
  return tmpret18;
} // end-of-function


function
enemies_get()
{
//
// knd = 0
  var tmpret19
//
  // __patsflab_enemies_get
  tmpret19 = ats2jspre_ref_get_elt(statmp4);
  return tmpret19;
} // end-of-function


function
player_bullets_get()
{
//
// knd = 0
  var tmpret20
//
  // __patsflab_player_bullets_get
  tmpret20 = ats2jspre_ref_get_elt(statmp7);
  return tmpret20;
} // end-of-function


function
enemy_bullets_get()
{
//
// knd = 0
  var tmpret21
//
  // __patsflab_enemy_bullets_get
  tmpret21 = ats2jspre_ref_get_elt(statmp9);
  return tmpret21;
} // end-of-function


function
enemies_direction()
{
//
// knd = 0
  var tmpret22
//
  // __patsflab_enemies_direction
  tmpret22 = ats2jspre_ref_get_elt(statmp10);
  return tmpret22;
} // end-of-function


function
enemies_turn()
{
//
// knd = 0
  var tmp24
  var tmp25
  var tmp26
//
  // __patsflab_enemies_turn
  tmp25 = ats2jspre_neg_int0(1);
  tmp26 = ats2jspre_ref_get_elt(statmp10);
  tmp24 = ats2jspre_mul_int0_int0(tmp25, tmp26);
  ats2jspre_ref_set_elt(statmp10, tmp24);
  return/*_void*/;
} // end-of-function


function
player_remove()
{
//
// knd = 0
  var tmp28
//
  // __patsflab_player_remove
  tmp28 = null;
  ats2jspre_ref_set_elt(statmp0, tmp28);
  return/*_void*/;
} // end-of-function


function
player_cooldown(arg0)
{
//
// knd = 0
  var tmp30
  var tmp31
  var tmp32
  var tmp33
//
  // __patsflab_player_cooldown
  tmp31 = ats2jspre_ref_get_elt(statmp2);
  tmp30 = ats2jspre_gt_int0_int0(tmp31, 0);
  if(tmp30) {
    tmp33 = ats2jspre_ref_get_elt(statmp2);
    tmp32 = ats2jspre_sub_int0_int0(tmp33, arg0);
    ats2jspre_ref_set_elt(statmp2, tmp32);
  } else {
    // ATSINSmove_void
  } // endif
  return/*_void*/;
} // end-of-function


function
player_can_fire()
{
//
// knd = 0
  var tmpret34
  var tmp35
  var tmp36
//
  // __patsflab_player_can_fire
  tmp36 = ats2jspre_ref_get_elt(statmp2);
  tmp35 = ats2jspre_lte_int0_int0(tmp36, 0);
  if(tmp35) {
    ats2jspre_ref_set_elt(statmp2, 1000);
    tmpret34 = [1];
  } else {
    tmpret34 = null;
  } // endif
  return tmpret34;
} // end-of-function


function
enemy_can_fire(arg0)
{
//
// knd = 0
  var tmpret38
  var tmp40
  var tmp41
  var tmp42
  var tmp43
//
  // __patsflab_enemy_can_fire
  tmp41 = ats2jspre_ref_get_elt(statmp5);
  tmp40 = ats2jspre_sub_int0_int0(tmp41, arg0);
  ats2jspre_ref_set_elt(statmp5, tmp40);
  tmp43 = ats2jspre_ref_get_elt(statmp5);
  tmp42 = ats2jspre_lt_int0_int0(tmp43, 0);
  if(tmp42) {
    ats2jspre_ref_set_elt(statmp5, 1000);
    tmpret38 = [1];
  } else {
    tmpret38 = null;
  } // endif
  return tmpret38;
} // end-of-function


function
init_enemies(arg0, arg1, arg2)
{
//
// knd = 0
//
  // __patsflab_init_enemies
  go_12(arg0, arg1, arg2, 0, 0);
  return/*_void*/;
} // end-of-function


function
go_12(arg0, arg1, arg2, arg3, arg4)
{
//
// knd = 1
  var apy0
  var apy1
  var apy2
  var apy3
  var apy4
  var tmp48
  var tmp49
  var tmp50
  var tmp51
  var tmp52
  var tmp55
  var tmp56
  var tmp57
  var tmp58
  var tmp59
  var tmp60
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab_go_12
    tmp49 = ats2jspre_add_int1_int1(arg3, 1);
    tmp48 = ats2jspre_mul_int1_int1(64, tmp49);
    tmp51 = ats2jspre_add_int1_int1(arg4, 1);
    tmp50 = ats2jspre_mul_int1_int1(64, tmp51);
    tmp52 = enemy_create(tmp48, tmp50);
    stage_add(tmp52);
    store_add(arg0, tmp52);
    tmp56 = ats2jspre_add_int1_int1(arg3, 1);
    tmp55 = ats2jspre_lt_int1_int1(tmp56, arg1);
    if(tmp55) {
      tmp57 = ats2jspre_add_int1_int1(arg3, 1);
      // ATStailcalseq_beg
      apy0 = arg0;
      apy1 = arg1;
      apy2 = arg2;
      apy3 = tmp57;
      apy4 = arg4;
      arg0 = apy0;
      arg1 = apy1;
      arg2 = apy2;
      arg3 = apy3;
      arg4 = apy4;
      funlab_js = 1; // __patsflab_go_12
      // ATStailcalseq_end
    } else {
      tmp59 = ats2jspre_add_int1_int1(arg4, 1);
      tmp58 = ats2jspre_lt_int1_int1(tmp59, arg2);
      if(tmp58) {
        tmp60 = ats2jspre_add_int1_int1(arg4, 1);
        // ATStailcalseq_beg
        apy0 = arg0;
        apy1 = arg1;
        apy2 = arg2;
        apy3 = 0;
        apy4 = tmp60;
        arg0 = apy0;
        arg1 = apy1;
        arg2 = apy2;
        arg3 = apy3;
        arg4 = apy4;
        funlab_js = 1; // __patsflab_go_12
        // ATStailcalseq_end
      } else {
        // ATSINSmove_void
      } // endif
    } // endif
    if (funlab_js > 0) continue; else return/*_void*/;
  } // endwhile-fun
} // end-of-function


function
player_death(arg0)
{
//
// knd = 0
//
  // __patsflab_player_death
  player_remove();
  stage_remove(arg0);
  return/*_void*/;
} // end-of-function


function
game_tick(arg0)
{
//
// knd = 0
  var tmp64
  var tmp65
  var tmp71
//
  // __patsflab_game_tick
  tmp64 = _057_home_057_grad3_057_knikolla_057_Documents_057_PPL_057_TypeInvaders_057_game_056_sats__player_get();
  // ATScaseofseq_beg
  tmplab_js = 1;
  while(true) {
    tmplab = tmplab_js; tmplab_js = 0;
    switch(tmplab) {
      // ATSbranchseq_beg
      case 1: // __atstmplab0
      if(ATSCKptriscons(tmp64)) { tmplab_js = 4; break; }
      case 2: // __atstmplab1
      // ATSINSmove_void
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 3: // __atstmplab2
      if(ATSCKptrisnull(tmp64)) ATSINScaseof_fail("/home/grad3/knikolla/Documents/PPL/TypeInvaders/game.dats: 2525(line=136, offs=5) -- 2875(line=151, offs=10)");
      case 4: // __atstmplab3
      tmp65 = tmp64[0];
      enemy_update(arg0);
      player_update(tmp65, arg0);
      player_bullets_update(arg0);
      enemy_bullets_update(arg0);
      tmp71 = ats2jspre_eq_int1_int1(0, 1);
      if(tmp71) {
        player_death(tmp65);
      } else {
        // ATSINSmove_void
      } // endif
      stage_update();
      break;
      // ATSbranchseq_end
    } // end-of-switch
    if (tmplab_js === 0) break;
  } // endwhile
  // ATScaseofseq_end
  return/*_void*/;
} // end-of-function


function
enemy_update(arg0)
{
//
// knd = 0
  var tmp103
  var tmp104
  var tmp105
  var tmp107
//
  // __patsflab_enemy_update
  tmp103 = enemies_get();
  tmp104 = store_size(tmp103);
  tmp105 = ats2jspre_gt_int1_int1(tmp104, 0);
  if(tmp105) {
    boundaries_16(tmp103, tmp104, 0);
    tmp107 = enemies_direction();
    shoot_18(tmp103, tmp104, arg0);
    move_19(tmp103, tmp104, 0, tmp107);
  } else {
    // ATSINSmove_void
  } // endif
  return/*_void*/;
} // end-of-function


function
boundaries_16(arg0, arg1, arg2)
{
//
// knd = 1
  var apy0
  var apy1
  var apy2
  var tmp79
  var tmp80
  var tmp81
  var tmp82
  var tmp83
  var tmp84
  var tmp85
  var tmp86
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab_boundaries_16
    tmp79 = store_get(arg0, arg2);
    tmp80 = gameobject_get_x(tmp79);
    tmp81 = tmp80;
    tmp82 = check_17(tmp81);
    tmp83 = ats2jspre_eq_int0_int0(tmp82, 1);
    if(tmp83) {
      // ATSINSmove_void
    } else {
      tmp85 = ats2jspre_add_int1_int1(arg2, 1);
      tmp84 = ats2jspre_lt_int1_int1(tmp85, arg1);
      if(tmp84) {
        tmp86 = ats2jspre_add_int1_int1(arg2, 1);
        // ATStailcalseq_beg
        apy0 = arg0;
        apy1 = arg1;
        apy2 = tmp86;
        arg0 = apy0;
        arg1 = apy1;
        arg2 = apy2;
        funlab_js = 1; // __patsflab_boundaries_16
        // ATStailcalseq_end
      } else {
        // ATSINSmove_void
      } // endif
    } // endif
    if (funlab_js > 0) continue; else return/*_void*/;
  } // endwhile-fun
} // end-of-function


function
check_17(arg0)
{
//
// knd = 0
  var tmpret74
  var tmp75
  var tmp76
  var tmp77
//
  // __patsflab_check_17
  tmp77 = ats2jspre_sub_int1_int1(640, 16);
  tmp76 = ats2jspre_gte_int0_int0(arg0, tmp77);
  if(tmp76) {
    tmp75 = true;
  } else {
    tmp75 = ats2jspre_lte_int0_int0(arg0, 16);
  } // endif
  if(tmp75) {
    enemies_turn();
    tmpret74 = 1;
  } else {
    tmpret74 = 0;
  } // endif
  return tmpret74;
} // end-of-function


function
shoot_18(arg0, arg1, arg2)
{
//
// knd = 0
  var tmp88
  var tmp90
  var tmp91
  var tmp92
  var tmp93
  var tmp94
//
  // __patsflab_shoot_18
  tmp88 = enemy_can_fire(arg2);
  // ATScaseofseq_beg
  tmplab_js = 1;
  while(true) {
    tmplab = tmplab_js; tmplab_js = 0;
    switch(tmplab) {
      // ATSbranchseq_beg
      case 1: // __atstmplab4
      if(ATSCKptriscons(tmp88)) { tmplab_js = 4; break; }
      case 2: // __atstmplab5
      // ATSINSmove_void
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 3: // __atstmplab6
      if(ATSCKptrisnull(tmp88)) ATSINScaseof_fail("/home/grad3/knikolla/Documents/PPL/TypeInvaders/game.dats: 3528(line=181, offs=9) -- 3828(line=191, offs=20)");
      case 4: // __atstmplab7
      tmp91 = ats2jspre_sub_int0_int0(arg1, 1);
      tmp90 = my_rand(tmp91);
      tmp92 = store_get(arg0, tmp90);
      tmp93 = enemy_create_bullet(tmp92);
      tmp94 = enemy_bullets_get();
      store_add(tmp94, tmp93);
      stage_add(tmp93);
      break;
      // ATSbranchseq_end
    } // end-of-switch
    if (tmplab_js === 0) break;
  } // endwhile
  // ATScaseofseq_end
  return/*_void*/;
} // end-of-function


function
move_19(arg0, arg1, arg2, arg3)
{
//
// knd = 1
  var apy0
  var apy1
  var apy2
  var apy3
  var tmp97
  var tmp99
  var tmp100
  var tmp101
  var tmp102
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab_move_19
    tmp97 = store_get(arg0, arg2);
    tmp99 = ats2jspre_mul_int0_int0(2, arg3);
    gameobject_translate(tmp97, 16, tmp99, 0);
    tmp101 = ats2jspre_add_int1_int1(arg2, 1);
    tmp100 = ats2jspre_lt_int1_int1(tmp101, arg1);
    if(tmp100) {
      tmp102 = ats2jspre_add_int1_int1(arg2, 1);
      // ATStailcalseq_beg
      apy0 = arg0;
      apy1 = arg1;
      apy2 = tmp102;
      apy3 = arg3;
      arg0 = apy0;
      arg1 = apy1;
      arg2 = apy2;
      arg3 = apy3;
      funlab_js = 1; // __patsflab_move_19
      // ATStailcalseq_end
    } else {
      // ATSINSmove_void
    } // endif
    if (funlab_js > 0) continue; else return/*_void*/;
  } // endwhile-fun
} // end-of-function


function
player_input(arg0)
{
//
// knd = 0
  var tmp111
  var tmp112
  var tmp113
  var tmp115
  var tmp116
  var tmp117
  var tmp118
//
  // __patsflab_player_input
  tmp112 = check_key(37);
  tmp111 = ats2jspre_eq_int0_int0(tmp112, 1);
  if(tmp111) {
    tmp113 = ats2jspre_neg_int0(20);
    gameobject_translate(arg0, 16, tmp113, 0);
  } else {
    // ATSINSmove_void
  } // endif
  tmp116 = check_key(39);
  tmp115 = ats2jspre_eq_int0_int0(tmp116, 1);
  if(tmp115) {
    gameobject_translate(arg0, 16, 20, 0);
  } else {
    // ATSINSmove_void
  } // endif
  tmp118 = check_key(38);
  tmp117 = ats2jspre_eq_int0_int0(tmp118, 1);
  if(tmp117) {
    player_fire(arg0);
  } else {
    // ATSINSmove_void
  } // endif
  return/*_void*/;
} // end-of-function


function
player_fire(arg0)
{
//
// knd = 0
  var tmp120
  var tmp122
  var tmp123
//
  // __patsflab_player_fire
  tmp120 = player_can_fire();
  // ATScaseofseq_beg
  tmplab_js = 1;
  while(true) {
    tmplab = tmplab_js; tmplab_js = 0;
    switch(tmplab) {
      // ATSbranchseq_beg
      case 1: // __atstmplab8
      if(ATSCKptriscons(tmp120)) { tmplab_js = 4; break; }
      case 2: // __atstmplab9
      // ATSINSmove_void
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 3: // __atstmplab10
      if(ATSCKptrisnull(tmp120)) ATSINScaseof_fail("/home/grad3/knikolla/Documents/PPL/TypeInvaders/game.dats: 4715(line=236, offs=5) -- 4911(line=244, offs=8)");
      case 4: // __atstmplab11
      tmp122 = player_bullets_get();
      tmp123 = player_create_bullet(arg0);
      stage_add(tmp123);
      store_add(tmp122, tmp123);
      break;
      // ATSbranchseq_end
    } // end-of-switch
    if (tmplab_js === 0) break;
  } // endwhile
  // ATScaseofseq_end
  return/*_void*/;
} // end-of-function


function
player_update(arg0, arg1)
{
//
// knd = 0
//
  // __patsflab_player_update
  player_cooldown(arg1);
  player_input(arg0);
  return/*_void*/;
} // end-of-function


function
player_bullets_update(arg0)
{
//
// knd = 0
  var tmp144
  var tmp145
  var tmp146
  var tmp147
  var tmp148
//
  // __patsflab_player_bullets_update
  tmp144 = player_bullets_get();
  tmp145 = enemies_get();
  tmp146 = store_size(tmp144);
  tmp147 = ats2jspre_gt_int1_int1(tmp146, 0);
  if(tmp147) {
    tmp148 = ats2jspre_sub_int1_int1(tmp146, 1);
    move_24(tmp144, tmp146, tmp148);
  } else {
    // ATSINSmove_void
  } // endif
  return/*_void*/;
} // end-of-function


function
move_24(arg0, arg1, arg2)
{
//
// knd = 1
  var apy0
  var apy1
  var apy2
  var tmp129
  var tmp131
  var tmp133
  var tmp134
  var tmp135
  var tmp136
  var tmp137
  var tmp138
  var tmp140
  var tmp142
  var tmp143
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab_move_24
    tmp129 = store_get(arg0, arg2);
    tmp131 = ats2jspre_neg_int0(16);
    gameobject_translate(tmp129, 2, 0, tmp131);
    tmp135 = gameobject_get_x(tmp129);
    tmp134 = ats2jspre_add_int0_int0(tmp135, 2);
    tmp133 = ats2jspre_lt_int0_int0(tmp134, 0);
    if(tmp133) {
      store_remove(arg0, arg2);
    } else {
      // ATSINSmove_void
    } // endif
    tmp136 = enemies_get();
    tmp137 = store_size(tmp136);
    tmp138 = object_store_collision(tmp129, 2, tmp136, 16, tmp137);
    tmp140 = ats2jspre_eq_int0_int0(tmp138, 1);
    if(tmp140) {
      store_remove(arg0, arg2);
      stage_remove(tmp129);
    } else {
      // ATSINSmove_void
    } // endif
    tmp142 = ats2jspre_gt_int1_int1(arg2, 0);
    if(tmp142) {
      tmp143 = ats2jspre_sub_int1_int1(arg2, 1);
      // ATStailcalseq_beg
      apy0 = arg0;
      apy1 = arg1;
      apy2 = tmp143;
      arg0 = apy0;
      arg1 = apy1;
      arg2 = apy2;
      funlab_js = 1; // __patsflab_move_24
      // ATStailcalseq_end
    } else {
      // ATSINSmove_void
    } // endif
    if (funlab_js > 0) continue; else return/*_void*/;
  } // endwhile-fun
} // end-of-function


function
enemy_bullets_update(arg0)
{
//
// knd = 0
  var tmp159
  var tmp160
  var tmp161
  var tmp162
//
  // __patsflab_enemy_bullets_update
  tmp159 = enemy_bullets_get();
  tmp160 = store_size(tmp159);
  tmp161 = ats2jspre_gt_int1_int1(tmp160, 0);
  if(tmp161) {
    tmp162 = ats2jspre_sub_int1_int1(tmp160, 1);
    move_26(tmp159, tmp160, tmp162);
  } else {
    // ATSINSmove_void
  } // endif
  return/*_void*/;
} // end-of-function


function
move_26(arg0, arg1, arg2)
{
//
// knd = 1
  var apy0
  var apy1
  var apy2
  var tmp151
  var tmp154
  var tmp155
  var tmp156
  var tmp157
  var tmp158
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab_move_26
    tmp151 = store_get(arg0, arg2);
    gameobject_translate(tmp151, 2, 0, 16);
    tmp156 = gameobject_get_x(tmp151);
    tmp155 = ats2jspre_sub_int0_int0(tmp156, 2);
    tmp154 = ats2jspre_gt_int0_int0(tmp155, 640);
    if(tmp154) {
      store_remove(arg0, arg2);
    } else {
      // ATSINSmove_void
    } // endif
    tmp157 = ats2jspre_gt_int1_int1(arg2, 0);
    if(tmp157) {
      tmp158 = ats2jspre_sub_int1_int1(arg2, 1);
      // ATStailcalseq_beg
      apy0 = arg0;
      apy1 = arg1;
      apy2 = tmp158;
      arg0 = apy0;
      arg1 = apy1;
      arg2 = apy2;
      funlab_js = 1; // __patsflab_move_26
      // ATStailcalseq_end
    } else {
      // ATSINSmove_void
    } // endif
    if (funlab_js > 0) continue; else return/*_void*/;
  } // endwhile-fun
} // end-of-function


function
object_store_collision(arg0, arg1, arg2, arg3, arg4)
{
//
// knd = 0
  var tmpret163
  var tmp172
  var tmp173
//
  // __patsflab_object_store_collision
  tmp172 = ats2jspre_gt_int1_int1(arg4, 0);
  if(tmp172) {
    tmp173 = ats2jspre_sub_int1_int1(arg4, 1);
    tmpret163 = go_28(arg0, arg1, arg2, arg3, arg4, tmp173);
  } else {
    tmpret163 = 0;
  } // endif
  return tmpret163;
} // end-of-function


function
go_28(arg0, arg1, arg2, arg3, arg4, arg5)
{
//
// knd = 1
  var apy0
  var apy1
  var apy2
  var apy3
  var apy4
  var apy5
  var tmpret164
  var tmp165
  var tmp166
  var tmp167
  var tmp170
  var tmp171
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab_go_28
    tmp165 = store_get(arg2, arg5);
    tmp166 = check_collision(arg0, arg1, tmp165, arg3);
    tmp167 = ats2jspre_eq_int0_int0(tmp166, 1);
    if(tmp167) {
      stage_remove(tmp165);
      store_remove(arg2, arg5);
      tmpret164 = 1;
    } else {
      tmp170 = ats2jspre_gt_int1_int1(arg5, 0);
      if(tmp170) {
        tmp171 = ats2jspre_sub_int1_int1(arg5, 1);
        // ATStailcalseq_beg
        apy0 = arg0;
        apy1 = arg1;
        apy2 = arg2;
        apy3 = arg3;
        apy4 = arg4;
        apy5 = tmp171;
        arg0 = apy0;
        arg1 = apy1;
        arg2 = apy2;
        arg3 = apy3;
        arg4 = apy4;
        arg5 = apy5;
        funlab_js = 1; // __patsflab_go_28
        // ATStailcalseq_end
      } else {
        tmpret164 = 0;
      } // endif
    } // endif
    if (funlab_js > 0) continue; else return tmpret164;
  } // endwhile-fun
} // end-of-function


function
check_collision(arg0, arg1, arg2, arg3)
{
//
// knd = 0
  var tmpret174
  var tmp175
  var tmp176
  var tmp177
  var tmp178
  var tmp179
  var tmp180
  var tmp181
  var tmp182
  var tmp183
  var tmp184
  var tmp185
  var tmp186
  var tmp187
  var tmp188
  var tmp189
  var tmp190
  var tmp191
  var tmp192
  var tmp193
  var tmp194
//
  // __patsflab_check_collision
  tmp176 = gameobject_get_x(arg0);
  tmp175 = ats2jspre_sub_int0_int0(tmp176, arg1);
  tmp178 = gameobject_get_x(arg0);
  tmp177 = ats2jspre_add_int0_int0(tmp178, arg1);
  tmp180 = gameobject_get_y(arg0);
  tmp179 = ats2jspre_add_int0_int0(tmp180, arg1);
  tmp182 = gameobject_get_y(arg0);
  tmp181 = ats2jspre_sub_int0_int0(tmp182, arg1);
  tmp184 = gameobject_get_x(arg2);
  tmp183 = ats2jspre_sub_int0_int0(tmp184, arg3);
  tmp186 = gameobject_get_x(arg2);
  tmp185 = ats2jspre_add_int0_int0(tmp186, arg3);
  tmp188 = gameobject_get_y(arg2);
  tmp187 = ats2jspre_add_int0_int0(tmp188, arg3);
  tmp190 = gameobject_get_y(arg2);
  tmp189 = ats2jspre_sub_int0_int0(tmp190, arg3);
  tmp194 = ats2jspre_lt_int0_int0(tmp177, tmp183);
  if(tmp194) {
    tmp193 = true;
  } else {
    tmp193 = ats2jspre_gt_int0_int0(tmp175, tmp185);
  } // endif
  if(tmp193) {
    tmp192 = true;
  } else {
    tmp192 = ats2jspre_lt_int0_int0(tmp179, tmp189);
  } // endif
  if(tmp192) {
    tmp191 = true;
  } else {
    tmp191 = ats2jspre_gt_int0_int0(tmp181, tmp187);
  } // endif
  if(tmp191) {
    tmpret174 = 0;
  } else {
    tmpret174 = 1;
  } // endif
  return tmpret174;
} // end-of-function


function
gameobject_translate(arg0, arg1, arg2, arg3)
{
//
// knd = 0
  var tmp197
  var tmp198
  var tmp199
  var tmp200
  var tmp201
  var tmp202
  var tmp203
  var tmp204
  var tmp205
  var tmp206
  var tmp207
  var tmp208
  var tmp209
  var tmp210
  var tmp211
//
  // __patsflab_gameobject_translate
  tmp197 = ats2jspre_gt_int0_int0(arg2, 0);
  if(tmp197) {
    tmp201 = gameobject_get_x(arg0);
    tmp200 = ats2jspre_add_int0_int0(tmp201, arg2);
    tmp199 = ats2jspre_add_int0_int0(tmp200, arg1);
    tmp198 = ats2jspre_gt_int0_int0(tmp199, 640);
    if(tmp198) {
      tmp202 = ats2jspre_sub_int0_int0(640, arg1);
      gameobject_set_x(arg0, tmp202);
    } else {
      tmp204 = gameobject_get_x(arg0);
      tmp203 = ats2jspre_add_int0_int0(tmp204, arg2);
      gameobject_set_x(arg0, tmp203);
    } // endif
  } else {
    tmp207 = gameobject_get_x(arg0);
    tmp206 = ats2jspre_add_int0_int0(tmp207, arg2);
    tmp205 = ats2jspre_lt_int0_int0(tmp206, arg1);
    if(tmp205) {
      gameobject_set_x(arg0, arg1);
    } else {
      tmp209 = gameobject_get_x(arg0);
      tmp208 = ats2jspre_add_int0_int0(tmp209, arg2);
      gameobject_set_x(arg0, tmp208);
    } // endif
  } // endif
  tmp211 = gameobject_get_y(arg0);
  tmp210 = ats2jspre_add_int0_int0(tmp211, arg3);
  gameobject_set_y(arg0, tmp210);
  return/*_void*/;
} // end-of-function

// dynloadflag_init
var _057_home_057_grad3_057_knikolla_057_Documents_057_PPL_057_TypeInvaders_057_game_056_dats__dynloadflag = 0;

function
_057_home_057_grad3_057_knikolla_057_Documents_057_PPL_057_TypeInvaders_057_game_056_dats__dynload()
{
//
// knd = 0
//
  // ATSdynload()
  // ATSdynloadflag_sta(_057_home_057_grad3_057_knikolla_057_Documents_057_PPL_057_TypeInvaders_057_game_056_dats__dynloadflag(358))
  if(ATSCKiseqz(_057_home_057_grad3_057_knikolla_057_Documents_057_PPL_057_TypeInvaders_057_game_056_dats__dynloadflag)) {
    _057_home_057_grad3_057_knikolla_057_Documents_057_PPL_057_TypeInvaders_057_game_056_dats__dynloadflag = 1 ; // flag is set
    statmp1 = null;
    statmp0 = ats2jspre_ref(statmp1);
    statmp2 = ats2jspre_ref(0);
    statmp3 = store_init();
    statmp4 = ats2jspre_ref(statmp3);
    statmp5 = ats2jspre_ref(2000);
    statmp6 = store_init();
    statmp7 = ats2jspre_ref(statmp6);
    statmp8 = store_init();
    statmp9 = ats2jspre_ref(statmp8);
    statmp10 = ats2jspre_ref(1);
    init_0();
  } // endif
  return/*_void*/;
} // end-of-function


function
my_dynload()
{
//
// knd = 0
//
  _057_home_057_grad3_057_knikolla_057_Documents_057_PPL_057_TypeInvaders_057_game_056_dats__dynload();
  return/*_void*/;
} // end-of-function


/* ATSextcode_beg() */
// COMMENT_line

function
game_start()
{
  var _ = my_dynload()
}
// COMMENT_line

/* ATSextcode_end() */

/* ****** ****** */

/* end-of-compilation-unit */