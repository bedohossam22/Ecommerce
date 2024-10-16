

const  ProductDescription = () => {
  return (
    <div className="mt-20">
        <div className="flex gap-3 mb-4">
            <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">Description</button>
            <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">Care Guide</button>
            <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">Size Guide</button>
        </div>
        <div className="flex flex-col pb-16">
            <p className="text-sm text-justify font-black">Listen Bro... i know the images dont match on the left when you select a product... But the assets Are missing so cut me some slack would ya ? i ll give you 20% discount in exchange... use the Disount Code Sicko</p>
            <p className="text-sm text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam illum ea culpa commodi rerum tempora fuga repellendus non ipsa, illo dolores, nihil, impedit voluptatem! Optio quasi distinctio nemo suscipit? Quisquam ab, quia commodi tempora quaerat accusamus aspernatur vero, pariatur molestias temporibus, hic officiis quidem minima veritatis sit eius rem placeat.</p>
        </div>
        </div>
  )
}

export default ProductDescription