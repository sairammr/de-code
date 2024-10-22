import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className='mx-auto w-full flex flex-col items-center gap-y-3'>
			<div className='flex justify-center items-center w-full h-100vh'>
			</div>
			<Link className='bg-green-600 text-xl rounded-xl p-1 text-white hover:bg-green-700' to='/verify-aadhaar'>Verify Aadhaar</Link>
		</div>
	);
};

export default Home;
