#!/bin/zsh

QUALITY=85

echo "Starting conversion of JPG/JPEG files to WebP with quality $QUALITY..."
echo "This script will only process files in the current directory and will ignore subdirectories."
echo "--------------------------------------------------------"


converted_count=0


# *.(jpg|jpeg) - Zsh glob for files in the current directory.
for file in *.(jpg|jpeg)(.N); do
  output_name="${file%.*}.webp"
  echo "Converting: $file  ->  $output_name"
  cwebp -q $QUALITY "$file" -o "$output_name"
  ((converted_count++))
done

echo "--------------------------------------------------------"
echo "Done! Converted $converted_count files."
