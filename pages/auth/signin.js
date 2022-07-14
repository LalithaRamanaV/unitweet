import { useRouter } from "next/router";
import { db } from "../../firebase";
import unitweet from '../../public/images/unitweet.png'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";

import Image from 'next/image'

function signin() {
  const router = useRouter()
  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      const user = auth.currentUser.providerData[0];
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          username: user.displayName.split(" ").join("").toLocaleLowerCase(),
          userImg: user.photoURL,
          uid: user.uid,
          timestamp: serverTimestamp(),
        });
      }
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center mt-20 space-x-6">
      <Image className="hidden object-cover md:w-60 md:h-90 md:inline-flex" src="https://melissataub.com/wp-content/uploads/2019/07/Twitter-Mockup-crop2.png" alt="logo"/>
      <div className="">
     
          <div className="flex flex-col items-center">
             <Image src={unitweet} alt="" width="190" height="190" className=" object-cover hoverEffect p-0 hover:bg-blue-100 xl:px-1 justify-center"/>
             <p className="text-center text-lg my-10">Hello! <br/>Welcome to Unitweet</p>
             <button   onClick={onGoogleClick} className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">Signin with Google</button>
           </div>
     </div>
    </div>
  );
}

export default signin

