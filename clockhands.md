var hourHandAngle = function(hour,minutes){
  return (hour+(minutes/60))*30;
};

var minuteHandAngle = function(minutes){
  return (minutes/60)*360;
};

var angleBetweenHands = function(time){

  var timeArray = time.split(":");

  timeArray = timeArray.map(function(element){
    return parseInt(element);
  });

  var hourAngle = hourHandAngle(timeArray[0],timeArray[1]);

  var minuteAngle = minuteHandAngle(timeArray[1]);

  var finalAngle = hourAngle-minuteAngle;

  if(finalAngle<0)
    finalAngle = (-1)*finalAngle;

  if(finalAngle>180)
    finalAngle = 360 - finalAngle;

  return finalAngle;
};