AFRAME.registerComponent('trigger', {
  init: function() {
    var bo = document.querySelector(".bo");
    bo.addEventListener('click', evt => {
      this.trigger();
      console.log('yo');
      });
  },

  trigger: function() {
    this.el.emit('particleplayerstart', {
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 7,
        Math.random() * 2,
        -5 - Math.random() * 2
      ),
      rotation: new THREE.Euler(Math.random() * 1 - .5, 0, 0)
    });
  }
});
