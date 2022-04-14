

const Set1Dist= [3, 1, 7, 9];
const Set2Dist= [2, 4, 1, 9, 3];



const Set1Overlapping= [12, 13, 6, 10];
const Set2Overlapping= [13, 10, 16, 15]

// first problem

// solution 1

const calTableDist=(Set1Dist,Set2Dist)=>{

  
    let sum =0;


    Set1Dist.map(value=>{
    
        if (Set2Dist.includes(value)==false ){


            sum=sum+value;
            
            
        }
            

    

    })

    Set2Dist.map(value=>{
    
       

        if (Set1Dist.includes(value)==false ){


            sum=sum+value;
            
        }
            

    })

    return sum;
}

console.log(calTableDist(Set1Dist,Set2Dist))


//solution 2
class HashTableDist {
    constructor() {
      this.table = new Array(10);
      this.size = 0;
    }
   ;
  
    _hash(key) {
      let hash = 0;
      key= String(key.join(""));
      for (let i = 0; i <key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.table.length;
    }
  
    set(key) {
        
     
      const index = this._hash(key);
    
      if (this.table[index]) {
       
        for (let i = 0; i < this.table[index].length; i++) {
          if (this.table[index][i] === key) {
            this.table[index][i]= key;
            return;
          }
        }
        this.table[index]=key;
      } else {
      
        this.table[index]=key;
      }
      this.size++;
    
    }
    
   display (){
       
       let TotalCount=0;
       let ItemCount=0;
     
       
       
       this.table.map(TableValue=>{
           
           TableValue.map((KeyValue,KeyIndex)=>{
               
               TableValue.map(ItemValue=>{
                   
                   if(KeyValue==ItemValue){
                       
                       ItemCount=ItemCount+1;
                       
                       
                   }
                   
               })
               
               if(ItemCount==1){
                   
                   TotalCount=TotalCount+KeyValue;
               }
               
             
               ItemCount=0;
               
              
           })
       })
      
      console.log(TotalCount)
   }
     
  }
  
  const htDist = new HashTableDist();
  
  htDist.set([3, 1, 7, 9,2, 4, 1, 9, 3])
  
  htDist.display()
  
  
//seconde problem

//first solution



const calTableOverlapping=(Set1Overlapping,Set2Overlapping)=>{

  
    let sum =0;


    Set1Overlapping.map(value=>{
    
        if (Set2Overlapping.includes(value)==true){


            sum=sum+value;
            
            
        }
            

    

    })

    Set2Overlapping.map(value=>{
    
       

        if (Set1Overlapping.includes(value)==true ){


            sum=sum+value;
            
        }
            

    })

    return sum;
}

console.log(calTableOverlapping(Set1Overlapping,Set2Overlapping))


//solution 2
class HashTableOverlapping {
    constructor() {
      this.table = new Array(10);
      this.size = 0;
    }
   ;
  
    _hash(key) {
      let hash = 0;
      key=String(key.join(""))
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.table.length;
    }
  
    set(key) {
        
     
      const index = this._hash(key);
    
      if (this.table[index]) {
       
        for (let i = 0; i < this.table[index].length; i++) {
          if (this.table[index][i] === key) {
            this.table[index][i]= key;
            return;
          }
        }
        this.table[index]=key;
      } else {
      
        this.table[index]=key;
      }
      this.size++;
    
    }
    
   display (){
       
       let TotalCount=0;
       let ItemCount=0;
     
       
       
       this.table.map(TableValue=>{
           
           TableValue.map((KeyValue)=>{
               
               TableValue.map(ItemValue=>{
                   
                   if(KeyValue==ItemValue){
                       
                       ItemCount=ItemCount+1;
                       
                       
                   }
                   
               })
               
               if(ItemCount!=1){
                   
                   TotalCount=TotalCount+KeyValue;
               }
               
             
               ItemCount=0;
               
              
           })
       })
      
      console.log(TotalCount)
   }
     
  }
  
  const htOverlapping = new HashTableOverlapping();
  
  htOverlapping.set([12, 13, 6, 10,13, 10, 16, 15])
  
  htOverlapping.display()
  