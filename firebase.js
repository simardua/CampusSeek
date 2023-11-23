const express=require('express');
const firebase=require('firebase/app');
const GoogleAuthProvider=require('firebase/auth');

const {getStorage,ref, uploadBytes}=require('firebase/storage')

const firebaseConfig = {
  your_API_key
};


module.exports=firebase.initializeApp(firebaseConfig);

// const storage=getStorage();
// const upload=multer({storage:multer.memoryStorage()});

