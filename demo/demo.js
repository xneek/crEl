document.body.appendChild(crEl('section',
    crEl('h1',
        crEl('marquee',{s:'width:80px;background:#f9f9f9; float:right'},'Best!'),
        'Demo crEl lib'
    ),
    
    crEl('h2','Typography'),
    crEl('h3','Paragraph'),
    crEl('p','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
    crEl('h3','Heading'),
    [1,2,3,4,5,6].map(function(i){ return crEl('h'+i, 'Heading '+i)}),
    crEl('h3','Lists'),
    crEl('ul', [1,2,3,4,5,6].map(function(i){ return crEl('li', 'Item '+i)})),
    crEl('ol', [1,2,3,4,5,6].map(function(i){ return crEl('li', 'Item '+i)})),
    crEl('h3','Forms'),
    crEl('form',{onsubmit:function(event){event.preventDefault(); alert('Form submit!')}},
        crEl('fieldset',
            crEl('legend','A form'),
            crEl('label', {s:'display:block; margin-bottom:16px;'},  
                'Name: ',                
                crEl('input',{type:'text', required:true, placeholder:'Type your name', autofocus:'on'})
            ), 
            crEl('label', {s:'display:block; margin-bottom:16px;'},  
                'Email: ',                
                crEl('input',{type:'email', required:true, placeholder:'Type your email'})
            ), 
             crEl('label', {s:'display:block; margin-bottom:16px;'},              
                crEl('input',{type:'checkbox', required:true}),
                ' check me'
            ), 
            crEl('button',{type:'submit'},'Submit')          
        )
    ),
    
crEl('h2','SVG'),
/*
s:'  position: fixed; top: 20%; height: 60%; left: 20%; width: 60%;'
*/
    crEl('svg', {ns:'http://www.w3.org/2000/svg', viewBox:"0 0 160 160", width:"160", height:"160"},
       crEl('circle',{ns:'http://www.w3.org/2000/svg',cx:80, cy:80, r:50}),
       crEl('g',{ns:'http://www.w3.org/2000/svg',transform:'matrix(0.866, -0.5, 0.25, 0.433, 80, 80)'},
            crEl('path',{ns:'http://www.w3.org/2000/svg',d:'M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z', fill:'orange'},
                crEl('animateTransform',{
                    ns:'http://www.w3.org/2000/svg',
                    attributeName:"transform",
                    type:"rotate",
                    from:"360 0 0",
                    to:"0 0 0",
                    dur:"1s",
                    repeatCount:"indefinite"
                })
            )
       ),
       crEl('path',{ns:'http://www.w3.org/2000/svg',d:"M 50,0 A 50,50 0 0,0 -50,0Z", transform:"matrix(0.866, -0.5, 0.5, 0.866, 80, 80)"})

    )
    
))
