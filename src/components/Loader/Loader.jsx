import { InfinitySpin } from 'react-loader-spinner';
import './Loader.css';

export const Loader = () => {
  return (
    <div className="loader">
      <InfinitySpin
        width="700"
        color="#4fa94d"
        position="center"
        visible={true}
      />
    </div>
  );
};
