 

// All operations below are queue realated            
//=============================================================================================
 
 var queue = function() {
    var rear_ptr = null;
    var front_ptr = null;      
    var prev_ptr = null;
 };

 queue.prototype.insert=function(val){ 
  var node = this.make_node(val) ;
  if (this.front_ptr==null) {
    this.front_ptr=node;
    this.rear_ptr=node;  
  } else {
   this.rear_ptr.ptr = node;
   this.rear_ptr = node;
  }
 };

 queue.prototype.getval=function() 
 {
  return this.val
 };
 queue.prototype.make_node=function(val){return {value:val, ptr:null}};
 queue.prototype.delete=function() {
    if (this.front_ptr==null) 
      { console.log("ERROR --- deleting from empty queue")
    } else {
      this.front_ptr = this.front_ptr.ptr;}
 }

 queue.prototype.display=function(){
  var temp  = this.front_ptr;
  while(temp!=null){ 
      console.log(temp.value);
    temp =temp.ptr;
  }
 }

// var queue1 = new queue();
//  queue1.insert(3);
//  queue1.insert(1);
//  queue1.insert(5);
//  queue1.display();
//  queue1.delete();
//  console.log("\n");
//  queue1.display();
   


 
// All operation below are dqeque related
//==============================================================================================


var dqueue = function(){
  var rear_ptr = null;
  var front_ptr = null;      
 };

 dqueue.prototype.rear_insert=function(val){ 
  var node = this.make_node(val) ;
    if (this.front_ptr==null) {
      this.front_ptr=node;
      this.rear_ptr=node;  
    } else {
       this.rear_ptr.ptr = node;
       this.rear_ptr = node;
    }
  };
 dqueue.prototype.getval=function() {
  return this.val
  };
 
 dqueue.prototype.make_node=function(val) {
  return {value:val, ptr:null}
  };

 dqueue.prototype.front_insert=function(val){
  
  var node = this.make_node(val);  
    if (this.front_ptr==null) {
      this.front_ptr= node;
      this.rear_ptr = node;
    } else {
      node.ptr = this.front_ptr;
      this.front_ptr = node;
    }
  };

 dqueue.prototype.rear_delete=function() {
    if (this.front_ptr==null) { 
      console.log("ERROR -- call to empty queue for delete ")
    } else {
    var temp = this.front_ptr;
    var prev_ptr = null;
      while(temp.ptr!=null){
        prev_ptr = temp;
        temp= temp.ptr;
      }
    prev_ptr.ptr = null;
    this.rear_ptr = prev_ptr;
    }
  };

 dqueue.prototype.front_delete=function() {
    if (this.front_ptr==null) { 
      console.log("ERROR --- deleting from empty queue")
    } else {  
    this.front_ptr = this.front_ptr.ptr;
    }
  };

 dqueue.prototype.display=function() {
  var temp  = this.front_ptr;
    while(temp!=null){
      console.log(temp.value);
      temp =temp.ptr;
    }
   // console.log("front ptr");
   // console.log(this.front_ptr)
   // console.log("rear ptr");
   // console.log(this.rear_ptr);
 };



 var queue2 = new dqueue();
 queue2.rear_insert(1);
 queue2.rear_insert(2);
 queue2.rear_insert(3);
 queue2.display(); 
 queue2.rear_delete();
 console.log("\n");
 queue2.display();
 queue2.rear_insert(10);
 console.log("\n");
 queue2.display();
 queue2.front_insert(12)
 console.log("\n");
 queue2.display();
 queue2.rear_delete();
 console.log("\n");
 queue2.display();
 

