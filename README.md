# Real-Time Crypto Price Tracker

A responsive React + Redux Toolkit application that tracks real-time cryptocurrency prices, simulating WebSocket updates.

## Tech Stack

- **React**: UI library
- **Redux Toolkit**: State management
- **CSS**: Styling (responsive design)
- **Simulated WebSocket**: Real-time price updates

## Architecture

1. **Redux Store**:
   - Single source of truth for the application state
   - Manages crypto assets data
   - Handles real-time updates

2. **Components**:
   - `CryptoTable`: Main component displaying the assets
   - `MiniChart`: SVG-based chart showing 7-day price history

3. **Services**:
   - `CryptoWebSocketService`: Simulates WebSocket connection using intervals

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/crypto-price-tracker.git
   ```

2. Install dependencies:
   ```
   cd crypto-price-tracker
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- **Real-time Updates**: Prices, percentages, and volumes update every 1.5 seconds
- **Responsive Design**: Works on desktop and mobile devices
- **Visual Indicators**: Color-coded percentage changes
- **Mini Charts**: Visual representation of 7-day price history

## Project Structure

```
src/
  ├── app/
  │   └── store.js              # Redux store configuration
  ├── components/
  │   ├── CryptoTable.js        # Main table component
  │   ├── CryptoTable.css
  │   ├── MiniChart.js          # SVG chart component
  │   └── MiniChart.css
  ├── features/
  │   └── crypto/
  │       ├── cryptoSlice.js    # Redux slice
  │       └── initialData.js    # Initial state data
  ├── services/
  │   └── cryptoService.js      # Simulated WebSocket service
  ├── App.js                    # Main App component
  ├── App.css                   # Global styles
  └── index.js                  # Entry point
```

## Future Enhancements

1. Integrate real WebSocket connection to Binance or other exchanges
2. Add sorting and filtering options
3. Implement persistent storage with localStorage
4. Add more detailed charts and statistics
5. Add unit tests for reducers and selectors
