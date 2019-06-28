/* Surface Area and Volume of a Box
https://www.codewars.com/kata/surface-area-and-volume-of-a-box/train/javascript
*/

function getSize(width, height, depth) {
 let surf = 2 * ( width * height + width * depth + height * depth);
 let vol = width * height * depth;
 return [surf, vol];
}
