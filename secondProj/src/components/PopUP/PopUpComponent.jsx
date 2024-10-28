import React from "react";
import { useState } from "react";

function PopUp({copied}){
    return(
        <section>
            {copied && (
                <div style={{position:"absolute" , bottom: "3rem"}}>
                    Copied Content
                </div>
            )}
        </section>
    )

}


export default PopUp;