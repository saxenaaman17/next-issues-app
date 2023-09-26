import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

// export function GET(
//   request: NextRequest,
//   { params }: { params: { id: number } }
// ) {
//   // in a real app, we'll fetch this data from a database
//   // if data not found, return 404 error
//   // else return actual data
//   if (params.id > 10)
//     return NextResponse.json({ error: "User not found" }, { status: 404 });

//   return NextResponse.json({ id: 1, name: "Moshii" });
// }

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(user);
}

// export async function PUT(
//   request: NextRequest,
//   { params }: { params: { id: number } }
// ) {
//   const body = await request.json();

//   // validate the request body
//   // if invalid, return 400
//   const validation = schema.safeParse(body);
//   if (!validation.success)
//     return NextResponse.json(validation.error.errors, { status: 400 });
//   // if (!body.name)
//   //   return NextResponse.json({ error: "Name is required" }, { status: 400 });

//   // else Fetch user within the given id
//   // if doesn't exist, return 404
//   if (params.id > 10)
//     return NextResponse.json({ error: "User not found" }, { status: 404 });

//   // else update the user in db & return the updated user
//   return NextResponse.json({ id: params.id, name: body.name });
// }

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(updatedUser);
}

// export function DELETE(
//   request: NextRequest,
//   { params }: { params: { id: number } }
// ) {
//   // fetch user from db
//   // if not found, return 404

//   if (params.id > 10)
//     return NextResponse.json({ error: "User not found" }, { status: 404 });

//   // else Delete the user and return 200
//   return NextResponse.json({});
// }

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  await prisma.user.delete({
    where: {
      id: user.id,
    },
  });
  return NextResponse.json({});
}
