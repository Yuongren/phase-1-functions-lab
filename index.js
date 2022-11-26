// Code your solution in this file!
function distanceFromHqInFeet(distanceinBlooks) {
    console.distanceinBlooks = (43)
        return 1
    
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    console.distanceinBlooks=(50)
        return 8
    
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    if(distanceinBlooks < 34){
        return 8
    }  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }
  function distanceFromHqInFeet(distanceinFeet){
    if(distanceinFeet === 43){
        return 264
    }
    if(distanceinFeet === 50){
        return 2112
    }
    if(distanceinFeet == 34){
        return 2112
    }
  }
 function distanceTravelledInFeet(distanceTravelled){
    if(distanceTravelled ){
        const distanceTravelled = (43, 48)
        return 1320
    }
    if(distanceTravelled){
        const distanceTravelled = (50, 60)
        return 2640
    }
    if(distanceTravelled){
        const distanceTravelled = (34, 28)
        return 1584
    }
 }
 function distanceFromHqInFeet (distance) {
    return distanceFromHqInBlocks(distance)*264;
  }

  function distanceTravelledInFeet(a,b){
    if (b > a){
      return((b - a)*264);
    }
    else
      return((a - b)*264);
  }
  function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination);
    if (distance <= 400){
      return 0;
    }
    if (distance >= 400 && distance <= 2000){
      return (distance - 400)* 0.02;
    }
    else if(distance >= 2000 && distance <= 2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
    }
  }
  function distanceFromHqInBlocks (distance) {
    if (distance < 42){
      return(42 - distance);
    }
    else {

    return(distance - 42);
  }
  }