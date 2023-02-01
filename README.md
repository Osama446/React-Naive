# React-Naive

React Notes:

  1. When handling default submit behavior of a button in a form its better to handle it on the form onSubmit event not the onClick 
     button event.
  2. For child-parent communication we create a call back function in the parent then pass it to the child to get access to the data of the parent.
     Eg: 
        
        
        App.js
        
        
          const addGoalHandler = newGoal =>{
              setCourseGoals(previousCourseGoals => previousCourseGoals.concat(newGoal));
            }
            
            This arrow function will be sent to the child and the child will use it to create a new task and send it to the parent through the newGoal argument
            
          
        
    
  3. When adding a ScrollView component make sure it is in a view so it does not miss with the width and height of other components  
  4. The Flatlist component will always look for a key value in objects if they are defined, if I need to use another value as the key we can use the 
     key extractor that will recieve a function that will automatically have the item and the index and we can return the key name of the key we want to use.
     An id can be used for an example in an object that has ids
  6. to add shadows   



           elevation: 4, // android


           shadowColor: 'black', // ios


           shadowOffset: { width: 0, height: 2 },


           shadowRadius: 6,

     
  8. props can be used to replicate the cascading styles of css by passing a style prop and adding it to the childern custom element style. 
  
  9. 
