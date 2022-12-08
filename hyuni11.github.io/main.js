document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.querySelector('#deco');
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(0, 60);
    ctx.lineTo(0,0);
    ctx.lineTo(180,0);
    ctx.lineTo(220,60);
    ctx.lineTo(400,60);
    
    ctx.strokeStyle='#000';
    // ctx.lineWidth = '2'

    ctx.stroke()
})