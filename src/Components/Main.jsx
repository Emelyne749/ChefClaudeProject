import React from "react"


export default function Main() {
    let [ingredients, setIngredients] = React.useState([])
    let list = ingredients.map((a)=>{
        return <li key={a}>{a}</li>
    })
    function handleSubmit(e) {
        e.preventDefault()
        console.log("Submitted")
        const formData = new FormData(e.target)
        const ingredient = formData.get("a")
        setIngredients(prev=>[...prev, ingredient])

    }

    return (
        <>
            <div className="flex flex-col gap-10 items-center p-4">
                
                <form action="" className="flex justify-center gap-4 mt-30"  onSubmit={handleSubmit}>
                <input type="text" placeholder="e.g Garlic" aria-label="Add ingredient" className="border-2 border-gray-300 rounded-2xl p-3 w-100" name="a"/>
                <button type="submit" className="bg-black text-white rounded-2xl p-3 w-42">+ Add ingredient</button>
                </form>
                <ul className="flex justify-center flex-col  border-2 border-gray-200 w-150 p-10 pl-15 text-lg list-disc ">
                    {list} 
                </ul>
                
            </div>

        </>
    )
}