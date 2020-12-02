/**
 * Project helthy Vue
 */
var app = new Vue({
    el: '#app',
    data: {
    // List of array that contains the link of navbar
    listContact:[
        {
          name: "home",
          class: "Home-style"
        },

        {
          name: "about"
        },

        {
          name: "departments"
        },

        {
          name: "articles"
        },

        {
          name: "make an appointment",
          class: "btn"
        }
     ],

     // List user
     listUser:[
       {


       },
     ],
     // strings of vlaue managed by an input
     newName: "",

     newEmail: "",

     newPhone: "",

     newDate: "",

     newHelp: "",




   },

   methods: {


      // callback function that use the add the new strings in the array
      addingNewAppointment(){
          // validation
          if((this.newName.trim() !== "") && (this.newName.trim() !== "")  && (this.newName.trim() !== "") && (this.newName.trim() !== "") && (this.newName.trim() !== "")){
             this.listUser.push({
               name:  this.newName,
               email: this.newEmail,
               phone: this.newPhone,
               date: this.newDate,
               help: this.newHelp
             });

             console.log(this.listUser)

            // deafukt situaation

             this.newName = "";
             this.newEmail ="";
             this.newPhone = "";
             this.newDate = "";
             this.newHelp = "";

          }
      }

    }


  });
