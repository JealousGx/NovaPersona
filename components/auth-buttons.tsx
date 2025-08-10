import Link from "next/link";
import React from "react";

export const AuthButtons = () => {
  return (
    <React.Fragment>
      <Link href="/login" className="hover:underline">
        Login
      </Link>
      <Link href="/signup" className="hover:underline">
        Sign Up
      </Link>
    </React.Fragment>
  );
};
