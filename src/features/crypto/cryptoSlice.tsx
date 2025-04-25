import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CryptoState, CryptoAsset } from './type';
import { initialCryptoData } from './data';

const initialState: CryptoState = {
  assets: initialCryptoData,
  status: 'idle',
  error: null,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updatePrices: (state, action: PayloadAction<Partial<CryptoAsset>[]>) => {
      action.payload.forEach(update => {
        const index = state.assets.findIndex(asset => asset.id === update.id);
        if (index !== -1) {
          state.assets[index] = { ...state.assets[index], ...update };
        }
      });
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const index = state.assets.findIndex(asset => asset.id === action.payload);
      if (index !== -1) {
        state.assets[index].isFavorite = !state.assets[index].isFavorite;
      }
    }
  },
});

export const { updatePrices, toggleFavorite } = cryptoSlice.actions;

export default cryptoSlice.reducer;