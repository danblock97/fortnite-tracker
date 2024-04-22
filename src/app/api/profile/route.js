import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(req, res) {
	const name = req.nextUrl.searchParams.get("name");

	if (!name) {
		res.status(400).send("Missing required parameters");
		return;
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
		res.status(500).send("Failed to fetch data");
		return;
	}

	const profileData = await profileResponse.json();

	return NextResponse.json(profileData);
}
