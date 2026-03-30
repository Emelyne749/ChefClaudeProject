export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    let list = ingredients.map((a)=>{
        return <li key={a}>{a}</li>
    })
    function Submit(e) {
        e.preventDefault()

    }

    return (
        <>
            <div className="flex flex-col gap-10 items-center p-4">
                
                <form action="" className="flex justify-center gap-4 mt-30">
                <input type="text" placeholder="e.g Garlic" aria-label="Add ingredient" className="border-2 border-gray-300 rounded-2xl p-3 w-100"/>
                <button type="submit" className="bg-black text-white rounded-2xl p-3 w-42" onClick={Submit}>+ Add ingredient</button>
                </form>
                <ul className="flex justify-center flex-col  border-2 border-gray-200 w-150 p-10 pl-15 text-lg">
                    {list} 
                </ul>
                
            </div>

        </>
    )
}