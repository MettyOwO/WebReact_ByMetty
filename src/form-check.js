import React from "react";

export default function FormCheck(){
    const switchReq = React.useRef()
    const styles = ['bold','italic','underline']
    const sizes = ['small','medium','large','larger']
    let checkedStyle = []
    let checkedSize = ''

    const onChangeCheck = (event) =>{
        let checked = event.target.checked
        let value = event.target.value
        let idx = checkedStyle.indexOf(value)

        if(checked && idx === -1){
            checkedStyle.push(value)
        } else{
            checkedStyle.splice(idx, 1)
        }
    }

    const onChangeRadio = (event) =>{
        checkedSize = event.target.value
    }

    const onClickButton = () =>{
        if(switchReq.current.checked){
            if(checkedStyle.length === 0){
                alert('alert1')
                return
            } else if (checkedSize === ''){
                alert('alert2')
                return
            }
        }
        let msg = 'msg1' + checkedStyle.join(',')
        msg += '\nmsg2 : ' + checkedSize
        alert(msg)
    }

    return(
        <div className="mt-4 mx-auto p-3 rounded" style={{ width:'450px', background:"#cee"}}>
        <form>
            <span></span>
            {
                styles.map((st,i) =>{
                    return(
                        <div>
                            <input type="checkbox" id={'check' + i} value = {st} className="form-check-input" onChange={onChangeCheck}/>
                            <lable htmlFor={'check'+i} className="form-check-label">{st}</lable>
                        </div>
                    )
                })
            }
            <br/>
            <span>font size:</span>&bnsp;&bnsp;
            {             
                sizes.map((sz, i) => {
                    return(
                        <div className="form-check form-check-inline mb-2">
                            <input type="radio" id={'radio'+i} name="fontSize" value={sz} className="form-check-input" onChange={onChangeRadio}/>
                            <label htmlFor={'radio'+i} className="form-check-label">{sz}</label>
                    </div>
                    )
                })
            }
            <div className="form-check form-switch mt-3">
                <input type="checkbox" id="sw" value="require" className="form-check-input" ref={switchReq}/>
                <label htmlFor="sw" className="form-check-label">require</label>
            </div>

            <div className="text-center mt-4">
                <button type="button" className="btn btn-sm btn-primary px-4" onClick={onClickButton}>OK</button>
            </div>
        </form>
    </div>    
    )
}