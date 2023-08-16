import './write.css';

export default function Write() {
  return (
    <div className = 'write'>
    <img src="https://media.istockphoto.com/id/455011625/photo/panorama-of-the-foggy-winter-mountains.webp?b=1&s=170667a&w=0&k=20&c=gGIhUBARXhbXR07ogfpE0gjMSO_YcSwoi-RNuL9AvUo=" 
    alt="" className="writeImg" />

      <form className="writeForm">
        <div className="writeFormGroup">
           <label htmlFor="fileInput"> <i className="writeIcon fa-solid fa-plus"></i></label>
          <input type="file" id='fileInput' className ="" style={{display:'none'}}/>
         
          <input type="text"   placeholder = "Title"  className ="writeInput" autoFocus={true}/>
        </div>

        <div className="writeFormGroup">
          <textarea  
             placeholder ="Tell your story..."
            type="text"
            className = "writeInput writeText"
         /> 
        </div>

        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}
