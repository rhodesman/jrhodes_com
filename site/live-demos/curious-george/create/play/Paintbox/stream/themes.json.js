var themes_data = {
  current_theme: 'default',
  themes: {
    'default': {
      name: 'Curious<br />George',
      enabled: true,
      stamps: [
        {imagepath: 'stream/default/stamps/grasses.png', thumb_imagepath: 'stream/default/stamps/grasses_thumb.png', width: 100, height: 100, min_distance: 25, choose_next_mode: 'random'},
        {imagepath: 'stream/default/stamps/clouds.png', thumb_imagepath: 'stream/default/stamps/clouds_thumb.png', width: 100, height: 100, min_distance: 50, choose_next_mode: 'liniar'},
        {imagepath: 'stream/default/stamps/banana.png', thumb_imagepath: 'stream/default/stamps/banana_thumb.png', width: 100, height: 100, min_distance: 30, choose_next_mode: 'liniar'},
        {imagepath: 'stream/default/stamps/beachball.png', thumb_imagepath: 'stream/default/stamps/beachball_thumb.png', width: 100, height: 100, min_distance: 90, choose_next_mode: 'liniar'}
      ],
      clipart: [
        {imagepath: 'stream/default/clipart/yellowhatman.png', thumb_imagepath: 'stream/default/clipart/yellowhatman_thumb.png', initial_scale: 50},
        {imagepath: 'stream/default/clipart/george.png', thumb_imagepath: 'stream/default/clipart/george_thumb.png', initial_scale: 50},
        {imagepath: 'stream/default/clipart/yellowhat.png', thumb_imagepath: 'stream/default/clipart/yellowhat_thumb.png', initial_scale: 50},
        {imagepath: 'stream/default/clipart/tree.png', thumb_imagepath: 'stream/default/clipart/tree_thumb.png', initial_scale: 50}
      ],
      intro_canvas_art: 'stream/default/intro.png'
    },
    'Zoo-Animals': {
      name: 'Zoo<br />Animals',
      enabled: true,
      stamps: [
        {imagepath: 'stream/zoo_animals/stamps/paw.png', thumb_imagepath: 'stream/zoo_animals/stamps/paw_thumb.png', width: 100, height: 100, min_distance: 100, choose_next_mode: 'liniar'},
        {imagepath: 'stream/zoo_animals/stamps/duck.png', thumb_imagepath: 'stream/zoo_animals/stamps/duck_thumb.png', width: 100, height: 100, min_distance: 100, choose_next_mode: 'liniar'},
        {imagepath: 'stream/zoo_animals/stamps/butterfly.png', thumb_imagepath: 'stream/zoo_animals/stamps/butterfly_thumb.png', width: 100, height: 100, min_distance: 75, choose_next_mode: 'liniar'},
        {imagepath: 'stream/zoo_animals/stamps/flowers.png', thumb_imagepath: 'stream/zoo_animals/stamps/flowers_thumb.png', width: 100, height: 100, min_distance: 50, choose_next_mode: 'random'}
      ],
      clipart: [
        {imagepath: 'stream/zoo_animals/clipart/lion.png', thumb_imagepath: 'stream/zoo_animals/clipart/lion_thumb.png', initial_scale: 50},
        {imagepath: 'stream/zoo_animals/clipart/parrot.png', thumb_imagepath: 'stream/zoo_animals/clipart/parrot_thumb.png', initial_scale: 50},
        {imagepath: 'stream/zoo_animals/clipart/hippo.png', thumb_imagepath: 'stream/zoo_animals/clipart/hippo_thumb.png', initial_scale: 50},
        {imagepath: 'stream/zoo_animals/clipart/elephant.png', thumb_imagepath: 'stream/zoo_animals/clipart/elephant_thumb.png', initial_scale: 50}
      ],
      intro_canvas_art: 'stream/zoo_animals/intro.png'
    },
    'Halloween': {
      name: 'Halloween',
      enabled: true,
      stamps: [
        {imagepath: 'stream/halloween/stamps/pumpkins.png', thumb_imagepath: 'stream/halloween/stamps/pumpkins_thumb.png', width: 100, height: 100, min_distance: 100, choose_next_mode: 'liniar'},
        {imagepath: 'stream/halloween/stamps/bats.png', thumb_imagepath: 'stream/halloween/stamps/bats_thumb.png', width: 160, height: 100, min_distance: 75, choose_next_mode: 'liniar'},
        {imagepath: 'stream/halloween/stamps/spiders.png', thumb_imagepath: 'stream/halloween/stamps/spiders_thumb.png', width: 100, height: 200, min_distance: 100, choose_next_mode: 'liniar'},
        {imagepath: 'stream/halloween/stamps/fall_leaves.png', thumb_imagepath: 'stream/halloween/stamps/fall_leaves_thumb.png', width: 100, height: 100, min_distance: 50, choose_next_mode: 'liniar'}
      ],
      clipart: [
        {imagepath: 'stream/halloween/clipart/blackcat.png', thumb_imagepath: 'stream/halloween/clipart/blackcat_thumb.png', initial_scale: 50},
        {imagepath: 'stream/halloween/clipart/george_pumpkin.png', thumb_imagepath: 'stream/halloween/clipart/george_pumpkin_thumb.png', initial_scale: 50},
        {imagepath: 'stream/halloween/clipart/haunted_house.png', thumb_imagepath: 'stream/halloween/clipart/haunted_house_thumb.png', initial_scale: 50},
        {imagepath: 'stream/halloween/clipart/spider.png', thumb_imagepath: 'stream/halloween/clipart/spider_thumb.png', initial_scale: 50}
      ],
      intro_canvas_art: 'stream/halloween/intro.png',
      'intro_audio': ['stream/halloween/FG_GP_008.ogg', 'stream/halloween/FG_GP_008.mp3']
    },
    'Space': {
      name: 'Space',
      enabled: true,
      stamps: [
        {imagepath: 'stream/space/stamps/comet.png', thumb_imagepath: 'stream/space/stamps/comet_thumb.png', width: 100, height: 100, min_distance: 200, choose_next_mode: 'liniar'},
        {imagepath: 'stream/space/stamps/moon_phases.png', thumb_imagepath: 'stream/space/stamps/moon_phases_thumb.png', width: 100, height: 100, min_distance: 94, choose_next_mode: 'liniar'},
        {imagepath: 'stream/space/stamps/asteroids.png', thumb_imagepath: 'stream/space/stamps/asteroids_thumb.png', width: 100, height: 100, min_distance: 100, choose_next_mode: 'liniar'},
        {imagepath: 'stream/space/stamps/stars.png', thumb_imagepath: 'stream/space/stamps/stars_thumb.png', width: 100, height: 100, min_distance: 100, choose_next_mode: 'liniar'}
      ],
      clipart: [
        {imagepath: 'stream/space/clipart/earth.png', thumb_imagepath: 'stream/space/clipart/earth_thumb.png', initial_scale: 50},
        {imagepath: 'stream/space/clipart/george_space_suit.png', thumb_imagepath: 'stream/space/clipart/george_space_suit_thumb.png', initial_scale: 50},
        {imagepath: 'stream/space/clipart/rocket_flame.png', thumb_imagepath: 'stream/space/clipart/rocket_flame_thumb.png', initial_scale: 50},
        {imagepath: 'stream/space/clipart/rocket.png', thumb_imagepath: 'stream/space/clipart/rocket_thumb.png', initial_scale: 50}
      ],
      intro_canvas_art: 'stream/space/intro.png',
      'intro_audio': ['stream/space/FG_GP_011.ogg', 'stream/space/FG_GP_011.mp3']
    },
    'Puppies': {
      name: 'Puppies',
      enabled: true,
      stamps: [
        {imagepath: 'stream/puppies/stamps/paw.png', thumb_imagepath: 'stream/puppies/stamps/paw_thumb.png', width: 100, height: 100, min_distance: 100, choose_next_mode: 'liniar'},
        {imagepath: 'stream/puppies/stamps/bone.png', thumb_imagepath: 'stream/puppies/stamps/bone_thumb.png', width: 100, height: 100, min_distance: 50, choose_next_mode: 'liniar'},
        {imagepath: 'stream/puppies/stamps/food_dish.png', thumb_imagepath: 'stream/puppies/stamps/food_dish_thumb.png', width: 100, height: 100, min_distance: 100, choose_next_mode: 'liniar'},
        {imagepath: 'stream/puppies/stamps/stick.png', thumb_imagepath: 'stream/puppies/stamps/stick_thumb.png', width: 120, height: 100, min_distance: 100, choose_next_mode: 'liniar'}
      ],
      clipart: [
        {imagepath: 'stream/puppies/clipart/dogbed.png', thumb_imagepath: 'stream/puppies/clipart/dogbed_thumb.png', initial_scale: 33},
        {imagepath: 'stream/puppies/clipart/puppycolor.png', thumb_imagepath: 'stream/puppies/clipart/puppycolor_thumb.png', initial_scale: 33},
        {imagepath: 'stream/puppies/clipart/puppyline.png', thumb_imagepath: 'stream/puppies/clipart/puppyline_thumb.png', initial_scale: 33},
        {imagepath: 'stream/puppies/clipart/doghouse.png', thumb_imagepath: 'stream/puppies/clipart/doghouse_thumb.png', initial_scale: 33}
      ],
      intro_canvas_art: 'stream/puppies/intro.png',
      intro_audio: ['stream/puppies/FG_GP_012.ogg', 'stream/puppies/FG_GP_012.mp3']
    },
    'Birthdays': {
      name: 'Birthday',
      enabled: true,
      stamps: [
        {imagepath: 'stream/birthday/stamps/bow.png', thumb_imagepath: 'stream/birthday/stamps/bow_thumb.png', width: 100, height: 100, min_distance: 100, choose_next_mode: 'liniar'},
        {imagepath: 'stream/birthday/stamps/candle.png', thumb_imagepath: 'stream/birthday/stamps/candle_thumb.png', width: 100, height: 100, min_distance: 50, choose_next_mode: 'liniar'},
        {imagepath: 'stream/birthday/stamps/balloon.png', thumb_imagepath: 'stream/birthday/stamps/balloon_thumb.png', width: 100, height: 100, min_distance: 15, choose_next_mode: 'liniar'},
        {imagepath: 'stream/birthday/stamps/streamers.png', thumb_imagepath: 'stream/birthday/stamps/streamers_thumb.png', width: 100, height: 100, min_distance: 100, choose_next_mode: 'liniar'}
      ],
      clipart: [
        {imagepath: 'stream/birthday/clipart/banner.png', thumb_imagepath: 'stream/birthday/clipart/banner_thumb.png', initial_scale: 50},
        {imagepath: 'stream/birthday/clipart/george.png', thumb_imagepath: 'stream/birthday/clipart/george_thumb.png', initial_scale: 40},
        {imagepath: 'stream/birthday/clipart/yellow_present.png', thumb_imagepath: 'stream/birthday/clipart/yellow_present_thumb.png', initial_scale: 33},
        {imagepath: 'stream/birthday/clipart/birthdaycakeline.png', thumb_imagepath: 'stream/birthday/clipart/birthdaycakeline_thumb.png', initial_scale: 50}
      ],
      intro_canvas_art: 'stream/birthday/intro.png',
      intro_audio: ['stream/birthday/FG_GP_010.ogg', 'stream/puppies/FG_GP_010.mp3']
    }
  }
}
