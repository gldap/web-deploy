AFRAME.registerComponent("snap", {
init: function () {
  var selfie = document.querySelector("#selfie")
  var scene = document.querySelector("a-scene")

//click only once
  selfie.addEventListener("click", myFunction)
   function myFunction(){
     console.log("hehe");
     const canvas = scene.components.screenshot.getCanvas('perspective');
     scene.components.screenshot.capture('perspective');
     selfie.removeEventListener("click", myFunction);
   }


}
});
