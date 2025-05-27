function coneVolumeAndSurface (radius, hight) {
    let volume = 1/3 * Math.PI * Math.pow(radius, 2) * hight;
    let slantHeight = Math.sqrt(Math.pow(radius, 2) + (Math.pow(hight, 2)));
    let coneArea = (Math.PI * Math.pow(radius, 2)) + (Math.PI * radius * slantHeight);
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${coneArea.toFixed(4)}`);    
}

coneVolumeAndSurface(3.3, 7.8)