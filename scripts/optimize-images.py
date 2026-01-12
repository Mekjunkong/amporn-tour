#!/usr/bin/env python3
"""
Image Optimization Script for Amporn Tour Website
Compresses and converts images to WebP format with JPEG/PNG fallbacks
"""

import os
import sys
from pathlib import Path
from PIL import Image
import pillow_heif

# Register HEIF opener
pillow_heif.register_heif_opener()

# Configuration
QUALITY_WEBP = 85
QUALITY_JPEG = 85
MAX_SIZES = {
    'hero': 1920,      # Hero/banner images
    'large': 1200,     # Large gallery images
    'medium': 800,     # Medium images
    'small': 400,      # Thumbnails
}

def get_image_category(filename):
    """Determine image category based on filename"""
    name_lower = filename.lower()
    if 'banner' in name_lower or 'hero' in name_lower:
        return 'hero'
    elif 'logo' in name_lower:
        return 'medium'
    elif 'gallery' in name_lower or 'landing' in name_lower or 'tour-' in name_lower:
        return 'large'
    else:
        return 'medium'

def optimize_image(input_path, output_dir, max_width=1920):
    """
    Optimize a single image:
    1. Resize to appropriate dimensions
    2. Save as WebP
    3. Save as JPEG/PNG fallback
    """
    try:
        # Open image
        img = Image.open(input_path)
        
        # Convert RGBA to RGB if needed
        if img.mode in ('RGBA', 'LA', 'P'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
            img = background
        elif img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Calculate new dimensions
        width, height = img.size
        if width > max_width:
            ratio = max_width / width
            new_width = max_width
            new_height = int(height * ratio)
            img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
            print(f"  Resized from {width}x{height} to {new_width}x{new_height}")
        
        # Get filename without extension
        filename = Path(input_path).stem
        
        # Save as WebP
        webp_path = output_dir / f"{filename}.webp"
        img.save(webp_path, 'WEBP', quality=QUALITY_WEBP, method=6)
        webp_size = webp_path.stat().st_size / 1024 / 1024
        
        # Save as JPEG fallback
        jpg_path = output_dir / f"{filename}.jpg"
        img.save(jpg_path, 'JPEG', quality=QUALITY_JPEG, optimize=True)
        jpg_size = jpg_path.stat().st_size / 1024 / 1024
        
        original_size = Path(input_path).stat().st_size / 1024 / 1024
        
        print(f"  Original: {original_size:.2f} MB")
        print(f"  WebP: {webp_size:.2f} MB ({(1 - webp_size/original_size)*100:.1f}% reduction)")
        print(f"  JPEG: {jpg_size:.2f} MB ({(1 - jpg_size/original_size)*100:.1f}% reduction)")
        
        return {
            'original': original_size,
            'webp': webp_size,
            'jpeg': jpg_size
        }
        
    except Exception as e:
        print(f"  Error: {e}")
        return None

def main():
    # Paths
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    images_dir = project_root / 'client' / 'public' / 'images'
    optimized_dir = project_root / 'client' / 'public' / 'images-optimized'
    
    # Create output directory
    optimized_dir.mkdir(exist_ok=True)
    
    # Find all images
    image_extensions = ['.jpg', '.jpeg', '.png', '.webp']
    images = []
    for ext in image_extensions:
        images.extend(images_dir.glob(f'*{ext}'))
        images.extend(images_dir.glob(f'*{ext.upper()}'))
    
    if not images:
        print("No images found!")
        return
    
    print(f"Found {len(images)} images to optimize\n")
    
    # Statistics
    total_original = 0
    total_webp = 0
    total_jpeg = 0
    processed = 0
    
    # Process each image
    for img_path in sorted(images):
        print(f"Processing: {img_path.name}")
        
        # Determine category and max size
        category = get_image_category(img_path.name)
        max_width = MAX_SIZES[category]
        print(f"  Category: {category} (max width: {max_width}px)")
        
        # Optimize
        result = optimize_image(img_path, optimized_dir, max_width)
        
        if result:
            total_original += result['original']
            total_webp += result['webp']
            total_jpeg += result['jpeg']
            processed += 1
        
        print()
    
    # Summary
    print("=" * 60)
    print("OPTIMIZATION SUMMARY")
    print("=" * 60)
    print(f"Images processed: {processed}/{len(images)}")
    print(f"Total original size: {total_original:.2f} MB")
    print(f"Total WebP size: {total_webp:.2f} MB ({(1 - total_webp/total_original)*100:.1f}% reduction)")
    print(f"Total JPEG size: {total_jpeg:.2f} MB ({(1 - total_jpeg/total_original)*100:.1f}% reduction)")
    print(f"\nOptimized images saved to: {optimized_dir}")
    print("\nNext steps:")
    print("1. Review optimized images")
    print("2. Replace original images with optimized versions")
    print("3. Update image references to use WebP with JPEG fallback")

if __name__ == '__main__':
    main()
