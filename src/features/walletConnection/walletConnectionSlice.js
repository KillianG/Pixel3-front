import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { mintNFT } from './walletConnectionAPI';

const initialState = {
    tried: false,

    walletConnect: undefined,
    activatingConnector: undefined,

    mint_status: 'idl'
};

export const mintNFTAsync = createAsyncThunk('counter/mintNFT',
    async (wallet) => {
        const response = await mintNFT(wallet)
        return response.data
    }
);

export const walletConnectionSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        mintNFT: (state) => {
            state.value += 1;
        },
        setTried: (state, action) => {
            state.tried = action.payload
        },
        setActivatingConnector: (state, activatingConnector) => {
            state.activatingConnector = activatingConnector

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(mintNFTAsync.pending, (state) => {
                state.mint_status = 'loading';
            })
            .addCase(mintNFTAsync.fulfilled, (state, action) => {
                state.status = 'idle';
            });
    },
});

export const { setTried, setActivatingConnector } = walletConnectionSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd = (amount) => (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
        // dispatch(incrementByAmount(amount));
    }
};

export default walletConnectionSlice.reducer;
