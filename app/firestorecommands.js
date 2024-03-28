   // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA_F19PrvG8s5N9MueLmQ2yUi2lBk5_7s8",
    authDomain: "dnd-char-creator-c5f17.firebaseapp.com",
    projectId: "dnd-char-creator-c5f17",
    storageBucket: "dnd-char-creator-c5f17.appspot.com",
    messagingSenderId: "96106082425",
    appId: "1:96106082425:web:720fb32bfca749c77424a8"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize Firestore
  const db = firebase.firestore();


async function collectionActionAdd(collectionName, docData) {

        const docRef = await db.collection(collectionName).add(docData)
		.catch(error => {
          throw error.message;
		});
        docData.id = docRef.id;
        return docData;
}

async function collectionActionUpdate(collectionName, docData) {

		var uniqueID = docData.id
		var copyData = JSON.parse(JSON.stringify(docData));
		delete copyData.id; //remove id from the data being updated
		
		await db.collection(collectionName).doc(uniqueID).update(copyData)
		.catch(error => {
          throw error.message;
		});
		copyData.id = uniqueID;
		return copyData;
}

async function collectionActionGetAll(collectionName) {
        const objs = [];

        const snapshot = await db.collection(collectionName).get()
		.catch(error => {
          throw error.message;
		});
        snapshot.forEach(doc => objs.push({id: doc.id, ...doc.data()}))

        return objs;
}

async function collectionActionGet(collectionName, id) {
        var obj;

        var doc = await db.collection(collectionName).doc(id).get()
		.catch(error => {
          throw error.message;
		});
        if(doc.exists) 
            obj = {id: doc.id, ...doc.data()};
        else
            throw 'No document found with id: ' +  id;
			
        return obj;
}

async function collectionActionDelete(collectionName, id) {
	
        await db.collection(collectionName).doc(id).delete()
		.catch(error => {
          throw error.message;
		});
		
		return null;
    }
