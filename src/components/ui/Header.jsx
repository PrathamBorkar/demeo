import React from "react";
import { useUser, UserButton } from "@clerk/clerk-react";
import { Button } from "./button"; // Ensure the case matches the file name
import { SignInButton } from "@clerk/clerk-react";


function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <header className="flex justify-between items-center px-6 py-3 border-b bg-white shadow-sm">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img src="./assets/logo.svg" width={40} height={40} alt="Calescence Logo" />

        <span className="text-lg font-semibold">Calescence</span>
      </div>

      {/* Middle: Navigation */}
      <nav className="flex gap-6 text-gray-800 font-medium">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Search</a>
        <a href="#" className="hover:text-blue-600">New</a>
        <a href="#" className="hover:text-blue-600">Preowned</a>
      </nav>

      {/* Right: User and Submit Button */}
      <div className="flex items-center gap-4">
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <div className="w-8 h-8 flex items-center justify-center bg-green-900 text-white rounded-full">
            G
          </div>
        )}
        
        <SignInButton className="bg-black text-white px-4 py-2 rounded-lg hover:opacity-80 " >
      Sign In
        </SignInButton>
      </div>
    </header>
  );
}

export default Header;
