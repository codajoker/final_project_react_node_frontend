import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { verifiedUser } from '../../services/usersApi';
import Loader from '../Loader/Loader';
import { verifiedSuccessToast } from '../../helpers/authToasts';

export default function VerificationToken() {
  const { verificationToken } = useParams();
  const navigate = useNavigate();

  const verification = async () => {
    const result = await verifiedUser(verificationToken);

    if (result.message === 'Verification successful') {
      verifiedSuccessToast();
      navigate('/signin');
    }
  };

  useEffect(() => {
    verification();
  }, []);

  return (
    <>
      <Loader />
    </>
  );
}
