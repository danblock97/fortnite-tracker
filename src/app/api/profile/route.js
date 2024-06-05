import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(req) {
	const name = req.nextUrl.searchParams.get("name");

	if (!name) {
		throw new Error("Missing required parameter 'name'");
	}

	const profileResponse = await fetch(
		`https://fortnite-api.com/v2/stats/br/v2?timeWindow=season&name=${name}`,
		{
			headers: {
				Authorization: process.env.FORTNITE_API_KEY,
			},
			revalidatePath: revalidatePath(req.nextUrl.pathname),
		}
	);

	if (!profileResponse.ok) {
		throw new Error("Failed to fetch data");
	}

	const profileData = await profileResponse.json();

	return NextResponse.json(profileData);
}
