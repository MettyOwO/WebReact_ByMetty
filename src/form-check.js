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
        <form>
            <span></span>
            {
                styles.map((st,i) =>{
                    return(
                        <div>
                            <input type="checkbox" id={'check' + i} value = {st}/>
                            <lable></lable>
                        </div>
                    )
                })
            }
            <br/>
            <span></span>
            {
                sizes


            }
        </form>
    )
}