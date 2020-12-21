import { db } from "../firebase/firebase-config"

export const loadNotes = async (uid)=> {
     const noteSnap = await db.collection(`${uid}/journal/notes`).get(); 

     const notes = []; 
     //const notes = new Array();
     
     noteSnap.forEach(snapHijo => {
          notes.push({
               id: snapHijo.id, 
               ...snapHijo.data()
          })
     });
      
     //console.log((notes));     
     return notes;      
}