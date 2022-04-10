(function strColor(color){
    switch (color){
        case 'yellow':
        case 'pink':
        case 'orange':
            return console.log('from the function "light color"');
            
        case 'purple':
        case 'brown':
            return console.log('from the function "dark color"');
        default :
            return console.log('Unknown color');
    }
})('pink');