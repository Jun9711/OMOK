document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.querySelector('#deco');
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(0, 60);
    ctx.lineTo(0,0);
    ctx.lineTo(170,0);
    ctx.lineTo(230,60);
    ctx.lineTo(400,60);
    
    ctx.strokeStyle='--mg';

    ctx.stroke()
})