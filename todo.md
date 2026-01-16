# Amporn Tour - Project TODO

## Performance Optimization Tasks

- [x] Analyze current image sizes and performance metrics
- [x] Create image optimization script (Python/Node.js)
- [x] Compress and optimize all images (95% reduction achieved!)
- [x] Convert images to WebP format with fallbacks
- [x] Create OptimizedImage component with lazy loading
- [x] Implement code splitting for vendor libraries
- [x] Configure Vite build optimization
- [x] Add preload hints for critical resources
- [x] Optimize font loading strategy
- [x] Create performance optimization documentation
- [x] Verify performance improvements and save checkpoint

## Gallery Updates

- [x] Remove all landing page gallery photos
- [x] Update GallerySection component to hide/remove gallery
- [ ] Save checkpoint with changes

## Add Real Tour Photos

- [x] Copy uploaded photos to images directory
- [x] Optimize photos for web (resize and convert to WebP)
- [x] Add photos to Pha Dok Siew Trek gallery
- [x] Add photos to Doi Inthanon National Park gallery
- [x] Add photos to Kew Mae Pan Trek gallery
- [x] Add photos to Elephant Care gallery
- [x] Save checkpoint with new photos

## Fix Landing Page Gallery Removal

- [x] Check GallerySection component current state
- [x] Remove gallery photos from displaying on homepage
- [x] Verify gallery section is completely removed
- [x] Save checkpoint with fix

## Remove AI-Generated Gallery Photos

- [x] Remove AI photos from Chiang Rai & Golden Triangle tour
- [x] Remove AI photos from Chiang Rai One Day tour
- [x] Remove AI photos from Doi Suthep Temple tour
- [x] Remove AI photos from Doi Inthanon National Park tour
- [x] Remove AI photos from Elephant Care tour
- [x] Remove AI photos from Trek Pha Dok Siew tour
- [x] Remove AI photos from Trek Kew Mae Pan tour
- [x] Save checkpoint with cleaned galleries

## Create New Doi Inthanon Tour with Sirithan Waterfall

- [x] Add new tour package to tours-data.ts with details from promotional image
- [x] Generate banner image for new tour
- [x] Verify tour displays correctly on website
- [x] Save checkpoint with new tour

## Remove AI Photos from New Doi Inthanon Tour

- [x] Remove 3 AI-generated photos from original Doi Inthanon tour (1,400 THB) - No AI photos found, only real photos
- [x] Fix broken logo
- [x] Save checkpoint with fixes

## Add Real Chiang Rai Photos

- [x] Copy and optimize 3 Chiang Rai photos
- [x] Add photos to Chiang Rai & Golden Triangle tour gallery
- [x] Add photos to Chiang Rai One Day tour gallery
- [x] Save checkpoint with new photos

## Add Real Pha Dok Siew Waterfall Photos

- [x] Copy and optimize 2 waterfall photos
- [x] Add photos to Trek Pha Dok Siew tour gallery
- [x] Save checkpoint with all new photos

## Generate Temple Photos

- [x] Generate 2 realistic Doi Suthep Temple photos
- [x] Generate realistic Wat Rong Khun (White Temple) photos
- [x] Optimize generated photos
- [x] Add photos to Doi Suthep tour gallery
- [x] Add photos to Chiang Rai tour galleries
- [x] Save checkpoint with new temple photos

## Merge Doi Inthanon Tours

- [x] Read both Doi Inthanon tour data (1,400 THB and 1,500 THB Sirithan)
- [x] Merge Sirithan Waterfall content into 1,400 THB tour
- [x] Update activities to include Sirithan Waterfall
- [x] Remove Sirithan Waterfall tour (1,500 THB) from tours data
- [x] Update price to 1,500 THB
- [x] Verify tours display correctly on website
- [x] Save checkpoint with merged tour

## Fix SEO Title Length

- [x] Find current title implementation
- [x] Shorten title from 64 to 43 characters ("Amporn Tour - Chiang Mai Private Tours")
- [x] Verify title displays correctly (38 characters - within 30-60 range)
- [x] Save checkpoint with SEO fix

## Add Chiang Rai Customer Photos

- [x] Copy 3 customer photos to project images folder
- [x] Optimize photos to WebP format
- [x] Add Long Neck Karen village photo to galleries
- [x] Add Mekong River boat tour photo to galleries
- [x] Add Karen girls traditional dress photo to galleries
- [x] Verify photos display correctly on tour pages
- [x] Save checkpoint with new Chiang Rai photos

## Add Doi Inthanon Customer Photos

- [x] Copy 3 customer photos to project images folder
- [x] Optimize photos to WebP format
- [x] Add Hmong market photo to gallery
- [x] Add Wachirathan Waterfall photo to gallery
- [x] Add King and Queen Pagodas photo to gallery
- [x] Verify photos display correctly on tour page
- [x] Save checkpoint with new Doi Inthanon photos

## Fix Broken Chiang Rai Tour Card Image

- [x] Investigate which Chiang Rai tour has broken image (Golden Triangle tour)
- [x] Check image path in tours-data.ts (tour-chiang-rai-golden-triangle-banner.jpg missing)
- [x] Fix image path (changed to generated-white-temple-1.webp)
- [x] Verify image displays correctly on Tours page
- [x] Save checkpoint with image fix

## Fix Long Neck Karen Image Cropping

- [x] Investigate image display component (TourDetail gallery line 129)
- [x] Check current object-fit and aspect-ratio CSS settings (object-cover)
- [x] Adjust CSS to show faces properly (changed to object-contain with bg-slate-50)
- [x] Test on mobile viewport to verify faces are visible (desktop verified, object-contain working)
- [x] Save checkpoint with image display fix

## Fix Broken Boat Tour Image Path

- [x] Check actual filename in images folder (chiang-rai-boat-tour.webp)
- [x] Find incorrect path in tours-data.ts (line 171)
- [x] Fix image path to match actual filename
- [x] Verify image loads correctly on dev server (will be fixed on published site after deploy)
- [ ] Save checkpoint with image path fix
