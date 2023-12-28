import { Data } from "@/lib/data/Data"

export default async function About(){
    let data2 = await Data();
    console.log(data2)
    return(
        <div>
            <ul>
                {
                    data2.map((item)=>(
                        <li key={item._id}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}