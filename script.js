function clock(){


    const day = document.querySelector('#day')
    const hour = document.querySelector('#hour')
    const minute = document.querySelector('#minute')
    const second = document.querySelector('#second')
    const year = document.querySelector('#year')
    
    const futureTime = new Date('December 31,2059 00:00:00').getTime()
    const now = new Date().getTime()
    const diff = futureTime-now
    
    const s = 1000
    const m = s * 60
    const h = m * 60
    const d = h * 24
    const y = d * 365
   
    const texty = Math.floor(diff / y);
    const textd = Math.floor((diff % y) / d);
    const texth = Math.floor((diff % d) / h);
    const textm = Math.floor((diff % h) / m);
    const texts = Math.floor((diff % m) / s);

    year.innerText = texty
    day.innerText = textd
    hour.innerText = texth
    minute.innerText = textm
    second.innerText = texts

    const yy = document.querySelector('.y').innerText = 'Years'
    const dd = document.querySelector('.d').innerText= 'Days'
    const hh = document.querySelector('.h').innerText= 'Hours'
    const mm = document.querySelector('.m').innerText= 'Minutes'
    const ss = document.querySelector('.s').innerText= 'Seconds'

    console.log(textd)
    console.log(texth)
    console.log(textm)
    console.log(texts)
    console.log(texty)

}

setInterval(clock,1000)



