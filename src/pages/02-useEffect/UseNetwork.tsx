import { useNetwork } from '@/hooks/useNetwork';

const UseNetwork = () => {
  const handleNetworkChange = (online: boolean) => {
    console.log(online ? 'We just went online' : 'We are offline');
  };
  const online = useNetwork(handleNetworkChange);
  return (
    <div>
      <h1> {online ? 'Online' : 'Offline'}</h1>
    </div>
  );
};

export default UseNetwork;
