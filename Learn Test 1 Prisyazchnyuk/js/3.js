/**
 * Created by timothy on 05.10.17.
 */
         window.onload = function(){
             //  Apple shop Brand
             var granimInstance = new Granim({
                 element: '#logo-canvas',
                 direction: 'left-right',
                 opacity: [1, 1],
                 states : {
                     "default-state": {
                         gradients: [
                             ['#EB3349', '#F45C43'],
                             ['#FF8008', '#FFC837'],
                             ['#4CB8C4', '#3CD3AD'],
                             ['#24C6DC', '#514A9D'],
                             ['#FF512F', '#DD2476'],
                             ['#DA22FF', '#9733EE']
                         ],
                         transitionSpeed: 2000
                     }
                 }
             });
             // NavLinks //
             var itemLinksNav = document.querySelectorAll(".itemLinksNav");
             var wrapperList = document.querySelector("#wrapperList");
             var ClassActive = 0;

             for (var k = 0; k < itemLinksNav.length; k++) {
                 var itemLink = itemLinksNav[k];
                 itemLink.addEventListener("click", ClickedItem, false);
                 itemLink.itemID = k;
             }
             itemLinksNav[ClassActive].classList.add("active");

             function ClickedItem(event){
                 removeActive();
                 var clickedLink = event.target;
                 ClassActive = clickedLink.itemID;
                 ChangeWrapper(clickedLink);
             }
             function removeActive(){
                 for (var k = 0; k < itemLinksNav.length; k ++) {
                     itemLinksNav[k].classList.remove("active");
                 }
             }
             function ChangeWrapper(itemLink){
                 itemLink.classList.add("active");
                 wrapperList.style.left = -itemLink.getAttribute("data-pos") + "%";
             }
             // Slide Content 1//
             var links = document.querySelectorAll(".nav_item1 , .nav_item2");
             var wrapper = document.querySelector("#polosa");
             var wrapper1 = document.querySelector("#polosa1");
             var activeLink = 0;

             for (var i = 0; i < links.length; i++) {
                 var link = links[i];
                 link.addEventListener("click", setClickedIte, false);
                 link.itemID = i;
             }
             links[activeLink].classList.add("active");
             function setClickedIte(event){
                 removeActiveLinks();
                 var clickedLink = event.target.parentNode;
                 activeLink = clickedLink.itemID;
                 if(clickedLink.itemID >= 0 && clickedLink.itemID < 5){
                     changePosition(clickedLink);
                 }else if(clickedLink.itemID >= 5 && clickedLink.itemID < 10){
                     changePosition1(clickedLink);
                 }
             }
             function removeActiveLinks(){
                 for (var i = 0; i < links.length;i ++) {
                     links[i].classList.remove("active");
                 }
             }
             function changePosition(link){
                 link.classList.add("active");
                 wrapper.style.left = link.getAttribute("data-pos");
             }
             function changePosition1(link) {
                 link.classList.add("active");
                 wrapper1.style.left = link.getAttribute("data-pos");
             }
             //  Slider SmartFon  //
             document.getElementById('controlRight').onclick = sliderRight;
             document.getElementById('controlLeft').onclick = sliderLeft;
             var ControlLeft = document.getElementById('controlLeft');
             var ContentWrapper = document.getElementById('wrapperSlideContent');
             var width = document.documentElement.clientWidth;
             var position = 0;
             var AddSlide = 0;
             var lengthWrapper = 0;

             function WidthCalculate(){
                 if (width <= 1200 && width > 720 ){
                     lengthWrapper = -166.6666666;
                     AddSlide = 33.3333333;
                 } else if (width <= 720 ){
                     lengthWrapper = -300;
                     AddSlide = 50;
                 } else {
                     AddSlide = 25;
                     lengthWrapper = -100;
                 }
             }
             function sliderLeft(){
                 WidthCalculate();
                 position +=  AddSlide;
                 if (position >= 0){
                     position = 0;
                     ControlLeft.style.display = 'none';
                 }
                 ContentWrapper.style.left = position + '%';
             }
             function sliderRight(){
                 WidthCalculate();
                 position -= AddSlide;
                 if (position < lengthWrapper) {
                     position = 0;
                 }
                 ContentWrapper.style.left = position + "%";
                 if (position < 0){
                     ControlLeft.style.display = 'block';
                 }else{
                     ControlLeft.style.display = 'none';
                 }
             }
             //     Slider Prew2Content    //
             document.getElementById("Pre2ControlPrev").onclick = SliderPrew2ContentPrev;
             document.getElementById("Pre2ControlNext").onclick = SliderPrew2ContentNext;
             var Control2Prev = document.getElementById("Pre2ControlPrev");
             var Wrepper2Content = document.getElementById("Prew2Wrapper");
             var Prew2position = 0;
             var Prew2AddSlide = 100;
             function SliderPrew2ContentPrev(){
                 Prew2position += Prew2AddSlide;
                 if(Prew2position <= 0){
                     Prew2position = 0;
                     Control2Prev.style.display = "none";
                 }
                 Wrepper2Content.style.left = Prew2position + "%";
             }
             function SliderPrew2ContentNext(){
                 Prew2position -= Prew2AddSlide;
                 if(Prew2position <= -200){
                     Prew2position = 0;
                 }
                 Wrepper2Content.style.left = Prew2position + "%";
                 if(Prew2position < 0){
                     Control2Prev.style.display = "block";
                 }else{
                     Control2Prev.style.display = "none";
                 }
             }
             // footer //
             var granimInstance = new Granim({
                 element: '#canvas-image-blending',
                 direction: 'top-bottom',
                 opacity: [1, 1],
                 isPausedWhenNotInView: true,
                 states : {
                     "default-state": {
                         gradients: [
                             ['#29323c', '#485563'],
                             ['#FF6B6B', '#556270'],
                             ['#80d3fe', '#7ea0c4'],
                             ['#f0ab51', '#eceba3']
                         ],
                         transitionSpeed: 6000
                     }
                 }
             });
         };