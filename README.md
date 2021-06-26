# :star: jQuery Slider Template :star:
Develop Your Own Slider Using This jQuery Code. Check Out  Developed Using This Code.

# Documentation :book:
# USAGE :memo: :

* Default Class Name :
```
Slider : slideme
Left Slide Button : left-slide
Right Slide Button : right-slide
```
* Default Animation Class Name :
```
Slide To Left : slide-to-left-slider
Slide To Right : slide-to-right-slider
Slide To Top : slide-to-top-slider
Slide To Down : slide-to-down-slider
Fade In : fadein-slider
Fade Out : fadeout-slider
```

# Get Started :snowman:
* Download JS Folder And Add To Your Website Directory.

* Configure Class Name ( js/slider.js ) : 
:warning: Dont Edit This If You Want To Use Default Class Name !!! 
``` 
slider: ".slideme", // Enter here class name of slider ( Add this class name on each respective object classes).
left_slide: ".left-slide", // Enter here class name of your left slide button.
right_slide: ".right-slide" // Enter here class name of your right slide button.
```
* Configure Animation ( js/slider.js ) : 
:warning: Dont Edit This If You Want To Use Default Animation Speed !!!
```
left_slide_speed: 500, // Left Slide Animation Speed (In Milliseconds)
right_slide_speed: 500, // right Slide Animation Speed (In Milliseconds)
top_slide_speed: 500, // Top Slide Animation Speed (In Milliseconds)
down_slide_speed: 500, // Down Slide Animation Speed (In Milliseconds)
fadein_speed: 1000, // FadeIn Animation Speed (In Milliseconds)
fadeout_speed: 1000, // FadeOut Animation Speed (In Milliseconds)
```
* Add Class To Your Slider
````
<div class="slideme"> // First Object
     <img class="slide-to-down-slider" src="images/1.jpg">
     <h2 class="fadein-slider">TITLE HERE</h2>
     <p class="slide-to-top-slider">Text Here</p>
</div>
<div class="slideme"> // Second Object
     <img class="slide-to-down-slider" src="images/2.jpg">
     <h2 class="fadein-slider">TITLE HERE</h2>
     <p class="slide-to-top-slider">Text Here</p>
</div>
.
.
.
````
* Slide Button Class Name
````
<a class="left-slide">❮</a>
<a class="right-slide">❯</a>
````
* Create HTML File And Add Slider JS & jQuery JS File
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery Slider Template</title>
</head>

<body>

  
    <script src="js/jquery.min.js"></script>
    <script src="js/slider.js"></script>
</body>

</html>

```
* Final Code Will Be :checkered_flag: : ( This is just a example, this code wont work :x: )

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery Slider Template</title>
</head>

<body>

  <div class="slideme"> // First Object
       <img class="slide-to-down-slider" src="images/1.jpg">
       <h2 class="fadein-slider">TITLE HERE</h2>
       <p class="slide-to-top-slider">Text Here</p>
  </div>
  <div class="slideme"> // Second Object
       <img class="slide-to-down-slider" src="images/2.jpg">
       <h2 class="fadein-slider">TITLE HERE</h2>
       <p class="slide-to-top-slider">Text Here</p>
  </div>
  .
  .
  .
  <a class="left-slide">❮</a>
  <a class="right-slide">❯</a>
   
  <script src="js/jquery.min.js"></script>
  <script src="js/slider.js"></script>

</body>

</html>
```


