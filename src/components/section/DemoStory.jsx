
const DemoStory = ({story}) => {
   
  return (
  
        <div className='grid grid-rows-2 col-span-2 '>
          <div className='grid row-span-1  w-full '>
            <img className="object-cover h-full w-full" src={story.Media} alt={story.id}/>
          </div>
          <div className='grid row-span-1 h-[36.75vh] p-2 border-2 border-zinc-800 text-sm overflow-auto'>
           <span></span>
            {story.NarrativeStep}
          </div>
        </div>

  );
}

export default DemoStory;
