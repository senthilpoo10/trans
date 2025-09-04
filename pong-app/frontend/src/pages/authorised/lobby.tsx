// // frontend/src/pages/lobby.tsx
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../contexts/AuthContext';

// export default function LobbyPage() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (!user) {
//       navigate('/login');
//       return;
//     }

//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [user, navigate]);

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   if (!user) {
//     return null;
//   }

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-900 flex items-center justify-center">
//         <div className="text-white">Loading lobby data...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       <div className="container mx-auto px-4 py-8">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
//             🏆 Tournament Arena
//           </h1>
//           <p className="text-gray-400 mb-6 text-lg">
//             Welcome back, <span className="text-blue-300 font-semibold">{user.name}</span>! Ready to compete?
//           </p>
          
//           <div className="flex justify-center gap-4 mb-6">
//             <button
//               onClick={() => console.log('Join tournament clicked')}
//               className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors transform hover:scale-105"
//             >
//               🎯 Join Tournament
//             </button>
//           </div>
//         </div>

//         <div className="bg-gray-800 p-6 rounded-lg text-center">
//           <h2 className="text-2xl font-semibold mb-4">Tournament Content</h2>
//           <p className="text-gray-400">This is a test message to check if content is rendering.</p>
//           <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="bg-gray-700 p-4 rounded">
//               <h3 className="text-lg font-medium mb-2">Quick Match</h3>
//               <p>Find opponents quickly</p>
//             </div>
//             <div className="bg-gray-700 p-4 rounded">
//               <h3 className="text-lg font-medium mb-2">Tournaments</h3>
//               <p>Join competitions</p>
//             </div>
//             <div className="bg-gray-700 p-4 rounded">
//               <h3 className="text-lg font-medium mb-2">Leaderboard</h3>
//               <p>See rankings</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // frontend/src/pages/lobby.tsx
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../contexts/AuthContext';

// export default function LobbyPage() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState('play'); // 'play', 'profile', 'friends', 'stats'

//   useEffect(() => {
//     if (!user) {
//       navigate('/login');
//       return;
//     }

//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [user, navigate]);

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   if (!user) {
//     return null;
//   }

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-900 flex items-center justify-center">
//         <div className="text-white">Loading lobby data...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       {/* Header */}
//       <header className="bg-gray-800 p-4 flex justify-between items-center">
//         <div className="flex items-center">
//           <h1 className="text-2xl font-bold text-blue-400">Ping Pong Arena</h1>
//         </div>
//         <div className="flex items-center space-x-4">
//           <div className="text-right">
//             <p className="font-semibold">{user.name}</p>
//             <p className="text-xs text-gray-400">Online</p>
//           </div>
//           <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
//             {user.name.charAt(0).toUpperCase()}
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-6">
//         {/* Navigation Tabs */}
//         <div className="flex border-b border-gray-700 mb-6">
//           <button
//             className={`py-2 px-4 font-medium ${activeTab === 'play' ? 'border-b-2 border-blue-500 text-blue-300' : 'text-gray-400'}`}
//             onClick={() => setActiveTab('play')}
//           >
//             Play
//           </button>
//           <button
//             className={`py-2 px-4 font-medium ${activeTab === 'profile' ? 'border-b-2 border-blue-500 text-blue-300' : 'text-gray-400'}`}
//             onClick={() => setActiveTab('profile')}
//           >
//             Profile
//           </button>
//           <button
//             className={`py-2 px-4 font-medium ${activeTab === 'friends' ? 'border-b-2 border-blue-500 text-blue-300' : 'text-gray-400'}`}
//             onClick={() => setActiveTab('friends')}
//           >
//             Friends
//           </button>
//           <button
//             className={`py-2 px-4 font-medium ${activeTab === 'stats' ? 'border-b-2 border-blue-500 text-blue-300' : 'text-gray-400'}`}
//             onClick={() => setActiveTab('stats')}
//           >
//             Stats
//           </button>
//         </div>

//         {/* Tab Content */}
//         {activeTab === 'play' && (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Duel Section */}
//             <div className="bg-gray-800 p-6 rounded-lg">
//               <h2 className="text-xl font-bold mb-4">⚔️ Duel</h2>
//               <p className="text-gray-400 mb-4">Challenge a single opponent in a one-on-one match</p>
//               <div className="space-y-4">
//                 <button 
//                   className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
//                   onClick={() => navigate('/duel-setup')}
//                 >
//                   Start Duel
//                 </button>
//                 <button 
//                   className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
//                   onClick={() => setActiveTab('friends')}
//                 >
//                   Challenge Friend
//                 </button>
//               </div>
//             </div>

//             {/* Tournament Section */}
//             <div className="bg-gray-800 p-6 rounded-lg">
//               <h2 className="text-xl font-bold mb-4">🏆 Tournament</h2>
//               <p className="text-gray-400 mb-4">Join a competitive tournament with multiple players</p>
//               <div className="space-y-4">
//                 <button 
//                   className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
//                   onClick={() => navigate('/tournaments')}
//                 >
//                   Join Tournament
//                 </button>
//                 <button 
//                   className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
//                 >
//                   Create Tournament
//                 </button>
//               </div>
//             </div>

//             {/* Quick Match Section */}
//             <div className="bg-gray-800 p-6 rounded-lg md:col-span-2">
//               <h2 className="text-xl font-bold mb-4">🎯 Quick Match</h2>
//               <p className="text-gray-400 mb-4">Get matched with a random opponent quickly</p>
//               <button 
//                 className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
//                 onClick={() => console.log('Quick match started')}
//               >
//                 Find Match
//               </button>
//             </div>
//           </div>
//         )}

//         {activeTab === 'profile' && (
//           <div className="bg-gray-800 p-6 rounded-lg">
//             <h2 className="text-xl font-bold mb-6">👤 Mugshot & Street Cred</h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* User Info */}
//               <div>
//                 <div className="mb-4">
//                   <label className="block text-gray-400 mb-2">Username</label>
//                   <div className="bg-gray-700 p-3 rounded">{user.name}</div>
//                 </div>
                
//                 <div className="mb-4">
//                   <label className="block text-gray-400 mb-2">Email</label>
//                   <div className="bg-gray-700 p-3 rounded">{user.email}</div>
//                 </div>
                
//                 <div className="grid grid-cols-2 gap-4 mb-4">
//                   <div>
//                     <label className="block text-gray-400 mb-2">Wins</label>
//                     <div className="bg-gray-700 p-3 rounded text-center">{user.wins || 0}</div>
//                   </div>
//                   <div>
//                     <label className="block text-gray-400 mb-2">Losses</label>
//                     <div className="bg-gray-700 p-3 rounded text-center">{user.losses || 0}</div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Avatar Selection */}
//               <div>
//                 <div className="mb-4">
//                   <label className="block text-gray-400 mb-2">Choose Avatar</label>
//                   <div className="grid grid-cols-3 gap-2">
//                     {[1, 2, 3, 4, 5, 6].map(i => (
//                       <div key={i} className="bg-gray-700 p-2 rounded text-center cursor-pointer hover:bg-gray-600">
//                         <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-1"></div>
//                         <span className="text-xs">Avatar {i}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
                
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                   Update Profile
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === 'friends' && (
//           <div className="bg-gray-800 p-6 rounded-lg">
//             <h2 className="text-xl font-bold mb-6">👥 Gang Connections</h2>
            
//             {/* Friend Requests */}
//             <div className="mb-8">
//               <h3 className="text-lg font-semibold mb-4">Friend Requests</h3>
//               <div className="bg-gray-700 p-4 rounded">
//                 <p className="text-gray-400">No pending friend requests.</p>
//               </div>
//             </div>
            
//             {/* Friends List */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Your Squad</h3>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="text-left border-b border-gray-700">
//                       <th className="pb-2">Username</th>
//                       <th className="pb-2">Online Status</th>
//                       <th className="pb-2">Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {[
//                       { username: 'pingqueen', status: 'offline' },
//                       { username: 'maslinator', status: 'offline' },
//                       { username: 'stabbyboy', status: 'online' },
//                       { username: 'poonkoil', status: 'online' },
//                       { username: 'acd', status: 'offline' }
//                     ].map((friend, index) => (
//                       <tr key={index} className="border-b border-gray-700">
//                         <td className="py-3">{friend.username}</td>
//                         <td className="py-3">
//                           <span className={`inline-block w-3 h-3 rounded-full mr-2 ${friend.status === 'online' ? 'bg-green-500' : 'bg-gray-500'}`}></span>
//                           {friend.status}
//                         </td>
//                         <td className="py-3">
//                           {friend.status === 'online' ? (
//                             <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-1 px-3 rounded">
//                               Challenge
//                             </button>
//                           ) : (
//                             <button className="bg-gray-600 hover:bg-gray-500 text-white text-sm py-1 px-3 rounded">
//                               Message
//                             </button>
//                           )}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
              
//               <div className="mt-6">
//                 <h3 className="text-lg font-semibold mb-4">Add Friends</h3>
//                 <div className="flex">
//                   <input 
//                     type="text" 
//                     placeholder="Enter username"
//                     className="bg-gray-700 text-white p-2 rounded-l flex-grow"
//                   />
//                   <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">
//                     Add
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === 'stats' && (
//           <div className="bg-gray-800 p-6 rounded-lg">
//             <h2 className="text-xl font-bold mb-6">📊 Game Stats</h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               <div>
//                 <h3 className="text-lg font-semibold mb-4">Win/Loss Ratio</h3>
//                 <div className="bg-gray-700 p-4 rounded-lg h-64 flex items-center justify-center">
//                   {/* Placeholder for pie chart */}
//                   <div className="text-center">
//                     <div className="w-32 h-32 rounded-full border-8 border-blue-500 border-t-green-500 border-r-red-500 transform rotate-45 mx-auto mb-4"></div>
//                     <p className="text-gray-400">Win/Loss Visualization</p>
//                   </div>
//                 </div>
//               </div>
              
//               <div>
//                 <h3 className="text-lg font-semibold mb-4">Performance Over Time</h3>
//                 <div className="bg-gray-700 p-4 rounded-lg h-64 flex items-center justify-center">
//                   {/* Placeholder for line chart */}
//                   <div className="text-center">
//                     <div className="h-32 flex items-end justify-center space-x-1 mb-4">
//                       {[30, 50, 70, 60, 80, 90, 75].map((height, index) => (
//                         <div key={index} className="w-4 bg-blue-500" style={{ height: `${height}%` }}></div>
//                       ))}
//                     </div>
//                     <p className="text-gray-400">Performance Trend</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-gray-700 p-4 rounded-lg">
//               <h3 className="text-lg font-semibold mb-4">Match History</h3>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="text-left border-b border-gray-600">
//                       <th className="pb-2">Opponent</th>
//                       <th className="pb-2">Result</th>
//                       <th className="pb-2">Score</th>
//                       <th className="pb-2">Date</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {[
//                       { opponent: 'pingqueen', result: 'Win', score: '11-8', date: '2023-10-15' },
//                       { opponent: 'maslinator', result: 'Loss', score: '9-11', date: '2023-10-14' },
//                       { opponent: 'stabbyboy', result: 'Win', score: '11-5', date: '2023-10-12' },
//                     ].map((match, index) => (
//                       <tr key={index} className="border-b border-gray-600">
//                         <td className="py-3">{match.opponent}</td>
//                         <td className={`py-3 ${match.result === 'Win' ? 'text-green-400' : 'text-red-400'}`}>{match.result}</td>
//                         <td className="py-3">{match.score}</td>
//                         <td className="py-3">{match.date}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-800 p-4 mt-8 text-center">
//         <button 
//           onClick={handleLogout}
//           className="text-gray-400 hover:text-white"
//         >
//           Logout
//         </button>
//       </footer>
//     </div>
//   );
// }


// import LobbyHeader from '../../components/lobby/LobbyHeader';
// import ActionButtons from '../../components/lobby/ActionButtons';
// import TabNavigation from '../../components/lobby/TabNavigation';
// import OverviewTab from '../../components/lobby/OverviewTab';
// import LockerTab from '../../components/lobby/LockerTab';
// import SquadTab from '../../components/lobby/SquadTab';
// import HistoryTab from '../../components/lobby/HistoryTab';

// frontend/src/pages/authorised/lobby.tsx
// Fully functional lobby with real backend integration
import { useEffect, useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import api from '../../utils/api';
import { GameStats, Friend, Match, FriendRequest, Notification } from '../../types/lobby';

import LobbyHeader from '../../components/lobby/LobbyHeader';
import ActionButtons from '../../components/lobby/ActionButtons';
import TabNavigation from '../../components/lobby/TabNavigation';
import OverviewTab from '../../components/lobby/OverviewTab';
import LockerTab from '../../components/lobby/LockerTab';
import SquadTab from '../../components/lobby/SquadTab';
import HistoryTab from '../../components/lobby/HistoryTab';

interface UserProfile {
  rank: string;
  level: number;
  totalXP: number;
  joinedDate: string;
  status: 'ONLINE' | 'OFFLINE' | 'IN_GAME' | 'AWAY';
}

export default function LobbyPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Loading states
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  
  // Data states
  const [gameStats, setGameStats] = useState<GameStats | null>(null);
  const [friends, setFriends] = useState<Friend[]>([]);
  const [recentMatches, setRecentMatches] = useState<Match[]>([]);
  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    rank: 'Silver Elite',
    level: 1,
    totalXP: 0,
    joinedDate: 'January 2024',
    status: 'ONLINE'
  });

  // Refs for real-time updates
  const refreshInterval = useRef<NodeJS.Timeout | null>(null);
  const statusUpdateInterval = useRef<NodeJS.Timeout | null>(null);

  // Real-time data fetching
  const fetchGameStats = useCallback(async (): Promise<GameStats | null> => {
    try {
      const response = await api.get('/lobby/stats');
      return response.data;
    } catch (error) {
      console.error('Error fetching game stats:', error);
      return null;
    }
  }, []);

  const fetchFriends = useCallback(async (): Promise<Friend[]> => {
    try {
      const response = await api.get('/lobby/friends');
      return response.data;
    } catch (error) {
      console.error('Error fetching friends:', error);
      return [];
    }
  }, []);

  const fetchRecentMatches = useCallback(async (): Promise<Match[]> => {
    try {
      const response = await api.get('/lobby/matches/recent');
      return response.data;
    } catch (error) {
      console.error('Error fetching recent matches:', error);
      return [];
    }
  }, []);

  const fetchNotifications = useCallback(async (): Promise<Notification[]> => {
    try {
      const response = await api.get('/lobby/notifications');
      return response.data;
    } catch (error) {
      console.error('Error fetching notifications:', error);
      return [];
    }
  }, []);

  const fetchUserProfile = useCallback(async (): Promise<void> => {
    try {
      const response = await api.get('/profile');
      setUserProfile(prev => ({
        ...prev,
        status: response.data.status || 'ONLINE',
        rank: response.data.rank || 'Silver Elite',
        level: response.data.level || 1,
        totalXP: response.data.totalXP || 0,
        joinedDate: response.data.createdAt ? 
          new Date(response.data.createdAt).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long' 
          }) : 'January 2024'
      }));
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  }, []);

  // Load all lobby data
  const loadLobbyData = useCallback(async () => {
    if (!user) return;
    
    setIsLoading(true);
    try {
      const [stats, friendsList, matches, notifs] = await Promise.all([
        fetchGameStats(),
        fetchFriends(),
        fetchRecentMatches(),
        fetchNotifications()
      ]);

      setGameStats(stats);
      setFriends(friendsList);
      setRecentMatches(matches);
      setNotifications(notifs);
      
      // Also update user profile
      await fetchUserProfile();
      
    } catch (error) {
      console.error('Error loading lobby data:', error);
      // Show user-friendly error
      alert('Failed to load lobby data. Please refresh the page.');
    } finally {
      setIsLoading(false);
    }
  }, [user, fetchGameStats, fetchFriends, fetchRecentMatches, fetchNotifications, fetchUserProfile]);

  // Real-time updates every 30 seconds
  const setupRealTimeUpdates = useCallback(() => {
    // Update friends status and notifications more frequently
    refreshInterval.current = setInterval(async () => {
      if (!user) return;
      
      try {
        const [friendsList, notifs] = await Promise.all([
          fetchFriends(),
          fetchNotifications()
        ]);
        
        setFriends(friendsList);
        setNotifications(notifs);
      } catch (error) {
        console.error('Error in real-time update:', error);
      }
    }, 30000); // 30 seconds

    // Update user's own status every 60 seconds
    statusUpdateInterval.current = setInterval(async () => {
      if (!user) return;
      
      try {
        await api.put('/lobby/status', { status: 'ONLINE' });
      } catch (error) {
        console.error('Error updating user status:', error);
      }
    }, 60000); // 60 seconds

  }, [user, fetchFriends, fetchNotifications]);

  // Initialize lobby
  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    loadLobbyData();
    setupRealTimeUpdates();

    // Update status to online when entering lobby
    api.put('/lobby/status', { status: 'ONLINE' }).catch(console.error);

    // Cleanup intervals on unmount
    return () => {
      if (refreshInterval.current) {
        clearInterval(refreshInterval.current);
      }
      if (statusUpdateInterval.current) {
        clearInterval(statusUpdateInterval.current);
      }
      
      // Set status to offline when leaving (best effort)
      api.put('/lobby/status', { status: 'OFFLINE' }).catch(() => {});
    };
  }, [user, navigate, loadLobbyData, setupRealTimeUpdates]);

  // Handle visibility change (user switches tabs/windows)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!user) return;
      
      const status = document.hidden ? 'AWAY' : 'ONLINE';
      api.put('/lobby/status', { status }).catch(console.error);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [user]);

  // Event handlers with real API integration
  const handleQuickMatch = async () => {
    setActionLoading(true);
    try {
      // Update status to in-game
      await api.put('/lobby/status', { status: 'IN_GAME' });
      
      // Navigate to game
      navigate('/play');
    } catch (error) {
      console.error('Error starting quick match:', error);
      alert('Failed to start match. Please try again.');
    } finally {
      setActionLoading(false);
    }
  };

  const handleChampionship = async () => {
    setActionLoading(true);
    try {
      // Check if user is eligible for tournaments
      const response = await api.get('/lobby/tournament/eligibility');
      
      if (response.data.eligible) {
        // Navigate to tournament selection
        navigate('/tournament-selection');
      } else {
        alert(`Tournament requirements not met: ${response.data.reason}`);
      }
    } catch (error) {
      console.error('Error checking tournament eligibility:', error);
      alert('Tournament feature is currently unavailable.');
    } finally {
      setActionLoading(false);
    }
  };

  const handleChallengeFriend = async (friendId: string, friendName: string) => {
    try {
      const response = await api.post('/lobby/challenge', { opponentId: friendId });
      
      if (response.data.success) {
        alert(`Challenge sent to ${friendName}! Match ID: ${response.data.matchId}`);
        
        // Refresh data to show pending match
        await loadLobbyData();
      }
    } catch (error: any) {
      console.error('Error sending challenge:', error);
      const message = error.response?.data?.message || 'Failed to send challenge';
      alert(message);
    }
  };

  const handleSendMessage = async (friendId: string, friendName: string) => {
    const message = prompt(`Send message to ${friendName}:`);
    if (!message || !message.trim()) return;

    try {
      await api.post('/lobby/messages', {
        receiverId: friendId,
        content: message.trim()
      });
      
      alert(`Message sent to ${friendName}!`);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleAddFriend = async () => {
    const username = prompt('Enter username to add as friend:');
    if (!username || !username.trim()) return;

    try {
      const response = await api.post('/lobby/friends/request', { 
        username: username.trim() 
      });
      
      if (response.data.success) {
        alert(`Friend request sent to ${username}!`);
        // Refresh friends data
        const updatedFriends = await fetchFriends();
        setFriends(updatedFriends);
      }
    } catch (error: any) {
      console.error('Error sending friend request:', error);
      const message = error.response?.data?.message || 'Failed to send friend request';
      alert(message);
    }
  };

  const handleRemoveFriend = async (friendId: string, friendName: string) => {
    if (!confirm(`Are you sure you want to remove ${friendName} from your friends?`)) {
      return;
    }

    try {
      await api.delete(`/lobby/friends/${friendId}`);
      alert(`${friendName} removed from friends.`);
      
      // Refresh friends list
      const updatedFriends = await fetchFriends();
      setFriends(updatedFriends);
    } catch (error) {
      console.error('Error removing friend:', error);
      alert('Failed to remove friend. Please try again.');
    }
  };

  const handleUpdateProfile = async () => {
    const newDisplayName = prompt('Enter new display name:', user?.name);
    if (!newDisplayName || newDisplayName.trim() === user?.name) return;

    try {
      await api.put('/profile', { displayName: newDisplayName.trim() });
      alert('Profile updated successfully!');
      
      // Refresh user profile
      await fetchUserProfile();
    } catch (error: any) {
      console.error('Error updating profile:', error);
      const message = error.response?.data?.message || 'Failed to update profile';
      alert(message);
    }
  };

  const handleGameSettings = () => {
    // Navigate to settings page
    navigate('/settings');
  };

  const handleViewAllMatches = () => {
    // Navigate to detailed match history
    navigate('/match-history');
  };

  const handleLogout = async () => {
    try {
      // Set status to offline before logout
      await api.put('/lobby/status', { status: 'OFFLINE' });
      
      await logout();
      navigate('/login', { replace: true });
    } catch (error) {
      console.error('Logout failed:', error);
      // Force logout even if API call fails
      await logout();
      navigate('/login', { replace: true });
    }
  };

  const handleStatusChange = async (newStatus: string) => {
    setIsUpdatingStatus(true);
    try {
      await api.put('/lobby/status', { status: newStatus });
      setUserProfile(prev => ({ ...prev, status: newStatus as any }));
    } catch (error) {
      console.error('Error updating status:', error);
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  // Handle friend request responses
  const handleFriendRequest = async (requestId: string, action: 'accept' | 'reject') => {
    try {
      await api.put(`/lobby/friends/requests/${requestId}`, { action });
      
      // Refresh friend requests and friends
      const [updatedRequests, updatedFriends] = await Promise.all([
        api.get('/lobby/friends/requests'),
        fetchFriends()
      ]);
      
      setFriendRequests(updatedRequests.data);
      setFriends(updatedFriends);
      
      alert(`Friend request ${action}ed successfully!`);
    } catch (error) {
      console.error('Error handling friend request:', error);
      alert('Failed to process friend request.');
    }
  };

  // Mark notifications as read
  const markNotificationAsRead = async (notificationId: string) => {
    try {
      await api.put(`/lobby/notifications/${notificationId}/read`);
      
      setNotifications(prev => 
        prev.map(notif => 
          notif.id === notificationId 
            ? { ...notif, isRead: true, readAt: new Date().toISOString() }
            : notif
        )
      );
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  // Loading state
  if (!user) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-white text-xl mb-4">Loading lobby...</div>
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  // Computed values
  const onlineFriends = friends.filter(f => f.status === 'online' || f.status === 'in-game');
  const unreadNotifications = notifications.filter(n => !n.isRead);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with real-time status */}
        <div className="flex justify-between items-center mb-4">
          <LobbyHeader user={user} rank={userProfile.rank} />
          
          {/* Status indicator and notifications */}
          <div className="flex items-center gap-4">
            {/* User Status Dropdown */}
            <div className="relative">
              <select
                value={userProfile.status}
                onChange={(e) => handleStatusChange(e.target.value)}
                disabled={isUpdatingStatus}
                className="bg-gray-800 text-white px-3 py-1 rounded border border-gray-600 text-sm"
              >
                <option value="ONLINE">🟢 Online</option>
                <option value="AWAY">🟡 Away</option>
                <option value="OFFLINE">⚫ Offline</option>
              </select>
            </div>
            
            {/* Notifications Bell */}
            {unreadNotifications.length > 0 && (
              <div className="relative">
                <button
                  onClick={() => setActiveTab('notifications')}
                  className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold hover:bg-red-700 transition"
                >
                  🔔 {unreadNotifications.length}
                </button>
              </div>
            )}
            
            {/* Real-time indicator */}
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Live
            </div>
          </div>
        </div>

        {/* Friend Requests Banner */}
        {friendRequests.length > 0 && (
          <div className="bg-blue-600 rounded-lg p-4 mb-6">
            <h3 className="font-bold mb-2">Pending Friend Requests ({friendRequests.length})</h3>
            <div className="space-y-2">
              {friendRequests.map(request => (
                <div key={request.id} className="flex items-center justify-between bg-blue-700 rounded p-2">
                  <span>{request.sender.name} wants to be your friend</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleFriendRequest(request.id, 'accept')}
                      className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleFriendRequest(request.id, 'reject')}
                      className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Action Buttons */}
        <ActionButtons 
          onQuickMatch={handleQuickMatch}
          onChampionship={handleChampionship}
          isLoading={actionLoading}
        />

        {/* Tab Navigation */}
        <TabNavigation 
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Tab Content */}
        {activeTab === 'overview' && gameStats && (
          <OverviewTab 
            stats={gameStats}
            onlineFriends={onlineFriends}
            recentMatches={recentMatches.slice(0, 3)}
          />
        )}

        {activeTab === 'locker' && (
          <LockerTab 
            user={user}
            onUpdateProfile={handleUpdateProfile}
            onGameSettings={handleGameSettings}
            onLogout={handleLogout}
            additionalInfo={{
              rank: userProfile.rank,
              level: userProfile.level,
              totalXP: userProfile.totalXP,
              joinedDate: userProfile.joinedDate
            }}
          />
        )}

        {activeTab === 'squad' && (
          <SquadTab 
            friends={friends}
            onChallengeFriend={handleChallengeFriend}
            onSendMessage={handleSendMessage}
            onAddFriend={handleAddFriend}
            onRemoveFriend={handleRemoveFriend}
            isLoading={false}
          />
        )}

        {activeTab === 'history' && gameStats && (
          <HistoryTab 
            stats={gameStats}
            matches={recentMatches}
            onViewAllMatches={handleViewAllMatches}
            isLoading={false}
          />
        )}

        {/* Notifications Tab (bonus feature) */}
        {activeTab === 'notifications' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-center text-yellow-300">🔔 Notifications</h2>
              {notifications.length > 0 ? (
                <div className="space-y-3">
                  {notifications.map(notification => (
                    <div
                      key={notification.id}
                      className={`p-4 rounded-lg border-l-4 ${
                        notification.isRead 
                          ? 'bg-gray-700 border-gray-500' 
                          : 'bg-blue-900 border-blue-400'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-lg">{notification.title}</h4>
                          <p className="text-gray-300 mt-1">{notification.message}</p>
                          <p className="text-xs text-gray-400 mt-2">{notification.createdAt}</p>
                        </div>
                        {!notification.isRead && (
                          <button
                            onClick={() => markNotificationAsRead(notification.id)}
                            className="text-xs bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded"
                          >
                            Mark as Read
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-400">
                  <p>No notifications yet</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}