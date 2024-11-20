convert $input.jpg -grayscale average $input-gray.jpg
convert $input-gray.jpg clut.gif -interpolate bilinear -clut assets/img/students/$input.jpg
mogrify -resize 300x $input.jpg 
