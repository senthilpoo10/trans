// // frontend/src/components/lobby/ActionButtons.tsx
// interface ActionButtonsProps {
//   onQuickMatch: () => void;
//   onChampionship: () => void;
// }

// export default function ActionButtons({ onQuickMatch, onChampionship }: ActionButtonsProps) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
//       <button
//         onClick={onQuickMatch}
//         className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-6 px-8 rounded-xl transition-all transform hover:scale-105 shadow-xl"
//       >
//         <div className="text-4xl mb-2">⚡</div>
//         <div className="text-xl">Quick Match</div>
//         <div className="text-sm opacity-80">Fast 1v1 game</div>
//       </button>
      
//       <button
//         onClick={onChampionship}
//         className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold py-6 px-8 rounded-xl transition-all transform hover:scale-105 shadow-xl"
//       >
//         <div className="text-4xl mb-2">🏆</div>
//         <div className="text-xl">Championship</div>
//         <div className="text-sm opacity-80">Tournament mode</div>
//       </button>
//     </div>
//   );
// }

// frontend/src/components/lobby/ActionButtons.tsx
interface ActionButtonsProps {
  onQuickMatch: () => void;
  onChampionship: () => void;
}

export default function ActionButtons({ onQuickMatch, onChampionship }: ActionButtonsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
      <button
        onClick={onQuickMatch}
        className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-6 px-8 rounded-xl transition-all transform hover:scale-105 shadow-xl"
      >
        <div className="text-4xl mb-2">⚡</div>
        <div className="text-xl">Quick Match</div>
        <div className="text-sm opacity-80">Fast 1v1 game</div>
      </button>
      
      <button
        onClick={onChampionship}
        className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold py-6 px-8 rounded-xl transition-all transform hover:scale-105 shadow-xl"
      >
        <div className="text-4xl mb-2">🏆</div>
        <div className="text-xl">Championship</div>
        <div className="text-sm opacity-80">Tournament mode</div>
      </button>
    </div>
  );
}