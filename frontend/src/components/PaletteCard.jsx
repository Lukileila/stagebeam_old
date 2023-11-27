export const PaletteCard = ({templateObjects, setTemplateObjects, activeObjects, setActiveObjects}) => {


    const addToActive = (templateObject) => {
        setActiveObjects(prev => [...prev, {...templateObject, id: `${templateObject.name}_${crypto.randomUUID()}`}]);
      };
  return (



    <>


                {templateObjects.length>0 && templateObjects.map((templateObject,it)=>{
                    return <div key={it} onClick={()=>addToActive(templateObject)} className="cursor-pointer">
                                <div className='w-10 h-14 border border-slate-800 bg-gray-950 rounded m-px'>
                                    <img className="w-10 aspect-square"src={`${templateObject.thumbnail}`} alt="img" />
                                    <p className='text-xs truncate text-ellipsis h-10 '>{templateObject.name}</p>
                                </div>
                        </div>
                })}


    
    </>
  )
}
