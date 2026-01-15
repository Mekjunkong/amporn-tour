#!/usr/bin/env python3
"""
Optimize temple photos: Create WebP versions with quality 85
"""
from PIL import Image
import os

images_dir = "/home/ubuntu/amporn_tour/client/public/images"
temple_photos = [
    "generated-doi-suthep-1.jpg",
    "generated-doi-suthep-2.jpg",
    "generated-white-temple-1.jpg",
    "generated-white-temple-2.jpg"
]

for photo in temple_photos:
    jpg_path = os.path.join(images_dir, photo)
    webp_path = os.path.join(images_dir, photo.replace('.jpg', '.webp'))
    
    if os.path.exists(jpg_path):
        print(f"Converting {photo} to WebP...")
        img = Image.open(jpg_path)
        img.save(webp_path, 'WEBP', quality=85)
        
        # Get file sizes
        jpg_size = os.path.getsize(jpg_path) / 1024
        webp_size = os.path.getsize(webp_path) / 1024
        reduction = ((jpg_size - webp_size) / jpg_size) * 100
        
        print(f"  JPG: {jpg_size:.1f} KB")
        print(f"  WebP: {webp_size:.1f} KB")
        print(f"  Reduction: {reduction:.1f}%")
    else:
        print(f"Warning: {photo} not found")

print("\nOptimization complete!")
