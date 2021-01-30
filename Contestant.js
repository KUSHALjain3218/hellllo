class Contestant {
    constructor(){
  
  this.index=null;
  this.distance=0;
  this.name=null;
  
  
    }
  
    //writing into contestantCount 
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",function(data){
        contestantCount = data.val();
      })
    }
  //getting value from the contestantcount
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  //Writing into contestants -> contestant1 -> name
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance
  
      });
    }
    static getContestantInfo(){
  var contestantInfoRef = database.ref('contestants');
  contestantInfoRef.on("value",function(data){
    allcontestants = data.val();
  })
    }
  }
  
  