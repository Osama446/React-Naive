# React-Naive

React Notes:

  1. When handling default submit behavior of a button in a form its better to handle it on the form onSubmit event not the onClick 
     button event.
  2. For child-parent communication we create a call back function in the parent then pass it to the child to get access to the data of the parent.
     Eg: 
        
        `App.js
          const addGoalHandler = newGoal =>{
              setCourseGoals(previousCourseGoals => previousCourseGoals.concat(newGoal));
            }
            
            This arrow function will be sent to the child and the child will use it to create a new task and send it to the parent through the newGoal argument
            
          
        `
        
        
  4. er
  5. 
