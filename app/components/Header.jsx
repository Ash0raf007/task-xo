"use client";
import Link from "next/link";
import Cookies from "js-cookie"; 
import { signOut } from "firebase/auth"; 
import { auth } from "@/app/firebase/config"; 
import { useRouter } from "next/navigation"; 
import { useEffect, useState } from "react"; 

const Header = () => {
  const router = useRouter();
  const [user, setUser] = useState(null); 
  const [isMounted, setIsMounted] = useState(false); 

  useEffect(() => {
    // Only run this on the client side
    setIsMounted(true);

    // Retrieve user cookie on mount
    const userCookie = Cookies.get("user");
    setUser(userCookie); // Set the user state
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth); 
      Cookies.remove("user"); 
      setUser(null); 
      router.push("/auth/signin");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (!isMounted) {
    return null; 
  }

  return (
    <header className="h-20 flex items-center px-[20px] bg-[#F9F9F9] text-black border">
      <nav className="w-full mx-auto flex justify-between items-center px-2 text-black font-serif text-xl">
        <Link href="/dashboard">
          <div>Logo</div>
        </Link>
        <ul className="flex gap-4">
          {!user ? (
            <>
              <Link href="/auth/signin" className="rounded-full border p-[10px] ">
                <li className="cursor-pointer hover:text-blue-500 text-[15px]">Sign In</li>
              </Link>
              <Link href="/auth/signup" className="rounded-full border p-[10px]">
                <li className="cursor-pointer hover:text-blue-500 text-[15px]">Sign Up</li>
              </Link>
            </>
          ) : (
            <>
              <Link href="/dashboard">
                <li className="cursor-pointer hover:text-blue-500">Profile</li>
              </Link>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-red-500 hover:text-red-700 transition duration-200"
                >
                  Log out
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
