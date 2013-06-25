var makeColorfulDancer = function(top, left, timeBetweenSteps){
  //new makeDancer(this,arguments);
  this.$node = $('<span class="color"></span>');
  makeDancer.apply(this,arguments);



  //this.colorful();


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeColorfulDancer.prototype =  Object.create(makeDancer.prototype);
makeColorfulDancer.prototype.constructor = makeColorfulDancer;


makeColorfulDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.apply(this);
    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
    this.$node.toggle();
};

makeColorfulDancer.prototype.colorful = function(){
    //this.$nodeb = $('<span class="color"></span>');
    $('span.dancer').toggleClass('color');

};

