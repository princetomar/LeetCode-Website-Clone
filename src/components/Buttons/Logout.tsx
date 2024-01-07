import { auth } from "@/firebase/firebase";
import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { FiLogOut } from "react-icons/fi";

const Logout: React.FC = () => {
  const [signOut, loading, error] = useSignOut(auth);
  const handleUserLogOut = async () => {
    const success = await signOut();
    if (success) {
      alert("You are sign out");
    }
  };
  return (
    <button
      className=" bg-dark-fill-3 px-3 py-1.5 rounded text-brand-orange cursor-pointer"
      onClick={handleUserLogOut}
    >
      <FiLogOut />
    </button>
  );
};
export default Logout;
