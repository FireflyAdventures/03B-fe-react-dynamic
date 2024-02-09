const DemoStory = ({ story }) => {
    if (!story || typeof story !== 'object') {
        // Handle the case where story is not available or has an unexpected format
        return <div>Loading Story...</div>;
    }

    const { media, id, narrativeStep } = story;

    return (
        <div className="grid grid-rows-2 col-span-2 ">
            <div className="grid row-span-1  w-full ">
                <img
                    className=" object-fill h-[37.5vh] w-full"
                    src={media}
                    alt={id}
                />
            </div>
            <div className="grid row-span-1 h-[36.75vh] p-2 border-2 border-zinc-800 text-sm overflow-auto">
                <span></span>
                {narrativeStep}
            </div>
        </div>
    );
};

export default DemoStory;
