window.onload = () => {
    let ep_button1 = document.getElementById('e');
        var hp_button1 = document.getElementById('h');
        var wave_button1 = document.getElementById('w');
        var edit = document.getElementById('edit')
        var canvas = document.getElementById('canvas')
        var body = document.getElementById('nb');


        wave_button1.onclick = () => {
            if (last_selected===0 || comp_num===0) {
            document.getElementById('wi').style.display='block';
            // canvas.innerHTML+='<div class="waveguide" id="' + comp_num + 'ele" style="top:200px;left:100px" onmouseover="hover_effect(this.id)" onmouseout="normal_effect"><div class="line"></div><div class="rectangle"></div><div class="line" ></div></div>';
            
        }
        else if (last_selected===1) {
            document.getElementById('waw').style.display='block';
            // canvas.innerHTML+='<div class="waveguide" id="' + comp_num + 'ele" style="top:200px;left:100px" onmouseover="hover_effect(this.id)" onmouseout="normal_effect"><div class="line"></div><div class="rectangle"></div><div class="line"></div></div>';


        }

        else if (last_selected===2) {
            document.getElementById('wae').style.display='block';
            // canvas.innerHTML+='<div class="waveguide" id="' + comp_num + 'ele" style="top:200px;left:100px" onmouseover="hover_effect(this.id)" onmouseout="normal_effect"><div class="line"></div><div class="rectangle"></div><div class="line"></div></div>';

        }

        else if (last_selected===3) {
            document.getElementById('wae').style.display='block';
            // canvas.innerHTML+='<div class="waveguide" id="' + comp_num + 'ele" style="top:200px;left:100px" onmouseover="hover_effect(this.id)" onmouseout="normal_effect"><div class="line"></div><div class="rectangle"></div><div class="line"></div></div>';

        }
        // let edit = document.getElementById('edit');
        //     n = edit.textContent
        //     console.log(n)
            // if (cl===0) {
            body.classList.add('popup');

                last_selected=1

                edit.innerHTML += '<p id="' + comp_num + '" onclick="getId(this.id)">' + String(comp_num+1) + ' Waveguide</p>'
                comp_num++;
                console.log(cl)
            // } else {
            //     cl=0
            //     console.log(cl)
            // }
            
            


        }
        

        ep_button1.onclick = () => {
            if (last_selected===0 || comp_num===0) {
            document.getElementById('ei').style.display='block';
            // canvas.innerHTML+='<div class="eplanetee" id="' + comp_num + 'ele" style="top:200px;left:100px" onmouseover="hover_effect(this.id)" onmouseout="normal_effect"><div class="line"></div><div class="circle"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
            
        }

        else if (last_selected===1) {
            // canvas.innerHTML+='<div class="eplanetee" id="' + comp_num + 'ele" style="top:200px;left:100px" onmouseover="hover_effect(this.id)"  onmouseout="normal_effect"><div class="line"></div><div class="circle"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
            document.getElementById('eaw').style.display='block';


        }

        else if (last_selected===2) {
            document.getElementById('eae').style.display='block';
            // canvas.innerHTML+='<div class="eplanetee" id="' + comp_num + 'ele" style="top:200px;left:100px" onmouseover="hover_effect(this.id)" onmouseout="normal_effect"><div class="line"></div><div class="circle"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
            
        }

        else if (last_selected===3) {
            document.getElementById('eae').style.display='block';
            // canvas.innerHTML+='<div class="eplanetee" id="' + comp_num + 'ele" style="top:200px;left:100px" onmouseover="hover_effect(this.id)" onmouseout="normal_effect"><div class="line"></div><div class="circle"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'

        }
        // if (cl===0) {
            body.classList.add('popup');

            last_selected=2
            edit.innerHTML += '<p id="' + comp_num + '" onclick="getId(this.id)">' + String(comp_num+1) + ' E Plane Tee</p>'
            comp_num++;
        // } else {
        //     cl=0
        // }
        
        }

        hp_button1.onclick = () => {
            if (last_selected===0 || comp_num===0) {
            document.getElementById('hi').style.display='block';
            // canvas.innerHTML+='<div class="hplanetee" id="' + comp_num + 'ele" style="top:200px;left:100px" onmouseover="hover_effect(this.id)" onmouseout="normal_effect"><div class="line"></div><div class="square"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
            
        }
        else if (last_selected===1) {
            document.getElementById('haw').style.display='block';
            // canvas.innerHTML+='<div class="hplanetee" id="' + comp_num + 'ele" style="top:200px;left:100px" onmouseover="hover_effect(this.id)" onmouseout="normal_effect"><div class="line"></div><div class="square"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'


        }
        else if (last_selected===2) {
            document.getElementById('hah').style.display='block';
            // canvas.innerHTML+='<div class="hplanetee" id="' + comp_num + 'ele" style="top:200px;left:100px" onmouseover="hover_effect(this.id)" onmouseout="normal_effect"><div class="line"></div><div class="square"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
            
        }
        else if (last_selected===3) {
            document.getElementById('hah').style.display='block';
            // canvas.innerHTML+='<div class="hplanetee" id="' + comp_num + 'ele" style="top:200px;left:100px" onmouseover="hover_effect(this.id)" onmouseout="normal_effect"><div class="line"></div><div class="square"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
            
        }
            // if (cl===0) {
            body.classList.add('popup');

                last_selected=3
                // comp_num++;
                edit.innerHTML += '<p id="' + comp_num + '" onclick="getId(this.id)">' + String(comp_num+1) + ' H Plane Tee</p>'
                comp_num++;

            // }else {
            //     cl=0
            // }

        }

        // $('.close').click( () => {
        //     $('.form').hide()
        //     // var edit = document.getElementById('edit')
        //     comp_num--;

        //     let p = edit.innerHTML
        //     console.log(typeof p)
        //     console.log('<p id="' + comp_num + '" onclick="getId(this.id)">' + String(comp_num+1) + ' Waveguide</p>')
        //     if (last_selected===1){
        //         // let rem = '<p id="' + comp_num + '" onclick="getId(this.id)">' + String(comp_num+1) + ' Waveguide</p>'
        //         // p.replaceAll(rem,'')
        //         // console.log('hi')
        //         p-= '<p id="' + comp_num + '" onclick="getId(this.id)">' + String(comp_num+1) + ' Waveguide</p>';     
        //     }
        //         else if (last_selected===2){
        //             p.replace('<p id="' + comp_num + '" onclick="getId(this.id)">' + String(comp_num+1) + ' E Plane Tee</p>','')
        //             }
        //     else if (last_selected===3){
        //     p.replace('<p id="' + comp_num + '" onclick="getId(this.id)">' + String(comp_num+1) + ' H Plane Tee</p>','')
        //     }
        //     var body = document.getElementById('nb');
        //     body.classList.remove('popup');
        //     console.log(p)

        // });

        // ep_button1.onclick=hplane_call()
        // hp_button1.onclick=eplane_call()
        // wave_button1.onclick=wave_call()

}
    // // var draw_wave = document.getElementById('waveguide');
    // // var eplane = document.getElementById('eplanetee');
    // // var hplane = document.getElementById('hplanetee');
    // var canvas = document.getElementById('canvas');
    // let last_selected=0;
    // let comp_num=0;
    // var ep_button = document.getElementById('e');
    // var hp_button = document.getElementById('h');
    // var wave_button = document.getElementById('w');
    // console.log(ep_button)
    // // var edit = document.getElementById('edit')


    // ep_button.onclick=()=> {
    //     if (last_selected===0) {
    //         document.getElementById('ei').style.display='block';
    //         canvas.innerHTML+='<div class="eplanetee" id="' + comp_num + '" style="top:200px;left:100px"><div class="line"></div><div class="circle"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
            
    //     }

    //     if (last_selected===1) {
    //         canvas.innerHTML+='<div class="eplanetee" id="' + comp_num + '" style="top:200px;left:100px"><div class="line"></div><div class="circle"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
    //         document.getElementById('eaw').style.display='block';


    //     }

    //     if (last_selected===2) {
    //         document.getElementById('eae').style.display='block';
    //         canvas.innerHTML+='<div class="eplanetee" id="' + comp_num + '" style="top:200px;left:100px"><div class="line"></div><div class="circle"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
            
    //     }

    //     if (last_selected===3) {
    //         document.getElementById('eae').style.display='block';
    //         canvas.innerHTML+='<div class="eplanetee" id="' + comp_num + '" style="top:200px;left:100px"><div class="line"></div><div class="circle"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'

    //     }
    //     last_selected=2

    //     comp_num++;
    // }

    // wave_button.onclick=()=> {
    //     if (last_selected===0) {
    //         document.getElementById('wi').style.display='block';
    //         canvas.innerHTML+='<div class="waveguide" id="' + comp_num + '" style="top:200px;left:100px"><div class="line"></div><div class="rectangle"></div><div class="line" ></div></div>';
            
    //     }
    //     if (last_selected===1) {
    //         document.getElementById('waw').style.display='block';
    //         canvas.innerHTML+='<div class="waveguide" id="' + comp_num + '" style="top:200px;left:100px"><div class="line"></div><div class="rectangle"></div><div class="line"></div></div>';


    //     }

    //     if (last_selected===2) {
    //         document.getElementById('wae').style.display='block';
    //         canvas.innerHTML+='<div class="waveguide" id="' + comp_num + '" style="top:200px;left:100px"><div class="line"></div><div class="rectangle"></div><div class="line"></div></div>';

    //     }

    //     if (last_selected===3) {
    //         document.getElementById('wae').style.display='block';
    //         canvas.innerHTML+='<div class="waveguide" id="' + comp_num + '" style="top:200px;left:100px"><div class="line"></div><div class="rectangle"></div><div class="line"></div></div>';

    //     }
    //     last_selected=1;
    //     comp_num++;


    // }

    // hp_button.onclick=()=> {
    //     if (last_selected===0) {
    //         document.getElementById('hi').style.display='block';
    //         canvas.innerHTML+='<div class="hplanetee" id="' + comp_num + '" style="top:200px;left:100px"><div class="line"></div><div class="square"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
            
    //     }
    //     if (last_selected===1) {
    //         document.getElementById('haw').style.display='block';
    //         canvas.innerHTML+='<div class="hplanetee" id="' + comp_num + '" style="top:200px;left:100px"><div class="line"></div><div class="square"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'


    //     }
    //     if (last_selected===2) {
    //         document.getElementById('hah').style.display='block';
    //         canvas.innerHTML+='<div class="hplanetee" id="' + comp_num + '" style="top:200px;left:100px"><div class="line"></div><div class="square"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
            
    //     }
    //     if (last_selected===3) {
    //         document.getElementById('hah').style.display='block';
    //         canvas.innerHTML+='<div class="hplanetee" id="' + comp_num + '" style="top:200px;left:100px"><div class="line"></div><div class="square"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
            
    //     }
    //     last_selected=3;

    //     comp_num++;

        

    // }

    // // $(document).on('contextmenu', 'div', function (e) {
    // //     //check that the right mouse button was used
    // //     if (e.which === 3) {
    // //         //log the [id] attribute of the element that was right-clicked on
    // //         console.log($(this).attr('id'));
    // //     }
    // // });

    // // ep_button.onclick=()=> {
    // //     if (last_selected===0) {
    // //         canvas.innerHTML+='<div class="eplanetee" id="' + comp_num + '" style="top:100px;left:100px"><div class="line"></div><div class="circle"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
    // //         comp_num++;
    // //     }
    // //     if (last_selected==1) {
    // //         // let id = document.getElementById(String(comp_num-1));
    // //         // let style = getComputedStyle(id);
    // //         // let left = style.right;
    // //         // let top = style.top;
    // //         // console.log(left)
    // //         // console.log(top);
    // //         canvas.innerHTML+='<div class="eplanetee" id="' + comp_num + '"><div class="line"></div><div class="circle"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
    // //         console.log(document.getElementById(String(comp_num)).style.left) ;
    // //         comp_num++;

    // //         p1,p2 = eplanetee_calc(z1,z2,p1)
            
    // //     }

    // //     if (last_selected==2) {
    // //         canvas.innerHTML+='<div class="eplanetee" id="' + comp_num + '"><div class="line"></div><div class="circle"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
    // //         comp_num++;

    // //         if (tee_ip == 1) {
    // //             p1,p2 = eplanetee_calc(z1,z2,p1)

    // //         }
    // //         if (tee_ip ==2) {
    // //             p1,p2 = eplanetee_calc(z1,z2,p2)

    // //         } 
    // //     }

    // //     if (last_selected==3) {
    // //         canvas.innerHTML+='<div class="eplanetee" id="' + comp_num + '"><div class="line"></div><div class="circle"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
    // //         comp_num++;

    // //         if (tee_ip ==1) {
    // //             p1,p2 = eplanetee_calc(z1,z2,p1)

    // //         }
    // //         if (tee_ip ==2) {
    // //             p1,p2 = eplanetee_calc(z1,z2,p2)

    // //         }
    // //     }
    // //     // eplane.style.display='flex';
    // //     last_selected=2

    // // }

    // // hp_button.onclick=()=> {
    // //     if (last_selected==0){
    // //         canvas.innerHTML+='<div class="hplanetee" id="hplanetee" style="top:100px;left:100px"><div class="line"></div><div class="square"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
    // //     }
    // //     if (last_selected==1) {
    // //         // let id = document.getElementById(String(comp_num-1));
    // //         // let style = getComputedStyle(id);
    // //         // let left = style.right;
    // //         // let top = style.top;
    // //         // console.log(left)
    // //         // console.log(top);
    // //         canvas.innerHTML+='<div class="hplanetee" id="' + comp_num + '"><div class="line"></div><div class="square"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
    // //         console.log(document.getElementById(String(comp_num)).style.left) ;
    // //         comp_num++;

    // //         p1,p2=hplanetee_calc(z1,z2,p1)
    // //     }
    // //     if(last_selected==2) {
    // //         canvas.innerHTML+='<div class="hplanetee" id="hplanetee"><div class="line"></div><div class="square"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
    // //         comp_num++;

    // //         if (tee_ip ==1) {
    // //             p1,p2 = hplanetee_calc(z1,z2,p1)

    // //         }
    // //         if (tee_ip ==2) {
    // //             p1,p2 = hplanetee_calc(z1,z2,p2)

    // //         }
    // //     }

    // //     if(last_selected==3) {
    // //         canvas.innerHTML+='<div class="hplanetee" id="hplanetee"><div class="line"></div><div class="square"></div><div class="op"><div class="opline top"></div><div class="opline bottom"></div></div></div>'
    // //         comp_num++;

    // //         if (tee_ip ==1) {
    // //             p1,p2 = hplanetee_calc(z1,z2,p1)

    // //         }
    // //         if (tee_ip ==2) {
    // //             p1,p2 = hplanetee_calc(z1,z2,p2)

    // //         }
    // //     }
    // //     last_selected=3

    // // }

    // // wave_button.onclick=()=> {
    // //     // draw_wave.style.display='flex';
    // //     if (last_selected==0) {
    // //         canvas.innerHTML+='<div class="waveguide" id="' + comp_num + '" style="top:100px;left:100px"><div class="line"></div><div class="rectangle"></div><div class="line" id="line' + comp_num + '"></div></div>';
    // //         comp_num++
    // //     }
    // //     if (last_selected==1) {
    // //         // let id = document.getElementById(String(comp_num-1));
    // //         // let style = getComputedStyle(id);
    // //         // let left = style.right;
    // //         // let top = style.top;
    // //         // console.log(left)
    // //         // console.log(top);
    // //         canvas.innerHTML+='<div class="waveguide" id="' + comp_num + '"><div class="line"></div><div class="rectangle"></div><div class="line" id="line"></div></div>';
    // //         console.log(document.getElementById(String(comp_num)).style.left) ;
    // //         comp_num++

    // //         p1= waveguide_calc(p1,il)
    // //     }
    // //     if (last_selected==2) {
    // //         canvas.innerHTML+='<div class="waveguide" id="' + comp_num + '"><div class="line"></div><div class="rectangle"></div><div class="line" id="line' + comp_num + '"></div></div>';
    // //         comp_num++;

    // //         if (tee_ip ==1) {
    // //             p1 = waveguide_calc(p1,il)

    // //         }
    // //         if (tee_ip ==2) {
    // //             p2 = waveguide_calc(p1,il)


    // //         }            
    // //     }
    // //     if (last_selected==3) {
    // //         canvas.innerHTML+='<div class="waveguide" id="' + comp_num + '"><div class="line"></div><div class="rectangle"></div><div class="line" id="line' + comp_num + '"></div></div>';
    // //         comp_num++;

    // //         if (tee_ip ==1) {
    // //             p1 = waveguide_calc(p1,il)

    // //         }
    // //         if (tee_ip ==2) {
    // //             p2 = waveguide_calc(p1,il)


    // //         } 
    // //     }
    // //     last_selected=1

    // // }

