import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const useProfileData = () => {
	const [profileData, setProfileData] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const name = useSearchParams().get("name");

	useEffect(() => {
		setIsLoading(true);
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
				}).finally(setIsLoading(false));
		}
	}, [router.query, name]);

	return { profileData, isLoading, error };
};

export default useProfileData;
