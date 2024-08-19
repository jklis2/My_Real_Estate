import { Outlet } from 'react-router-dom';
import AuthPanel from 'containers/AuthPanel';

export default function AuthLayout() {
  return (
    <AuthPanel>
      <Outlet />
    </AuthPanel>
  );
}
