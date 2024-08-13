import React, { useContext, useState } from 'react'
import { Context } from '../App'

export default function Btn() {

    const [signedIn, setSignedIn] = useContext(Context);

    return (
        <div>
            <button onClick={() => setSignedIn(!signedIn)}>
                {signedIn ? "Sign Out" : "Sign In"}
            </button>

        </div>
    );
}
