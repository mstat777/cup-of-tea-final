import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    tea: [
        {
            id: 1,
            label_1: "Lorem ipsum dolor sit.",
            url_tea: "Lorem, ipsum dolor sit amet !",
        },
        {
            id: 2,
            label_1: "Lorem ipsum dolor sit.",
            url_tea:
                "Lorem, ipsum dolor sitlor sit amet consectetur adipisicinglor sit amet consectetur adipisicing amet consectetur adipisicing elit. Cumque natus voluptas cum!",
        },
    ],
};

const userSlice = createSlice({
    name: "tea",
    initialState,
    reducers:
});