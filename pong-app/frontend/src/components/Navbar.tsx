// // pong-app/frontend/src/components/Navbar.tsx
// import { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
// import api from '../utils/api';

// const Navbar = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
//   const [isLoggingOut, setIsLoggingOut] = useState(false);

//   const handleLogout = async () => {
//     if (isLoggingOut) return;
    
//     setIsLoggingOut(true);
//     try {
//       await logout();
//       navigate('/login', { replace: true });
//       // Force reload to ensure complete cleanup
//       window.location.reload();
//     } catch (error) {
//       console.error('Logout failed:', error);
//     } finally {
//       setIsLoggingOut(false);
//     }
//   };

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex flex-wrap justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="mb-2 sm:mb-0">
//           <span className="block text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
//             H5 Asteroids
//           </span>
//           <span className="block text-sm uppercase tracking-wide text-red-400">
//             Pong Game
//           </span>
//         </Link>

//         {/* Right section */}
//         <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto space-y-3 sm:space-y-0 mt-3 sm:mt-0">
//           {user ? (
//             <>
//               {/* Avatar + User info */}
//               <div className="flex items-center space-x-3">
//                 <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
//                   {user?.name?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase()}
//                 </div>
//                 <div className="text-left sm:text-right">
//                   <p className="text-white font-medium text-sm sm:text-base">
//                     Hello, {user?.name || 'User'}
//                   </p>
//                   <p className="text-gray-300 text-xs sm:text-sm">{user?.email}</p>
//                 </div>
//               </div>

//               {/* Logout button */}
//               <button
//                 onClick={handleLogout}
//                 className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-colors text-sm sm:text-base"
//                 disabled={isLoggingOut}
//               >
//                 🚪 Logout
//               </button>
//             </>
//           ) : (
//             <Link
//               to="/play"
//               className="text-white hover:text-blue-300 text-sm sm:text-base"
//             >
//               Play as Guest
//             </Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// frontend/src/components/Navbar.tsx
import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import api from '../utils/api';
import { getRankColor } from '../utils/lobbyUtils';

interface NavbarProps {
  showLobbyFeatures?: boolean;
}

const Navbar = ({ showLobbyFeatures = false }: NavbarProps) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    if (isLoggingOut) return;
    
    setIsLoggingOut(true);
    try {
      await logout();
      navigate('/login', { replace: true });
      window.location.reload();
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  // Check if we're on the lobby page
  const isLobbyPage = location.pathname === '/tournament';

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo */}
        <Link to="/" className="mb-2 sm:mb-0">
          <span className="block text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            H5 Asteroids
          </span>
          <span className="block text-sm uppercase tracking-wide text-red-400">
            Pong Game
          </span>
        </Link>

        {/* Lobby-specific welcome message */}
        {isLobbyPage && user && (
          <div className="hidden md:block text-center mx-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              🏓 Ping Pong Lobby
            </h1>
            <p className="text-gray-300 text-sm">Welcome back, {user.name}!</p>
          </div>
        )}

        {/* Right section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto space-y-3 sm:space-y-0 mt-3 sm:mt-0">
          {user ? (
            <>
              {/* Avatar + User info - Enhanced for lobby */}
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  {user?.name?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase()}
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-white font-medium text-sm sm:text-base">
                    {isLobbyPage ? 'Hello,' : ''} {user?.name || 'User'}
                  </p>
                  {isLobbyPage ? (
                    <p className={`text-xs ${getRankColor('Silver Elite')}`}>
                      Rank: Silver Elite
                    </p>
                  ) : (
                    <p className="text-gray-300 text-xs sm:text-sm">{user?.email}</p>
                  )}
                </div>
              </div>

              {/* Logout button */}
              <button
                onClick={handleLogout}
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-colors text-sm sm:text-base"
                disabled={isLoggingOut}
              >
                🚪 Logout
              </button>
            </>
          ) : (
            <Link
              to="/play"
              className="text-white hover:text-blue-300 text-sm sm:text-base"
            >
              Play as Guest
            </Link>
          )}
        </div>
      </div>

      {/* Lobby-specific quick stats bar */}
      {isLobbyPage && user && (
        <div className="container mx-auto mt-4 bg-gray-700 rounded-lg p-3">
          <div className="flex justify-center space-x-6 text-sm">
            <div className="text-center">
              <span className="text-gray-400">Matches: </span>
              <span className="font-bold text-white">25</span>
            </div>
            <div className="text-center">
              <span className="text-gray-400">Win Rate: </span>
              <span className="font-bold text-green-400">60%</span>
            </div>
            <div className="text-center">
              <span className="text-gray-400">Streak: </span>
              <span className="font-bold text-yellow-400">3</span>
            </div>
            <div className="text-center">
              <span className="text-gray-400">Level: </span>
              <span className="font-bold text-blue-400">12</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;