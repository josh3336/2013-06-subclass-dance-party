var makeBigDancer = function(top, left, timeBetweenSteps){
  //new makeDancer(this,arguments);
  this.$node = $('<span class="big"></span>');
  debugger
  makeDancer.apply(this,arguments);


};

makeBigDancer.prototype =  Object.create(makeDancer.prototype);
makeBigDancer.prototype.constructor = makeBigDancer;


makeBigDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.apply(this);
    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
    this.$node.toggle();
};


makeBigDancer.prototype.colorful = function(){
   // this.$node = $('<span class="big"></span>');
    $('span.dancer').toggleClass('big');

};

