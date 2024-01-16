const shimmer=()=>{
    console.log("inside shimmer");
 return (
    <div className="border-red-800">
        {Array(20).fill("").map((e,index)=><div key={index} className="bg-blue-900"></div>)}
    </div>
 );
    // return <h1> shimmer effect loading</h1>
}

export default shimmer; 