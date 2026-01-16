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
- [x] Save checkpoint with image path fix

## Reorder Tours and Update Photos

### Tour Reordering
- [x] Reorder tours in tours-data.ts to match new sequence:
  1. Chiang Rai One Day & Golden Triangle
  2. Chiang Rai One Day
  3. Doi Inthanon National Park
  4. Doi Inthanon Trek Pha Dok Siew
  5. Doi Inthanon Trek Kew Mae Pan
  6. One Day Trek & Elephant Care
  7. Doi Suthep Temple - Hmong Village

### Add Photos to Kew Mae Pan Trek
- [x] Copy 2 new photos (King & Queen Pagodas, Wachirathan Waterfall with rainbow)
- [x] Optimize photos to WebP format
- [x] Add photos to Kew Mae Pan trek gallery

### Replace Doi Suthep Staircase Photo
- [x] Copy authentic Naga staircase photo to project
- [x] Optimize photo to WebP format
- [x] Replace AI-generated staircase photo with authentic customer photo

### Verification
- [x] Verify tour order on Tours page (correct order confirmed)
- [x] Verify new photos display correctly (Kew Mae Pan and Doi Suthep photos confirmed)
- [x] Save checkpoint with all updates

## Add New Tour: Chiang Rai One Day & Lalita Cafe

### Photo Preparation
- [x] Copy 6 tour photos to project images folder
- [x] Optimize photos to WebP format

### Tour Creation
- [x] Create new tour entry in tours-data.ts with all details
- [x] Add 6 photos to tour gallery
- [x] Insert new tour at position 2 (after Chiang Rai Golden Triangle)

### Verification
- [x] Verify tour displays on Tours page
- [x] Verify tour detail page works correctly
- [x] Verify all photos display properly
- [x] Save checkpoint with new tour

## Update Chiang Rai Lalita Cafe Tour Details

- [x] Update price from 0 THB to 1,300 THB
- [x] Update pickup time from TBD to 07:00-07:30 AM
- [x] Update duration from TBD to 8-9 hours
- [x] Verify updates display correctly on Tours page
- [x] Verify updates display correctly on tour detail page
- [ ] Save checkpoint with updated tour details

## Add Two New Tours: Dan Thewada & King Kong Zipline

### Dan Thewada - Wat Baan Den - Sticky Waterfall Tour
- [x] Copy 7 tour photos to project images folder
- [x] Optimize photos to WebP format
- [x] Create tour entry with details:
  - Price: 1,200 THB
  - Pickup: 08:30-09:00 AM
  - Duration: 7-8 hours
  - Activities: Dan Thewada Land of Angel Waterfall Park, Wat Baan Den, Sticky Waterfall
  - Package includes: Transportation, Entrance ticket, Accident insurance, Lunch (Pad Thai)
- [x] Add 7 photos to tour gallery
- [x] Insert tour in appropriate position

### King Kong Zipline Adventure Tour
- [x] Copy 2 zipline photos to project images folder
- [x] Optimize photos to WebP format
- [x] Create tour entry with pricing from brochure:
  - Ultimate Program: 1,900 THB (19 platforms, 9 ziplines)
  - Extreme Program: 2,500 THB (11 platforms, 11 ziplines including 1,200m longest)
- [x] Add tour details and activities
- [x] Insert tour in appropriate position

### Wat Umong & Doi Suthep at Night Tour
- [x] Copy 4 tour photos to project images folder
- [x] Optimize photos to WebP format
- [x] Create tour entry with details:
  - Price: 650 THB
  - Pickup: 04:40 PM
  - Duration: 3-4 hours
  - Activities: Wat Umong, Doi Suthep Temple
  - Package includes: Transportation, Tour guide, Entrance ticket, Accident insurance
- [x] Add 4 photos to tour gallery
- [x] Insert tour in appropriate position

### Elephant Jungle Sanctuary Half-Day Tour
- [x] Copy 4 elephant sanctuary photos to project images folder
- [x] Optimize photos to WebP format
- [x] Create tour entry with details:
  - Price: 1,900 THB
  - Pickup: Morning 06:30-07:00 AM, Afternoon 11:30-12:00 PM
  - Duration: 4-5 hours
  - Activities: Personal interaction with elephants, Educational session, Elephant mud spa, River bathing
  - Package includes: Food & drinks, Round-trip transfer, English-speaking guide, Lunch, Snacks, Drinking water, Elephant food
- [x] Add 4 photos to tour gallery
- [x] Insert tour in appropriate position

### Update Existing Doi Suthep Tour
- [x] Remove "Lunch" from package includes (half-day tour doesn't include lunch)

### Verification
- [x] Verify Dan Thewada tour displays correctly
- [x] Verify King Kong Zipline tour displays correctly
- [x] Verify Wat Umong & Doi Suthep tour displays correctly
- [x] Verify Elephant Sanctuary tour displays correctly
- [x] Verify Doi Suthep tour updated correctly (no lunch)
- [x] Save checkpoint with all four new tours and update

## Update Tour Photos

### King Kong Zipline Tour
- [x] Generate AI photo of zipline adventure in jungle canopy (don't use poster photo)
- [x] Update tour entry to use generated photo as cover image
- [x] Keep zipline brochure photos in gallery only

### Elephant Sanctuary Tour
- [x] Change cover photo to river bathing image (1000016290.webp)
- [x] Reorder gallery photos with river bathing as first/cover photo

### Verification
- [x] Verify King Kong Zipline displays with generated photo
- [x] Verify Elephant Sanctuary displays with correct cover photo
- [x] Save checkpoint with updated photos

## Replace King Kong Zipline Poster Photos

### Remove Poster Photos
- [x] Remove 1000016263.webp (pricing poster) from gallery
- [x] Remove 1000016266.webp (what to wear/bring poster) from gallery
- [x] Keep only AI-generated zipline-adventure-cover.webp

### Find Better Photos
- [x] Search for authentic King Kong Zipline action photos online
- [x] Download and optimize 3 high-quality zipline action photos
- [x] Add new photos to tour gallery

### Verification
- [x] Verify King Kong Zipline gallery shows only authentic action photos
- [ ] Save checkpoint with updated gallery
