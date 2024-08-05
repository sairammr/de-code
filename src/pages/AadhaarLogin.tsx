import {
	LogInWithAnonAadhaar,
	useAnonAadhaar,
	AnonAadhaarProof,
} from '@anon-aadhaar/react';
import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';

export default function Home() {
	const { address } = useAccount();
	const [anonAadhaar] = useAnonAadhaar();
	const [fields] = useState({
		revealAgeAbove18: true,
		revealGender: false,
		revealPinCode: false,
		revealState: false,
	});
	const [extractedId, setExtractedId] = useState<string | null>(null);

	type FieldKey =
		| 'revealAgeAbove18'
		| 'revealGender'
		| 'revealPinCode'
		| 'revealState';

	const fieldsToReveal = (): FieldKey[] => {
		const fieldsToReveal: FieldKey[] = [];
		if (fields.revealAgeAbove18) fieldsToReveal.push('revealAgeAbove18');
		if (fields.revealGender) fieldsToReveal.push('revealGender');
		if (fields.revealPinCode) fieldsToReveal.push('revealPinCode');
		if (fields.revealState) fieldsToReveal.push('revealState');
		return fieldsToReveal;
	};

	const dataMapping = {
		revealAgeAbove18: 'ageAbove18',
		revealGender: 'gender',
		revealPinCode: 'pinCode',
		revealState: 'state',
	};

	useEffect(() => {
		if (anonAadhaar?.status === 'logged-in') {
			try {
				const pcdData = JSON.parse(anonAadhaar.anonAadhaarProofs['0'].pcd);
				const pubkeyHash = pcdData.proof.pubkeyHash;
				setExtractedId(pubkeyHash	 || null);
			} catch (error) {
				console.error('Error parsing PCD data:', error);
				setExtractedId(null);
			}
		}
	}, [anonAadhaar]);

	return (
		<div>
			<div className='mx-auto w-[60%] max-md:w-[95%] my-7 px-6 py-2 border-green-300 border-dotted border-2 rounded-xl'>
				<h2 className='text-xl text-white mb-3'>
					Verify your identity using Anon Aadhaar, click login!
				</h2>
				<LogInWithAnonAadhaar
					nullifierSeed={1234}
					fieldsToReveal={fieldsToReveal()}
					// useTestAadhaar={true}
					signal={address}
				/>
				<div className='flex gap-2 items-center text-lg'>
					Status :{' '}
					<p
						className={`py-2 ${
							anonAadhaar?.status === 'logged-out'
								? 'text-red-500'
								: 'text-green-300'
						}`}
					>
						{anonAadhaar?.status}
					</p>
				</div>
			</div>
			<div className='w-[60%] max-md:w-[95%] mx-auto backdrop-blur-md px-6 py-2 border-green-300 border-dotted border-2 rounded-xl'>
				{anonAadhaar?.status === 'logged-in' && (
					<div className='mx-auto text-md text-white'>
						<h2 className='my-2 text-xl'>✅ Your Proof is valid</h2>
						<p className='my-2 text-xl'>Fetched Details from ZK proof </p>
						<p className='my-2 text-xl'>Extracted ID: {extractedId || 'Not Available'}</p>
						{Object.keys(fields).map((item) => {
							const key = item as FieldKey;
							if (fields[key])
								return (
									<p key={key}>
										{dataMapping[key]} :{' '}
										{
											JSON.parse(anonAadhaar.anonAadhaarProofs['0'].pcd)
												.proof?.[dataMapping[key]]
										}
									</p>
								);
							return null;
						})}
					</div>
				)}
			</div>
		</div>
	);
}
