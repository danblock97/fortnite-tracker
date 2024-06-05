"use client";

import Profile from "../components/Profile";
import useProfileData from "@/app/hooks/useProfileData";
import Loading from "../components/Loading";

const Page = () => {
	const { profileData, isLoading, error: profileError } = useProfileData();

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div className="min-h-screen bg-[#23439b] overflow-hidden">
			{profileData ? (
				<>
					<Profile profileData={profileData} />
				</>
			) : profileError ? (
				<p className="text-red-500">{profileError}</p>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default Page;
