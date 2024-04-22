import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(req, res) {
	const name = req.nextUrl.searchParams.get("name");

	if (!name) {
		return NextResponse.error(new Error("Name is required"), { status: 400 });
	}

	const profileResponse = await fetch(
		`https://fortnite-api.com/v2/stats/br/v2?timeWindow=season&name=${name}`,
		{
			headers: {
				Authorization: `Bearer ${process.env.FORTNITE_API_KEY}`,
			},
			revalidatePath: revalidatePath(req.nextUrl.pathname),
		}
	);

	if (!profileResponse.ok) {
		return NextResponse.error(new Error("Profile not found"), { status: 404 });
	}

	const profile = await profileResponse.json();

	return NextResponse.json(profile);
}
