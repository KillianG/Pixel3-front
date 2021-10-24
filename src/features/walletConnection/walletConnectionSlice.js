import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getColors, getWalletPixels } from './walletConnectionAPI';
import Web3 from "web3";
import {contract_address, pixel_abi} from "./abi";

const initialState = {
    triedEager: false,

    walletConnect: undefined,
    activatingConnector: undefined,

    board_size: 100,
    square_size: 10,
    get_colors: 'idle',
    colors: [],
    update_colors: false,
    colors_to_update: [],

    get_wallet: 'idle',
    wallet_pixels: [],
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getColorsAsync = createAsyncThunk(
    'walletConnection/getColors',
    async ({page, library}) => {
        const response = await getColors(page, library);
        // The value we return becomes the `fulfilled` action payload
        return {response, page};
    }
);

export const getWalletPixelsAsync = createAsyncThunk(
    'walletConnection/getWalletPixels',
    async ({library, account}) => {
        const response = await getWalletPixels(library, account);
        // The value we return becomes the `fulfilled` action payload
        return response;
    }
);

export const walletConnectionSlice = createSlice({
    name: 'walletConnection',
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
            const w = new Web3(action.payload.library.provider);
            const contract = new w.eth.Contract(pixel_abi, contract_address);
            contract.methods.mintNFT(action.payload.account).send({ from: action.payload.account }).then(console.log)

        },
        /**
         * Set a color for each pixels
         * @param state
         * @param action
         */
        pushChangedColors: (state, action) => {
            const w = new Web3(action.payload.library.provider);
            const contract = new w.eth.Contract(pixel_abi, contract_address);
            contract.methods.changeColorPack(action.payload.colors, action.payload.pixel)
                .send({ from: action.payload.account })
                .then(console.log)
        },
        /**
         * Set an url for multiple pixel
         * @param state
         * @param action
         */
        cUrl: (state, action) => {
            const w = new Web3(action.payload.library.provider);
            const contract = new w.eth.Contract(pixel_abi, contract_address);
            contract.methods.changeUrls(action.payload.url, action.payload.pixels).send({ from: action.payload.account }).then(console.log)
        },
        updateCachedColor: (state, action) => {
            state.colors[action.payload.index] = action.payload.colors
            state.update_colors = !state.update_colors
        },
        addColorToUpdate: (state, action) => {
            state.colors_to_update[action.payload.index] = action.payload.colors
        },
        resetColorToUpdate: (state, action) => {
            state.colors_to_update = {}
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getColorsAsync.pending, (state) => {
                state.get_colors = 'loading';
            })
            .addCase(getColorsAsync.fulfilled, (state, action) => {
                const page_index = parseInt(action.payload.page) * state.square_size;

                action.payload.response.forEach((elem, key) => {
                    if (elem) {
                        const i = page_index + key
                        state.colors[i] = elem
                    }
                })
                if (state.get_colors === 'idle')
                    state.get_colors = 'idle2';
            })
            .addCase(getWalletPixelsAsync.pending, (state) => {
                state.get_wallet = 'loading';
                state.wallet_pixels = []
            })
            .addCase(getWalletPixelsAsync.fulfilled, (state, action) => {
                state.get_wallet    = 'idle';
                state.wallet_pixels = action.payload
            });
    },
});

export const { setTriedEager, setActivatingConnector, mNFT, pushChangedColors, addColorToUpdate, resetColorToUpdate, updateCachedColor } = walletConnectionSlice.actions;

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


export const  updateColor = (index, pos, c) => (dispatch, getState) => {
    let colors = getState().walletConnection.colors[index].map((item) => item)
    colors[pos] = c
    dispatch(updateCachedColor({index, colors}))
    dispatch(addColorToUpdate({index, colors}))
}

export const changeColors = (colors_to_update, account, library) => (dispatch, getState) => {
    Object.keys(colors_to_update).map((pixel) =>
        dispatch(pushChangedColors({pixel: pixel,  colors: colors_to_update[pixel], account: account, library: library}))
    )
    dispatch(resetColorToUpdate())
}

export default walletConnectionSlice.reducer;
