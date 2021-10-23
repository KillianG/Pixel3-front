import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getColors } from './walletConnectionAPI';
import Web3 from "web3";
import {contract_address, pixel_abi} from "./abi";

const initialState = {
    triedEager: false,

    walletConnect: undefined,
    activatingConnector: undefined,

    get_colors: 'idle',
    colors: []
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getColorsAsync = createAsyncThunk(
    'walletConnection/getColors',
    async (library) => {
        const response = await getColors(library);
        // The value we return becomes the `fulfilled` action payload
        console.log(response)
        return response;
    }
);

export const walletConnectionSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setTriedEager: (state, action) => {
            state.triedEager = action.payload
        },
        setActivatingConnector: (state, activatingConnector) => {
            state.activatingConnector = activatingConnector

        },
        /**
         * Mint a pixel
         * @param state
         * @param action
         */
        mNFT: (state, action) => {
            console.log(action.payload.account)
            const w = new Web3(action.payload.library.provider);
            const contract = new w.eth.Contract(pixel_abi, contract_address);
            contract.methods.mintNFT(action.payload.account).send({ from: action.payload.account }).then(console.log)

        },
        /**
         * Set a color for each pixels
         * @param state
         * @param action
         */
        cColors: (state, action) => {
            console.log(action.payload.account)
            console.log(action.payload.colors)
            const w = new Web3(action.payload.library.provider);
            const contract = new w.eth.Contract(pixel_abi, contract_address);
            contract.methods.changeColorPack(action.payload.colors, action.payload.pixels).send({ from: action.payload.account }).then(console.log)
        },
        /**
         * Set an url for multiple pixel
         * @param state
         * @param action
         */
        cUrl: (state, action) => {
            console.log(action.payload.account)
            console.log(action.payload.colors)
            const w = new Web3(action.payload.library.provider);
            const contract = new w.eth.Contract(pixel_abi, contract_address);
            contract.methods.changeUrls(action.payload.url, action.payload.pixels).send({ from: action.payload.account }).then(console.log)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getColorsAsync.pending, (state) => {
                console.log('call colors async')
                state.get_colors = 'loading';
            })
            .addCase(getColorsAsync.fulfilled, (state, action) => {
                console.log('colors')
                console.log('t: ' + action.payload)
                state.get_colors = 'idle';
                state.colors = action.payload
            });
    },
});

export const { setTriedEager, setActivatingConnector, mNFT, cColors } = walletConnectionSlice.actions;

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
