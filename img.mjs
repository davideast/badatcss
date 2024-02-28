import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp';

imagemin(['public/**/*.{jpg,png,jpeg}'], {
  destination: 'public',
  plugins: [imageminWebp({quality: 75})]
}).then(() => {
  console.log('Done!');
});