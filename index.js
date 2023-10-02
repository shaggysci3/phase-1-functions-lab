function distanceFromHqInBlocks(someValue) {
    if ( someValue>42){
        return someValue-42;
    } else {
        return 42 - someValue;
    }
    
    //returns the number of blocks given a value
  }

  function distanceFromHqInFeet(footValue) {
    return distanceFromHqInBlocks(footValue) * 264;
  }

  function distanceTravelledInFeet(start, destination) {
    if (start>destination){
        return ((destination-start)*264)*-1
    } else {
    return ((start-destination)*264)*-1
    }
  }

  function calculatesFarePrice(startCalc, destinationCalc) {
    let differince = distanceTravelledInFeet(startCalc,destinationCalc)
    if (differince<400 ){
        return 0;
    }else if (differince>2000 && differince<2500){
        return 25;
    } else if(differince<2000 && differince>400){
        return 128/50
    }else {
        return `cannot travel that far`
    }
    //returns the fare for the customer
  }