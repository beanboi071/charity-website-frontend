import React from 'react'
import { NGO } from './NGO'
export default function NGOList({ngos}) {
    return(
        <div>
             <div className=" w-full  bg-primary px-24">
                <div className="pt-[20px] grid grid-cols-3 px-[24px] gap-12 ">
                    {ngos.length !== 0 &&
                        ngos.map((ngo) => {
                            return( 
                            <div className=" col-span-1">
                            <NGO item={ngo} />
                            </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}
