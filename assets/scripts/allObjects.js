window.allobjects = function() {
var defaultColors = {
  1000: { r: 40, g: 125, b: 255, a: 1 },
  1001: { r: 0, g: 102, b: 255, a: 1 },
  1002: { r: 255, g: 255, b: 255, a: 1 },
  1003: { r: 255, g: 255, b: 255, a: 1 },
  1004: { r: 255, g: 255, b: 255, a: 1 },
  1005: { r: 0, g: 0, b: 0, a: 1 },
  1006: { r: 0, g: 0, b: 0, a: 1 },
  1007: { r: 255, g: 255, b: 255, a: 1 },
  1009: { r: 255, g: 255, b: 255, a: 1 },
  1010: { r: 0, g: 0, b: 0, a: 1 },
  1011: { r: 255, g: 255, b: 255, a: 0.5 },
  1012: { r: 255, g: 255, b: 255, a: 1 }
};
return {
  _defaultColors: defaultColors,
  1: {
    type: "solid",
    frame: "square_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  2: {
    type: "solid",
    frame: "square_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  3: {
    type: "solid",
    frame: "square_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  4: {
    type: "solid",
    frame: "square_04_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  5: {
    type: "deco",
    frame: "square_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  6: {
    type: "solid",
    frame: "square_06_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  7: {
    type: "solid",
    frame: "square_07_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  8: {
    type: "hazard",
    frame: "spike_01_001.png",
    gridW: 1,
    gridH: 1,
    spriteW: 30,
    spriteH: 30,
    hitbox: {
      type: "Box",
      width: 6,
      height: 12,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  9: {
    type: "hazard",
    frame: "pit_01_001.png",
    gridW: 0,
    gridH: 0,
    black: true,
    spriteW: 30,
    spriteH: 27,
    randomFrames: ["pit_01_001.png", "pit_02_001.png", "pit_03_001.png"],
    hitbox: {
      type: "Box",
      width: 9,
      height: 10.8,
      x: 0,
      y: 0
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: false
  },
  10: {
    type: "portal",
    frame: "portal_01_front_001.png",
    gridW: 0.8333333134651184,
    gridH: 2.5,
    sub: "gravity_flip",
    portalParticle: true,
    portalParticleColor: 2736127,
    hitbox: {
      type: "Box",
      width: 25,
      height: 75,
      x: 0,
      y: 0
    },
    default_z_layer: 5,
    default_z_order: 10,
    default_base_color_channel: 0
  },
  11: {
    type: "portal",
    frame: "portal_02_front_001.png",
    gridW: 0.8333333134651184,
    gridH: 2.5,
    sub: "gravity_normal",
    portalParticle: true,
    portalParticleColor: 15462948,
    hitbox: {
      type: "Box",
      width: 25,
      height: 75,
      x: 0,
      y: 0
    },
    default_z_layer: 5,
    default_z_order: 10,
    default_base_color_channel: 0
  },
  12: {
    type: "portal",
    frame: "portal_03_front_001.png",
    gridW: 1,
    gridH: 3,
    sub: "cube",
    portalParticle: true,
    portalParticleColor: 5111552,
    hitbox: {
      type: "Box",
      width: 34,
      height: 86,
      x: 0,
      y: 0
    },
    default_z_layer: 5,
    default_z_order: 10,
    default_base_color_channel: 0
  },
  13: {
    type: "portal",
    frame: "portal_04_front_001.png",
    gridW: 1,
    gridH: 3,
    sub: "fly",
    portalParticle: true,
    portalParticleColor: 16711935,
    hitbox: {
      type: "Box",
      width: 34,
      height: 86,
      x: 0,
      y: 0
    },
    default_z_layer: 5,
    default_z_order: 10,
    default_base_color_channel: 0
  },
  15: {
    type: "deco",
    frame: "rod_01_001.png",
    gridW: 0,
    gridH: 0,
    z: -6,
    children: [
      {
        frame: "rod_ball_01_001.png",
        localDy: -62,
        blend: "additive",
        z: 1,
        audioScale: true
      }
    ],
    color_type: "Base",
    default_base_color_channel: 1004,
    can_color: true,
    playerColor: true
  },
  16: {
    type: "deco",
    frame: "rod_02_001.png",
    gridW: 0,
    gridH: 0,
    z: -6,
    children: [
      {
        frame: "rod_ball_01_001.png",
        localDy: -46.5,
        blend: "additive",
        z: 1,
        audioScale: true
      }
    ],
    color_type: "Base",
    default_base_color_channel: 1004,
    can_color: true,
    playerColor: true
  },
  17: {
    type: "deco",
    frame: "rod_03_001.png",
    gridW: 0,
    gridH: 0,
    z: -6,
    children: [
      {
        frame: "rod_ball_01_001.png",
        localDy: -32.5,
        blend: "additive",
        z: 1,
        audioScale: true
      }
    ],
    color_type: "Base",
    default_base_color_channel: 1004,
    can_color: true,
    playerColor: true
  },
  18: {
    type: "deco",
    frame: "d_spikes_01_001.png",
    gridW: 0,
    gridH: 0,
    blend: "additive",
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    can_color: true,
    playerColor: true
  },
  19: {
    type: "deco",
    frame: "d_spikes_02_001.png",
    gridW: 0,
    gridH: 0,
    blend: "additive",
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    can_color: true,
    playerColor: true
  },
  20: {
    type: "deco",
    frame: "d_spikes_03_001.png",
    gridW: 0,
    gridH: 0,
    blend: "additive",
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    can_color: true,
    playerColor: true
  },
  21: {
    type: "deco",
    frame: "d_spikes_04_001.png",
    gridW: 0,
    gridH: 0,
    blend: "additive",
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    can_color: true,
    playerColor: true
  },
  22: {
    type: "trigger",
    frame: null,
    gridW: 0,
    gridH: 0,
    enterEffect: 0,
    default_z_layer: 5,
    default_z_order: 2,
    sub: "start_pos"
  },
  23: {
    type: "trigger",
    frame: null,
    gridW: 0,
    gridH: 0,
    enterEffect: 1,
    default_z_layer: 5,
    default_z_order: 2,
    sub: "speed_slow"
  },
  24: {
    type: "trigger",
    frame: null,
    gridW: 0,
    gridH: 0,
    enterEffect: 2,
    default_z_layer: 5,
    default_z_order: 2,
    sub: "speed_normal"
  },
  25: {
    type: "trigger",
    frame: null,
    gridW: 0,
    gridH: 0,
    enterEffect: 3,
    default_z_layer: 5,
    default_z_order: 2,
    sub: "speed_fast"
  },
  26: {
    type: "trigger",
    frame: null,
    gridW: 0,
    gridH: 0,
    enterEffect: 4,
    default_z_layer: 5,
    default_z_order: 2,
    sub: "speed_faster"
  },
  27: {
    type: "trigger",
    frame: null,
    gridW: 0,
    gridH: 0,
    enterEffect: 5,
    default_z_layer: 5,
    default_z_order: 2,
    sub: "speed_fastest"
  },
  28: {
    type: "trigger",
    frame: null,
    gridW: 0,
    gridH: 0,
    enterEffect: 6,
    default_z_layer: 5,
    default_z_order: 2,
    sub: "speed_slowest"
  },
  29: {
    type: "trigger",
    frame: null,
    gridW: 0,
    gridH: 0,
    colorIdx: 1000,
    default_z_layer: 5,
    default_z_order: 2,
    sub: "color_bg"
  },
  30: {
    type: "trigger",
    frame: null,
    gridW: 0,
    gridH: 0,
    colorIdx: 1001,
    default_z_layer: 5,
    default_z_order: 2,
    sub: "color_ground"
  },
  31: {
    type: "deco",
    frame: "edit_eStartPosBtn_001.png",
    gridW: 1,
    gridH: 1
  },
  32: {
    type: "trigger",
    frame: null,
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2,
    sub: "ghost_on"
  },
  33: {
    type: "trigger",
    frame: null,
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2,
    sub: "ghost_off"
  },
  34: {
    type: "deco",
    frame: "edit_eStartPosBtn_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 37,
      height: 23,
      x: 0,
      y: 0
    },
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 0
  },
  35: {
    type: "pad",
    frame: "bump_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 25,
      height: 4,
      x: 0,
      y: 0
    },
    default_z_layer: 3,
    default_z_order: 12,
    default_base_color_channel: 0
  },
  36: {
    type: "ring",
    frame: "ring_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 36,
      height: 36,
      x: 0,
      y: 0
    },
    default_z_layer: 3,
    default_z_order: 12
  },
  39: {
    type: "hazard",
    frame: "spike_02_001.png",
    gridW: 1,
    gridH: 1,
    spriteW: 30,
    spriteH: 14,
    hitbox: {
      type: "Box",
      width: 6,
      height: 5.6,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  40: {
    type: "solid",
    frame: "plank_01_001.png",
    gridW: 1,
    gridH: 0.5,
    children: [
      {
        frame: "plank_01_color_001.png",
        tint: 0
      }
    ],
    hitbox: {
      type: "Box",
      width: 30,
      height: 14,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  41: {
    type: "deco",
    frame: "chain_01_001.png",
    gridW: 0,
    gridH: 0,
    blend: "additive",
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    can_color: true,
    playerColor: true
  },
  44: {
    type: "deco",
    frame: null,
    gridW: 0,
    gridH: 0
  },
  45: {
    type: "portal",
    frame: "portal_05_front_001.png",
    gridW: 1,
    gridH: 3,
    sub: "mirrora",
    hitbox: {
      type: "Box",
      width: 44,
      height: 92,
      x: 0,
      y: 0
    },
    default_z_layer: 5,
    default_z_order: 10,
    default_base_color_channel: 0
  },
  46: {
    type: "portal",
    frame: "portal_06_front_001.png",
    gridW: 1,
    gridH: 3,
    sub: "mirrorb",
    hitbox: {
      type: "Box",
      width: 44,
      height: 92,
      x: 0,
      y: 0
    },
    default_z_layer: 5,
    default_z_order: 10,
    default_base_color_channel: 0
  },
  47: {
    type: "portal",
    frame: "portal_07_front_001.png",
    gridW: 1,
    gridH: 3,
    sub: "ball",
    portalParticle: true,
    portalParticleColor: 16711680,
    hitbox: {
      type: "Box",
      width: 34,
      height: 86,
      x: 0,
      y: 0
    },
    default_z_layer: 5,
    default_z_order: 10,
    default_base_color_channel: 0
  },
  48: {
    type: "deco",
    frame: "d_cloud_01_001.png",
    gridW: 0,
    gridH: 0,
    blend: "additive",
    tint: 0,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    can_color: true,
    playerColor: true
  },
  49: {
    type: "deco",
    frame: "d_cloud_02_001.png",
    gridW: 0,
    gridH: 0,
    blend: "additive",
    tint: 0,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    can_color: true,
    playerColor: true
  },
  50: {
    type: "deco",
    frame: "d_ball_01_001.png",
    gridW: 0,
    gridH: 0,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    can_color: true,
    musicPulse: true
  },
  51: {
    type: "deco",
    frame: "d_ball_02_001.png",
    gridW: 0,
    gridH: 0,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1006,
    can_color: true,
    musicPulse: true
  },
  52: {
    type: "deco",
    frame: "d_ball_03_001.png",
    gridW: 0,
    gridH: 0,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1006,
    can_color: true,
    musicPulse: true
  },
  53: {
    type: "deco",
    frame: "d_ball_04_001.png",
    gridW: 0,
    gridH: 0,
    blend: "additive",
    tint: 0,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1006,
    can_color: true,
    musicPulse: true
  },
  54: {
    can_color: true,
    default_base_color_channel: 1006,
    frame: "d_ball_05_001.png",
    glow_frame: "d_ball_05_glow_001.png",
    gridH: 0.949999988079071,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 9,
    color_type: "Detail",
    swap_base_detail: true,
    musicPulse: true
  },
  55: {
    type: "deco",
    frame: "d_ball_06_001.png",
    gridW: 0,
    gridH: 0,
    default_z_layer: 5,
    default_z_order: 2
  },
  56: {
    type: "deco",
    frame: "d_ball_07_001.png",
    gridW: 0,
    gridH: 0,
    default_z_layer: 5,
    default_z_order: 2
  },
  57: {
    type: "deco",
    frame: "d_ball_08_001.png",
    gridW: 0,
    gridH: 0,
    default_z_layer: 5,
    default_z_order: 2
  },
  58: {
    type: "deco",
    frame: "d_ball_09_001.png",
    gridW: 0,
    gridH: 0,
    default_z_layer: 5,
    default_z_order: 2
  },
  59: {
    type: "deco",
    frame: "edit_eeFRHInvBtn_001.png",
    gridW: 1,
    gridH: 1,
    glow: true,
    default_z_layer: 5,
    default_z_order: 2
  },
  60: {
    type: "deco",
    frame: "d_ball_06_001.png",
    gridW: 0,
    gridH: 0,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1006,
    can_color: true,
    musicPulse: true
  },
  61: {
    type: "hazard",
    frame: "pit_04_001.png",
    gridW: 0,
    gridH: 0,
    black: true,
    spriteW: 30,
    spriteH: 18,
    hitbox: {
      type: "Box",
      width: 9,
      height: 7.2,
      x: 0,
      y: 0
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 2,
    can_color: false
  },
  62: {
    type: "solid",
    frame: "square_b_01_001.png",
    gridW: 1,
    gridH: 0.5,
    hitbox: {
      type: "Box",
      width: 30,
      height: 16,
      x: 0,
      y: 0
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 2,
    children: [
      {
        texture: "blockOutline_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 7.25,
        z: 1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: false
  },
  63: {
    type: "solid",
    frame: "square_b_02_001.png",
    gridW: 1,
    gridH: 0.5,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 2,
    children: [
      {
        texture: "blockOutline_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: false
  },
  64: {
    type: "solid",
    frame: "square_b_03_001.png",
    gridW: 1,
    gridH: 0.5,
    hitbox: {
      type: "Box",
      width: 15,
      height: 15,
      x: 0,
      y: 0
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 2,
    children: [
      {
        texture: "blockOutline_06_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: -7.5,
        z: 1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: false
  },
  65: {
    type: "solid",
    frame: "square_b_04_001.png",
    gridW: 1,
    gridH: 0.5,
    hitbox: {
      type: "Box",
      width: 30,
      height: 16,
      x: 0,
      y: 0
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 2,
    children: [
      {
        texture: "blockOutline_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 7.25,
        z: 1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: false
  },
  66: {
    type: "solid",
    frame: "square_b_05_001.png",
    gridW: 1,
    gridH: 0.5,
    hitbox: {
      type: "Box",
      width: 30,
      height: 16,
      x: 0,
      y: 0
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 2,
    children: [
      {
        texture: "blockOutline_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 7.25,
        z: 1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: false
  },
  67: {
    type: "pad",
    frame: "gravbump_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 25,
      height: 6,
      x: 0,
      y: 0
    },
    default_z_layer: 3,
    default_z_order: 12,
    default_base_color_channel: 0
  },
  68: {
    type: "solid",
    frame: "square_b_06_001.png",
    gridW: 1,
    gridH: 0.5,
    hitbox: {
      type: "Box",
      width: 30,
      height: 16,
      x: 0,
      y: 0
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 2,
    children: [
      {
        texture: "blockOutline_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 7.25,
        z: 1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: false
  },
  69: {
    type: "solid",
    frame: "blockOutline_01_001.png",
    gridW: 1,
    gridH: 1,
    glow: true,
    children: [
      {
        frame: "square_c_05_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      }
    ],
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    can_color: true
  },
  70: {
    type: "solid",
    frame: "lightsquare_01_02_001.png",
    gridW: 1,
    gridH: 1,
    glow: true,
    children: [
      {
        frame: "square_c_05_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      }
    ],
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  71: {
    type: "solid",
    frame: "blockOutline_03_001.png",
    gridW: 1,
    gridH: 1,
    glow: true,
    children: [
      {
        frame: "square_c_05_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      }
    ],
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    can_color: true
  },
  72: {
    type: "solid",
    frame: "blockOutline_06_001.png",
    gridW: 1,
    gridH: 1,
    glow: true,
    children: [
      {
        frame: "square_c_05_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      }
    ],
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    can_color: true
  },
  73: {
    type: "deco",
    frame: "square_c_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  74: {
    type: "solid",
    frame: "blockOutline_04_001.png",
    gridW: 1,
    gridH: 1,
    glow: true,
    children: [
      {
        frame: "square_c_05_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      }
    ],
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    can_color: true
  },
  75: {
    type: "solid",
    frame: "blockOutline_05_001.png",
    gridW: 1,
    gridH: 1,
    glow: true,
    children: [
      {
        frame: "square_c_05_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      },
      {
        frame: "blockOutline_05_001.png",
        localDy: 0,
        tint: 65280,
        z: 1
      }
    ],
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    can_color: true
  },
  76: {
    can_color: false,
    children: [
      {
        frame: "square_d_05_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      },
      {
        frame: "lightsquare_04_02_001.png",
        localDy: 0,
        tint: 65280,
        z: 1
      },
      {
        frame: "lightsquare_04_02_001.png",
        localDy: 0,
        tint: 65280,
        z: 1
      },
      {
        frame: "lightsquare_04_02_001.png",
        localDy: 0,
        tint: 65280,
        z: 1
      }
    ],
    frame: "lightsquare_04_02_001.png",
    glow_frame: "lightsquare_04_02_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "solid",
    z: 2,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base"
  },
  77: {
    can_color: false,
    children: [
      {
        frame: "square_d_05_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      }
    ],
    frame: "lightsquare_04_02_001.png",
    glow_frame: "lightsquare_04_02_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "solid",
    z: 2,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base"
  },
  78: {
    can_color: false,
    children: [
      {
        frame: "square_d_05_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      },
      {
        frame: "lightsquare_04_02_001.png",
        localDy: 0,
        tint: 65280,
        z: 1
      }
    ],
    frame: "lightsquare_04_02_001.png",
    glow_frame: "lightsquare_04_02_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "solid",
    z: 2,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base"
  },
  80: {
    can_color: false,
    frame: "square_d_05_001.png",
    glow_frame: "square_d_05_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Base"
  },
  81: {
    can_color: false,
    children: [
      {
        frame: "square_d_05_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      },
      {
        frame: "lightsquare_04_02_001.png",
        localDy: 0,
        tint: 65280,
        z: 1
      },
      {
        frame: "lightsquare_04_02_001.png",
        localDy: 0,
        tint: 65280,
        z: 1
      }
    ],
    frame: "lightsquare_04_02_001.png",
    glow_frame: "lightsquare_04_02_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "solid",
    z: 2,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base"
  },
  82: {
    can_color: false,
    children: [
      {
        frame: "square_d_05_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      },
      {
        frame: "lightsquare_04_02_001.png",
        localDy: 0,
        tint: 65280,
        z: 1
      }
    ],
    frame: "lightsquare_04_sideLine_001.png",
    glow_frame: "lightsquare_04_sideLine_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "solid",
    z: 2,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base"
  },
  83: {
    type: "solid",
    frame: "square_08_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  84: {
    type: "ring",
    frame: "gravring_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 36,
      height: 36,
      x: 0,
      y: 0
    },
    default_z_layer: 3,
    default_z_order: 12
  },
  85: {
    type: "deco",
    frame: "d_cogwheel_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    children: [
      {
        texture: "d_cogwheel_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: -0.18000030517578125,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_cogwheel_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: true,
        x: -0.18000030517578125,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_cogwheel_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: true,
        x: 0,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true,
    playerColor: true
  },
  86: {
    can_color: true,
    children: [
      {
        frame: "d_cogwheel_02_001.png",
        localDy: 0,
        z: -1
      }
    ],
    default_base_color_channel: 1005,
    frame: "d_cogwheel_02_001.png",
    glow_frame: "d_cogwheel_02_glow_001.png",
    gridH: 1.8166667222976685,
    gridW: 1.7833333015441895,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 9,
    color_type: "Detail",
    swap_base_detail: true,
    playerColor: true
  },
  87: {
    can_color: true,
    children: [
      {
        frame: "d_cogwheel_03_001.png",
        localDy: 0,
        blend: "additive",
        z: -1
      }
    ],
    default_base_color_channel: 1005,
    frame: "d_cogwheel_03_001.png",
    glow_frame: "d_cogwheel_03_glow_001.png",
    gridH: 1.25,
    gridW: 1.25,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 9,
    color_type: "Detail",
    swap_base_detail: true,
    playerColor: true
  },
  88: {
    type: "hazard",
    frame: "sawblade_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 27,
      height: 27,
      x: 0,
      y: 0
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "sawblade_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -0.06999969482421875,
        y: 0,
        z: -1,
        rot: -180,
        color_type: "Black"
      }
    ],
    can_color: true
  },
  89: {
    type: "hazard",
    frame: "sawblade_02_001.png",
    gridW: 2,
    gridH: 2,
    hitbox: {
      type: "Box",
      width: 21.6,
      height: 21.6,
      x: 0,
      y: 0
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    can_color: true
  },
  90: {
    can_color: true,
    children: [
      {
        frame: "block005b_05_001.png",
        localDy: 0,
        tint: 0,
        z: -1
      }
    ],
    default_base_color_channel: 1003,
    frame: "blockOutline_01_001.png",
    glow_frame: "blockOutline_01_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "solid",
    z: 2,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base"
  },
  91: {
    can_color: true,
    children: [
      {
        frame: "block005b_05_001.png",
        localDy: 0,
        tint: 0,
        z: -1
      }
    ],
    default_base_color_channel: 1004,
    frame: "lightsquare_01_02_001.png",
    glow_frame: "block008_topcolor_15_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "solid",
    z: 2,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base"
  },
  92: {
    can_color: true,
    children: [
      {
        frame: "block005b_05_001.png",
        localDy: 0,
        tint: 0,
        z: -1
      }
    ],
    default_base_color_channel: 1003,
    frame: "blockOutline_03_001.png",
    glow_frame: "blockOutline_03_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "solid",
    z: 2,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base"
  },
  93: {
    type: "solid",
    frame: "blockOutline_06_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "block005b_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black"
      }
    ],
    can_color: true
  },
  94: {
    type: "solid",
    frame: "block005b_05_001.png",
    gridW: 1,
    gridH: 1,
    glow: true,
    black: true,
    z: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Black",
    can_color: false
  },
  95: {
    can_color: true,
    children: [
      {
        frame: "block005b_05_001.png",
        localDy: 0,
        tint: 0,
        z: -1
      }
    ],
    default_base_color_channel: 1003,
    frame: "blockOutline_04_001.png",
    glow_frame: "blockOutline_04_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "solid",
    z: 2,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base"
  },
  96: {
    can_color: true,
    children: [
      {
        frame: "block005b_05_001.png",
        localDy: 0,
        tint: 0,
        z: -1
      },
      {
        frame: "blockOutline_05_001.png",
        localDy: 0,
        tint: 65280,
        z: 1
      }
    ],
    default_base_color_channel: 1003,
    frame: "blockOutline_05_001.png",
    glow_frame: "blockOutline_05_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "solid",
    z: 2,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base"
  },
  97: {
    type: "deco",
    frame: "d_cogwheel_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true,
    playerColor: true
  },
  98: {
    type: "hazard",
    frame: "sawblade_03_001.png",
    gridW: 3,
    gridH: 3,
    hitbox: {
      type: "Box",
      width: 11.78,
      height: 11.78,
      x: 0,
      y: 0
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    can_color: true
  },
  99: {
    type: "portal",
    frame: "portal_08_front_001.png",
    gridW: 1,
    gridH: 3,
    sub: "grow",
    portalParticle: true,
    portalParticleColor: 5111552,
    hitbox: {
      type: "Box",
      width: 31,
      height: 90,
      x: 0,
      y: 0
    },
    default_z_layer: 5,
    default_z_order: 10,
    default_base_color_channel: 0
  },
  101: {
    can_color: false,
    default_base_color_channel: 0,
    frame: "portal_09_front_001.png",
    glow_frame: "portal_09_front_glow_001.png",
    gridH: 3,
    gridW: 1.0333333015441895,
    spritesheet: "GJ_GameSheet02-uhd",
    type: "portal",
    sub: "shrink",
    z: 10,
    hitbox: {
      type: "Box",
      width: 31,
      height: 90,
      x: 0,
      y: 0
    }
  },
  103: {
    type: "hazard",
    frame: "spike_03_001.png",
    gridW: 0.5,
    gridH: 0.5,
    spriteW: 20,
    spriteH: 19,
    hitbox: {
      type: "Box",
      width: 4,
      height: 7.6,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  104: {
    type: "trigger",
    frame: null,
    gridW: 0,
    gridH: 0,
    sub: "color_line"
  },
  105: {
    type: "trigger",
    frame: null,
    gridW: 0,
    gridH: 0,
    default_z_layer: 5,
    default_z_order: 2,
    sub: "color_obj"
  },
  106: {
    type: "deco",
    frame: "d_02_chain_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    can_color: true,
    playerColor: true
  },
  107: {
    type: "deco",
    frame: "d_02_chain_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    can_color: true,
    playerColor: true
  },
  110: {
    type: "deco",
    frame: "d_chain_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    can_color: true,
    playerColor: true
  },
  111: {
    can_color: false,
    default_base_color_channel: 0,
    frame: "portal_10_front_001.png",
    glow_frame: "portal_10_front_glow_001.png",
    gridH: 2.866666555404663,
    gridW: 1.1333333253860474,
    spritesheet: "GJ_GameSheet02-uhd",
    type: "portal",
    z: 10,
    hitbox: {
      type: "Box",
      width: 34,
      height: 86,
      x: 0,
      y: 0
    },
    sub: "ufo"
  },
  113: {
    can_color: true,
    default_base_color_channel: 1004,
    frame: "d_brick_01_001.png",
    glow_frame: "d_brick_01_glow_001.png",
    gridH: 1.3166667222976685,
    gridW: 4.150000095367432,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    blend: "additive",
    z: 9,
    color_type: "Detail",
    swap_base_detail: true,
    playerColor: true
  },
  114: {
    type: "solid",
    frame: "d_brick_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    can_color: true,
    playerColor: true
  },
  115: {
    type: "solid",
    frame: "d_brick_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    can_color: true,
    playerColor: true
  },
  116: {
    type: "solid",
    frame: "square_f_01_001.png",
    gridW: 1,
    gridH: 1,
    spritesheet: "GJ_GameSheet-uhd",
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  117: {
    type: "solid",
    frame: "square_f_02_001.png",
    gridW: 1,
    gridH: 1,
    spritesheet: "GJ_GameSheet-uhd",
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  118: {
    type: "solid",
    frame: "square_f_03_001.png",
    gridW: 1,
    gridH: 1,
    spritesheet: "GJ_GameSheet-uhd",
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  119: {
    type: "solid",
    frame: "blockOutline_06_001.png",
    gridW: 1,
    gridH: 1,
    spritesheet: "GJ_GameSheet-uhd",
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "square_f_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  120: {
    type: "deco",
    frame: "square_f_05_001.png",
    gridW: 0,
    gridH: 0,
    spritesheet: "GJ_GameSheet-uhd",
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    can_color: false
  },
  121: {
    type: "solid",
    frame: "square_f_06_001.png",
    gridW: 1,
    gridH: 1,
    spritesheet: "GJ_GameSheet-uhd",
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  122: {
    type: "solid",
    frame: "square_f_07_001.png",
    gridW: 1,
    gridH: 1,
    spritesheet: "GJ_GameSheet-uhd",
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  123: {
    type: "deco",
    frame: "d_thorn_01_001.png",
    gridW: 0,
    gridH: 0,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 1,
    default_base_color_channel: 1005,
    can_color: true
  },
  124: {
    type: "deco",
    frame: "d_thorn_02_001.png",
    gridW: 0,
    gridH: 0,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 1,
    default_base_color_channel: 1005,
    can_color: true
  },
  125: {
    type: "deco",
    frame: "d_smallBall_01_001.png",
    gridW: 0,
    gridH: 0,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 1,
    default_base_color_channel: 1005,
    can_color: true
  },
  126: {
    type: "deco",
    frame: "d_smallBall_02_001.png",
    gridW: 0,
    gridH: 0,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 1,
    default_base_color_channel: 1005,
    can_color: true
  },
  127: {
    type: "deco",
    frame: "d_smallBall_03_001.png",
    gridW: 0,
    gridH: 0,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 1,
    default_base_color_channel: 1005,
    can_color: true
  },
  128: {
    type: "deco",
    frame: "d_smallBall_04_001.png",
    gridW: 0,
    gridH: 0,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 1,
    default_base_color_channel: 1005,
    can_color: true
  },
  129: {
    type: "deco",
    frame: "d_cloud_03_001.png",
    gridW: 0,
    gridH: 0,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  130: {
    type: "deco",
    frame: "d_cloud_04_001.png",
    gridW: 0,
    gridH: 0,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  131: {
    type: "deco",
    frame: "d_cloud_05_001.png",
    gridW: 0,
    gridH: 0,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  132: {
    type: "deco",
    frame: "d_arrow_01_001.png",
    gridW: 0,
    gridH: 0,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 10,
    default_base_color_channel: 1006,
    can_color: true
  },
  133: {
    type: "deco",
    frame: "d_exmark_01_001.png",
    gridW: 0,
    gridH: 0,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 10,
    default_base_color_channel: 1006,
    can_color: true
  },
  134: {
    type: "deco",
    frame: "d_art_01_001.png",
    gridW: 0.46666666865348816,
    gridH: 1.0333333015441895,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1006,
    can_color: true
  },
  135: {
    type: "deco",
    frame: "fakeSpike_01_001.png",
    gridW: 0,
    gridH: 0,
    black: true,
    hitbox: {
      type: "Box",
      width: 14.1,
      height: 20,
      x: 0,
      y: 0
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  136: {
    type: "deco",
    frame: "d_qmark_01_001.png",
    gridW: 0,
    gridH: 0,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 10,
    default_base_color_channel: 1006,
    can_color: true
  },
  137: {
    type: "deco",
    frame: "d_wheel_01_001.png",
    gridW: 1.350000023841858,
    gridH: 2.6666667461395264,
    children: [
      {
        frame: "d_wheel_01_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      },
      {
        frame: "d_wheel_01_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      }
    ],
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1006,
    can_color: true
  },
  138: {
    type: "deco",
    frame: "d_wheel_02_001.png",
    gridW: 1.7000000476837158,
    gridH: 1.7000000476837158,
    children: [
      {
        frame: "d_wheel_02_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      }
    ],
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1006,
    can_color: true
  },
  139: {
    type: "deco",
    frame: "d_wheel_03_001.png",
    gridW: 0,
    gridH: 0,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1006,
    can_color: true
  },
  140: {
    type: "pad",
    frame: "bump_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 25,
      height: 5,
      x: 0,
      y: 0
    },
    default_z_layer: 3,
    default_z_order: 12,
    default_base_color_channel: 0
  },
  141: {
    type: "ring",
    frame: "ring_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 36,
      height: 36,
      x: 0,
      y: 0
    },
    default_z_layer: 3,
    default_z_order: 12
  },
  142: {
    type: "coin",
    frame: "secretCoin_01_001.png",
    gridW: 1,
    gridH: 1,
    animFrames: ["secretCoin_01_001.png", "secretCoin_01_002.png", "secretCoin_01_003.png", "secretCoin_01_004.png"],
    animInterval: 100
  },
  143: {
    can_color: true,
    default_base_color_channel: 1004,
    frame: "brick_02_001.png",
    glow_frame: "brick_02_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "solid",
    z: 2,
    color_type: "Base",
    breakable: true
  },
  144: {
    type: "deco",
    frame: "d_circle_02_001.png",
    gridW: 0,
    gridH: 0,
    hitbox: {
      type: "Box",
      width: 6,
      height: 12,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  145: {
    type: "deco",
    frame: "d_smallBall_05_001.png",
    gridW: 0,
    gridH: 0,
    hitbox: {
      type: "Box",
      width: 4,
      height: 7.6,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  146: {
    type: "solid",
    frame: "invis_square_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  147: {
    type: "solid",
    frame: "invis_plank_01_001.png",
    gridW: 1,
    gridH: 0.5,
    hitbox: {
      type: "Box",
      width: 30,
      height: 14,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  148: {
    can_color: true,
    default_base_color_channel: 1006,
    frame: "d_ball_07_001.png",
    glow_frame: "d_ball_07_glow_001.png",
    gridH: 0.9166666865348816,
    gridW: 0.9166666865348816,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 9,
    color_type: "Detail",
    swap_base_detail: true
  },
  149: {
    can_color: true,
    default_base_color_channel: 1006,
    frame: "d_ball_08_001.png",
    glow_frame: "d_ball_08_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 9,
    color_type: "Detail",
    swap_base_detail: true
  },
  150: {
    type: "deco",
    frame: "d_cross_01_001.png",
    gridW: 0,
    gridH: 0,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 10,
    default_base_color_channel: 1006,
    can_color: true
  },
  151: {
    type: "deco",
    frame: "d_spikeart_01_001.png",
    gridW: 0,
    gridH: 0,
    blend: "additive",
    tint: 65280,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  152: {
    type: "deco",
    frame: "d_spikeart_02_001.png",
    gridW: 0,
    gridH: 0,
    blend: "additive",
    tint: 65280,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  153: {
    type: "deco",
    frame: "d_spikeart_03_001.png",
    gridW: 0,
    gridH: 0,
    blend: "additive",
    tint: 65280,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  154: {
    type: "hazard",
    frame: "d_spikewheel_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    children: [
      {
        texture: "d_spikewheel_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: -0.18000030517578125,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_spikewheel_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: true,
        x: -0.18000030517578125,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_spikewheel_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: true,
        x: 0,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  155: {
    type: "hazard",
    frame: "d_spikewheel_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  156: {
    type: "hazard",
    frame: "d_spikewheel_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  157: {
    type: "deco",
    frame: "d_wave_01_001.png",
    gridW: 0,
    gridH: 0,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  158: {
    type: "deco",
    frame: "d_wave_02_001.png",
    gridW: 0,
    gridH: 0,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  159: {
    type: "deco",
    frame: "d_wave_03_001.png",
    gridW: 0,
    gridH: 0,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  160: {
    type: "solid",
    frame: "blockOutline_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "square_g_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  161: {
    can_color: true,
    children: [
      {
        frame: "square_g_05_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      }
    ],
    default_base_color_channel: 1004,
    frame: "lightsquare_01_02_001.png",
    glow_frame: "lightsquare_01_02_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "solid",
    z: 2,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base"
  },
  162: {
    type: "solid",
    frame: "blockOutline_03_001.png",
    gridW: 1,
    gridH: 1,
    spritesheet: "GJ_GameSheet-uhd",
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "square_g_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  163: {
    type: "solid",
    frame: "blockOutline_06_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "square_g_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  164: {
    type: "solid",
    frame: "square_g_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  165: {
    type: "solid",
    frame: "blockOutline_04_001.png",
    gridW: 1,
    gridH: 1,
    spritesheet: "GJ_GameSheet-uhd",
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "square_g_06_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  166: {
    type: "solid",
    frame: "blockOutline_05_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "square_g_07_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "blockOutline_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  167: {
    type: "solid",
    frame: "blockOutline_06_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "square_g_08_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "blockOutline_06_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  168: {
    type: "solid",
    frame: "blockOutline_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "square_g_09_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  169: {
    type: "solid",
    frame: "blockOutline_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "square_g_10_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  170: {
    type: "solid",
    frame: "square_h_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 21,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  171: {
    type: "solid",
    frame: "square_h_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 21,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  172: {
    can_color: true,
    default_base_color_channel: 1004,
    frame: "square_h_03_001.png",
    glow_frame: "square_h_03_glow_001.png",
    gridH: 0.699999988079071,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "solid",
    z: 2,
    hitbox: {
      type: "Box",
      width: 30,
      height: 21,
      x: 0,
      y: 0
    },
    color_type: "Base"
  },
  173: {
    can_color: true,
    default_base_color_channel: 1004,
    frame: "square_h_04_001.png",
    glow_frame: "square_h_04_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "solid",
    z: 2,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base"
  },
  174: {
    type: "solid",
    frame: "square_h_05_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 21,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  175: {
    type: "solid",
    frame: "square_h_06_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  176: {
    type: "solid",
    frame: "square_h_07_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 14,
      height: 21,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  177: {
    type: "deco",
    frame: "iceSpike_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 6,
      height: 12,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  178: {
    type: "deco",
    frame: "iceSpike_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 6,
      height: 6.4,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  179: {
    type: "deco",
    frame: "iceSpike_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 4,
      height: 8,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  180: {
    type: "deco",
    frame: "d_cartwheel_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1006,
    children: [
      {
        texture: "d_cartwheel_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: -0.18000030517578125,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_cartwheel_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: true,
        x: -0.18000030517578125,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_cartwheel_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: true,
        x: 0,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  181: {
    type: "deco",
    frame: "d_cartwheel_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1006,
    can_color: true
  },
  182: {
    type: "deco",
    frame: "d_cartwheel_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1006,
    can_color: true
  },
  183: {
    type: "deco",
    frame: "blade_b_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 15.3
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "blade_b_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: -0.18000030517578125,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "blade_b_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: true,
        x: -0.18000030517578125,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "blade_b_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: true,
        x: 0,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  184: {
    type: "deco",
    frame: "blade_b_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 20.4
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    can_color: true
  },
  185: {
    type: "deco",
    frame: "blade_b_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 2.85
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    can_color: true
  },
  186: {
    type: "deco",
    frame: "blade_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 32.3
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "blade_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: -0.18000030517578125,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "blade_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: true,
        x: -0.18000030517578125,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "blade_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: true,
        x: 0,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  187: {
    can_color: true,
    children: [
      {
        frame: "blade_02_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      }
    ],
    default_base_color_channel: 1004,
    frame: "blade_02_001.png",
    glow_frame: "blade_02_glow_001.png",
    gridH: 2.0333333015441895,
    gridW: 2.0333333015441895,
    spritesheet: "GJ_GameSheet-uhd",
    type: "hazard",
    z: 1,
    hitbox: {
      type: "Circle",
      radius: 21.87
    },
    color_type: "Base"
  },
  188: {
    type: "deco",
    frame: "blade_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 12.6
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    can_color: true
  },
  190: {
    type: "deco",
    frame: "d_art_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1006,
    can_color: true
  },
  191: {
    type: "deco",
    frame: "fakeSpike_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -4,
    default_base_color_channel: 1004,
    can_color: true
  },
  192: {
    type: "solid",
    frame: "square_h_08_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 21,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  193: {
    type: "deco",
    frame: "square_g_11_001.png",
    gridH: 1,
    gridW: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  194: {
    type: "solid",
    frame: "square_h_09_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 21,
      height: 21,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  195: {
    type: "solid",
    frame: "square_01_001.png",
    gridW: 0.5,
    gridH: 0.5,
    hitbox: {
      type: "Box",
      width: 15,
      height: 15,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "square_01_small_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black"
      }
    ],
    can_color: true
  },
  196: {
    type: "solid",
    frame: "plank_01_001.png",
    gridW: 0.5,
    gridH: 0.25,
    hitbox: {
      type: "Box",
      width: 15,
      height: 8,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "plank_01_small_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black"
      }
    ],
    can_color: true
  },
  197: {
    can_color: true,
    default_base_color_channel: 1004,
    frame: "square_h_10_001.png",
    glow_frame: "square_h_10_glow_001.png",
    gridH: 0.699999988079071,
    gridW: 0.7333333492279053,
    spritesheet: "GJ_GameSheet-uhd",
    type: "solid",
    z: 2,
    hitbox: {
      type: "Box",
      width: 22,
      height: 21,
      x: 0,
      y: 0
    },
    color_type: "Base"
  },
  198: {
    type: "deco",
    frame: "fakeSpike_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -4,
    default_base_color_channel: 1004,
    can_color: true
  },
  199: {
    type: "deco",
    frame: "fakeSpike_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -4,
    default_base_color_channel: 1004,
    can_color: true
  },
  200: {
    can_color: false,
    default_base_color_channel: 0,
    frame: "portal_07_front_001.png",
    glow_frame: "boost_01_glow_001.png",
    gridH: 1.4666666984558105,
    gridW: 1.1666666269302368,
    spritesheet: "GJ_GameSheet02-uhd",
    type: "portal",
    z: -6,
    hitbox: {
      type: "Box",
      width: 35,
      height: 44,
      x: 0,
      y: 0
    },
    sub: "speed_slow"
  },
  201: {
    type: "portal",
    frame: "portal_08_front_001.png",
    gridW: 1,
    gridH: 3,
    sub: "speed_normal",
    hitbox: {
      type: "Box",
      width: 33,
      height: 56,
      x: 0,
      y: 0
    },
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 0
  },
  202: {
    type: "portal",
    frame: "portal_09_front_001.png",
    gridW: 1,
    gridH: 3,
    sub: "speed_fast",
    hitbox: {
      type: "Box",
      width: 51,
      height: 56,
      x: 0,
      y: 0
    },
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 0
  },
  203: {
    can_color: false,
    default_base_color_channel: 0,
    frame: "portal_10_front_001.png",
    glow_frame: "boost_04_glow_001.png",
    gridH: 1.8666666746139526,
    gridW: 2.1666667461395264,
    spritesheet: "GJ_GameSheet02-uhd",
    type: "portal",
    z: -6,
    hitbox: {
      type: "Box",
      width: 65,
      height: 56,
      x: 0,
      y: 0
    },
    sub: "speed_faster"
  },
  204: {
    type: "deco",
    frame: "invis_plank_01_small_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 15,
      height: 8,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  205: {
    type: "hazard",
    frame: "invis_spike_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 6,
      height: 5.6,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  206: {
    type: "solid",
    frame: "invis_square_01_small_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 15,
      height: 15,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  207: {
    type: "solid",
    frame: "lightsquare_01_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005b_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  208: {
    type: "solid",
    frame: "lightsquare_01_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005b_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  209: {
    type: "solid",
    frame: "lightsquare_01_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005b_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  210: {
    type: "solid",
    frame: "lightsquare_01_04_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005b_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  211: {
    type: "solid",
    frame: "lightsquare_01_05_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1,
    can_color: true
  },
  212: {
    type: "solid",
    frame: "lightsquare_01_06_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005b_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  213: {
    type: "solid",
    frame: "lightsquare_01_07_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005b_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  215: {
    type: "deco",
    frame: "colorPlank_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 14,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "colorPlank_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  216: {
    can_color: true,
    children: [
      {
        frame: "colorSpike_01_color_001.png",
        localDy: 0,
        tint: 52224,
        z: -100
      }
    ],
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    frame: "colorSpike_01_001.png",
    glow_frame: "colorSpike_01_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "hazard",
    z: 2,
    hitbox: {
      type: "Box",
      width: 6,
      height: 12,
      x: 0,
      y: 0
    },
    color_type: "Base"
  },
  217: {
    type: "deco",
    frame: "colorSpike_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 6,
      height: 5.6,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "colorSpike_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  218: {
    can_color: true,
    children: [
      {
        frame: "colorSpike_03_color_001.png",
        localDy: 0,
        tint: 52224,
        z: -100
      }
    ],
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    frame: "colorSpike_03_001.png",
    glow_frame: "colorSpike_03_glow_001.png",
    gridH: 0.6333333253860474,
    gridW: 0.6666666865348816,
    spritesheet: "GJ_GameSheet-uhd",
    type: "hazard",
    z: 2,
    hitbox: {
      type: "Box",
      width: 4,
      height: 7.6,
      x: 0,
      y: 0
    },
    color_type: "Base"
  },
  219: {
    type: "deco",
    frame: "colorPlank_01_small_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 15,
      height: 8,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "colorPlank_01_small_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  220: {
    type: "deco",
    frame: "colorSquare_01_small_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 15,
      height: 15,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "colorSquare_01_small_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  221: {
    type: "trigger",
    frame: null,
    gridW: 0,
    gridH: 0,
    sub: "color_3dl"
  },
  222: {
    can_color: true,
    children: [
      {
        frame: "d_roundCloud_01_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      },
      {
        frame: "d_roundCloud_01_001.png",
        localDy: 0,
        tint: 65280,
        z: 1
      },
      {
        frame: "d_roundCloud_01_001.png",
        localDy: 0,
        tint: 65280,
        z: 1
      },
      {
        frame: "d_roundCloud_01_001.png",
        localDy: 0,
        tint: 65280,
        z: 1
      }
    ],
    default_base_color_channel: 1005,
    frame: "d_roundCloud_01_001.png",
    glow_frame: "d_roundCloud_01_glow_001.png",
    gridH: 1.5833333730697632,
    gridW: 1.5833333730697632,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 9,
    color_type: "Detail",
    swap_base_detail: true
  },
  223: {
    type: "deco",
    frame: "d_roundCloud_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  224: {
    type: "deco",
    frame: "d_roundCloud_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  225: {
    type: "deco",
    frame: "d_swirve_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1006,
    can_color: true
  },
  226: {
    type: "deco",
    frame: "d_swirve_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1006,
    can_color: true
  },
  227: {
    can_color: true,
    default_base_color_channel: 1007,
    frame: "d_bar_01_001.png",
    glow_frame: "d_bar_01_glow_001.png",
    gridH: 0.7333333492279053,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 9,
    color_type: "Detail",
    swap_base_detail: true
  },
  228: {
    can_color: true,
    default_base_color_channel: 1007,
    frame: "d_bar_02_001.png",
    glow_frame: "d_bar_02_glow_001.png",
    gridH: 0.5,
    gridW: 0.5,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 9,
    color_type: "Detail",
    swap_base_detail: true
  },
  229: {
    type: "deco",
    frame: "d_bar_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  230: {
    type: "deco",
    frame: "d_bar_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  231: {
    type: "deco",
    frame: "d_smallbar_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  232: {
    type: "deco",
    frame: "d_smallbar_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  233: {
    type: "solid",
    frame: "d_square_03_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  234: {
    type: "solid",
    frame: "d_square_03_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  235: {
    type: "solid",
    frame: "d_square_03_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  236: {
    type: "deco",
    frame: "d_circle_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 10,
    default_base_color_channel: 1006,
    can_color: true
  },
  237: {
    type: "deco",
    frame: "d_link_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  238: {
    type: "deco",
    frame: "d_link_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  239: {
    type: "deco",
    frame: "d_link_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  240: {
    type: "deco",
    frame: "d_link_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  241: {
    type: "deco",
    frame: "d_link_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  242: {
    type: "deco",
    frame: "d_bar_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  243: {
    type: "deco",
    frame: "pit_04_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 6,
      height: 7.2,
      x: -5,
      y: 0
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  244: {
    type: "deco",
    frame: "pit_04_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 6,
      height: 6.8,
      x: 5,
      y: 0
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  245: {
    type: "solid",
    frame: "square_f_brick01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  246: {
    type: "solid",
    frame: "square_f_brick02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  247: {
    type: "solid",
    frame: "lightsquare_02_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightsquare_02_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  248: {
    type: "solid",
    frame: "lightsquare_02_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightsquare_02_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  249: {
    type: "solid",
    frame: "lightsquare_02_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightsquare_02_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  250: {
    type: "solid",
    frame: "lightsquare_02_04_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightsquare_02_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  251: {
    type: "solid",
    frame: "lightsquare_02_05_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1,
    can_color: true
  },
  252: {
    type: "solid",
    frame: "lightsquare_02_06_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightsquare_02_06_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  253: {
    type: "solid",
    frame: "lightsquare_02_07_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightsquare_02_07_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  254: {
    type: "solid",
    frame: "lightsquare_02_08_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightsquare_02_08_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  255: {
    type: "solid",
    frame: "lightsquare_03_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightsquare_03_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  256: {
    type: "solid",
    frame: "lightsquare_03_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightsquare_03_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  257: {
    type: "solid",
    frame: "lightsquare_03_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightsquare_03_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  258: {
    type: "solid",
    frame: "lightsquare_03_04_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightsquare_03_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  259: {
    type: "solid",
    frame: "lightsquare_03_05_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1,
    can_color: true
  },
  260: {
    type: "solid",
    frame: "lightsquare_03_06_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightsquare_03_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  261: {
    type: "solid",
    frame: "lightsquare_03_07_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightsquare_03_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  263: {
    type: "solid",
    frame: "lightsquare_04_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightsquare_04_05_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "lightsquare_04_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "lightsquare_04_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: -90,
        color_type: "Base"
      },
      {
        texture: "lightsquare_04_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  264: {
    type: "solid",
    frame: "lightsquare_04_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightsquare_04_05_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  265: {
    type: "solid",
    frame: "lightsquare_04_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightsquare_04_05_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "lightsquare_04_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  266: {
    type: "solid",
    frame: "lightsquare_04_05_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1,
    can_color: true
  },
  267: {
    type: "solid",
    frame: "lightsquare_04_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightsquare_04_05_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "lightsquare_04_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: -90,
        color_type: "Base"
      },
      {
        texture: "lightsquare_04_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  268: {
    type: "solid",
    frame: "lightsquare_04_sideLine_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightsquare_04_05_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "lightsquare_04_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  269: {
    type: "solid",
    frame: "lightsquare_05_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightsquare_05_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  270: {
    type: "solid",
    frame: "lightsquare_05_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightsquare_05_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  271: {
    type: "solid",
    frame: "lightsquare_05_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightsquare_05_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  272: {
    type: "solid",
    frame: "lightsquare_05_04_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightsquare_05_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  273: {
    type: "solid",
    frame: "lightsquare_05_05_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1,
    can_color: true
  },
  274: {
    type: "solid",
    frame: "lightsquare_05_06_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightsquare_05_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  275: {
    type: "solid",
    frame: "lightsquare_05_07_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightsquare_05_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  277: {
    type: "solid",
    frame: "lightsquare_05_brick02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1,
    can_color: true
  },
  278: {
    type: "solid",
    frame: "lightsquare_05_brick03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1,
    can_color: true
  },
  279: {
    type: "solid",
    frame: "d_square_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  280: {
    type: "solid",
    frame: "d_square_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  281: {
    type: "solid",
    frame: "d_square_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  282: {
    type: "solid",
    frame: "d_square_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  283: {
    type: "deco",
    frame: "d_smallbar_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  284: {
    type: "deco",
    frame: "d_smallbar_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  285: {
    type: "deco",
    frame: "d_smallbar_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  286: {
    can_color: false,
    default_base_color_channel: 0,
    frame: "portal_11_front_001.png",
    glow_frame: "portal_11_front_glow_001.png",
    gridH: 3.0333333015441895,
    gridW: 1.3666666746139526,
    spritesheet: "GJ_GameSheet02-uhd",
    type: "portal",
    z: 10,
    hitbox: {
      type: "Box",
      width: 41,
      height: 91,
      x: 0,
      y: 0
    },
    breakable: true
  },
  287: {
    can_color: false,
    default_base_color_channel: 0,
    frame: "portal_12_front_001.png",
    glow_frame: "portal_12_front_glow_001.png",
    gridH: 3.0333333015441895,
    gridW: 1.3666666746139526,
    spritesheet: "GJ_GameSheet02-uhd",
    type: "portal",
    z: 10,
    hitbox: {
      type: "Box",
      width: 41,
      height: 91,
      x: 0,
      y: 0
    },
    breakable: true
  },
  289: {
    type: "solid",
    frame: "blockOutline_14_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "triangle_a_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  291: {
    type: "solid",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "triangle_a_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  294: {
    type: "solid",
    frame: "blockOutline_14_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "triangle_b_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 45,
        color_type: "Black"
      }
    ],
    can_color: true
  },
  295: {
    type: "solid",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "triangle_b_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 26.565000534057617,
        color_type: "Black"
      }
    ],
    can_color: true
  },
  296: {
    type: "solid",
    frame: "triangle_b_square_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "blockOutline_07_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  297: {
    type: "solid",
    frame: "triangle_b_square_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "blockOutline_08_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  299: {
    can_color: true,
    children: [
      {
        frame: "triangle_c_02_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      }
    ],
    default_base_color_channel: 1003,
    frame: "blockOutline_14_001.png",
    glow_frame: "blockOutline_14_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 2,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base"
  },
  301: {
    type: "solid",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "triangle_c_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  305: {
    type: "solid",
    frame: "blockOutline_16_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "triangle_d_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  307: {
    type: "solid",
    frame: "blockOutline_17_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "triangle_d_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  309: {
    can_color: true,
    children: [
      {
        frame: "lighttriangle_01_02_color_001.png",
        localDy: 0,
        tint: 0,
        z: -1
      }
    ],
    default_base_color_channel: 1003,
    frame: "blockOutline_14_001.png",
    glow_frame: "blockOutline_14_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 2,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base"
  },
  311: {
    type: "solid",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "lighttriangle_01_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black"
      }
    ],
    can_color: true
  },
  315: {
    type: "solid",
    frame: "blockOutline_14_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "triangle_f_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  317: {
    type: "solid",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "triangle_f_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  321: {
    can_color: true,
    children: [
      {
        frame: "triangle_g_02_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      }
    ],
    default_base_color_channel: 1003,
    frame: "blockOutline_14_001.png",
    glow_frame: "blockOutline_14_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 2,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base"
  },
  323: {
    type: "solid",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "triangle_g_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  324: {
    can_color: true,
    default_base_color_channel: 1004,
    frame: "triangle_g_square_01_001.png",
    glow_frame: "triangle_g_square_01_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Base"
  },
  325: {
    type: "solid",
    frame: "triangle_g_square_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  326: {
    type: "solid",
    frame: "triangle_h_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  327: {
    type: "solid",
    frame: "triangle_h_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  328: {
    type: "solid",
    frame: "triangle_h_square_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 22,
      height: 22,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  329: {
    type: "solid",
    frame: "triangle_h_square_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 43,
      height: 22,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  331: {
    type: "solid",
    frame: "blockOutline_14_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lighttriangle_01_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  333: {
    type: "solid",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lighttriangle_01_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  337: {
    type: "solid",
    frame: "blockOutline_14_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lighttriangle_02_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  339: {
    type: "solid",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lighttriangle_02_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  343: {
    type: "solid",
    frame: "blockOutline_14_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lighttriangle_03_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  345: {
    type: "solid",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lighttriangle_03_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  349: {
    type: "solid",
    frame: "blockOutline_16_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lighttriangle_04_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  351: {
    type: "solid",
    frame: "blockOutline_17_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lighttriangle_04_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  353: {
    type: "solid",
    frame: "blockOutline_14_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lighttriangle_05_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  355: {
    type: "solid",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lighttriangle_05_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  358: {
    type: "solid",
    frame: "triangle_g_square_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  363: {
    type: "solid",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "pit_01_slope_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 45,
        color_type: "Black"
      }
    ],
    can_color: true
  },
  364: {
    type: "solid",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "pit_01_slope_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 30,
        color_type: "Black"
      }
    ],
    can_color: true
  },
  365: {
    type: "deco",
    frame: "pit_01_low_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 9,
      height: 6,
      x: 0,
      y: 0
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    can_color: true
  },
  366: {
    black: true,
    can_color: true,
    children: [
      {
        frame: "pit_04_slope_01_001.png",
        localDy: 0,
        tint: 0,
        z: -1
      }
    ],
    color_channel: "black",
    default_base_color_channel: 1004,
    frame: "pit_04_slope_01_001.png",
    glow_frame: "pit_04_slope_01_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Black"
  },
  367: {
    type: "solid",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "pit_04_slope_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 30,
        color_type: "Black"
      }
    ],
    can_color: true
  },
  368: {
    type: "deco",
    frame: "pit_04_low_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 9,
      height: 4,
      x: 0,
      y: 0
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    can_color: true
  },
  369: {
    type: "deco",
    frame: "plank_01_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 14,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "plank_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black"
      }
    ],
    can_color: true
  },
  370: {
    type: "deco",
    frame: "plank_01_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 14,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "plank_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black"
      }
    ],
    can_color: true
  },
  371: {
    type: "solid",
    frame: "blockOutline_14_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "plank_01_slope_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 9,
        rot: 45,
        color_type: "Black"
      },
      {
        texture: "plank_01_slope_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 10,
        rot: 45,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  372: {
    type: "solid",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "plank_01_slope_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 9,
        rot: 26.565000534057617,
        color_type: "Black"
      },
      {
        texture: "plank_01_slope_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 10,
        rot: 26.565000534057617,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  373: {
    type: "solid",
    frame: "plank_01_square_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "plank_01_square_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black"
      }
    ],
    can_color: true
  },
  374: {
    type: "solid",
    frame: "plank_01_square_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "plank_01_square_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black"
      }
    ],
    can_color: true
  },
  375: {
    type: "deco",
    frame: "d_rotatingBall_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  376: {
    type: "deco",
    frame: "d_rotatingBall_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1006,
    can_color: true
  },
  377: {
    type: "deco",
    frame: "d_rotatingBall_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  378: {
    type: "deco",
    frame: "d_rotatingBall_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1006,
    can_color: true
  },
  392: {
    type: "hazard",
    frame: "spike_04_001.png",
    gridW: 0.5,
    gridH: 0.5,
    spriteW: 13,
    spriteH: 12,
    hitbox: {
      type: "Box",
      width: 2.6,
      height: 4.8,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  393: {
    type: "deco",
    frame: "fakeSpike_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -4,
    default_base_color_channel: 1004,
    can_color: true
  },
  394: {
    can_color: true,
    children: [
      {
        frame: "d_geometric_01_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      },
      {
        frame: "d_geometric_01_001.png",
        localDy: 0,
        tint: 65280,
        z: 1
      },
      {
        frame: "d_geometric_01_001.png",
        localDy: 0,
        tint: 65280,
        z: 1
      },
      {
        frame: "d_geometric_01_001.png",
        localDy: 0,
        tint: 65280,
        z: 1
      }
    ],
    default_base_color_channel: 1005,
    frame: "d_geometric_01_001.png",
    glow_frame: "d_geometric_01_glow_001.png",
    gridH: 1.1833332777023315,
    gridW: 1.3583333492279053,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 9,
    color_type: "Detail",
    swap_base_detail: true
  },
  395: {
    type: "deco",
    frame: "d_geometric_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  396: {
    type: "deco",
    frame: "d_geometric_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  397: {
    type: "deco",
    frame: "darkblade_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 28.9
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "darkblade_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "darkblade_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: -0.18000030517578125,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Black"
      },
      {
        texture: "darkblade_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: true,
        x: -0.18000030517578125,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Black"
      },
      {
        texture: "darkblade_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: true,
        x: 0,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Black"
      }
    ],
    can_color: true
  },
  398: {
    type: "deco",
    frame: "darkblade_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 17.44
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "darkblade_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  399: {
    type: "deco",
    frame: "darkblade_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 12.9
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "darkblade_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  405: {
    type: "deco",
    frame: "d_ball_09_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1006,
    can_color: true
  },
  406: {
    type: "deco",
    frame: "d_grass_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 1,
    default_base_color_channel: 1007,
    can_color: true
  },
  407: {
    type: "deco",
    frame: "d_grass_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 1,
    default_base_color_channel: 1007,
    can_color: true
  },
  408: {
    type: "deco",
    frame: "d_grass_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 1,
    default_base_color_channel: 1007,
    can_color: true
  },
  409: {
    can_color: true,
    default_base_color_channel: 1007,
    default_detail_color_channel: 1,
    frame: "d_link_b_01_001.png",
    glow_frame: "d_link_b_01_glow_001.png",
    gridH: 1,
    gridW: 0.4333333373069763,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 9,
    color_type: "Base",
    children: [
      {
        texture: "d_link_b_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ]
  },
  410: {
    type: "deco",
    frame: "d_link_b_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "d_link_b_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  411: {
    type: "deco",
    frame: "d_link_b_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "d_link_b_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  412: {
    type: "deco",
    frame: "d_link_b_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "d_link_b_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  413: {
    type: "deco",
    frame: "d_link_b_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "d_link_b_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  414: {
    type: "deco",
    frame: "d_grass_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 1,
    default_base_color_channel: 1007,
    can_color: true
  },
  419: {
    type: "hazard",
    frame: "d_spikeWave_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  420: {
    type: "hazard",
    frame: "d_spikeWave_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  421: {
    type: "deco",
    frame: "pit_05_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 9,
      height: 5.2,
      x: 0,
      y: 0
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    can_color: true
  },
  422: {
    type: "deco",
    frame: "pit_05_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 6,
      height: 4.4,
      x: -5,
      y: 0
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    can_color: true
  },
  446: {
    type: "deco",
    frame: "pit_06_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 9,
      height: 7.2,
      x: 0,
      y: 0
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    can_color: true
  },
  447: {
    type: "deco",
    frame: "pit_06_2_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 5.2,
      height: 7.2,
      x: -5,
      y: 0
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    can_color: true
  },
  448: {
    can_color: true,
    default_base_color_channel: 1007,
    frame: "d_pit06wave_01_001.png",
    glow_frame: "d_pit06wave_01_glow_001.png",
    gridH: 0.8166666626930237,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 9,
    color_type: "Detail",
    swap_base_detail: true
  },
  449: {
    type: "deco",
    frame: "d_pit06wave_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  450: {
    type: "deco",
    frame: "d_pillar_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  451: {
    type: "deco",
    frame: "d_pillar_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  452: {
    type: "deco",
    frame: "d_pillar_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  453: {
    type: "deco",
    frame: "d_link_c_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "d_link_b_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  454: {
    can_color: true,
    children: [
      {
        frame: "d_link_b_01_color_001.png",
        localDy: 0,
        tint: 52224,
        z: -100
      }
    ],
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    frame: "d_link_c_02_001.png",
    glow_frame: "d_link_c_02_glow_001.png",
    gridH: 0.7333333492279053,
    gridW: 0.7333333492279053,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 9,
    color_type: "Base"
  },
  455: {
    can_color: true,
    children: [
      {
        frame: "d_link_b_01_color_001.png",
        localDy: 0,
        tint: 52224,
        z: -100
      }
    ],
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    frame: "d_link_c_03_001.png",
    glow_frame: "d_link_c_03_glow_001.png",
    gridH: 0.7333333492279053,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 9,
    color_type: "Base"
  },
  456: {
    can_color: true,
    children: [
      {
        frame: "d_link_b_01_color_001.png",
        localDy: 0,
        tint: 52224,
        z: -100
      }
    ],
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    frame: "d_link_c_04_001.png",
    glow_frame: "d_link_c_04_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 9,
    color_type: "Base"
  },
  457: {
    can_color: true,
    children: [
      {
        frame: "d_link_b_01_color_001.png",
        localDy: 0,
        tint: 52224,
        z: -100
      }
    ],
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    frame: "d_link_c_05_001.png",
    glow_frame: "d_link_c_05_glow_001.png",
    gridH: 0.7333333492279053,
    gridW: 0.4333333373069763,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 9,
    color_type: "Base"
  },
  458: {
    can_color: true,
    children: [
      {
        frame: "colorSpike_04_color_001.png",
        localDy: 0,
        tint: 52224,
        z: -100
      }
    ],
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    frame: "colorSpike_04_001.png",
    glow_frame: "colorSpike_04_glow_001.png",
    gridH: 0.4000000059604645,
    gridW: 0.4333333373069763,
    spritesheet: "GJ_GameSheet-uhd",
    type: "hazard",
    z: 2,
    hitbox: {
      type: "Box",
      width: 2.6,
      height: 4.8,
      x: 0,
      y: 0
    },
    color_type: "Base"
  },
  459: {
    can_color: true,
    default_base_color_channel: 1004,
    frame: "invis_spike_04_001.png",
    glow_frame: "invis_spike_04_glow_001.png",
    gridH: 0.4000000059604645,
    gridW: 0.4333333373069763,
    spritesheet: "GJ_GameSheet-uhd",
    type: "hazard",
    z: 2,
    hitbox: {
      type: "Box",
      width: 2.6,
      height: 4.8,
      x: 0,
      y: 0
    },
    color_type: "Base"
  },
  460: {
    can_color: true,
    default_base_color_channel: 1006,
    frame: "d_arrow_02_001.png",
    glow_frame: "d_arrow_02_glow_001.png",
    gridH: 1.4666666984558105,
    gridW: 0.949999988079071,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 10,
    color_type: "Detail",
    swap_base_detail: true
  },
  461: {
    type: "deco",
    frame: "d_thorn_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  462: {
    type: "deco",
    frame: "d_thorn_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  463: {
    type: "deco",
    frame: "d_thorn_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  464: {
    type: "deco",
    frame: "d_thorn_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  465: {
    type: "deco",
    frame: "d_thorn_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  466: {
    type: "deco",
    frame: "d_thorn_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  467: {
    can_color: true,
    default_base_color_channel: 1003,
    frame: "blockOutline_01_001.png",
    glow_frame: "blockOutline_01_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "solid",
    z: 3,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base"
  },
  468: {
    can_color: true,
    default_base_color_channel: 1003,
    frame: "blockOutline_02_001.png",
    glow_frame: "blockOutline_02_glow_001.png",
    gridH: 0.05000000074505806,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "solid",
    z: 3,
    hitbox: {
      type: "Box",
      width: 30,
      height: 1.5,
      x: 0,
      y: 0
    },
    color_type: "Base"
  },
  469: {
    can_color: true,
    default_base_color_channel: 1003,
    frame: "blockOutline_03_001.png",
    glow_frame: "blockOutline_03_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "solid",
    z: 3,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base"
  },
  470: {
    can_color: true,
    default_base_color_channel: 1003,
    frame: "blockOutline_04_001.png",
    glow_frame: "blockOutline_04_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "solid",
    z: 3,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base"
  },
  471: {
    can_color: true,
    children: [
      {
        frame: "blockOutline_05_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      }
    ],
    default_base_color_channel: 1003,
    frame: "blockOutline_05_001.png",
    glow_frame: "blockOutline_05_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "solid",
    z: 3,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base"
  },
  472: {
    type: "deco",
    frame: "blockOutline_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1003,
    can_color: true
  },
  473: {
    type: "deco",
    frame: "blockOutline_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1003,
    can_color: true
  },
  474: {
    type: "deco",
    frame: "blockOutline_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1003,
    can_color: true
  },
  475: {
    type: "deco",
    frame: "blockOutline_09_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 1.5,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1003,
    can_color: true
  },
  476: {
    can_color: true,
    default_base_color_channel: 1004,
    frame: "block001_01_001.png",
    glow_frame: "block001_01_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Base"
  },
  477: {
    type: "deco",
    frame: "block001_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block001_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  478: {
    type: "deco",
    frame: "block001_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block001_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  479: {
    can_color: true,
    children: [
      {
        frame: "block001_04_color_001.png",
        localDy: 0,
        tint: 52224,
        z: -100
      }
    ],
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    frame: "block001_04_001.png",
    glow_frame: "block001_04_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Base"
  },
  480: {
    can_color: true,
    children: [
      {
        frame: "block001_05_color_001.png",
        localDy: 0,
        tint: 52224,
        z: -100
      }
    ],
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    frame: "block001_05_001.png",
    glow_frame: "block001_05_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Base"
  },
  481: {
    type: "deco",
    frame: "block001_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block001_06_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  482: {
    type: "deco",
    frame: "block001_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block001_07_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  483: {
    type: "solid",
    frame: "blockOutline_14_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block001_slope_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block001_slope_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  484: {
    type: "solid",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block001_slope_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block001_slope_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  485: {
    type: "deco",
    frame: "block002_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block002_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  486: {
    type: "deco",
    frame: "block002_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block002_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  487: {
    type: "deco",
    frame: "block002_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block002_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  488: {
    type: "deco",
    frame: "block002_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block002_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  489: {
    type: "deco",
    frame: "block002_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block002_05_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  490: {
    type: "deco",
    frame: "block002_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block002_06_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  491: {
    type: "deco",
    frame: "block002_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block002_07_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  492: {
    type: "solid",
    frame: "blockOutline_14_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block002_slope_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block002_slope_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  493: {
    type: "solid",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block002_slope_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block002_slope_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  494: {
    type: "deco",
    frame: "d_arrow_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 10,
    default_base_color_channel: 1005,
    can_color: true
  },
  495: {
    type: "deco",
    frame: "d_largeSquare_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 10,
    default_base_color_channel: 1006,
    can_color: true
  },
  496: {
    type: "deco",
    frame: "d_largeSquare_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 10,
    default_base_color_channel: 1005,
    can_color: true
  },
  497: {
    type: "deco",
    frame: "d_circle_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 10,
    default_base_color_channel: 1005,
    can_color: true
  },
  498: {
    can_color: true,
    default_base_color_channel: 1,
    frame: "d_03_chain_01_001.png",
    glow_frame: "d_03_chain_01_glow_001.png",
    gridH: 0.699999988079071,
    gridW: 0.3333333432674408,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 9,
    color_type: "Detail",
    swap_base_detail: true
  },
  499: {
    can_color: true,
    default_base_color_channel: 1,
    frame: "d_03_chain_02_001.png",
    glow_frame: "d_03_chain_02_glow_001.png",
    gridH: 0.4166666567325592,
    gridW: 0.7833333611488342,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 9,
    color_type: "Detail",
    swap_base_detail: true
  },
  500: {
    type: "deco",
    frame: "d_swirve_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  501: {
    type: "deco",
    frame: "d_swirve_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  502: {
    type: "solid",
    frame: "square_09_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  503: {
    type: "deco",
    frame: "d_gradient_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  504: {
    type: "deco",
    frame: "d_gradient_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  505: {
    type: "deco",
    frame: "d_gradient_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  506: {
    type: "deco",
    frame: "persp_outline_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -6,
    default_base_color_channel: 1003,
    can_color: true
  },
  507: {
    type: "deco",
    frame: "persp_outline_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -6,
    default_base_color_channel: 1003,
    can_color: true
  },
  508: {
    type: "deco",
    frame: "persp_outline_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -6,
    default_base_color_channel: 1003,
    can_color: true
  },
  509: {
    type: "deco",
    frame: "persp_outline_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -6,
    default_base_color_channel: 1003,
    can_color: true
  },
  510: {
    type: "deco",
    frame: "persp_outline_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -6,
    default_base_color_channel: 1003,
    can_color: true
  },
  511: {
    type: "deco",
    frame: "persp_outline_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -6,
    default_base_color_channel: 1003,
    can_color: true
  },
  512: {
    type: "deco",
    frame: "persp_outline_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -6,
    default_base_color_channel: 1003,
    can_color: true
  },
  513: {
    type: "deco",
    frame: "persp_outline_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -6,
    default_base_color_channel: 1003,
    can_color: true
  },
  514: {
    type: "deco",
    frame: "persp_outline_09_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -6,
    default_base_color_channel: 1003,
    can_color: true
  },
  515: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockb_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockb_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  516: {
    can_color: true,
    children: [
      {
        frame: "persp_blockb_01_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      },
      {
        frame: "persp_blockb_01_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      }
    ],
    default_base_color_channel: 1004,
    frame: "block008_topcolor_15_001.png",
    glow_frame: "block008_topcolor_15_glow_001.png",
    gridH: 0.06666667014360428,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Base"
  },
  517: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockb_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  518: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockb_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockb_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  519: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockb_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 2.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockb_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 2.5,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  520: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockb_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  521: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockb_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  522: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockb_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -22.5,
        y: -11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockb_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: -3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockb_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockb_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 22.5,
        y: 11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  523: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockb_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -10,
        y: -10,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockb_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockb_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 10,
        y: 10,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  524: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockc_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockc_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  525: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockc_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockc_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  526: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockc_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  527: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockc_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockc_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  528: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockc_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 2.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockc_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 2.5,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  529: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockc_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  530: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockc_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  531: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockc_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -22.5,
        y: -11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockc_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: -3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockc_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockc_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 22.5,
        y: 11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  532: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockc_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -10,
        y: -10,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockc_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockc_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 10,
        y: 10,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  533: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockd_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockd_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  534: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockd_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockd_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  535: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockd_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  536: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockd_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockd_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  537: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockd_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 2.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockd_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 2.5,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  538: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockd_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  539: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockd_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  540: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockd_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -22.5,
        y: -11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockd_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: -3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockd_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockd_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 22.5,
        y: 11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  541: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockd_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -10,
        y: -10,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockd_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockd_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 10,
        y: 10,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  542: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blocke_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blocke_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  543: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blocke_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blocke_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  544: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blocke_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  545: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blocke_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blocke_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  546: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blocke_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 2.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blocke_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 2.5,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  547: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blocke_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  548: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blocke_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  549: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blocke_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -22.5,
        y: -11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blocke_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: -3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blocke_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blocke_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 22.5,
        y: 11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  550: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blocke_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -10,
        y: -10,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blocke_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blocke_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 10,
        y: 10,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  551: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockf_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockf_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  552: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockf_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockf_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  553: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockf_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  554: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockf_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockf_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  555: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockf_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 2.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockf_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 2.5,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  556: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockf_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  557: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockf_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  558: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockf_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -22.5,
        y: -11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockf_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: -3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockf_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockf_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 22.5,
        y: 11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  559: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockf_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -10,
        y: -10,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockf_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockf_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 10,
        y: 10,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  560: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockg_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockg_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  561: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockg_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockg_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  562: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockg_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  563: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockg_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockg_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  564: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockg_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 2.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockg_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 2.5,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  565: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockg_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  566: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockg_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  567: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockg_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -22.5,
        y: -11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockg_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: -3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockg_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockg_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 22.5,
        y: 11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  568: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockg_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -10,
        y: -10,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockg_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockg_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 10,
        y: 10,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  569: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockh_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockh_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  570: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockh_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockh_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  571: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockh_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  572: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockh_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockh_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  573: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockh_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 2.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockh_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 2.5,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  574: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockh_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  575: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockh_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  576: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockh_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -22.5,
        y: -11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockh_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: -3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockh_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockh_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 22.5,
        y: 11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  577: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_blockh_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -10,
        y: -10,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockh_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_blockh_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 10,
        y: 10,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  578: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock01_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock01_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  579: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock01_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock01_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  580: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock01_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  581: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock01_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock01_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  582: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock01_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 2.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock01_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 2.5,
        z: -1,
        rot: -90,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  583: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock01_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  584: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock01_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  585: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock01_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -22.5,
        y: -11.25,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock01_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: -3.75,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock01_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 3.75,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock01_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 22.5,
        y: 11.25,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  586: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock01_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -10,
        y: -10,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock01_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock01_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 10,
        y: 10,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  587: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock02_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock02_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  588: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock02_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock02_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  589: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock02_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  590: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock02_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock02_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  591: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock02_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 2.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock02_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 2.5,
        z: -1,
        rot: -90,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  592: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock02_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  593: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock02_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  594: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock02_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -22.5,
        y: -11.25,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock02_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: -3.75,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock02_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 3.75,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock02_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 22.5,
        y: 11.25,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  595: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock02_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -10,
        y: -10,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock02_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock02_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 10,
        y: 10,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  596: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock03_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock03_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  597: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock03_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock03_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  598: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock03_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  599: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock03_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock03_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  600: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock03_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 2.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock03_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 2.5,
        z: -1,
        rot: -90,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  601: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock03_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  602: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock03_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  603: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock03_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -22.5,
        y: -11.25,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock03_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: -3.75,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock03_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 3.75,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock03_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 22.5,
        y: 11.25,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  604: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock03_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -10,
        y: -10,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock03_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock03_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 10,
        y: 10,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  605: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock04_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock04_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  606: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock04_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock04_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  607: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock04_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  608: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock04_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock04_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  609: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock04_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 2.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock04_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 2.5,
        z: -1,
        rot: -90,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  610: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock04_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  611: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock04_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  612: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock04_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -22.5,
        y: -11.25,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock04_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: -3.75,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock04_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 3.75,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock04_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 22.5,
        y: 11.25,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  613: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock04_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -10,
        y: -10,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock04_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock04_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 10,
        y: 10,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  614: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock05_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock05_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  615: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock05_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock05_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  616: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock05_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  617: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock05_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock05_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  618: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock05_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 2.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock05_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 2.5,
        z: -1,
        rot: -90,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  619: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock05_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  620: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock05_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  621: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock05_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -22.5,
        y: -11.25,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock05_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: -3.75,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock05_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 3.75,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock05_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 22.5,
        y: 11.25,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  622: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock05_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -10,
        y: -10,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock05_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock05_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 10,
        y: 10,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  623: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block001_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block001_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  624: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block001_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block001_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  625: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block001_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  626: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block001_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block001_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  627: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block001_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 2.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block001_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 2.5,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  628: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block001_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  629: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block001_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  630: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block001_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -22.5,
        y: -11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block001_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: -3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block001_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block001_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 22.5,
        y: 11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  631: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block001_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -10,
        y: -10,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block001_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block001_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 10,
        y: 10,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  632: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block002_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block002_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  633: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block002_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block002_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  634: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block002_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  635: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block002_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block002_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  636: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block002_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 2.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block002_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 2.5,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  637: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block002_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  638: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block002_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  639: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block002_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -22.5,
        y: -11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block002_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: -3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block002_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block002_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 22.5,
        y: 11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  640: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block002_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -10,
        y: -10,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block002_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block002_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 10,
        y: 10,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  641: {
    can_color: true,
    children: [
      {
        frame: "block003_color_02_001.png",
        localDy: 0,
        tint: 52224,
        z: -100
      },
      {
        frame: "block003_part02_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      },
      {
        frame: "block003_part02_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      }
    ],
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    frame: "block003_part03_001.png",
    glow_frame: "block003_part03_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Base"
  },
  642: {
    can_color: true,
    children: [
      {
        frame: "block003_color_03_001.png",
        localDy: 0,
        tint: 52224,
        z: -100
      },
      {
        frame: "block003_part02_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      }
    ],
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    frame: "block003_part04_001.png",
    glow_frame: "block003_part04_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Base"
  },
  643: {
    can_color: true,
    children: [
      {
        frame: "block003_color_04_001.png",
        localDy: 0,
        tint: 52224,
        z: -100
      }
    ],
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    frame: "block003_part06_001.png",
    glow_frame: "block003_part06_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Base"
  },
  644: {
    can_color: true,
    children: [
      {
        frame: "block003_color_05_001.png",
        localDy: 0,
        tint: 52224,
        z: -100
      }
    ],
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    frame: "block003_part05_001.png",
    glow_frame: "block003_part05_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Base"
  },
  645: {
    can_color: true,
    children: [
      {
        frame: "block003_color_06_001.png",
        localDy: 0,
        tint: 52224,
        z: -100
      },
      {
        frame: "block003_part03_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      },
      {
        frame: "block003_part03_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      }
    ],
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    frame: "block003_part01_001.png",
    glow_frame: "block003_part01_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Base"
  },
  646: {
    type: "deco",
    frame: "block003_part01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block003_color_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block003_color_02_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "block003_part03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      },
      {
        texture: "block003_part02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  647: {
    can_color: true,
    children: [
      {
        frame: "block003_color_01_001.png",
        localDy: 0,
        tint: 52224,
        z: -100
      },
      {
        frame: "block003_part02_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      },
      {
        frame: "block003_part02_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      },
      {
        frame: "block003_part02_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      }
    ],
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    frame: "block003_part02_001.png",
    glow_frame: "block003_part02_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Base"
  },
  648: {
    can_color: true,
    children: [
      {
        frame: "block003_color_01_001.png",
        localDy: 0,
        tint: 52224,
        z: -100
      },
      {
        frame: "block003_part02_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      },
      {
        frame: "block003_part02_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      },
      {
        frame: "block003_part02_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      }
    ],
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    frame: "block003_part01_001.png",
    glow_frame: "block003_part01_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Base"
  },
  649: {
    type: "deco",
    frame: "block003_part01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block003_color_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block003_part01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block003_part02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block003_part02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  650: {
    type: "deco",
    frame: "block003_part05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "block003_color_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base",
        opacity: 0.4
      }
    ],
    can_color: true
  },
  651: {
    can_color: true,
    children: [
      {
        frame: "block003_slope_01_color_001.png",
        localDy: 0,
        tint: 52224,
        z: -100
      },
      {
        frame: "block003_slope_01_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      }
    ],
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    frame: "blockOutline_14_001.png",
    glow_frame: "blockOutline_14_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 2,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base"
  },
  652: {
    type: "solid",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block003_slope_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block003_slope_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  653: {
    type: "deco",
    frame: "d_block04_piece01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  654: {
    type: "deco",
    frame: "d_block04_piece02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  655: {
    type: "deco",
    frame: "d_block04_piece03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  656: {
    type: "deco",
    frame: "d_block04_piece04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  657: {
    type: "deco",
    frame: "d_block04_piece05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  658: {
    type: "deco",
    frame: "d_block04_piece06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  659: {
    can_color: true,
    default_base_color_channel: 1004,
    frame: "d_block04_piece07_001.png",
    glow_frame: "d_block04_piece07_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Base"
  },
  660: {
    can_color: false,
    default_base_color_channel: 0,
    frame: "portal_13_front_001.png",
    glow_frame: "portal_13_front_glow_001.png",
    gridH: 2.866666555404663,
    gridW: 1.1333333253860474,
    sub: "wave",
    spritesheet: "GJ_GameSheet02-uhd",
    type: "portal",
    z: 10,
    hitbox: {
      type: "Box",
      width: 34,
      height: 86,
      x: 0,
      y: 0
    }
  },
  661: {
    type: "deco",
    frame: "blockOutline_10_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 15,
      height: 15,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1003,
    can_color: true
  },
  662: {
    type: "solid",
    frame: "blockOutline_11_001.png",
    gridW: 1,
    gridH: 0.5,
    hitbox: {
      type: "Box",
      width: 30,
      height: 15,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1003,
    can_color: true
  },
  663: {
    type: "solid",
    frame: "blockOutline_12_001.png",
    gridW: 1,
    gridH: 0.5,
    hitbox: {
      type: "Box",
      width: 30,
      height: 15,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1003,
    can_color: true
  },
  664: {
    type: "solid",
    frame: "blockOutline_13_001.png",
    gridW: 1,
    gridH: 0.5,
    hitbox: {
      type: "Box",
      width: 30,
      height: 15,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1003,
    can_color: true
  },
  665: {
    type: "solid",
    frame: "blockOutline_14_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1003,
    can_color: true
  },
  666: {
    type: "solid",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1003,
    can_color: true
  },
  667: {
    black: true,
    can_color: true,
    color_channel: "black",
    default_base_color_channel: 1004,
    frame: "pit_07_001.png",
    glow_frame: "pit_07_glow_001.png",
    gridH: 0.5,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "hazard",
    z: 1,
    hitbox: {
      type: "Box",
      width: 9,
      height: 6,
      x: 0,
      y: 0
    },
    color_type: "Black"
  },
  668: {
    black: true,
    can_color: true,
    color_channel: "black",
    default_base_color_channel: 1004,
    frame: "d_pixelArt01_001_001.png",
    glow_frame: "d_pixelArt01_001_glow_001.png",
    gridH: 0.5,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Black",
    opacity: 0.4
  },
  669: {
    black: true,
    can_color: true,
    color_channel: "black",
    default_base_color_channel: 1004,
    frame: "d_pixelArt01_002_001.png",
    glow_frame: "d_pixelArt01_002_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Black",
    opacity: 0.4
  },
  670: {
    type: "deco",
    frame: "d_pixelArt01_003_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    opacity: 0.4,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  671: {
    type: "deco",
    frame: "d_pixelArt01_004_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    opacity: 0.4,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  672: {
    black: true,
    can_color: true,
    color_channel: "black",
    default_base_color_channel: 1004,
    frame: "d_pixelArt01_005_001.png",
    glow_frame: "d_pixelArt01_005_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Black",
    opacity: 0.4
  },
  673: {
    type: "solid",
    frame: "invis_triangle_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  674: {
    type: "solid",
    frame: "invis_triangle_04_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  675: {
    type: "deco",
    frame: "blackCogwheel_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 32
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "blackCogwheel_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: -2,
        rot: 0,
        color_type: "Black"
      },
      {
        texture: "blackCogwheel_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -2,
        rot: 0,
        color_type: "Black"
      },
      {
        texture: "blackCogwheel_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: true,
        x: 0,
        y: 0,
        z: -2,
        rot: 0,
        color_type: "Black"
      },
      {
        texture: "blackCogwheel_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: true,
        x: 0,
        y: 0,
        z: -2,
        rot: 0,
        color_type: "Black"
      },
      {
        texture: "blackCogwheel_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: -0.18000030517578125,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "blackCogwheel_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: true,
        x: -0.18000030517578125,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "blackCogwheel_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: true,
        x: 0,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  676: {
    type: "deco",
    frame: "blackCogwheel_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 17.51
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "blackCogwheel_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -2,
        rot: 0,
        color_type: "Black"
      }
    ],
    can_color: true
  },
  677: {
    type: "deco",
    frame: "blackCogwheel_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 12.48
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "blackCogwheel_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -2,
        rot: 0,
        color_type: "Black"
      }
    ],
    can_color: true
  },
  678: {
    type: "deco",
    frame: "lightBlade_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 30.4
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 0,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightBlade_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "lightBlade_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: true,
            flip_y: false,
            x: -0.18000030517578125,
            y: 0,
            z: 0,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "lightBlade_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: true,
            flip_y: true,
            x: -0.18000030517578125,
            y: 0.18000030517578125,
            z: 0,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "lightBlade_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: true,
            x: 0,
            y: 0.18000030517578125,
            z: 0,
            rot: 0,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "lightBlade_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: -0.18000030517578125,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "lightBlade_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: true,
        x: -0.18000030517578125,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "lightBlade_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: true,
        x: 0,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  679: {
    type: "deco",
    frame: "lightBlade_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 18.54
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 0,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lightBlade_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  680: {
    can_color: true,
    children: [
      {
        frame: "lightBlade_03_color_001.png",
        localDy: 0,
        tint: 52224,
        z: -100
      },
      {
        frame: "lightBlade_03_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      }
    ],
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    frame: "lightBlade_03_001.png",
    glow_frame: "lightBlade_03_glow_001.png",
    gridH: 1.2000000476837158,
    gridW: 1.2000000476837158,
    spritesheet: "GJ_GameSheet-uhd",
    type: "hazard",
    hitbox: {
      type: "Circle",
      radius: 10.8
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 0
  },
  681: {
    can_color: true,
    default_base_color_channel: 1004,
    frame: "triangle_a_02_001.png",
    glow_frame: "triangle_a_02_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Base"
  },
  682: {
    can_color: true,
    default_base_color_channel: 1004,
    frame: "triangle_a_04_001.png",
    glow_frame: "triangle_a_04_glow_001.png",
    gridH: 1,
    gridW: 2,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Base"
  },
  683: {
    can_color: true,
    default_base_color_channel: 1004,
    frame: "triangle_c_02_001.png",
    glow_frame: "triangle_c_02_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Base"
  },
  684: {
    can_color: true,
    default_base_color_channel: 1004,
    frame: "triangle_c_04_001.png",
    glow_frame: "triangle_c_04_glow_001.png",
    gridH: 1,
    gridW: 2,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Base"
  },
  685: {
    can_color: true,
    default_base_color_channel: 1004,
    frame: "triangle_d_02_001.png",
    glow_frame: "triangle_d_02_glow_001.png",
    gridH: 0.8500000238418579,
    gridW: 0.8500000238418579,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Base"
  },
  686: {
    can_color: true,
    default_base_color_channel: 1004,
    frame: "triangle_d_04_001.png",
    glow_frame: "triangle_d_04_glow_001.png",
    gridH: 0.9333333373069763,
    gridW: 1.850000023841858,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Base"
  },
  687: {
    black: true,
    can_color: true,
    color_channel: "black",
    default_base_color_channel: 1004,
    frame: "lighttriangle_01_02_color_001.png",
    glow_frame: "lighttriangle_01_02_color_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 10,
    color_type: "Black"
  },
  688: {
    black: true,
    can_color: true,
    color_channel: "black",
    default_base_color_channel: 1004,
    frame: "lighttriangle_01_04_color_001.png",
    glow_frame: "lighttriangle_01_04_color_glow_001.png",
    gridH: 1,
    gridW: 2,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 10,
    color_type: "Black"
  },
  689: {
    can_color: true,
    default_base_color_channel: 1004,
    frame: "triangle_f_02_001.png",
    glow_frame: "triangle_f_02_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Base"
  },
  690: {
    type: "deco",
    frame: "triangle_f_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  691: {
    type: "deco",
    frame: "triangle_g_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  692: {
    type: "deco",
    frame: "triangle_g_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  693: {
    type: "deco",
    frame: "lighttriangle_01_02_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1,
    can_color: true
  },
  694: {
    type: "deco",
    frame: "lighttriangle_01_04_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1,
    can_color: true
  },
  695: {
    type: "deco",
    frame: "lighttriangle_02_02_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1,
    can_color: true
  },
  696: {
    type: "deco",
    frame: "lighttriangle_02_04_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1,
    can_color: true
  },
  697: {
    type: "deco",
    frame: "lighttriangle_03_02_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1,
    can_color: true
  },
  698: {
    type: "deco",
    frame: "lighttriangle_03_04_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1,
    can_color: true
  },
  699: {
    type: "deco",
    frame: "lighttriangle_04_02_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1,
    can_color: true
  },
  700: {
    type: "deco",
    frame: "lighttriangle_04_04_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1,
    can_color: true
  },
  701: {
    type: "deco",
    frame: "lighttriangle_05_02_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1,
    can_color: true
  },
  702: {
    type: "deco",
    frame: "lighttriangle_05_04_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1,
    can_color: true
  },
  703: {
    type: "deco",
    frame: "block001_slope_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block001_slope_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  704: {
    type: "deco",
    frame: "block001_slope_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block001_slope_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  705: {
    type: "deco",
    frame: "block002_slope_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block002_slope_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  706: {
    type: "deco",
    frame: "block002_slope_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block002_slope_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  707: {
    type: "deco",
    frame: "block003_slope_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block003_slope_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  708: {
    type: "deco",
    frame: "block003_slope_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block003_slope_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  709: {
    type: "solid",
    frame: "blockOutline_14_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "block004_slope_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  710: {
    type: "solid",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "block004_slope_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  711: {
    type: "solid",
    frame: "blockOutline_14_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "block004_slope_01b_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  712: {
    type: "solid",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "block004_slope_02b_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  713: {
    type: "deco",
    frame: "block004_slope_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  714: {
    type: "deco",
    frame: "block004_slope_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  715: {
    type: "deco",
    frame: "block004_slope_01b_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  716: {
    type: "deco",
    frame: "block004_slope_02b_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  719: {
    can_color: true,
    default_base_color_channel: 1,
    frame: "pit_07_shine_001.png",
    glow_frame: "pit_07_shine_glow_001.png",
    gridH: 0.3166666626930237,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: 9,
    color_type: "Detail",
    swap_base_detail: true
  },
  720: {
    type: "deco",
    frame: "pit_07_2_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 2.4,
      height: 3.2,
      x: 0,
      y: 0
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    can_color: true
  },
  721: {
    type: "deco",
    frame: "pit_07_2_shine_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  722: {
    can_color: true,
    default_base_color_channel: 1004,
    frame: "d_block04_piece08_001.png",
    glow_frame: "d_block04_piece08_glow_001.png",
    gridH: 1,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Base"
  },
  723: {
    can_color: true,
    default_base_color_channel: 1004,
    frame: "d_block04_piece09_001.png",
    glow_frame: "d_block04_piece09_glow_001.png",
    gridH: 0.5,
    gridW: 1,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Base"
  },
  724: {
    can_color: true,
    default_base_color_channel: 1004,
    frame: "d_block04_piece10_001.png",
    glow_frame: "d_block04_piece10_glow_001.png",
    gridH: 0.5,
    gridW: 0.5,
    spritesheet: "GJ_GameSheet-uhd",
    type: "deco",
    z: -7,
    color_type: "Base"
  },
  725: {
    type: "deco",
    frame: "d_link_b_01_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 1,
    can_color: true
  },
  726: {
    type: "solid",
    frame: "blockOutline_14_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "block004_slope_01c_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  727: {
    type: "solid",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "block004_slope_02c_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  728: {
    type: "solid",
    frame: "blockOutline_14_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "block004_slope_01d_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  729: {
    type: "solid",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "block004_slope_02d_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  730: {
    type: "deco",
    frame: "block004_slope_01c_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  731: {
    type: "deco",
    frame: "block004_slope_02c_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  732: {
    type: "deco",
    frame: "block004_slope_01d_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  733: {
    type: "deco",
    frame: "block004_slope_02d_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  734: {
    type: "deco",
    frame: "d_block04_piece11_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  735: {
    type: "deco",
    frame: "d_block04_piece12_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  736: {
    type: "deco",
    frame: "d_block04_piece13_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  737: {
    type: "solid",
    frame: "square_g_12_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  738: {
    type: "deco",
    frame: "d_pixelArt01_006_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    opacity: 0.4,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  739: {
    type: "deco",
    frame: "block003_part04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block003_color_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block003_part01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  740: {
    type: "deco",
    frame: "blade_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 32.3
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "blade_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: -0.18000030517578125,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "blade_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: true,
        x: -0.18000030517578125,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "blade_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: true,
        x: 0,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  741: {
    type: "deco",
    frame: "blade_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 21.87
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    can_color: true
  },
  742: {
    type: "deco",
    frame: "blade_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 12.6
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    can_color: true
  },
  744: {
    type: "deco",
    frame: "edit_eTint3DLBtn_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2
  },
  745: {
    type: "portal",
    frame: "portal_14_front_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 34,
      height: 86,
      x: 0,
      y: 0
    },
    default_z_layer: 5,
    default_z_order: 10,
    default_base_color_channel: 0
  },
  747: {
    type: "portal",
    frame: "portal_15_front_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 10
  },
  749: {
    type: "portal",
    frame: "portal_16_front_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 10
  },
  752: {
    type: "deco",
    frame: "block005_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  753: {
    type: "deco",
    frame: "block005_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  754: {
    type: "deco",
    frame: "block005_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  755: {
    type: "deco",
    frame: "block005_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  756: {
    type: "deco",
    frame: "block005_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_06_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  757: {
    type: "deco",
    frame: "block005_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_07_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block005_07_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  758: {
    type: "deco",
    frame: "block005_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block005_04_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  759: {
    type: "deco",
    frame: "block005_09_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_09_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  762: {
    type: "deco",
    frame: "block005_slope_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  763: {
    type: "deco",
    frame: "block005_slope_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  764: {
    type: "solid",
    frame: "block005_slope_square_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_square_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  765: {
    type: "solid",
    frame: "block005_slope_square_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_square_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  766: {
    type: "solid",
    frame: "block005_slope_square_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  767: {
    type: "hazard",
    frame: "d_spikeWave_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  768: {
    type: "deco",
    frame: "pit_05_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 4.5,
      height: 5.2,
      x: 0,
      y: 0
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    can_color: true
  },
  769: {
    type: "deco",
    frame: "plank005_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "plank005_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  770: {
    type: "deco",
    frame: "plank005_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "plank005_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  771: {
    type: "deco",
    frame: "plank005_slope_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  772: {
    type: "deco",
    frame: "plank005_slope_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  773: {
    type: "solid",
    frame: "plank005_slope_square_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_square_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  774: {
    type: "solid",
    frame: "plank005_slope_square_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_square_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  775: {
    type: "solid",
    frame: "plank005_slope_square_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  807: {
    type: "deco",
    frame: "block007_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_color_001_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block007_bgcolor_002_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.4980392156862745
      }
    ],
    can_color: true
  },
  808: {
    type: "deco",
    frame: "block007_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_color_001_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block007_bgcolor_002_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.6980392156862745
      }
    ],
    can_color: true
  },
  809: {
    type: "deco",
    frame: "block007_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_color_002_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block007_color_002_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 23,
            z: -1,
            rot: 90,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "block007_bgcolor_003_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.4980392156862745
      }
    ],
    can_color: true
  },
  810: {
    type: "deco",
    frame: "block007_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_color_002_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block007_color_002_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 23,
            z: -1,
            rot: 90,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "block007_bgcolor_003_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.6980392156862745
      }
    ],
    can_color: true
  },
  811: {
    type: "deco",
    frame: "block007_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_color_008_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block007_color_008_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -180,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "block007_bgcolor_004_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.4980392156862745
      }
    ],
    can_color: true
  },
  812: {
    type: "deco",
    frame: "block007_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_color_008_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block007_color_008_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -180,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "block007_bgcolor_004_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.6980392156862745
      }
    ],
    can_color: true
  },
  813: {
    type: "deco",
    frame: "block007_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_color_003_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block007_color_002_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block007_color_002_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "block007_bgcolor_005_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.4980392156862745
      }
    ],
    can_color: true
  },
  814: {
    type: "deco",
    frame: "block007_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_color_003_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block007_color_002_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block007_color_002_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "block007_bgcolor_005_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.6980392156862745
      }
    ],
    can_color: true
  },
  815: {
    type: "deco",
    frame: "block007_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_color_003_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block007_color_003_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          },
          {
            texture: "block007_color_003_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -180,
            color_type: "Detail"
          },
          {
            texture: "block007_color_003_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -270,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "block007_bgcolor_006_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.4980392156862745
      }
    ],
    can_color: true
  },
  816: {
    type: "deco",
    frame: "block007_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_color_003_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block007_color_003_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          },
          {
            texture: "block007_color_003_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -180,
            color_type: "Detail"
          },
          {
            texture: "block007_color_003_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -270,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "block007_bgcolor_006_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.6980392156862745
      }
    ],
    can_color: true
  },
  817: {
    type: "deco",
    frame: "block007_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_06_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block007_06_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          },
          {
            texture: "block007_06_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -180,
            color_type: "Detail"
          },
          {
            texture: "block007_06_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -270,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "block007_bgcolor_001_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.4980392156862745
      }
    ],
    can_color: true
  },
  818: {
    type: "deco",
    frame: "block007_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_06_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block007_06_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          },
          {
            texture: "block007_06_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -180,
            color_type: "Detail"
          },
          {
            texture: "block007_06_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -270,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "block007_bgcolor_001_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.6980392156862745
      }
    ],
    can_color: true
  },
  819: {
    type: "deco",
    frame: "block007_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_07_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block007_bgcolor_007_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.4980392156862745
      }
    ],
    can_color: true
  },
  820: {
    type: "deco",
    frame: "block007_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_07_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block007_bgcolor_007_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.6980392156862745
      }
    ],
    can_color: true
  },
  821: {
    type: "deco",
    frame: "block007_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_08_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block007_bgcolor_008_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.4980392156862745
      },
      {
        texture: "block007_bgcolor_008_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.4980392156862745
      }
    ],
    can_color: true
  },
  822: {
    type: "deco",
    frame: "block007_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_08_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block007_bgcolor_008_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.6980392156862745
      },
      {
        texture: "block007_bgcolor_008_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.6980392156862745
      }
    ],
    can_color: true
  },
  823: {
    type: "deco",
    frame: "block007_09_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "block007_bgcolor_001_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.4980392156862745
      }
    ],
    can_color: true
  },
  824: {
    type: "deco",
    frame: "block007_09_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "block007_bgcolor_001_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.6980392156862745
      }
    ],
    can_color: true
  },
  825: {
    type: "deco",
    frame: "block007_09_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_bgcolor_001_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  826: {
    type: "deco",
    frame: "block007_slope_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_slope_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block007_bgcolor_009_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.4980392156862745
      }
    ],
    can_color: true
  },
  827: {
    type: "deco",
    frame: "block007_slope_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_slope_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block007_bgcolor_009_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.6980392156862745
      }
    ],
    can_color: true
  },
  828: {
    type: "deco",
    frame: "block007_slope_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_slope_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block007_bgcolor_010_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.4980392156862745
      },
      {
        texture: "block007_bgcolor_011_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.4980392156862745
      }
    ],
    can_color: true
  },
  829: {
    type: "deco",
    frame: "block007_slope_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_slope_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block007_bgcolor_010_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.6980392156862745
      },
      {
        texture: "block007_bgcolor_011_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.6980392156862745
      }
    ],
    can_color: true
  },
  830: {
    type: "solid",
    frame: "block007_slope_square_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_slope_square_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block007_bgcolor_001_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.4980392156862745
      }
    ],
    can_color: true
  },
  831: {
    type: "solid",
    frame: "block007_slope_square_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_slope_square_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block007_bgcolor_001_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.6980392156862745
      }
    ],
    can_color: true
  },
  832: {
    type: "solid",
    frame: "block007_slope_square_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_slope_square_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block007_bgcolor_001_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.4980392156862745
      }
    ],
    can_color: true
  },
  833: {
    type: "solid",
    frame: "block007_slope_square_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_slope_square_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block007_bgcolor_001_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.6980392156862745
      }
    ],
    can_color: true
  },
  841: {
    type: "deco",
    frame: "block007b_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1011,
    children: [
      {
        texture: "block007b_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  842: {
    type: "deco",
    frame: "block007b_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1011,
    children: [
      {
        texture: "block007b_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block007b_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block007b_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  843: {
    type: "deco",
    frame: "block007b_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1011,
    children: [
      {
        texture: "block007b_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block007b_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  844: {
    type: "deco",
    frame: "block007b_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1011,
    children: [
      {
        texture: "block007b_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block007b_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  845: {
    type: "deco",
    frame: "block007b_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1011,
    children: [
      {
        texture: "block007b_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      },
      {
        texture: "block007b_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -180,
        color_type: "Base"
      },
      {
        texture: "block007b_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -270,
        color_type: "Base"
      },
      {
        texture: "block007b_05_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  846: {
    type: "deco",
    frame: "block007b_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1011,
    children: [
      {
        texture: "block007b_06_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  847: {
    type: "deco",
    frame: "block007b_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1011,
    children: [
      {
        texture: "block007b_07_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  848: {
    type: "deco",
    frame: "block007b_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1011,
    children: [
      {
        texture: "block007b_08_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  850: {
    type: "deco",
    frame: "block008_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block008_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  853: {
    type: "deco",
    frame: "block008_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block008_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  854: {
    type: "deco",
    frame: "block008_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block008_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  855: {
    type: "deco",
    frame: "block008_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block008_05_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  856: {
    type: "deco",
    frame: "block008_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block008_06_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block008_06_color_b_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  857: {
    type: "deco",
    frame: "block008_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block008_07_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  859: {
    type: "deco",
    frame: "block008_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block008_08_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  861: {
    type: "deco",
    frame: "block008_09_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block008_05_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block008_06_color_b_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 90,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  862: {
    type: "deco",
    frame: "block008_10_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block008_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block008_06_color_b_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  863: {
    type: "deco",
    frame: "block008_11_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block008_05_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block008_06_color_b_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block008_06_color_b_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 90,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  867: {
    type: "deco",
    frame: "block009_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  868: {
    type: "deco",
    frame: "block009_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  869: {
    type: "deco",
    frame: "block009_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  870: {
    type: "deco",
    frame: "block009_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  871: {
    type: "deco",
    frame: "block009_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009_05_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  872: {
    type: "deco",
    frame: "block009_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009_06_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  873: {
    type: "deco",
    frame: "block009_part_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009_part_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  874: {
    type: "deco",
    frame: "block009_part_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009_part_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  877: {
    type: "deco",
    frame: "block009_slope_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009_slope_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  878: {
    type: "deco",
    frame: "block009_slope_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009_slope_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  880: {
    type: "deco",
    frame: "block009b_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009b_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  881: {
    type: "deco",
    frame: "block009b_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009b_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  882: {
    type: "deco",
    frame: "block009b_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009b_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  883: {
    type: "deco",
    frame: "block009b_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009b_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  884: {
    type: "deco",
    frame: "block009b_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009b_05_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  885: {
    type: "deco",
    frame: "block009b_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009b_06_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  886: {
    type: "solid",
    frame: "blockOutline_14_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block009b_slope_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block009b_slope_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  887: {
    type: "solid",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block009b_slope_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block009b_slope_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  888: {
    type: "deco",
    frame: "block009b_slope_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009b_slope_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  889: {
    type: "deco",
    frame: "block009b_slope_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009b_slope_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  890: {
    type: "deco",
    frame: "block009c_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_color_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block009c_color_01_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 90,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  891: {
    type: "deco",
    frame: "block009c_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  893: {
    type: "deco",
    frame: "block009c_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  894: {
    type: "deco",
    frame: "block009c_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_05_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  895: {
    type: "deco",
    frame: "block009c_slope_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "emptyFrame.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block009c_slope_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 45,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  896: {
    type: "deco",
    frame: "block009c_slope_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "emptyFrame.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block009c_slope_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 30,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  899: {
    type: "trigger",
    frame: null,
    gridW: 0,
    gridH: 0,
    default_z_layer: 5,
    default_z_order: 2,
    sub: "color"
  },
  900: {
    type: "deco",
    frame: "edit_eTintG2Btn_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2
  },
  901: {
    type: "trigger",
    frame: null,
    gridW: 0,
    gridH: 0,
    default_z_layer: 5,
    default_z_order: 2,
    sub: "move"
  },
  902: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 3,
    children: [
      {
        texture: "persp_lblock01_06_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -22.5,
        y: -11.25,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock01_06_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: -3.75,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock01_06_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 3.75,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "persp_lblock01_06_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 22.5,
        y: 11.25,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  903: {
    type: "deco",
    frame: "block005_10_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_10_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  904: {
    type: "deco",
    frame: "block005_11_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_11_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  905: {
    type: "deco",
    frame: "block005_12_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  906: {
    type: "deco",
    frame: "d_grass_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 1,
    default_base_color_channel: 1007,
    can_color: true
  },
  907: {
    type: "deco",
    frame: "d_grassArt_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 1,
    can_color: true
  },
  908: {
    type: "deco",
    frame: "d_grassArt_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 1,
    can_color: true
  },
  909: {
    type: "deco",
    frame: "d_grassArt_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 1,
    can_color: true
  },
  910: {
    type: "deco",
    frame: "d_grassArt_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 1,
    can_color: true
  },
  911: {
    type: "deco",
    frame: "block005_13_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  914: {
    type: "deco",
    frame: null,
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1,
    can_color: true
  },
  915: {
    type: "deco",
    frame: "edit_eTintLBtn_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2
  },
  916: {
    type: "deco",
    frame: "d_whiteBlock_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 1,
    can_color: true
  },
  917: {
    type: "deco",
    frame: "d_whiteBlock_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 1,
    can_color: true
  },
  918: {
    type: "deco",
    frame: "GJBeast01_01_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2
  },
  919: {
    type: "deco",
    frame: "dA_blackSludge_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1010,
    can_color: true
  },
  920: {
    type: "deco",
    frame: "Fire_03_looped_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1011,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "Fire_03_2_looped_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "Fire_03_2_looped_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 2,
            scale_y: 2,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  921: {
    type: "deco",
    frame: "Fire_04_looped_004.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1011,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "Fire_04_2_looped_004.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "Fire_04_2_looped_004.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 2,
            scale_y: 2,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  923: {
    type: "deco",
    frame: "Fire_01_looped_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1011,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "Fire_01_2_looped_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "Fire_01_2_looped_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 2,
            scale_y: 2,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  924: {
    type: "deco",
    frame: "Fire_02_looped_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1011,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "Fire_02_2_looped_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "Fire_02_2_looped_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 2,
            scale_y: 2,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  925: {
    type: "deco",
    frame: "d_rainbow_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 2,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "d_rainbow_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -15,
        color_type: "Detail"
      },
      {
        texture: "d_rainbow_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -45,
        color_type: "Detail"
      },
      {
        texture: "d_rainbow_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -75,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  926: {
    type: "deco",
    frame: "d_rainbow_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 2,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "d_rainbow_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -15,
        color_type: "Detail"
      },
      {
        texture: "d_rainbow_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -45,
        color_type: "Detail"
      },
      {
        texture: "d_rainbow_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -75,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  927: {
    type: "deco",
    frame: "block010_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    can_color: true
  },
  928: {
    type: "deco",
    frame: "block010_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block010_piece_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  929: {
    type: "deco",
    frame: "block010_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    can_color: true
  },
  930: {
    type: "deco",
    frame: "block010_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    can_color: true
  },
  931: {
    type: "deco",
    frame: "block010_piece_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block010_piece_06_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  932: {
    type: "deco",
    frame: "block010_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block010_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  933: {
    type: "deco",
    frame: "block010_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    can_color: true
  },
  934: {
    type: "deco",
    frame: "block010_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    can_color: true
  },
  935: {
    type: "deco",
    frame: "block010_piece_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block010_piece_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  936: {
    type: "deco",
    frame: "d_artCloud_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 1011,
    can_color: true
  },
  937: {
    type: "deco",
    frame: "d_artCloud_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 1011,
    can_color: true
  },
  938: {
    type: "deco",
    frame: "d_artCloud_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 1011,
    can_color: true
  },
  939: {
    type: "deco",
    frame: "d_flower01_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 1,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "d_flower01_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "d_flower01_01_shine_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: 10,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  940: {
    type: "deco",
    frame: "d_grassDetail_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 1,
    can_color: true
  },
  941: {
    type: "deco",
    frame: "d_grassDetail_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 1,
    can_color: true
  },
  942: {
    type: "deco",
    frame: "d_grassDetail_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 1,
    can_color: true
  },
  943: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block005_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block005_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  944: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block005_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block005_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  945: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block005_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  946: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block005_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block005_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  947: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block005_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 2.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block005_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 2.5,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  948: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block005_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  949: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block005_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  950: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block005_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -22.5,
        y: -11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block005_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: -3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block005_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block005_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 22.5,
        y: 11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  951: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block005_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -10,
        y: -10,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block005_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block005_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 10,
        y: 10,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  952: {
    type: "deco",
    frame: "block005b_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  953: {
    type: "deco",
    frame: "block005b_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  954: {
    type: "deco",
    frame: "block005b_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  955: {
    type: "deco",
    frame: "block005b_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  956: {
    type: "deco",
    frame: "block005b_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_06_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  957: {
    type: "deco",
    frame: "block005b_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_07_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block005_07_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  958: {
    type: "deco",
    frame: "block005b_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block005_04_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  959: {
    type: "deco",
    frame: "block005b_09_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_09_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  960: {
    type: "deco",
    frame: "block005b_slope_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  961: {
    type: "deco",
    frame: "block005b_slope_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  964: {
    type: "solid",
    frame: "block005b_slope_square_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_square_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  965: {
    type: "solid",
    frame: "block005b_slope_square_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_square_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  966: {
    type: "solid",
    frame: "block005b_slope_square_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  967: {
    type: "deco",
    frame: "plank005b_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "plank005_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  968: {
    type: "deco",
    frame: "plank005b_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "plank005_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  969: {
    type: "deco",
    frame: "plank005b_slope_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  970: {
    type: "deco",
    frame: "plank005b_slope_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  971: {
    type: "solid",
    frame: "plank005b_slope_square_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_square_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  972: {
    type: "solid",
    frame: "plank005b_slope_square_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_square_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  973: {
    type: "solid",
    frame: "plank005b_slope_square_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  974: {
    type: "deco",
    frame: "block005b_10_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_10_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  975: {
    type: "deco",
    frame: "block005b_11_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_11_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  976: {
    type: "deco",
    frame: "block005b_12_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  977: {
    type: "deco",
    frame: "block005b_13_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  980: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "emptyFrame.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "persp_block007_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: -7.5,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "persp_block007_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 7.5,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "persp_block007_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block007_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  981: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block008_topcolor_15_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "persp_block007_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: -7.5,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "persp_block007_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 7.5,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "persp_block007_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block007_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  982: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "emptyFrame.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "persp_block007_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "persp_block007_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  983: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "emptyFrame.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "persp_block007_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "persp_block007_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: true,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "persp_block007_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block007_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  984: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "emptyFrame.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "persp_block007_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 2.5,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "persp_block007_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: true,
            flip_y: false,
            x: 0,
            y: 2.5,
            z: -1,
            rot: -90,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "persp_block007_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 2.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block007_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 2.5,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  985: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "emptyFrame.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "persp_block007_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "persp_block007_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  986: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "emptyFrame.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "persp_block007_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "persp_block007_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  987: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "emptyFrame.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "persp_block007_05_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1.0099999904632568,
            scale_y: 1.0099999904632568,
            flip_x: false,
            flip_y: false,
            x: -22.5,
            y: -11.25,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "persp_block007_05_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1.0099999904632568,
            scale_y: 1.0099999904632568,
            flip_x: false,
            flip_y: false,
            x: -7.5,
            y: -3.75,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "persp_block007_05_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1.0099999904632568,
            scale_y: 1.0099999904632568,
            flip_x: false,
            flip_y: false,
            x: 7.5,
            y: 3.75,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "persp_block007_05_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1.0099999904632568,
            scale_y: 1.0099999904632568,
            flip_x: false,
            flip_y: false,
            x: 22.5,
            y: 11.25,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "persp_block007_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -22.5,
        y: -11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block007_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: -3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block007_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block007_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 22.5,
        y: 11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  988: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "emptyFrame.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "persp_block007_04_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1.0099999904632568,
            scale_y: 1.0099999904632568,
            flip_x: false,
            flip_y: false,
            x: -10,
            y: -10,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "persp_block007_04_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1.0099999904632568,
            scale_y: 1.0099999904632568,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "persp_block007_04_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1.0099999904632568,
            scale_y: 1.0099999904632568,
            flip_x: false,
            flip_y: false,
            x: 10,
            y: 10,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "persp_block007_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -10,
        y: -10,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block007_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block007_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 10,
        y: 10,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  989: {
    type: "deco",
    frame: "pit_07_3_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 9,
      height: 12,
      x: 0,
      y: 0
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    can_color: true
  },
  990: {
    type: "deco",
    frame: "pit_07_3_shine_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  991: {
    type: "deco",
    frame: "pit_07_4_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 2.4,
      height: 3.2,
      x: 0,
      y: 0
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    can_color: true
  },
  992: {
    type: "deco",
    frame: "pit_07_4_shine_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  997: {
    type: "deco",
    frame: "d_ringSeg_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    children: [
      {
        texture: "d_ringSeg_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: -0.18000030517578125,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_ringSeg_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: true,
        x: -0.18000030517578125,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_ringSeg_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: true,
        x: 0,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  998: {
    type: "deco",
    frame: "d_ringSeg_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    children: [
      {
        texture: "d_ringSeg_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: -0.18000030517578125,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_ringSeg_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: true,
        x: -0.18000030517578125,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_ringSeg_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: true,
        x: 0,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  999: {
    type: "deco",
    frame: "d_ringSeg_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    children: [
      {
        texture: "d_ringSeg_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: -0.18000030517578125,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_ringSeg_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: true,
        x: -0.18000030517578125,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_ringSeg_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: true,
        x: 0,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1000: {
    type: "deco",
    frame: "d_ringSeg_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    children: [
      {
        texture: "d_ringSeg_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: -0.18000030517578125,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_ringSeg_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: true,
        x: -0.18000030517578125,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_ringSeg_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: true,
        x: 0,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1001: {
    type: "deco",
    frame: "d_link_d_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    default_detail_color_channel: 1006,
    children: [
      {
        texture: "d_link_d_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1002: {
    type: "deco",
    frame: "d_link_d_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    default_detail_color_channel: 1006,
    children: [
      {
        texture: "d_link_d_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1003: {
    type: "deco",
    frame: "d_link_d_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    default_detail_color_channel: 1006,
    children: [
      {
        texture: "d_link_d_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1004: {
    type: "deco",
    frame: "d_link_d_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    default_detail_color_channel: 1006,
    children: [
      {
        texture: "d_link_d_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1005: {
    type: "deco",
    frame: "d_link_d_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    default_detail_color_channel: 1006,
    children: [
      {
        texture: "d_link_d_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1006: {
    type: "trigger",
    frame: null,
    gridW: 0,
    gridH: 0,
    default_z_layer: 5,
    default_z_order: 2,
    sub: "pulse"
  },
  1007: {
    type: "trigger",
    frame: "edit_eAlphaBtn_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2,
    sub: "opacity"
  },
  1009: {
    type: "deco",
    frame: "d_gradient_b_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  1010: {
    type: "deco",
    frame: "d_gradient_b_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  1011: {
    type: "deco",
    frame: "d_gradient_c_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  1012: {
    type: "deco",
    frame: "d_gradient_c_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  1013: {
    type: "deco",
    frame: "d_gradient_c_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  1014: {
    type: "deco",
    frame: "block010_slope_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    can_color: true
  },
  1015: {
    type: "deco",
    frame: "block010_slope_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    can_color: true
  },
  1016: {
    type: "solid",
    frame: "block010_slope_square_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    can_color: true
  },
  1017: {
    type: "solid",
    frame: "block010_slope_square_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    can_color: true
  },
  1018: {
    type: "solid",
    frame: "block010_slope_square_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    can_color: true
  },
  1019: {
    type: "deco",
    frame: "d_flashRing_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    children: [
      {
        texture: "d_flashRing_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -45,
        color_type: "Detail"
      },
      {
        texture: "d_flashRing_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Detail"
      },
      {
        texture: "d_flashRing_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -135,
        color_type: "Detail"
      },
      {
        texture: "d_flashRing_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -180,
        color_type: "Detail"
      },
      {
        texture: "d_flashRing_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -225,
        color_type: "Detail"
      },
      {
        texture: "d_flashRing_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -270,
        color_type: "Detail"
      },
      {
        texture: "d_flashRing_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -315,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1020: {
    type: "deco",
    frame: "d_flashRing_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    children: [
      {
        texture: "d_flashRing_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -45,
        color_type: "Detail"
      },
      {
        texture: "d_flashRing_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Detail"
      },
      {
        texture: "d_flashRing_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -135,
        color_type: "Detail"
      },
      {
        texture: "d_flashRing_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -180,
        color_type: "Detail"
      },
      {
        texture: "d_flashRing_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -225,
        color_type: "Detail"
      },
      {
        texture: "d_flashRing_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -270,
        color_type: "Detail"
      },
      {
        texture: "d_flashRing_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -315,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1021: {
    type: "deco",
    frame: "d_flashRing_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    children: [
      {
        texture: "d_flashRing_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -45,
        color_type: "Detail"
      },
      {
        texture: "d_flashRing_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Detail"
      },
      {
        texture: "d_flashRing_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -135,
        color_type: "Detail"
      },
      {
        texture: "d_flashRing_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -180,
        color_type: "Detail"
      },
      {
        texture: "d_flashRing_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -225,
        color_type: "Detail"
      },
      {
        texture: "d_flashRing_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -270,
        color_type: "Detail"
      },
      {
        texture: "d_flashRing_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -315,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1022: {
    type: "ring",
    frame: "gravring_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 36,
      height: 36,
      x: 0,
      y: 0
    },
    default_z_layer: 3,
    default_z_order: 12
  },
  1024: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block005b_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block005b_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1025: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block005b_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block005b_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1026: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block005b_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1027: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block005b_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block005b_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1028: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block005b_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 2.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block005b_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 2.5,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1029: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block005b_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1030: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block005b_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1031: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block005b_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -22.5,
        y: -11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block005b_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: -3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block005b_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block005b_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 22.5,
        y: 11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1032: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block005b_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -10,
        y: -10,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block005b_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block005b_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 10,
        y: 10,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1033: {
    type: "deco",
    frame: "block005_slope_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1034: {
    type: "deco",
    frame: "block005_slope_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1035: {
    type: "solid",
    frame: "block005_slope_square_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_square_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1036: {
    type: "solid",
    frame: "block005_slope_square_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_square_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1037: {
    type: "deco",
    frame: "block005b_slope_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1038: {
    type: "deco",
    frame: "block005b_slope_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1039: {
    type: "solid",
    frame: "block005b_slope_square_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_square_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1040: {
    type: "solid",
    frame: "block005b_slope_square_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_square_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1041: {
    type: "deco",
    frame: "block005_slope_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1042: {
    type: "deco",
    frame: "block005_slope_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1043: {
    type: "deco",
    frame: "block005b_slope_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1044: {
    type: "deco",
    frame: "block005b_slope_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1045: {
    type: "deco",
    frame: "block005_16_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1046: {
    type: "deco",
    frame: "block005_17_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1047: {
    type: "deco",
    frame: "block005b_16_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1048: {
    type: "deco",
    frame: "block005b_17_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1049: {
    type: "trigger",
    frame: "edit_eToggleBtn_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2,
    sub: "toggle"
  },
  1050: {
    type: "deco",
    frame: "d_animWave_01_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    children: [
      {
        texture: "d_animWave_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: -0.2200002670288086,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1051: {
    type: "deco",
    frame: "d_animWave_02_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    children: [
      {
        texture: "d_animWave_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: -0.2200002670288086,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1052: {
    type: "deco",
    frame: "d_animWave_03_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    children: [
      {
        texture: "d_animWave_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: -0.2200002670288086,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1053: {
    type: "deco",
    frame: "d_animLoading_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    default_detail_color_channel: 1010,
    children: [
      {
        texture: "d_animLoading_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1054: {
    type: "deco",
    frame: "d_animLoading_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    default_detail_color_channel: 1010,
    children: [
      {
        texture: "d_animLoading_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1055: {
    type: "deco",
    frame: "d_pickupCircle_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    children: [
      {
        texture: "d_pickupCircle_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: -0.18000030517578125,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_pickupCircle_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: true,
        x: -0.18000030517578125,
        y: 0.18000030517578125,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_pickupCircle_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: true,
        x: 0,
        y: 0.18000030517578125,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1056: {
    type: "deco",
    frame: "d_pickupCircle_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    children: [
      {
        texture: "d_pickupCircle_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: -0.18000030517578125,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_pickupCircle_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: true,
        x: -0.18000030517578125,
        y: 0.18000030517578125,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_pickupCircle_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: true,
        x: 0,
        y: 0.18000030517578125,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1057: {
    type: "deco",
    frame: "d_pickupCircle_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    children: [
      {
        texture: "d_pickupCircle_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: -0.18000030517578125,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_pickupCircle_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: true,
        x: -0.18000030517578125,
        y: 0.18000030517578125,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_pickupCircle_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: true,
        x: 0,
        y: 0.18000030517578125,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1058: {
    type: "deco",
    frame: "d_spiral_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  1059: {
    type: "deco",
    frame: "d_spiral_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  1060: {
    type: "deco",
    frame: "d_spiral_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  1061: {
    type: "deco",
    frame: "d_spiral_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  1062: {
    type: "deco",
    frame: "block009b_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009b_07_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1063: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block009_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block009_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1064: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block009_01b_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block009_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1065: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block009_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1066: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block009_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block009_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1067: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block009_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 2.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block009_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 2.5,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1068: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block009_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1069: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block009_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1070: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block009_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -22.5,
        y: -11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block009_05b_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: -3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block009_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block009_05b_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 22.5,
        y: 11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1071: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block009_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -10,
        y: -10,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block009_04b_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block009_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 10,
        y: 10,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1075: {
    type: "deco",
    frame: "block003_part03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block003_color_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block003_part01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block003_part01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1076: {
    type: "deco",
    frame: "block003_part01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block003_color_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block003_part01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block003_part01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block003_part01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1077: {
    type: "deco",
    frame: "block003_part01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block003_color_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block003_part02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block003_part02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block003_part01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1078: {
    type: "deco",
    frame: "block007_01_small_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_color_005_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block007_color_005_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          },
          {
            texture: "block007_color_005_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -180,
            color_type: "Detail"
          },
          {
            texture: "block007_color_005_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -270,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "block007_bgcolor_012_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.4980392156862745
      }
    ],
    can_color: true
  },
  1079: {
    type: "deco",
    frame: "plank007_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_color_006_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block007_color_006_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: -1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "block007_bgcolor_013_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.4980392156862745
      }
    ],
    can_color: true
  },
  1080: {
    type: "deco",
    frame: "plank007_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_color_006_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block007_color_006_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: -1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block007_color_005_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: -7.5,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "block007_bgcolor_013_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.4980392156862745
      }
    ],
    can_color: true
  },
  1081: {
    type: "deco",
    frame: "plank007_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Black",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_color_006_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block007_color_006_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: -1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block007_color_005_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: -7.5,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block007_color_005_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 7.5,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "block007_bgcolor_013_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Black",
        opacity: 0.4980392156862745
      }
    ],
    can_color: true
  },
  1082: {
    type: "deco",
    frame: "block007_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_color_001_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1083: {
    type: "deco",
    frame: "block007_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_color_002_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block007_color_002_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 23,
            z: -1,
            rot: 90,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1084: {
    type: "deco",
    frame: "block007_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_color_008_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block007_color_008_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -180,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1085: {
    type: "deco",
    frame: "block007_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_color_003_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block007_color_002_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block007_color_002_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1086: {
    type: "deco",
    frame: "block007_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_color_003_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block007_color_003_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          },
          {
            texture: "block007_color_003_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -180,
            color_type: "Detail"
          },
          {
            texture: "block007_color_003_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -270,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1087: {
    type: "deco",
    frame: "block007_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_06_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block007_06_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          },
          {
            texture: "block007_06_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -180,
            color_type: "Detail"
          },
          {
            texture: "block007_06_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -270,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1088: {
    type: "deco",
    frame: "block007_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_07_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1089: {
    type: "deco",
    frame: "block007_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_08_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1090: {
    type: "deco",
    frame: "block007_09_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1091: {
    type: "deco",
    frame: "block007_slope_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_slope_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1092: {
    type: "deco",
    frame: "block007_slope_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_slope_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1093: {
    type: "solid",
    frame: "block007_slope_square_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_slope_square_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1094: {
    type: "solid",
    frame: "block007_slope_square_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_slope_square_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1095: {
    type: "deco",
    frame: "block007_01_small_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_color_005_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block007_color_005_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          },
          {
            texture: "block007_color_005_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -180,
            color_type: "Detail"
          },
          {
            texture: "block007_color_005_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -270,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1096: {
    type: "deco",
    frame: "plank007_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_color_006_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block007_color_006_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: -1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1097: {
    type: "deco",
    frame: "plank007_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_color_006_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block007_color_006_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: -1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block007_color_005_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: -7.5,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1098: {
    type: "deco",
    frame: "plank007_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block007_color_006_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block007_color_006_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: -1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block007_color_005_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: -7.5,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block007_color_005_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 7.5,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1099: {
    type: "deco",
    frame: "block007_bgcolor_001_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -8,
    default_base_color_channel: 1007,
    can_color: true
  },
  1100: {
    type: "deco",
    frame: "block007_bgcolor_002_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -8,
    default_base_color_channel: 1007,
    can_color: true
  },
  1101: {
    type: "deco",
    frame: "block007_bgcolor_003_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -8,
    default_base_color_channel: 1007,
    can_color: true
  },
  1102: {
    type: "deco",
    frame: "block007_bgcolor_004_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -8,
    default_base_color_channel: 1007,
    can_color: true
  },
  1103: {
    type: "deco",
    frame: "block007_bgcolor_005_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -8,
    default_base_color_channel: 1007,
    can_color: true
  },
  1104: {
    type: "deco",
    frame: "block007_bgcolor_006_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -8,
    default_base_color_channel: 1007,
    can_color: true
  },
  1105: {
    type: "deco",
    frame: "block007_bgcolor_007_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -8,
    default_base_color_channel: 1007,
    can_color: true
  },
  1106: {
    type: "deco",
    frame: "block007_bgcolor_008_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -8,
    default_base_color_channel: 1007,
    can_color: true
  },
  1107: {
    type: "deco",
    frame: "block007_bgcolor_009_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -8,
    default_base_color_channel: 1007,
    can_color: true
  },
  1108: {
    type: "deco",
    frame: "block007_slope_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -8,
    default_base_color_channel: 1007,
    children: [
      {
        texture: "block007_bgcolor_010_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block007_bgcolor_011_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1109: {
    type: "deco",
    frame: "block007_bgcolor_001_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -8,
    default_base_color_channel: 1007,
    can_color: true
  },
  1110: {
    type: "deco",
    frame: "block007_bgcolor_012_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -8,
    default_base_color_channel: 1007,
    can_color: true
  },
  1111: {
    type: "deco",
    frame: "block007_bgcolor_013_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -8,
    default_base_color_channel: 1007,
    can_color: true
  },
  1112: {
    type: "deco",
    frame: "block007b_bgcolor_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -8,
    default_base_color_channel: 1007,
    can_color: true
  },
  1113: {
    type: "deco",
    frame: "block007b_bgcolor_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -8,
    default_base_color_channel: 1007,
    can_color: true
  },
  1114: {
    type: "deco",
    frame: "block007b_bgcolor_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -8,
    default_base_color_channel: 1007,
    can_color: true
  },
  1115: {
    type: "deco",
    frame: "block007b_bgcolor_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -8,
    default_base_color_channel: 1007,
    can_color: true
  },
  1116: {
    type: "deco",
    frame: "block007b_bgcolor_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -8,
    default_base_color_channel: 1007,
    can_color: true
  },
  1117: {
    type: "deco",
    frame: "block007b_bgcolor_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -8,
    default_base_color_channel: 1007,
    can_color: true
  },
  1118: {
    type: "deco",
    frame: "block007b_bgcolor_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -8,
    default_base_color_channel: 1007,
    can_color: true
  },
  1120: {
    type: "deco",
    frame: "block008_topcolor_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 4,
    default_base_color_channel: 1011,
    can_color: true
  },
  1122: {
    type: "deco",
    frame: "block008_topcolor_29_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 4,
    default_base_color_channel: 1011,
    can_color: true
  },
  1123: {
    type: "deco",
    frame: "block008_topcolor_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 4,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block008_topcolor_15_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1124: {
    type: "deco",
    frame: "block008_topcolor_16_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 4,
    default_base_color_channel: 1011,
    can_color: true
  },
  1125: {
    type: "deco",
    frame: "block008_topcolor_18_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 4,
    default_base_color_channel: 1011,
    can_color: true
  },
  1126: {
    type: "deco",
    frame: "block008_topcolor_24b_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 4,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block008_topcolor_24b_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block008_topcolor_15_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1127: {
    type: "deco",
    frame: "block008_topcolor_24b_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 4,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block008_topcolor_24b_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block008_topcolor_24b_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block008_topcolor_24b_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1132: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 4,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block008_topcolor_22_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -45,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1133: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 4,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block008_topcolor_23_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -45,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1134: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 4,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block008_topcolor_25_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -45,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1135: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 4,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block008_topcolor_26_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -45,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1136: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 4,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block008_topcolor_27_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -45,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1137: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 4,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block008_topcolor_28_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -45,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1138: {
    type: "deco",
    frame: "block008_topcolor_12_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 4,
    default_base_color_channel: 1011,
    can_color: true
  },
  1139: {
    type: "deco",
    frame: "block008_topcolor_13_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 4,
    default_base_color_channel: 1011,
    can_color: true
  },
  1140: {
    type: "solid",
    frame: "square_g_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1141: {
    type: "solid",
    frame: "square_g_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1142: {
    type: "solid",
    frame: "square_g_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1143: {
    type: "solid",
    frame: "square_g_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1144: {
    type: "solid",
    frame: "square_g_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1145: {
    type: "solid",
    frame: "square_g_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1146: {
    type: "solid",
    frame: "square_g_09_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1147: {
    type: "solid",
    frame: "square_g_10_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1148: {
    type: "solid",
    frame: "square_g_11_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1149: {
    type: "solid",
    frame: "square_g_12_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1150: {
    type: "solid",
    frame: "square_g_13_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1151: {
    type: "solid",
    frame: "square_g_14_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1152: {
    type: "solid",
    frame: "square_g_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1153: {
    type: "solid",
    frame: "square_g_16_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1154: {
    type: "deco",
    frame: "smallOutline_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 15,
      height: 1.5,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    can_color: true
  },
  1155: {
    type: "deco",
    frame: "smallOutline_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 15,
      height: 15,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    can_color: true
  },
  1156: {
    type: "deco",
    frame: "smallOutline_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 15,
      height: 15,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    can_color: true
  },
  1157: {
    type: "deco",
    frame: "smallOutline_04_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 15,
      height: 15,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "smallOutline_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1158: {
    type: "deco",
    frame: "smallOutline_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    can_color: true
  },
  1159: {
    type: "deco",
    frame: "block009b_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009b_08_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1160: {
    type: "deco",
    frame: "block009b_09_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009b_09_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1161: {
    type: "deco",
    frame: "block009b_10_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009b_10_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1162: {
    type: "deco",
    frame: "block006_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_color_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1163: {
    type: "deco",
    frame: "block006_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_color_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1164: {
    type: "deco",
    frame: "block006_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_color_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1165: {
    type: "deco",
    frame: "block006_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_color_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block006_color_01_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 90,
            color_type: "Detail"
          },
          {
            texture: "block006_color_01_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1166: {
    type: "deco",
    frame: "block006_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_color_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1167: {
    type: "deco",
    frame: "block006_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_color_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block006_color_01_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 90,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1168: {
    type: "deco",
    frame: "block006_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_color_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1169: {
    type: "deco",
    frame: "block006_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_color_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block006_color_04_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1170: {
    type: "deco",
    frame: "block006_09_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_color_06_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1171: {
    type: "deco",
    frame: "block006_10_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_color_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block006_color_01_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1172: {
    type: "deco",
    frame: "block006_11_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_color_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block006_color_02_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: -1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1173: {
    type: "deco",
    frame: "block006_12_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_color_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block006_color_04_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -180,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1174: {
    type: "deco",
    frame: "block006_13_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_color_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block006_color_01_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: -1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1175: {
    type: "deco",
    frame: "block006_14_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_color_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block006_color_03_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: -1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1176: {
    type: "deco",
    frame: "block006_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_color_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block006_color_03_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 90,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1177: {
    type: "deco",
    frame: "block006_16_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_color_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block006_color_04_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: -1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1178: {
    type: "deco",
    frame: "block006_17_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_color_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block006_color_04_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: -1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block006_color_04_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: -1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1179: {
    type: "deco",
    frame: "block006_18_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_color_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block006_color_04_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: -1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block006_color_04_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: -1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block006_color_04_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1180: {
    type: "deco",
    frame: "block006_19_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_color_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block006_color_04_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: -1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1181: {
    type: "deco",
    frame: "block006_20_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_color_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block006_color_04_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: -1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1182: {
    type: "deco",
    frame: "block006_21_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_color_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block006_color_04_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: -1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block006_color_04_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: -1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1183: {
    type: "deco",
    frame: "block006_22_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_color_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block006_color_01_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 90,
            color_type: "Detail"
          },
          {
            texture: "block006_color_04_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block006_color_04_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: -1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1184: {
    type: "deco",
    frame: "block006_23_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_color_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block006_color_01_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 90,
            color_type: "Detail"
          },
          {
            texture: "block006_color_04_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: -1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1185: {
    type: "deco",
    frame: "block006_24_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_color_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block006_color_01_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: -1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block006_color_04_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1186: {
    type: "deco",
    frame: "block006_25_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1187: {
    type: "deco",
    frame: "block006_slope_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_slope_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1188: {
    type: "deco",
    frame: "block006_slope_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_slope_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1189: {
    type: "solid",
    frame: "block006_slope_square_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_slope_square_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1190: {
    type: "solid",
    frame: "block006_slope_square_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_slope_square_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1191: {
    type: "deco",
    frame: "block006_color_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 10,
    default_base_color_channel: 1004,
    can_color: true
  },
  1192: {
    type: "deco",
    frame: "block006_color_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 10,
    default_base_color_channel: 1004,
    can_color: true
  },
  1193: {
    type: "deco",
    frame: "block006_color_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 10,
    default_base_color_channel: 1004,
    can_color: true
  },
  1194: {
    type: "deco",
    frame: "block006_color_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 10,
    default_base_color_channel: 1004,
    can_color: true
  },
  1195: {
    type: "deco",
    frame: "block006_color_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 10,
    default_base_color_channel: 1004,
    can_color: true
  },
  1196: {
    type: "deco",
    frame: "block006_color_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 10,
    default_base_color_channel: 1004,
    can_color: true
  },
  1197: {
    type: "deco",
    frame: "block006_color_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 10,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "block006_color_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1198: {
    type: "deco",
    frame: "block006_slope_01_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 10,
    default_base_color_channel: 1004,
    can_color: true
  },
  1199: {
    type: "deco",
    frame: "block006_slope_02_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 10,
    default_base_color_channel: 1004,
    can_color: true
  },
  1200: {
    type: "solid",
    frame: "block006_slope_square_01_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 10,
    default_base_color_channel: 1004,
    can_color: true
  },
  1201: {
    type: "solid",
    frame: "block006_slope_square_02_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 10,
    default_base_color_channel: 1004,
    can_color: true
  },
  1202: {
    type: "deco",
    frame: "blockOutlineThick_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 3,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1004,
    can_color: true
  },
  1203: {
    type: "solid",
    frame: "blockOutlineThick_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "blockOutlineThick_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1204: {
    type: "solid",
    frame: "blockOutlineThick_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "blockOutlineThick_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 90,
        color_type: "Base"
      },
      {
        texture: "blockOutlineThick_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1205: {
    type: "deco",
    frame: "blockOutlineThick_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1004,
    can_color: true
  },
  1206: {
    type: "deco",
    frame: "blockOutlineThick_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1004,
    can_color: true
  },
  1207: {
    type: "deco",
    frame: "blockOutlineThick_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1004,
    can_color: true
  },
  1208: {
    type: "deco",
    frame: "blockOutlineThick_07_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 15,
      height: 15,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "blockOutlineThick_07_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      },
      {
        texture: "blockOutlineThick_07_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -180,
        color_type: "Base"
      },
      {
        texture: "blockOutlineThick_07_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -270,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1209: {
    type: "solid",
    frame: "blockOutlineThick_08_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "blockOutlineThick_08_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1210: {
    type: "solid",
    frame: "blockOutlineThick_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "blockOutlineThick_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      },
      {
        texture: "blockOutlineThick_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -180,
        color_type: "Base"
      },
      {
        texture: "blockOutlineThick_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -270,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1220: {
    type: "deco",
    frame: "blockOutlineThickb_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 6,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1004,
    can_color: true
  },
  1221: {
    type: "solid",
    frame: "blockOutlineThickb_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "blockOutlineThickb_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1222: {
    type: "solid",
    frame: "blockOutlineThickb_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "blockOutlineThickb_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 90,
        color_type: "Base"
      },
      {
        texture: "blockOutlineThickb_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1223: {
    type: "deco",
    frame: "blockOutlineThickb_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1004,
    can_color: true
  },
  1224: {
    type: "deco",
    frame: "blockOutlineThickb_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1004,
    can_color: true
  },
  1225: {
    type: "deco",
    frame: "blockOutlineThickb_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1004,
    can_color: true
  },
  1226: {
    type: "solid",
    frame: "blockOutlineThickb_08_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "blockOutlineThickb_08_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1227: {
    type: "deco",
    frame: "blockOutlineThickb_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 7,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "blockOutlineThickb_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      },
      {
        texture: "blockOutlineThickb_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -180,
        color_type: "Base"
      },
      {
        texture: "blockOutlineThickb_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -270,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1228: {
    type: "deco",
    frame: "d_waveBG_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  1229: {
    type: "deco",
    frame: "block010_piece_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block010_piece_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1230: {
    type: "deco",
    frame: "block010_piece_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block010_piece_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1231: {
    type: "deco",
    frame: "block010_piece_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block010_piece_06_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1232: {
    type: "deco",
    frame: "block010_piece_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block010_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1233: {
    type: "deco",
    frame: "block010_piece_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block010_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1234: {
    type: "deco",
    frame: "block010_piece_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block010_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1235: {
    type: "deco",
    frame: "block010_piece_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block010_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1236: {
    type: "deco",
    frame: "block010_piece_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block010_piece_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1237: {
    type: "deco",
    frame: "block010_piece_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block010_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1238: {
    type: "deco",
    frame: "block010_piece_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block010_piece_06_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block010_piece_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1239: {
    type: "deco",
    frame: "block010_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block010_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1240: {
    type: "deco",
    frame: "block010_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block010_piece_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1241: {
    type: "deco",
    frame: "block008_topcolor_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 4,
    default_base_color_channel: 1011,
    can_color: true
  },
  1242: {
    type: "deco",
    frame: "block008_topcolor_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 4,
    default_base_color_channel: 1011,
    can_color: true
  },
  1243: {
    type: "deco",
    frame: "block008_topcolor_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 4,
    default_base_color_channel: 1011,
    can_color: true
  },
  1244: {
    type: "deco",
    frame: "block008_topcolor_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 4,
    default_base_color_channel: 1011,
    can_color: true
  },
  1245: {
    type: "deco",
    frame: "block008_topcolor_10_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 4,
    default_base_color_channel: 1011,
    can_color: true
  },
  1246: {
    type: "deco",
    frame: "block008_topcolor_11_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 4,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "block008_topcolor_11_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block008_topcolor_11_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block008_topcolor_11_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1247: {
    type: "deco",
    frame: "block009c_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_line_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_line_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_color_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_color_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1248: {
    type: "deco",
    frame: "block009c_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_line_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_line_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 90,
        color_type: "Base"
      },
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_color_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_color_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block009c_color_03_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: -1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1249: {
    type: "deco",
    frame: "block009c_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_line_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_line_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: -90,
        color_type: "Base"
      },
      {
        texture: "block009c_color_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: -90,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_color_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_color_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1250: {
    type: "deco",
    frame: "block009c_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_line_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_line_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: -90,
        color_type: "Base"
      },
      {
        texture: "block009c_color_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: -90,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_color_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block009c_color_03_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1251: {
    type: "deco",
    frame: "block009c_10_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_color_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block009c_color_03_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: -1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1252: {
    type: "deco",
    frame: "block009c_11_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_color_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block009c_color_03_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 90,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1253: {
    type: "deco",
    frame: "block009c_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_color_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_line_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_color_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_color_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block009c_color_05_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 90,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1254: {
    type: "deco",
    frame: "block009c_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_color_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_color_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 90,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_line_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_color_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block009c_color_02_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1255: {
    type: "deco",
    frame: "block009c_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_color_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_color_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: -90,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_color_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_color_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block009c_color_05_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block009c_color_05_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 90,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1256: {
    type: "deco",
    frame: "block009c_slope_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_color_08_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "emptyFrame.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block009c_color_06_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 45,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1257: {
    type: "deco",
    frame: "block009c_slope_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_color_09_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "emptyFrame.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block009c_color_07_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 30,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1258: {
    type: "deco",
    frame: "block009c_slope_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_color_06_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 45,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_color_08_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1259: {
    type: "deco",
    frame: "block009c_slope_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_color_07_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 30,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_color_09_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1260: {
    type: "deco",
    frame: "blockOutline_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 1.5,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    can_color: true
  },
  1261: {
    type: "deco",
    frame: "blockOutlineOuter1_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  1262: {
    type: "deco",
    frame: "blockOutlineThick_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 3,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  1263: {
    type: "deco",
    frame: "blockOutlineOuter2_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  1264: {
    type: "deco",
    frame: "blockOutlineThickb_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 6,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  1265: {
    type: "deco",
    frame: "blockOutlineOuter3_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  1266: {
    type: "deco",
    frame: "block009_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009_05_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1267: {
    type: "deco",
    frame: "block009_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009_06_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1268: {
    type: "trigger",
    frame: "edit_eSpawnBtn_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2,
    sub: "spawn"
  },
  1269: {
    type: "deco",
    frame: "d_gradient_c_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  1270: {
    type: "deco",
    frame: "d_gradient_c_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  1271: {
    type: "deco",
    frame: "d_gradient_b_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  1272: {
    type: "deco",
    frame: "d_gradient_b_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  1273: {
    type: "deco",
    frame: "d_gradient_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  1274: {
    type: "deco",
    frame: "d_gradient_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  1275: {
    type: "deco",
    frame: "d_key01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 9,
    can_color: true
  },
  1276: {
    type: "deco",
    frame: "d_keyHole01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 9,
    default_base_color_channel: 1,
    default_detail_color_channel: 1012,
    can_color: true
  },
  1277: {
    type: "deco",
    frame: "block009c_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_line_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_color_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1278: {
    type: "deco",
    frame: "block009c_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "block009c_line_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_color_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Black",
        opacity: 0.2980392156862745
      }
    ],
    can_color: true
  },
  1279: {
    type: "deco",
    frame: "block009c_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_line_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_line_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 90,
        color_type: "Base"
      },
      {
        texture: "block009c_color_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block009c_color_03_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: -1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1280: {
    type: "deco",
    frame: "block009c_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "block009c_line_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_line_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: -90,
        color_type: "Base"
      },
      {
        texture: "block009c_color_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: -90,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_color_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Black",
        opacity: 0.2980392156862745
      }
    ],
    can_color: true
  },
  1281: {
    type: "deco",
    frame: "block009c_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_line_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_line_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: -90,
        color_type: "Base"
      },
      {
        texture: "block009c_color_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: -90,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_color_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block009c_color_03_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1282: {
    type: "deco",
    frame: "block009c_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_color_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_color_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block009c_color_05_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 90,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1283: {
    type: "deco",
    frame: "block009c_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_color_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_color_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 90,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_color_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1284: {
    type: "deco",
    frame: "block009c_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_color_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_color_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1285: {
    type: "deco",
    frame: "block009c_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_color_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: -90,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_color_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_color_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block009c_color_05_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 90,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1286: {
    type: "deco",
    frame: "block009c_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_color_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_color_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_color_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block009c_color_05_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 90,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1287: {
    type: "deco",
    frame: "block009c_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_line_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_color_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_color_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1288: {
    type: "deco",
    frame: "block009c_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_line_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_color_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: -270,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_color_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block009c_color_05_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1289: {
    type: "deco",
    frame: "block009c_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_line_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_color_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_color_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1290: {
    type: "deco",
    frame: "block009c_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block009c_line_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_line_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block009c_color_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_color_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 1,
        rot: 180,
        color_type: "Black",
        opacity: 0.2980392156862745
      },
      {
        texture: "block009c_color_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block009c_color_05_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1291: {
    type: "deco",
    frame: "d_gradient_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  1292: {
    type: "deco",
    frame: "d_gradient_b_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  1293: {
    type: "deco",
    frame: "d_gradient_c_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  1294: {
    type: "deco",
    frame: "block005_02b_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_07_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1295: {
    type: "deco",
    frame: "block005_04b_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1296: {
    type: "deco",
    frame: "block005b_02b_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_07_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1297: {
    type: "deco",
    frame: "block005b_04b_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1298: {
    type: "deco",
    frame: "block003_part01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block003_color_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "block003_part01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block003_part01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block003_part02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1299: {
    type: "deco",
    frame: "block005c_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1300: {
    type: "deco",
    frame: "block005c_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1301: {
    type: "deco",
    frame: "block005c_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1302: {
    type: "deco",
    frame: "block005c_10_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_10_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1303: {
    type: "deco",
    frame: "block005c_11_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_11_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1304: {
    type: "deco",
    frame: "block005c_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_06_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1305: {
    type: "deco",
    frame: "block005c_slope_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1306: {
    type: "deco",
    frame: "block005c_slope_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1307: {
    type: "solid",
    frame: "block005c_slope_square_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_square_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1308: {
    type: "solid",
    frame: "block005c_slope_square_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block005_slope_square_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1309: {
    type: "solid",
    frame: "block005c_slope_square_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1310: {
    type: "deco",
    frame: "block005c_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1311: {
    type: "deco",
    frame: "block005c_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1312: {
    type: "deco",
    frame: "block005c_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1313: {
    type: "deco",
    frame: "block005c_10_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1314: {
    type: "deco",
    frame: "block005c_11_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1315: {
    type: "deco",
    frame: "block005c_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1316: {
    type: "deco",
    frame: "block005c_slope_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1317: {
    type: "deco",
    frame: "block005c_slope_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1318: {
    type: "solid",
    frame: "block005c_slope_square_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1319: {
    type: "solid",
    frame: "block005c_slope_square_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1320: {
    type: "solid",
    frame: "block005c_slope_square_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1322: {
    type: "deco",
    frame: "block006_26_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_color_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1325: {
    type: "solid",
    frame: "block006_slope_square_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_slope_square_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1326: {
    type: "solid",
    frame: "block006_slope_square_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block006_slope_square_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1327: {
    type: "deco",
    frame: "GJBeast02_01_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2
  },
  1328: {
    type: "deco",
    frame: "GJBeast03_01_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2
  },
  1329: {
    type: "deco",
    frame: "secretCoin_2_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 40,
      height: 40,
      x: 0,
      y: 0
    },
    default_z_layer: 5,
    default_z_order: 9,
    default_base_color_channel: 0
  },
  1330: {
    type: "ring",
    frame: "dropRing_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 36,
      height: 36,
      x: 0,
      y: 0
    },
    default_z_layer: 3,
    default_z_order: 12
  },
  1331: {
    type: "portal",
    frame: "portal_17_front_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 34,
      height: 86,
      x: 0,
      y: 0
    },
    default_z_layer: 5,
    default_z_order: 10,
    default_base_color_channel: 0
  },
  1332: {
    type: "pad",
    frame: "bump_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 29,
      height: 7,
      x: 0,
      y: 0
    },
    default_z_layer: 3,
    default_z_order: 12,
    default_base_color_channel: 0
  },
  1333: {
    type: "ring",
    frame: "ring_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 36,
      height: 36,
      x: 0,
      y: 0
    },
    default_z_layer: 3,
    default_z_order: 12
  },
  1334: {
    type: "portal",
    frame: "portal_11_front_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 69,
      height: 56,
      x: 0,
      y: 0
    },
    default_z_layer: 1,
    default_z_order: -6,
    default_base_color_channel: 0,
    sub: "speed_fastest"
  },
  1338: {
    type: "solid",
    frame: "blockOutline_14_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1003,
    can_color: true
  },
  1339: {
    type: "solid",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 3,
    default_base_color_channel: 1003,
    can_color: true
  },
  1340: {
    type: "deco",
    frame: "invisibleOutline_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 27,
      height: 2,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    can_color: true
  },
  1341: {
    type: "solid",
    frame: "blockOutline_14_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "invisibleOutline_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 45,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1342: {
    type: "solid",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "invisibleOutline_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 26.5,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1343: {
    type: "deco",
    frame: "invisibleOutline_b_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 25,
      height: 3,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    can_color: true
  },
  1344: {
    type: "solid",
    frame: "blockOutline_14_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "invisibleOutline_b_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 45,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1345: {
    type: "solid",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "invisibleOutline_b_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 26.5,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1346: {
    type: "trigger",
    frame: "edit_eRotateComBtn_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2,
    sub: "rotate"
  },
  1347: {
    type: "trigger",
    frame: "edit_eFollowComBtn_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2,
    sub: "follow"
  },
  1348: {
    type: "deco",
    frame: "block011_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1349: {
    type: "deco",
    frame: "block011_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1350: {
    type: "deco",
    frame: "block011_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1351: {
    type: "deco",
    frame: "block011_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1352: {
    type: "deco",
    frame: "block011b_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011b_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1353: {
    type: "deco",
    frame: "block011b_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011b_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1354: {
    type: "deco",
    frame: "block011b_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011b_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1355: {
    type: "deco",
    frame: "block011b_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011b_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1356: {
    type: "deco",
    frame: "block011_edge_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011_edge_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1357: {
    type: "deco",
    frame: "block011_edge_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011_edge_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1358: {
    type: "deco",
    frame: "block011_edge_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011_edge_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1359: {
    type: "deco",
    frame: "block011_edge_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011_edge_05_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1360: {
    type: "deco",
    frame: "block011_edge_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011_edge_06_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1361: {
    type: "deco",
    frame: "block011_edge_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011_edge_07_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1362: {
    type: "deco",
    frame: "block011_edge_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011_edge_08_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1363: {
    type: "deco",
    frame: "block011_edge_09_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011_edge_09_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1364: {
    type: "deco",
    frame: "block011_edge_10_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011_edge_10_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1365: {
    type: "deco",
    frame: "block011_edge_11_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011_edge_11_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1366: {
    type: "deco",
    frame: "block011_edge_12_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1367: {
    type: "deco",
    frame: "block011_light_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1368: {
    type: "deco",
    frame: "block011_light_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1369: {
    type: "deco",
    frame: "block011_light_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1370: {
    type: "deco",
    frame: "block011_light_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1371: {
    type: "deco",
    frame: "block011_light_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1372: {
    type: "deco",
    frame: "block011_light_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1373: {
    type: "deco",
    frame: "block011_light_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1374: {
    type: "deco",
    frame: "block011_light_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1375: {
    type: "deco",
    frame: "block011_light_09_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1376: {
    type: "deco",
    frame: "block011_light_10_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1377: {
    type: "deco",
    frame: "block011_light_11_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1378: {
    type: "deco",
    frame: "block011_light_12_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1379: {
    type: "deco",
    frame: "block011_light_13_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1380: {
    type: "deco",
    frame: "block011_light_14_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1381: {
    type: "deco",
    frame: "block011_light_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1382: {
    type: "deco",
    frame: "block011_light_16_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1383: {
    type: "deco",
    frame: "block011_light_17_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1384: {
    type: "deco",
    frame: "block011_light_18_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1385: {
    type: "deco",
    frame: "block011_light_19_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1386: {
    type: "deco",
    frame: "block011_light_20_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1387: {
    type: "deco",
    frame: "block011b_piece_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011b_piece_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1388: {
    type: "deco",
    frame: "block011b_piece_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011b_piece_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1389: {
    type: "deco",
    frame: "block011b_piece_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011b_piece_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1390: {
    type: "deco",
    frame: "block011b_piece_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011b_piece_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1391: {
    type: "deco",
    frame: "block011b_piece_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011b_piece_05_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1392: {
    type: "deco",
    frame: "block011b_piece_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011b_piece_06_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1393: {
    type: "deco",
    frame: "block011b_piece_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011b_piece_07_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1394: {
    type: "deco",
    frame: "block011b_piece_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011b_piece_08_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1395: {
    type: "deco",
    frame: "block011_edge_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011_edge_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1431: {
    type: "deco",
    frame: "block012_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1432: {
    type: "deco",
    frame: "block012_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1433: {
    type: "deco",
    frame: "block012_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1434: {
    type: "deco",
    frame: "block012_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1435: {
    type: "deco",
    frame: "block012_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012_05_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1436: {
    type: "deco",
    frame: "block012_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012_06_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1437: {
    type: "deco",
    frame: "block012_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012_07_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1438: {
    type: "deco",
    frame: "block012_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012_08_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1439: {
    type: "deco",
    frame: "block012_09_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012_09_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1440: {
    type: "deco",
    frame: "block012_10_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012_10_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1441: {
    type: "deco",
    frame: "block012_11_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1442: {
    type: "deco",
    frame: "block012b_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012b_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1443: {
    type: "deco",
    frame: "block012b_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012b_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1444: {
    type: "deco",
    frame: "block012b_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012b_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1445: {
    type: "deco",
    frame: "block012b_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012b_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1446: {
    type: "deco",
    frame: "block012b_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012b_05_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1447: {
    type: "deco",
    frame: "block012b_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012b_06_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1448: {
    type: "deco",
    frame: "block012b_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012b_07_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1449: {
    type: "deco",
    frame: "block012b_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    can_color: true
  },
  1450: {
    type: "deco",
    frame: "block012b_09_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    can_color: true
  },
  1451: {
    type: "deco",
    frame: "block012b_10_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    can_color: true
  },
  1452: {
    type: "deco",
    frame: "block012b_11_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    can_color: true
  },
  1453: {
    type: "deco",
    frame: "block012_light_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1454: {
    type: "deco",
    frame: "block012_light_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1455: {
    type: "deco",
    frame: "block012_light_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1456: {
    type: "deco",
    frame: "block012_light_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1457: {
    type: "deco",
    frame: "block012_light_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1458: {
    type: "deco",
    frame: "block012_light_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1459: {
    type: "deco",
    frame: "block012_light_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1460: {
    type: "deco",
    frame: "block012_light_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1461: {
    type: "deco",
    frame: "block013_01c_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block013_01c_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1462: {
    type: "deco",
    frame: "block013_02c_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block013_02c_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1463: {
    type: "deco",
    frame: "block013_03c_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block013_03c_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1464: {
    type: "deco",
    frame: "block013_04c_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block013_04c_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1471: {
    type: "deco",
    frame: "block013_detail_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block013_detail_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1472: {
    type: "deco",
    frame: "block013_detail_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block013_detail_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1473: {
    type: "deco",
    frame: "block013_detail_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block013_detail_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1496: {
    type: "deco",
    frame: "block013_detail_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block013_detail_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1507: {
    type: "deco",
    frame: "block013_detail_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block013_detail_05_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1510: {
    type: "deco",
    frame: "block012_12_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012_12_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1511: {
    type: "deco",
    frame: "block012_13_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012_13_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1512: {
    type: "deco",
    frame: "block012_14_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012_14_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1513: {
    type: "deco",
    frame: "block012b_12_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012b_12_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1514: {
    type: "deco",
    frame: "block012b_13_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012b_13_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1515: {
    type: "deco",
    frame: "block012b_14_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012b_14_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1516: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "waterfallAnim_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 2,
        scale_y: 2,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "waterfallAnim_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 2,
        scale_y: 2,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1517: {
    type: "deco",
    frame: "waterfallAnim_007.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "waterfallAnim_color_007.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1518: {
    type: "deco",
    frame: "waterSplash_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "waterSplash_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 2,
        scale_y: 2,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1519: {
    type: "deco",
    frame: "starAnim_004.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1011,
    can_color: true
  },
  1520: {
    type: "deco",
    frame: "edit_eShakeBtn_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2
  },
  1521: {
    type: "deco",
    frame: "d_rotatingLine_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  1522: {
    type: "deco",
    frame: "d_rotatingLine_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1006,
    can_color: true
  },
  1523: {
    type: "deco",
    frame: "d_rotatingLine_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  1524: {
    type: "deco",
    frame: "d_rotatingLine_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1006,
    can_color: true
  },
  1525: {
    type: "deco",
    frame: "d_rotatingSquare_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  1526: {
    type: "deco",
    frame: "d_rotatingSquare_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1006,
    can_color: true
  },
  1527: {
    type: "deco",
    frame: "d_rotatingSquare_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1005,
    can_color: true
  },
  1528: {
    type: "deco",
    frame: "d_rotatingSquare_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1006,
    can_color: true
  },
  1529: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block013_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block013_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1530: {
    type: "deco",
    frame: "persp_block013_09_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  1531: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block013_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1532: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block013_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block013_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1533: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block013_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 2.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block013_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 2.5,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1534: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block013_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1535: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block013_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1536: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block013_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -15,
        y: -7.5,
        z: -1,
        rot: 30,
        color_type: "Base"
      },
      {
        texture: "persp_block013_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 15,
        y: 7.5,
        z: -1,
        rot: 30,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1537: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block013_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: -7.5,
        z: -1,
        rot: 45,
        color_type: "Base"
      },
      {
        texture: "persp_block013_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 7.5,
        z: -1,
        rot: 45,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1538: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block013_07_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block013_06_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1539: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block013_06_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block013_06_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1540: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "persp_block013_08_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1552: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "emptyFrame.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "persp_block011_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: -7.5,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "persp_block011_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 7.5,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "persp_block011_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block011_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1553: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block008_topcolor_15_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "persp_block011_01b_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: -7.5,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "persp_block011_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 7.5,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "persp_block011_01b_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block011_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1554: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "emptyFrame.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "persp_block011_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "persp_block011_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1555: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "emptyFrame.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "persp_block011_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "persp_block011_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: true,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "persp_block011_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block011_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1556: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "emptyFrame.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "persp_block011_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 2.5,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "persp_block011_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: true,
            flip_y: false,
            x: 0,
            y: 2.5,
            z: -1,
            rot: -90,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "persp_block011_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 2.5,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block011_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 2.5,
        z: -1,
        rot: -90,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1557: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "emptyFrame.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "persp_block011_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "persp_block011_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1558: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "emptyFrame.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "persp_block011_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "persp_block011_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1559: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "emptyFrame.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "persp_block011_05_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1.0099999904632568,
            scale_y: 1.0099999904632568,
            flip_x: false,
            flip_y: false,
            x: -22.5,
            y: -11.25,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "persp_block011_05_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1.0099999904632568,
            scale_y: 1.0099999904632568,
            flip_x: false,
            flip_y: false,
            x: -7.5,
            y: -3.75,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "persp_block011_05_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1.0099999904632568,
            scale_y: 1.0099999904632568,
            flip_x: false,
            flip_y: false,
            x: 7.5,
            y: 3.75,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "persp_block011_05_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1.0099999904632568,
            scale_y: 1.0099999904632568,
            flip_x: false,
            flip_y: false,
            x: 22.5,
            y: 11.25,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "persp_block011_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -22.5,
        y: -11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block011_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: -3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block011_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 7.5,
        y: 3.75,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block011_05_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 22.5,
        y: 11.25,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1560: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "emptyFrame.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "persp_block011_04_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1.0099999904632568,
            scale_y: 1.0099999904632568,
            flip_x: false,
            flip_y: false,
            x: -10,
            y: -10,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "persp_block011_04_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1.0099999904632568,
            scale_y: 1.0099999904632568,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "persp_block011_04_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1.0099999904632568,
            scale_y: 1.0099999904632568,
            flip_x: false,
            flip_y: false,
            x: 10,
            y: 10,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "persp_block011_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: -10,
        y: -10,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block011_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "persp_block011_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.0099999904632568,
        scale_y: 1.0099999904632568,
        flip_x: false,
        flip_y: false,
        x: 10,
        y: 10,
        z: -1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1561: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 10,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  1562: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 2,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  1563: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 15,
      height: 2,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  1564: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 12,
      height: 12,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  1565: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 17,
      height: 17,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  1566: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 12,
      height: 12,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  1567: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 15,
      height: 10,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  1568: {
    type: "solid",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 62,
      height: 32,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  1569: {
    type: "solid",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 32,
      height: 32,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  1582: {
    type: "deco",
    frame: "fireball_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 4
    },
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "fireball_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1583: {
    type: "deco",
    frame: "fireball_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 4
    },
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "fireball_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1584: {
    type: "deco",
    frame: "GJBeast04_01_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2
  },
  1585: {
    type: "trigger",
    frame: null,
    gridW: 0,
    gridH: 0,
    sub: "animate"
  },
  1586: {
    type: "trigger",
    frame: "edit_eParticleBtn_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: 0,
    default_base_color_channel: 1011,
    default_detail_color_channel: 1011,
    children: [
      {
        texture: "edit_eParticleBtn_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true,
    sub: "particle"
  },
  1587: {
    type: "deco",
    frame: "d_heart01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 9,
    default_base_color_channel: 1,
    default_detail_color_channel: 1011,
    can_color: true
  },
  1588: {
    type: "deco",
    frame: "d_heart01_match_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 9,
    default_base_color_channel: 1,
    default_detail_color_channel: 1012,
    can_color: true
  },
  1589: {
    type: "deco",
    frame: "d_potion01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 9,
    default_base_color_channel: 1,
    default_detail_color_channel: 1011,
    can_color: true
  },
  1590: {
    type: "deco",
    frame: "d_potion01_match_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 9,
    default_base_color_channel: 1,
    default_detail_color_channel: 1012,
    can_color: true
  },
  1591: {
    type: "deco",
    frame: "lava_top_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lava_top_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1592: {
    type: "deco",
    frame: "d_animSquare_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    default_detail_color_channel: 2,
    children: [
      {
        texture: "d_animSquare_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "d_animSquare_01_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: -1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1593: {
    type: "deco",
    frame: "lava_top_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "lava_top_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1594: {
    type: "ring",
    frame: "ring_custom_01_001.png",
    gridW: 1.2,
    gridH: 1.2,
    default_z_layer: 3,
    default_z_order: 12
  },
  1595: {
    type: "trigger",
    frame: "edit_eTouchBtn_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2,
    sub: "touch"
  },
  1596: {
    type: "deco",
    frame: "d_skull_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 1,
    default_base_color_channel: 1011,
    can_color: true
  },
  1597: {
    type: "deco",
    frame: "d_skull_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 1,
    default_base_color_channel: 1011,
    can_color: true
  },
  1598: {
    type: "deco",
    frame: "d_skull01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 9,
    default_base_color_channel: 1,
    default_detail_color_channel: 1011,
    can_color: true
  },
  1599: {
    type: "deco",
    frame: "d_skull01_match_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 9,
    default_base_color_channel: 1,
    default_detail_color_channel: 1012,
    can_color: true
  },
  1600: {
    type: "deco",
    frame: "d_sign_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1011,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "d_sign_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "d_sign_01_color_02_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1601: {
    type: "deco",
    frame: "d_sign_pole_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 8,
    default_base_color_channel: 1011,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "d_sign_pole_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1602: {
    type: "deco",
    frame: "d_sign_img_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 12,
    default_base_color_channel: 1011,
    can_color: true
  },
  1603: {
    type: "deco",
    frame: "d_sign_img_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 12,
    default_base_color_channel: 1011,
    can_color: true
  },
  1604: {
    type: "deco",
    frame: "d_sign_img_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 12,
    default_base_color_channel: 1011,
    can_color: true
  },
  1605: {
    type: "deco",
    frame: "d_sign_img_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 12,
    default_base_color_channel: 1011,
    can_color: true
  },
  1606: {
    type: "deco",
    frame: "d_sign_img_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 12,
    default_base_color_channel: 1011,
    can_color: true
  },
  1607: {
    type: "deco",
    frame: "d_sign_img_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 12,
    default_base_color_channel: 1011,
    can_color: true
  },
  1608: {
    type: "deco",
    frame: "d_sign_paint_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 10,
    default_base_color_channel: 1011,
    can_color: true
  },
  1609: {
    type: "deco",
    frame: "d_sign_paint_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 10,
    default_base_color_channel: 1011,
    can_color: true
  },
  1610: {
    type: "deco",
    frame: "d_sign_paint_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 10,
    default_base_color_channel: 1011,
    can_color: true
  },
  1611: {
    type: "trigger",
    frame: "edit_eCountBtn_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2,
    sub: "count"
  },
  1612: {
    type: "trigger",
    frame: "edit_ePHideBtn_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2,
    sub: "player_hide"
  },
  1613: {
    type: "trigger",
    frame: "edit_ePShowBtn_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2,
    sub: "player_show"
  },
  1614: {
    type: "deco",
    frame: "smallCoin_01_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 9
  },
  1615: {
    type: "trigger",
    frame: "edit_eCounterBtn_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 1,
    sub: "counter"
  },
  1616: {
    type: "trigger",
    frame: "edit_eStopMoverBtn_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2,
    sub: "stop_move"
  },
  1617: {
    type: "deco",
    frame: "block013_detail_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1012,
    children: [
      {
        texture: "block013_detail_06_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1618: {
    type: "deco",
    frame: "explosion_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1011,
    can_color: true
  },
  1619: {
    type: "deco",
    frame: "spinBlade01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 25
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "spinBlade01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "spinBlade01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: true,
            flip_y: true,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "spinBlade01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: true,
        x: 0,
        y: 0,
        z: 2,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1620: {
    type: "deco",
    frame: "spinBlade02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 15
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "spinBlade02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1621: {
    type: "deco",
    frame: "block013_edge_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block013_edge_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1622: {
    type: "deco",
    frame: "block013_edge_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1623: {
    type: "deco",
    frame: "block013_edge_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block013_edge_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1624: {
    type: "deco",
    frame: "block013_edge_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block013_edge_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1625: {
    type: "deco",
    frame: "block013_edge_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1626: {
    type: "deco",
    frame: "block013_edge_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1627: {
    type: "deco",
    frame: "block013_edge_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block013_edge_07_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1628: {
    type: "deco",
    frame: "block013_edge_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1629: {
    type: "deco",
    frame: "block013_edge_09_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block013_edge_09_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1630: {
    type: "deco",
    frame: "block013_edge_10_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block013_edge_10_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1631: {
    type: "deco",
    frame: "block013_edge_11_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block013_edge_11_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1632: {
    type: "deco",
    frame: "block013_edge_12_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block013_edge_12_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1633: {
    type: "deco",
    frame: "block013_edge_13_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1634: {
    type: "deco",
    frame: "block013_edge_14_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1635: {
    type: "deco",
    frame: "block013_edge_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1636: {
    type: "deco",
    frame: "block013_edge_16_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1637: {
    type: "deco",
    frame: "block013_edge_c_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block013_edge_c_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1638: {
    type: "deco",
    frame: "block013_edge_c_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block013_edge_c_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1639: {
    type: "deco",
    frame: "block013_edge_c_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1640: {
    type: "deco",
    frame: "block013_edge_c_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1641: {
    type: "deco",
    frame: "block013_edge_c_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block013_edge_c_05_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1642: {
    type: "deco",
    frame: "block013_edge_c_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block013_edge_c_06_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1643: {
    type: "deco",
    frame: "block013_edge_c_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1644: {
    type: "deco",
    frame: "block013_edge_c_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1645: {
    type: "deco",
    frame: "block013_edge_c_09_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block013_edge_c_09_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1646: {
    type: "deco",
    frame: "block013_edge_c_10_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block013_edge_c_10_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1647: {
    type: "deco",
    frame: "block013_edge_c_11_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1648: {
    type: "deco",
    frame: "block013_edge_c_12_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1649: {
    type: "deco",
    frame: "block013_edge_c_13_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block013_edge_c_13_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1650: {
    type: "deco",
    frame: "block013_edge_c_14_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block013_edge_c_14_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1651: {
    type: "deco",
    frame: "block013_edge_c_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1652: {
    type: "deco",
    frame: "block013_edge_c_16_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1653: {
    type: "deco",
    frame: "block013_light_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1654: {
    type: "deco",
    frame: "block013_light_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1655: {
    type: "deco",
    frame: "block013_light_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1656: {
    type: "deco",
    frame: "block013_light_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1657: {
    type: "deco",
    frame: "block013_light_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1658: {
    type: "deco",
    frame: "block013_light_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1659: {
    type: "deco",
    frame: "block013_light_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1660: {
    type: "deco",
    frame: "block013_light_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1661: {
    type: "deco",
    frame: "block013_light_09_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1662: {
    type: "deco",
    frame: "block013_light_10_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1663: {
    type: "deco",
    frame: "block013_light_11_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1664: {
    type: "deco",
    frame: "block013_light_12_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1665: {
    type: "deco",
    frame: "block013_light_13_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1666: {
    type: "deco",
    frame: "block013_light_14_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1667: {
    type: "deco",
    frame: "block013_light_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1668: {
    type: "deco",
    frame: "block013_light_16_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1669: {
    type: "deco",
    frame: "block013_light_c_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1670: {
    type: "deco",
    frame: "block013_light_c_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1671: {
    type: "deco",
    frame: "block013_light_c_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1672: {
    type: "deco",
    frame: "block013_light_c_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1673: {
    type: "deco",
    frame: "block013_light_c_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1674: {
    type: "deco",
    frame: "block013_light_c_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1675: {
    type: "deco",
    frame: "block013_light_c_07_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1676: {
    type: "deco",
    frame: "block013_light_c_08_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1677: {
    type: "deco",
    frame: "block013_light_c_09_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1678: {
    type: "deco",
    frame: "block013_light_c_10_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1679: {
    type: "deco",
    frame: "block013_light_c_11_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1680: {
    type: "deco",
    frame: "block013_light_c_12_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1681: {
    type: "deco",
    frame: "block013_light_c_13_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1682: {
    type: "deco",
    frame: "block013_light_c_14_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1683: {
    type: "deco",
    frame: "block013_light_c_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1684: {
    type: "deco",
    frame: "block013_light_c_16_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 4,
    can_color: true
  },
  1685: {
    type: "deco",
    frame: "puzzle_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "puzzle_base_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "puzzle_piece_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -180,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -270,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "puzzle_piece_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -180,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -270,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1686: {
    type: "deco",
    frame: "puzzle_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "puzzle_base_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "puzzle_piece_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -180,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -270,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "puzzle_piece_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -180,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -270,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1687: {
    type: "deco",
    frame: "puzzle_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "puzzle_base_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "puzzle_piece_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -180,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -270,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "puzzle_piece_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -180,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -270,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1688: {
    type: "deco",
    frame: "puzzle_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "puzzle_base_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "puzzle_piece_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -180,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -270,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "puzzle_piece_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -180,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -270,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1689: {
    type: "deco",
    frame: "puzzle_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "puzzle_base_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "puzzle_piece_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -180,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -270,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "puzzle_piece_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -180,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -270,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1690: {
    type: "deco",
    frame: "puzzle_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "puzzle_base_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "puzzle_piece_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -180,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -270,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "puzzle_piece_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -180,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -270,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1691: {
    type: "deco",
    frame: "puzzle_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "puzzle_base_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "puzzle_piece_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -180,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -270,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "puzzle_piece_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -180,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -270,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1692: {
    type: "deco",
    frame: "puzzle_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "puzzle_base_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "puzzle_piece_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -180,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -270,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "puzzle_piece_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -180,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -270,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1693: {
    type: "deco",
    frame: "puzzle_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "puzzle_base_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "puzzle_piece_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -180,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -270,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "puzzle_piece_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -180,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -270,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1694: {
    type: "deco",
    frame: "puzzle_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "puzzle_base_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "puzzle_piece_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -180,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -270,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "puzzle_piece_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -180,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -270,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1695: {
    type: "deco",
    frame: "puzzle_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "puzzle_base_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "puzzle_piece_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -180,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -270,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "puzzle_piece_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -180,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -270,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1696: {
    type: "deco",
    frame: "puzzle_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "puzzle_base_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "puzzle_piece_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -180,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -270,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "puzzle_piece_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -180,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -270,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1697: {
    type: "deco",
    frame: "d_zag_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1006,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "d_zag_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1698: {
    type: "deco",
    frame: "d_zag_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1006,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "d_zag_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1699: {
    type: "deco",
    frame: "d_zag_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1006,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "d_zag_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1700: {
    type: "trigger",
    frame: "edit_eParticleBtn_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 0,
    default_base_color_channel: 1011,
    default_detail_color_channel: 1011,
    children: [
      {
        texture: "edit_eParticleBtn_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true,
    sub: "particle"
  },
  1701: {
    type: "deco",
    frame: "bladeTrap01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 6
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "bladeTrap01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "bladeTrap01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: true,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "bladeTrap01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: 2,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1702: {
    type: "deco",
    frame: "bladeTrap02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 6
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "bladeTrap02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "bladeTrap02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: true,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "bladeTrap02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: 2,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1703: {
    type: "deco",
    frame: "bladeTrap03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 6
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "bladeTrap03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "bladeTrap03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: true,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "bladeTrap03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: 2,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1704: {
    type: "ring",
    frame: "dashRing_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 36,
      height: 36,
      x: 0,
      y: 0
    },
    default_z_layer: 3,
    default_z_order: 12
  },
  1705: {
    type: "deco",
    frame: "sawblade_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1010,
    children: [
      {
        texture: "sawblade_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -0.06999969482421875,
        y: 0,
        z: -1,
        rot: -180,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1706: {
    type: "deco",
    frame: "sawblade_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1010,
    can_color: true
  },
  1707: {
    type: "deco",
    frame: "sawblade_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1010,
    can_color: true
  },
  1708: {
    type: "deco",
    frame: "darkblade_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 28.9
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1010,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "darkblade_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "darkblade_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: -0.18000030517578125,
        y: 0,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "darkblade_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: true,
        x: -0.18000030517578125,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "darkblade_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: true,
        x: 0,
        y: 0.18000030517578125,
        z: 1,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1709: {
    type: "deco",
    frame: "darkblade_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 17.44
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1010,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "darkblade_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1710: {
    type: "deco",
    frame: "darkblade_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Circle",
      radius: 12.9
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1010,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "darkblade_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1711: {
    type: "deco",
    frame: "pit_b_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 14.1,
      height: 20,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  1712: {
    type: "deco",
    frame: "pit_b_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 13.5,
      height: 22.4,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  1713: {
    type: "deco",
    frame: "pit_b_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 11.7,
      height: 20,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  1714: {
    type: "deco",
    frame: "pit_b_04_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 11.4,
      height: 16.4,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    can_color: true
  },
  1715: {
    type: "deco",
    frame: "pit_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 9,
      height: 10.8,
      x: 0,
      y: 0
    },
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1010,
    can_color: true
  },
  1716: {
    type: "deco",
    frame: "pit_01_low_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 9,
      height: 6,
      x: 0,
      y: 0
    },
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1010,
    can_color: true
  },
  1717: {
    type: "solid",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1010,
    children: [
      {
        texture: "pit_01_slope_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 45,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1718: {
    type: "solid",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1010,
    children: [
      {
        texture: "pit_01_slope_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 30,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1719: {
    type: "deco",
    frame: "pit_04_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 9,
      height: 7.2,
      x: 0,
      y: 0
    },
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1010,
    can_color: true
  },
  1720: {
    type: "deco",
    frame: "pit_04_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 6,
      height: 7.2,
      x: -5,
      y: 0
    },
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1010,
    can_color: true
  },
  1721: {
    type: "deco",
    frame: "pit_04_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 6,
      height: 6.8,
      x: 5,
      y: 0
    },
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1010,
    can_color: true
  },
  1722: {
    type: "deco",
    frame: "pit_04_low_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 9,
      height: 4,
      x: 0,
      y: 0
    },
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1010,
    can_color: true
  },
  1723: {
    type: "solid",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1010,
    children: [
      {
        texture: "pit_04_slope_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 45,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1724: {
    type: "solid",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1010,
    children: [
      {
        texture: "pit_04_slope_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 30,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1725: {
    type: "deco",
    frame: "pit_05_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 9,
      height: 5.2,
      x: 0,
      y: 0
    },
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1010,
    can_color: true
  },
  1726: {
    type: "deco",
    frame: "pit_05_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 6,
      height: 4.4,
      x: -5,
      y: 0
    },
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1010,
    can_color: true
  },
  1727: {
    type: "deco",
    frame: "pit_05_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 4.5,
      height: 5.2,
      x: 0,
      y: 0
    },
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1010,
    can_color: true
  },
  1728: {
    type: "deco",
    frame: "pit_06_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 9,
      height: 7.2,
      x: 0,
      y: 0
    },
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1010,
    can_color: true
  },
  1729: {
    type: "deco",
    frame: "pit_06_2_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 5.2,
      height: 7.2,
      x: -5,
      y: 0
    },
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1010,
    can_color: true
  },
  1730: {
    type: "deco",
    frame: "pit_07_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 9,
      height: 6,
      x: 0,
      y: 0
    },
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1010,
    can_color: true
  },
  1731: {
    type: "deco",
    frame: "pit_07_2_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 2.4,
      height: 3.2,
      x: 0,
      y: 0
    },
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1010,
    can_color: true
  },
  1732: {
    type: "deco",
    frame: "pit_07_3_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 9,
      height: 12,
      x: 0,
      y: 0
    },
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1010,
    can_color: true
  },
  1733: {
    type: "deco",
    frame: "pit_07_4_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 2.4,
      height: 3.2,
      x: 0,
      y: 0
    },
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 1,
    default_base_color_channel: 1010,
    can_color: true
  },
  1734: {
    can_color: true,
    children: [
      {
        frame: "blackCogwheel_01_color_001.png",
        localDy: 0,
        tint: 52224,
        z: -100
      },
      {
        frame: "blackCogwheel_01_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      },
      {
        frame: "blackCogwheel_01_001.png",
        localDy: 0,
        tint: 65280,
        z: 1
      },
      {
        frame: "blackCogwheel_01_001.png",
        localDy: 0,
        tint: 65280,
        z: 1
      },
      {
        frame: "blackCogwheel_01_001.png",
        localDy: 0,
        tint: 65280,
        z: 1
      }
    ],
    default_base_color_channel: 1004,
    default_detail_color_channel: 1010,
    frame: "blackCogwheel_01_001.png",
    glow_frame: "blackCogwheel_01_glow_001.png",
    gridH: 1.3666666746139526,
    gridW: 1.3666666746139526,
    spritesheet: "GJ_GameSheet-uhd",
    type: "hazard",
    z: 1,
    hitbox: {
      type: "Circle",
      radius: 32
    },
    color_type: "Base"
  },
  1735: {
    can_color: true,
    children: [
      {
        frame: "blackCogwheel_02_color_001.png",
        localDy: 0,
        tint: 52224,
        z: -100
      },
      {
        frame: "blackCogwheel_02_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      }
    ],
    default_base_color_channel: 1004,
    default_detail_color_channel: 1010,
    frame: "blackCogwheel_02_001.png",
    glow_frame: "blackCogwheel_02_glow_001.png",
    gridH: 1.7666666507720947,
    gridW: 1.7333333492279053,
    spritesheet: "GJ_GameSheet-uhd",
    type: "hazard",
    z: 1,
    hitbox: {
      type: "Circle",
      radius: 17.51
    },
    color_type: "Base"
  },
  1736: {
    can_color: true,
    children: [
      {
        frame: "blackCogwheel_03_color_001.png",
        localDy: 0,
        tint: 52224,
        z: -100
      },
      {
        frame: "blackCogwheel_03_001.png",
        localDy: 0,
        tint: 65280,
        z: -1
      }
    ],
    default_base_color_channel: 1004,
    default_detail_color_channel: 1010,
    frame: "blackCogwheel_03_001.png",
    glow_frame: "blackCogwheel_03_glow_001.png",
    gridH: 1.2999999523162842,
    gridW: 1.2999999523162842,
    spritesheet: "GJ_GameSheet-uhd",
    type: "hazard",
    z: 1,
    hitbox: {
      type: "Circle",
      radius: 12.48
    },
    color_type: "Base"
  },
  1737: {
    type: "deco",
    frame: "d_pixelArt01_001_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1738: {
    type: "deco",
    frame: "d_pixelArt01_002_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1739: {
    type: "deco",
    frame: "d_pixelArt01_003_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1740: {
    type: "deco",
    frame: "d_pixelArt01_004_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1741: {
    type: "deco",
    frame: "d_pixelArt01_005_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1742: {
    type: "deco",
    frame: "d_pixelArt01_006_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1743: {
    type: "solid",
    frame: "triangle_a_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "blockOutline_14new_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 2,
        rot: 45,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1744: {
    type: "solid",
    frame: "triangle_a_04_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "blockOutline_15new_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 2,
        rot: 26.5,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1745: {
    type: "solid",
    frame: "triangle_c_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "blockOutline_14new_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 2,
        rot: 45,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1746: {
    type: "solid",
    frame: "triangle_c_04_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "blockOutline_15new_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 2,
        rot: 26.5,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1747: {
    type: "solid",
    frame: "lighttriangle_01_02_color_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "blockOutline_14new_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 2,
        rot: 45,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1748: {
    type: "solid",
    frame: "lighttriangle_01_04_color_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Black",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "blockOutline_15new_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 2,
        rot: 26.5,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1749: {
    type: "solid",
    frame: "triangle_f_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "blockOutline_14new_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 2,
        rot: 45,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1750: {
    type: "solid",
    frame: "triangle_f_04_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    children: [
      {
        texture: "blockOutline_15new_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 2,
        rot: 26.5,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1751: {
    type: "ring",
    frame: "dashRing_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 36,
      height: 36,
      x: 0,
      y: 0
    },
    default_z_layer: 3,
    default_z_order: 12
  },
  1752: {
    type: "deco",
    frame: "d_ringSpiral_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  1753: {
    type: "deco",
    frame: "gridLine01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  1754: {
    type: "deco",
    frame: "gridLine02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  1755: {
    type: "deco",
    frame: "blockOutline_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    can_color: true
  },
  1756: {
    type: "deco",
    frame: "d_link_b_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  1757: {
    type: "deco",
    frame: "gridLine03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  1758: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    children: [
      {
        texture: "d_gradient_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.4142132997512817,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 45,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1759: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    children: [
      {
        texture: "d_gradient_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 2.2360665798187256,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 26.565000534057617,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1760: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    children: [
      {
        texture: "d_gradient_b_06_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 2.8284265995025635,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 45,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1761: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    children: [
      {
        texture: "d_gradient_b_06_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 4.472133159637451,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 26.565000534057617,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1762: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    children: [
      {
        texture: "d_gradient_c_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1.4142132997512817,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 45,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1763: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    children: [
      {
        texture: "d_gradient_c_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 2.2360665798187256,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 26.565000534057617,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1764: {
    type: "deco",
    frame: "d_small_ball_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 1,
    can_color: true
  },
  1765: {
    type: "deco",
    frame: "d_small_ball_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 1,
    can_color: true
  },
  1766: {
    type: "deco",
    frame: "d_small_ball_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 1,
    can_color: true
  },
  1767: {
    type: "deco",
    frame: "d_small_ball_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 1,
    can_color: true
  },
  1768: {
    type: "deco",
    frame: "d_small_ball_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: -5,
    default_base_color_channel: 1,
    can_color: true
  },
  1769: {
    type: "deco",
    frame: "block013_01c_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1770: {
    type: "deco",
    frame: "block013_03c_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1771: {
    type: "deco",
    frame: "block013_02c_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1772: {
    type: "deco",
    frame: "block013_04c_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1773: {
    type: "deco",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block013_01c_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block013_02c_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "blockOutline_15_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block013_02c_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 15,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1774: {
    type: "deco",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block013_03c_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block013_04c_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "blockOutline_15_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block013_04c_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 15,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1775: {
    type: "deco",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block013_01c_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block013_02c_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "blockOutline_15_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block013_01c_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: -15,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1776: {
    type: "deco",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "block013_03c_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block013_04c_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1777: {
    type: "deco",
    frame: "block011_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1778: {
    type: "deco",
    frame: "block011_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1779: {
    type: "deco",
    frame: "block011_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1780: {
    type: "deco",
    frame: "block011_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1781: {
    type: "deco",
    frame: "block011b_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011b_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1782: {
    type: "deco",
    frame: "block011b_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011b_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1783: {
    type: "deco",
    frame: "block011b_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011b_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1784: {
    type: "deco",
    frame: "block011b_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011b_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1785: {
    type: "deco",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "block011_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block011_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1786: {
    type: "deco",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "block011_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block011_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1787: {
    type: "deco",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "block011_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block011_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1788: {
    type: "deco",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1003,
    children: [
      {
        texture: "block011_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block011_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1789: {
    type: "deco",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011b_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block011b_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block011b_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block011b_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 15,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1790: {
    type: "deco",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011b_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block011b_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block011b_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block011b_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: -15,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block011b_04_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 15,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1791: {
    type: "deco",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011b_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block011b_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block011b_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block011b_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: -15,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block011b_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 15,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1792: {
    type: "deco",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block011b_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block011b_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block011b_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block011b_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: -15,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block011b_04_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 15,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1793: {
    type: "deco",
    frame: "block012_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1794: {
    type: "deco",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block012_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "blockOutline_15_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block012_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: -15,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block012_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 15,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1795: {
    type: "deco",
    frame: "block012_12_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    can_color: true
  },
  1796: {
    type: "deco",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012_13_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block012_13_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "blockOutline_15_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block012_13_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 15,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1797: {
    type: "deco",
    frame: "puzzle_base_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "puzzle_base_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "puzzle_piece_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -90,
            color_type: "Detail"
          },
          {
            texture: "puzzle_piece_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: -180,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "puzzle_piece_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -90,
        color_type: "Base"
      },
      {
        texture: "puzzle_piece_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: -180,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1798: {
    type: "deco",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1003,
    can_color: true
  },
  1799: {
    type: "deco",
    frame: "block012b_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012b_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1800: {
    type: "deco",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012b_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block012b_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "blockOutline_15_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block012b_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: -15,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block012b_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 15,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1801: {
    type: "deco",
    frame: "block012b_12_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012b_12_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1802: {
    type: "deco",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012b_13_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block012b_13_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "blockOutline_15_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block012b_13_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: -15,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block012b_13_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 15,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1803: {
    type: "deco",
    frame: "block012_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1804: {
    type: "deco",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block012_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "blockOutline_15_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block012_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: -15,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block012_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 15,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1805: {
    type: "deco",
    frame: "block012b_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012b_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1806: {
    type: "deco",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012b_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block012b_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "blockOutline_15_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block012b_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: -15,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block012b_03_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 15,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1807: {
    type: "deco",
    frame: "block012_13_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012_13_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1808: {
    type: "deco",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012_13_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block012_14_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "blockOutline_15_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block012_13_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: -15,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block012_14_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 15,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1809: {
    type: "deco",
    frame: "block012b_13_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012b_13_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1810: {
    type: "deco",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -9,
    default_base_color_channel: 2,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "block012b_13_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "block012b_14_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 15,
        y: 0,
        z: 0,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "blockOutline_15_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "block012b_13_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: -15,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          },
          {
            texture: "block012b_14_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 15,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1811: {
    type: "deco",
    frame: "edit_eInstantCountBtn_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2
  },
  1812: {
    type: "deco",
    frame: "edit_eOnDeathBtn_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2
  },
  1813: {
    type: "deco",
    frame: "blockOutline_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    can_color: true
  },
  1814: {
    type: "deco",
    frame: "edit_eFollowPComBtn_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2
  },
  1815: {
    type: "deco",
    frame: "edit_eCollisionBtn_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2
  },
  1816: {
    type: "solid",
    frame: "edit_eCollisionBlock01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 30,
      x: 0,
      y: 0
    },
    default_z_layer: 5,
    default_z_order: 2
  },
  1817: {
    type: "deco",
    frame: "edit_ePickupBtn_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2
  },
  1818: {
    type: "deco",
    frame: "edit_eBGEOn_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2
  },
  1819: {
    type: "deco",
    frame: "edit_eBGEOff_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2
  },
  1820: {
    type: "solid",
    frame: "lightsquare_02_01_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1,
    can_color: true
  },
  1821: {
    type: "solid",
    frame: "lightsquare_02_02_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1,
    can_color: true
  },
  1823: {
    type: "solid",
    frame: "lightsquare_02_03_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1,
    can_color: true
  },
  1824: {
    type: "solid",
    frame: "lightsquare_02_04_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1,
    can_color: true
  },
  1825: {
    type: "solid",
    frame: "lightsquare_02_05_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1,
    can_color: true
  },
  1826: {
    type: "solid",
    frame: "lightsquare_02_06_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1,
    can_color: true
  },
  1827: {
    type: "solid",
    frame: "lightsquare_02_07_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1,
    can_color: true
  },
  1828: {
    type: "solid",
    frame: "lightsquare_02_08_color_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1,
    can_color: true
  },
  1829: {
    type: "deco",
    frame: "blockOutline_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    can_color: true
  },
  1830: {
    type: "deco",
    frame: "gridLine04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    can_color: true
  },
  1831: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    children: [
      {
        texture: "d_scaleFadeRing_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -15,
        y: 15,
        z: 0,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1832: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    children: [
      {
        texture: "d_scaleFadeRing_03_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 7.5,
        z: 0,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1833: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    children: [
      {
        texture: "d_scaleFadeRing_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -15,
        y: 15,
        z: 0,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1834: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1007,
    children: [
      {
        texture: "d_scaleFadeRing_04_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -7.5,
        y: 7.5,
        z: 0,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1835: {
    type: "deco",
    frame: "d_scaleFadeRing_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    can_color: true
  },
  1836: {
    type: "deco",
    frame: "d_scaleFadeRing_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    can_color: true
  },
  1837: {
    type: "deco",
    frame: "d_scaleFadeRing_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    can_color: true
  },
  1838: {
    type: "deco",
    frame: "d_scaleFadeRing_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1004,
    can_color: true
  },
  1839: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    children: [
      {
        texture: "d_scaleFadeRing_01_001.png",
        anchor_x: 0.5,
        anchor_y: -0.5,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_scaleFadeRing_01_001.png",
        anchor_x: -0.5,
        anchor_y: -0.5,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_scaleFadeRing_01_001.png",
        anchor_x: -0.5,
        anchor_y: 0.5,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: true,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_scaleFadeRing_01_001.png",
        anchor_x: 0.5,
        anchor_y: 0.5,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: true,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1840: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    children: [
      {
        texture: "d_scaleFadeRing_03_001.png",
        anchor_x: 0.5,
        anchor_y: -0.5,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_scaleFadeRing_03_001.png",
        anchor_x: -0.5,
        anchor_y: -0.5,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_scaleFadeRing_03_001.png",
        anchor_x: -0.5,
        anchor_y: 0.5,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: true,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_scaleFadeRing_03_001.png",
        anchor_x: 0.5,
        anchor_y: 0.5,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: true,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1841: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    children: [
      {
        texture: "d_scaleFadeRing_02_001.png",
        anchor_x: 0.5,
        anchor_y: -0.5,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_scaleFadeRing_02_001.png",
        anchor_x: -0.5,
        anchor_y: -0.5,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_scaleFadeRing_02_001.png",
        anchor_x: -0.5,
        anchor_y: 0.5,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: true,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_scaleFadeRing_02_001.png",
        anchor_x: 0.5,
        anchor_y: 0.5,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: true,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1842: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    children: [
      {
        texture: "d_scaleFadeRing_04_001.png",
        anchor_x: 0.5,
        anchor_y: -0.5,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_scaleFadeRing_04_001.png",
        anchor_x: -0.5,
        anchor_y: -0.5,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_scaleFadeRing_04_001.png",
        anchor_x: -0.5,
        anchor_y: 0.5,
        scale_x: 1,
        scale_y: 1,
        flip_x: true,
        flip_y: true,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_scaleFadeRing_04_001.png",
        anchor_x: 0.5,
        anchor_y: 0.5,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: true,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1843: {
    type: "deco",
    frame: "d_sign_tile_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1011,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "d_sign_tile_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1844: {
    type: "deco",
    frame: "gjHand_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1011,
    can_color: true
  },
  1845: {
    type: "deco",
    frame: "gjHand_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1011,
    can_color: true
  },
  1846: {
    type: "deco",
    frame: "gjHand_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1011,
    can_color: true
  },
  1847: {
    type: "deco",
    frame: "gjHand_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1011,
    can_color: true
  },
  1848: {
    type: "deco",
    frame: "gjHand_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1011,
    can_color: true
  },
  1849: {
    type: "deco",
    frame: "gj_smoke01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1011,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "gj_smoke01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1850: {
    type: "deco",
    frame: "gj_smoke02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1011,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "gj_smoke02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1851: {
    type: "deco",
    frame: "gj_drops01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1011,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "gj_drops01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1852: {
    type: "deco",
    frame: "gj_drops02_005.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1011,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "gj_drops02_color_005.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1853: {
    type: "deco",
    frame: "gj_drops03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1011,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "gj_drops03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1854: {
    type: "deco",
    frame: "gj_drops04_003.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1011,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "gj_drops04_color_003.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1855: {
    type: "deco",
    frame: "gj_drops05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1011,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "explosion_01_007.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Base"
      },
      {
        texture: "gj_drops05_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "explosion_01_007.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -1,
            rot: 0,
            color_type: "Detail"
          }
        ]
      }
    ],
    can_color: true
  },
  1856: {
    type: "deco",
    frame: "gj_bubble01_005.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1011,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "gj_bubble01_color_005.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1857: {
    type: "deco",
    frame: "gj_lightning01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1011,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "gj_lightning01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1858: {
    type: "deco",
    frame: "gj_drops06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1011,
    children: [
      {
        texture: "gj_drops06_2_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "gj_drops06_3_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1859: {
    type: "deco",
    frame: "blockOutline_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    can_color: true
  },
  1860: {
    type: "deco",
    frame: "gj_lightning02_004.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1011,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "gj_lightning02_color_004.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1861: {
    type: "deco",
    frame: "blockDesign01_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "blockDesign01_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1862: {
    type: "deco",
    frame: "blockDesign01_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "blockDesign01_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1863: {
    type: "deco",
    frame: "blockDesign01_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "blockDesign01_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1864: {
    type: "deco",
    frame: "blockDesign01_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "blockDesign01_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1865: {
    type: "deco",
    frame: "blockDesign02_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "blockDesign02_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1866: {
    type: "deco",
    frame: "blockDesign02_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "blockDesign02_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1867: {
    type: "deco",
    frame: "blockDesign02_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "blockDesign02_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1868: {
    type: "deco",
    frame: "blockDesign02_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "blockDesign02_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1869: {
    type: "deco",
    frame: "blockDesign03_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "blockDesign03_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1870: {
    type: "deco",
    frame: "blockDesign03_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "blockDesign03_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1871: {
    type: "deco",
    frame: "blockDesign03_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "blockDesign03_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1872: {
    type: "deco",
    frame: "blockDesign03_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "blockDesign03_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1873: {
    type: "deco",
    frame: "blockDesign04_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "blockDesign04_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1874: {
    type: "deco",
    frame: "blockDesign05_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "blockDesign05_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1875: {
    type: "deco",
    frame: "blockDesign05_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "blockDesign05_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1876: {
    type: "deco",
    frame: "blockDesign05_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "blockDesign05_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1877: {
    type: "deco",
    frame: "blockDesign05_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "blockDesign05_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1878: {
    type: "deco",
    frame: "blockDesign06_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "blockDesign06_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1879: {
    type: "deco",
    frame: "blockDesign06_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "blockDesign06_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1880: {
    type: "deco",
    frame: "blockDesign06_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "blockDesign06_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1881: {
    type: "deco",
    frame: "blockDesign06_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "blockDesign06_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1882: {
    type: "deco",
    frame: "blockDesign07_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "blockDesign07_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1883: {
    type: "deco",
    frame: "blockDesign07_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "blockDesign07_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1884: {
    type: "deco",
    frame: "blockDesign07_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "blockDesign07_03_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1885: {
    type: "deco",
    frame: "blockDesign07_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 1,
    default_z_order: -7,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "blockDesign07_04_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1886: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    children: [
      {
        texture: "d_gradient_02_001.png",
        anchor_x: 0.5,
        anchor_y: -0.5,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_gradient_02_001.png",
        anchor_x: 0.5,
        anchor_y: -0.5,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_gradient_02_001.png",
        anchor_x: 0.5,
        anchor_y: -0.5,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_gradient_02_001.png",
        anchor_x: 0.5,
        anchor_y: -0.5,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1887: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    children: [
      {
        texture: "d_gradient_b_02_001.png",
        anchor_x: 0.5,
        anchor_y: -0.5,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_gradient_b_02_001.png",
        anchor_x: 0.5,
        anchor_y: -0.5,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_gradient_b_02_001.png",
        anchor_x: 0.5,
        anchor_y: -0.5,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_gradient_b_02_001.png",
        anchor_x: 0.5,
        anchor_y: -0.5,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1888: {
    type: "deco",
    frame: "emptyFrame.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: 9,
    default_base_color_channel: 1,
    children: [
      {
        texture: "d_gradient_c_02_001.png",
        anchor_x: 0.5,
        anchor_y: -0.5,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: -0.25,
        y: 0.25,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_gradient_c_02_001.png",
        anchor_x: 0.5,
        anchor_y: -0.5,
        scale_x: -1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0.25,
        y: 0.25,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_gradient_c_02_001.png",
        anchor_x: 0.5,
        anchor_y: -0.5,
        scale_x: -1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: 0.25,
        y: -0.25,
        z: -1,
        rot: 0,
        color_type: "Detail"
      },
      {
        texture: "d_gradient_c_02_001.png",
        anchor_x: 0.5,
        anchor_y: -0.5,
        scale_x: 1,
        scale_y: -1,
        flip_x: false,
        flip_y: false,
        x: -0.25,
        y: -0.25,
        z: -1,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1889: {
    type: "deco",
    frame: "fakeSpike_01_001.png",
    gridW: 0,
    gridH: 0,
    black: true,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -4,
    default_base_color_channel: 1010,
    can_color: true
  },
  1890: {
    type: "deco",
    frame: "fakeSpike_02_001.png",
    gridW: 0,
    gridH: 0,
    black: true,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -4,
    default_base_color_channel: 1010,
    can_color: true
  },
  1891: {
    type: "deco",
    frame: "fakeSpike_03_001.png",
    gridW: 0,
    gridH: 0,
    black: true,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -4,
    default_base_color_channel: 1010,
    can_color: true
  },
  1892: {
    type: "deco",
    frame: "fakeSpike_04_001.png",
    gridW: 0,
    gridH: 0,
    black: true,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 1,
    default_z_order: -4,
    default_base_color_channel: 1010,
    can_color: true
  },
  1893: {
    type: "solid",
    frame: "square_b_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  1894: {
    type: "solid",
    frame: "square_b_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  1895: {
    type: "solid",
    frame: "square_b_03_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  1896: {
    type: "solid",
    frame: "square_b_04_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  1897: {
    type: "solid",
    frame: "square_b_05_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  1898: {
    type: "solid",
    frame: "square_b_06_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  1899: {
    type: "deco",
    frame: "blockOutline_14_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    children: [
      {
        texture: "triangle_b_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 45,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1900: {
    type: "deco",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    children: [
      {
        texture: "triangle_b_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -1,
        rot: 26.565000534057617,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1901: {
    type: "solid",
    frame: "triangle_b_square_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  1902: {
    type: "solid",
    frame: "triangle_b_square_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Detail",
    swap_base_detail: true,
    default_z_layer: 3,
    default_z_order: 9,
    default_base_color_channel: 1,
    can_color: true
  },
  1903: {
    type: "deco",
    frame: "plank_01_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 14,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "plank_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1904: {
    type: "deco",
    frame: "plank_01_02_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 14,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "plank_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1905: {
    type: "deco",
    frame: "plank_01_03_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 30,
      height: 14,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "plank_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1906: {
    type: "solid",
    frame: "blockOutline_14_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 30,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "emptyFrame.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "plank_01_slope_01_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -2,
            rot: 45,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "plank_01_slope_01_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 10,
        rot: 45,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1907: {
    type: "solid",
    frame: "blockOutline_15_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Slope",
      width: 60,
      height: 30
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1003,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "emptyFrame.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail",
        children: [
          {
            texture: "plank_01_slope_02_color_001.png",
            anchor_x: 0,
            anchor_y: 0,
            scale_x: 1,
            scale_y: 1,
            flip_x: false,
            flip_y: false,
            x: 0,
            y: 0,
            z: -2,
            rot: 26.565000534057617,
            color_type: "Detail"
          }
        ]
      },
      {
        texture: "plank_01_slope_02_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: 10,
        rot: 26.565000534057617,
        color_type: "Base"
      }
    ],
    can_color: true
  },
  1908: {
    type: "solid",
    frame: "plank_01_square_01_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "plank_01_square_01_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1909: {
    type: "solid",
    frame: "plank_01_square_02_001.png",
    gridW: 1,
    gridH: 1,
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "plank_01_square_02_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1910: {
    type: "solid",
    frame: "square_01_small_001.png",
    gridW: 1,
    gridH: 1,
    hitbox: {
      type: "Box",
      width: 15,
      height: 15,
      x: 0,
      y: 0
    },
    color_type: "Base",
    default_z_layer: 5,
    default_z_order: 2,
    default_base_color_channel: 1004,
    default_detail_color_channel: 1,
    children: [
      {
        texture: "square_01_small_color_001.png",
        anchor_x: 0,
        anchor_y: 0,
        scale_x: 1,
        scale_y: 1,
        flip_x: false,
        flip_y: false,
        x: 0,
        y: 0,
        z: -100,
        rot: 0,
        color_type: "Detail"
      }
    ],
    can_color: true
  },
  1911: {
    type: "deco",
    frame: "plank_01_small_001.png",
    gridW: 1,
    gridH: 1,
    default_z_layer: 5,
    default_z_order: 2
  }
};
}
