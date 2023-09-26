import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { authOptions } from "./api/auth/authOptions";
import { getServerSession } from "next-auth";
import coding from "@/public/images/pexels-vlad.jpg";
import { Metadata } from "next";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      {/* <Image src={coding} alt="programming" /> */}
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="programming"
        // width={300}
        // height={170}
        fill
        // style={{ objectFit: "cover" }}
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
    </main>
  );
}

export const metadata: Metadata = {
  title: "..",
  description: "",
};

// to generate dynamic metdata for routes with params

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");
//   // or get data from prisma if it's in your db

//   return {
//     title: product.title,
//     description: product.description,
//   };
// }
