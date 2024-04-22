const Profile = ({ profileData }) => {
	const { account, battlePass, stats } = profileData.data;
	const { overall, solo, duo } = stats.all;

	const renderStatsSection = (title, statData) => (
		<>
			<h3 className="text-lg text-center text-indigo-300 font-bold my-2">
				{title}
			</h3>
			{statData ? (
				<div className="grid grid-cols-3 gap-4 text-center">
					<div>
						<p className="text-gray-400">WINS</p>
						<p className="text-xl">{statData.wins}</p>
					</div>
					<div>
						<p className="text-gray-400">K/D</p>
						<p className="text-xl">{statData.kd.toFixed(2)}</p>
					</div>
					<div>
						<p className="text-gray-400">KILLS</p>
						<p className="text-xl">{statData.kills}</p>
					</div>
					<div>
						<p className="text-gray-400">MATCHES</p>
						<p className="text-xl">{statData.matches}</p>
					</div>
					<div>
						<p className="text-gray-400">WIN RATE</p>
						<p className="text-xl">{statData.winRate.toFixed(1)}%</p>
					</div>
					<div>
						<p className="text-gray-400">KILLS/MATCH</p>
						<p className="text-xl">
							{(statData.kills / statData.matches).toFixed(1)}
						</p>
					</div>
				</div>
			) : (
				<p className="text-xl text-center">
					Play some {title.toLowerCase()} games.
				</p>
			)}
		</>
	);

	return (
		<div className="flex justify-center items-center h-screen bg-gray-700">
			<div className="bg-blue-gray-800 text-white font-bold py-6 px-8 w-full max-w-4xl rounded-lg shadow-xl">
				<div className="flex justify-between items-start">
					<div>
						<h2 className="text-3xl text-indigo-300">{account.name}</h2>
						<p className="text-xl text-gray-400">
							Battle Pass Level: {battlePass.level}
						</p>
					</div>
					<div>
						<h2 className="text-2xl text-blue-300">
							CHAPTER 5 SEASON 2
						</h2>
					</div>
				</div>
				{renderStatsSection("Overall Stats", overall)}
				{renderStatsSection("Solo Stats", solo)}
				{renderStatsSection("Duo Stats", duo)}
			</div>
		</div>
	);
};

export default Profile;
