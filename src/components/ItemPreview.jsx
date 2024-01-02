const ItemPreview=({url})=>{
return(
<div className='itemImagePreview flexV'>
    {url&&(<>
    <h3>** Motorcycle Preview **</h3>
<div className="itemImagePreviewContainer"><img src={url} alt="Could not Load the Motorcycle Image" /></div>
    </>)}
    
</div>)};


export default ItemPreview;