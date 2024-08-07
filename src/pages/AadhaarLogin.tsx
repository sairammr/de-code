import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { LogInWithAnonAadhaar, useAnonAadhaar } from '@anon-aadhaar/react';
import axios from 'axios';

interface Fields {
  revealAgeAbove18: boolean;
  revealGender: boolean;
  revealPinCode: boolean;
  revealState: boolean;
}

interface PCDData {
  proof: {
    pubkeyHash: string;
  };
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { address } = useAccount();
  const [anonAadhaar] = useAnonAadhaar();
  const [fields] = useState<Fields>({
    revealAgeAbove18: true,
    revealGender: false,
    revealPinCode: false,
    revealState: false,
  });
  const [, setExtractedId] = useState<string | null>(null);
  const [value, setValue] = useState<string>('');

  const fieldsToReveal = () => {
    const fieldsToReveal: (keyof Fields)[] = [];
    if (fields.revealAgeAbove18) fieldsToReveal.push('revealAgeAbove18');
    if (fields.revealGender) fieldsToReveal.push('revealGender');
    if (fields.revealPinCode) fieldsToReveal.push('revealPinCode');
    if (fields.revealState) fieldsToReveal.push('revealState');
    return fieldsToReveal;
  };

  useEffect(() => {
    if (anonAadhaar?.status === 'logged-in') {
      try {
        const pcdData: PCDData = JSON.parse(anonAadhaar.anonAadhaarProofs['0'].pcd);
        const pubkeyHash = pcdData.proof.pubkeyHash;

        // Save to server
        axios.post('http://localhost:5000/api/data', { pubkeyHash, value })
          .then(() => {
            setExtractedId(pubkeyHash || null);
            sessionStorage.setItem('anonid', pubkeyHash || '');
            sessionStorage.setItem('username', value || '');
            console.log(pubkeyHash);
            console.log(value);
            navigate('/', { replace: true });
          })
          .catch((error: any) => {
            console.error('Error saving data:', error);
            setExtractedId(null);
          });

      } catch (error) {
        console.error('Error parsing PCD data:', error);
        setExtractedId(null);
      }
    }
  }, [anonAadhaar, navigate, value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div className='justify-center flex flex-column'>
        <input
          type="text"
          value={value}
          onChange={handleChange}
        />
        <LogInWithAnonAadhaar
          nullifierSeed={1234}
          fieldsToReveal={fieldsToReveal()}
          signal={address}
        />
      </div>
    </div>
  );
};

export default Home;
