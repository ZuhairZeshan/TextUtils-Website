import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleclick=()=>{
        let newtext=text.toUpperCase();
        settext(newtext);
        props.showalert('Text is Converted to Upper Case','Success');
    }
    const handleclick2=()=>{
        let newtext=text.toLowerCase();
        settext(newtext);
        props.showalert("Text is Converted to Lower Case","Success");
    }
    const handleclick3=()=>{
        let newtext='';
        settext(newtext);
        props.showalert("Text is Cleared","Success");
    }
    const handleclick4=()=>{
        var text=document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Text is Copied","Success");
    }
    const handlechange=(event)=>{
        console.log("On change");
        settext(event.target.value)
    }
    


    const [text,settext]=useState('');
    //setText("Enter Text");
  return (
    <>
        <div className='container'>
            <h1 className={`text-${props.mode == 'dark' ? 'light' : 'dark'}`}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handlechange} id="mybox" rows="8"></textarea>
            </div>
            
            <button className='btn btn-primary mx-2 my-1' onClick={handleclick}>Covert to Upper-Case</button>
            <button className='btn btn-primary mx-2 my-1' onClick={handleclick2}>Covert to Lower-Case</button>
            <button className='btn btn-primary mx-2 my-1' onClick={handleclick3}>Clear Text</button>
            <button className='btn btn-primary mx-2 my-1' onClick={handleclick4}>Copy Text</button>
        </div>

        <div className='container'>
            <h1 className={`text-${props.mode == 'dark' ? 'light' : 'dark'}`}>Your Text Summary</h1>
            <p className={`text-${props.mode == 'dark' ? 'light' : 'dark'}`}>{text.split(" ").filter((element)=>{ return element.length !== 0 }).length} Words and {text.length} Characters</p>
            <h3 className={`text-${props.mode == 'dark' ? 'light' : 'dark'}`}>Preview:</h3>
            <p className={`text-${props.mode == 'dark' ? 'light' : 'dark'}`}>{text}</p>
        </div>
    </>
  )
}
