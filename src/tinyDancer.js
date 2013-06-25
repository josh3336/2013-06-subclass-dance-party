var makeTinyDancer = function(top, left, timeBetweenSteps){
  //new makeDancer(this,arguments);
  this.$node = $('<img class="tiny" src="http://assets.rollingstone.com/assets/images/list_item/elton-john-20101202/elton-john.jpg" width="36" height="36">');
  
  makeDancer.apply(this,arguments);

};

makeTinyDancer.prototype =  Object.create(makeDancer.prototype);
makeTinyDancer.prototype.constructor = makeTinyDancer;


makeTinyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.apply(this);
    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
    this.$node.toggle();
};


makeTinyDancer.prototype.colorful = function(){
   // this.$node = $('<span class="big"></span>');
    $('span.dancer').toggleClass('big');

};

