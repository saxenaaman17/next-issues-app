import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

// export function GET(request: NextRequest) {
//   return NextResponse.json([
//     { id: 1, name: "Aman" },
//     { id: 1, name: "Manoj" },
//   ]);
// }

export async function GET(request: NextRequest) {
  // prisma.user.findMany({
  //   where: {
  //     email: "",
  //   },
  // });
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

// export async function POST(request: NextRequest) {
//   const body = await request.json(); // this returns a promise, hence we need to await it

//   // validate the data
//   // if invalid, return 400
//   // else, return created data
//   const validation = schema.safeParse(body); // we can use schema.parse() too but that'll give an exception instead of just returning an obj
//   if (!validation.success) {
//     return NextResponse.json(validation.error.errors, { status: 400 });
//   }
//   // if (!body.name) {
//   //   return NextResponse.json({ error: "Name is required" }, { status: 400 });
//   // }

//   return NextResponse.json({ id: 1, name: body.name }, { status: 201 }); // ususally this id generation will happen in a db in a real app
// }

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body); // we can use schema.parse() too but that'll give an exception instead of just returning an obj
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (user)
    return NextResponse.json({ error: "User already exists" }, { status: 400 });

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(newUser, { status: 201 });
}
