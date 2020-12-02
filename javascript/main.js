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
       { name: "",
         email: "",
         Phone: "",
         Date: "",
         help: "",

       },
       { name: "",
         email: "",
         Phone: "",
         Date: "",
         help: "",

       },
       { name: "",
         email: "",
         Phone: "",
         Date: "",
         help: "",

       }
     ],

     newName: "",

     newEmail: "",

     newPhone: "",

     newDate: "",

     newDate: "",

     newHelp: "",




   },

   methods: {
      // Call back function that use the arrays index and the controll variable to match the user with the same message inside the array
      Setactivecontact(index) {
       // comparing the control variable to the array's index//
         this.indexId = index;

      },

      // callback function that use the add the new strings in the array
      addingNewAppointment(){
        if((this.newName.trim() !== "") && (this.newEmail.trim() !== "") &&()){
          // array mached with the control variable to push the newchat in the esact contact.name and messages//
          this.listUser[this.indexId].messages.push({
                 // Format date made by Data,js //
                 date: dayjs().format('DD/MM/YY HH:mm:ss'),
                 // Create a new messge.value with previously the function previously described //
                 message: this.newchat.trim(),
                 // assignment of the object value to assign the right class in css //
                 status: 'sent',

             });
      }

    }


  });
