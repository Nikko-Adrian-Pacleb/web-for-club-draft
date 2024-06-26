import { db } from "@/Database/Firebase";
import { collection, addDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { first, last, born } = body;

    if (!first || !last || !born) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const docRef = await addDoc(collection(db, "users"), {
      first,
      last,
      born,
    });

    console.log("Document written with ID: ", docRef.id);
    return NextResponse.json(
      { message: "Document written with ID: " + docRef.id },
      { status: 200 }
    );
  } catch (e) {
    console.error("Error adding document: ", e);
    return NextResponse.json(
      { error: "Error adding document: " + e.message },
      { status: 500 }
    );
  }
}
