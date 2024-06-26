import { collection, getDocs } from "firebase/firestore";
import { db } from "@/Database/Firebase";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db, "events"));
    const events = [];

    querySnapshot.forEach((doc) => {
      events.push({ id: doc.id, ...doc.data() });
    });

    return NextResponse.json(events, { status: 200 });
  } catch (e) {
    console.error("Error getting documents: ", e);
    return NextResponse.json(
      { error: "Error getting documents: " + e.message },
      { status: 500 }
    );
  }
}
