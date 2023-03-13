
import { Navigate } from 'react-router-dom';
import { InfoValue } from './Stores/UserStore';
import { useRecoilValue } from "recoil";

interface Props {
  component: React.ComponentType
  path?: string
}

const ProtectedRoute: React.FC<Props> = ({ component: RouteComponent }) => {
  const info = useRecoilValue(InfoValue);

  if (!info.user) {
    return <Navigate to="/login" />
  }

  return <RouteComponent />
}

export default ProtectedRoute;