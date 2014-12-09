function minuteHandAngle(minutes){
  // return 6 * minutes
  return (360 * minutes) / 60
}

function hourHandAngle(hours, minutes){
  // return (60 * hours + minutes) / 2
  return (30 * hours) + (minutes / 2)
}

function angleBetweenHands(time){
  var hours = parseInt(time.split(':')[0]); //get hours
  var minutes = parseInt(time.split(':')[1]); //get minutes
  var angle = Math.abs(hourHandAngle(hours, minutes) - minuteHandAngle(minutes)); //we only care about absolute value
  return Math.min(angle, 360 - angle); //return the lesser of the two arguments
}