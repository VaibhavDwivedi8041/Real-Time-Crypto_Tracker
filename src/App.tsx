import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/Header';
import CryptoTable from './components/Cryptotable';
import mockWebSocket from './services/mockWebSocket';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  useEffect(() => {
    // Start the mock WebSocket when the component mounts
    mockWebSocket.start();
    
    // Stop the mock WebSocket when the component unmounts
    return () => {
      mockWebSocket.stop();
    };
  }, []);

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cryptocurrency Prices</h2>
            <p className="text-gray-600 mb-6">
              Real-time cryptocurrency prices with live updates. Prices update every few seconds.
            </p>
            
            <CryptoTable />
          </div>
        </main>
        
        {/* Scroll to top button */}
        <button 
          className="fixed bottom-8 right-8 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </Provider>
  );
};

export default App;