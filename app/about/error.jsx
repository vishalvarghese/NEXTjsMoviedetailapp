"use client"

export default function Error({error,reset}){
    return(
        <div>
            This ain't loading up:{error.message}
              <button onclick={()=>reset()}> reload</button>
        </div>
    )
}