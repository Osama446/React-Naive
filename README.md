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
  
  9. Dimensions api .get method has two options 'screen' or 'window' 
    
    the ios there is no difference between them
    
    on android the window excludes the status bar while the screen includes the status bar.
    
    
  9. For platform specific styling we can use the platform component then using a ternary expression or using the Platform.select() that takes an object.
      Platform.select({ ios: 0, android:2 }) this will pick the value for each platform.
      
      also adding the .android or .ios to a component before the .js will make react automatically know what to call internally so we can have components that 
      only work on ios or only on android.
      
      
      
      
  10. when passing parameters through different screens we can use the useRoute hook to get the route paramters in a component that is not named as a screen in the app js         file


  11. useLayout hook works like useEffect hook but renders at the same time of rendering the componenet and it's used in the navigation to set the title dynamically.
