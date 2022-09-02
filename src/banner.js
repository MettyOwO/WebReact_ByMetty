import React from "react";
function randInt(min,max){
    let x = (max- min) + 1
    return min + Math.floor(Math.random() * x)
}

export default function Banner(){
    const r = randInt(1,3)
    let banner = ''
    let url = ''

    switch (r) {
        case 1:
            banner = './banners/w644.jpg'
            url = 'https://www.kfc.co.th/'
            break
        case 2:
            banner = './banners/06.jpg'
            url = 'https://www.mcdonalds.co.th/'
            break
        case 3:
            banner = './banners/07.jpg'
            url = 'https://www.mkrestaurant.com/th'
            break
    default: break                    
    }

    const bannerClick = () => {
        window.open(url)
    }

    return(
        <div style={{margin: '20px', textAlign: 'center'}}>
            <img src={banner} onClick={bannerClick} style={{cursor:'pointer'}}
            alt ="banner"/>
        </div>
    )
}