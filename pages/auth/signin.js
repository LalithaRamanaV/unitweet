import {getProviders,signIn} from "next-auth/react";
import { GoogleAuthProvider } from "firebase/auth";
import unitweet from '../../public/images/unitweet.png'
import Image from 'next/image'

function signin({providers}) {
  return (
    <div className="flex justify-center mt-20 space-x-6">
      <img className="hidden object-cover md:w-60 md:h-90 md:inline-flex" src="https://melissataub.com/wp-content/uploads/2019/07/Twitter-Mockup-crop2.png" alt="logo"/>
      <div className="">
      {Object.values(providers).map((provider)=>(
          <div className="flex flex-col items-center">
             <Image src={unitweet} alt="" width="190" height="190" className=" object-cover hoverEffect p-0 hover:bg-blue-100 xl:px-1 justify-center"/>
             <p className="text-center text-lg my-10">Hello! <br/>Welcome to Unitweet</p>
             <button onClick={()=>signIn(provider.id,{callbackUrl:"/"})} className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">Signin with {provider.name}</button>
           </div>
        ))}
     </div>
    </div>
  );
}

export default signin

export async function getServerSideProps(){
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}