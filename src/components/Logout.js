import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '608609590874-75h6r5n8altmogcb88jgnchjb1mdmflg.apps.googleusercontent.com'

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
