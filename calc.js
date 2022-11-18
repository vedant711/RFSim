window.onload=()=> {
    // var draw_wave = document.getElementById('waveguide');
    // var eplane = document.getElementById('eplanetee');
    // var hplane = document.getElementById('hplanetee');
    var canvas = document.getElementById('canvas');
    let last_selected=0;
    let comp_num=0;
    var ep_button = document.getElementById('e');
    var hp_button = document.getElementById('h');
    var wave_button = document.getElementById('w');
    let p1=0; let p2=0;
    let tee_ip = 1;


    ep_button.onclick=()=> {
        if (last_selected===0) {
            document.getElementById('ei').style.display='block';
            canvas.innerHTML+='<div class="eplanetee" id="' + comp_num + '" style="top:100px;left:100px"><div class="line"></div><div class="circle"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'

            
        }

        if (last_selected===1) {
            canvas.innerHTML+='<div class="eplanetee" id="' + comp_num + '" style="top:100px;left:100px"><div class="line"></div><div class="circle"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
            document.getElementById('eaw').style.display='block';


        }

        if (last_selected===2) {
            document.getElementById('eae').style.display='block';
            canvas.innerHTML+='<div class="eplanetee" id="' + comp_num + '" style="top:100px;left:100px"><div class="line"></div><div class="circle"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
        }

        if (last_selected===3) {
            document.getElementById('eae').style.display='block';
            canvas.innerHTML+='<div class="eplanetee" id="' + comp_num + '" style="top:100px;left:100px"><div class="line"></div><div class="circle"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'

        }
        last_selected=2
    }

    wave_button.onclick=()=> {
        if (last_selected===0) {
            document.getElementById('wi').style.display='block';
            canvas.innerHTML+='<div class="waveguide" id="' + comp_num + '" style="top:100px;left:100px"><div class="line"></div><div class="rectangle"></div><div class="line" id="line' + comp_num + '"></div></div>';
            
        }
        if (last_selected===1) {
            document.getElementById('waw').style.display='block';
            canvas.innerHTML+='<div class="waveguide" id="' + comp_num + '" style="top:100px;left:100px"><div class="line"></div><div class="rectangle"></div><div class="line" id="line' + comp_num + '"></div></div>';


        }

        if (last_selected===2) {
            document.getElementById('wae').style.display='block';
            canvas.innerHTML+='<div class="waveguide" id="' + comp_num + '" style="top:100px;left:100px"><div class="line"></div><div class="rectangle"></div><div class="line" id="line' + comp_num + '"></div></div>';

        }

        if (last_selected===3) {
            document.getElementById('wae').style.display='block';
            canvas.innerHTML+='<div class="waveguide" id="' + comp_num + '" style="top:100px;left:100px"><div class="line"></div><div class="rectangle"></div><div class="line" id="line' + comp_num + '"></div></div>';

        }
        last_selected=1

    }

    hp_button.onclick=()=> {
        if (last_selected===0) {
            document.getElementById('hi').style.display='block';
            canvas.innerHTML+='<div class="hplanetee" id="hplanetee" style="top:100px;left:100px"><div class="line"></div><div class="square"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
        }
        if (last_selected===1) {
            document.getElementById('haw').style.display='block';
            canvas.innerHTML+='<div class="hplanetee" id="hplanetee" style="top:100px;left:100px"><div class="line"></div><div class="square"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'


        }
        if (last_selected===2) {
            document.getElementById('hah').style.display='block';
            canvas.innerHTML+='<div class="hplanetee" id="hplanetee" style="top:100px;left:100px"><div class="line"></div><div class="square"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
            
        }
        if (last_selected===3) {
            document.getElementById('hah').style.display='block';
            canvas.innerHTML+='<div class="hplanetee" id="hplanetee" style="top:100px;left:100px"><div class="line"></div><div class="square"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
            
        }
        last_selected=3
        

    }

    // ep_button.onclick=()=> {
    //     if (last_selected===0) {
    //         canvas.innerHTML+='<div class="eplanetee" id="' + comp_num + '" style="top:100px;left:100px"><div class="line"></div><div class="circle"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
    //         comp_num++;
    //     }
    //     if (last_selected==1) {
    //         // let id = document.getElementById(String(comp_num-1));
    //         // let style = getComputedStyle(id);
    //         // let left = style.right;
    //         // let top = style.top;
    //         // console.log(left)
    //         // console.log(top);
    //         canvas.innerHTML+='<div class="eplanetee" id="' + comp_num + '"><div class="line"></div><div class="circle"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
    //         console.log(document.getElementById(String(comp_num)).style.left) ;
    //         comp_num++;

    //         p1,p2 = eplanetee_calc(z1,z2,p1)
            
    //     }

    //     if (last_selected==2) {
    //         canvas.innerHTML+='<div class="eplanetee" id="' + comp_num + '"><div class="line"></div><div class="circle"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
    //         comp_num++;

    //         if (tee_ip == 1) {
    //             p1,p2 = eplanetee_calc(z1,z2,p1)

    //         }
    //         if (tee_ip ==2) {
    //             p1,p2 = eplanetee_calc(z1,z2,p2)

    //         } 
    //     }

    //     if (last_selected==3) {
    //         canvas.innerHTML+='<div class="eplanetee" id="' + comp_num + '"><div class="line"></div><div class="circle"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
    //         comp_num++;

    //         if (tee_ip ==1) {
    //             p1,p2 = eplanetee_calc(z1,z2,p1)

    //         }
    //         if (tee_ip ==2) {
    //             p1,p2 = eplanetee_calc(z1,z2,p2)

    //         }
    //     }
    //     // eplane.style.display='flex';
    //     last_selected=2

    // }

    // hp_button.onclick=()=> {
    //     if (last_selected==0){
    //         canvas.innerHTML+='<div class="hplanetee" id="hplanetee" style="top:100px;left:100px"><div class="line"></div><div class="square"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
    //     }
    //     if (last_selected==1) {
    //         // let id = document.getElementById(String(comp_num-1));
    //         // let style = getComputedStyle(id);
    //         // let left = style.right;
    //         // let top = style.top;
    //         // console.log(left)
    //         // console.log(top);
    //         canvas.innerHTML+='<div class="hplanetee" id="' + comp_num + '"><div class="line"></div><div class="square"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
    //         console.log(document.getElementById(String(comp_num)).style.left) ;
    //         comp_num++;

    //         p1,p2=hplanetee_calc(z1,z2,p1)
    //     }
    //     if(last_selected==2) {
    //         canvas.innerHTML+='<div class="hplanetee" id="hplanetee"><div class="line"></div><div class="square"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
    //         comp_num++;

    //         if (tee_ip ==1) {
    //             p1,p2 = hplanetee_calc(z1,z2,p1)

    //         }
    //         if (tee_ip ==2) {
    //             p1,p2 = hplanetee_calc(z1,z2,p2)

    //         }
    //     }

    //     if(last_selected==3) {
    //         canvas.innerHTML+='<div class="hplanetee" id="hplanetee"><div class="line"></div><div class="square"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
    //         comp_num++;

    //         if (tee_ip ==1) {
    //             p1,p2 = hplanetee_calc(z1,z2,p1)

    //         }
    //         if (tee_ip ==2) {
    //             p1,p2 = hplanetee_calc(z1,z2,p2)

    //         }
    //     }
    //     last_selected=3

    // }

    // wave_button.onclick=()=> {
    //     // draw_wave.style.display='flex';
    //     if (last_selected==0) {
    //         canvas.innerHTML+='<div class="waveguide" id="' + comp_num + '" style="top:100px;left:100px"><div class="line"></div><div class="rectangle"></div><div class="line" id="line' + comp_num + '"></div></div>';
    //         comp_num++
    //     }
    //     if (last_selected==1) {
    //         // let id = document.getElementById(String(comp_num-1));
    //         // let style = getComputedStyle(id);
    //         // let left = style.right;
    //         // let top = style.top;
    //         // console.log(left)
    //         // console.log(top);
    //         canvas.innerHTML+='<div class="waveguide" id="' + comp_num + '"><div class="line"></div><div class="rectangle"></div><div class="line" id="line"></div></div>';
    //         console.log(document.getElementById(String(comp_num)).style.left) ;
    //         comp_num++

    //         p1= waveguide_calc(p1,il)
    //     }
    //     if (last_selected==2) {
    //         canvas.innerHTML+='<div class="waveguide" id="' + comp_num + '"><div class="line"></div><div class="rectangle"></div><div class="line" id="line' + comp_num + '"></div></div>';
    //         comp_num++;

    //         if (tee_ip ==1) {
    //             p1 = waveguide_calc(p1,il)

    //         }
    //         if (tee_ip ==2) {
    //             p2 = waveguide_calc(p1,il)


    //         }            
    //     }
    //     if (last_selected==3) {
    //         canvas.innerHTML+='<div class="waveguide" id="' + comp_num + '"><div class="line"></div><div class="rectangle"></div><div class="line" id="line' + comp_num + '"></div></div>';
    //         comp_num++;

    //         if (tee_ip ==1) {
    //             p1 = waveguide_calc(p1,il)

    //         }
    //         if (tee_ip ==2) {
    //             p2 = waveguide_calc(p1,il)


    //         } 
    //     }
    //     last_selected=1

    // }

}