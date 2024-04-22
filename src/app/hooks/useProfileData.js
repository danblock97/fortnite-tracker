import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const useProfileData = () => {
	const [profileData, setProfileData] = useState(null);
	const [error, setError] = useState(null);
	const router = useRouter();
	const name = useSearchParams().get("name");

	useEffect(() => {
		if (name) {
			fetch(`/api/profile?name=${name}`)
				.then((response) => {
					if (!response.ok) throw new Error("Profile not found");
					return response.json();
				})
				.then((data) => {
					setProfileData(data);
					setError(null);
				})
				.catch((error) => {
					setError(error.message || "An error occurred");
				});
		}
	}, [router.query, name]);

	return { profileData, error };
};

export default useProfileData;
