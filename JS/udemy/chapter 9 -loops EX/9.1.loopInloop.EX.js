const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
  ];


  for(row of listOfNeighbours){
      for(country of row){
          console.log(`Neighbour: ${country}`);
      }
  }

  