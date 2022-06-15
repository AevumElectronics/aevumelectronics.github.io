import data from './LinktreeData';


function Linktree() {
    return (
    <div className="min-h-screen bg-zinc-300 py-10 flex">
        <div className="bg-zinc-50 rounded-sm shadow-lg w-[95%] max-w-[500px] m-auto
        flex flex-col gap-4 p-4" id="linkboard">
            <img src={require("../img/logo-aevum-sm.webp")} alt="logo" className="max-h-56 object-contain"/>
            
            
            {data.map((data)=>(
                <div className="rounded-sm shadow-md p-2 text-center text-lg bg-red-400 cursor-pointer
                transition-all 
                hover:bg-red-500 hover:rounded-sm hover:shadow-xl
                active:bg-red-300 active:rounded-sm active:shadow-lg"
                key={data.title}>
                    <a href={data.url}>{data.title}</a>
                </div>)
            )}



                    
  
        </div>
    </div>
  );
}

export default Linktree;
