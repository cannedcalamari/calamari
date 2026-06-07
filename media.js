/**
 * MEDIA CONFIG — Calamari Collective
 *
 * All photo and video paths live here.
 * When moving to Cloudinary, replace the local paths with your CDN URLs:
 *   e.g. 'karma/karmacompressed.mp4'
 *     →  'https://res.cloudinary.com/YOUR_CLOUD/video/upload/v.../karmacompressed.mp4'
 *
 * Pages that use each asset:
 *   index.html       → karma.hero, karma.photos (all), zvuk.video
 *   video.html       → karma.hero, karma.photos (all), zvuk.video, zvuk.photos (all)
 *   project.html     → karma.hero, karma.photos (all)
 *   project-zvuk.html→ zvuk.video, zvuk.photos (all)
 */

const MEDIA = {

  karma: {
    // --- VIDEO ---
    hero:   'karma/karmacompressed.mp4',

    // --- PHOTOS ---
    photo1: 'karma/DSC00011-2.png',
    photo2: 'karma/DSC003612.png',
    photo3: 'karma/DSC003622.png',
    photo4: 'karma/DSC00402.png',
  },

  zvuk: {
    // --- VIDEO ---
    video:  'zvuk/Untitled design.mp4',

    // --- PHOTOS ---
    photo1: 'zvuk/ZVUK3-102.jpg',
    photo2: 'zvuk/ZVUK3-111.jpg',
    photo3: 'zvuk/ZVUK3-115.jpg',
    photo4: 'zvuk/ZVUK3-209.jpg',
  },

};
