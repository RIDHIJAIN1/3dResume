
gsap.registerPlugin(ScrollTrigger);

function locomotive() {
   
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener(
    "resize",
    () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    }
    );


    function files(index){
        var data = `
        ./male0001.webp
        ./male0002.webp
        ./male0003.webp
        ./male0004.webp
        ./male0005.webp
        ./male0006.webp
        ./male0007.webp
        ./male0008.webp
        ./male0009.webp
        ./male0010.webp
        ./male0011.webp
        ./male0012.webp
        ./male0013.webp
        ./male0014.webp
        ./male0015.webp
        ./male0016.webp
        ./male0017.webp
        ./male0018.webp
        ./male0019.webp
        ./male0020.webp
        ./male0021.webp
        ./male0022.webp
        ./male0023.webp
        ./male0024.webp
        ./male0025.webp
        ./male0026.webp
        ./male0027.webp
        ./male0028.webp
        ./male0029.webp
        ./male0030.webp
        ./male0031.webp
        ./male0032.webp
        ./male0033.webp
        ./male0034.webp
        ./male0035.webp
        ./male0036.webp
        ./male0037.webp
        ./male0038.webp
        ./male0039.webp
        ./male0040.webp
        ./male0041.webp
        ./male0042.webp
        ./male0043.webp
        ./male0044.webp
        ./male0045.webp
        ./male0046.webp
        ./male0047.webp
        ./male0048.webp
        ./male0049.webp
        ./male0050.webp
        ./male0051.webp
        ./male0052.webp
        ./male0053.webp
        ./male0054.webp
        ./male0055.webp
        ./male0056.webp
        ./male0057.webp
        ./male0058.webp
        ./male0059.webp
        ./male0060.webp
        ./male0061.webp
        ./male0062.webp
        ./male0063.webp
        ./male0064.webp
        ./male0065.webp
        ./male0066.webp
        ./male0067.webp
        ./male0068.webp
        ./male0069.webp
        ./male0070.webp
        ./male0071.webp
        ./male0072.webp
        ./male0073.webp
        ./male0074.webp
        ./male0075.webp
        ./male0076.webp
        ./male0077.webp
        ./male0078.webp
        ./male0079.webp
        ./male0080.webp
        ./male0081.webp
        ./male0082.webp
        ./male0083.webp
        ./male0084.webp
        ./male0085.webp
        ./male0086.webp
        ./male0087.webp
        ./male0088.webp
        ./male0089.webp
        ./male0090.webp
        ./male0091.webp
        ./male0092.webp
        ./male0093.webp
        ./male0094.webp
        ./male0095.webp
        ./male0096.webp
        ./male0097.webp
        ./male0098.webp
        ./male0099.webp
        ./male0100.webp
        ./male0101.webp
        ./male0102.webp
        ./male0103.webp
        ./male0104.webp
        ./male0105.webp
        ./male0106.webp
        ./male0107.webp
        ./male0108.webp
        ./male0109.webp
        ./male0110.webp
        ./male0111.webp
        ./male0112.webp
        ./male0113.webp
        ./male0114.webp
        ./male0115.webp
        ./male0116.webp
        ./male0117.webp
        ./male0118.webp
        ./male0119.webp
        ./male0120.webp
        ./male0121.webp
        ./male0122.webp
        ./male0123.webp
        ./male0124.webp
        ./male0125.webp
        ./male0126.webp
        ./male0127.webp
        ./male0128.webp
        ./male0129.webp
        ./male0130.webp
        ./male0131.webp
        ./male0132.webp
        ./male0133.webp
        ./male0134.webp
        ./male0135.webp
        ./male0136.webp
        ./male0137.webp
        ./male0138.webp
        ./male0139.webp
        ./male0140.webp
        ./male0141.webp
        ./male0142.webp
        ./male0143.webp
        ./male0144.webp
        ./male0145.webp
        ./male0146.webp
        ./male0147.webp
        ./male0148.webp
        ./male0149.webp
        ./male0150.webp
        ./male0151.webp
        ./male0152.webp
        ./male0153.webp
        ./male0154.webp
        ./male0155.webp
        ./male0156.webp
        ./male0157.webp
        ./male0158.webp
        ./male0159.webp
        ./male0160.webp
        ./male0161.webp
        ./male0162.webp
        ./male0163.webp
        ./male0164.webp
        ./male0165.webp
        ./male0166.webp
        ./male0167.webp
        ./male0168.webp
        ./male0169.webp
        ./male0170.webp
        ./male0171.webp
        ./male0172.webp
        ./male0173.webp
        ./male0174.webp
        ./male0175.webp
        ./male0176.webp
        ./male0177.webp
        ./male0178.webp
        ./male0179.webp
        ./male0180.webp
        ./male0181.webp
        ./male0182.webp
        ./male0183.webp
        ./male0184.webp
        ./male0185.webp
        ./male0186.webp
        ./male0187.webp
        ./male0188.webp
        ./male0189.webp
        ./male0190.webp
        ./male0191.webp
        ./male0192.webp
        ./male0193.webp
        ./male0194.webp
        ./male0195.webp
        ./male0196.webp
        ./male0197.webp
        ./male0198.webp
        ./male0199.webp
        ./male0200.webp
        ./male0201.webp
        ./male0202.webp
        ./male0203.webp
        ./male0204.webp
        ./male0205.webp
        ./male0206.webp
        ./male0207.webp
        ./male0208.webp
        ./male0209.webp
        ./male0210.webp
        ./male0211.webp
        ./male0212.webp
        ./male0213.webp
        ./male0214.webp
        ./male0215.webp
        ./male0216.webp
        ./male0217.webp
        ./male0218.webp
        ./male0219.webp
        ./male0220.webp
        ./male0221.webp
        ./male0222.webp
        ./male0223.webp
        ./male0224.webp
        ./male0225.webp
        ./male0226.webp
        ./male0227.webp
        ./male0228.webp
        ./male0229.webp
        ./male0230.webp
        ./male0231.webp
        ./male0232.webp
        ./male0233.webp
        ./male0234.webp
        ./male0235.webp
        ./male0236.webp
        ./male0237.webp
        ./male0238.webp
        ./male0239.webp
        ./male0240.webp
        ./male0241.webp
        ./male0242.webp
        ./male0243.webp
        ./male0244.webp
        ./male0245.webp
        ./male0246.webp
        ./male0247.webp
        ./male0248.webp
        ./male0249.webp
        ./male0250.webp
        ./male0251.webp
        ./male0252.webp
        ./male0253.webp
        ./male0254.webp
        ./male0255.webp
        ./male0256.webp
        ./male0257.webp
        ./male0258.webp
        ./male0259.webp
        ./male0260.webp
        ./male0261.webp
        ./male0262.webp
        ./male0263.webp
        ./male0264.webp
        ./male0265.webp
        ./male0266.webp
        ./male0267.webp
        ./male0268.webp
        ./male0269.webp
        ./male0270.webp
        ./male0271.webp
        ./male0272.webp
        ./male0273.webp
        ./male0274.webp
        ./male0275.webp
        ./male0276.webp
        ./male0277.webp
        ./male0278.webp
        ./male0279.webp
        ./male0280.webp
        ./male0281.webp
        ./male0282.webp
        ./male0283.webp
        ./male0284.webp
        ./male0285.webp
        ./male0286.webp
        ./male0287.webp
        ./male0288.webp
        ./male0289.webp
        ./male0290.webp
        ./male0291.webp
        ./male0292.webp
        ./male0293.webp
        ./male0294.webp
        ./male0295.webp
        ./male0296.webp
        ./male0297.webp
        ./male0298.webp
        ./male0299.webp
        ./male0300.webp
        `;
        return data.split("\n")[index];

    }

    const frameCount = 300;

    const images = [];

    const imageSeq = {
        frame : 1,
    };

    for(let i = 0; i<frameCount;i++){
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq,{
        frame : frameCount - 1,
        snap : "frame",
        ease : `none`,
        scrollTrigger:{
            scrub: 0.15,
            trigger : `#page1>canvas`,
            start :`top top`,
            end : `600% top`,
            scroller: `#main`,
        },
        onUpdate: render,
    });

    images[1].onload = render;


    function render(){
        scaleImage(images[imageSeq.frame],context);
    }

    function scaleImage(img , ctx){
        var canvas = ctx.canvas;
        var hRatio = canvas.width/img.width;
        var vRatio = canvas.height/img.height;
        var ratio = Math.max(hRatio , vRatio);
        var centerShift_x = (canvas.width - img.width * ratio)/2;
        var centerShift_y = (canvas.height - img.height * ratio)/2;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }

    ScrollTrigger.create({
        trigger: " #page1>canvas",
        pin: true,
        scroller : `#main`,
        start : `top top`,
        end: `600% top`

    })



gsap.to("#page2",{
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"top top",
        end:"bottom top",
        scrub:1,
        pin:true,
        // pinType:false,
        pinSpacing:false,
        marker:true,
        transform: none,
    }
})
gsap.to("#page3",{
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        start:"top top",
        end:"bottom top",
        scrub:1,
        pin:true,
        pinSpacing:false,
        marker:true,
        transform: none

    }
})
gsap.to("#page7",{
    scrollTrigger:{
        trigger:"#page7",
        scroller:"#main",
        start:"top top",
        end:"bottom top",
        scrub:1,
        pin:true,
        pinSpacing:false,
        marker:true
    }
})
gsap.to("#page8",{
    scrollTrigger:{
        trigger:"#page8",
        scroller:"#main",
        start:"top top",
        end:"bottom top",
        scrub:1,
        pin:true,
        pinSpacing:false,
        marker:true
    }
})
gsap.to("#page4",{
    scrollTrigger:{
        trigger:"#page4",
        scroller:"#main",
        start:"top top",
        end:"bottom top",
        scrub:1,
        pin:true,
        pinSpacing:false,
        marker:true
    }
})


gsap.to("#page5",{
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        start:"top top",
        end:"bottom top",
        scrub:1,
        pin:true,
        pinSpacing:false,
        marker:true
    }
})
gsap.to("#page6",{
    scrollTrigger:{
        trigger:"#page6",
        scroller:"#main",
        start:"top top",
        end:"bottom top",
        scrub:1,
        pin:true,
        pinSpacing:false,
        marker:true
    }
})


document.getElementById("downloadButton").addEventListener("click", function() {
   
    var cvUrl = "resume/Ridhi_Jain_Resume.pdf";
    
    // Create a temporary anchor element
    var tempLink = document.createElement("a");
    tempLink.href = cvUrl;
    
    // Set the download attribute to force download
    tempLink.setAttribute("download", "Ridhi_Jain_Resume.pdf");
    
    // Hide the anchor element
    tempLink.style.display = "none";
    
    // Append the anchor element to the document body
    document.body.appendChild(tempLink);
    
    // Trigger the click event to start the download
    tempLink.click();
    
    // Clean up
    document.body.removeChild(tempLink);
});



