import { authModalState } from "@/atoms/authModalAtom";
import AuthModel from "@/components/Modals/AuthModel";
import Navbar from "@/components/Navbar/Navbar";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilValue } from "recoil";

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
  //  get current state using recoil
  const authModal = useRecoilValue(authModalState);
  const [pageLoading, setPageLoading] = useState(true);
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) router.push("/");
    if (!loading && !user) setPageLoading(false);
  }, [user, router, loading]);

  if (pageLoading) return null;
  return (
    <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
      <div className="mx-w-7xl mx-auto">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none ">
          <img src="/hero.png" alt="Hero Image"></img>
        </div>
        {authModal.isOpen && <AuthModel />}
      </div>
    </div>
  );
};
export default AuthPage;
