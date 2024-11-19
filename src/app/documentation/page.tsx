import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-5xl font-bold">PROJECT DOCUMENTATION</h1>
      <p>
        {" "}
        This is just a project made to play around with the SHADCN UI library
        for Next Js projects
      </p>
      <p>To know more about SHADCN, visit <Link href={"https://ui.shadcn.com/docs"} className="text-3xl font-bold">Here</Link></p>
    </div>
  );
}

export default page;
