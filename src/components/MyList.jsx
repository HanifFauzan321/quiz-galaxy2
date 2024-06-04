/* eslint-disable react/prop-types */
import { Info } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Heart } from "lucide-react";

export default function MyList({songsPropst}){
   
    const showInfo = (songsPropst) => {
        alert(` Name          : ${songsPropst.namaPenyanyi} \n Band            : ${songsPropst.band}, \n Lagu     : ${songsPropst.namaLagu}`);
      }
    
      const showLike = (songsPropst) => {
        alert(`Saya menyukai Lagu ${songsPropst.namaLagu}`);
      }
    
      const showComment = () => {
         let found = prompt("Enter your comments :");
          found === null ? alert("Oke, no problem") : alert("Please click the send icon");
      }
    

    return(
        <>
        <div className="min-w-80 mx-auto my-10 bg-blue-200 rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full h-48 object-cover bg-gradient-to-r from-blue-100 to-blue-500"
          src={songsPropst.poto}
          alt="Buah"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-950 mb-2">{songsPropst.namaLagu}</h1>
          <div className="flex items-center justify-between">
            <button className="text-blue-400 hover:text-blue-700" onClick={() => showInfo(songsPropst)}>
              <Info />
            </button>
            <button className="text-pink-400 hover:text-pink-700 " onClick={() => showLike(songsPropst)}>
              <Heart />
            </button>
            <button className="text-green-400 hover:text-green-700" onClick={()=> showComment()}>
              <MessageCircle />
            </button>
          </div>
        </div>
      </div>

        </>
    );
}